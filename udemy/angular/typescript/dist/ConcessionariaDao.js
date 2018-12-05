"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionario';
    }
    ConcessionariaDao.prototype.inserir = function (objet) {
        console.log('logica insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (objet) {
        //logica atualizar
        console.log('logica atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        //logica remover
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        //logica selecionar
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        //logica selecionar todos
        return null;
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
