// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ')
numeros = Math.max(...numeros)
console.log(numeros)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let soma = 0.00;

listaPrecos.forEach(element => {
    element = +parseFloat(element.toUpperCase().replace("R$", '').trim().replace(',', '.')).toFixed(2)
    soma = soma += element
});


console.log(soma);
