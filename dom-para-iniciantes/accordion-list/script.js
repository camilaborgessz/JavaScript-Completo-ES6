
function activeTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    tabContent[0].classList.add('ativo')

    if (tabContent.length && tabMenu.length)
        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove("ativo")
            });
            tabContent[index].classList.add("ativo")
        }

    tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
            activeTab(index)
        })
    });
}
activeTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')
    
    if (accordionList.length) {
        function activeAccordion() {
            this.nextElementSibling.classList.toggle("ativo")
            this.classList.toggle('ativo')
        }
        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion)
        });
    }
}
initAccordion()