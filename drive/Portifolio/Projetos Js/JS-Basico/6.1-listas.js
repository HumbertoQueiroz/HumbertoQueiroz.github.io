console.log(`Trabalhando com Listas`);
// const salvador=;
// const saoPaulo=;
// const rioDeJaneiro=`Rio de Janeiro`;

const listaDeDestinos=new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
     )

listaDeDestinos.push(`Curitiba`) 
//Adicionando um elemento na lista



console.log(`Destinos possíveis`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1)
//Para remover itens da lista, tem que informar dois números.
// 1° é apartir de qual item vai deletar, começa a contar do zero
// 2° é quantos itens vai deletar apartir do 1°.

console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);
// para exibir um item só colocar o numero do item dentro de []

listaDeDestinos.pop()
//remove o último item da lista
console.log(listaDeDestinos)

listaDeDestinos.pop()
console.log(listaDeDestinos)
