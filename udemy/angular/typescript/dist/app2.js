"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = __importDefault(require("./Pessoa")); //Declaração Default
var Concessionaria_1 = require("./Concessionaria");
// let carroA = new Carro('Fusion', 4);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);
// carroA.acelerar();
// carroA.acelerar();
// console.log(carroA);
// let concessionario = new Concessionario('Abel Scuissiato');
// console.log(concessionario);
// let pessoa = new Pessoa('Rodrigo', 'Fusion');
// console.log(pessoa.dizerCarroPreferido());
/**
 * Regra de negocio
 */
var carroA = new Carro_1.Carro("Fusion", 4);
var carroB = new Carro_1.Carro("Focus", 4);
var carroC = new Carro_1.Carro("Tracker", 4);
//  let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
var listaDeCarros = [carroA, carroB, carroC];
var concessionario = new Concessionaria_1.Concessionaria('Marechal', listaDeCarros);
var cliente = new Pessoa_1.default('Rodrigo', 'Fusion');
concessionario.mostrarListaDeCarro().map(function (carro) {
    //console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.commprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
