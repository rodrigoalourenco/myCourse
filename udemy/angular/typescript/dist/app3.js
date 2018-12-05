"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = require("./Concessionaria");
var carro = new Carro_1.Carro('Veloster', 3);
var moto = new Moto_1.default();
moto.acelerar();
carro.acelerar();
console.log(carro);
console.log(moto);
var concessionaria = new Concessionaria_1.Concessionaria("", []);
console.log(concessionaria.fornecerHorarioFuncionario());
