var produto = /** @class */ (function () {
    function produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    produto.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, "\n                Pre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\n");
    };
    return produto;
}());
var carrinho = /** @class */ (function () {
    function carrinho() {
        this.adicao = [];
    }
    carrinho.prototype.adicionar = function (produto) {
        this.adicao.push(produto);
        console.log("produto adicionado");
    };
    carrinho.prototype.calculartotal = function () {
        var total = 0;
        this.adicao.forEach(function (produto) {
            total += produto.preco;
        });
        console.log("Custo total: ".concat(total));
    };
    carrinho.prototype.listarLivros = function () {
        console.log("Listagem de produtos: ");
        this.adicao.forEach(function (produto) {
            console.log("" + produto.descricao());
        });
    };
    return carrinho;
}());
var prod1 = new produto("teclado gamer", 230.65);
var prod2 = new produto("mouse da razer", 100.50);
var prod3 = new produto("decoração", 150.75);
var carrin = new carrinho();
carrin.adicionar(prod1);
carrin.adicionar(prod2);
carrin.adicionar(prod3);
carrin.listarLivros();
carrin.calculartotal();
