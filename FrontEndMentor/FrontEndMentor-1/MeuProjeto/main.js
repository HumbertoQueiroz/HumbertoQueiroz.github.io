let dadosJson = document.querySelector("#dados");
fetch("data.json").then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuario)=> {

           // dadosJson.innerHTML += '<div> ${usuario.category} - ${usuario.score} </div>'
        })
      
    })
})