//3. Escreva uma função que leia dois números inteiros e exiba o maior deles.


#include <stdio.h>
//definindo o escopo da funcao=>
    float maior (float n1, float n2){
       if(n1<n2){
       	n1=n2;
       }
        return(n1);
    }
    
    
    

int main() {
    float n1, n2;
    printf("Digite um número:\n");
    scanf("%f", &n1);
    printf("Digite um segundo número:\n");
    scanf("%f", &n2);
    
    printf("O maior eh: %f\n", maior(n1, n2));
    
    return 0;
}