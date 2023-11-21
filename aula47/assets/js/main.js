const inputTexto = document.querySelector('.texto-input');
const addTarefa = document.querySelector('.add-tarefa');
const listaTarefa = document.querySelector('.lista-tarefa');

const criaTarefa = (valor) => {
    const criaLista = document.createElement('li')
    criaLista.innerHTML = valor;
    listaTarefa.appendChild(criaLista);
    limpaInput();

    return criaLista;

};

addTarefa.addEventListener('click', function () {
    if (inputTexto.value == false) return;
    let valorTexto = inputTexto.value;
    const lista = criaTarefa(valorTexto);
    botaoApagar(lista);

});

inputTexto.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (inputTexto.value == false) return;
        let valorTexto = inputTexto.value;
        const lista = criaTarefa(valorTexto);
        botaoApagar(lista);
    };


});

const limpaInput = () => {
    inputTexto.value = '';
    inputTexto.focus();
};

const botaoApagar = (tarefa) => {
    const botao = document.createElement('button');
    botao.innerText = 'Apagar';
    tarefa.innerHTML += '   '
    tarefa.appendChild(botao);
    botao.classList.add('apagar');

};

document.addEventListener('click',function(e){
    const elementos = e.target;
    if (elementos.classList.contains('apagar')){
        elementos.parentElement.remove();
    }
})