/*-
Faça um programa que multiplica uma matriz 3 x 3 de inteiros por um escalar k = 5.
*/

#include <stdio.h>

int main() {
    int matriz[3][3] = { {1, 2, 3},
                         {4, 5, 6},
                         {7, 8, 9} };
    int k = 5; 



    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            matriz[i][j] = matriz[i][j] * k;
        }
    }

 
    printf("Matriz Resultado:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    return 0;
}

