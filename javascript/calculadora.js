//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;

var para = document.querySelector('.display');

function addNumeroDisplay(e){
      if(para=0){
            paraTemporario =para.innerHTML;
            paraNovo=e;
            paraTemporario=paraNovo;
            para.innerHTML=HTMLTemporario
            
            console.log('Para1=',para);
            
      } else{
            paraTemporario = para.innerHTML;
            paraNovo=e;
            paraTemporario=paraTemporario+paraNovo;
            para.innerHTML=paraemporario
            
            console.log('Para1=',para);
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
