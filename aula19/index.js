/*
Dados Primitivos - Strings, number, booleans, undefined, null (bidint, sybol) - Dados primitivos sao imutaveis  e sao copiados
*/

// let a = 'A';
// let b = a; //copia

// console.log(a,b);

// a = 'Outra coisa'
// console.log(a,b)


// Dados Referenciais  (Mutaveis)- array,object e fuction - valores passados por referencia

// 

const a ={
    nome:'Yan',
    sobrenome: 'França'
}

const b = a
b.nome = 'Joao'
console.log(b);
console.log(a);