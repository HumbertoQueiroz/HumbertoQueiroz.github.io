// Criando objatos por uma classe

class Pessoa {
    constructor (nome){
        this.nome=nome
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}   
//Obs.: da erro no browser por causa do this.
const p1 = new Pessoa('João')
p1.falar()


//Criando através de uma função factory 
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Caio')
p2.falar()