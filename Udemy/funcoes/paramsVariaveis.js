/*
Os argumentos de uma função são armazenados dentro de um array chamado arguments
Para acessar todos os argumentos da função pode usar um for in arguments
*/

// note que a variável local "let soma" não é um argumento
function soma() {
    let soma = 0;
    for (i in arguments) {
        console.log(`O argumento ${i} é: ${arguments[i]}`);
        soma += arguments[i];
    }
    let retorno = `resultado é ${soma}\n`;
    return retorno;
}


console.log(soma());
console.log(soma(10));
console.log(soma(20, 30));

//Note que se passarmos texto a função vai concatenar
console.log(soma(40,50,'teste'));
