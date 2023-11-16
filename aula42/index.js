// escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(numeber).
// retorne true se a imagem estiver no modo paisagem.

// arrow function, como a funcao so tem uma linha nao precisa de chaves nem de return.
const ePaisagem = (largura, altura) => largura >= altura ? true : false;

console.log(ePaisagem(1920, 1280));
