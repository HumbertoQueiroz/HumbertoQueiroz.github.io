const n1 = 1;
const n2 =2;

function operacao (n1, n2) {
    console.log(`    Soma de ${n1} + ${n2} = ${n1+n2}.
    Subtração de ${n1} - ${n2} = ${n1-n2}.
    Multiplicação de ${n1} * ${n2} = ${n1*n2}.
    Divisão de ${n1} / ${n2} = ${n1/n2}.`)
}

operacao(n1, n2)

const operacao2 = (n1,n2) => {
    console.log(`\nOp2
    Soma de ${n1} + ${n2} = ${n1+n2}.
    Subtração de ${n1} - ${n2} = ${n1-n2}.
    Multiplicação de ${n1} * ${n2} = ${n1*n2}.
    Divisão de ${n1} / ${n2} = ${n1/n2}.`)
}

operacao2(5,2)