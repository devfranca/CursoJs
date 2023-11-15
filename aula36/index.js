// for in -> lê os indices ou chaves do objeto.


const frutas = ['Uva', 'Maçã', 'Pera'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};

for( let index in frutas){
    console.log(frutas[index])
}


const pessoas = {
    nome: 'Yan',
    sobrenome: 'França',
    idade: 20
};

for (let chave in pessoas) {
    console.log(pessoas[chave])
}