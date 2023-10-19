//2.	Faça um programa em que o usuário escreva quantos termos da sequência Fibonacci ele deseja que seja apresentado. O programa deve calcular e apresentar a seqüência de Fibonacci com a quantidade informada.
let v1=[];

function exibe(){
    v1=[];
    var aux=document.querySelector(".exibir");
    aux.innerHTML=``
    var aux=document.querySelector(".valor1").value;
    if(aux<1){
        var aux=document.querySelector(".exibir");
        aux.innerHTML=v1;
    }
    if(aux==1){
        v1.push(0);
        var aux=document.querySelector(".exibir");
        aux.innerHTML=`Array [${v1}]`;
    }
    if(aux==2){
        v1.push(0);
        v1.push(1);
        var aux=document.querySelector(".exibir");
        aux.innerHTML=`Array [${v1}]`;
    }
    if(aux>2){
        v1.push(0);
        v1.push(1);
        v1.push(1);
        let aux2=1;
        let aux3=1;
        for(let i=3; i<(aux);i++){
            let aux4=aux2+aux3;
            v1.push(aux4);
            aux2=aux3;
            aux3=aux4;



        }
        var aux=document.querySelector(".exibir");
        aux.innerHTML=`Array [${v1}]`;
    }
}

function reset(){
    v1=[];
    var aux=document.querySelector(".exibir");
    aux.innerHTML=``
}