const notas = [1, 5.2, 5.5, 8, 10, 9.5];


//sem Callbak
let notasBaixa = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixa.push(notas[i]);
    }
}

console.log(notasBaixa);


//     ** com Callback **

/*
filter faz uma checagem de true or false,
caso true adiciona ao array, caso false não adiciona
sem alterar a função original notas.
A checagem é feita por uma função que recebe o elemento do array original notas
e checa com o return se < 7, sendo true ele retorna o elemento,
sendo false ele não faz nada.
Quando retorna  filter vai adicionar ao array notas Baixas
*/
notasBaixa = notas.filter(function(nota){ return nota<7});
console.log(notasBaixa);


// para reduzir o tamanho do código com arrow function

notasBaixa = notas.filter(nota=>nota<7)
console.log(notasBaixa);