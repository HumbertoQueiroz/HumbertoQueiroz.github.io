const array01 =[0,10]
const array02=[1,2,3,4,5,6]

const calcAverage = function(array){
    sum=0
    array.forEach(e=>sum+=e);
    return sum/array.length
}

console.log(calcAverage(array02))
console.log(Array)


Array.prototype.calcAverage = function(){
    sum=0
    this.forEach(e=>sum+=e);
    return sum/this.length
}
console.log(Array)

console.log(array01.calcAverage())