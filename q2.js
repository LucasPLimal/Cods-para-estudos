function converter() {
    let celsius=document.getElementById("temperatura").value;
    let fahrenheit= celsius*1.8+32
    document.getElementById("resultado").innerHTML=
    `Valor(Fº): ${fahrenheit}`
}