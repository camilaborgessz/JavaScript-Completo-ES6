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

console.log(animaisLista.parentElement.parentElement.parentElement); // Mostra as tags pai do elemento

console.log(animaisLista.previousElementSibling); // Mostra o elemento anterior

console.log(animaisLista.nextElementSibling); // Mostra o próximo elemento

console.log(lista.children); // Cria uma HTMLColletion com todas as tags dentro do elemento selecionado

console.log(lista.children[0]); // Como o HTMLCollection é um array, podemos selecionar e manipular os elementos assim. Nesse selecionamos o primeiro elemento da lista

console.log(lista.children[lista.children.length - 1]);

lista.querySelectorAll('li')
lista.querySelector('li:last-child')