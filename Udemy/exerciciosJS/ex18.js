const numbers = [150,150,150,150]
const sumArray = function (array){
    result = array.reduce(
        (acumulador,valorAtual) => acumulador + valorAtual
    )
    return result
}

console.log(sumArray(numbers))

