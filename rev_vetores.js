let frutas=["tamarindo", "cajá", "tomate"]
frutas.push("melão","uva")
frutas.unshift("acabaxi")
frutas.splice(2, 0, "uva", "framboesa")
console.log(frutas.toString())

for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

numero = [2,3,7,8,10]
console.log(numero.toString())

quadrado = numero.map(function(num){return num ** 2})
console.log(quadrado.toString())