import {filme} from './filme';
import {catalogo} from './catalogo';

function filtrarFilmesPorAno(filmes: filme[], ano: number): filme[] {
    let fi1 = new filme("A Origem", "Christopher Nolan", 2010)
    let fi2 = new filme("Interestelar", "Christopher Nolan", 2014)
    let fi3 = new filme("Matrix", "Lana e Lilly Wachowski", 1999)
    let fi4 = new filme("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994)
    let fi5 = new filme("Duna", "Denis Villeneuve", 2021)

    let cata = new catalogo()
    cata.adicionar(fi1)
    cata.adicionar(fi2)
    cata.adicionar(fi3)
    cata.adicionar(fi4)
    cata.adicionar(fi5)
    cata.listarfilmes()

}