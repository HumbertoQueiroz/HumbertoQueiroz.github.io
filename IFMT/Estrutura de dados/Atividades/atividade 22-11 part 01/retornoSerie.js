import retornaDiaSemana from "./diaSemana.js";

let ListaSerie = ['Smallville',' WandaVision ' ,' Loki', ' Arrow' , 'Flash', 'DC Legends', 'Gothan'];

function retornaNomeSerie(dia){
    return ListaSerie[dia];
}

function retornoSerieDia(){
    let diaSemana = retornaDiaSemana();
    let serie = retornaNomeSerie(diaSemana) 
    return serie;
}
export default retornoSerieDia;