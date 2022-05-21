//boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

const zero = 0; //false
const one = 1; //true

console.log(zero == false); //retorna true ou seja valores iguais
console.log("" == false); //string vazia, também é considerada false
console.log(one == true); //retorna true ou seja valores iguais

let indefinido;
let vazio = null;

console.log(typeof indefinido);
console.log(typeof vazio);