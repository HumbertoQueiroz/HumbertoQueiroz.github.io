
#include <stdio.h>
#define SIZE 10

int main (){
    int a[SIZE], b[SIZE];
    int c[SIZE], d;
    printf("Digite dez números inteiros\n");
    for (int i = 0; i < SIZE; ++i){
        int c = i+1;
        printf("Digite o %d número\n", c);
        scanf("%d", &a[i]);
    }
     printf("\nOs números digitados são:\n");
    for (int i = 0; i <SIZE; ++i){
        printf("%d,", a[i]);
    }
    printf("\nOs números positivos são: ");
    for (int i = 0; i <SIZE; ++i){
        if(a[i]>0){
           printf("%d, ", a[i]);
           d++;
        }
    }
    printf("\n%d números são possitivos.\n",d);
    d=0;
    printf("\nOs números negativos são: ");
    for (int i = 0; i <SIZE; ++i){
        if(a[i]<0){
           printf("%d, ", a[i]);
           d++;
        }
    }
    printf("\n%d números são negativos.\n",d);
    d=0;
    for (int i = 0; i <SIZE; ++i){
        if(a[i]==0){

           printf("\nO %dº valor digitado é zero", i+1);
           d++;
        }
    }

     if(d>0){
        printf("\n%d números são zeros.\n",d);
    }
    

    return 0;
}