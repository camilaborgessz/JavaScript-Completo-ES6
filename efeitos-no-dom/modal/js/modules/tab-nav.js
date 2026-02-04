
export default function activeTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    
    if (tabContent.length && tabMenu.length)
      tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove("ativo")
            });
            tabContent[index].classList.add("ativo", tabContent[index].dataset.anime)
        }

    tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
            activeTab(index)
        })
    });
}