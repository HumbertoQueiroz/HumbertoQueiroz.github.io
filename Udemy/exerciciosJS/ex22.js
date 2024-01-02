const mimNumberArray2 = function (array){
    mim=array[0]
    array.forEach(element => {
        if(element<mim){
            mim=element
        }
    });
    return mim
}

const arrayTest=[10,5,35,65,-2]

console.log(mimNumberArray2(arrayTest))


Array.prototype.mimNumberArray=function(){
    mim=this[0]
    this.forEach(e=>{
        if(e<mim){
            mim=e
        }
    });
    return mim

}

console.log(arrayTest.mimNumberArray())