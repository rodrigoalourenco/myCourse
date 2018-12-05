import {DaoInterface} from './DaoInterface';
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface {

    nomeTabela:string = 'tb_concessionario';
    inserir(objet:any):boolean {
        console.log('logica insert');
        return true;
    }
    atualizar(objet:any): boolean {
        console.log('logica atualizar');
        return true;
    }
    remover(id:number): Pessoa {
        console.log('logica remover');
        return new Pessoa('','');
    }
    selecionar(id:number): Pessoa {
        console.log('logica selecionar');
        return new Pessoa('','');
    }
    selecionarTodos(): any {
        console.log('logica selecionar todos');
        return null;
    }
}