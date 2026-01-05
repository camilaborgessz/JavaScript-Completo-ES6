// A ideia é que haja duas listas, quando você interage com um elemento da primeira lista ela se relaciona com um conteúdo da outra lista

// No html adicionamos uma outra classe para que possamos usar ela para manipular por aqui, pois pode acontecer de usar a outra classe e ela bater com a classe de estilização do elemento. Vamos padronizar essas tags colocando elas sempre com o começo "js"

// Primeiro selecionamos os elementos específico aos quais iremos aplicar o loop 

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
tabContent[0].classList.add('ativo')

// Depois vamos criar uma função para ativar as tabs de acordo com sua posição no index

if (tabContent.length && tabMenu.length)
    function activeTab(index) {
        tabContent.forEach((item) => {
            item.classList.remove("ativo")
        });
        tabContent[index].classList.add("ativo")
    }

tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
        activeTab(index)
    })
});

// Agora é alterar nosso CSS para que ele esconda o conteúdo que não estiver com a classe ativo adicionada
