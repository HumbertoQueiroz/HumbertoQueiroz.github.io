const arrayTest = [10,70,22,22,22]

const numberEvenAndIndexEven = function (array) {
    result =array.filter((e,i)=>e%2===0&&i%2===0)
    return result
}


console.log(numberEvenAndIndexEven(arrayTest))