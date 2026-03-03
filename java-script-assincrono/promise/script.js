const login = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('login efetuado');
    }, 1800)
})

const dados = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('dados carregados');
    }, 1500)
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then(resposta => { 
    console.log(resposta);
})