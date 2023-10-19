//4.	Crie um programa que receba duas matrizes de números inteiros 4x4 e apresente como resultado, uma terceira matriz com o produto das duas primeiras.
let v1=[];
let v2=[];
let v3=[];
let v4=[];
let inicial1=[[1,2,3,4],[5,6,7,8], [9,10,11,12],[13,14,45,16]];
let inicial2=[[1,2,3,4],[5,6,7,8], [9,10,11,12],[13,14,45,16]];
let vfinal=[[],[],[],[]];

function exibe(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            vfinal[i][j] =
                inicial1[i][0] * inicial2[0][j] + inicial1[i][1] * inicial2[1][j];
        }
    }

    var aux=document.querySelector(".exibir");
    aux.innerHTML=`Array original 1 [${inicial1}] e original 2 [${inicial2}] e Array alterada é [${vfinal}]`;
    }


function reset(){
    v1=[];
    var aux=document.querySelector(".exibir");
    aux.innerHTML=``
}