var para = document.querySelector('.p1');
var para2 = document.querySelector('.p2');
var nome;
console.log(para);
function alerta() {
    alert('Olá! Sou o  desenvolvedor Humberto Queiroz. Que bom ver você aqui!');
    nome = prompt('Qual o seu nome?');
    var tudoBem = confirm("Tudo bem com você?");
    if (nome==null) {
        var novoTexto = 'Que pena que você não quer se identificar, espero que na próxima você sinta-se mais avontade para dizer seu nome. <br><br>-_-';
           para.innerHTML = novoTexto; 
           para2.innerHTML='';
        }
    else {
            if(tudoBem) {
                var novoTexto = 'Que bom '+nome+', espero que seu dia continue bem!';
                para.innerHTML = novoTexto;
                var novoTexto2 ='=D';
                para2.innerHTML=novoTexto2;
            } else {
                   var novoTexto = 'Que pena '+nome+', espero que seu dia melhore! <br><br> ;-;';
                   para.innerHTML = novoTexto;
                   para2.innerHTML='';
     }
    }
}



