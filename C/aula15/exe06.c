// 6. Escreva um programa que leia uma sequência de números inteiros.
//Escreva uma função que dada a soma desses números e a quantidade de
//números, retorne a média.


#include <stdio.h>
//definindo o escopo da funcao=>
float funMedia (int n1, int n2){
  return (float) n1/n2;
} 
    
    
    
    

int main() {
    int qtd=1, listaNumero[qtd], esc, soma;
    
    for (int i = 0; esc < 1; i++){ 
      if (esc<1){
        printf("Digite um número:\n");
        scanf("%d", &listaNumero[i]);
        printf("Digite 0 para continuar ou outro número para sair\n");
        scanf("%d", &esc);
        qtd=i+1;   
      }
    }

    printf("\n\nA sequencia de números digitados eh: ");

    for (int i; i<qtd; i++){
      printf("%d, ", listaNumero[i]);
      soma+=listaNumero[i];
    }

    printf("\nA quantidade de números digitados eh %d\n\n", qtd);

    printf("A soma dos números eh %d\n", soma);

    printf("A media eh %f", funMedia(soma,qtd));
    




    

    
    return 0;
}
