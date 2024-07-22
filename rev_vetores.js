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

//console.log(frutas.toString())
//console.log(frutas.join('-'))
//console.log(frutas[-1])
//console.log(frutas.at(-1))