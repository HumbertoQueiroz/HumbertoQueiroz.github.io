const convert = function (data){
    if((typeof data) ==="string"){
        return 'Booleano ou númerico esperado, mas o parâmetro é do tipo '+(typeof data)
    }
    if((typeof data) ==="number"){
        return data *-1;
    }

    if((typeof data) ==="boolean"){
        return !data
    }

}
console.log(convert('true'))
console.log(convert(15))
console.log(convert(true))