/*15. Exercício de leitura de structs a partir do teclado:
- Crie uma função chamada lerPonto que solicita ao usuário que digite as coordenadas x e y de um ponto e
retorna uma struct Ponto com os valores fornecidos.
- Na função main(), chame a função lerPonto duas vezes e armazene os resultados nas variáveis p4 e p5.
- Imprima as coordenadas dos pontos lidos.*/

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
    
    //Criando a variavel
    // "struct ponto" é o tipo da variavel, "p1" é o nome dela
    struct ponto p1, p2, p3, p4;

    //executa função para ler valor e adicionar aos objetos.
    p1=lerPonto();
    p2=lerPonto();
    p3=lerPonto();
    p4=lerPonto();
    
   
    printf("\nponto p1: x = %f, y = %f", p1.x, p1.y);
    printf("\nponto p2: x = %f, y = %f", p2.x, p2.y);
    printf("\nponto p3: x = %f, y = %f", p3.x, p3.y);
    printf("\nponto p4: x = %f, y = %f", p4.x, p4.y);
}