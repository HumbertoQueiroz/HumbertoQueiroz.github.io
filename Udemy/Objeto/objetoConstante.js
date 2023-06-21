// Quando cria um objeto com o tipo de variável const
// o objeto não pode ser mudado, mas o atributo sim, exemplo:

// objeto "pessoa" esta armazenado na memória em -> 123 -> esse objeto faz referencia a atributo que esta em outro local na memória {...}
const pessoa = { nome: 'Jão' };
pessoa.nome = 'Pedro';
//Vou conseguir mudar o atributo
console.log(pessoa);

//Não vou conseguir mudar o objeto, vai dar erro
// pessoa = {nome: 'Ana'}


//Tem como congelar o objeto para não poder alterar os atributos com
Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua 10';
delete pessoa.nome;
//Não mudou pois esta congelado
console.log(pessoa.nome)

//Criando um objeto com atributos constante
const pessoaConstante = Object.freeze({ nome: 'João', idade: 20, Peso: 80.5 });
console.log(pessoaConstante)