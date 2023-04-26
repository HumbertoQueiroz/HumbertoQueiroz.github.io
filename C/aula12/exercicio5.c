
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

        printf("\n\nNúmeros positivos: ");

    for (int i = 0; i < SIZE; ++i){
           if(a[i]>0) {
                printf("%d, ", a[i]);
                d++;
            }
    }
    printf("\n%d São positivos.\n",d);
    d=0;
    
    printf("\nNúmeros negativos: ");

    for (int i = 0; i < SIZE; ++i){
           if(a[i]<0) {
                printf("%d, ", a[i]);
                d++;
            }
    }
     printf("\n%d São negativos.\n",d);
     d=0;

    for (int i = 0; i < SIZE; ++i){
               if(a[i]==0) {
                    d++;
                }
        }
    if(d>0){
        printf("\n%d números nulos ou negativos", d);
    }
    return 0;
}