// 8. Desenvolva um programa capaz de verificar se duas strings são iguais ou não, para isso utilize a função strcmp
//presente na biblioteca string. (Dica: leia a documentação oficial da função strcmp para entender o seu uso.)

#include <stdio.h>
#include <string.h>



int main() {
    char string1[]={"Humberto"}, string2[]={"humberto"};

    if(strcmp(string1, string2)==0){
        printf("Strings iguais");
    }
    
    if(strcmp(string1, string2)<0 || strcmp(string1, string2)>0){
        printf("Strings são diferentes");
    }
    
    return 0;
}