//calculando area de quadrado com variaveis do tipo var;

// var comprimento = 7;
// var altura = 5;
// area = comprimento * altura;
// console.log(area);
// var area;

//variaveis do tipo VAR são processadas antes de qualquer 
//de qualquer outra execução de código, mais propensa a bugs

//calculando area de quadrado usando let

// let comprimento = 7;
// let altura = 5;

// area = comprimento * altura;
// console.log(area);

// let area;

//LET tem o escopo diferente de VAR, ele não é executado primeiro
//segue a execução do codigo em cascata, deve ser usado no lugar de VAR, 
//para variaveis que sabemos que vai ser mudar de valor.

//usando const calculo de quadrado

const comprimento = 7;
const altura = 5;
let area = 0;

area = comprimento * altura;
console.log(area);

//CONST segue a quase a mesma logica de LET, a diferença é que ela deve ser usada 
//para variaveis que não vão mudar de valor, elas devem ser inicializadas
