//2.Escreva uma função que receba duas Strings como parâmetros e concatene a segunda string na primeira;

#include <stdio.h>

void concatenar(char string1[100], char string2[100]) {
    int i;

    // Encontra o final da primeira string e armazenar em i
    for (i = 0; string1[i] != '\0'; i++);

    // Concatena a segunda string no final da primeira
    for (int j = 0; string2[j] != '\0'; j++) {
        string1[i] = string2[j];
        i++;
    }


}

int main() {
    char string1[100];
    char string2[100];

    printf("Digite a primeira string: ");
    scanf("%s", string1);

    printf("Digite a segunda string: ");
    scanf("%s", string2);

    concatenar(string1, string2);
    
    printf("String concatenada: %s\n", string1);
    
    return 0;
}