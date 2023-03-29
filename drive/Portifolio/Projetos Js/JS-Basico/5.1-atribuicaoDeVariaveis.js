console.log("Trabalhando com atribuição de variáveis");
const idade=10;
let nome= "Caio";
const sobrenome = "Queiroz";
console.log(nome+sobrenome);
//resultado (CaioQueiroz)
console.log(nome,sobrenome);
//resultado(Caio Queiroz)
console.log(nome+" "+sobrenome);
//console.log(nome,sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);
//Usar Crase (`) quando quiser esccrever um texto que aceite inserir variáveis dentro.
//${} para inserir variavél dentro do texto
console.log("Meu nome é ${nome} ${sobrenome}");
//com as aspas (") não aceita inserir variável dentro do texto

nome = nome+sobrenome

console.log(nome)