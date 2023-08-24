//     ** Definindo valor padão para parametro de função (melhor é a última) **

//1.Definindo valor padrão para uma variável com "||" que significa ou
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

//Usando || vai gerar erro quando um parametro for zero, pois ele entende como falso e subtitui pelo valor padrão
console.log(soma(), soma(1), soma(1, 2), soma(1, 2, 3), soma(0, 0, 0))

//2.Definindo com "?" que significa se
//Tem três formas
//A última é a melhor para números
function soma2(a, b, c) {
  a = a !== undefined ? a : 1 //conferindo se a é diferente de undefine, caso seja undefine define com valor passado
  b = 1 in arguments ? b : 1 //conferindo se tem o indece 1 nos arguments, caso não tenha define como o valor passado
  c = isNaN(c) ? 1:c //confere se "c" é um número, caso não seja define ele como o valor passado

  return a + b + c;
}

console.log(soma2(), soma2(1), soma2(1, 2), soma2(1, 2, 3), soma2(0, 0, 0))

//3. Método EcmaScript de 2015

const soma3 = function (a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(1), soma3(1, 2), soma3(1, 2, 3), soma3(0, 0, 0), soma(1, 2, 'teste'));