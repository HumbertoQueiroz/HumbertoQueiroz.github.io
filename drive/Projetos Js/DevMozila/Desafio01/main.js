// Função: Cria um novo parágrafo e o insere no fim do arquivo HTML.
//Aqui foi criado primeiro a função e depois foi capturado a class que vai ser adicionado o evento click com estafunção.

function criarParagrafo() {

    //Aqui criamos um novo "p" e para isso temos que armazenar como uma variável chamada "para"
    var para = document.createElement('p');
    //Aqui criamos/adicionamos o texto 'Você clicou no botão!' no "p" que agora é aramazenado como a variável "para" 
    para.textContent = 'Você clicou no botão!';
    //Aqui informo que esse novo "p" será inserido ao final do "body". Tem que inde vai ir o texto se não o texto não é exibido
    document.body.appendChild(para);
  }
  


  /*
    1. Captura referências de todos os botões na página e armazena isso em um array.
    2. Vai até todos os botões e adiciona um event listener click a cada um deles.
  
    Quando cada botão é clicado, a função criarParagrafo() será executada.
  */
  
    //Aqui capturo todos os "buttons" e armazeno dentro da variável "botoes" como uma lista/array.
  const botoes = document.querySelectorAll('button');
  
  //Aqui uso a estrutura de repetição "for" para criar uma variável chamada "i" (contador) como valor de 0
  // depois analiso se o valor da variável "i" (contador) é menor que o total de itens dentro da lista/array "botoes"
  //caso seja menor ele executa o código dentro dos {} e só depois ele volta para executar o terceiro elemento
  // o terceiro elemento vai adicionar +1 ao valor da variável "i"(contador) e ententão ele repete o for do início com 0+1=1, 1+1=2, 2+1=3... 
  //até o limite da array.
  for(var i = 0; i < botoes.length ; i++) {

    //Aqui dentro primeiro informo que quero pegar um elemento dentro da array "botoes" para isso uso os "[]" e dentro uso a variável "i"(contador)
    // para ir um a um dos elementos da array, tipo pega o 0, depois o 1, depois o 2
    //Então adiciono um evento "click", para quando qualquer um dos "button" que estão dentro da lista/array e que foram armazenados
    // dentro da variável "botoes" seja clicada execute a função "criarParagrafo" que já foi criada acima. 
    botoes[i].addEventListener('click', criarParagrafo);
  }