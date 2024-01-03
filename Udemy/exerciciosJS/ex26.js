const arrayTest01 = ['programação', 'mobile', 'profissional'];
const arrayTest02 = ['javascript', 'java', 'c++'];


const search = function(parameter, array) {
    result= array.filter(e => e.includes(parameter));
    return result;
};

console.log(search('pro', arrayTest01));
console.log(search('prof', arrayTest01));
console.log(search('python', arrayTest02));
