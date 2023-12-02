function funcao() {
    let total = 0;

    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 


//atribuindo valores padrao caso nao seja enviado nos argumentos.
function soma(a, b = 2, c = 4) {
    console.log(a + b + c)
}

soma(10,undefined,10); // uma forma de enviar o valor de C sem colocar o de B é definindo o argumento b como undefined


function teste([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

teste(['Yan', 'Gabriel', 20]);

function conta (operador,acumulador,numeros){
    for(let num of numeros){
        if(operador ==='+') acumulador += num;
        if(operador ==='-') acumulador -= num;
        if(operador ==='/') acumulador /= num;
        if(operador ==='*') acumulador *= num;
    }
    console.log(acumulador);
}

conta('/',0,[30,100,200]);