function mostrarHora() {
    const data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}
                        //funcao anonima
const timer= setInterval(function segundos() {
    console.log(mostrarHora());
}, 1000); // valor tera que ser passado em ms (milisegundo), neste caso 1000 = 1seg.


// uma funcao para parar a funcao acima, definindo o limite de tempo que ela seja executada
setTimeout(function paraTimer(){
    clearInterval(timer);
}, 5000);
// funcao para escrever algo no console assim que bater os segundos definidos
setTimeout(function T(){
    console.log('Fim do Tempo!')
},6000)