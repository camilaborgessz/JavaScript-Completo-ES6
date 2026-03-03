export default function initModal() {
  let botaoAbrir = document.querySelector('[data-modal="abrir"]')
  let modalContainer = document.querySelector('[data-modal="container"]')
  let botaoFechar = document.querySelector('[data-modal="fechar"]')

  if (botaoAbrir && modalContainer && botaoFechar) {
    
    function toggleModal(event) {
      event.preventDefault()
      modalContainer.classList.toggle('ativo')
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event)
      }
    }

    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    modalContainer.addEventListener('click', cliqueForaModal)
  }
}

