const Livro={
    nome: "react Native",
    editora: "casa do Código",
    paginas: 185,
    anunciar: function(){
        console.log("A alura indica o livro " + this.nome+"!")
    }
}
Livro.anunciar()