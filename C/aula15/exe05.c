// 5. Escreva uma função que leia um número inteiro e exiba a tabuada desse número.

//- Utilize a função 3 vezes.

#include <stdio.h>
//definindo o escopo da funcao=>
    int tabuada (int n1){
      for (int i = 1; i < 11; i++) {
       	printf("%d x %d = %d\n",n1, i, n1*i);
      }
     
        return;
    }
    
    
    

int main() {
    int n1;
    
    for (int i = 0; i < 3; ++i)
    {
      
    printf("\nDigite um número:\n");
    scanf("%d", &n1);
    printf("\nA tabúada de %d eh:\n", n1);
    int result = tabuada(n1);
    }
    
    
    return 0;
}