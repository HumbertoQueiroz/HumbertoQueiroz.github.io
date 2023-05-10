/*-
Construa um algoritmo que efetue e apresente o resultado da soma entre duas matrizes 3 x 5.
*/

#include <stdio.h>

int main() {
    int matriz1[3][5] = { {1, 2, 3, 4, 5},
                          {6, 7, 8, 9, 10},
                          {11, 12, 13, 14, 15} };
    int matriz2[3][5] = { {10, 9, 8, 7, 6},
                          {5, 4, 3, 2, 1},
                          {15, 14, 13, 12, 11} };
    int matrizSoma[3][5];
 

  
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 5; j++) {
            matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    printf("Matriz Resultado:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 5; j++) {
            printf("%d ", matrizSoma[i][j]);
        }
        printf("\n");
    }

    return 0;
}

