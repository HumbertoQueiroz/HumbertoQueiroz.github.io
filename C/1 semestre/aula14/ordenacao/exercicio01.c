/*-
1. Construa um algoritmo em C que:
Leia um vetorA de inteiros de tamanho 10
Preencha um vetorB com os valores de A ordenados
*/

#include <stdio.h>

 int TAMANHO = 10;

int main() {
    int vetorA[TAMANHO], vetorB[TAMANHO];
    int i, j, aux;

    
    printf("Digite os valores do vetorA:\n");
    for (i = 0; i < TAMANHO; i++) {
        scanf("%d", &vetorA[i]);
    }

    
    for (i = 0; i < TAMANHO; i++) {
        vetorB[i] = vetorA[i];
    }

    
    for (i = 0; i < TAMANHO; i++) {
        for (j = i + 1; j < TAMANHO; j++) {
            if (vetorB[i] > vetorB[j]) {
                aux = vetorB[i];
                vetorB[i] = vetorB[j];
                vetorB[j] = aux;
            }
        }
    }

    
    printf("\nVetorB ordenado:\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("%d ", vetorB[i]);
    }

    return 0;
}

