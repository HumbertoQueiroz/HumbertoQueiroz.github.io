#include <stdio.h>


int operacao (int n, int tamanhoClico){
     tamanhoClico++;
    printf("n agora eh: %d\n", n);
    if(n==1){
        printf("n FINAL: %d\nTamanho do clico eh: %d\n\n", n, tamanhoClico);
        return tamanhoClico;
    } else{
        
        if(n%2==0){
            n=n/2;
          
            operacao(n, tamanhoClico);;
        } else{
            n=(n*3)+1;
            operacao(n, tamanhoClico);;
        }
    }
}
int main()
{
    int n, i, j, tamanhoClico, controleFor, cicloMaior;
    printf("Digite um numero para i:\n");
    scanf("%d", &i);
    printf("Digite um numero maior para j:\n");
    scanf("%i", &j);
    if(i>j){
        printf("Número i eh maior, vai ser necessario inverter\n");
        controleFor=i;
        i=j;
        j=controleFor;
        controleFor=0;
        printf("Agora i=%d, j=%d\n", i, j);
        
    } else{
        printf("i=%d, j=%d\n", i, j);
    }
    controleFor=j-i+1;
    printf("controleFor=%d\n\n", controleFor);
    
    for (int k = i; k < (i+controleFor); k++) {
       if(operacao(k, tamanhoClico)>cicloMaior){
            cicloMaior=operacao(k, tamanhoClico);
       }else{
           
       }
    }
    
    printf("Ciclo maior eh: %d", cicloMaior);
    
    return 0;
}