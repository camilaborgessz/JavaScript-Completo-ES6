const doc = fetch('./doc.txt')

// fetch retorna uma promise
// fetch trata o doc como se fosse 'java-script-assincrono/fetch1/doc.txt'
// tem que estar rodando um servidor local para funcionar

const div = document.querySelector('div')

doc.then(resolucao => {
    return resolucao.json()
        .then(body => {
            div.textContent = body.bairro
            console.log(body.bairro)
        })
});


fetch('./imagem.png')
.then(response => response.blob())
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  console.log(blobUrl);
});

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  response.headers.forEach(console.log);
});

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
});
