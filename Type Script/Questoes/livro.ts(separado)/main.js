"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var biblioteca_1 = require("./biblioteca");
var livrodigital_1 = require("./livrodigital");
var l1 = new livro_1.livro("O instituto", "Stephen King", 64.99);
var l2 = new livro_1.livro("Frankenstein", "Nary Shelley", 80.45);
var l3 = new livro_1.livro("Vagabond Vol. 1", "Takehiko Inoue", 43.70);
var l4 = new livrodigital_1.livrodigital("O Pequeno Príncipe", "Saint-Exupery", 30.75, "PDF");
var biblio = new biblioteca_1.biblioteca();
biblio.adicionarLivro(l1);
biblio.adicionarLivro(l2);
biblio.adicionarLivro(l3);
biblio.adicionarLivro(l4);
biblio.listarLivros();
