const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// continue continua para a proxima iteráção.
// break para todo o laço assim que o progama encontra a palavra.

for (let valor of numeros) {

    if (valor === 2) {
        console.log('Pulei o numero 2');
        continue;
    }
    if (valor === 7){
        //   console.log(valor)
        break;
    }
    console.log(valor)
}