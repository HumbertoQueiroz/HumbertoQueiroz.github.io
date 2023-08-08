//Faça um programa que leia uma string e armazene-a invertida em outra string. Utilize uma estrutura de
//repetição para varrer e imprimir a nova string.

#include <stdio.h>
#include <string.h>

void converter(char string[100], char string2[100]) {
    int i, j, k;
    
    //define o tamanho sa string para j
    j=strlen(string);
    j--;
    
    //inverte a string e aramazena em string2
    //defino a posição (k) pegando o tamanho (j) menos i
     for (int i = 0; i<(strlen(string)); i++) {
       // printf("\nvalor de i: %d",i);
       // printf("\nvalor de j: %d",j);
       // printf("\nCaracter em string[j]: %c",string[j]);
       
    	k=j-i;
        string2[i]=string[k];
    }
}

int main() {
    char string[100], string2[100];

    printf("Digite uma string: ");
    scanf("%s", string);

    converter(string, string2);


    printf("String convertida:\n");
    for (int i = 0; i < strlen(string2); i++) {
        printf("%c\n", string2[i]);
    }

    return 0;
}