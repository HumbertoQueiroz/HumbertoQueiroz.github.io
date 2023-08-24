//criando um objeto
const objeto = { nome: 'caio', idade: 28, altura: 1.75, soma() { return this.idade + this.altura } };

//Transformando objetos em JSON
//Obs.: só é convertido texto, FUNÇÃO não vai.
console.log(JSON.stringify(objeto));
// retorno: {"nome":"caio","idade":28,"altura":1.75}

//Convertento JSON em um objeto com "parse"
//Necessário os parametros estarem entre aspas duplas e tudo dentro de uma aspas simples
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));

//É aceito string (entre aspas duplas), valor boleano, objeto e array.
//Inclusive aceita um objeto dentro de outro ou dentro de um aray, mas tem que ter o nome dos parametros dentro de aspas duplas
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d":{}, "e": [{"nome":"Caio", "idade":38}, {"legal": true}]}'))