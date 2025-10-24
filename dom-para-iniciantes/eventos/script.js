const img = document.querySelector('img')

function callback() {
  console.log('clicou')
}

img.addEventListener('click', callback)

// Propriedades do event

const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
  const currentTarget = event.currentTarget // Mostra o item que está adicionado o evento 
  const target = event.target // Mostra onde o click ocorreu 
  const type = event.type // Mostra o tipo do evento
  const path = event.path; // Mostra todo o caminho até o elemento
}

const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event) {
  event.preventDefault()
  console.log(event.currentTarget.href)
}

linkExterno.addEventListener('click', clickNoLink)

const p = document.querySelector('p')

function show(event) {
  console.log(event.currentTarget)
  console.log(this)
}

p.addEventListener('click', show)

// O this aqui se referência ao elemento que estamos chamando

// Alguns eventos
// p.addEventListener('mouseenter', show)
// Quando o mouse passa em cima do elemento

// p.addEventListener('mousemove', show)  
// A cada movimento que o mouse faz em cima do elemento

// window.addEventListener('scroll', show) 
// Quando você scrolla a tela

// window.addEventListener('resize', show) 
// Quando o tamanho da tela diminui ou aumenta

// window.addEventListener('keydown', show) 
// Quando você pressiona alguma tecla 

// O evento de keyboard é muito interessante pois possui várias coisas
function handleColor(event) {
  if (event.key === 'a')
    document.body.classList.toggle('azul')
  else if (event.key === 'v') {
    document.body.classList.toggle('vermelho')
  }
}

window.addEventListener('keydown', handleColor)

const imgs = document.querySelectorAll('img')

function getSrc(event) {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach(img => {
  img.addEventListener('click', getSrc)
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('[href^="#"]')

linksInternos.forEach(link => {
  link.addEventListener('click', linksInternosToggle)
});

function linksInternosToggle(event) {
  event.preventDefault()
  linksInternos.forEach(link => {
    link.classList.remove('ativo')
  });
  this.classList.add('ativo')

  console.log('esse', this)
  console.log(linksInternos)
}


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body')
console.log(allElements);

allElements.forEach(element => {
  element.addEventListener('click', (event) => {
    console.log('esse elemento que está sendo clicado', event.target)
  })
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

allElements.forEach(element => {
  element.addEventListener('click', (event) => {
    console.log(event.target)
    event.target.remove()
  })
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const textos = document.querySelectorAll('p, a, h1, h2, h3')

function aumentarTexto(event) {
  if (event.key == 't') {
    document.documentElement.classList.toggle('texto-maior')
  }
}

window.addEventListener('keydown', aumentarTexto)