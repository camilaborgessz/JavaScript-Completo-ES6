export default function initScrollSuave(event) {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]') // Monta uma NodeList com todos os links internos

    function scrollToSection(event) {
        event.preventDefault() // Prevenimos o comportamento padrão do link
        const href = event.currentTarget.getAttribute('href') // Aqui pegamos o atributo (#contato, #animais, #contato)
        const section = document.querySelector(href) // Aqui pegamos a tag html do elemento selecionado
        const topo = section.offsetTop // Aqui pega o valor da altura do começo da seção 

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach(link => {
        link.addEventListener("click", scrollToSection)
    });
}

// Módulo que será importado, tem que exportar algo dele