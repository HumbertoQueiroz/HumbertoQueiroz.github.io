//9. Faça um programa que leia uma string do teclado e diga se ela é palíndromo. Uma string é palíndromo
//quando pode ser lida tanto de trás pra frente quanto de frente para trás e possui exatamente a mesma
//sequência de caracteres. Considere no desenvolvimento apenas palavras palíndromos.

#include <stdio.h>
#include <string.h>

void converter(char string1[100]) {
    int i, j, k, l, m;
    k=strlen(string1);
 
        
        //percorre a string e compara o primeiro com o ultimo caracter  
        for (int i = 0; string1[i]!='\0'; i++) {
            m=k-i-1;

            if(string1[i]==string1[m]){
                
            } else{
                 printf("Não eh palindromo");
                 return;
            }
            
        }
            printf("Eh palindromo");
    
}
    
int main() {
    char string1[100], string2[100];

    printf("Digite string1: ");
    scanf("%s", string1);
    


    converter(string1);


    

    return 0;
}