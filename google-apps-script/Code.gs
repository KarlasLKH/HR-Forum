/**
 * 現場提問儲存服務（Google Apps Script + Google 試算表）
 *
 * 1. 新建一個 Google 試算表 → 擴充功能 → Apps Script，把本檔內容貼上。
 * 2. 修改下方 ADMIN_KEY 為你自己的管理密碼。
 * 3. 部署 → 新增部署作業 → 類型「網頁應用程式」
 *    - 執行身分：我
 *    - 誰可以存取：所有人
 * 4. 複製產生的網址（以 /exec 結尾），貼到網站 config.js 的 QUESTION_ENDPOINT。
 *
 * 問題會寫入名為「Questions」的工作表；主辦方可直接打開試算表，
 * 或在網站頁尾「主辦方入口」輸入 ADMIN_KEY 讀取及匯出 CSV。
 */
const ADMIN_KEY = 'change-this-password';
const SHEET_NAME = 'Questions';
const HEADERS = ['id', 'time', 'question', 'name', 'unit', 'lang'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const data = JSON.parse(e.postData.contents || '{}');
    const question = clean_(data.question, 1000);
    if (!question) return json_({ ok: false, error: 'question_required' });
    const lang = ['tc', 'sc', 'en'].indexOf(data.lang) >= 0 ? data.lang : '';
    const sh = getSheet_();
    const id = Math.max(sh.getLastRow(), 1); // 第 1 行是標題，故編號由 1 開始
    // 前置單引號避免內容被試算表當作公式
    const safe = (s) => (/^[=+\-@]/.test(s) ? "'" + s : s);
    sh.appendRow([id, new Date().toISOString(), safe(question), safe(clean_(data.name, 80)), safe(clean_(data.unit, 120)), lang]);
    return json_({ ok: true, id: id });
  } catch (err) {
    return json_({ ok: false, error: 'server_error' });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action !== 'list') return json_({ ok: true, service: 'forum-questions' });
  if (p.key !== ADMIN_KEY) return json_({ ok: false, error: 'unauthorized' });
  const values = getSheet_().getDataRange().getValues();
  const rows = values.slice(1).map((r) => ({
    id: r[0], time: r[1] instanceof Date ? r[1].toISOString() : r[1],
    question: r[2], name: r[3], unit: r[4], lang: r[5]
  }));
  return json_({ ok: true, rows: rows });
}
