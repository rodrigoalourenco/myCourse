"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_concessionario';
    }
    PessoaDao.prototype.inserir = function (objet) {
        console.log('logica insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (objet) {
        console.log('logica atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica selecionar todos');
        return null;
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
