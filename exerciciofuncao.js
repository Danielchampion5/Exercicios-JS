//funcao de menu

function Exercicio01() {
    let nome = prompt("Insira seu nome.");

    let senha = prompt("Insira sua senha.");

    if (nome == "admin" && senha == "senha123") {
        alert("Muito bem vindo admin.");
    }
    else {
        alert("Senha ou nome de usuário inválidos.");
    }
}

function Exercicio02() {
    let dia = parseInt(prompt("Insira um número de 1 a 7."));

    switch (dia) {
        case 1: alert("Segunda-feira"); break;

        case 2: alert("Terca-feira"); break;

        case 3: alert("Quarta-feira"); break;

        case 4: alert("Quinta-feira"); break;

        case 5: alert("Sexta-feira"); break;

        case 6: alert("Sabado"); break;

        case 7: alert("Domingo"); break;

        default: alert("Numero invalido inserido."); break;
    }
}

function Exercicio03() {
    let numero = parseInt(prompt("Insira um numero."));

    if (numero % 2 == 0) {
        alert("Numero par inserido")
    }
    else {
        alert("Numero impar inserido.")
    }
}

function Exercicio04() {
    let nota = parseInt(prompt("Insira a nota."));

    let nota2 = parseInt(prompt("Insira a nota."));

    let nota3 = parseInt(prompt("Insira a nota."));

    let nota4 = parseInt(prompt("Insira a nota."));

    let notat = (nota + nota2 + nota3 + nota4) / 4;

    if (notat >= 7) {
        alert("Você está aprovado!!");
    }

    else if (notat < 7 && notat >= 5) {
        alert("Você está de recuperação.");
    }

    else {
        alert("Você está reprovado.");
    }
}

function Exercicio05() {
    let a = parseInt(prompt("Insira um número."));

    let b = parseInt(prompt("Insira mais um número."));

    let c = parseInt(prompt("Mais um número, por favor."));

    if (a < b && b < c) {
        alert("Estes numeros estão em ordem crescente.")
    }

    else if (a > b && b > c) {
        alert("Estes numeros estão em ordem decrescente.")
    }

    else {
        alert("Os numeros inseridos não estão nem em ordem crescente,\nnem em ordem decrescente.")
    }
}

function Exercicio06() {
    let ano = parseInt(prompt("Informe seu ano de nascimento."))

    let idade = 2024 - ano;

    console.log(idade)

    if (idade >= 18) {
        alert("Você é maior de idade.")
    }

    else {
        alert("Você não é maior de idade.")
    }
}

function Menu() {
    let opcao = parseInt(prompt("Deseja iniciar o programa\n1-Sim 0-Não"))

    if (opcao == 0) {
        alert("Fechando o programa...")
    }

    while (opcao > 0) {

        let resposta = parseInt(prompt("Informe qual exercicio você deseja iniciar?\n1-Exercicio1 2-Exercicio2 3-Exercicio3 \n4-Exercicio4 5-Exercicio5 6-Exercicio6\n\n*Digite 0 para sair*"))

        if (resposta == 0) {
            alert("Fechando o programa...")
            break;
        }

        switch (resposta) {

            case 1: Exercicio01();
                break;

            case 2: Exercicio02();
                break;

            case 3: Exercicio03();
                break;

            case 4: Exercicio04();
                break;

            case 5: Exercicio05();
                break;

            case 6: Exercicio06();
                break;

            default: alert("Número incorreto inserido.")
                break;
        }

        
    }
}

Menu()
