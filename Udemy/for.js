let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Caio = {
    firstName: 'Humberto',
    lastName: 'Queiroz',
    idade: 27
}

Caio.nomeDoMeio = 'Caio';
console.log(numeros);
console.log(Caio);

console.log('\n   **** For in serve para percorrer TODO um array ou objeto ****');

console.log('\n **O i retorna como o indice dentro do array**');
for (i in numeros) {
    let texto = `O valor de x atualmente é: ${i}. O valor contido nesse indice dentro do array é ${numeros[i]}`;
    console.log(texto);
}
 
//For in percorre o objeto e imprime todos os atributos dele.
console.log('\n  ** For in percorre o objeto e imprime todos os atributos dele. **');
for (i in Caio) { 
    console.log(`${i}`);
}

//Para imprimir 
for (atributo in Caio) {
  console.log(`${atributo}= ${Caio[atributo]}`);
}