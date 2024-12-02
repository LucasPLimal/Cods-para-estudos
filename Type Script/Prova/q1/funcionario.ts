export class funcionario {
    private nome : string;
    private cargo : string;
    private salario : number;

    constructor(nome : string, cargo : string, salario : number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario= salario;
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

    aplicaraumento(percentual : number) : void {
        if (percentual <= 0) 
            console.log("percentual nulo")
        else
            this.salario *=  percentual/100
    }

    descricao() : void {
        console.log(`Nome: ${this.nome} Cargo:${this.cargo} Salario: ${this.salario}`)
    }

}