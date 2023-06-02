//4. Comparação de strings: Escreva uma função que compare duas strings e retorne se são iguais ou diferentes.

#include <stdio.h>
#include <string.h>

void converter(char string1[100], char string2[100]) {

    //campara tamanho
    if(strlen(string1)==strlen(string2)){
        for (int i = 0; i<strlen(string1); i++) {
            if(string1[i]!=string2[i]){
            printf("String diferente");
            return;
            } else{
                printf("String iguais");
                return;
            }
        }
    }else {
        printf("Tamanho diferente");
        return;
    }
}

int main() {
    char string1[100], string2[100];

    printf("Digite string 1: ");
    scanf("%s", string1);
     printf("Digite string 2: ");
    scanf("%s", string2);

    converter(string1, string2);

    return 0;
}