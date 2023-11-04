
    const data = new Date();
    const weekDay = data.getDay();
    const monthDay = data.getMonth()+1;
    const year = data.getFullYear();
    let hours = data.getHours();
    const minutes = data.getMinutes();
    console.log(weekDay,monthDay,year,hours,minutes);

    function foundWeekDay(weekDay){
        let weekDayText;
        switch(weekDay){
            case 0:
                weekDayText = 'Domingo'
                break;
            case 1:
                weekDayText = 'Segunda-feira'
                break;
            case 2:
                weekDayText = 'Terça-feira'
                break;
            case 3:
                weekDayText = 'Quarta-feira'
                break;
            case 4:
                weekDayText = 'Quinta-feira'
                break;
            case 5:
                weekDayText = 'Sexta-feira'
                break;
            case 6:
                weekDayText = 'Sabado'
                break;
            default :
                weekDayText = 'Dia de Semana Invalido'
        }
        return weekDayText;
    }
    function foundMonth(monthDay){

        let nomeDoMes = '';
        
        switch(monthDay){
            case 1:
                nomeDoMes = 'Janeiro'
                break;
            case 2:
                nomeDoMes = 'Fevereiro'
                break;
            case 3:
                nomeDoMes = 'Março'
                break;
            case 4:
                nomeDoMes = 'Abril'
                break;
            case 5:
                nomeDoMes = 'Maio'
                break;
            case 6:
                nomeDoMes = 'Junho'
                break;
            case 7:
                nomeDoMes = 'Julho'
                break;
            case 8:
                nomeDoMes = 'Agosto'
                break;
            case 9:
                nomeDoMes = 'Setembro'
                break;
            case 10:
                nomeDoMes = 'Outubro'
                break;
            case 11:
                nomeDoMes = 'Novembro'
                break;
            case 12:
                nomeDoMes = 'Dezembro'
                break;
            default :
                nomeDoMes = 'Mes Invalido'
        }
        return nomeDoMes;
    }
    const weekDayText = foundWeekDay(weekDay);
    const nomeDoMes =  foundMonth(monthDay);

    if(hours<10){
     hours = `0${hours}`
    };

    if(minutes<10){
     minutes = `0${minutes}`
    };
const textoConteudo = document.querySelector('.texto')
textoConteudo.innerHTML +=`<p>${weekDayText}, ${weekDay} de ${nomeDoMes} de ${year} Exatamente ${hours}:${minutes}</p>`


