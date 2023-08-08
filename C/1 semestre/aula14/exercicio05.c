/*-
5. Faça um algoritmo para ler cinco números inteiros quaisquer e armazená-los em um vetor. Em
seguida, imprimir o vetor e quantos elementos do vetor são positivos; quantos são negativos; e
quantos são nulos.
*/

#include <stdio.h>
#define SIZE 5

int main (){
    int a[SIZE], positivo, negativo, nulo;

    
    for (int i = 0; i < SIZE; ++i){
        printf("Digite o %dº numero\n", i+1);
        scanf("%d", &a[i]);
    }

    printf("Os elementos do vetor são:\n");
    for (int i = 0; i < SIZE; ++i){
        printf(" %d,", a[i]);
        if (a[i]>0){
            positivo++;
        }
        if (a[i]<0){
            negativo++;
        }
        if (a[i]==0){
            nulo++;
        }
    }
        printf("\n%d numeros são positivos", positivo);
        printf("\n%d numeros são negativos", negativo);
        printf("\n%d numeros são nulos", nulo);
    return 0;
}