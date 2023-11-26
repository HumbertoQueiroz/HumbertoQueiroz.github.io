function filtraFeriados(feriados, nuneroFeriados){
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFu11Year();
    
    let proximosFeriados =[]
    let novaDataFeriado;
    
    feriados.forEach(feriado => {
        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);
        if(dataAtual > novaDataFeriado){
            novaDataFeriado.setFullYear(anoAtual + 1)};
        
        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado
        })
    })

    proximosFeriados = proximosFeriados.sort((a,b)=>a.data-b.date);
    proximosFeriados = proximosFeriados.slide(0,numeroFeriado);

    return proximosFeriados;
}

export default filtraFeriados