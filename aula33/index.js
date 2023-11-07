const pessoa =  {
    nome: 'Yan',
    sobrenome: 'França',
    idade : 20,
    endereco:{
        rua: 'Rua duarte',
        numero: 320
    }
}
// atribuição via desestruturação
const {nome,sobrenome,idade} = pessoa;
const{ endereco: { rua, numero}} = pessoa;
console.log(rua,numero);