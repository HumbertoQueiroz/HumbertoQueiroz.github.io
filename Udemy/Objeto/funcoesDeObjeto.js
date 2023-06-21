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



Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,//Não aceita ser alterado/reescrito
    value: '01/01/2023'
})


pessoa.dataNascimento = '01/01/2020';
//nõ sobreescreveu pois defini a proriedade writable desse atributo como falso
//ou seja, defini como constante igual o metodo freeze do Objeto.
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));