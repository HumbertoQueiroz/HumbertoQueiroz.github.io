//Criando minha própria função Map
Array.prototype.map2 = function (callback) {
    const arrayFinal = [];
    for (let i = 0; i < this.length; i++){
        arrayFinal.push(callback(this[i], i, this))
    }
    return arrayFinal;
}



const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.2}',
  '{"nome": "Caneta", "preco": 7.5}',
];

console.log(carrinho);

//Retornar um array apenas com os preços

const arrayInicial = (json) => JSON.parse(json);
const arrayFinal = (nome) => `R$ ${parseFloat(nome.preco).toFixed(2)}`;

const resultadoParcial = carrinho.map2(arrayInicial);
console.log(resultadoParcial);
const resultado = resultadoParcial.map2(arrayFinal);
console.log(resultado);
//console.log(carrinho);
