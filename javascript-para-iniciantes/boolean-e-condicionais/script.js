var possuiGraduacao = true

if(true){
  console.log('É verdadeiro');
}

if(possuiGraduacao){
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

var possuiDoutorado = true

if(possuiDoutorado){
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui nada");
  
}