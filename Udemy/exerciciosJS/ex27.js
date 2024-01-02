const removeVowels = function(word){
    const Vowels=['a','e','i','o','u','A','E','I','O','U']
    string=word.split('')
    newString=[]
    string.forEach((element, index) => {
        for (let i = 0; i < Vowels.length; i++) {
            if((element===Vowels[i])){
               string.splice(index,1)
            }
        }
    });
    return string
}


console.log(removeVowels("Coder"))

const removeVowels2 = function(frase){
    const vogais=['a','e','i','o','u','A','E','I','O','U']
    vogais.forEach(vogal=>frase=frase.replace(vogal,''))
    return  frase
}

console.log(removeVowels2("Coder"))



const removeVowels3 = function(word){
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    vowels.forEach(e=>word=word.replace(e,''))
    return word
}

console.log(removeVowels3("Coder"))