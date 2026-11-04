# 2026國際化辦學人力資源管理論壇 — 活動網站

純靜態網站（HTML／CSS／JavaScript），可直接放上 GitHub Pages。

## 檔案說明

| 檔案 | 用途 |
|---|---|
| `content.js` | **所有活動內容**：標題、日期、地點、協辦大學、贊助單位、嘉賓、流程（三語） |
| `i18n.js` | 介面固定文字（按鈕、表單標籤、提示訊息）三語版本 |
| `config.js` | 提問資料儲存網址及預設語言 |
| `assets/` | Logo 及嘉賓相片（目前為佔位圖） |
| `google-apps-script/Code.gs` | 提問資料儲存服務（Google 試算表） |

## 替換圖片

把正式圖片放進 `assets/`，再在 `content.js` 改檔名即可。建議尺寸：

- 活動 Logo：240 × 240 px（正方形）
- 協辦大學 Logo：320 × 120 px（橫向）
- 嘉賓相片：400 × 400 px（正方形）

## 新增贊助單位

在 `content.js` 的 `sponsors: []` 加入項目，區塊會自動出現；保持空白則不顯示。

## 設定提問儲存（Google 試算表）

1. 新建 Google 試算表 → 擴充功能 → Apps Script，貼上 `google-apps-script/Code.gs`。
2. 修改 `ADMIN_KEY` 為你的管理密碼。
3. 部署 → 新增部署作業 → 網頁應用程式；執行身分「我」，存取權「所有人」。
4. 把產生的 `/exec` 網址貼到 `config.js` 的 `QUESTION_ENDPOINT`。

主辦方可直接打開試算表查看，或在網站頁尾點「主辦方入口」，輸入管理密碼讀取及匯出 CSV。

## 發布到 GitHub Pages

上傳所有檔案到 repository → Settings → Pages → Branch 選 `main`／根目錄 → Save。

## 語言

預設語言在 `config.js` 的 `DEFAULT_LANG` 設定；亦可用網址參數指定，例如 `?lang=en`、`?lang=sc`。
