/*-
Faça um algoritmo para ler a nota de prova e de trabalho de dez alunos. Armazenar as notas em
dois vetores diferentes. Em seguida, calcular a média de cada aluno, armazenando- as em um outro
vetor. Imprimir a maior e a menor média; quantos alunos obtiveram média igual ou superior à 7,0; e
os três vetores.
*/

#include <stdio.h>
#define SIZE 10

int main (){
    int a[SIZE], b[SIZE], c[SIZE];
    int d, e=10, f;
    printf("Digite a nota da PROVA dos dez alunos\n");
    for (int i = 0; i < SIZE; ++i){
        printf("Digite o valor da prova do %dº aluno\n", i+1);
        scanf("%d", &a[i]);
    }

     printf("Digite a nota do TRABALHO dos dez alunos\n");
    for (int i = 0; i < SIZE; ++i){
        printf("Digite o valor do trabalho do %dº aluno\n", i+1);
        scanf("%d", &b[i]);
    }

    for (int i = 0; i < SIZE; ++i){
        c[i]=(a[i]+b[i])/2;
        if(c[i]>d){
            d=c[i];
        }
        if(c[i]<e){
            e=c[i];
        }

        if(c[i]>=7){
            f++;
        }

    }



    printf("A maior Nota é %d.\n", d);
    printf("A menor Nota é %d.\n", e);
    printf("%d tiveram nota maior que 7.\n", f);
    printf("PROVAS: ");

    for (int i = 0; i < SIZE; ++i){
            printf("%d, ", a[i]);
    }

    printf("\nTRABALHOS: ");

    for (int i = 0; i < SIZE; ++i){
        printf("%d, ", b[i]);
    }
    return 0;
}