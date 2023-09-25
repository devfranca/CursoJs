
// IF pode ser utilizado sozinho
// ELSE sempre dependera de um IF para ser utilizado
// pode se ter varios ELSE IF na checagem
// so posso ter um else na checagem


const hora = 100;

if( hora >= 0 && hora <=11){
    console.log('bom dia')
}else if(hora>=12 && hora <= 17){
    console.log('boa tarde')
}else if ( hora>=18 && hora <=24){
    console.log('boa noite')
}else{
    console.log('horario invalido')
}