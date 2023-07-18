const pai = { nome: 'Pedro', corCabelo: 'preto' };

//Criando um novoobjeto através da dunção create usando o objeto "pai" como prototipo
const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1);
//Como o objeto "pai" é usado de prototipo/modelo, a folha tem acesso as propriedades/atributos dele por herança
console.log(filha1.corCabelo);

//Dessa vez além de criar com acesso aos atributos do pai, vamos adicionar novos atributos dentro da função create
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}.`);

console.log(Object.keys(filha2));
console.log(Object.values(filha2));
console.log(Object.entries(filha2));

//Com "for in key" consegue imprimir todas as propriedades dela e recebidas por herança
for (let key in filha2) {
    console.log(key)
}

//Para saber o quais propriedades são dela e quais são herança da para usar a função hasOwnProperty
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}