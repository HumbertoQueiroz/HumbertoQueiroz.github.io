//Criando um objeto vazio, sem atribuir nenhum valor, com "new Objeto"
const produto = new Object;

//Neste momento o objeto produto já exixte, mas não armazena nenhum valor, esta vazio.
console.log(produto)

//Para atribuir valores podemos usar o ponto nome do novo atributo
//depois igual e o valor que vai ser guardado dentro do atributo
produto.nome = 'notebook';
produto.preco = 3000;
//Também pode usar [] para criar o nome do atributo com espaço
produto['marca do produto'] = 'Lenovo';

//Se tentar criar um atributo sem definir o valor que vai armazenar não funciona
produto.desconto;

//Neste momento o bjeto tem três atributos cada um 
console.log(produto)

//Para deletar um atributo basta usar delete e depois o nome do objeto ponto nome do atributo
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);


//Criando objeto já com atributos definidos na criação
//Pode ter um objeto dentro de outro objeto
const carro = {
    modelo: 'Uno',
    valor: 15000,
    proprietario: {
        nome: 'Caio',
        idade: 27,
        endereco: {
            logradouro: 'Av. Brasil',
            numero: 1,
            bairro: 'centro'
        }
    }
}

console.log(carro);
console.log(carro.proprietario);
console.log(carro.proprietario.endereco);