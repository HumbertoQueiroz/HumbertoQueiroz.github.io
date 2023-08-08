#include <stdio.h>

int main (){
    int a[3] [5] = {
        {1,2,3,4,5},
        {6,7,8,9,10},
        {11,12,13,14,15}

    };        

    int b[3] [5] = {
        {1,2,3,4,5},
        {6,7,8,9,10},
        {11,12,13,14,15}
    };


    for (int i = 0; i < 3; ++i){
        for (int j = 0; j < 5; ++j){
            a[i][j]=a[i][j]+b[i][j];
            printf("%d\n",a[i][j] );
        }
    }




return 0;
}
