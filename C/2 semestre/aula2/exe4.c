/*4.Fac ̧a um programa que leia 2 valores inteiros e chame uma func ̧ao que receba estas  ̃
2 variaveis e troque o seu conte  ́ udo, ou seja, esta func ̧  ́ ao ̃ e chamada passando duas  ́
variaveis A e B por exemplo e, ap  ́ os a execuc ̧  ́ ao da func ̧  ̃ ao, A conter  ̃ a o valor de B e B  ́
tera o valor de A.*/

#include <stdio.h>
void troca (int *A, int *B){
    int aux=*A;
    *A=*B;
    *B=aux;
    
    
}


int main()
{
    int n1, n2;
    printf("Digite um número inteiro para n1: ");
    scanf("%d", &n1);
    printf("Digite um número inteiro para n2: ");
    scanf("%d", &n2);
    troca(&n1,&n2);
    printf("n1 agora eh: %d\nn2 agora eh: %d", n1, n2);
    
    
    
    
    
    return 0;
}
