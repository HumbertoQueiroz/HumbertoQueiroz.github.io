//3.Escreva uma função que receba duas Strings como parâmetros e retorne 0 se as strings foram diferentes e 1 se as
//strings forem iguais;


#include <stdio.h>
#define SIZE 10

int substitui (char string1[SIZE], char string2[SIZE]){
    int i, n1;
    for (int i = 0; i <SIZE; ++i){
        if (string1[i]!=string2[i]){
    	return 1;
        }
    }
    
   
    return 0;
    
}

int main() {

    int tamanho = SIZE;
    char string1 [SIZE], string2[SIZE];
    
    printf("Digite uma frase de até %d\n", tamanho);
    scanf("%s", &string1);
    
    printf("Digite uma SEGUNDA frase de até %d\n", tamanho);
    scanf("%s", &string2);
    
    printf("O retorno eh: %d", substitui(string1, string2));

    
    
    return 0;
}