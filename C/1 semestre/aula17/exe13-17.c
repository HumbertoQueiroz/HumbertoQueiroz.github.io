/*13. Exercício de criação de uma struct:
- Crie uma struct chamada Ponto com membros x e y do tipo float. Essa struct representa as coordenadas de
um ponto em um plano cartesiano.
- Crie uma variável do tipo Ponto chamada p1.
- Atribua valores diferentes aos membros x e y da struct p1.
- Imprima os valores dos membros x e y do ponto p1.*/

#include <stdio.h>

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
    return 0;
}