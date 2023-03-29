console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 18
const estaAcompanhada = false
const temPassagemComprada=false

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {

//     console.log(`Maior de idade`);
//     listaDeDestinos.splice(1, 1)
    
// } else {
//     //quando executa este else, é porque a condicional foi false, ou seja, é menor de idade.
//     if (estaAcompanhada) {
//         console.log(`Menor de idade acompanhado, pode comprar.`);
//         listaDeDestinos.splice(1, 1)
//     } else {
//         console.log(`Não é maior de idade e não esta acompanhado(a) não podemos vender`);
//     }
// }

//"if" é usado para fazer condicionais, caso o que esta dentro de parentes seja true/verdadeiro executa o que dentro dos {}.
//"else" executa o que esta dentro do seu próprio {} quando o que esta dentro dos parentes do "if" for false/falso.
//Pode usar mais um "if e else" dentro de outro, podendo ter vários caminhos dentro do código.


//abaixo outra forma de escrever, mais simples.
if (idadeComprador >= 18 || estaAcompanhada==true) 
{
    console.log(`Boa viagem!`);
    listaDeDestinos.splice(1, 1)
} else  {
    console.log(`Não é maior de idade e não esta acompanhado(a) não podemos vender`);
}

console.log(`Embarque: \n\n `)
if(idadeComprador>=18 && temPassagemComprada) {
    console.log(`Pode embarcar, boa viagem!`)
}else{
    console.log(`Não pode embarcar sem a passagem`)
}

console.log(listaDeDestinos);

