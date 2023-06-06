var para = document.querySelector('.p1');
var para2 = document.querySelector('.p2');
var num = '';
var x = 1;
function alerta() {
  alert('Olá! Vamos criar um tabuleiro de xadrez?');
  para.innerHTML = '';
  for (l = 1; l <= 8; l++) {
    for (c = 1; c <= 8; c++) {
      p = l + c;
      if (p % 2 == 0) {
        num += '#';
      } else {
        num += ' ';
      }
    }
    num += '\n';
  }
  console.log(num);
}
