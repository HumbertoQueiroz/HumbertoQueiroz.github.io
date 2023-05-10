/*-
Leia um vetor de inteiros A, de tamanho 10;
Preencha um vetor de inteiros B, de tamanho 20, de forma que: tenha espaço vazio entre os elementos.

Em seguida, prencha os "espaços vazios" do vetorB com a média dos valores ao lado;
Exemplo:
*/

#include <stdio.h>

int main() {
    int A[10], B[20], i;

    
    printf("Digite os 10 valores do vetor A:\n");
    for (i = 0; i < 10; i++) {
        scanf("%d", &A[i]);
    }

    
    for (i = 0; i < 20; i++) {
        if (i % 2 == 0) { 
            B[i] = A[i / 2];
        } else { 
            B[i] = 0;
        }
    }

    
    for (i = 1; i < 19; i += 2) { 
        B[i] = (B[i - 1] + B[i + 1]) / 2;
    }

    
    printf("Vetor B:\n");
    for (i = 0; i < 20; i++) {
        printf("%d ", B[i]);
    }
    printf("\n");

    return 0;
}
