//Função para chegar quantas vezes uma letra passada pelo usuário aparece em uma frase digitada pelo usuário

function conta() {
    var texto = document.getElementById('texto').value;
    var letra = document.getElementById('letra').value;
    checa(texto, letra);
}

var result = 0;
function checa(texto, letra) {
    result = 0;
    for (i = 0; i < texto.length; i++){
        if (texto[i] == letra) {
            result++;
        }
    }
    alert(result);
}