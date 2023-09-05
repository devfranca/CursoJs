

let num1= 0.7;
let num2 = 0.1;
num1 += num2;// 0.8
num1 += num2;// 0.9
num1 += num2;// 1.0
num1 += num2;// 1.1
num1 += num2;// 1.2
num1 += num2;// 1.3
num1 += num2;// 1.4
num1 += num2;// 1.5
num1 += num2;// 1.6
num1 += num2;// 1.7
num1 += num2;// 1.8
num1 += num2;// 1.9
num1 += num2;// 2.0


num1 = parseFloat(num1.toFixed(2)); //usar number ou parseFloat para resvolver o problema de nao dar o valor correto


console.log(num1);




console.log(num1.toString() + num2); //altera o valor de num1 para string apenas nessa linha, neste caso ira mostrar a concatenação de 1 + 2.5 = 12.5, nao a conta correta = 3.5

num1 = num1.toString()// aqui altera permananete o valor de num1

// num1= 1500

console.log(num1.toString(2)) // mostra o valor da varivael em base 2 (binaria)

console.log(num1.toFixed(2)) // escolhe quantas casas decimais quer exibir dps do ponto em um numero grande


console.log(Number.isInteger(num2)); //retorna no console se o numero é inteiro ou nao ( retorna como true or false)?
let temp = num1 * `ola`
console.log(Number.isNaN(temp));// pergunta a funcao se o numero ou a conta é um numero valido ou nao ( retorna verdadeiro caso nao seja uma conta ou numero valido e falso caso for, Nan = NOT A NUMBER.)
