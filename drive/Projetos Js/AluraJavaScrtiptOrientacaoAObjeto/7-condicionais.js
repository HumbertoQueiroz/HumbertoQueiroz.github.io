console.log(`Trabalhando com condicionais`)
const listaDeDestinnos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
)
listaDeDestinnos.push(`Curitiba`)


const idadeComprador = 18
const estaAcompanhada = true
const temPassagemComprada = true
console.log("Destinos possíveis")
console.log(listaDeDestinnos)

if (idadeComprador >= 18 || estaAcompanhada==true)
{   console.log("Boa viagem!")
    listaDeDestinnos.splice(1, 1)
}

 else {
    console.log("Não é maior de idade e não posso vender")
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
console.log("Boa viagem")
}else{ 
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinnos)
