/*14. Exercício de manipulação de uma struct:
- Crie uma função chamada somarPontos que recebe duas variáveis do tipo Ponto como parâmetros e
retorna um novo ponto que é a soma dos dois pontos fornecidos.
- Na função main(), crie duas variáveis do tipo Ponto chamadas p2 e p3 e atribua valores diferentes a elas.
- Chame a função somarPontos passando p2 e p3 como argumentos e armazene o resultado em uma nova
variável chamada soma.
- Imprima as coordenadas do ponto resultante soma.*/

#include <stdio.h>

//Soma os dois pontos e retorna a soma na forma da variavel x
float somarPontos (float x, float y){
    x += y;
    return x;
}

int main() {
    
    struct ponto //definindo o tipo de dado, estrutura do objeto
    {
        float x;
        float y;
    };
    
    //Criando a variavel
    // "struct ponto" é o tipo da variavel, "p1" é o nome dela
    struct ponto p1;
    p1.x=1;
    p1.y=1.25;
    
    printf("\nx= %f", p1.x);
    printf("\ny= %f", p1.y);
    printf("\nSoma do ponto x + y = %f", somarPontos(p1.x, p1.y));
    return 0;
}