//2.	Faça um programa em que o usuário escreva quantos termos da sequência Fibonacci ele deseja que seja apresentado. O programa deve calcular e apresentar a seqüência de Fibonacci com a quantidade informada.
let v1=[];
let v2=[];
let v3=[];
let vfinal=[[],[],[]];
let v4;

function exibe(){
    for (let i=0; i<3;i++){
        aux=prompt(`digite ${i+1}º numero da primeira linha`);
        v1.push(aux)
    }
    for (let i=0; i<3;i++){
        aux=prompt(`digite ${i+1}º numero da segunda linha`);
        v2.push(aux)
    }
    for (let i=0; i<3;i++){
        aux=prompt(`digite ${i+1}º numero da terceira linha`);
        v3.push(aux)
    }

    vfinal= [[v1], [v2], [v3]];
    v4=[[v1], [v2], [v3]];

    for (let i=0; i<3;i++){
        for (let k=0; k<1;k++){
            vfinal[i][k]=v1[i];
        }
    }
    for (let i=0; i<3;i++){
        for (let k=1; k<2;k++){
            vfinal[i][k]=v2[i];
        }
    }
    for (let i=0; i<3;i++){
        for (let k=2; k<3;k++){
            vfinal[i][k]=v3[i];
        }
    }


    
    var aux=document.querySelector(".exibir");
    aux.innerHTML=`Array original [${v4}] <br> Array alterada é [${vfinal}]`;
    }


function reset(){
    v1=[];
    var aux=document.querySelector(".exibir");
    aux.innerHTML=``
}

function imprimir3x3(matrix){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){

        }
    }

}