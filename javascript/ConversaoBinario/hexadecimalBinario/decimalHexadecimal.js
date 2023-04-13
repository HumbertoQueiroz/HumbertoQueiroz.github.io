var para = document.querySelector('.p1');

var result='';
var input;
var inputNumber;
var hex1 = '';
var hex2 = '';
var hex3 = '';
var hex4 = '';

function numeroHexadecimal(e) {
    switch (e) {
        case 0:
            result = '0' + result;
            break;
        case 1:
            result = '1' + result;
            break;
        case 2:
            result = '2' + result;
            break;
         case 3:
            result = '3' + result;
            break;
         case 4:
            result = '4' + result;
            break;
         case 5:
            result = '5' + result;
            break;
         case 6:
            result = '6' + result;
            break;
         case 7:
            result = '7' + result;
            break;
         case 8:
            result = '8' + result;
            break;
         case 9:
            result = '9' + result;
            break;
         case 10:
            result = 'A' + result;
            break;
         case 11:
            result = 'B' + result;
            break;
         case 12:
            result = 'C' + result;
            break;
         case 13:
            result = 'D' + result;
            break;
         case 14:
            result = 'E' + result;
            break;
         case 15:
            result = 'F' + result;
            break;
        default:
            console.log('Operação inválido');
    }
}


function alerta() {
    input = document.getElementById('botao').value;
    inputNumber = Number(input);
    para.innerHTML = '';
    result = '';


    if (!Number.isInteger(inputNumber) || inputNumber < 0 || inputNumber>4000) {
        alert("Por favor insira um número inteiro positivo até 4000.");
    }

    if (inputNumber == 0) {
        para.innerHTML = 'O valor '+input+' convertido para hexadecimal é 0.';
    }

         
    
    if (inputNumber < 16) {
        numeroHexadecimal(inputNumber);
        para.innerHTML = result;
        console.log('if1 executado');

    } else if (inputNumber > 15 && (inputNumber / 16) > 0&& (inputNumber/16)<16){
        hex1 = (inputNumber % 16);
        numeroHexadecimal(hex1);
        hex2 = Math.floor(inputNumber / 16);
        numeroHexadecimal(hex2);
        para.innerHTML = result;
        console.log('if2 executado');
        
    } else if ((inputNumber / 16) > 15) {
        hex3 = numeroHexadecimal((inputNumber % 16))
        inputNumber = Math.floor(inputNumber / 16);
        hex2 = numeroHexadecimal((inputNumber % 16))
        inputNumber = Math.floor(inputNumber / 16);
        hex1 = numeroHexadecimal(inputNumber % 16);
        para.innerHTML = result;
        console.log('if3 executado');
     }

    else {
 
        
    }
    
    
    
    
  
    console.log('hex1 '+hex1);
    console.log('hex2 '+hex2);
    console.log('hex3 '+hex3);
    
        
        //result = (inputNumber % 2) + result;
        //inputNumber = Math.floor(inputNumber / 2);
        //para.innerHTML = 'O valor '+input+' convertido para binário é '+result+'.';

}



