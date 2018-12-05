import {DaoInterface} from './DaoInterface';
import {Concessionaria} from './Concessionaria';

export class ConcessionariaDao implements DaoInterface {

    nomeTabela:string = 'tb_concessionario';
    inserir(objet:any):boolean {
        console.log('logica insert');
        return true;
    }
    atualizar(objet:any): boolean {
        //logica atualizar
        console.log('logica atualizar');
        return true;
    }
    remover(id:number): Concessionaria {
        //logica remover
        return new Concessionaria('',[]);
    }
    selecionar(id:number): Concessionaria {
        //logica selecionar
        return new Concessionaria('',[]);
    }
    selecionarTodos(): any {
        //logica selecionar todos
        return null;
    }
}