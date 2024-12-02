var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(nome) {
        this.nome = nome;
    }
    animal.prototype.emitir_som = function () {
        console.log("som do animal");
    };
    animal.prototype.mover = function (distancia) {
        console.log("".concat(this.nome, " se moveu ").concat(distancia, " metros."));
    };
    return animal;
}());
var cachorro = /** @class */ (function (_super) {
    __extends(cachorro, _super);
    function cachorro(nome, raca) {
        var _this = _super.call(this, nome) || this;
        _this.raca = raca;
        return _this;
    }
    cachorro.prototype.emitir_som = function () {
        console.log("au au au au");
    };
    cachorro.prototype.pegar = function () {
        console.log("VAI PEGAR!!!!!!");
    };
    return cachorro;
}(animal));
var gato = /** @class */ (function (_super) {
    __extends(gato, _super);
    function gato(nome) {
        return _super.call(this, nome) || this;
    }
    gato.prototype.emitir_som = function () {
        console.log("miau miau");
    };
    gato.prototype.pegar = function () {
        console.log("VAI PEGAR!!!!!!");
    };
    return gato;
}(animal));
var ani = new animal("marmota");
ani.emitir_som();
ani.mover(10);
var chorro = new cachorro("caramelo", "vira-lata");
chorro.emitir_som();
chorro.mover(20);
chorro.pegar();
var animais = [new animal("onça"),
    new cachorro("princesa", "pitmoster"), new gato("garfield")];
animais.forEach(function (animal) {
    animal.emitir_som();
});
