
#include <stdio.h>



int main()
{
    int numCompetidores, numVoltas;
    //printf("Digite o numero de competidores:\n");
    scanf("%d", &numCompetidores);
    //printf("Digite o numero de voltas:\n");
    scanf("%i", &numVoltas);
    int valores[numCompetidores][numVoltas];
    int total[numCompetidores];
    //Guardo o valor os valores em uam matriz
    for (int i = 0; i < numCompetidores; i++) {
      //  printf("\n%d competidor:\n", i+1);
       for (int k = 0; k < numVoltas; k++) {
        //    printf("Digite o tempo da volta %d:\n", k+1);
            scanf("%d", &valores[i][k]);
            total[i]+=valores[i][k];
        }
          //  printf("total %d\n\n", total[i]);
    }

    //lupe para descobrir o menor valor de cada competidor e escrevo em todos os locais da matriz para facilitar
    //Depois checo o menor entre os competidores e sobrescrevo
    for (int i = 0; i < numCompetidores; i++) {

       for (int k = 0; k < numVoltas; k++) {
           if(k==0){
           }else{
               if(valores[i][k]>valores[i][k-1]){
                   valores[i][k]=valores[i][k-1];
               }
           }
        }
            
           if(i==0){
           }else{
               if(valores[i][i]>valores[i][i+1]){
                   valores[i][i]=valores[i][i+1];
               }
           } 
    }
    
    printf("%d", valores[0][0]);
    
    
    
    return 0;
}