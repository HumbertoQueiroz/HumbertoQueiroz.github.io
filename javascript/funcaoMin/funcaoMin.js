var para = document.querySelector('.p1');


function alerta() {
    input1 = document.getElementById('botao1').value;
    inputNumber1 = Number(input1);

    input2 = document.getElementById('botao2').value;
    inputNumber2 = Number(input2);


    if (inputNumber1>inputNumber2) {
        para.innerHTML = 'O número "'+inputNumber2+'" é menor!';
    } else {
        para.innerHTML = 'O número "'+inputNumber1+'" é menor!';
    }
}

