const nums = [1, 2, 3, 4, 5];


//Map é um for com propósito, ele percorre o array e retorna os elementos com alteração
//Map sempre recebe uma função que vai alterar o resultado
//Não altera o array original
let resultado = nums.map(function (e) {
    return e*2
})
console.log(nums);
console.log(resultado);



//Maps podem ser usados em cadeia

const soma10 = e => {
    //console.log(e+10); return e + 10
    return e + 10;
};
const triplo = e => {
    //console.log(e*3); return e * 3
    return e * 3;
};
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)