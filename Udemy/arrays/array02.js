const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// Pop remove ultimo elemento
pilotos.pop();
console.log(pilotos);

//Push adiciona um elemento ao final do array
pilotos.push('Verstappens');
console.log(pilotos);

//shift remove o primeiro elemento
pilotos.shift();
console.log(pilotos);

//unshift adiciona um elemento no inicio do array
pilotos.unshift('Hamilton');
console.log(pilotos);


//splice (ADICIONAR) com o segundo parametro 0 e informando mais parametros, vai adicionar eles na posição informada no primeiro parametro 
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);


//splice (REMOVER) com o segundo parametro diferente de 0 e informando mais parametros, vai remover a quantidade informada a partir da posição informada como primeiro paramentro
pilotos.splice(3, 1);
console.log(pilotos);

//slice retorna um NOVO array
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

// O segundo parametro é o limite até onde vai o novo array, ele vai pegar até o indice anterior ao informado
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);