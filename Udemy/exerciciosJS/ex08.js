const multiplica = function (n1,n2){
    if(n1<0||n2<0){
        return 'Não é possível realizar a multiplicação'
    }else{
        let result = 0
        for (let i = 0; i < n1; i++) {
            result += n2            
        }
        return result
    }
}

console.log(multiplica(-1,0))