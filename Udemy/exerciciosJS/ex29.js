const arrayTest =[38, 2, 365, 10, 125, 11]

const Filter = function(array, amount){
  const convertArrayString = array.map(e=>e.toString()).filter(e=>e.length==amount)
  return convertArrayString
}

console.log(arrayTest)
console.log(Filter(arrayTest,3))