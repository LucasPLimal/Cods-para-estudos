function printar(){
    let nome= document.getElementById("nome").value;
    let sobrenome= document.getElementById("sobrenome").value;
    document.getElementById("resultado").innerHTML = `Seu nome é ${nome} ${sobrenome}`;
}
