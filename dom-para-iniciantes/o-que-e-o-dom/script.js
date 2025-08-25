// window.alert('Alert')
const href= window.location.href
console.log(href);


// Para selecionar uma tag no html
const h1 = document.querySelector('h1')

// Não precisa colocar o window, pode começar já com a propriedade ou método que você quer

const h1Classes = h1.classList

console.log(h1Classes)
console.log(h1Classes[0])
// Isso não é um array


// Mais exemplos de funções
console.log(h1.innerHTML) // Mostra o texto que está dentro do HTML
console.log(h1.id) // Mostra o id
console.log(h1.offsetHeight) // Mostra o tamanho da altura 
h1.addEventListener('click', () => console.log('ola')) // Adiciona um listener event, precisa da ação e depois de uma função callback


// Retorne o url da página atual utilizando o objeto window
console.log(document.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
console.log(document.querySelector('.ativo'))

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela 
console.log(innerWidth);
