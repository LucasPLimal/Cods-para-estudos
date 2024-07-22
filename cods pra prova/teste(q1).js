function repetir() {
    let frase = document.getElementById("frase").value;
    let n = document.getElementById("quantidade").value;

    document.getElementById("resultado").innerHTML = "";
    for (let i=0; i<n; i++) {
        document.getElementById("resultado").innerHTML = 
            `${frase} <br>`;
    }
}