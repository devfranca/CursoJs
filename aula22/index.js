/*
OPERADORES LOGICOS

&& = AND - E -> TODAS PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
!  = NOT - NEGACAO - INVERTE O RETURN ORIGINAL, OU SEJA SE FOR FALSE, RETORNA TRUE, E VICE VERSA.
|| =  OR - OU -> SE UMA FOR VERDADEIRA RETORNA COMO TRUE, CASO AS DUAS SEJAM FALSAS RETORNA FALSA.
 */

const expressaoAnd = true && true && true && true;
const expressaoOr = true || false || false || false;

// console.log(expressaoOr);




//EXEMPLO DE APLICAÇÃO

const usuario = 'Yan'; // valor de um form
const senha = '123456'; // valor de um form

const vaiLogar = usuario === 'Yan' && senha === '123456';

console.log(vaiLogar);