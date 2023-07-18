//Cadeia de prototipos

const avo = { attr1: 'A', attr3: '0'};
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };
console.log('avo: ', avo)
console.log('pai: ', pai);
console.log('filho: ', filho);
//Observar que quando faço console.log não os atritutos/propriedades dos pais
//Mas se eu tentar acessar um atributo e não achar no filho vai subir e tentar localizar no pai, se não achar vai subir e tentar achar no avo
console.log(filho.attr2);
console.log(filho.attr1);
//Caso o filho e o pai ou avo tenha o atributo, vai sempre retornar o mais próximo
console.log(filho.attr3);



const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual+= delta
        } else {
            this.velAtual=this.velMax
        }
    },
    status() {
        return`${this.velAtual}km/h de ${this.velMax}km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing
    __proto__:carro
}

const volvo = {
    modelo: 'V40',
   status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//função de objeto que seta uma hierarquia de prototipos
//sendo o primeiro parametro filho do segundo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(50);
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())