const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

console.log(alunos.map(a => a.nota))


//Reduce é um lop que pega um acumulador e o valor atual, faz uma operação e passa isso de parametro de acumulador para o próximo loop
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual, '\n');
    return acumulador+atual
}, 10)

console.log(resultado)