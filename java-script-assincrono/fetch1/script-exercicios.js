// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cepButton = document.querySelector('#cepButton')
const cepInput = document.querySelector('#cepInput')
const dsCep = document.querySelector('#dsCep')

cepButton.addEventListener('click', getCep)

function getCep() {
    fetch("https://viacep.com.br/ws/" + cepInput.value + "/json/")
        .then((r) => {
            return r.json()
        })
        .then((r) => {
            dsCep.innerHTML = " "
            const entries = Object.entries(r)
            entries.forEach(entrie => {
                const element = document.createElement("p")
                element.innerText = entrie[0] + ": " + entrie[1]
                dsCep.appendChild(element)
            });
        })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const dsBRL = document.querySelector("#dsBRL")

function getBtc() {
    fetch("https://blockchain.info/ticker")
        .then((r) => r.json())
        .then((r) => {
            dsBRL.innerText = r.BRL.buy
        })
}

setInterval(getBtc, 30000)

getBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

<<<<<<< HEAD
const dsJoke = document.querySelector('#dsJoke')
const next = document.querySelector('#next')

function newJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((r) => r.json())
        .then((r) => {
            dsJoke.innerHTML = r.value
        })
}
newJoke()

next.addEventListener('click', newJoke)
=======
const jokeButton = document.querySelector("#jokeButton")
const dsJoke = document.querySelector("#dsJoke")
function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((r) => r.json())
        .then((r) => dsBRL.textContent = r.value)
}

jokeButton.addEventListener('click', getJoke)
getJoke() 
>>>>>>> 3b889cb6d832012420b713e80a1f6abe156cc5c2
