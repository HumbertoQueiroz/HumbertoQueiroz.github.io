const bigger = function (n1,n2){
    return n1>n2
}

const MyBigger = function (n1,n2){
    if(n1>n2){
        return n1+" é maior"
    } if (n1==n2) {
      return n1+" é igual a "+n2  
    } else {
        return n2+" é maior"
    }
}

console.log(MyBigger(30,30))
console.log(bigger(40,30))