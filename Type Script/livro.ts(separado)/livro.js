"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
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
exports.livro = livro;
