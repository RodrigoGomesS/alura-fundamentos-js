
/* codigo onde executavamos duas funcões iguais

const lukeLogin = () => {
    let array = [];
    for (i = 0; i < 90000; i++) {
        array.push(i);
    }
    return "Luke logado com sucesso!"
}

const leiaLogin = () => {
    let array = [];
    for (i = 0; i < 90000; i++) {
        array.push(i);
    }
    return "Leia logada com sucesso!"
}

console.log(lukeLogin());
console.log(leiaLogin());
*/

/* codigo onde executamos uma função e recebemos parametros, não executamos mais de uma função
const usuarioLogin = (pessoa) => {
    let array = [];
    for( i = 0; i < 90000; i++){
      array.push(i);
    }
    return `${pessoa} logou com sucesso no sistema!`;
  }
  
  console.log(usuarioLogin("Luke"));
  console.log(usuarioLogin("Leia"));
*/

/*separamos as responsabilidades de validação e resposta 
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin = (nome) => {
    let array = [];
    for( i = 0; i < 90000; i++){
      array.push(i);
    }
    return acesso(nome);
  }
  
console.log(usuarioLogin("Luke"));
*/

/* criada uma funçao pra autenticação de cargo
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso(nome)
  }
  
  const diretoriaLogin = (nome) => {
    let array = []
    for( i = 0; i < 900000; i++){
        array.push(i)
    }
    return acesso(nome)
  }
  
  console.log(diretoriaLogin("Leia"))
  */

  //codigo completo separação de resposabilidades em cada função, validação de usuario, validação de cargo 
  //resposta de autenticação
  const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }

  console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica));