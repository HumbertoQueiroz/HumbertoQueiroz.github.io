/*2. Cálculo do fatorial: Implemente em um programa uma função que calcule o fatorial de um número fornecido
pelo usuário. O fatorial de um número n é o produto de todos os inteiros positivos menores ou iguais a n.*/

int fatoral(int numero, int vetor[]){

    int result=1;
    //armazenas os fatorais de "numero" no vetor
    for(int i=0; i<numero; i++){
        vetor[i]=numero-i;
    }


    for(int i=0; i<numero; i++){
    result=result*vetor[i];
    }
    
    
    return result;
}




int main() {

    printf("\n------- Vamos verificar o fatoral de um número -------\n\n");
    int numero;


    //Lê o número que vai ser fatorado
    printf("Digite o número que deseja fatorar: ");
    scanf("%d", &numero);

    //Crio um vetor do tamanho do numero digitado
    int vetor[numero];
    printf("\n\n -------- O fatoral de %d eh: -------", numero);
    printf("\n              * %d *", fatoral(numero, vetor));



    return 0;
}