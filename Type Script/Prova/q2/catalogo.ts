import {filme} from './filme'
export class catalogo {
    filmes : filme[] = []

    adicionar(filme : filme) : void {
        this.filmes.push(filme);
        console.log("filme adicionado")
    }
    
    listarfilmes() : void {
        console.log("Listagem de produtos: ")
        this.filmes.forEach(filme => {
            console.log("" + filme.descricao())
        })
    }
}