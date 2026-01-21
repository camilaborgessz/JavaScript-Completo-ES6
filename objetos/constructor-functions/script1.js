// Queremos criar um objeto com características parecidas a outro

const carro = {
  marca: 'Marca',
  preco: 0
}

const celular = {
  tela: "10pol",
  bateria: "5000 mh",
  marca: "samsung"
}



const honda = carro
honda.marca = "Honda"
honda.preco = 2000

const fiat = carro
fiat.marca = "Fiat"
fiat.preco = 3000

// Não da de fazer dessa maneira por que é como se você estivesse alterando os valores de um objeto apenas, não criando um outro (que é o que queremos!)

// Para fazer isso precisamos criar uma função construtora

function Carro(marcaAtribuida, precoAtribuido){
  this.marca = marcaAtribuida,
  this.preco = precoAtribuido
}

// O padrão de um Contructor Funtion é letra maiúscula
// É possível passar parâmetros dentro dela
// Usamos o this para referenciar a função (this = Carro())
// Assim podemos criar novos objetos a partir da função construtora

const mercedes = new Carro("Mercedes", 10000)
const porsche = new Carro("Porsche", 20000)

// O this torna possível visualizar fora

function Carro1(marca, precoInicial){
  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.marca = marca
  this.preco = precoFinal
}

const ferrari = new Carro1("Ferrari", 4000)

console.log(ferrari) // Aparece apenas marca e preco