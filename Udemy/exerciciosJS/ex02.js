const convertAge = e=>{
    let age=e*365;
    let bissexto =  Math.floor(e/4);
    //age+=bissexto;
    console.log("Idade em dias " + age + ", desconsiderando anos bissextos" )
}

convertAge(25)

const convertAge2 = e=>{
    let age=e*365;
    let bissexto =  Math.floor(e/4);
    age+=bissexto;
    console.log("Idade em dias " + age + ", com anos bissextos" )
}

convertAge2(25)

