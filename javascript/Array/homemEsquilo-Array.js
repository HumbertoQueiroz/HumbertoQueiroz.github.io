//O curioso caso do homem esquilo. Ele se transforma em esquilo e precisa saber o que desencadeia essa transformação.
var semana = [];
function ocorrenciasDoDia(eventos, transformacao) {
    semana.push({
        eventos: eventos,
        transformacao: transformacao
    });
}
ocorrenciasDoDia(['trabalho', 'pizza', 'banho', 'televisão'], false);
ocorrenciasDoDia(['trabalho', 'pizza', 'banho', 'televisão'], false);
ocorrenciasDoDia(["weekend", "cycling", "break", "peanuts", "beer"], true);
/*
var semana = [];
var dia1 = {
    transformacao: false,
    eventos: ['trabalho',  'pizza', 'banho', 'televisão']  
};
semana.push(
    {eventos:eventos,
    transformacao: transformacao
 })
 console.log(dia1);
 console.log(dia1.transformacao);
 console.log(dia1.eventos);
 */
 console.log(semana);