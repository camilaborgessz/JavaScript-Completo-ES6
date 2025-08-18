var possuiGraduacao = true;
var possuiDoutorado = false;

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
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
