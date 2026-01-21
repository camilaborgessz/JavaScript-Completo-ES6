function Carro(modelo, preco){
    this.modelo = modelo,
    this.preco = preco
}

const honda = new Carro('civic', 130000)

Carro.prototype.andar = function(){
    return this.modelo + " andou"
}

