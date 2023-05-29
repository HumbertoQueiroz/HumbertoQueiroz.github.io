var para = document.querySelector('.p1');
var para2 = document.querySelector('.p2');
var num;
function alerta() {
    alert('Olá! Como o clima esta hoje?');
    para.innerHTML='';
   
    switch (num=prompt(' \"sol\", \"chuva\" ou \"nublado\"')){
        case "sol":
            para.innerHTML='Lembre-se de passar protetor solar quando sair de casa.';
            break;

        case "chuva":
            para.innerHTML='Esta chovendo, melhor não sair de casa. ';
        case "nublado":
            para.innerHTML=para.textContent+'Se for sair leve sombrinha.';
            break
        default:
            para.innerHTML='Não endenti, escreva uma dessas opções sem as aspas:<br> \"sol\", \"chuva\" ou \"nublado\".';        
            break;
    }
    
    }


