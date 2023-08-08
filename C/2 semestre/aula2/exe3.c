/*3. Escreva um programa que contenha duas variaveis inteiras. Leia essas vari  ́ aveis do  ́
teclado. Em seguida, compare seus enderec ̧os e exiba o conteudo do maior enderec ̧o.  ́o*/

#include <stdio.h>

int main()
{
    int n1, n2;
    printf("Digite um número inteiro para n1");
    scanf("%d", &n1);
    printf("Digite um número inteiro para n2");
    scanf("%d", &n2);
    printf("Endereço de n1: %p\n", &n1);
    printf("Endereço de n2: %p\n", &n2);
    
    if(&n1>&n2){
        printf("\nEndereço de n1 é maior: %p", &n1);
    } else{
        printf("\nEndereço de n2 é maior : %p", &n2);
    }
    
    
    return 0;
}
