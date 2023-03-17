//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y2;

//Várialvel que vai armazenar a operação
var operacao;




var display1 = document.getElementById('display1');
var para1 = parseInt(display1.value);
console.log('para1 puxado do displa1', para1);
controle1 = true;

var display2 = document.getElementById('display2');
var para2 = parseInt(display2.value);
console.log('para2 puxado do display2', para2);
controle2 = false;

var display3 = document.getElementById('display3');
var para3 = parseInt(display3.value);
console.log('para3 puxado do display3', para3);
controle3 = false;

function alteraDisplay() {
      display1.style.display = 'flow';
      display2.style.display = 'none';
      display3.style.display = 'none';
}

alteraDisplay();

function addNumeroDisplay(e) {
   
      if (controle1) {
            console.log('entrou');
            console.log('controle1', controle1);
            console.log('controle2', controle2);
            console.log('controle3', controle3);
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
      }
      if (controle2) {
              console.log('entrou 2', controle2);
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
                  console.log('para2.2 quando tem numero=', display2);
            };
      }

      console.log(operacao);

};

function armazenaOperacao(e) {
      if (controle3) {
            
      }
            if (controle1) {
                  display1.style.display = 'none';
                  display2.style.display = 'inline'
                  x1 = display1;
                  console.log('x1=', x1);
                  operacao = e;
                  console.log('x1=', x1);
                  controle1 = false;
                  controle2 = true;
                  console.log("exibiu display2")
                  console.log('entrou');
                  console.log('controle1', controle1);
                  console.log('controle2', controle2);
                  console.log('controle3', controle3);
            } else {
                  display1.style.display = 'none';
                  display2.style.display = 'none'
                  display2.style.display = 'inline'
                  x1 = display1;
                  operacao = e;
                  controle1 = false;
                  controle2 = false;   
                  console.log("exibiu display3");
            }
      
}
     
