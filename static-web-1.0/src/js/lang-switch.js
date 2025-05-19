(function () {
    const zh = {
        title: "华悦国际司法书士行政书士事务所",
        "nav-services": "业务范围", "nav-pricing": "费用", "nav-office": "事务所介绍", "nav-faq": "常见问题",
        "hero-h2": "法律专家为您在日本的生活和商务提供支持",
        "hero-p": "房产登记、公司设立、归化申请等，全程提供中文安心服务。请放心交给专业人士。",
        "hero-btn": "立即咨询（支持LINE、微信）",
        "services-title": "业务范围",
        "srv1-title": "1．房产登记", "srv1-txt": "外国人士在日本进行房产购买、出售或继承时的登记手续交给我们。从合同制作到申请全程支持。",
        "srv2-title": "2．公司 / 法人设立", "srv2-txt": "为在日本设立公司的外国人士提供支持，包含株式会社、分公司、代表处等手续。",
        "srv3-title": "3．公司 / 商业登记", "srv3-txt": "公司名称变更、总部迁移、增资、解散清算等法人登记事项，均可代办。",
        "srv4-title": "4．继承登记 / 遗产承继支持", "srv4-txt": "名义变更、遗产分割协议书、法定继承信息图等复杂手续一次性解决。",
        "srv5-title": "5．成年后监制度申请", "srv5-txt": "协助递交申请、准备文件、选任后监人等，保护本人及家属的财产。",
        "srv6-title": "6．遗嘱书制作", "srv6-txt": "制作自书遗嘱、公证遗嘱草案并陪同公证，全国支持中国籍人士。",
        "srv7-title": "7．归化申请 / 国籍取得", "srv7-txt": "日本国籍归化申请，从资料到面试全程辅导。",
        "srv8-title": "8．各类许可申请", "srv8-txt": "代办餐饮、古物商、建筑业等营业许可，一站式支持日本创业。",
        "srv9-title": "9．法院文件制作", "srv9-txt": "制作放弃继承声明、特别代理人申请等法院文件，全程中文沟通。",
        "srv10-title": "10．其他法律咨询", "srv10-txt": "合同纠纷、债务问题等日常法律问题欢迎咨询。",
        "pricing-title": "费用指南（参考）", "pricing-note": "※ 以下费用仅供参考，详情请面谈。", "pricing-th1": "服务项目", "pricing-th2": "费用（未税）",
        "price-row1": "所有权保存", "price-row2": "所有权转移（买卖）", "price-row3": "继承登记 基本报酬", "price-row4": "公司设立登记申请", "price-row5": "归化申请（公司职员）",
        "office-title": "事务所介绍",
        "office-philosophy": "<strong>理念：</strong>以同理心、亲切且细致的服务，让您在日本的生活更加安心愉快。",
        "greeting-title": "致辞", "greeting-body": "我是司法书士、行政书士王悦……（可补充中文介绍）",
        "address-block": "<strong>所在地：</strong>大阪市北区浪花町13-38千代田ビル北馆6階<br><strong>交通：</strong>天神桥筋六丁目站13出口 步行1分<br><strong>营业时间：</strong>平日10:00-18:00<br><strong>电话/FAX：</strong>06-6616-8879<br><strong>Email：</strong>kaetu2025@gmail.com",
        "faq-title": "常见问题", "faq-q1": "问：我不会日语也可以咨询吗？", "faq-a1": "答：可以。本事务所支持中文，请安心咨询。", "back-btn": "返回上个页面"

    };

    const original = {};
    let currentLang = "ja"; // 默认日语

    window.addEventListener("DOMContentLoaded", () => cacheOriginalText());

    function cacheOriginalText() {
        Object.keys(zh).forEach(id => {
            const el = document.getElementById(id);
            if (el) original[id] = el.innerHTML;   // 把现在 DOM 里所有 id 的原文再刷一遍
        });
    }

    window.applyLang = function () {
        cacheOriginalText();                     // ☆ 新增：确保 latest original

        if (currentLang === "zh") {
            Object.entries(zh).forEach(([id, txt]) => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = txt;
            });
        } else {
            Object.entries(zh).forEach(([id]) => {
                const el = document.getElementById(id);
                if (el && original[id]) el.innerHTML = original[id];
            });
        }
    };

    const btns = document.querySelectorAll(".lang-switch button");
    btns.forEach(b => b.addEventListener("click", () => switchLang(b.dataset.lang)));

    function switchLang(lang) {
        currentLang = lang;
        btns.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));

        if (lang === "ja") {
            Object.entries(original).forEach(([id, txt]) => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = txt;
            });
            document.documentElement.lang = "ja";
            return;
        }

        Object.entries(zh).forEach(([id, txt]) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = txt;
        });
        document.documentElement.lang = "zh";
    }

})();
