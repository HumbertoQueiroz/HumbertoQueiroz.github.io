//Metodologia de desenvolvimento para proteção de atributo com metodo get(ler) e set(alterar)
const sequencia = {
    _valor: 1, //convenção que esse objto é interno e protegido pelos metodos get e set
    get valor() { return this._valor++ }, //ao ler esta incrementando com o ++
    set valor(valor) {
        if (valor > this._valor) { this._valor = valor }//esta alterando o valor protegido "_valor" após validação
    }
}
//aqui automaticamente quando chamo sequencia.valor ele chama o metodo get do atributo, ou seja ele vai ler.
console.log(sequencia.valor, sequencia.valor);

//Quando tento alterar com sequencia.valor=1000 ele atutomaticamente vai usar o metodo set para alterar o atributo "protegido" _valor
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);