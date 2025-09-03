const imgs = document.querySelectorAll('img')

let i = 0
imgs.forEach(function(item, index, array){
    console.log(item, index, array);
})

// o forEach recebe alguns parâmetros padrões 
    // item: da o loop por cada item
    // index: mostra a posição do elemento no array
    // array: mostra o array

