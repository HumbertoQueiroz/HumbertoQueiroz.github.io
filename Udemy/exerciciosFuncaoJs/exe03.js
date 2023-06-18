/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

const operacao = (base, expoente) => {
    let result=base;
    for(let i =0; i<expoente-1; i++){
    result*=base;
    }
    console.log(result)
}

operacao(3,2)

//ou

function potenciacao (base,expoente){
    let result = base;
    for(let i =0; i<expoente-1; i++){
        result*=base;
    }
    return result;
}

console.log(potenciacao(3,3))