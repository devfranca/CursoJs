
const tresHoras = 60 * 60 * 3 *  1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // marco 0 ou epoca unix

const data = new Date(2023,10,14); // ano,mes,dia,hora,minuto, segundos, milisegundos
console.log(data.toString());

const data = new Date('2023-11-03 14:15:24');

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mes comeca do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - domingo, 6 - sabado

console.log(data.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
    const dia = zeroAEsquerda( data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1;
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)