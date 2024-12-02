var circulo = /** @class */ (function () {
    function circulo(name, raio, x, y) {
        this.name = name;
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    circulo.prototype.getRaio = function () {
        return this.raio;
    };
    circulo.prototype.setRaio = function (r) {
        if (r <= 0)
            console.log("Ta ficando maluco de colocar o raio igual a 0???? Cadela.");
        else if (r > 15)
            console.log("Pode não amigão");
        else
            this.raio = r;
    };
    circulo.prototype.exibir = function () {
        return " ".concat(this.name, " = Raio: ").concat(this.raio, ", X: ").concat(this.x, ", Y: ").concat(this.y);
    };
    circulo.prototype.mover = function (x, y) {
        this.x += x;
        this.y += y;
    };
    circulo.prototype.aumentar = function (raio) {
        this.raio += raio;
    };
    return circulo;
}());
var c1 = new circulo("circulo1", 2, 0, 0);
c1.mover(20, 45);
console.log(c1.exibir());
var c2 = new circulo("circulo2", 3, 5, 2);
c2.setRaio(0);
c2.aumentar(37);
console.log(c2.exibir());
