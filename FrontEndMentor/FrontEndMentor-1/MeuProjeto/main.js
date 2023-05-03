let divDados = document.querySelector("#dados");
let opacidade = document.querySelector(".opacidade")

let divNome1 = document.querySelector("#nome1");
let divNumero1 = document.querySelector("#numero1");

let divNome2 = document.querySelector("#nome2");
let divNumero2 = document.querySelector("#numero2");

let divNome3 = document.querySelector("#nome3");
let divNumero3 = document.querySelector("#numero3");

let divNome4 = document.querySelector("#nome4");
let divNumero4 = document.querySelector("#numero4");

let resultado= document.querySelector('.circulo__numeroGrande');

fetch("data.json").then((response) => {
    response.json().then((dados) => {
        
        divNome1.innerHTML += dados.usuarios[0].category;
        divNumero1.innerHTML = dados.usuarios[0].score;

        divNome2.innerHTML += dados.usuarios[1].category;
        divNumero2.innerHTML = dados.usuarios[1].score + divNumero2.textContent;

        divNome3.innerHTML += dados.usuarios[2].category;
        divNumero3.innerHTML = dados.usuarios[2].score + divNumero3.textContent;
       
        divNome4.innerHTML += dados.usuarios[3].category;
        divNumero4.innerHTML = dados.usuarios[3].score + divNumero4.textContent;   
        
        total = parseInt((dados.usuarios[0].score+dados.usuarios[1].score+dados.usuarios[2].score+dados.usuarios[3].score)/4);
        resultado.innerHTML += total;
    })
})


function alerta() {
    divDados.style.display = 'inline';
    opacidade.style.opacity = '60%';
    opacidade.style.curso = 'hover'

}

function fecha(){
    divDados.style.display = 'none';
     opacidade.style.opacity = '';
}
