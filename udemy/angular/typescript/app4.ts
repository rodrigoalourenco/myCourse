// import { ConcessionariaDao} from './ConcessionariaDao';
import { Concessionaria} from './Concessionaria';
// import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';
import { Dao } from './Dao';

// let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria:Concessionaria = new Concessionaria('',[]);
// dao.inserir(concessionaria);


// let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('','');
// dao2.atualizar(pessoa);

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
dao3.inserir(concessionaria);

let dao4: Dao<Pessoa> = new Dao<Pessoa>();
dao4.remover(5);

