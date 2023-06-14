const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// For aninhado: usando break para parar o for externo quando chamado dentro do for interno
//Tem que colocar um nome para o for externo e quando chamar o break colocar solo a seguir o nome do for externo
externo: for (a in numeros) {
    for (b in numeros) { 
        if (a ==3) {
            break externo;
        }
        console.log(`a =${a} e b=${b}`)
    }
}