import {funcionario} from './funcionario'
export class empresa {
    nome : string;
    totalfuncionarios : funcionario[] = []

    constructor(nome : string) {
        this.nome = nome
    }

    adicionarfuncionario(funcionario : funcionario): void {
        this.totalfuncionarios.push(funcionario);
        console.log("funcionario adicionado")
    }

    listarfuncionarios() : void {
        console.log("Listagem de produtos: ")
        this.totalfuncionarios.forEach(funcionario => {
            console.log("" + funcionario.descricao())
        })
    }
}