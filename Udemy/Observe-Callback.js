const fabricantes = ['mercedez', 'audi', 'bmw'];

function imprimir(nome, indice) {
    console.log(`O indice é:${indice + 1}. Nome: ${nome}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante, indice) => console.log(fabricante, indice))