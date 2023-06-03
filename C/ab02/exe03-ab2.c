 /* 3. Jogo da forca: 
Implemente o jogo da forca, em que um usuário deve escolher uma palavra qualquer e outro
usuário terá que adivinhar a palavra, fornecendo letras como palpites.
- O jogador tem um número limitado de tentativas antes de perder o jogo de 5.
- O programa deve fornecer saídas personalizadas (imprimir em tela).
- Utilize sua criatividade na interação entre o computador e o usuário.*/

#include <stdio.h>
#include <string.h>

#define TENTATIVAS 5
#define TAMANHO 100

//função principal que inicia o jogo
void jogo(char palavra[],int tamanho, char palavraMostraAcerto[], int tentativas, char letra, int controleErro){
    int controleGanha =0;
   
   // Checa se encontrou todas as letras
    for (int i = 0; i < tamanho; i++) {
        if(palavraMostraAcerto[i]!='-'){
            controleGanha++;
        }
    }
    if(controleGanha==tamanho){
        printf("\n\n\n     ***Parabéns!***\n    ***Você ganhou*** ");
        return;
    }
    
//*1. faz controle das tentativas pela varialvel "tentativas"
    if(tentativas<=TENTATIVAS){
        
        //recebe a letra digitada
        printf("\nDigite uma letra: ");
        scanf("%s", &letra);
        
//*2.    executa a função testa
        if(testa(palavra,tamanho, palavraMostraAcerto, tentativas, letra, controleErro)>0){
            controleErro++;
        };
        tentativas++;
        
        
        //aqui reinicio a função para fazer a checagem de tentativas
        jogo(palavra,tamanho, palavraMostraAcerto, tentativas, letra, controleErro);
    } else{
        printf("\n\n    *** FIM DE JOGO ***");
    }
}

//*3. função que testa se a "letra" esta em "palavra".
//caso esteja vai retornar mensagem de acertou e imprimir ela na variavel "palavraMostraAcerto"
//caso não mostra a forca!
int testa (char palavra[],int tamanho, char palavraMostraAcerto[], int tentativas, char letra[], int controleErro){
    for (int i = 0; i < tamanho; i++) {
        if(letra==palavra[i]){
            printf("\n\n -- Acertou! --");
            palavraMostraAcerto[i]=letra;
            mostraForca(controleErro);
            printf("\n %s", palavraMostraAcerto);
            tentativas++;
            return 0;
        }
    }
    
//*4. mostra a forca
    printf("\n\n  -- Errou! --");
    controleErro++;
    mostraForca(controleErro);
    printf(" %s\n\n", palavraMostraAcerto);
    return controleErro;
    
    
}


//*5 mostra uma figua diferente dependendo
int mostraForca(int controleErro){
    if(controleErro==1){
        printf("\n ___\n|/ 0\n|\n|\n");
        return controleErro;
    } else if(controleErro==2){
        printf("\n ___\n|/ 0\n|  |\n|\n");
        return controleErro;
    } else if(controleErro==3){
        printf("\n ___\n|/ 0\n| /|\n|\n");
        return controleErro;
    } else if(controleErro==4){
        printf("\n ___\n|/ 0\n| /|\\\n|\n");
        return controleErro;
    } else if(controleErro==5){
        printf("\n ___\n|/ 0\n| /|\\\n| / \\\n");
        return controleErro;
    } else{
        printf("\n ___\n|/\n|\n|\n");
    }
    
}



int main() {
    char palavra[TAMANHO];
    int tamanho;
    int tentativas = 1;
    char letra;
    int controleErro=0;
    
    printf("\n ------- Jogo da Forca -------\n\n");

    //Define a palavra da forca
    printf("Digite a palavra da forca:");
    scanf("%s", palavra);
    printf("\nNúmeros de tentativas possíveis: 5.\n");
    
    //define variavel de controle do tamanho
    // cria variavel que sera exibido os acertos
    tamanho = strlen(palavra);
    char palavraMostraAcerto [tamanho+1];

    //escreve '-' na variavel de controle dos acertos palavraMostraAcerto
    for(int i=0; i<tamanho; i++){
        palavraMostraAcerto[i]='-';
    }
    
    //imprime a forca
    printf("\n ___\n|/\n|\n|\n");
    
    //obrigado a colocar no final o '\0' para função não exibir um erro no final
    palavraMostraAcerto[tamanho] = '\0';
    
    //imprime a variavel palavraMostraAcerto já com o formato "----"
    printf(" %s", palavraMostraAcerto);
    
    //inicia o jogo
    jogo(palavra,tamanho, palavraMostraAcerto, tentativas, letra, controleErro);
    
    
    
    
    return 0;
}