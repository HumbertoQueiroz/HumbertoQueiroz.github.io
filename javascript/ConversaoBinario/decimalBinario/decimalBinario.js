var para = document.querySelector('.p1');

var result='';
var inputNumber;

function alerta() {
    input = document.getElementById('botao').value;
    inputNumber = Number(input);
    para.innerHTML = '';
    result = '';


    if (!Number.isInteger(inputNumber) || inputNumber < 0) {
        alert("Por favor insira um número inteiro positivo.");
    }

    if (inputNumber == 0) {
        para.innerHTML = 'O valor '+input+' convertido para binário é 0000.';
    }


    while (inputNumber > 0) {
        result = (inputNumber % 2)+result;
        inputNumber = Math.floor(inputNumber / 2);

        para.innerHTML = 'O valor '+input+' convertido para binário é '+result+'.';
    }
}



