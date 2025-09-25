const listaAnimais = document.querySelector('.animais-lista')
console.log(listaAnimais.clientHeight);
// Ele vai mostrar a altura do elemento

console.log(listaAnimais.scrollHeight);
// Agora ele vai mostrar a altura do elemento contando com o scroll

console.log(listaAnimais.offsetHeight);
// Mostra o tamanho do elemento considerando o padding e a border

console.log(listaAnimais.offsetTop)
// Distância entre o topo do elemento e o topo da página

console.log(listaAnimais.offsetLeft)
// Distância do elemento até a parte esquerda do site

const primeiroH2 = document.querySelector('h2')

const rect = primeiroH2.getBoundingClientRect()
console.log(rect)

//Window
console.log(
  window.innerHeight,
  window.outerHeight,
  window.innerWidth,
  window.outerWidth,
  window.pageXOffset,
  window.pageYOffset,
)

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}


// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img')
console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens
let allImgs = document.querySelectorAll('img')
let contador = 0
allImgs.forEach((img)=> {
  let largura = contador += img.clientWidth
})
console.log(contador)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
links.forEach((link)=> {
  if (link.offsetWidth >= 48 && link.offsetHeight >= 48) {
    console.log(link, 'Possui acessibilidade')
  } else {
    console.log(link, 'Não possui acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width: 720px)').matches

if(browser) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
} 