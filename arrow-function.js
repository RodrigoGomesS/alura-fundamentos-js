function apresentar(nome){
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const autorizacao = (idade) => {
    if (idade >= 18) {
        console.log("Cerveja");
    } else {
        console.log("suco");
    }
}

//arrow function se comporta como uma expressao

autorizacao(19);