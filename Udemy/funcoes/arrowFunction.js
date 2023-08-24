//Metodo normal de declarar variável
let dobro = function (a) {
    return a*2
}
console.log(dobro(1));

//Arrow function
dobro = (a) => {
    return a * 2
}
console.log(dobro(2));


//Arrow funtion com um parametro 
//pode retirar os () e {} e não precisa declarar o return tendo em vista que tem apenas uma linha
dobro = a => a * 2;

console.log(dobro(3));