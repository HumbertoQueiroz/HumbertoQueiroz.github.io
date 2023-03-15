//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;

var display = document.getElementById('display2');
var para = parseInt(display.value);
      
function addNumeroDisplay(e){
      if (para == 0) {
            HTMLTemporario = display.innerHTML;
            HTMLTNovo=e;
            HTMLTemporario=HTMLTNovo;
            display.innerHTML = HTMLTemporario;
            para=display.innerHTML
            
    
      } else {      
            HTMLTemporario = display.innerHTML;
            HTMLTNovo=e;
            HTMLTemporario=HTMLTemporario+HTMLTNovo;
            display.innerHTML=HTMLTemporario;
      };      
    

};

function armazenaOperacao (e){
      x1 = display.value;
      console.log('x1=',x1);
      operacao = e;
      console.log(operacao);
      display.innerHTML = 0;
};


console.log('x1=',x1);
console.log('y2=',y2);
console.log('operação=',operacao);
console.log('Parágrafo final=');
