//Implemente um programa em C que receba um nome completo e apresente apenas o último nome e o
//primeiro nome na seguinte forma: “1o nome, último nome”. Considere que todas as entradas de nomes
//completos serão compostas apenas de 3 nomes, por exemplo: José Almeida Barros.
#include <stdio.h>

char converter(char string[100], char primeiroNome[100], char segundoNome[100]) {
    int i, j;
    //percorre string até o final ('\0') e guarda o valor em j
    for (j = 0; string[j] != '\0'; j++) {}

    for (i = 0; string[i] != '\0'; i++) {
    	//Pega o primeiro nome e adiciona na variavel primeiroNome
        if (string[i] == ' ') {
            break;
        }
        primeiroNome[i]=string[i];
    }
    
    
    //Localiza a posição da primeira letra do ultimo nome
    j--;
    for (i = 0; j>0 ; i++) {
        if (string[j] == ' ') {
            break;
            
        }
        j--;
    }
    
    j++;    
   // Atribui o ultimo nome a variável segundoNome
   //pega a posição [j] para a primeira letra do ultimo nome localizada acima e percorre ate o final
    for (int i = 0;string[j] != '\0'; i++) {
        segundoNome[i]=string[j];
    	j++;
    }
}
    



int main() {
    char stringOriginal[]={"Humberto Caio Franca de Queiroz"}, primeiroNome[100], segundoNome[100];

    printf("Nome completo:%s", stringOriginal);
    

    converter(stringOriginal, primeiroNome, segundoNome);

    printf("\n%s, %s\n", primeiroNome, segundoNome);

    

    return 0;
}