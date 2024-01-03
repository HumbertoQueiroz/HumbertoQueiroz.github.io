const test = {
    a:1,
    b:2
};

console.log(test)


const removePropried = function (objctOrigen, propried){
    const newObject=objctOrigen;
    //Tem que utilizar esse método de chamada da propriedade com [], utilizar o .propriedade não funciona
    delete newObject[propried]
    return newObject
}

console.log(removePropried({a:1, b:2}, "a"))


//ou 

const removePropried2 = function (objctOrigen, propried){
    const newObject={...objctOrigen};
    delete newObject[propried]
    return newObject
}

console.log(removePropried2(test, "b"))


