let varA = 'A'; // b
let varB = 'B'; // c
let varC = 'C'; //a

varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA,varB,varC);

//outro metodo

[varA, varB, varC] = [varB,varC,varA];
console.log(varA,varB,varC);


//nao consegui resolver essa porra. 30/08/23