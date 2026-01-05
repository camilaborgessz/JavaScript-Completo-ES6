
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

function initScrollSuave(event) {
    const linksInternos = document.querySelectorAll('a[href^="#"]') // Monta uma NodeList com todos os links internos

    function scrollToSection(event) {
        event.preventDefault() // Prevenimos o comportamento padrão do link
        const href = event.currentTarget.getAttribute('href') // Aqui pegamos o atributo (#contato, #animais, #contato)
        const section = document.querySelector(href) // Aqui pegamos a tag html do elemento selecionado
        const topo = section.offsetTop // Aqui pega o valor da altura do começo da seção 
        console.log(topo)

        // window.scrollTo(0, topo) // A janela scrolla para 0 (horizintal) e topo (vertical)

        // OU.....

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })

        //OU.......

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach(link => {
        link.addEventListener("click", scrollToSection)
    });
}

initScrollSuave()