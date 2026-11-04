(function () {
  "use strict";
  const C = window.SITE_CONTENT;
  const UI = window.UI_TEXT;
  const CFG = window.SITE_CONFIG || {};
  const LANGS = ["tc", "sc", "en"];
  const HTML_LANG = { tc: "zh-Hant", sc: "zh-Hans", en: "en" };
  const LANG_LABEL = { tc: "繁體", sc: "简体", en: "EN" };

  const params = new URLSearchParams(location.search);
  let lang = LANGS.includes(params.get("lang")) ? params.get("lang") : (CFG.DEFAULT_LANG || "tc");
  let currentSpeaker = null;
  let adminKey = "";
  let adminRows = [];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const t = (path) => get(UI[lang], path);
  const L = (val) => (val && typeof val === "object" ? (val[lang] || "") : (val || ""));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- 渲染 ---------- */
function renderOrgs(listEl, items) {
  listEl.innerHTML = items.map((o) => {
    const name = esc(L(o.name));

    const img = `
      <img
        src="${esc(o.logo)}"
        alt="${name}"
        loading="lazy"
      />
    `;


    return `
      <li>
        ${
          o.url
            ? `<a
                 href="${esc(o.url)}"
                 target="_blank"
                 rel="noopener noreferrer"
               >${img}</a>`
            : `<div>${img}</div>`
        }
      </li>
    `;
  }).join("");
}

  function renderSpeakers() {
    $("#speaker-grid").innerHTML = C.speakers.map((s, i) => `
      <li>
        <button type="button" class="speaker-card" data-speaker="${i}" aria-haspopup="dialog">
          <span class="speaker-photo"><img src="${esc(s.photo)}" alt="" width="400" height="400" loading="lazy" /></span>
          <span class="speaker-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="speaker-name">${esc(L(s.name))}</span>
          <span class="speaker-title">${esc(L(s.title))}</span>
          <span class="speaker-org">${esc(L(s.org))}</span>
          <span class="speaker-more">${esc(t("speakers.more"))}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </button>
      </li>`).join("");
  }

  function renderAgenda() {
    $("#timeline").innerHTML = C.agenda.map((a) => {
      const host = L(a.host), note = L(a.note);
      return `
      <li class="tl-item">
        <div class="tl-time"><time>${esc(a.start)}</time>${a.end ? `<span aria-hidden="true">–</span><time>${esc(a.end)}</time>` : ""}</div>
        <div class="tl-body">
          <h3>${esc(L(a.item))}</h3>
          ${host ? `<p class="tl-host">${esc(host)}</p>` : ""}
          ${note ? `<p class="tl-note">${esc(note)}</p>` : ""}
        </div>
      </li>`;
    }).join("");
  }

  function fillModal() {
    if (currentSpeaker == null) return;
    const s = C.speakers[currentSpeaker];
    $("#m-photo").src = s.photo;
    $("#m-photo").alt = L(s.name);
    $("#m-index").textContent = `${t("speakers.index")} ${String(currentSpeaker + 1).padStart(2, "0")}`;
    $("#m-name").textContent = L(s.name);
    $("#m-title").textContent = L(s.title);
    $("#m-org").textContent = L(s.org);
    $("#m-bio").textContent = L(s.bio);
  }

  function applyLang() {
    document.documentElement.lang = HTML_LANG[lang];
    document.body.dataset.lang = lang;
    document.title = L(C.event.title);
    $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
    $$("[data-ph-i18n]").forEach((el) => { el.placeholder = t(el.dataset.phI18n); });
    $$("[data-alt-i18n]").forEach((el) => { el.alt = t(el.dataset.altI18n); });
    $$("[data-text]").forEach((el) => {
      const v = L(get(C, el.dataset.text));
      el.textContent = v;
      if (el.classList.contains("meta-sub")) el.hidden = !v;
    });
    $$("[data-src]").forEach((el) => { el.src = get(C, el.dataset.src); });
    $$("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang)));

    renderOrgs($("#co-organizers"), C.coOrganizers);
    const hasSponsors = Array.isArray(C.sponsors) && C.sponsors.length > 0;
    $("#sponsor-tile").hidden = !hasSponsors;
    if (hasSponsors) renderOrgs($("#sponsors"), C.sponsors);
    renderSpeakers();
    renderAgenda();
    fillModal();
    if (!$("#admin-results").hidden) renderAdmin();
    // 若狀態訊息正在顯示，按新語言更新
    const st = $("#form-status");
    if (!st.hidden && st.dataset.key) st.textContent = t(st.dataset.key);
    updateSubmitLabel();
  }

  /* ---------- 語言切換（保留目前位置及表單內容） ---------- */
  $$("[data-lang-btn]").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.langBtn === lang) return;
    const y = window.scrollY;
    lang = b.dataset.langBtn;
    applyLang();
    window.scrollTo({ top: y, behavior: "instant" });
    try { const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u); } catch (e) { /* preview sandbox */ }
  }));

  /* ---------- 嘉賓彈出視窗 ---------- */
  const speakerModal = $("#speaker-modal");
  let lastFocus = null;
  $("#speaker-grid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-speaker]");
    if (!card) return;
    lastFocus = card;
    currentSpeaker = Number(card.dataset.speaker);
    fillModal();
    speakerModal.showModal();
    $(".modal-body", speakerModal).scrollTop = 0;
  });
  $$(".modal").forEach((m) => {
    m.addEventListener("click", (e) => { if (e.target === m || e.target.closest("[data-close]")) m.close(); });
    m.addEventListener("close", () => {
      if (m === speakerModal) currentSpeaker = null;
      if (m.id === "admin-modal" && location.hash === "#admin") {
        try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* ignore */ }
      }
      if (lastFocus) { lastFocus.focus({ preventScroll: true }); lastFocus = null; }
    });
  });

  /* ---------- 現場提問表單 ---------- */
  const form = $("#qa-form");
  const qEl = $("#q-question");
  const submitBtn = $("#q-submit");
  const status = $("#form-status");
  let submitting = false;

  function updateSubmitLabel() { $("#q-submit-label").textContent = t(submitting ? "qa.submitting" : "qa.submit"); }
  function showStatus(key, type) { status.dataset.key = key; status.textContent = t(key); status.className = `form-status is-${type}`; status.hidden = false; }
  function setError(on) {
    $("#q-question-err").hidden = !on;
    qEl.setAttribute("aria-invalid", String(on));
    qEl.closest(".field").classList.toggle("has-error", on);
  }
  qEl.addEventListener("input", () => {
    $("#q-count").textContent = `${qEl.value.length} / 1000`;
    if (qEl.value.trim()) setError(false);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (submitting) return;
    status.hidden = true;
    const question = qEl.value.trim();
    if (!question) { setError(true); qEl.focus(); return; }
    if (!CFG.QUESTION_ENDPOINT) { showStatus("qa.notConfigured", "error"); return; }

    submitting = true;
    submitBtn.disabled = true;
    submitBtn.classList.add("is-loading");
    updateSubmitLabel();
    const payload = {
      question,
      name: $("#q-name").value.trim(),
      unit: $("#q-unit").value.trim(),
      lang
    };
    try {
      // text/plain 可避免跨網域預檢，與 Google Apps Script 相容
      const res = await fetch(CFG.QUESTION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error("save failed");
      form.reset();
      $("#q-count").textContent = "0 / 1000";
      showStatus("qa.success", "success");
    } catch (err) {
      showStatus("qa.fail", "error");
    } finally {
      submitting = false;
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
      updateSubmitLabel();
    }
  });

  /* ---------- 主辦方讀取介面 ---------- */
  const adminModal = $("#admin-modal");
  function openAdminIfHash() { if (location.hash === "#admin" && !adminModal.open) { adminModal.showModal(); $("#admin-key").focus(); } }
  window.addEventListener("hashchange", openAdminIfHash);
  $(".admin-link").addEventListener("click", (e) => { e.preventDefault(); lastFocus = e.currentTarget; adminModal.showModal(); $("#admin-key").focus(); });

  function fmtTime(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return iso || "";
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }
  function renderAdmin() {
    $("#admin-count").textContent = adminRows.length ? t("admin.count")(adminRows.length) : t("admin.empty");
    $("#admin-tbody").innerHTML = adminRows.map((r) => `
      <tr>
        <td>${esc(r.id)}</td>
        <td class="nowrap">${esc(fmtTime(r.time))}</td>
        <td class="q-cell">${esc(r.question)}</td>
        <td>${esc(r.name || "—")}</td>
        <td>${esc(r.unit || "—")}</td>
        <td>${esc(LANG_LABEL[r.lang] || r.lang || "")}</td>
      </tr>`).join("");
  }
  async function loadAdmin() {
    const err = $("#admin-err");
    err.hidden = true;
    try {
      const sep = CFG.QUESTION_ENDPOINT.includes("?") ? "&" : "?";
      const res = await fetch(`${CFG.QUESTION_ENDPOINT}${sep}action=list&key=${encodeURIComponent(adminKey)}`);
      const data = await res.json();
      if (!data.ok) throw new Error("denied");
      adminRows = data.rows || [];
      $("#admin-results").hidden = false;
      renderAdmin();
    } catch (e) {
      err.textContent = t("admin.wrongKey");
      err.hidden = false;
      $("#admin-results").hidden = true;
    }
  }
  $("#admin-login").addEventListener("submit", (e) => { e.preventDefault(); adminKey = $("#admin-key").value; loadAdmin(); });
  $("#admin-refresh").addEventListener("click", loadAdmin);
  $("#admin-csv").addEventListener("click", () => {
    const head = ["id", "time", "question", "name", "unit", "lang"];
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = "\uFEFF" + [head.join(","), ...adminRows.map((r) => head.map((h) => cell(h === "time" ? fmtTime(r[h]) : r[h])).join(","))].join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url; a.download = "forum-questions.csv";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  /* ---------- 頁首捲動狀態 ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });

  applyLang();
  onScroll();
  openAdminIfHash();
})();
