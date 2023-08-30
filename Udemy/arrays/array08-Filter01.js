const produtos = [
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'Ipad', preco: 4199, fragil: false },
  { nome: 'Copo de vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

const produtoCaro = function (e) {
  return e.preco>=500
}

//Filtrando um array com filter
//Esse metodo recebe um parametro "Callback" que nada mais é que uma FUNÇÃO de checagem que retorna true ou false
//Filter percorre o array original retorna todos os que o resultado da função for true da checagem da função callback
const fragil = e => e.fragil == true
//fragil já retorna true ou false, não precisa fazer a checagem como abaixo
const fragil2 = e => e.fragil
console.log(produtos.filter(function (p) {
    return p.preco>2400
}))

console.log(produtos.filter(fragil).filter(produtoCaro))
console.log(produtos)