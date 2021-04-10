export default function (headerArg, linkArg, tabArg, active) {
    const header = document.querySelector(headerArg),
        link = document.querySelectorAll(linkArg),
        tab = document.querySelectorAll(tabArg);

    function hideTabs() {
        tab.forEach(item => {
            item.style.display = 'none';
        });
        link.forEach(item => {
            item.classList.remove(active);
        });
    }

    function showTabs(i = 0) {
        tab[i].style.display = 'block';
        link[i].classList.add(active);
    }

    header.addEventListener(`click`, (e) => {
        if (e.target.classList.contains(linkArg.replace('.', '')) ||
            e.target.parentNode.classList.contains(linkArg.replace('.', ''))) {
            link.forEach((item, i) => {
                if (e.target == item || e.target.parentNode == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }


    });

}