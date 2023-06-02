//5.Escreva uma função que receba duas Strings como 
//parâmetro e retorne a quantidade de ocorrências da segunda
//String na primeira;

int converte ( char string1[100], char string2[100]) {
    int i, j, k, l;
    l=0;

    //percorre string até o fim
    for (i = 0; string1[i] != '\0'; i++) {
        
        //checa se o caracter atual da strng[i] é igual ao primeiro da string2
        if (string1[i]==string2[0]){
            //implementa na variavel de controle k o indice de i.
            k = i;

            //percorre a string2 checando se ela é igual a um pedaço da string1
            for (j = 0; string2[j] !='\0'; j++){
                
                //inicia uma checagem apartir da posição 0 da segunda string com a opção k da string1
                if (string2[j]!=string1[k])
                {
                    break;
                }
                k++;
            }
            if (string2[j] == '\0')
                l++;
        }
    }
    


    return l;
}
#include <stdio.h>

int main (){
  char string1[100];
  char string2[100];
  int k;

  printf ("Digite a string1:");
  scanf("%s", &string1);

  printf ("Digite a string2:");
  scanf("%s", &string2);

  converte(string1, string2);
  

  return 0;

}