// OBJETOS


const nome01 ='Lionel';
const sobrenome01 = 'Messi';
const idade01 = 37;
const nome02 ='Kylian';
const sobrenome02 = 'Mbappe';
const idade02 = 24;



const pessoa01 =  {
    nome: 'Yan',
    sobrenome: 'França',
    idade:20
};

console.log(pessoa01.nome);
console.log(pessoa01.sobrenomenome);
console.log(pessoa01.idade);


function criaPessoa(nome,sobrenome,idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}


const pessoa01 = criaPessoa('yan', 'franca',20);
const pessoa02 = criaPessoa('joao', 'inacio',25);
const pessoa03 = criaPessoa('maria', 'senna',35);
const pessoa04 = criaPessoa('augusto', 'almeida',15);
const pessoa05 = criaPessoa('bernardo', 'caravalho',11);

console.log(pessoa01.nome, pessoa02.nome);


const pessoa1 = {
    nome: 'Yan',
    sobrenome: 'França',
    idade:20,

    fala(){ 
        console.log(`${this.nome} ${this.sobrenome} esta falando oi!`) // this nessse caso é a pessoa1
        console.log(`Minha idade atual é ${pessoa1.idade}`)
    },

    incrementaIdade(){
        this.idade++; // incrementando a idade da pessoa1

    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();