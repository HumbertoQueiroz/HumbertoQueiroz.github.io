//Function Cronstrutora nada mais é que uma estrutura para criar objetos, definindo a estrutura, métodos e atributo que ele vai ter.
// Para criar um objeto com essa estrutura pré-definida basta usar let ou const mais o nome do novo objeto igual a "new" e o nome da estruturapré-definida, ou seja, "const uno = new Carro"
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    //método plúblico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        }else { 
        velocidadeAtual = velocidadeMaxima;
        }
    } 


    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}


const uno = new Carro;
uno.acelerar()
console.log(uno)
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 25);

ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari);
console.log(ferrari.getVelocidadeAtual());
