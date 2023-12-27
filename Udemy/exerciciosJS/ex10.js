const repet = function (string, numbRepet){
    result =[];
    for (let i=0; i<numbRepet;i++){
        result.push(string)
    }
    return result
}

console.log(repet('C3PO',3))



//OU


const repet2 = function (string, numbRepet){
    return Array(numbRepet).fill(string)
}

console.log(repet2('R2D2',3))