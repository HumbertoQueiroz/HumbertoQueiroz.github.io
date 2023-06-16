//Para garantir que o this esta apontando para o objeto correto uma boa pratica é
//armazenar dentro de uma constante self

function Pessoa() {
    this.idade = 0;
    
    const self = this;

  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    },
    1000
  );
}

new Pessoa();



//Também pode usar o bind para isso, colocando "." no final da função para acessar a função metodo bind
// e usar como parametro o this

function Pessoa2() {
  this.idade = 0;

  setInterval(function () {
    this.idade++;
    console.log(this.idade);
  }.bind(this), 1000);
}

new Pessoa2