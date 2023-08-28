const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.2}',
  '{"nome": "Caneta", "preco": 7.5}'
];

console.log(carrinho);

//Retornar um array apenas com os preços

const arrayInicial = json => JSON.parse(json);
const arrayFinal = nome => `R$ ${parseFloat(nome.preco).toFixed(2)}`


const resultadoParcial = carrinho.map(arrayInicial)
console.log(resultadoParcial);
const resultado = resultadoParcial.map(arrayFinal);
console.log(resultado);
