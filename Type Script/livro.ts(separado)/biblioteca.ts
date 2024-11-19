import {livro} from './livro';

export class biblioteca  {
    livros : livro[] = [];

    adicionarLivro(livro : livro) : void{
        this.livros.push(livro)
        console.log("Livro adicionado");
    } 
    listarLivros() : void {
        console.log("Listagem de livros: ")
        this.livros.forEach(livro => {
            console.log("" + livro.descricao())
        })
    }
}