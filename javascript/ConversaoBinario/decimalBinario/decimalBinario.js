var para = document.querySelector('.p1');
var para2 = document.querySelector('.p2');

var result='';
var input;
var inputNumber;
function alerta() {
    input = document.getElementById('botao').value;
    inputNumber = Number(input);


  if (!Number.isInteger(inputNumber) || inputNumber < 0) {
    alert("Por favor insira um número inteiro positivo.");
    return null;
  }


    while (inputNumber > 0) {
        result = (inputNumber % 2)+result;
        inputNumber = Math.floor(inputNumber / 2);

        para.innerHTML = 'O valor '+input+' convertido para binário é '+result+'.';
        
      

        


    
    
     //   var input = document.getElementById('botao').value;
       // inputNumber = Number(input);
       // i = inputNumber;
       //para = ((Number(input) % 2));
       
       
        console.log(inputNumber);
        console.log(result);
       // console.log(bit1);
    }
}



