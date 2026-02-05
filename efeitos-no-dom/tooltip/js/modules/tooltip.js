export default function initTooltip() {
  const mapa = document.querySelector('[data-tooltip]')
  
    addTooltip(event){
        console.log(event.target)
    }


  mapa.addEventListener('mouseover', addTooltip)
}

