/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
const divisao = (dividendo, divisor) => {
    console.log(`${dividendo} dividido por ${divisor} resulta em: ${parseInt(dividendo/divisor)}, e resta ${dividendo%divisor}`)
}

divisao(53,7)