// Seleciona o ID 
const contatoSection = document.getElementById('contato');

// Seleciona o elemento pela class ou pela tag
const contato = document.getElementsByClassName('grid-section contato');
const contato2 = document.getElementsByTagName('grid-section contato');

// Busca o primeiro elemento 
const animais = document.querySelector('.animais');
const contato3 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Seleciona todos os elementos da lista
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Diferente do getElementsByTagName, a lista aqui é estática

// Qual a diferença do HTMLCollection e do NodeList?

//  A lista NodeList retornada como querySelectorAll é estática


// A Nodelist se mantem, não atualiza, mas o HTMLCOllection atualiza
const menu = document.getElementById('menu')
const grid = document.getElementsByClassName('grid-section')

// Não precisa colocar o . na frente do nome das classes

const ul = document.getElementsByTagName('ul')

// No tag e no class usamos Elements por que vem uma lista de elementos

console.log(ul[0]);

// O mais usado é o querySelector. Nos chamamos com se estivesse no CSS, é mais fácil. Ele pega o primeiro que aparecer

const primeiraLi = document.querySelector('li')
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]')
console.log(linksInternos);


// Outro que também vamos usar bastante é o querySelectorAll. Ele seleciona todos os elementos compatívies

const imgAnimais = document.querySelectorAll('.animais img')
console.log(imgAnimais[2]);

// Retorne no console todas as imagens do site
const images = document.querySelectorAll('img')
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagens = document.querySelectorAll('[src^="img/imagem"]')
console.log(imgImagens);

// Selecione todos os links internos (onde o href começa com #)
const someLinks = document.querySelectorAll('[href^="#"]')
console.log(someLinks);
// Esse ^= mostra que só estamos buscando o que é parecido, não igual

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[--ultimoP.length]);



