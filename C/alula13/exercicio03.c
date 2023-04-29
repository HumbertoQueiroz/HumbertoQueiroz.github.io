#include <stdio.h>

#define SIZE 20

int main (){
    int matriz1 [SIZE] [SIZE] = {
        {1,2,3},
        {6,7,8},
        {11,12,13}

    };
        int input, controle, linha, coluna;



        printf("Digite um valor inteiro:\n");
        scanf("%d",&input);        

    for (int i = 0; i < SIZE; ++i){
        for (int j = 0; j < SIZE; ++j){
            if(matriz1 [i][j]==input){
                controle=1;
                linha=i;
                coluna=j;
            }
           
        }
    }

    if (controle==1)    {
        printf("O valor %d foi encontrado na martiz na linha [%d] e coluna [%d].\n", input, linha, coluna);
    } else{
          printf("O valor não foi encontrado na martiz");
    }



return 0;
}
