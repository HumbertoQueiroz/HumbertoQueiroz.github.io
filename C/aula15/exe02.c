//- 2. Escreva uma função que leia a temperatura em graus Celsius e
//converta para graus Fahrenheit.


#include <stdio.h>
//definindo o escopo da funcao=>
    float converte (float n1){
        n1=(n1*1.8)+32;
        return(n1);
    }
    
    
    

int main() {
    float n1;
    printf("Digite a temperatura em Celsius:\n");
    scanf("%f", &n1);
    
    printf("Temperatura em Fahrenheit eh: %f\n", converte(n1));
    
    return 0;
}