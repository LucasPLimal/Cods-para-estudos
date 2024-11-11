var livro = /** @class */ (function () {
    function livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    livro.prototype.alterar_preco = function (novo_preco) {
        if (novo_preco >= 0)
            this.preco = novo_preco;
        else
            console.log("**Valor Negativo**\n");
    };
    livro.prototype.descricao = function () {
        return "Livro: ".concat(this.titulo, "\n\n                Autor: ").concat(this.autor, "\n\n                Pre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\n");
    };
    return livro;
}());
var l1 = new livro("O instituto", "Stephen King", 64.99);
var l2 = new livro("Frankenstein", "Nary Shelley", 80.45);
var l3 = new livro("Vagabond Vol. 1", "Takehiko Inoue", 43.70);
var livros = [l1, l2, l3];
livros.forEach(function (livro) {
    console.log(livro.descricao());
    console.log("----------------------------------\n");
});
l3.alterar_preco(-1.89);
console.log(l3.descricao());
