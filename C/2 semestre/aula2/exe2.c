/*2. Escreva um programa que contenha duas variaveis inteiras. Compare seus enderec ̧os e  ́
exiba o maior endereço*/

#include <stdio.h>

int main()
{
    int n1=1000000, n2;
    printf("Endereço de n1: %p\n", &n1);
    printf("Endereço de n2: %p\n", &n2);
    
    if(&n1>&n2){
        printf("\nEndereço de n1 é maior: %p", &n1);
    } else{
        printf("\nEndereço de n2 é maior : %p", &n2);
    }
    
    
    return 0;
}
