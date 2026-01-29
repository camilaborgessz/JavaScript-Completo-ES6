
function activeTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    tabContent[0].classList.add('ativo')

    if (tabContent.length && tabMenu.length)
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
activeTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
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
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]') // Monta uma NodeList com todos os links internos

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


function animacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const metadeTela = window.innerHeight * 0.6

    function animacao() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top 
            const isSectionVisible = (sectionTop - metadeTela) < 0

            if(isSectionVisible){
                section.classList.add('ativo')
            }
        });
    }
    window.addEventListener('scroll', animacao)
}

animacaoScroll()
