/*1. Organizador de lista: Crie um programa que organize uma lista de números fornecidos pelo usuário em ordem
crescente ou decrescente, dependendo da escolha do usuário.*/


#include <stdio.h>

void ordemCrescente(int numeros[], int tamanho) {
    int i, j, aux;

//uso dois "for" o primeiro percore o vetor inteiro
// o segundo checa com o "if" se o número na posição i é maior que j
//Armazena na variável aux, sobrescreve a posição j na posição i
//sobreescreve o valor da posição j com o valor guardado em aux
    for (i = 0; i < tamanho; i++) {
        for (j = i + 1; j < tamanho; j++) {
            if (numeros[i] > numeros[j]) {
                aux = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = aux;
            }
        }
    }
}   


void ordemDecrescente(int numeros[], int tamanho) {
    int i, j, aux;

//uso dois "for" o primeiro percore o vetor inteiro
// o segundo checa com o "if" se o número na posição i é menor que j
//Armazena na variável aux, sobrescreve a posição j na posição i
//sobreescreve o valor da posição j com o valor guardado em aux
    for (i = 0; i < tamanho; i++) {
        for (j = i + 1; j < tamanho; j++) {
            if (numeros[i] < numeros[j]) {
                aux = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = aux;
            }
        }
    }
}



int main() {

    printf("\n------- Vamos ordenar uma lista de números -------\n\n");
    int tamanho, i, tipo;

    //Lê a quantidade de números que o usúaria deseja listar
    printf("Digite o tamanho da lista de números que vamos usar: ");
    scanf("%d", &tamanho);

    //defino a variável numeros como um vetor com o tamanho informado.
    int numeros[tamanho];

    //O "for" lê o número e armazena na posição "i" dentro sdo vetor numeros 
    printf("Digite os números:\n");
    for (i = 0; i < tamanho; i++) {
        printf("Posição %d:...... ", i+1);
        scanf("%d", &numeros[i]);
    }

    //Lê qual tipo de ordem o usuário quer usar
    printf("Digite 0 para ordenar em ordem crescente ou 1 para ordem decrescente: ");
    scanf("%d", &tipo);

    //Uso "if", "else if" e "if" para escolher qual função de ordenação vai ser usada 
    if (tipo == 0) {
        ordemCrescente(numeros, tamanho);
        printf("\n ------- Ordem crescente: ------\n\n");
        printf("       ");
    } else if (tipo == 1) {
        ordemDecrescente(numeros, tamanho);
        printf("\n ------- Ordem decrescente: -------\n\n");
        printf("       ");
    } else {
        //Finaliza a execução sem ordenar
        printf("\n *** Escolha inválida! ***\n");
        return 0;
    }


    //Imprime os números já ordenados 
    for (i = 0; i < tamanho; i++) {
        printf("%d ", numeros[i]);
    }
    

    return 0;
}