const numero = 10;

if(numero >= 0 && numero <= 5 ){
    console.log('O numero esta entre 0 e 5')
}else if(numero >= 6 && numero <=8){
    console.log('O numero esta entre 6 e 8')
}
    // o primeiro elseif sera executado assim, ignorando todos os outros blocos sendo eles verdadeiros ou nao, EXEMPLO:
// else if(1===1){
//     console.log("LITERAL") //verdadeiro
// }
else if(numero >= 9 && numero <=11){
    console.log('O numero esta entre 9 e 11') // verdadeiro
} else{
    console.log('O numero NAO esta entre 0 e 11')
}
console.log('  ... Aqui vai o restante do codigo')