import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela:string = '';
    inserir(objet:T):boolean {
        console.log('logica insert');
        return true;
    }
    atualizar(objet:T): boolean {
        console.log('logica atualizar');
        return true;
    }
    remover(id:number): T {
        console.log('logica remover');
        return Object();
    }
    selecionar(id:number): T {
        console.log('logica selecionar');
        return  Object();
    }
    selecionarTodos(): [T] {
        console.log('logica selecionar todos');
        return Object();
    }
}