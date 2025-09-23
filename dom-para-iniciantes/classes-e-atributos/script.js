const menu = document.querySelector('.menu')

console.log(menu.classList);
console.log(menu.classList[0]);
// Aqui vai aparecer uma lista com todas as classes que estão dentro dessa tag

menu.classList.add('ativo')
// Adicionar uma nova classe

menu.classList.remove('ativo')
// Remove a classe

menu.classList.toggle('ativo')
// Se não tem a classe então ele adicionar, se a classe já está inserida ele remove

if (menu.classList.contains('ativo')) {
  menu.classList.add("esta-ativo")
} else {
  menu.classList.add("inativo")
}
// Vai avaliar com true ou false

menu.className += " teste"
console.log(menu.classList);
// Pega a string da classe e adiciona outra string

const animais = document.querySelector('.animais')
console.log(animais.attributes);

console.log(animais.attributes.id);
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img')
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));
// Pega o que está dentro do atributo

const alt = img.setAttribute('alt', "É uma raposa")
// Colocar o nome do atributo e o valor

console.log(img.hasAttribute('alt'))
// Checa se tem um atributo, vai dar true ou false

img.removeAttribute('alt')
//Remover

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach(itensMenu => {
  itensMenu.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(itensMenu => {
  itensMenu.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')
imgs.forEach((img)=> {
  const possuiAlt = img.hasAttribute('alt')
  console.log(possuiAlt);
})

// Modifique o href do link externo no menu
itensMenu[3].setAttribute('href', '/')