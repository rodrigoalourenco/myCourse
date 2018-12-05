"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarro = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioFuncionario = function () {
        return 'Seg a Sex: 8h as 17';
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
