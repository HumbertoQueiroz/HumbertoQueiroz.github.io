//12. Faça um programa que conte quantas letras maiúsculas existem numa string.

#include <stdio.h>
void converter(char string1[100]){
    int qtdMaiuscula=0;
//percorre toda a string
   for (int i = 0; string1[i]!='\0'; i++) {
    //caso o valor estaja entre A e Z da tablea ASCII adiciona 1 na variavel qtdMaiuscula
       if(string1[i]>=65&&string1[i]<=90){
        qtdMaiuscula++;
       }
   }
   printf("\nQuantidade de letras maiusculas eh: %d", qtdMaiuscula);
}
    



int main() {
    char stringOriginal[]={"Humberto Caio Franca de Queiroz"};

    printf("Nome completo:%s", stringOriginal);
    

    converter(stringOriginal);


    return 0;
}