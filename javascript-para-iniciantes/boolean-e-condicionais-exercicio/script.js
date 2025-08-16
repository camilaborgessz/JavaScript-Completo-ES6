// Verifique se a sua idade é maior do que a de algum parente
let minhaIdade = 20
let idadeMai = 28

if(minhaIdade > idadeMai){
  console.log("Sou mais velha que a Mai");
} else if(idadeMai > minhaIdade) {
  console.log("Mai é mais velha do que eu");
} else {
  console.log("Idade é igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);



// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china) {
  console.log("Brasil tem mais pessoas");
} else {
  console.log("China tem mais pessoas");
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}