const nome = "Rodrigo";

//Instancia o Objeto Date
let anoAtual = new Date();

//Usa o método de Date para pegar o ano Atual e subtrai o ano do aniversario
const idade = anoAtual.getFullYear() - 1992;

//concatena string com number
console.log("Rodrigo, " + idade + " anos.")