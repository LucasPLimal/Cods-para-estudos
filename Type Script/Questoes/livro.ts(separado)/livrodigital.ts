import {livro} from './livro'
export class livrodigital extends livro {
    private formato : string;

    constructor(titulo : string, autor : string, preco : number, formato : string) {
        super(titulo, autor, preco);
        this.formato = formato;
    }
    descricao() : string {
        return `${super.descricao()}\n               #Formato: ${this.formato}\n`
    }
}