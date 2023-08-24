const pessoa = {
    nome: 'caio',
    idade: 15,
    endereco: {
        rua: 'AV. central',
        numero: 15

    }
}

pessoa.altura = 1.75

console.log(pessoa);
//console.log(nome) Erro

//Pegando o atributo do objeto e transformando em uma variável
const { nome, idade } = pessoa;
console.log(nome)
console.log(pessoa)


//posso definir nome diferente para variável com ":" e digitando o nome
let { nome: n, idade: id } = pessoa;
console.log(n, id)

//Se tentar pegar um atributo que não existe retorna undefined
//Tem como colocar uma valor para retornar como padrão caso retorne undefined com "="
const { peso, humor = "\nValor de retorno padrão: bem humorado" } = pessoa;
console.log(peso, humor)


//Pegar valor de dentro de um objeto dentro de outro objeto
//Tem que colocar o nome do segundo objeto dentro e usar {} e 
//colocar o nome do atributo que vou retirar dentro das chaves
const { endereco: { numero, rua } }=pessoa
console.log(rua, 'número', numero)
