var para = document.querySelector('.p1');
var para2 = document.querySelector('.p2');
var num;
function alerta() {
    alert('Olá! Vamos descobrir todos os números pares de 0 ao número que você escolher!');
    num = Number(prompt('Digite o número até o qual deseja saber os pares!'));
    if (num==null || num==isNaN) {
        var novoTexto = 'Você não digitou um número, por favor digite um número!';
        para.innerHTML = novoTexto; 
        para2.innerHTML='';
    }
    else {
        var result=2;
        for (i=3;i<=num;i++){
            if(num>1000){
                break;    
            } 
            if(i%2==0){
                console.log(result);
                result= result+', '+i;
            }
            
        }   
        if(num>1000){
            para.innerHTML='Digite um valor menor que 1000';
        }
        
        else{
            result=result+'.';
            para.innerHTML=result;
        }
    }    
}


