const main_tag = '<a id="nav-services" data-page="services.html" class="page-link" href="#">業務案内</a>';

/* ---- hidden-tag で疑似ページ遷移を実装 ---- */
(() => {
    const main = document.getElementById("main-content");
    const holder = document.getElementById("page-container");

    // 根据hash加载页面
    function loadPageFromHash() {
        const hash = location.hash.replace('#', '');
        if (!hash) {
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            if (window.applyLang) window.applyLang(true);
            return;
        }
        // hash格式: page=xxx.html
        const match = hash.match(/^page=(.+\.html)$/);
        if (match) {
            const page = match[1];
            fetch(`src/pages/${page}`)
                .then(res => res.ok ? res.text() : Promise.reject())
                .then(html => {
                    holder.innerHTML = html;
                    main.classList.add("hidden");
                    holder.classList.remove("hidden");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    if (window.applyLang) window.applyLang(true);
                })
                .catch(() => alert("ページを読み込めませんでした"));
        } else {
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            if (window.applyLang) window.applyLang(true);
        }
    }

    // 初次加载和hash变化时都要处理
    window.addEventListener('DOMContentLoaded', loadPageFromHash);
    window.addEventListener('hashchange', loadPageFromHash);

    /* ナビクリックで fetch → 挿入 */
    document.body.addEventListener("click", e => {
        const link = e.target.closest("a.page-link");
        if (!link) return;
        e.preventDefault();
        if (link.id === "nav-services") {
            // 「業務案内」ボタンのときはfetchせずに main-content に戻るだけ
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });
            location.hash = '';
            if (window.applyLang) window.applyLang(true);
            return;
        }
        // 其它页面，写入hash
        location.hash = `page=${link.dataset.page}`;
    });

    /* 子ページ側で 返回a tag */
    holder.addEventListener("click", e => {
        if (e.target.id === "back-btn") {
            e.preventDefault();
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });
            location.hash = '';
            if (window.applyLang) window.applyLang(true);
        }
    });

    // タイトル点击 → ホームに戻る
    const brand = document.querySelector(".brand");
    if (brand) {
        brand.addEventListener("click", () => {
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });
            location.hash = '';
            if (window.applyLang) window.applyLang(true);
        });
    }

})();
