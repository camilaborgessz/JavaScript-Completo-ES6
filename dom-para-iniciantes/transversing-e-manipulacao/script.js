const primeiroh1 = document.querySelector('h1')
console.log(primeiroh1.innerText); // Vem apenas o texto que esta inserido dentro do H1

const animaisLista = document.querySelector('.animais-descricao')
console.log(animaisLista.innerText); // Apenas o texto dentro das tags HTML
console.log(animaisLista.innerHTML); // Aparece todo o conteúdo HTML 

const lista = document.querySelector('.animais-lista')


// É possível manipular o conteúdo dentro do HTML
primeiroh1.innerHTML = '<p>Olá</p>'

animaisLista.innerText = "blablablaaa"

// O outerHTML pega toda a tag que envolve o HTML

console.log("parents", animaisLista.parentElement.parentElement.parentElement); // Mostra as tags pai do elemento

console.log(animaisLista.previousElementSibling); // Mostra o elemento anterior

console.log(animaisLista.nextElementSibling); // Mostra o próximo elemento

console.log(lista.children); // Cria uma HTMLColletion com todas as tags dentro do elemento selecionado

console.log(lista.children[0]); // Como o HTMLCollection é um array, podemos selecionar e manipular os elementos assim. Nesse selecionamos o primeiro elemento da lista

console.log(lista.children[lista.children.length - 1]);

lista.querySelectorAll('li')
lista.querySelector('li:last-child')

// O node pega tudo que está no documento, isso inclui até mesmo quebras de linha. Quando usamos algumas propriedades tipo para selecionar o element acima ele vai realmente fazer isso, sem ignorar espaços ou comentários 

console.log(lista.childNodes); // Aparece todos os elementos que estão lá.

console.log(lista.previousSibling) // Vai aparecer um espaço, pois é a quebra de linha que demos entre as tags

// Manipulando elementos

const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const animais = document.querySelector('.animais')
const mapa = document.querySelector(".mapa")

animais.appendChild(titulo)

// appendChild leva o elemento que queremos mover e colocar esse elemento como último filho da lista
// Ou seja vamos pegar a lista e colocar o titulo como último filho da lista

contato.insertBefore(animais, titulo)

// No insert before usamos três parâmetros
// O primeiro é o pai, onde queremos inserir
// O segundo é o que você quer mover
// O último é o elemento que você quer que coloque antes
// O último elemento deve estar dentro do primeiro elemento ( o elemento pai )

contato.removeChild(titulo)

// Remove o elemento

contato.replaceChild(animais, titulo)

// O primeiro elemento é a classe pai, onde vai ocorrer a substituição
// O segundo elemento é o que você vai querer que seja substituído
// O terceiro elemento é o que vai substituir o segundo elemento

// Para criar novos elementos a partir do javaScript
const menu = document.querySelector(".menu")

let novo = document.createElement('h1')
novo.innerText = "Novo Título"
novo.classList.add('titulo')

menu.appendChild(novo)

// Para clonar um elemento usamos o cloneNode, ele tem resultado true, quando vai passar todos os elementos filhos também e o parâmetro false, onde so vai vir a tag que está envolvida

const faq = DocumentTimeline.querySelector(".faq")
const h1 = document.querySelector("h1")

const cloneH1 = h1.cloneNode(true)
faq.appendChild(cloneH1)