// Na vida real não vamos criar Pessoas, Carro.... Um exemplo de como pode ser utilizado

function Dom(selector) {
  this.element = function () {
    return document.querySelector(selector)
  }
  this.ativar = function () {
    this.element().classList.add('ativar')
  }
}

const Dom1 = new Dom('li')



// Exercicios


// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome,
    this.idade = idade,
    this.andar = function () {
      console.log(nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const p1 = new Pessoa('João', 20)
const p2 = new Pessoa('Maria', 25)
const p3 = new Pessoa('Bruno', 15)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Doom(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.element = elementList;
  this.addClass = function (classe) {
    this.element.forEach(element => {
      element.classList.add(classe)
    });
  }
  this.removeClass = function (classe) {
    this.element.forEach(element => {
      element.classList.remove(classe)
    });
  }
}

const listarItens = new Doom('li')