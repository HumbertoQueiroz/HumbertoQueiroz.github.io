
#include <stdio.h>
#define SIZE 10

int main (){
    int a[SIZE], b[SIZE], c[SIZE];
    int d, e, f;
    printf("Digite a idade dos dez menbros do clube\n");
    for (int i = 0; i < SIZE; ++i){
        printf("Digite a idade do %dº menbro\n", i+1);
        scanf("%d", &a[i]);
    }

    for (int i = 0; i < SIZE; ++i){
       
        if(a[i]>14&&a[i]<31){

            d++;
        }
        if(a[i]>30&&a[i]<51){
            e++;
        }

        if(a[i]>50&&a[i]<71){
            f++;
        }
    }
    printf("%d alunos tem entre 13 e 30 anos\n", d);
    printf("%d alunos tem entre 31 e 50 anos\n", e);
    printf("%d alunos tem entre 50 e 70 anos\n", f);

    if(d>e){
        if (d>f){
            printf("Tem mais alunos com idade entre 15 e 30 anos, sendo as idades:\n");
            for (int i = 0; i < SIZE; ++i){
                if(a[i]>14&&a[i]<31){
                    printf("%d, ", a[i]);
                }
            }
        } else { 
            printf("Tem mais alunos com idade entre 51 e 70 anos, sendo as idades:\n");
            for (int i = 0; i < SIZE; ++i){
                if(a[i]>50&&a[i]<71){
                    printf("%d, ", a[i]);
                }
            }
        }
    } else {
        if(e>f){
            printf("Tem mais alunos com idade entre 31 e 50 anos, sendo as idades:\n");
            for (int i = 0; i < SIZE; ++i){
                if(a[i]>30&&a[i]<51){
                    printf("%d, ", a[i]);
                }
            }
        } else{
            printf("Tem mais alunos com idade entre 51 e 70 anos, sendo as idades:\n");
            for (int i = 0; i < SIZE; ++i){
                if(a[i]>50&&a[i]<71){
                    printf("%d, ", a[i]);
                }
            }
        }
    }
return 0;
}