// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// const pessoa = new Object({
//   nome: 'André',
//   idade: 28,
// })

// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);
// honda.init('Honda').acelerar();

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// const carro = {
//   rodas: 4,
//   mala: true,
// }

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);


// const moto = {}
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumarable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede mudança de valor
//   },
// })

// moto.rodas = 4;
// delete moto.capacete;
// moto;
// // {rodas: 2}


// const moto = {}
// Object.defineProperties(moto, {
//   velocidade: {
//     get() {
//       return this._velocidade;
//     },
//     set(valor) {
//       this._velocidade = 'Velocidade ' + valor;
//     }
//   },
// })

// moto.velocidade = 200;
// moto.velocidade;
// // Velocidade 200


// Object.getOwnPropertyDescriptors(Array);
// // Lista com métodos e propriedades e Array

// Object.getOwnPropertyDescriptors(Array.prototype);
// // Lista com métodos e propriedades do protótipo de Array

// Object.getOwnPropertyDescriptor(window, 'innerHeight');
// // Puxa de uma única propriedade


// Object.keys(Array);
// // [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.keys(carro);
// // ['marca', 'ano']
// Object.values(carro);
// // ['Ford', 2018]
// Object.entries(carro);
// // [['marca', 'Ford'], ['ano', 2018]]


// Object.getOwnPropertyNames(Array);
// // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// Object.getOwnPropertyNames(Array.prototype);
// // [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.getOwnPropertyNames(carro);
// // ['marca', 'ano']


// const frutas = ['Banana', 'Pêra']
// Object.getPrototypeOf(frutas);
// Object.getPrototypeOf(''); // String

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// Object.is(frutas1, frutas2); // false


// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.freeze(carro);
// Object.seal(carro);
// Object.preventExtensions(carro);

// Object.isFrozen(carro); // true
// Object.isSealed(carro); // true
// Object.isExtensible(carro); // false


// const frutas = ['Banana', 'Uva'];
// frutas.constructor; // Array

// const frase = 'Isso é uma String';
// frase.constructor; // String


// const frutas = ['Banana', 'Uva'];

// frutas.hasOwnProperty('map'); // false
// Array.hasOwnProperty('map'); // false
// Array.prototype.hasOwnProperty('map'); // true

// Array.prototype.propertyIsEnumerable('map'); // false
// window.propertyIsEnumerable('innerHeight'); // true


// const frutas = ['Banana', 'Uva'];

// Array.prototype.isPrototypeOf(frutas); // true


// const frutas = ['Banana', 'Uva'];
// frutas.toString(); // 'Banana,Uva'
// typeof frutas; // object
// Object.prototype.toString.call(frutas); // [object Array]

// const frase = 'Uma String';
// frase.toString(); // 'Uma String'
// typeof frase; // string
// Object.prototype.toString.call(frase); // [object String]

// const carro = {marca: 'Ford'};
// carro.toString(); // [object Object]
// typeof carro; // object
// Object.prototype.toString.call(carro); // [object Object]

// const li = document.querySelectorAll('li');
// typeof li; // object
// Object.prototype.toString.call(li); // [object NodeList]
