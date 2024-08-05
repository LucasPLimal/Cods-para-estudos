//let frutas= ["maça","banana","laranja"] //literal array
//ou
let frutas =new Array("maça","banana","laranja") //construtor de array

frutas[0]; // Maçã

frutas.unshift("morango") // add um elemento no inicio de um array
frutas.shift() //remove um elemento no inicio do array

frutas.push("manga") //add um elemento no final do array
frutas.pop() //remove o ultimo elemento de um array

delete frutas[i] //remove um elemento do array deixando buraco

frutas.length //retorna o tamanho do array

frutas.toString(); //transforma em string separando por virgula
frutas.join(" - "); //junta todos os elementos do array e separa com um separador especifico

frutas.at(-1); // Retorna o elemento em um índice específico. 
//Aceita valores negativos para começar do final

frutas.concat(["Kiwi", "Melão"]); //combina o array com outros arrays e/ou valores

frutas.copyWithin(2, 0, 2); //copia uma sequência de elementos do array dentro do próprio array para a posição especificada.
frutas.splice(2, 0, "Pera", "Pêssego"); //adiciona e/ou remove elementos de um array

