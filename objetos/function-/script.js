function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'


const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta


function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);


const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');


Array.prototype.mostreThis = function () {
  console.log(this);
}

// const frutas = ['Uva', 'Maçã', 'Banana'];
frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima


const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo

const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar


// const li = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);


// const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function (item) {
  return item.classList.contains('ativo');
});

filtrarLi();


const carro2 = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10


function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6
