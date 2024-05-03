let preco = parseFloat(prompt("Insira o valor da compra."))

if(preco <= 100.00){
   alert("Preço a se pagar: " + preco)
}
else if(preco >= 100.01 && preco <= 200) {
let precod = preco * 0.9;

    alert("Preço a se pagar: " + precod)
}
else if(preco > 200) {
    let precod2 = preco * 0.8;
    
        alert("Preço a se pagar: " + precod2)
    }