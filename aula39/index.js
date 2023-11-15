//  const nome = 'Yan Gabriel';
// let index = 0;

// while (index < nome.length){
//     console.log(nome[index]);

//     index++;
// };

function random (minimo, maximo){
    const r = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min,max);

while ( rand !== 10){
   rand = random(min,max);
   console.log(rand)
}
console.log('###########')
do {
    rand = random(min,max);
    console.log(rand);
 }
while (rand !== 10);