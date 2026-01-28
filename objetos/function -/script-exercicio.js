// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
let paragrafos = document.querySelectorAll('p')
paragrafos = Array.from(paragrafos)

const contarCaracteres = paragrafos.reduce((acc, p) => p.innerText.length + acc, 0)

console.log(contarCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function NovoElemento(tag, classe, conteudo){
    this.tag = document.createElement(tag),
    this.classe = this.tag.classList.add(classe),
    this.conteudo = this.tag.innerText = conteudo
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novoElemento = {
    tag: "h1",
    classe: "titulo",
    conteudo: ""
}

function ElementoClasse(conteudo){
    this.tag = document.createElement(this.tag);
    this.tag.classList.add(this.classe);
    this.conteudo = this.tag.innerText = conteudo;
}

ElementoClasse.call(novoElemento, "ola mundo")