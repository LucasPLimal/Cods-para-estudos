let a=[[1,2,3],
       [4,5,6],
       [7,8,9]]

let b=[[1,2,3],
       [4,5,6],
       [7,8,9]]

let c = somaMatrizes(a,b)
console.table(a)
console.table(b)
console.table(c)

function somaMatrizes(a,b) {
    let resultado= []
    for (i=0;i<a.length;i++) {
        resultado[i]=[];
        for (j=0;j<a.length;j++){
            resultado[i][j]=a[i][j] + b[i][j]
        }
    }
    return resultado;
}

//Soma e subtração de uma matriz só pode acontecer se elas tiverem a mesma dimensão. Certo=(3x3+3x3); Errado=(2x3+3x3)