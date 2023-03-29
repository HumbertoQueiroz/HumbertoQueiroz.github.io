console.log("Operações Aritiméticas");

console.log(2+2);
console.log(10+8*2);
//resultado da operação acima (4 e 26)
//O interpretador ao realizar operações aritiméticas sempre executa as operações de divisão emultiplicação antes de executar as somas e subtrações, por isso o resultado deu 26.
console.log((10+8)*2);
//resultado da operação acim (36)
//Para executar a soma antes de da multiplicação colocar a operação entre parentes
//O interpretador executa sempre o que esta entre parentes antes.

console.log("ano "+2020);
//Quando a numero e texto o interpretador de código simplismente concatena os dois, ou seja, junta.
console.log("2"+"2");
//resultado (22) em string
//O interpretasdor de código não ira realizar operação aritimética acima pois não dois textos e irá concatenar.
