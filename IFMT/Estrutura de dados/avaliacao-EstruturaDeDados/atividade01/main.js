//1.	Elabore um programa que solicite ao usuário informar os valores de dois vetores com n componentes cada um. Em seguida, o programa deve imprimir os dois vetores lidos, calcular e imprimir a soma deles.

let v1=[];
let v2=[];
let soma1=0;
let soma2=0;


function inserev1(){
    var aux=document.querySelector(".valor1").value;
    console.log(aux);
    v1.push(aux);
}

function inserev2(){
    var aux=document.querySelector(".valor2").value;
    console.log(aux);
    v2.push(aux);
}



function exibe(){
    v1.forEach(function(valor){soma1=Number(soma1)+Number(valor)})
    v2.forEach(function(valor){soma2=Number(soma2)+Number(valor)})
    var aux=document.querySelector(".exibir");
    aux.innerHTML=`Vetor 01 é: [${v1}] <br> Soma: ${soma1} <br><br> Vetor 02 é: [${v2}] <br> Soma: ${soma2} <br><br> `
}

function reset(){
    v1=[];
    v2=[];
    var aux=document.querySelector(".exibir");
    aux.innerHTML=``
}