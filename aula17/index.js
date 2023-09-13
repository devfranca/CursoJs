function saudacao(nome){
    return `Bom dia, ${nome}!`; // faz a funcao retornar algo, originalmente uma funcao criada nao retorna nada (undefined)
}


const variavel =  saudacao('yan');
console.log(variavel) 


            //se nenhum valor for enviado a engine assumira esse valor como padrao
function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

const resultado = soma(3,3);
console.log(resultado);

console.log(soma(2,3));
console.log(soma(2,4));
console.log(soma(2,5));

//estilo funcao normais
const raiz = function(numero){
    return numero ** 0.5;
};
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

// arrow function, caso a linha de codigo da funcao for curta ou mais simples é possivel fazer ela da maneira abaixo.
const divisao = n => n / 2;
console.log(divisao(10))
console.log(divisao(20))
console.log(divisao(30))

