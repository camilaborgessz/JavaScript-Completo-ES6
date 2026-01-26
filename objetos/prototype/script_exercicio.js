// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
}

const pessoa = new Pessoas("Camila", "Borges", 20)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name)
li.click;
console.log(li.click.constructor.name)
li.innerText;
console.log(li.innerText.constructor.name)
li.value;
console.log(li.value.constructor.name)
li.hidden;
console.log(li.hidden.constructor.name)
li.offsetLeft;
console.log(li.offsetLeft.constructor.name)
li.click();
console.log(li.click.constructor.name)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// String - pegadinha