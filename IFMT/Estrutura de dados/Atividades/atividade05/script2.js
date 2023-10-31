var dadosSalario = [
    [510, 545, 622, 678, 724, 788, 880, 937, 954, 998, 1045],
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,2019,2020]];

var dadosInflacao = [
    [5.91 ,6.5, 5.84, 5.91, 6.41, 10.67, 6.29, 2.95, 3.75, 4.31, 4.52],
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,2019,2020]];

function historicoSalarioMinimo(){

    var resposta = "<table>";
    resposta = resposta + "<tr> <td>Ano</td> <td>Salário</td> </tr>";

    for(let i=0; i<10;i++){
            resposta=resposta+"<tr> <td>"+ dadosSalario[1][i] +"</td> <td>"+dadosSalario[0][i]+"</td> </tr>"
        }

    
    resposta = resposta + "</table>";

    document.getElementById("resultado").innerHTML = resposta;
}

function historicoInflacao(){
    var resposta = "<table>";
    resposta = resposta + "<tr> <td>Ano</td> <td>Inflação (IPCA)</td> </tr>";

    for(let i=0; i<10;i++){
        resposta=resposta+"<tr> <td>"+ dadosInflacao[1][i] +"</td> <td>"+dadosInflacao[0][i]+"</td> </tr>"
    }
    
    resposta = resposta + "</table>";

    document.getElementById("resultado").innerHTML = resposta;
}

function calculaCrescimento(){

    var resposta = "<table>";
    resposta = resposta + "<tr> <td>Ano</td> <td>Salário</td> <td>Crescimento Salarial</td> <td>Inflação (IPCA)</td> </tr>"+`<tr> <td>${dadosSalario[1][0]}</td> <td>${dadosSalario[0][0]}</td> <td>---</td> <td>${dadosInflacao[0][0]}`;

    for(let i=1; i<10;i++){
        resposta=resposta+"<tr> <td>"+ dadosSalario[1][i] +"</td> <td>" + +dadosSalario[0][i]+"</td> <td>" +`${diferenca(i)} </td> <td>`+dadosInflacao[0][i].toFixed(2)+"</td> </tr>"
    }

    resposta = resposta + "</table>";

    document.getElementById("resultado").innerHTML = resposta;
}

function diferenca (e){
    e=Number(e)
    console.log(e) 
    let diferencaAtual=dadosSalario[0][e+1]-dadosSalario[0][e]
    console.log(dadosSalario[0][e+1]) 
    console.log(dadosSalario[0][e]) 
    console.log(diferencaAtual) 
    let crescimento =(diferencaAtual/dadosSalario[0][e])*100
    console.log(crescimento) 
    return crescimento.toFixed(2)
}