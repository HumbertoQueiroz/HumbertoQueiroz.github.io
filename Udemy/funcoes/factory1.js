const criarProduto = (nomeP='indefinido', precoP='indefinido') => {
    return {nome: nomeP, preco: precoP}
}
console.log(criarProduto())
console.log(criarProduto('bola'))
console.log(criarProduto('bola', 12.5))