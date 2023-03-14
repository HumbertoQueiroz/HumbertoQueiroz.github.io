//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;

var para = document.queryseletor('.display');

function addNumeroDisplay(e){
      if(para=0){
            para=e
      } else{
            para = para+e;
      };
};
//Primeiro vamos criar uma lista com o querySelectorAll das minhas classes que queremos adicionar o evento
var listaNumeros1 = document.querySelectorAll('.numero');

var n1 = document.getElementById('#numero1');
var n11 = parseInt(n1.value);
      console.log(n1.value);
      console.log(n11);
};
