//     **  ?    ***
//Operador ternário tem três parâmetros, o primeiro é um teste lógico seguido de "?"
//Depois o resultado se verdadeiro seguido de ":" depois o resultado se falso

//Defini uma variável para guardar uma arrayfunction que tem como parâmetro "nota" e executa "=>" 
//um teste se nota maior ou igual a 7 seguido o operador ternário "?" e os dois retorno verdadeiro e falso
const teste = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(`A nota do aluno foi 4 então ele esta: ${teste(4)}`)
console.log(`A nota do aluno foi 7 então ele esta: ${teste(7)}`);