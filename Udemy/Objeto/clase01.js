class Lancamento {
    constructor (nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...parametros) { 
        parametros.forEach(e=> this.lancamentos.push(e))
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(e => {
            valorConsolidado += e.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(contaDeLuz, salario);
console.log(contas.sumario());

console.log(typeof contas);
console.log(Object.entries(contas));
console.log(Object.entries(contas.lancamentos));
console.log(typeof contas.lancamentos);
