import { Carro } from './Carro';
import { ConcessionariaInterface} from './ConcessionariaInterface';

export class Concessionaria implements ConcessionariaInterface{
    private endereco: string;
    private listaDeCarros :  Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarro(): Array<Carro> {
        return this.listaDeCarros;
    }

    public fornecerHorarioFuncionario(): string {
        return 'Seg a Sex: 8h as 17';
    }
}
