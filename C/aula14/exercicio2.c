/*-
Faça um programa em C para ler cinco números inteiros quaisquer e armazená-los em um vetor A.
Em seguida, criar um novo vetor B cujos elementos são os elementos do vetor A com sinal trocado.
Imprima os dois vetores.
*/

#include <stdio.h>
#define SIZE 5

int main (){
    int a[SIZE], B[SIZE];

    
    for (int i = 0; i < SIZE; ++i){
        printf("Digite a %dº numero\n", i+1);
        scanf("%d", &a[i]);
    }

    printf("Vetor B com valores invertidos é:\n");
    for (int i = 0; i < SIZE; ++i){
        B[i] = a[i] * -1;
        printf(" %d,", B[i]);
        
    }


    return 0;
}