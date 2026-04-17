// Crie uma factory function chamada criarPessoa que recebe nome e idade e retorna um objeto com esses dados e um método apresentar() que retorna a string "Olá, sou [nome] e tenho [idade] anos."

function criarPessoa(nome, idade) {
  function apresentar() {
    return `Olá, sou ${nome} e tenho ${idade} anos`
  }

  return {
    nome,
    idade,
    apresentar
  }
}

const camila = criarPessoa("Camila", 21)
console.log(camila.apresentar());