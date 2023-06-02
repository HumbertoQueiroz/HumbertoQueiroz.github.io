//10. Desenvolva um programa que copie o conteúdo de string e cole esse mesmo conteúdo em outra string, para
//isso utilize a função strcpy presente na biblioteca string.



#include <stdio.h>
#include <string.h>

void converter(char string1[100], char string2[100]) {
  
   strcpy(string1,string2);
   
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