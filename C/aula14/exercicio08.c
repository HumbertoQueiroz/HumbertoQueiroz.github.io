/*-
Faça um algoritmo para ler as temperatuas registradas nos últimos 10 dias armazená-las e em um
vetor. Em seguida, calcular e imprimir a maior temperatura; a temperatura média destes 10 dias; o
número de dias em que a temperatura foi superior a temperatura média; e todas as temperaturas
registradas.
*/

#include <stdio.h>

int main() {
    float temperaturas[10];
    float soma_temperaturas = 0, maior_temperatura;
    int  qtd_superior_media = 0;

   
    for (int i = 0; i < 10; i++) {
        printf("Digite a temperatura do %dº dia: ", i+1);
        scanf("%f", &temperaturas[i]);
        soma_temperaturas += temperaturas[i];

        
        if ( i == 0 || temperaturas[i] > maior_temperatura) {
            maior_temperatura = temperaturas[i];
        }
    }

   
    float media_temperaturas = soma_temperaturas / 10;

    
    for (int i = 0; i < 10; i++) {
        if (temperaturas[i] > media_temperaturas) {
            qtd_superior_media++;
        }
    }

    
    printf("Maior temperatura registrada: %.1f\n", maior_temperatura);
    printf("Temperatura média dos últimos 10 dias: %.1f\n", media_temperaturas);
    printf("Número de dias com temperatura superior à média: %d\n", qtd_superior_media);
    printf("Todas as temperaturas registradas:\n");
    for ( int i = 0; i < 10; i++) {
        printf("%.1f ", temperaturas[i]);
    }
    printf("\n");

    return 0;
}
