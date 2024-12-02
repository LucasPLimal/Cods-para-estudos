import {livro} from './livro'
import {biblioteca} from './biblioteca'
import {livrodigital} from './livrodigital'

let l1 = new livro("O instituto", "Stephen King", 64.99 );
let l2 = new livro("Frankenstein", "Nary Shelley", 80.45 );
let l3 = new livro("Vagabond Vol. 1", "Takehiko Inoue", 43.70 );
let l4 = new livrodigital("O Pequeno Príncipe", "Saint-Exupery", 30.75, "PDF" );

let biblio = new biblioteca();
biblio.adicionarLivro(l1)
biblio.adicionarLivro(l2)
biblio.adicionarLivro(l3)
biblio.adicionarLivro(l4)
biblio.listarLivros()