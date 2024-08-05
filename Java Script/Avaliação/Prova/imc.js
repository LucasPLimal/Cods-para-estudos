function calcular() {
    let peso=document.getElementById("peso").value;
    let altura=document.getElementById("altura").value;
    let imc= peso/(altura**2) 
    if (imc <18.5) {
        categoria = "Abaixo do Peso"
    }
    if (18.5<=imc<=24.9) {
        categoria = "Peso normal"
    }
    if (24.9<=imc<=29.9) {
        categoria = "Sobrepeso"
    }
    else {
        categoria = "Obesidade"
    }
    document.getElementById("resultado").innerHTML = 
    `Seu IMC é: ${imc.toFixed(2)}<br> Categoria: ${categoria}`
}