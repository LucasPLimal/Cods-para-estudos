function adicionar(){
    let nome=document.getElementById("nome").value
    let preco=document.getElementById("preco").value
    let categoria=document.getElementById("categoria").value
    let descrição=document.getElementById("descrição").value



    let tabela=document.getElementById("tabela")
    let linha=tabela.insertRow()
    linha.insertCell(0).textContent=nome
    linha.insertCell(1).textContent=preco
    linha.insertCell(2).textContent=categoria
    linha.insertCell(3).textContent=descrição

}