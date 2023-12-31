const inputTexto = document.querySelector('.texto-input');
const addTarefa = document.querySelector('.add-tarefa');
const listaTarefa = document.querySelector('.lista-tarefa');

const criaTarefa = (valor) => {
    const criaLista = document.createElement('li');
    criaLista.innerHTML = valor;
    listaTarefa.appendChild(criaLista);
    botaoApagar(criaLista); // Adicione esta linha para anexar o botão de exclusão
    limpaInput();
    salvarTarefas();
    return criaLista;
};

addTarefa.addEventListener('click', function () {
    if (inputTexto.value == false) return;
    let valorTexto = inputTexto.value;
    const lista = criaTarefa(valorTexto);
});

inputTexto.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (inputTexto.value == false) return;
        let valorTexto = inputTexto.value;
        const lista = criaTarefa(valorTexto);
    }
});

const limpaInput = () => {
    inputTexto.value = '';
    inputTexto.focus();
};

const botaoApagar = (tarefa) => {
    const botao = document.createElement('button');
    botao.innerText = 'Apagar';
    tarefa.innerHTML += '   ';
    tarefa.appendChild(botao);
    botao.classList.add('apagar');

    botao.addEventListener('click', function () {
        tarefa.remove();
        salvarTarefas();
    });
};

document.addEventListener('click', function (e) {
    const elementos = e.target;
    if (elementos.classList.contains('apagar')) {
        elementos.parentElement.remove();
        salvarTarefas();
    }
});

const salvarTarefas = () => {
    const liTarefas = listaTarefa.querySelectorAll('li');
    const taskList = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        taskList.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(taskList);
    localStorage.setItem('tarefas', tarefasJSON);
};

const savesTasks = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefa = JSON.parse(tarefas);

    for (let tarefaTexto of listaDeTarefa) {
        const lista = criaTarefa(tarefaTexto);
    }
};

savesTasks();
