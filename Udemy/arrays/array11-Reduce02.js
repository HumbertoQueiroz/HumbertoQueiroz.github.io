const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

//Desafio 01: Todos os alunos são bolsistas?
//Com aerrow function e retorno implicito

const todosBolsistas = (acumulador, atual)=>acumulador&&atual

console.log(`Todos são bolsistas? ${alunos.map(a => a.bolsista).reduce(todosBolsistas)}\n`)

//Desafio 02: Algum aluno é bolsista?
//com function normal e retorno explicito
const algumBolsistas = function (acumulador, atual){
    if (acumulador == true || atual == true) {
      return true;
    }
    return false;
  }

  console.log(`Algum aluno é bolsistas? ${alunos.map(a=>a.bolsista).reduce(algumBolsistas)}\n`);