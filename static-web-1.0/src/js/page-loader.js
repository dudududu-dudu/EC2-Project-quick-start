const main_tag = '<a id="nav-services" data-page="services.html" class="page-link" href="#">業務案内</a>';

/* ---- hidden-tag で疑似ページ遷移を実装 ---- */
(() => {
    const main = document.getElementById("main-content");
    const holder = document.getElementById("page-container");

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
        if (window.applyLang) window.applyLang();
        return;
    }

        fetch(`src/pages/${link.dataset.page}`)
            .then(res => res.ok ? res.text() : Promise.reject())
            .then(html => {
                holder.innerHTML = html;
                main.classList.add("hidden");
                holder.classList.remove("hidden");
                window.scrollTo({ top: 0, behavior: "smooth" });
                /* ページ読込後に現在の言語で再翻訳 */
                if (window.applyLang) window.applyLang();
            })
            .catch((e) =>
                alert("ページを読み込めませんでした"));
    });

    /* 子ページ側で 返回a tag */
    holder.addEventListener("click", e => {
        if (e.target.id === "back-btn") {
            e.preventDefault();
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // タイトルクリック → ホームに戻る
    const brand = document.querySelector(".brand");
    if (brand) {
        brand.addEventListener("click", () => {
            holder.classList.add("hidden");
            main.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (window.applyLang) window.applyLang();
        });
    }


})();
