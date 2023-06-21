//Usando notação literal
const objt1 = {};
console.log(objt1);

//Com new
const obj2 = new Object;
console.log(obj2);

//Funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 10, 0.1);
const p2 = new Produto('corretor', 25, 0.2);
console.log(p1);
console.log(p1.getPrecoComDesconto());


//Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Caio', 2000, 3);
const f2 = criarFuncionario('Maria', 2000, 1);
console.log(f1);
console.log(f1.nome, Number(f1.getSalario().toFixed(2)), f2.nome, f2.getSalario());


//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);


//Uma função famosa que retorna Objto...
const fromJson = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJson);
console.log(fromJson.info);