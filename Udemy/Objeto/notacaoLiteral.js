//  ** Criar atributos através de variáveis já predefinidas **

const a = 1;
const b = 2;
const c = 3;

//forma antiga
const obj1 = { a: a, b: b, c: c };

//nova forma mais simples
const obj2 = { a, b, c };

console.log(obj1);
console.log(obj2);

//   ** Criando atributos através de duas variáveis

const nomeDoAtributo = 'nota';
const valorDoAtributo = 7.5;


//forma antiga
const obj3 = {}; //criando o objeto
//Para criar usa nome do objeto e dentro do [] o nome do atributo
// depois usa = e o valor que o atributo vai receber
obj3[nomeDoAtributo] = valorDoAtributo; 
console.log(obj3);

//foma nova
const obj4 = { [nomeDoAtributo]: valorDoAtributo }
console.log(obj4)



//  ** Definindo função dentro do objto
const obj5 = {
    //forma antiga
    f1: function () {
        
    },
    //forma nova
    f2() {
        
    }
}

console.log(obj5);