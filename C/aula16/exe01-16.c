// 1. Escreva uma função que receba como parâmetro duas strings do mesmo tamanho,
//e copie a primeira String na segunda;

#include <stdio.h>
#define SIZE 10

int main() {

    int tamanho = SIZE;
    char string1 [SIZE], string2[SIZE];
    
    printf("Digite uma frase de até %d\n", tamanho);
    scanf("%s", &string1);
    
    printf("Digite uma SEGUNDA frase de até %d\n", tamanho);
    scanf("%s", &string2);
    
    for (int i = 0; i < SIZE; i++) {
        string2[i]=string1[i];
    }
    
    printf("string1 eh: %s\n", string1);
    printf("string2 eh: %s\n", string2);
    
    return 0;
}
