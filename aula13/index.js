//               01234567
let umaString = "O rato roeu a ropa do rei de roma";

// console.log(umaString[4]); // mostra a string relacionada ao indice da variavel

//concatenaçoes de formas diferentes
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

console.log(umaString.charAt(2)); // Retorna o valor da posicao
console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.concat(' ', 'ei', ' ', 'sister')); // raramente usado
console.log(umaString.indexOf('e', 0)); // Retorna o índice
console.log(umaString.lastIndexOf('e', umaString.length)); // Retorna o índice
console.log(umaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)
console.log(umaString.search(/[a-z]+/g)); // Retorna o índice da primeira ocorrência
console.log(umaString.replace(/e/g, '3')); // substituicao de strings
console.log(umaString.slice(2, 7));
console.log(umaString.slice(-3, -1));
console.log(umaString.split(' ', 2));
console.log(umaString.toUpperCase());//faz a string ficar MAIUSCULA
console.log(umaString.toLowerCase());//faz a string ficar minuscula

