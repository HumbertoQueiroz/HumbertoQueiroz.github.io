//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;


//Primeiro vamos criar uma lista com o querySelectorAll das minhas classes que queremos adicionar o evento
var listaNumeros1 = document.querySelectorAll('.numero');

var n1 = document.getElementById('#numero1');
var n11 = parseInt(n1.value);
      console.log(n1.value);
      console.log(n11);


//Função que vai adicionar o evento Onclick nos números.

//Esta função vai receber dois parametros/elementos: "classe" que vai ser adcionado o evento e a "função" que vai ser executada quando clicar.
function addEventoOnclickNumero(classe, funcao) {
    
    

    //Fazer um loop dentro da minha lista "listaNumeros1" 
    for (i = 0; i < listaNumeros1.length; i++){

        //Adicionar o evento ".onclick" recebendo uma função que vai ser executada pelo onclick, esta função vai ser informada quando chamar esta função "addEventoOnclickNumero". 
        listaNumeros1[i].onclick = funcao;
    };
};

//Aqui estou chamando a função e passando os parametros
addEventoOnclickNumero("numero", addNumeroDisplay);

    function addNumeroDisplay(botao) {
    n1=botao.classList;
    console.log(botao);
};
