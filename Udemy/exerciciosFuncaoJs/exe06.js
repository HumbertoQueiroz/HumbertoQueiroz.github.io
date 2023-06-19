/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

const capitalInicial = 1000;
const taxaJuros = 0.1;
const tempoAplicacao = 4;

const jurosSimples = (capital, taxa, tempo) =>{
    let result = (capital*taxa)+capital;
    return result;
}

const jurosComposto = (capital, taxa, tempo) =>{
    let result = capital;
    for (let i = 0; i < tempo; i++) {
        result+=(result*taxa)
        
    } 
    return result
}

console.log(jurosSimples(capitalInicial, taxaJuros, tempoAplicacao));
console.log(jurosComposto(capitalInicial, taxaJuros, tempoAplicacao));