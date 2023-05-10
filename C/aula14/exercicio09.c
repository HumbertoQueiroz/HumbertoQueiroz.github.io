/*-
Faça um algoritmo para preencher um vetor de 10 elementos inteiros colocando -1 nas posições
ímpares e O nas posições pares. Em seguida, imprimir o vetor.
*/

#include <stdio.h>

int main() {
    int vetor[10];
   

    
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {  
            vetor[i] = -1;
        } else {  
            vetor[i] = 0;
        }
    }
    
    printf("Vetor: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", vetor[i]);
    }

    return 0;
}

