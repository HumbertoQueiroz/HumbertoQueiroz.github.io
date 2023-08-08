//5. Separação de palavras: Escreva um programa que leia uma frase como entrada e imprima cada palavra em
//uma linha separada.

#include <stdio.h>
#include <string.h>

void converter(char string1[100]) {
  
   //Imprime todas as letras e quando tem um espaço pula para linha de baixo
 
  
   for (int i = 0; string1[i]!='\0'; i++) {
       if (string1[i] == ' ') {
            printf("\n");
        } else {
            printf("%c", string1[i]);
        }
   }
   
}
    
        

int main() {
    char string1[100], string2[100];

    printf("Digite string 1:\n");
    //Uso esse formato estranho para garatir que esta lendo os espaços, vi na internet
    //Foi o unico jeito de fazer funcionar
    scanf("%[^\n]s", string1);

    converter(string1);
    
    return 0;
}