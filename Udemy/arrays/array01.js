let aprovados = ['Bia', 'Carlos', 'Ana'];

//Pouco usado para criar um novo elemento (como agora), mas muito usado para substituir
aprovados[3] = 'Paulo';

//Metodo push usado para criar um elemento ao final da array.
aprovados.push('Arnaldo');
console.log(aprovados);

aprovados[9] = 'Rafael';
console.log(aprovados[8]===undefined);
console.log(aprovados);

//ordenando o array com o metodo sort
aprovados.sort();
console.log(aprovados);

//deletando um item dentro do array
//contina existindo o item, mas torna elel undefined
delete aprovados[1];
console.log(`Após delete aprovados[1]: ${aprovados[1]}`);
console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);

//Utilizado para excluir elementos, tem no mínimo dois perametros
//Primeiro o indice inicial e o Segundo a quantidade de itens que serão excluidos após o indice
//necesse caso foi dois
aprovados.splice(1, 2);
console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];

//Também pode ser usado para criar um ou mais elementos no lugar do deletado
aprovados.splice(1, 2, 'Elemento01', "elemento2");
console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento01', 'elemento2');

console.log(aprovados);