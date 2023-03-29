import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./Funcionarios/SistemaDeAutenticacao.js"

const diretor = new Diretor ("Caio", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("vitor", 5000, 23456789100);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Laís", 78945612312, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)
