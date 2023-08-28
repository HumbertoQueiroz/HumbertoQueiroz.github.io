const aprovados = ['Ahatha', 'Aldo', 'Daniel', 'Raquel'];


aprovados.forEach(function (nome, indice) {
    console.log(`${indice+1}. ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados)

//A função forEach recebe ou "passa" por padrão três parametros, o primeiro é o conteudo armazenado, o segundo o indice e o terceiro o próprio array
aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}. ${nome}\n[${array}]`);
});