let colecao_signos = [
{"Name": "Aquario", "Datalnicio": "01-20", "Datafim":"02-18"},
{"Nome": "Peixes", "DataInicio": "02-19", "DataFim":"03-20"},
{"Name": "Aries", "DataInicio": "03-21", "DataFim":"04-19"},
{"Nome": "Touro", "DataInicio": "04-20", "DataFim":"05-20"},
{"Nome": "Gêmeos", "DataInicio": "05-21", "DataFim":"06-21"},
{"Nome": "Cancer", "DataInicio": "06-22", "DataFim":"07-23"},
{"Nome": "Leão", "Datalnicio": "07-24", "DataFim":"08-22"},
{"Name": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
{"Nome": "Libra", "DataInicio": "09-23", "DataFim":"10-22"},
{"Nome": "Escorpião", "DataInicio": "10-23", "DataFim":"11-21"},
{"Name": "Sagitário", "DataInicio": "11-22", "DataFim":"12-21"},
{"Nome": "Capricornio", "DataInicio": "12-22", "DataFim":"01-19"}]

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao)=> {
    if( tipo_comparacao== "and"){
        return (data>= data_inicio&& data<=data_fim)
    } else if (tipo_comparacao == "or"){
        return (data >= data_inicio || data <= data_fim)
    }
}

const retorno_signo=(signos, data)=>{
    let ano = data.getFullYear();

    for(const signo of signos){
        let data_inicio_signo = new Date (ano+"-"+signo["DataInicio"]+" 00:00:00");
        let data_fim_signo = new Date(ano+"-"+signo["DataFim"]+" 23:59:59");
        let tipo_comparacao = signo["DataInicio"]=="12-22"? "or":"and";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"]
        }
    }
}

let data_ap = new Date("2020-10-02 00:00:00");
const nome_signo = retorno_signo(colecao_signos, data_ap);

console.log("O signo de hoje é: "+nome_signo)