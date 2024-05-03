let nota = parseInt(prompt("Insira a nota."));

let nota2 = parseInt(prompt("Insira a nota."));

let nota3 = parseInt(prompt("Insira a nota."));

let nota4 = parseInt(prompt("Insira a nota."));

let notat = (nota + nota2 + nota3 + nota4)/4;

if(notat >= 7) {
    alert("Você está aprovado!!");
}

else if(notat < 7 && notat >= 5){
    alert("Você está de recuperação.");
}

else {
    alert("Você está reprovado.");
}