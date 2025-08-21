var nome = 'Camila'

console.log(nome.length);
console.log(nome.charAt(2));
console.log(nome.replace ('mi', 'momi'));
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

var altura = 1.8
console.log(altura.toFixed());
console.log(altura.toString());

function areaQuadrado(lado){
  return lado * lado
}

console.log(areaQuadrado.toString())
console.log(areaQuadrado.length)

// Elementos do DOM
//Existe um obj chamado document
 var btn = document.querySelector('.btn') 

 // Para selecionar uma tag ou elemento dentro do HTML
 // O argumento passado dentro do query é um seletor CSS

 // O elemento do DOM possui métodos e propriedades também

 btn.addEventListener('click', function(){
  console.log('botão');
 })

console.log(btn.classList)
// Vai listar todas as classes 

console.log(btn.classList.add('ativo'));
// Adiciona uma classe 

console.log(btn.innerText);
// Vai mostrar o nome, o que está escrito entre as tags

// Comunicação entre duas máquinas, código com código = api


// nomeie 3 propriedades ou métodos de strings
var name = "João Wesley"
console.log(name.length);
console.log(name.toLowerCase());
console.log(name.replace('João', 'Camila'));

// nomeie 5 propriedades ou métodos de elementos do DOM
var paragraph = document.querySelector('.paragraph')
console.log(paragraph.classList)
console.log(paragraph.classList.add('teste'))
console.log(paragraph.innerHTML)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
