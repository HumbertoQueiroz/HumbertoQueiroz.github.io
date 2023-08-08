//- Implemente a função somar, que deve receber como parâmetros dois
//números inteiros e retornar a soma desses números.
//- Implemente a função substrair, que deve receber como parâmetros
//dois inteiros e retornar a subtração do primeiro pelo segundo.
//- Implemente a função quadrado, que deve receber como parâmetro um
//número inteiro e retornar o quadrado desse número.


#include <stdio.h>
//definindo o escopo da funcao=>
    int soma (int n1, int n2){
        n1+=n2;
        return(n1);
    }
    
    int subtrai (int n1, int n2){
        n1-=n2;
        return(n1);
    }
    
     int quadrado (int n1){
        n1*=n1;
        return(n1);
    }
    
    

int main() {
    int n1, n2, resultado;
    printf("Digite o primeiro número:\n");
    scanf("%i", &n1);
    
    printf("Digite o segundo número\n");
    scanf("%i", &n2);
    
    
    
    printf("Soma eh: %i\n", soma(n1,n2));
    printf("Sutração eh: %i\n", subtrai(n1,n2));
    printf("Quadrado do primeiro eh: %i\n", quadrado(n1));
    printf("Quadrado do segundo eh: %i\n", quadrado(n2));    
    return 0;
}