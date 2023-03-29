console.log(`Trabalhando com listas`)
// const salvador =
// const saoPaulo = 
// const rioDeJaneiro = 

const listaDeDestinnos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
) 
// usa new Array para criar listas

listaDeDestinnos.push(`Curitiba`) // adicionando item a lista
console.log("Destinos possíveis")
console.log(listaDeDestinnos)
 
listaDeDestinnos.splice(1,1)//para deletar um item da lista usa o splice
//o primeiro numero é de onde eu quero começar a deletar (contagem começa em 0) e o segundo é a quandtidade de item apartir dai que quero deletar

console.log(listaDeDestinnos)
console.log(listaDeDestinnos[1])//usa para imprimir um unico item
