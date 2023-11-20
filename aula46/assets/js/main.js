const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;
iniciar.addEventListener('click', function () {
    clearInterval(timer);
    iniciaTimer();
    relogio.style.color = 'black'
})

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = 'red'
})

zerar.addEventListener('click', function (event) {
    
    clearInterval(timer)
    segundos=0;
    setTimeout(
        relogio.innerHTML = '00:00:00'
    )
    relogio.style.color = 'red'
})

const horaInicial = (segundos) => {
    let hora = new Date(segundos * 1000)
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });

}

const iniciaTimer = () => {
   timer =  setInterval(function () {
        segundos++;
        relogio.innerHTML = horaInicial(segundos);
    }, 1000)
}




