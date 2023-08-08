//6. Remoção de espaços em branco: Escreva uma função que remova todos os espaços em branco de uma string.

#include <stdio.h>
#include <string.h>

void converter(char string1[100], char string2[100]) {
  
   //Imprime todas as letras e quando tem um espaço pula para linha de baixo
 int i, j=0;
  
   for (i = 0; string1[i]!='\0'; i++) {
       if (string1[i] == ' ') {
           
        } else {
            string2[j]=string1[i];
            j++;
        }
   }
   
   printf("\n%s", string2);
}
    
        

int main() {
    char string1[100], string2[100];

    printf("Digite string 1:\n");
    //Uso esse formato estranho para garatir que esta lendo os espaços, vi na internet
    //Foi o unico jeito de fazer funcionar
    scanf("%[^\n]s", string1);

    converter(string1, string2);
    
    return 0;
}