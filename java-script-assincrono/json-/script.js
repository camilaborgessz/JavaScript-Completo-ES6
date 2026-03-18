fetch('./dados.json')
  .then(r => r.text())
  .then(r => {
    localStorage.json = r
  })

// JSON.PARSE
// É usado para transformar um texto em json

//JSON.stringify
// Usado para tranformar um json em um texto

