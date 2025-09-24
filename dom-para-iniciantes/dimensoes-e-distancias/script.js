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
