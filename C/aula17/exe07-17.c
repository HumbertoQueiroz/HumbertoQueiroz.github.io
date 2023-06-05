//7. Quebra de linhas: Escreva uma função que quebre uma string longa em várias linhas, sem quebrar as
//palavras.


#include <stdio.h>
#include <string.h>

void converter(char string1[100]) {
    int i, k = 0;

//percorre a string e imprime o caracter
    for (i = 0; string1[i] != '\0'; i++) {
        printf("%c", string1[i]);
        
        //caso tenha espaço guardo ele em somo +1 em k.
        if (string1[i] == ' ') {
            k++;
        }
        
        //aqui acada 3 espeços quebra a linha
        if (k==3) {
            printf("\n");
            k=0;
        }
    }
}

int main() {
    char string1[100];

    printf("Digite string 1:\n");
    //Uso esse formato estranho para garatir que esta lendo os espaços, vi na internet
    //Foi o unico jeito de fazer funcionar    
    scanf("%[^\n]s", string1);

    converter(string1);

    return 0;
}