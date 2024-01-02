const chekYearLeap = function (year){
    if(year%4===0&&(!(year%100===0))||(year%400===0)){
        return 'Ano bissexto'
    } else {
        return 'Ano não bissexto'
    }
}

console.log(chekYearLeap(2020))
console.log(chekYearLeap(2100))
console.log(chekYearLeap(400))