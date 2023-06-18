function Pessoa(nome='indefinido'){
    this.nome= nome;
    this.falar= function () {
        return console.log(`Meu nome é ${this.nome}`)
    }
}

/* ou
this.falar= function () {
        return console.log(`Meu nome é ${this,nome}`)
    }


    this.falar= () => {
        console.log(`Meu nome é ${this.nome}`)
    }
*/

const p1= new Pessoa('Caio')
p1.falar()

console.log(p1)


p1.nome='jão'
p1.falar()
console.log(p1)