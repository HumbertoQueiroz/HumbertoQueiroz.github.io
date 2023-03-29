console.log(`\nTrabalhando com Loops`);

const listaDeDestinos=new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
     )

listaDeDestinos.push(`Curitiba`) 

const idadeComprador = 17
const estaAcompanhada = false
let temPassagemComprada=false
const destino = "Salvador"
console.log(`\nDestinos possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada==true 

let contador =0
let destinoExiste=false
while(contador<3) {
    if(listaDeDestinos[contador] == destino)
    {
        destinoExiste=true
        break;
    }
    else
    {
        destinoExiste=false
    }
    contador +=1
}

console.log("Destino existe:", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe tivemos em erro!")
}

for(let i = 0; i<3; i ++) {
    
    if(listaDeDestinos[i] == destino)
    {
        destinoExiste=true
  
    }
  
}
