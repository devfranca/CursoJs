// declarao de funcao (function hosting)

function sayHi() {
    console.log('Hi!');
};

sayHi();

// Firt-class objects (objeto de primeira classe)
//function expression

const dado = function () {
    console.log('im a data')
}


function executeFunction(funcao) {
    console.log('I will execute your function below')
    funcao();
}

executeFunction(dado);

//Arrow function 

const arrowFuntion = () => {
    console.log('I am an arrow function')
}
arrowFuntion();

//dentro de um objeto

const objeto = {
    talking(){
        console.log('hi iam talking')
    }
}

objeto.talking();