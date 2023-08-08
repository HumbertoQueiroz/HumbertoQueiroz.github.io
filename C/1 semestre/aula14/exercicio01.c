/*-
Receba a quantidade de peças vendidas por cada vendedor e armazene essas
quantidades em um vetor.
- Receba também o preço da peça vendida de cada vendedor e armazene esses preços em
outro vetor.
- Considere que existem apenas 10 vendedores, e cada vendedor pode vender apenas um
tipo de peça, isto é, para cada vendedor existe apenas um preço.
- Calcule e imprima a quantidade total de peças vendidas por todos os vendedores
- Calcule e imprima valor total de venda de cada vendedor.
*/

#include <stdio.h>
#define SIZE 10

int main (){
    int quantidade[SIZE], valor[SIZE], totalVenda, valorTotalVendedor[SIZE], totalGeralVenda;

    printf("Digite a quantidade vendida pelos vendedores:\n");
    for (int i = 0; i < SIZE; ++i){
        printf("Digite a quatidade vendida pelo %dº vendedor\n", i+1);
        scanf("%d", &quantidade[i]);
    }

    printf("Digite o valor das peças vendidas:\n");
    for (int i = 0; i < SIZE; ++i){
        printf("Digite o valor da %dº peça\n", i+1);
        scanf("%d", &valor[i]);
    }


    for (int i = 0; i <SIZE; ++i){
        totalVenda += quantidade[i];
    }
    printf("A quantidade total de peças vendidas é %d.\n", totalVenda);

    for (int i = 0; i <SIZE; ++i){
        valorTotalVendedor[i] = quantidade[i] * valor[i];
    }
    for (int i = 0; i <SIZE; ++i){
        totalGeralVenda += valorTotalVendedor[i];
    }

    printf("O valor total vendido  é R$ %d,00.\n", totalGeralVenda);


    return 0;
}