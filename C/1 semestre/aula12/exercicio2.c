#include <stdio.h>

int main (){
    int a[5], b[5];
    printf("Digite cinco números inteiros.\n");
    for (int i = 0; i < 5; ++i){
        int c = i+1;
        printf("Digite o %d número\n", c);
        scanf("%d", &a[i]);
    }
    for (int i = 0; i <5; ++i){
        printf("%d,", a[i]);
    }
    for (int i = 0; i <5; ++i){
        b[i]=a[i]*-1;
    }
    printf("\n");
    for (int i = 0; i <5; ++i){
        printf("%d,", b[i]);
    }

    return 0;
}