const wageMonth = function (hours, value){
    return "Salário igual a R$ " + (hours * value).toFixed(2);
}

console.log(wageMonth(150, 40.5))