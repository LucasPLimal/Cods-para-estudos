function verificar() {
    let numero=document.getElementById("divisivel").value;
    let parimp= (numero%2 === 0) ? "par" : "impar";
document.getElementById("resultado").innerHTML=
`${numero} é ${parimp}`

}