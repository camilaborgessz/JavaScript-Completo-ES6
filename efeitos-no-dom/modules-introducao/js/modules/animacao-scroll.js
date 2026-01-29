
export default function animacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const metadeTela = window.innerHeight * 0.6

    function animacao() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top 
            const isSectionVisible = (sectionTop - metadeTela) < 0

            if(isSectionVisible){
                section.classList.add('ativo')
            } else {
                section.classList.remove('ativo')
            }
        });
    }

    animacao()
    window.addEventListener('scroll', animacao)
}