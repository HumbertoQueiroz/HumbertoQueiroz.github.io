const chuvaDeMeteoros = [
   { nome: 'Alfa Centaurídeos',     declinacao: -59 },
   { nome: 'Gama Normídeos',         declinacao:         -50 },
   { nome: 'Pi Pupídeos',                    declinacao:       -45 },
   { nome: 'Líridas',                     declinacao:   34  },
   { nome: 'Eta Aquáridas',               declinacao:         -1  },
   { nome: 'Eta Líridas',           declinacao:       44  },
   { nome: 'Bootídeos de Junho',             declinacao: 48  },
   { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
   { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
   { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
   { nome: 'Perseidas',              declinacao:     58  },
 ];

 const chuvasHemisferioNorte = chuvaDeMeteoros.filter(e=>e.declinacao >= 0);

 const chuvasHemisferioSul = chuvaDeMeteoros.filter(e=>e.declinacao < 0);

 function mostraNorte(){
    var resposta = "<table>";
    resposta = resposta + `<tr> 
      <td class='titulo'>Nome</td> 
      <td class='titulo'>Declinação</td> 
      </tr>`;

      for(let i=0; i<chuvasHemisferioNorte.length; i++) {
        resposta=resposta+ "<tr> <td"+colorirLinha(i)+">"+chuvasHemisferioNorte[i].nome+"</td>"+"<td"+colorirLinha(i)+">"+chuvasHemisferioNorte[i].declinacao+"</td>"+" <tr>"
      }

      document.getElementById("resultado").innerHTML = resposta;
 }

 function mostraSul(){
  var resposta = "<table>";
  resposta = resposta + `<tr> 
    <td class='titulo'>Nome</td> 
    <td class='titulo'>Declinação</td> 
    </tr>`;

    for(let i=0; i<chuvasHemisferioSul.length; i++) {
      console.log(chuvasHemisferioSul[i].nome)
      resposta=resposta+ "<tr> <td"+colorirLinha(i)+">"+chuvasHemisferioSul[i].nome+"</td>"+"<td"+colorirLinha(i)+">"+chuvasHemisferioSul[i].declinacao+"</td>"+" <tr>"
    }

    document.getElementById("resultado").innerHTML = resposta;
}

function colorirLinha(i){
  if(i%2==0){
    return " class='corVerde'";
  }else {
    return "";
  }
}