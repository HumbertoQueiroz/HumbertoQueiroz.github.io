//Crie uma função que leia um número inteiro e exiba todos os seus divisores.
//- Utilize a função no mínimo 5 vezes.

#include <stdio.h>
//definindo o escopo da funcao=>
    float divide (int n1){
        printf("\nDigite um número:\n");
    	scanf("%d", &n1);
    	
    	printf("Os divisires são:\n");
    	
    	for (int i = 1; i<=n1 ; i++) {
    	    
    	    if(n1%i==0){
    	        printf("%d, ",i);
    	    }
    	}
        return 0;
    }
    
    
    

int main() {
    float result;
    
    for (int i = 0; i < 3; i++) {
        
    result=divide(0);
    }
    
    
    
    return 0;
}