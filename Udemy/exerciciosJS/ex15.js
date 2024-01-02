const objtTest1 = {
    nome:'maria',
    profissao: 'Desenvolvedor de software'
}

const objtTest2={
    codigo :11111,
    preco: 12000
}

const convertObjectInArray = function(obj){
    return Object.entries(obj)
}


console.log(convertObjectInArray(objtTest1))
console.log(convertObjectInArray(objtTest2))