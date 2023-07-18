const pessoa = { 
    nome: 'Rebeca',
    idade: 15,
    peso: 58.6
}

//Para retornar uma lista do nome dos atributos Object.keys
console.log(Object.keys(pessoa))

//Para retornar uma lista do valor dos atributos Object.values
console.log(Object.values(pessoa));

//Para retornar uma lista do nome mais o valor dos atributos Object.entries
console.log(Object.entries(pessoa));


Object.entries(pessoa).forEach(e => {
    console.log(`indicie 0 ="${e[0]}" e indice1 = "${e[1]}"`);
})


//ou usando o destruction

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});


//Definindo comportamento da propriedade
//indica o nome do objeto dentro do parentes e depois dentro das aspas o nome da propriedade.
//o valor vai ser deinido só dentro da função.
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//Define se vai aparecer na lista de propriedades do objeto, true para listar e false para não listar - neste caso vai aparecer
    writable: false,//Define se pode ser alterado/sobreescrito, true para poder alterar e false para não poder alterar - neste caso não aceita ser alterado/reescrito
    value: '01/01/2023' // valor que vai receber o a propriedade 
})


pessoa.dataNascimento = '01/01/2020';
//não sobreescreveu pois defini a proriedade writable desse atributo como falso
//ou seja, defini como constante igual o metodo freeze do Objeto.
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


// Concatenar objetos vários objetos em 1.

const objInicial = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3 };
const obj3 = { d: 4 };
const obj4 = { a: 2 };//Cuidado! Se tiver uma propriedade com o mesmo nome vai sobreecrever.

//Sempre vai permanecer o valor da propriedado do ultimo objto que foi informado quando tiver duas propriedades como  mesmo valor
const objFinal = Object.assign(objInicial, obj1, obj3, obj2, obj4)
console.log(objFinal)


//Congelando as propriedades do objeto
Object.freeze(objFinal);
objFinal.incremento = 'mais um'; //Não vai adicionar essa propriedade pois foi congelado na linha acima.
console.log(objFinal);
