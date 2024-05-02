/*alert("Hello World!!!!!")*/
//console.log("This message will apear here!!!");
/*let nome = prompt("Insira o seu nome.");

alert("Bem vindo " + nome + "!");

parseint- para conversão para numeros inteiros

console.log("Nome: " + nome)

let nome = prompt("Insira seu nome.");

let senha = prompt("Insira sua senha.");

if (nome == "admin" && senha == "senha123") {
    alert("Muito bem vindo admin.");
}
else {
    alert("Senha ou nome de usuário inválidos.");
}*/

let dia = parseInt( prompt("Insira um número de 1 a 7."));

switch(dia) {
    case 1: alert("Segunda-feira"); break;

    case 2: alert("Terca-feira"); break;

    case 3: alert("Quarta-feira"); break;

    case 4: alert("Quinta-feira"); break;

    case 5: alert("Sexta-feira"); break;

    case 6: alert("Sabado"); break;

    case 7: alert("Domingo"); break;

    default: alert("Numero invalido inserido.");
}