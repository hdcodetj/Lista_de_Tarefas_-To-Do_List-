const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');


function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === '') {
        alert('Digite uma tarefa antes de adicionar!');
        return;
    }
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = textoTarefa;

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = '';
}
btnAdicionar.addEventListener('click', adicionarTarefa);