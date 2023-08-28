const nome = 'Yan Gabriel';
const sobrenome = 'França';
const idade = 20;
const peso = 67;
const alturaEmM = 1.90;
const anoAtual = 2023;

anoNascimento = anoAtual - idade
let imc;

imc = peso / (alturaEmM*2);

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg`);

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);