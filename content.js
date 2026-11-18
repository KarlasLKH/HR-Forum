/* =========================================================
   網站內容檔 —— 日後只需修改這個檔案即可更新文字與圖片
   每項文字都有三語：tc（繁體）、sc（簡體）、en（英文）
   標示【示例】的內容為虛構資料，請替換成正式資料
   ========================================================= */
window.SITE_CONTENT = {
  /* ---------- 第一模塊：活動資訊 ---------- */
  event: {
    title: {
      tc: "2026國際化辦學人力資源管理論壇",
      sc: "2026国际化办学人力资源管理论坛",
      en: "2026 Human Resource Management in International Education"
    },
    logo: "assets/event-logo.svg", // 建議 240 × 240 px
    date: { tc: "2026年11月27日", sc: "2026年11月27日", en: "27 November 2026" },
    dateNote: { tc: "第二天", sc: "第二天", en: "Day 2" },
    time: { tc: "早上09:00", sc: "早上09:00", en: "09:00 AM" },
    timezone: { tc: "澳門時間（GMT+8）", sc: "澳门时间（GMT+8）", en: "Macau time (GMT+8)" }, // 留空則不顯示
    venue: { tc: "澳門城市大學", sc: "澳门城市大学", en: "City University of Macau" },
    address: { tc: "何賢會議中心 及 文化中心展覽廳", sc: "何贤会议中心 及 文化中心展览厅", en: "Ho Yin Conference Hall & Cultural Center Exhibition Hall" } // 如有詳細地址可填入；留空則不顯示
  },

  /* 共同協辦大學（建議 Logo 320 × 120 px） */
  coOrganizers: [
    { name: { tc: "協辦大學 A", sc: "协办大学 A", en: "Co-organizing University A" }, logo: "assets/university-a-logo.svg", url: "" },
    { name: { tc: "協辦大學 B", sc: "协办大学 B", en: "Co-organizing University B" }, logo: "assets/university-b-logo.svg", url: "" }
  ],

  /* 贊助單位：目前為空，區塊不會顯示。新增方式示例： */
  sponsors: [
    { name: { tc: "贊助單位名稱", sc: "赞助单位名称", en: "Sponsor Name" }, logo: "assets/sponsor-1.svg", url: "" }
  ],
   
  /* ---------- 第二模塊：特邀嘉賓【示例】 ---------- */
  speakers: [
    {
      photo: "assets/speaker-1.svg",
      name: { tc: "張亮 教授", sc: "张亮 教授", en: "Prof. Leong CHEUNG" },
      title: { tc: "副校長（行政及拓展）", sc: "副校长（行政及拓展）", en: "Vice President (Administration and Development)" },
      org: { tc: "香港理工大學", sc: "香港理工大学", en: "The Hong Kong Polytechnic University" },
      bio: {
        tc: "張亮教授現職香港理工大學副校長（行政及拓展），此前他任職香港金融管理局外匯基金投資辦公室首席策略官。他在2014至2022年出任香港賽馬會（馬會）慈善及社區事務執行總監，同時亦代表馬會出任聯合國可持續發展解決方案網絡香港地區分會的聯合主席。\n\n在投身公營機構之前，張教授專業經驗豐富，曾為貝恩資本合夥人、溢達集團全球採購及供應鏈管理董事總經理、互聯網教育創新企業創辦人兼行政總裁，以及波士頓諮詢公司高級顧問等。\n\n工作以外，張教授以所學報效社會，他是社會企業「全城街馬」創辦人之一，該組織的宗旨是藉跑步為生命帶來正面改變。張教授現為香港特別行政區政府「降低食物中鹽和糖委員會」主席。2022年他是牛津大學 St. Antony’s College 的訪問學者。\n\n張教授畢業於香港中文大學，其後取得哈佛大學工商管理碩士學位。",
        sc: "张亮教授现职香港理工大学副校长（行政及拓展），此前他任职香港金融管理局外汇基金投资办公室首席策略官。他在2014至2022年出任香港赛马会（马会）慈善及社区事务执行总监，同时亦代表马会出任联合国可持续发展解决方案网络香港地区分会的联合主席。\n\n在投身公营机构之前，张教授专业经验丰富，曾为贝恩资本合伙人、溢达集团全球采购及供应链管理董事总经理、互联网教育创新企业创办人兼行政总裁，以及波士顿咨询公司高级顾问等。\n\n工作以外，张教授以所学报效社会，他是社会企业「全城街马」创办人之一，该组织的宗旨是藉跑步为生命带来正面改变。张教授现为香港特别行政区政府「降低食物中盐和糖委员会」主席。2022年他是牛津大学 St. Antony’s College 的访问学者。\n\n张教授毕业于香港中文大学，其后取得哈佛大学工商管理硕士学位。",
        en: "Professor Leong Cheung is Vice President (Administration and Development) of The Hong Kong Polytechnic University (PolyU).  Before joining PolyU, he served as the Chief Strategy Officer of the Exchange Fund Investment Office at the Hong Kong Monetary Authority.  He was the Executive Director of Charities & Community at The Hong Kong Jockey Club (HKJC) from 2014 to 2022.  In this capacity, he was also the founding co-chair of the Hong Kong Chapter of the United Nations’ Sustainable Development Solutions Network.\n\nPrior to his service in public institutions, Professor Cheung was the Operating Partner of Bain Capital, Managing Director of Global Sourcing & Supply Chain at Esquel Group, the founder and CEO of an education focused internet venture, and a senior consultant at the Boston Consulting Group.\n\nProfessor Cheung is a social entrepreneur outside of work.  He is the co-founder of RunOurCity, an innovative social enterprise with the aim of transforming life through running.  He currently serves as the chairperson of the Committee on Reduction of Salt and Sugar in Food of the Government of the Hong Kong Special Administrative Region.  He was a visiting academics in the St. Antony’s College of the University of Oxford in 2022.\n\nProfessor Cheung graduated from The Chinese University of Hong Kong with a Bachelor of Business Administration and obtained a Master of Business Administration from the Harvard Business School."
      }
    },
    {
      photo: "assets/speaker-2.svg",
      name: { tc: "劉宜 先生", sc: "刘宜 先生", en: "Mr. Kelvin LIU" },
      title: { tc: "副校長（行政）", sc: "副校长（行政）", en: "Vice President (Operations)" },
      org: { tc: "蒙納士大學蘇州校區", sc: "蒙纳士大学苏州校区", en: "Monash University, Suzhou" },
      bio: {
        tc: "劉宜先生是一位資深行政管理人員，在國際高等教育領域的策略領導與營運管理方面擁有豐富經驗。他的專業範疇涵蓋院校策略、組織效能、卓越營運及轉型，致力於提升績效、改善效率，並實現可持續的組織成果。\n\n在職業生涯中，劉先生展現了領導組織變革、分析院校績效，以及將策略重點轉化為實際營運成果的卓越能力。他善於運用科技與數據優化營運流程、提升效率，並支持循證決策。他亦致力於培育高績效團隊、領導跨職能協作項目，以及推動持續改進的組織文化。\n\n劉先生現任蒙納士大學蘇州校區副校長（行政）。除行政管理職責外，他亦擔任多項重要的院校管治職務，包括法定代表人、理事會主席及行政負責人。\n\n劉先生持有詹姆斯庫克大學工商管理碩士（MBA）學位。他的專業會籍包括澳大利亞公司董事學會研究生會員、新加坡董事協會會員、澳大利亞人力資源協會會員，以及澳大利亞會計師公會會員。\n\n憑藉豐富的行政領導及管治經驗，劉先生為國際高等教育領域的院校管理、組織發展及營運績效帶來策略視野。",
        sc: "刘宜先生是一位资深行政管理人员，在国际高等教育领域的策略领导与营运管理方面拥有丰富经验。他的专业范畴涵盖院校策略、组织效能、卓越营运及转型，致力于提升绩效、改善效率，并实现可持续的组织成果。 \n\n在职业生涯中，刘先生展现了领导组织变革、分析院校绩效，以及将策略重点转化为实际营运成果的卓越能力。他善于运用科技与数据优化营运流程、提升效率，并支持循证决策。他亦致力于培育高绩效团队、领导跨职能协作项目，以及推动持续改进的组织文化。 \n\n刘先生现任蒙纳士大学苏州校区副校长（行政）。除行政管理职责外，他亦担任多项重要的院校管治职务，包括法定代表人、理事会主席及行政负责人。 \n\n刘先生持有詹姆斯库克大学工商管理硕士（MBA）学位。他的专业会籍包括澳大利亚公司董事学会研究生会员、新加坡董事协会会员、澳大利亚人力资源协会会员，以及澳大利亚会计师公会会员。 \n\n凭借丰富的行政领导及管治经验，刘先生为国际高等教育领域的院校管理、组织发展及营运绩效带来策略视野。",
        en: "Kelvin Liu is a senior executive with extensive experience in strategic and operational leadership in international tertiary education. His expertise spans institutional strategy, organisational effectiveness, operational excellence and transformation, with a focus on enhancing performance, improving efficiency and achieving sustainable organisational outcomes.\n\nThroughout his career, Kelvin has demonstrated a strong ability to lead organisational change, analyse institutional performance and translate strategic priorities into effective operational outcomes. He is experienced in leveraging technology and data to streamline operations, improve efficiency and support evidence-based decision-making. He is also committed to developing high-performing teams, leading cross-functional initiatives and fostering a culture of continuous improvement.\n\nKelvin currently serves as Vice President, Operations at Monash Suzhou. In addition to his executive responsibilities, he holds key institutional governance appointments as Statutory Legal Representative, Chair of the Board of Governors and Chief Administrator.\n\nKelvin holds a Master of Business Administration (MBA) from James Cook University. His professional affiliations include Graduate Member of the Australian Institute of Company Directors, Member of the Singapore Institute of Directors, Member of the Australian HR Institute, and Associate Member of CPA Australia.\n\nDrawing on his executive leadership and governance experience, Kelvin brings a strategic perspective to institutional management, organisational development and operational performance in the international higher education sector."
      }
    }
  ],

  /* ---------- 第三模塊：活動流程【示例】 ----------
     host、note 可留空 {}，留空則不顯示 */
  agenda: [
    { start: "09:00", end: "09:45", item: { tc: "來賓登記", sc: "来宾登记", en: "Registration" }, host: {}, note: { tc: "於會場入口簽到", sc: "于会场入口签到", en: "Check in at the venue entrance" } },
    { start: "09:45", end: "10:00", item: { tc: "歡迎致辭", sc: "欢迎致辞", en: "Welcome Remarks" }, host: { tc: "澳門城市大學副校長周萬雷教授", sc: "澳门城市大学副校长周万雷教授", en: "Prof. Wanlei Zhou, Vice Rector of City University of Macau" }, note: {} },
    { start: "10:00", end: "10:30", item: { tc: "連接東西 ─ 大學在國際人才生態中的戰略重構", sc: "连接东西 ─ 大学在国际人才生态中的战略重构", en: "Bridging East & West – The Strategic Role of Universities in Redefining the Global Talent Ecosystem" }, host: { tc: "香港理工大學副校長（行政及拓展）張亮教授", sc: "香港理工大学副校长（行政及拓展）张亮教授", en: "Prof. Leong Cheung, Vice President (Administration and Development) of The Hong Kong Polytechnic University" }, note: {} },
    { start: "10:30", end: "11:00", item: { tc: "連接東西 ─ 大學在國際人才生態中的戰略重構", sc: "连接东西 ─ 大学在国际人才生态中的战略重构", en: "Bridging East & West – The Strategic Role of Universities in Redefining the Global Talent Ecosystem" }, host: { tc: "蒙納士大學蘇州校區副校長（行政）劉宜先生", sc: "蒙纳士大学苏州校区副校长（行政）刘宜先生", en: "Mr. Kelvin Liu, Vice President (Operations) of Monash University, Suzhou" }, note: {} },
    { start: "11:00", end: "12:00", item: { tc: "圓桌討論", sc: "圆桌讨论", en: "Round Table Discussion" }, host: { tc: "主持：澳門城市大學", sc: "主持：澳门城市大学", en: "Moderator: City University of Macau" }, note: { tc: "分享：澳門城市大學、昆山杜克大學、北師香港浸會大學、香港科技大學（廣州）", sc: "分享：澳门城市大学、昆山杜克大学、北师香港浸会大学、香港科技大学（广州）", en: "Speakers: City University of Macau, Duke Kunshan University, Beijing Normal-Hong Kong Baptist University, The Hong Kong University of Science and Technology (Guangzhou)" } },
    { start: "12:00", end: "14:00", item: { tc: "交流午餐", sc: "交流午餐", en: "Networking Lunch" }, host: {}, note: { tc: "輕鬆交流，分享觀點與經驗", sc: "轻松交流，分享观点与经验", en: "Connect in a relaxed setting and share ideas and experiences" } },
    { start: "14:00", end: "17:00", item: { tc: "演出《澳門2049》：沉浸未來 ‧ 對話傳統", sc: "演出《澳门2049》沉浸未来 · 对话传统", en: "'Macau 2049': Tradition Reborn in a Future Theater ─ An Experiential Learning Workshop" }, host: { tc: "地點：美獅美高梅 - 美高梅劇院", sc: "地点：美狮美高梅 - 美高梅剧院", en: "Location: MGM Theater, MGM Cotai" }, note: {} },
    { start: "17:00", end: "17:30", item: { tc: "論壇回顧與閉幕", sc: "论坛回顾与闭幕", en: "Forum Reflection & Closing" }, host: { tc: "協辦大學代表", sc: "协办大学代表", en: "Representatives of the co-organizing universities" }, note: {} }
  ]
};
