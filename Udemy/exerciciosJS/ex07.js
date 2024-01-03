function checkNumber (number, mim, max, inclusivo=false){
    if(inclusivo){
        if(number>=mim&&number<=max){
            return 'True = O número '+number+' esta entre o mínimo '+mim+' e o máximo '+max
        }
        else{
            return 'False = O número '+number+' NÃO esta entre o mínimo '+mim+' e o máximo '+max
        }
    } else{
        if(number>mim&&number<max){
            return 'True = O número '+number+' esta entre o mínimo '+mim+' e o máximo '+max
        }else{
            return 'False = O número '+number+' NÃO esta entre o mínimo '+mim+' e o máximo '+max
        }
    }
    
}


console.log(checkNumber(1,1,5))
console.log(checkNumber(1,1,5,true))


/* ------- ou -----*/

function check2(n2, min2, max2, inclu2=false){
    if(inclu2) return n2 >= min2 && n2<=max2

    return n2 > min2 && n2 < max2
}


console.log(check2(1,1,5))
console.log(check2(1,1,5,true))

/* ------- ou -----*/
/*Utilizando operador ternário*/


function check3(n3, min3, max3, inclu3=false){
    return inclu3? n3>= min3&&n3<=max3:n3>min3&&n3<max3
}


console.log(check3(1,1,5))
console.log(check3(1,1,5,true))