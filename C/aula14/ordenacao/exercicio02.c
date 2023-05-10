/*-
Construa um algoritmo em C que:
Leia um vetor de inteiros de tamanho 20;
Ordenar esse vetor em ordem crescente.
Resolva essa questão sem utilizar um vetor secundário;
Você pode utilizar quantas variáveis auxiliares achar necessário.
*/

#include <stdio.h>

void bubble_sort(int vetor[], int tamanho) {
    int i, j, temp;
    for (i = 0; i < tamanho - 1; i++) {
        for (j = 0; j < tamanho - 1 - i; j++) {
            if (vetor[j] > vetor[j+1]) {
                temp = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = temp;
            }
        }
    }
}

int main() {
    int vetor[20];
    int i;
    
    
    for (i = 0; i < 20; i++) {
        printf("Digite um valor para a posicao %d: ", i);
        scanf("%d", &vetor[i]);
    }
    
   
    bubble_sort(vetor, 20);
    
    
    printf("\nVetor ordenado em ordem crescente:\n");
    for (i = 0; i < 20; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");
    
    return 0;
}
