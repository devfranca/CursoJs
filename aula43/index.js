//escreve uma funcao que recebe um numero e retorne o seguinte:
// numero é divisivel por 3 = fizz
// numero é divisivl por 5 = buzz
// numero é divisivel 3 e 5 = fizbuzz
// numero NAO é divisivel por 3 e 5 = retorna o propio o numero
// chegar se o numero é realmente um numero
// usa a funcao com numeros de 0 a 100


function numero(num)  {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0)  return 'FizzBuzz';
    if (num % 3 === 0)  return 'Fizz'; 
    if (num % 5 === 0)  return 'Buzz'; 
    return num;
};

for ( let i = 0; i <= 100; i++){
    console.log(i,numero(i))
}