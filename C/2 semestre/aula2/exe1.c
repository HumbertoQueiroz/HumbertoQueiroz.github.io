/*1. Escreva um programa que declare um inteiro, um real e um char, e ponteiros para inteiro, real, e char. Associe as variaveis aos ponteiros (use &). Modifique os valores de ´
cada variavel usando os ponteiros. Imprima os valores das vari ´ aveis antes e ap ´ os a ´
modificac¸ao.*/

#include <stdio.h>
int main()
{
    //declarando variáveis
    int n1=1;
    float n2=2;
    char l1='a';
    
    //declarando ponteiros
    int *n3;
    float *n4;
    char *l2;
    
    //atribuindo
    n3=&n1;
    n4=&n2;
    l2=&l1;
    
    //imprimindo numeros
    printf("imprimindo variáveis\n");
    printf("%d\n", n1);
    printf("%f\n", n2);
    printf("%c\n", l1);
    
    printf("\nimprimindo ponteiros com * vai retornar o valor armazenado no endereço\n");
    printf("%d\n", *n3);
    printf("%f\n", *n4);
    printf("%c\n", *l2);
    
    printf("\nimprimindo ponteiros com & vai retornar o endereço do PONTEIRO\n");
    printf("%p\n", &n3);
    printf("%p\n", &n4);
    printf("%p\n", &l2);
    
    
    printf("\nimprimindo ponteiros com SEM & vai retornar o endereço do VALOR/VARIÁVEL\n");
    printf("%p\n", n3);
    printf("%p\n", n4);
    printf("%p\n", l2);
    
        //imprimindo numeros
    printf("\nimprimindo variáveis com & para imprimir endereço\n");
    printf("%p\n", &n1);
    printf("%p\n", &n2);
    printf("%p\n", &l1);
    
    
    *n3=4;
    *n4=5;
    *l2='z';

    //imprimindo numeros
    printf("imprimindo variáveis\n");
    printf("%d\n", n1);
    printf("%f\n", n2);
    printf("%c\n", l1);
    

    
    
    
    
    
    return 0;
}