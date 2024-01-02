const countCaracter = function(caracter, array){
    newArray=array.split("")
    result=0
    newArray.forEach(element => {
        if(element===caracter){
            result++
        }
    });
    return result
}

/*Case sensitive*/
console.log(countCaracter("A", "A sorte favorece os audazes"))