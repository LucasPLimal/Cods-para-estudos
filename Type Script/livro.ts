//(q1,q3,q4)

class livro {
    private titulo : string;
    private autor : string;
    private preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    public alterar_preco(novo_preco : number) : void {
        if (novo_preco >=0)
            this.preco = novo_preco;
        else
            console.log("**Valor Negativo**\n")
    }

    public descricao() : string {
        return `Livro: ${this.titulo}\n
                Autor: ${this.autor}\n
                Preço: R$ ${this.preco.toFixed(2)}\n`
    }
}

class biblioteca  {
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


let l1 = new livro("O instituto", "Stephen King", 64.99 );
let l2 = new livro("Frankenstein", "Nary Shelley", 80.45 );
let l3 = new livro("Vagabond Vol. 1", "Takehiko Inoue", 43.70 );

// let livros : livro[] = [l1,l2,l3];
// livros.forEach( livro => {
//         console.log(livro.descricao());
//         console.log("----------------------------------\n")
//     });

// l3.alterar_preco(-1.89);
// console.log(l3.descricao());

let biblio = new biblioteca();
biblio.adicionarLivro(l1)
biblio.adicionarLivro(l2)
biblio.adicionarLivro(l3)
biblio.listarLivros()
