/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

let lado1=4;
let lado2 = 4;
let lado3=4;

function verifica (n1,n2,n3){
    if(n1==n2&&n2==n3){
        console.log('O triâmgulo é um Equilátero');
    }else if(n1==n2||n2==n3){
        console.log('O triâmgulo é um Isósceles');
    } else {
        console.log('O triâmgulo é um Escaleno');
    }
}

verifica (lado1, lado2, lado3);

// ou

const checa = (n1, n2, n3) => {
    if(n1==n2&&n2==n3){
        console.log('O triâmgulo é um Equilátero');
    }else if(n1==n2||n2==n3){
        console.log('O triâmgulo é um Isósceles');
    } else {
        console.log('O triâmgulo é um Escaleno');
    }
}

checa(lado1,lado2,lado3)