const arrayTest = [1,2,3,1.4,true,false,, 'tf','true', "fgvfu",'4',5,6,'teste',7,8,9,10]

const returnNumber= function(array){
    result=array.filter(e=>!isNaN(e));
    return result
}

console.log(returnNumber(arrayTest))


//melhor a seguir
const returnNumber2=function(array){
    result=array.filter(e=>typeof e==='number')
       return result
 
}

console.log(returnNumber2(arrayTest))