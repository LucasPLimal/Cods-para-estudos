class conta {
    private titular : string;
    private saldo : number;

    constructor(titular : string, saldo : number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    descricao() : void {
         console.log(`Titular: ${this.titular}
                     Saldo: R$ ${this.saldo.toFixed(2)}`)
    }

    depositar(valor : number) {
        this.saldo -= valor
        console.log(`${valor} depositado`)
    }

    sacar(valor: number) {
        this.saldo += valor
        console.log(`${valor} sacado`)
    }

    mostrarsaldo() : void {
        console.log(`Saldo atual: ${this.saldo}`)
    }
}

let pessoa = new conta("Junin", 12000.75);
pessoa.descricao();
pessoa.sacar(1700);
pessoa.depositar(11000);
pessoa.mostrarsaldo();