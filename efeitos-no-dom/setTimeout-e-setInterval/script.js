// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// const html = document.querySelector('html')

// setInterval(() => {
//   html.classList.toggle('vermelho')
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const start = document.querySelector('[data-cronometro="start"]')
const pauseBtn = document.querySelector('[data-cronometro="pause"]')
const tempo = document.querySelector('[data-cronometro="tempo"]')

start.addEventListener('click', clock)

let i = 0

function clock(value) {
  const counting = setInterval(() => {
    i++
    tempo.textContent = "tempo: " + i
    start.setAttribute('disabled', '')
  }, 1000);
  do {
    counting
  }
  while (pauseBtn.addEventListener('click', () => { 
    clearInterval(counting) 
    start.removeAttribute('disabled', '')
  }))
  }

pauseBtn.addEventListener('dblclick', resetar)

function resetar() {
  start.removeAttribute('disabled', '')
  i = 0 
  tempo.textContent = "tempo:" + i
}