
// try {
//     console.log(nome);
// }catch(erro){
//     console.log('a variavel nome nao existe.')
// }

function soma(x,y){
    if(typeof x !== 'number' || typeof  y !== 'number'){
        throw new ReferenceError('x e y precisam ser numeros');
    };

return x+y;
}
try{
console.log(soma(1,2));
console.log(soma(1,'2'));
}catch(error){
    // console.log(error);
    console.log('deu erro no bagulho irmao.')
}