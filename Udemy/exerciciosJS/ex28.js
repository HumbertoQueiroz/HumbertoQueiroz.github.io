const oldObject = {a:1, b:2, c:3}

console.log(oldObject)

const invert = function(obj){
    const keys=Object.keys(obj)
    const values=Object.values(obj)
    let newObjt={}
    
    for (let i=0; i<Object.keys(obj).length;i++) {
        newObjt[values[i]]=keys[i]
    }
    return newObjt
}



console.log(invert(oldObject))