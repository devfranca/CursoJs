 // operador ternario  ( ? :)
 
 // (condicao) ? 'Valor para Verdadeiro' : 'Valor para falso';
 const pontuacaoUsuario = 999;
//                    nesta expressao curta o ? substitui o if eo : o else
 const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';


console.log( nivelUsuario,corPadrao);




//  que é a mesma coisa que a expressao abaixo

//  if (pontuacaoUsuario >=  1000){
//     console.log('Usuario VIP')
//  } else {
//     console.log('Usuario Normal')
//  }