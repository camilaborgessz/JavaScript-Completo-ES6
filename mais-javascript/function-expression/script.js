// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Isso acontece por que em uma function expression não é possível chamar sem antes ser criada

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const nome = "Borges";

(function () {
  const nome = "Camila"
  console.log(nome);
})()

console.log(nome);





// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
