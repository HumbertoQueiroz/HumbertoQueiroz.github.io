var para = document.querySelector('.p1');
console.log(para);
function alerta() {
    alert('Olá! Sou o  desenvolvedor Humberto Queiroz. Que bom ver você aqui!');
    var nome = prompt('Qual o seu nome?');
    var tudoBem = confirm("Tudo bem com você?");
    if (tudoBem) {
        var novoTexto = 'Que bom '+nome+', espero que seu dia continue bem!<br><br> =D';
        para.innerHTML = novoTexto;
    } else {
           var novoTexto = 'Que pena '+nome+', espero que seu dia melhore! <br><br> ;-;';
           para.innerHTML = novoTexto;
     
    }
    console.log(tudoBem);
    
}




