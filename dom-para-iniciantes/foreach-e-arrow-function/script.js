const imgs = document.querySelectorAll('img')
// Seleciona todas as imagens, sai uma NodeList

let i = 0
imgs.forEach(function (item, index, array) {
    console.log(item, index, array);
})

// o forEach recebe alguns parâmetros padrões 
// item: da o loop por cada item do array
// index: mostra a posição do elemento no array
// array: mostra o array


const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach((element, index, array) => {
    console.log(element, index, array);
})

//Exercício

// Mostre no console cada parágrado do site
console.log(document.querySelectorAll("p"));

// Mostre o texto dos parágrafos no console
const textos = document.querySelectorAll("p")
textos.forEach((item)=> {
    console.log(item);
})

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// Corrigido:
const imagens = document.querySelectorAll('img');
const imagensArray = Array.from(imagens)

imagensArray.forEach((item, index) => {
  console.log(item, index);
});

let index = 0;
imgs.forEach(() => {
  console.log(index++);
});

imgs.forEach(() => index++);