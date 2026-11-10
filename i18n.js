/* 介面固定文字（按鈕、標籤、提示訊息）的三語版本 */
window.UI_TEXT = {
  tc: {
    skip: "跳至主要內容",
    nav: { info: "活動資訊", speakers: "特邀嘉賓", agenda: "活動流程", qa: "現場提問" },
    hero: { eyebrow: "學術論壇", cta: "提交現場提問", date: "日期", time: "時間", venue: "地點", coOrg: "共同協辦", sponsors: "支持單位", logoAlt: "論壇 Logo" },
    speakers: { eyebrow: "Keynote Speakers", title: "特邀嘉賓", lead: "點擊嘉賓資料卡，查看詳細介紹。", more: "查看詳細介紹", bio: "個人簡介", index: "特邀嘉賓" },
    agenda: { eyebrow: "Programme", title: "活動流程" },
    qa: {
      eyebrow: "Live Q&A", title: "現場提問",
      lead: "歡迎提交你希望向嘉賓提出的問題。主辦方將收集問題，並按現場安排選取提問。",
      privacy: "你提交的內容只供主辦方整理現場提問之用，不會向其他訪客公開。",
      question: "問題內容", required: "（必填）", optional: "（選填）",
      questionPh: "請輸入你的問題。", name: "姓名", namePh: "請輸入你的姓名。",
      unit: "所屬單位名稱", unitPh: "請輸入你所屬的機構或單位名稱。",
      submit: "提交問題", submitting: "提交中…",
      errEmpty: "請輸入問題內容。",
      success: "你的問題已成功提交，感謝參與。",
      fail: "問題暫未能提交，請稍後再試。你已輸入的內容已保留。",
      notConfigured: "提問功能尚未連接資料儲存服務，請聯絡主辦方。"
    },
    footer: { admin: "主辦方入口" },
    admin: {
      title: "主辦方：已提交問題", key: "管理密碼", load: "讀取問題", refresh: "重新整理", csv: "匯出 CSV",
      colId: "編號", colTime: "提交時間", colQ: "問題內容", colName: "姓名", colUnit: "所屬單位", colLang: "語言",
      count: (n) => `共 ${n} 條問題`, empty: "暫未有任何提問。", wrongKey: "密碼不正確，或未能讀取資料。"
    }
  },
  sc: {
    skip: "跳至主要内容",
    nav: { info: "活动资讯", speakers: "特邀嘉宾", agenda: "活动流程", qa: "现场提问" },
    hero: { eyebrow: "学术论坛", cta: "提交现场提问", date: "日期", time: "时间", venue: "地点", coOrg: "共同协办", sponsors: "支持单位", logoAlt: "论坛 Logo" },
    speakers: { eyebrow: "Keynote Speakers", title: "特邀嘉宾", lead: "点击嘉宾资料卡，查看详细介绍。", more: "查看详细介绍", bio: "个人简介", index: "特邀嘉宾" },
    agenda: { eyebrow: "Programme", title: "活动流程" },
    qa: {
      eyebrow: "Live Q&A", title: "现场提问",
      lead: "欢迎提交你希望向嘉宾提出的问题。主办方将收集问题，并按现场安排选取提问。",
      privacy: "你提交的内容只供主办方整理现场提问之用，不会向其他访客公开。",
      question: "问题内容", required: "（必填）", optional: "（选填）",
      questionPh: "请输入你的问题。", name: "姓名", namePh: "请输入你的姓名。",
      unit: "所属单位名称", unitPh: "请输入你所属的机构或单位名称。",
      submit: "提交问题", submitting: "提交中…",
      errEmpty: "请输入问题内容。",
      success: "你的问题已成功提交，感谢参与。",
      fail: "问题暂未能提交，请稍后再试。你已输入的内容已保留。",
      notConfigured: "提问功能尚未连接数据储存服务，请联络主办方。"
    },
    footer: { admin: "主办方入口" },
    admin: {
      title: "主办方：已提交问题", key: "管理密码", load: "读取问题", refresh: "重新整理", csv: "导出 CSV",
      colId: "编号", colTime: "提交时间", colQ: "问题内容", colName: "姓名", colUnit: "所属单位", colLang: "语言",
      count: (n) => `共 ${n} 条问题`, empty: "暂未有任何提问。", wrongKey: "密码不正确，或未能读取数据。"
    }
  },
  en: {
    skip: "Skip to main content",
    nav: { info: "Event", speakers: "Speakers", agenda: "Programme", qa: "Live Q&A" },
    hero: { eyebrow: "Academic Forum", cta: "Submit a question", date: "Date", time: "Time", venue: "Venue", coOrg: "Co-organized by", sponsors: "Supporting Units", logoAlt: "Forum logo" },
    speakers: { eyebrow: "Keynote Speakers", title: "Keynote Speakers", lead: "Select a speaker card to read the full profile.", more: "View profile", bio: "Biography", index: "Keynote Speaker" },
    agenda: { eyebrow: "Programme", title: "Programme" },
    qa: {
      eyebrow: "Live Q&A", title: "Live Q&A",
      lead: "Submit the questions you would like to ask our speakers. The organizers will collect them and select questions for the session.",
      privacy: "Your submission is used only by the organizers to prepare the Q&A and will not be shown to other visitors.",
      question: "Your question", required: "(required)", optional: "(optional)",
      questionPh: "Type your question here.", name: "Name", namePh: "Enter your name.",
      unit: "Organization", unitPh: "Enter your institution or department.",
      submit: "Submit question", submitting: "Submitting…",
      errEmpty: "Please enter your question.",
      success: "Your question has been submitted. Thank you for taking part.",
      fail: "We couldn't submit your question. Please try again later. What you typed has been kept.",
      notConfigured: "The Q&A form is not yet connected to a storage service. Please contact the organizers."
    },
    footer: { admin: "Organizer access" },
    admin: {
      title: "Organizers: submitted questions", key: "Admin password", load: "Load questions", refresh: "Refresh", csv: "Export CSV",
      colId: "No.", colTime: "Submitted", colQ: "Question", colName: "Name", colUnit: "Organization", colLang: "Language",
      count: (n) => `${n} question${n === 1 ? "" : "s"}`, empty: "No questions yet.", wrongKey: "Incorrect password, or the data could not be loaded."
    }
  }
};
