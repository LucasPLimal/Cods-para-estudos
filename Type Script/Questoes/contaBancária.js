var conta = /** @class */ (function () {
    function conta(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    conta.prototype.descricao = function () {
        console.log("Titular: ".concat(this.titular, "\n                Saldo: R$ ").concat(this.saldo.toFixed(2)));
    };
    conta.prototype.depositar = function (valor) {
        this.saldo -= valor;
        console.log("".concat(valor, " depositado"));
    };
    conta.prototype.sacar = function (valor) {
        this.saldo += valor;
        console.log("".concat(valor, " sacado"));
    };
    conta.prototype.mostrarsaldo = function () {
        console.log("Saldo atual: ".concat(this.saldo));
    };
    return conta;
}());
var pessoa = new conta("Junin", 12000.75);
pessoa.descricao();
pessoa.sacar(1700);
pessoa.depositar(11000);
pessoa.mostrarsaldo();
