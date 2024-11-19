"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.livrodigital = void 0;
var livro_1 = require("./livro");
var livrodigital = /** @class */ (function (_super) {
    __extends(livrodigital, _super);
    function livrodigital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo, autor, preco) || this;
        _this.formato = formato;
        return _this;
    }
    livrodigital.prototype.descricao = function () {
        return "".concat(_super.prototype.descricao.call(this), "\n                 #Formato: ").concat(this.formato, "\n");
    };
    return livrodigital;
}(livro_1.livro));
exports.livrodigital = livrodigital;
