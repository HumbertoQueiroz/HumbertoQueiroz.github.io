//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;




var display1 = document.getElementById('display1');
var para1 = parseInt(display1.value);
console.log('para1 puxado do displa1', para1);

var display2 = document.getElementById('display2');
var para2 = parseInt(display2.value);
console.log('para2 puxado do display2', para2);


var display3 = document.getElementById('display3');
var para3 = parseInt(display3.value);
console.log('para3 puxado do display3', para3);


function addNumeroDisplay(e) {
   
      if (display1.style.display==='inline'){
            if (para1 == 0) {
                  HTMLTemporario = display1.innerHTML;
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTNovo;
                  display1.innerHTML = HTMLTemporario;
                  para1 = display1.innerHTML
                  console.log('para1.1 quando tem zero=', display1);
      
            } else {
                  HTMLTemporario = display1.innerHTML;
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTemporario + HTMLTNovo;
                  display1.innerHTML = HTMLTemporario;
                  console.log('para1.2 quando tem numero=', display1);
            };
      } else {
             if (para2 == 0) {
                  HTMLTemporario = display2.innerHTML;
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTNovo;
                  display2.innerHTML = HTMLTemporario;
                  para2 = display2.innerHTML
                  console.log('para2.1 quando tem zero=', display2);
      
            } else {
                  HTMLTemporario = display2.innerHTML;
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTemporario + HTMLTNovo;
                  display2.innerHTML = HTMLTemporario;
                  console.log('para2.1 quando tem numero=', display2);
            };
      }

      console.log(operacao);

};

function armazenaOperacao(e) {
      x1 = display1;
      operacao = e;
      display1.style.display = "none";
      display2.style.display = "inline";
      
}
     


console.log('x1=',x1);
console.log('y2=',y2);
console.log('operação=',operacao);
console.log('Parágrafo final=');
