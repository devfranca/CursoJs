//... rest operator ( pega o resto )
// ... spread ( naos sei para que serve mas é o mesmo operador num contexto diferente)


const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);



 //              0          1           2
//            0  1  2    0  1  2    0   1  2
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, lista2, lista3] =  num;

console.log(lista3[2]);
