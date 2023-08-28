//Implemmentando minha própria função forEach
Array.prototype.forEach2 = function (funcaoRecebida) {
    for (let i = 0; i < this.length; i++){
        funcaoRecebida(this[i], i, this)
    }
}



const aprovados = ['Ahatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function (nome, indice, array) {
  console.log(`${indice + 1}. ${nome}\n[${array}]  `);
});
