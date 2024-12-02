class produto {
    nome : string;
    preco : number;

    constructor(nome : string, preco : number) {
        this.nome = nome;
        this.preco = preco;
    }

    descricao() :string {
        return `Nome: ${this.nome}
                Preço: R$ ${this.preco.toFixed(2)}\n`
    }

}

class carrinho {
    adicao : produto[] = []

    adicionar(produto : produto) : void {
        this.adicao.push(produto);
        console.log("produto adicionado")
    }

    calculartotal() : void {
        let total = 0
        this.adicao.forEach(produto =>{
            total += produto.preco;
            })
            console.log(`Custo total: ${total}`);
        }
    listarLivros() : void {
        console.log("Listagem de produtos: ")
        this.adicao.forEach(produto => {
            console.log("" + produto.descricao())
        })
    }
}

let prod1 = new produto("teclado gamer", 230.65);
let prod2 = new produto("mouse da razer", 100.50);
let prod3 = new produto("decoração", 150.75);

let carrin = new carrinho();

carrin.adicionar(prod1);
carrin.adicionar(prod2);
carrin.adicionar(prod3);

carrin.listarLivros();
carrin.calculartotal();
