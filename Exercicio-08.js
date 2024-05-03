let peso = parseFloat(prompt("Insira seu peso."))

let altura = parseFloat(prompt("Insira sua altura."))

let IMC = peso/(altura*altura);

console.log(IMC)

if(IMC < 18.5) {
    alert("Abaixo do peso")
}
else if(IMC >= 18.5 && IMC <= 24.9) {
    alert("Peso normal")
}
else if(IMC >= 25 && IMC <= 29.9) {
    alert("Sobrepeso")
}
else if(IMC >= 30 && IMC <= 34.9) {
    alert("Obesidade grau 1")
}
else if(IMC >= 35 && IMC <= 39.9) {
    alert("Obesidade grau 2")
}
else if(IMC >= 40) {
    alert("Obesidade grau 3")
}