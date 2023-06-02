//01Faça um programa em C que troque todas as letras minúsculas de uma string recebida como entrada por
//letras maiúsculas.

#include <stdio.h>

char converter(char string[100]) {
    int i;

    //percorre string até o final ('\0')
    for (i = 0; string[i] != '\0'; i++) {
        
    	//verifica se ele está entre a OU z minusculo
        if (string[i] >= 'a' && string[i] <= 'z') {
            
    	//Converte para maiúscula, subtraindo o valor de  a (97 em decimal) e
    	//adicionando o valor de A (65 em decimal) da tabela ASCII
            string[i] = string[i] - 'a' + 'A';
        }
    }
}

int main() {
    char string[100];

    printf("Digite uma string: ");
    scanf("%s", string);

    converter(string);

    printf("String convertida: %s\n", string);

    return 0;
}