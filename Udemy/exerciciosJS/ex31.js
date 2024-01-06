const objTeste={
  Joao: [8,7.6,8.9,6],
  Mariana: [9,6.6,7.99,8],
  Carla: [7,7,8,9]
}

//functin auxiliar 01
const SumAndDivision = function(array){
  const valueInitial=0
  /*
  const newArraySum=[]
  const newArrayLength=[]
  */
  const arrayMedia=[]
  for (let i =0; i<array.length; i++){
    //Mesma coisa do codigo de baixo, mas separado por partes, mais fácil de entender
    /*
    newArraySum.push(array[i].reduce((accumulator, currentValues)=>accumulator+currentValues,valueInitial))
    newArrayLength.push(array[i].length)
    arrayMedia.push(newArraySum[i]/newArrayLength[i])
    */
    arrayMedia.push(array[i].reduce((accumulator, currentValues)=>accumulator+currentValues,valueInitial)/array[i].length)
  }
  return arrayMedia
}

const Bigger = function(array){
  let big=0;
  let index;
  for (let i=0; i<array.length; i++){
    if(array[i]>big){
      big=array[i]
      index = i
    }
  }
  return [big,index]
}

const Media=function (obj){
  const mediaValues = SumAndDivision(Object.values(obj))
  const name = Object.keys(obj)
  const big=Bigger(mediaValues)
  return {'nome':name[big[1]], 'media': big[0]}
}

console.log(Media(objTeste))