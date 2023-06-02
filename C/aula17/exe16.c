/*16. Exercício de utilização de arrays de structs:
- Declare um array de 5 elementos do tipo Ponto chamado pontos.
- Utilize um loop para preencher o array com valores lidos a partir do teclado utilizando a função lerPonto.
- Em seguida, utilize outro loop para imprimir as coordenadas dos pontos armazenados no array.*/

#include <stdio.h>
 //definindo o tipo de dado, estrutura do objeto
    struct ponto    {
        float x;
        float y;
    };
    

//define o tipo de estrutura como ponto
struct ponto lerPonto (){
    
    //Tem que iniciar uma variavel do tipo ponto para armazenar os valores e depois retornar
    struct ponto p;
    printf("Digite um valor para ponto X:");
    scanf("%f", &p.x);
    printf("Digite um valor para ponto Y:");
    scanf("%f", &p.y);

    return p;
}

int main() {
    
    //Criando a variavel pontos com 5 elementos
    // "struct ponto" é o tipo da variavel, "p1" é o nome dela
    struct ponto pontos[5];

    //for para preencher os valores com função para ler valor e adicionar aos objetos.
    for (int i = 0; i < 5; i++){
        pontos[i]= lerPonto();
    }

    //imprime os valores
    for (int i = 0; i < 5; i++){
        printf("Coordenadas x e y do pontos%d: %f, %f.\n", i+1, pontos[i].x, pontos[i].y);
    } 
}