/*   ** getEmentsByTagName **

"getElementsByTagName" é um método do document onde consigo buscar dentro do html tags com o nome e guardar em um array.
Posso acessar o elemento do array com [0]
*/


//   ** Exemplo de Callback no Browser **

//puxo o elemento body com getElementsByTagName e acesso com [0]
//crio um evento de onclick nele que ao ser clicado vai acionar a função que vai imprimir no console
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
    console.log(e.target);
}


//target serve para mostrar o elemento que foi clicado