"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.biblioteca = void 0;
var biblioteca = /** @class */ (function () {
    function biblioteca() {
        this.livros = [];
    }
    biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro adicionado");
    };
    biblioteca.prototype.listarLivros = function () {
        console.log("Listagem de livros: ");
        this.livros.forEach(function (livro) {
            console.log("" + livro.descricao());
        });
    };
    return biblioteca;
}());
exports.biblioteca = biblioteca;
