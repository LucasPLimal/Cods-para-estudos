import {funcionario} from './funcionario'
export class gerente extends funcionario {
    private bonus : number;

    constructor(nome : string, cargo : string, salario : number, bonus : number) {
        super(nome,cargo,salario);
        this.bonus = bonus;
    }

    getnome() : string {
        return this.nome;
    }

    setnome(valor : string) : void {
        this.nome = valor;
    }
    
    getcargo() : string {
    return this.cargo;
    }
    
    setcargo(valor : string) : void {
    this.cargo = valor;
    }
    
    getsalario() : number {
    return this.salario;
    }

    getbonus() : number {
        return this.bonus;
    }

    setbonus(valor : number) : void {
        if (valor <= 0)
            console.log("bonus nulo")
        else
            this.bonus = valor;
    }

    descricao() : void {
        console.log(`Nome: ${this.nome} Bonus: ${this.bonus} Salario: ${this.salario + this.bonus}`)
    }
}