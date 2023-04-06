var para = document.querySelector('.p1');
console.log(para);
function alerta() {
    alert('Olá! Sou o  desenvolvedor Humberto Queiroz. Que bom ver você aqui!');
    var nome = prompt('Qual o seu nome?');
    var tudoBem = confirm("Tudo bem com você?");
    if (tudoBem) {
        var novoTexto = 'Que bom '+nome+', espero que seu dia continue bem!<br><br> =D';
        para.innerHTML = novoTexto;
    } else if (tudoBem==false){
           var novoTexto = 'Que pena '+nome+', espero que seu dia melhore! <br><br> ;-;';
           para.innerHTML = novoTexto;
     }
    else (tudoBem=='null'){
           var novoTexto = 'Que pena que você não quer se identificar, espero que na próxima você sinta-se mais avontade para dizer seu nome. <br><br> U+1F600';
           para.innerHTML = novoTexto;   
}




