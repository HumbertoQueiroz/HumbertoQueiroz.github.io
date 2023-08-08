#include <stdio.h>

int main (){
    int a[3] [3] = {
        {1,2,3},
        {6,7,8},
        {11,12,13}

    };        

    for (int i = 0; i < 3; ++i){
        for (int j = 0; j < 3; ++j){
            a[i][j]=a[i][j]*5;
            printf("%d\n",a[i][j] );
        }
    }




return 0;
}
