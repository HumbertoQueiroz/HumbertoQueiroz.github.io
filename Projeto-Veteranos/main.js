function enviarDados() {
    // Capturar os valores dos campos de entrada
    var username = $('#username').val();
    var password = $('#password').val();

    // Preparar os dados para enviar ao backend
    var dados = {
      username: username,
      password: password
    };

    // Enviar uma requisição AJAX POST para o backend
    $.ajax({
      url: 'URL_DO_BACKEND',  // Substitua pela URL do seu backend
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(dados),
      success: function (resposta) {
        // Ação a ser realizada em caso de sucesso
        console.log('Dados enviados com sucesso:', resposta);
      },
      error: function (erro) {
        // Ação a ser realizada em caso de erro
        console.error('Erro ao enviar dados:', erro);
      }
    });
  }