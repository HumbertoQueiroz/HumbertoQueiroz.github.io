/*-
Exibir a média, a moda e a mediana de um vetor de tamanho 20 já ordenado em ordem
crescente.
*/

#include <stdio.h>

int main() {
    int a[10], b[10], temp;
   
    printf("Digite 10 valores inteiros:\n");

    for (int i = 0; i < 10; i++) {
        scanf("%d", &a[i]);
        b[i] = a[i];
    }

    for (int i = 0; i < 9; i++) {
        for (int j = i + 1; j < 10; j++) {
            if (b[j] < b[i]) {
                temp = b[i];
                b[i] = b[j];
                b[j] = temp;
            }
        }
    }

    printf("Vetor original:\n");
    for (int i = 0; i < 10; i++) {
        printf("%d ", a[i]);
    }

    printf("\nVetor ordenado:\n");
    for (int i = 0; i < 10; i++) {
        printf("%d ", b[i]);
    }

    return 0;
}
