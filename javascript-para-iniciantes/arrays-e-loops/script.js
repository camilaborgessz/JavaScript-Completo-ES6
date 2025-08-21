var videoGames = ['Switch', 'PS4', 'XBOX']
console.log(videoGames[2]);
// Vai mostrar o segundo elemento do array, lembrando que começa a contar do 0

console.log(videoGames.pop());
//Remove o último array e retorna

console.log(videoGames.push('3DS'));
// Adiciona um novo no final da lista

console.log(videoGames.length);
// Vê o tamanho do Array


for (var numero = 0; numero < 5; numero++) {
  console.log(numero);
}
// Primeiro criamos a variável com o valor inicial, depois colocamos a condição e depois o incremento

var i = 0
while (i <= 20) {
  i = i + 5
  console.log(i);
}

for (let item = 0; item <= videoGames.length; item++) {
  console.log(videoGames[item]);
}

// We can use 'break' to stop the loop

for (let item = 0; item <= videoGames.length; item++) {
  if (videoGames[item] === 'XBOX') {
    break
  }
  console.log(videoGames[item]);
}

let frutinhas = ['Banana', 'Limão', 'Uva', 'Abacate']

frutinhas.forEach((fruta, index, array) => {
  console.log(fruta, index, array);
})

// Para o forEach, ele vai fazer uma ação para cada elemento do array. Ele sempre volta uma callback, dentro dessa callback podemos chamar 3 parâmetros: o valor de cada elemento do array, o índice de cada elemento e o array em si

// Não é necessário ter o valor inicial e o incremento no forLoop, se tiver a condição ele já funciona

var numeroInicial = 0
var numeroFinal = 10
for (; numeroInicial <= numeroFinal;) {
  console.log(numeroInicial);
  numeroInicial = numeroInicial + 1
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < brasilCopa.length; i++) {
  console.log('O Brasil ganhou a copa de ', brasilCopa[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'Pera') {
    break
  }
  console.log(frutas[i]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[4]
console.log(ultimaFruta);
