//4.Escreva uma função que receba um String e um caractere, e retorne a quantidade de ocorrências do caractere na string;


#include <stdio.h>
#define SIZE 10

int substitui (char string1[SIZE], char string2[SIZE]){
    int i, n1=0;

    //percorre a string e checa se tem o caracter
    //caso tenha +1 na varivel de controle n1 e retorna ela ao final
    for (int i = 0; i <SIZE; ++i){
        if (string1[i]==string2[0]){
    	n1++;
        }
    }
    
   
    return (n1);
    
}

int main() {

    int tamanho = SIZE;
    char string1 [SIZE], string2[SIZE];
    
    printf("Digite uma frase de até %d\n", tamanho);
    scanf("%s", &string1);
    
    printf("Digite um caracter:\n");
    scanf("%s", &string2);
    
    printf("A quantidade eh: %d", substitui(string1, string2));

    
    
    return 0;
}