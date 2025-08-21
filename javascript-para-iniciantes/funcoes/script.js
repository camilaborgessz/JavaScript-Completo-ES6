function sum(a, b) {
  return a + b
}
console.log(sum(2, 3));

function imc(peso, altura) {
  var imc = peso / (altura * altura)
  return imc
}
console.log(imc(56, 1.68))

addEventListener('click', function () {
  console.log("Clicouu");
})

// Crie uma função para verificar se um valor é Truthy
<<<<<<< HEAD
function verificaTruthy(valor) {
  return value
  // if (value) {
  //   return "true"
  // } else {
  //   return "false"
  // }
}

console.log(verificaTruthy(0));
console.log(verificaTruthy(50));
console.log();





// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par
=======
function isTruthy(dado) {
  return !!dado
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado1) {
  var perimetro = lado1 * 4
  return perimetro
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome
}


// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number == 0 || number % 2 == 0) {
    return "Par"
  } else {
    return "Ímpar"
  }
}
>>>>>>> 5b4832c0ab7fb0a1fe89d9ea72d736980486c0c1

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

<<<<<<< HEAD
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo

// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);


=======
function type(valor) {
  return typeof valor;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
  console.log('Camila');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))
>>>>>>> 5b4832c0ab7fb0a1fe89d9ea72d736980486c0c1
