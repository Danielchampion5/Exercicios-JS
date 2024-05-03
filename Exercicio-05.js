let a = parseInt(prompt("Insira um número."));

let b = parseInt(prompt("Insira mais um número."));

let c = parseInt(prompt("Mais um número, por favor."));

if(a<b && b<c) {
    alert("Estes numeros estão em ordem crescente.")
}

else if(a>b && b>c) {
    alert("Estes numeros estão em ordem decrescente.")
}

else {
    alert("Os numeros inseridos não estão nem em ordem crescente,\nnem em ordem decrescente.")
}