/*-
Faça um algoritmo para ler a idade e o sexo de dez crianças de um orfanato, armazenando os
dados em dois vetores. Imprimir a idade média das crianças; quantas crianças possuem idade
superior a 5 anos; a porcentagem de crianças do sexo masculino; e quantas crianças possuem idade
inferior a idade média.
*/

#include <stdio.h>

int main() {
    int idades[10];
    char sexos[10];
    int  soma_idades = 0, qtd_maiores_5 = 0, qtd_masculinos = 0, qtd_inferiores_media = 0;
    float media_idades, perc_masculinos;

    for (int i = 0; i < 10; i++) {
        printf("Digite a idade da %dª criança: ", i+1);
        scanf("%d", &idades[i]);
        soma_idades += idades[i];

        printf("Digite o sexo da %dª criança (M/F): ", i+1);
        scanf(" %c", &sexos[i]);

        
        if (idades[i] > 5) {
            qtd_maiores_5++;
        }

        
        if (sexos[i] == 'M' || sexos[i] == 'm') {
            qtd_masculinos++;
        }
    }

    
    media_idades = (float)soma_idades / 10;

    
    for (int i = 0; i < 10; i++) {
        if (idades[i] < media_idades) {
            qtd_inferiores_media++;
        }
    }

    
    perc_masculinos = (float)qtd_masculinos / 10 * 100;

    
    printf("Idade média das crianças: %.2f\n", media_idades);
    printf("Quantidade de crianças com idade superior a 5 anos: %d\n", qtd_maiores_5);
    printf("Porcentagem de crianças do sexo masculino: %.2f%%\n", perc_masculinos);
    printf("Quantidade de crianças com idade inferior à média: %d\n", qtd_inferiores_media);

    return 0;
}
