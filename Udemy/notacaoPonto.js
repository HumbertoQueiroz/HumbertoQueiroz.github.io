//Caso tenha só um elemento não precisa do ()
//const funcao1 = (e) => {
const funcao1 = e => {
  console.log(e.nome);
};

const objeto1 = {};
console.log(objeto1);

objeto1.nome = 'caio';
objeto1.altura = 1.75;
console.log(objeto1);

console.log(objeto1.nome);
console.log(objeto1.altura);
funcao1(objeto1);
