function filtrar() {
    let aluno = document.getElementById("aluno").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let media = (nota1+nota2+nota3)/4
    if (media >=7) {
        let situacao= "aprovado"
        }
    else {
        let situacao= "reprovado"
    }

    let tabela=document.getElementById("tabela")
    let linha=tabela.insertRow()
    linha.insertCell(0).textContent=aluno
    linha.insertCell(1).textContent=nota1
    linha.insertCell(2).textContent=nota2
    linha.insertCell(3).textContent=nota3
    linha.insertCell(4).textContent=situacao
}