#include <stdio.h>

#define SIZE 5

int main (){
    int matriz1 [SIZE] [SIZE] = {
        {1,2,3, 4, 5},
        {6,7,8, 9, 10},
        {11,12,13, 14, 15},
        {16,17,18,19,20},
        {21,22,23,24,25}

    };
    int controle=SIZE-1, soma, coluna, tudo;

      
printf("A diagonal principal é:\n");
    for (int i = 0; i < SIZE; ++i){
        for (int j = 0; j < SIZE; ++j){
            if(matriz1[i]==matriz1[j]){
             printf("%d\n", matriz1[i][j]);
            }
           
        }
    }

printf("A diagonal secundaria é:\n");
    for (int i = 0; i < SIZE; ++i){
        for (int j = 0; j < SIZE; ++j){
            if(j==controle){
             printf("%d\n", matriz1[i][j]);
            }
           
        }
        controle--;
    }

printf("A soma da linha 4 é:\n");
    for (int i = 0; i < SIZE; ++i){
        for (int j = 0; j < SIZE; ++j){
            if(i==3){
             soma=soma+matriz1[i][j];
            }
           
        }
    }
printf("%d\n", soma);

printf("A soma da coluna 2 é:\n");
    for (int i = 0; i < SIZE; ++i){
        for (int j = 0; j < SIZE; ++j){
            if(j==1){
             coluna+=matriz1[i][j];
            }
           
        }
    }
printf("%d\n", coluna);


printf("A soma de tudo exceto diagonal principalé:\n");
    for (int i = 0; i < SIZE; ++i){
        for (int j = 0; j < SIZE; ++j){
            if(i!=j){
                tudo=tudo+matriz1[i][j];
            }
           
        }
    }
printf("%d\n", tudo);




   

return 0;
}
