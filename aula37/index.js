const nome = 'Yan Gabriel';

for ( let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

for ( let i in nome){
    console.log(nome[i])
};

for ( let valor of nome){
    console.log(valor)
}

// resumo :

// for classico - Geralmente com iteráveis (arrays, strings)
// for in - Retorna o indice ou chave (arrays, strings ou objetos)
// for of - Retorna o valor em si