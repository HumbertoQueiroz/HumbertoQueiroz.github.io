//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;

var $wrapper = document.querySelector('.display');

function addNumeroDisplay(e){
      if(para=0){
            HTMLTemporario = $wrapper.innerHTML;
            HTMLNovo=e;
            HTMLTemporario=HTMLNovo;
            $wrapper.innerHTML=HTMLTemporario
            
            console.log('Para1=',$wrapper);
            
      } else{
            HTMLTemporario = $wrapper.innerHTML;
            HTMLNovo=e;
            HTMLTemporario=HTMLTemporario+HTMLNovo;
            $wrapper.innerHTML=HTMLTemporario
            
            console.log('Para1=',$wrapper);
      };
};

function armazenaOperacao (e){
      x1=para;
      operacao=e
};


console.log('x1=',x1);
console.log('y2=',y2);
console.log('operação=',operacao);
console.log('Parágrafo final=',para);
