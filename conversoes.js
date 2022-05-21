//tipo de dado e booleanos

//conversão implícita
const numero = 1;
const numString = "1";

console.log(numero === numString);// tipo são difetentes
console.log(numero == numString); //converte a variavel numero em string e compara
console.log(numero + numString);// converte variavel numero e concatena
//conversão explícita

console.log(numero + Number(numString));// converte variavel em numero e soma
console.log(numero + Number("numString"));// converte variavel em numero e soma, retorna erro NaN

