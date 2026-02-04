
export default function initAccordion() {
  console.log('estou aqui')
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