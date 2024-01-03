const values = [{nome:"Jornal Online", categoria:"Informação", preco: 89.99}, 
{nome:"Cinema", categoria:"Entretenimento", preco: 150}]


const sumArray = function (array){
    return array.reduce((acumulador,valorAtual)=>acumulador + valorAtual.preco, 0
    )
}

console.log(sumArray(values))