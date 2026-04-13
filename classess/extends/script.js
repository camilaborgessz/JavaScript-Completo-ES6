class Veiculo {
  constructor(rodas){
    this.rodas = rodas
  }
  acelerou(){
    console.log("Acelerou com ", this.rodas, " rodas");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete){
    super(rodas)
    this.capacete = capacete
  }
  empinar(){
    console.log("Empinou com capacete ", this.capacete);
  }
}

const honda = new Moto(2, true)
console.log(honda);
