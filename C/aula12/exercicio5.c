
#include <stdio.h>
#define SIZE 5

int main (){
    int a[SIZE], b[SIZE], c[SIZE];
    int d, e=10, f;
    printf("Digite a 5 números\n");
    for (int i = 0; i < SIZE; ++i){
        printf("Digite o %dº número\n", i+1);
        scanf("%d", &a[i]);
    }


        printf("\nNúmeros digitados: ");

    for (int i = 0; i < SIZE; ++i){
            printf("%d, ", a[i]);
    }

        printf("\nNúmeros positivos: ");

    for (int i = 0; i < SIZE; ++i){
           if(a[i]>0) printf("%d, ", a[i]);
    }
    
    printf("\nNúmeros negativos: ");

    for (int i = 0; i < SIZE; ++i){
           if(a[i]<0) printf("%d, ", a[i]);
    }

    return 0;
}