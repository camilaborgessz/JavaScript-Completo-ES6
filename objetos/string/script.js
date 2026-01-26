// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorRecebimento = 0;
let valorTaxa = 0;

transacoes.forEach(i => {
    let valor = +i.valor.replace('R$ ', '')
    if(i.descricao.startsWith('Recebimento')) {
        valorRecebimento += valor 
    } else {
        valorTaxa += valor  
    }
});

console.log(valorRecebimento)
console.log(valorTaxa)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(";"))

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split("span").join("a"))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(-1))

// Retorne o total de taxas
const operacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let contador = 0;

operacoes.forEach(i => {
    i = i.toUpperCase().trim()
    if(i.startsWith("TAXA")){
        contador += 1
    }
});

console.log(contador)
