export class livro {
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