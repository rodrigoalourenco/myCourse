import { Carro } from './Carro';
import Pessoa from './Pessoa'; //Declaração Default
import { Concessionaria } from './Concessionaria';

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

 let carroA = new Carro("Fusion", 4);
 let carroB = new Carro("Focus", 4);
 let carroC = new Carro("Tracker", 4);

//  let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let listaDeCarros: Carro[] = [carroA, carroB, carroC];
let concessionario = new Concessionaria('Marechal', listaDeCarros);

let cliente = new Pessoa('Rodrigo', 'Fusion');

concessionario.mostrarListaDeCarro().map((carro: Carro) => {
    //console.log(carro);

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.commprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());