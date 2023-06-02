//11. Faça um programa que leia duas strings. Após isso, o programa deve concatenar as informações lidas e
//mostrar o resultado para o usuário.


#include <stdio.h>
#include <string.h>

void converter(char string1[100], char string2[100]) {
  
   strcat(string1,string2);

   printf("\n%s", string1);
}
    
        

int main() {
    char string1[100], string2[100];

    printf("Digite string1:\n");
    scanf("%s", string1);
    printf("Digite string2:\n");
    scanf("%s", string2);

    converter(string1, string2);
    
    return 0;
}