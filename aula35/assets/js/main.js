const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' },
];
const texto = document.querySelector('.container');

const div = document.createElement('div')

              //0
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criarTag = document.createElement(tag);
    criarTag.innerHTML = texto;
    div.appendChild(criarTag)
};


texto.appendChild(div)