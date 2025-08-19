var pessoa = {
  nome: 'Camila',
  idade: 20,
}
// chave e valor

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado + lado
  },
  perimetro(lado) {
    return lado * this.lados
  }
}

console.table(quadrado)
// O console é um objeto e o table é um método que está dentro desse objeto

// As propriedades de um objeto são as variáveis que foram criadas nele, e os métodos de um objeto são as funções que foram criadas dentro do objeto.

// Dot Notation Get
// Usamos o . para pegar valores que estão dentro de uma variável

var menu = {
  width: 10,
  height: 30,
  bg: 'blue'
}

var bg = menu.bg

// Dot Notation Set
// Usamos o valor de uma propriedade utilizando o . também e o = após

menu.nome = 'pagina'
menu.bg = 'red'
console.log(menu.nome, menu.bg);

// O objeto herda propriedade e métodos que foram utilizados para criar o mesmo, por exemplo:

menu.hasOwnProperty('width') //true

// Verifica se o menu tem a propriedade 'width'

//Exercicios

// Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: 'Camila',
  sobrenome: 'Borges',
  idade: 20,
  curso: 'Sistema de Informação'
}

console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
}

console.log(dadosPessoais.nomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if(pessoa === "Homem"){
     return "Au, au" 
    } else {
      return '...'
    }
  }
}

