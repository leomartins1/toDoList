const createButton = document.getElementById('criar-tarefa');

function addTask() {
  const taskList = document.getElementById('lista-tarefas');
  const inputTask = document.getElementById('texto-tarefa');
  if (inputTask.value !== '') {
    const task = document.createElement('li');
    taskList.appendChild(task);
    task.innerText = inputTask.value;
    inputTask.value = '';
  }
}

createButton.addEventListener('click', addTask);

const taskList = document.getElementById('lista-tarefas');

function colorTask(fill) {
  const task = document.getElementsByTagName('li');
  task.className = 'selectTask';
  const select = task.className;
  const onlyOne = document.getElementsByClassName('selectTask');
  if (onlyOne.length === 0) {
    fill.target.classList.add(select);
  }
  if (onlyOne.length === 1) {
    onlyOne[0].classList.remove('selectTask');
    fill.target.classList.add(select);
  }
}

function completedTask(line) {
  const task = document.getElementsByTagName('li');
  task.className = 'completed';
  const complete = task.className;
  line.target.classList.toggle(complete);
}

taskList.addEventListener('click', colorTask);
taskList.addEventListener('dblclick', completedTask);

const clearButton = document.getElementById('apaga-tudo');

function vanish() {
  const list = document.getElementsByTagName('li').length;
  for (let index = list; index > 0; index -= 1) {
    taskList.removeChild(taskList.childNodes[0]);
  }
}
clearButton.addEventListener('click', vanish);

const completeButton = document.getElementById('remover-finalizados');

function vanishComplete() {
  const list = document.getElementsByClassName('completed');
  for (let index = list.length - 1; index >= 0; index -= 1) {
    list[index].parentNode.removeChild(list[index]);
  }
}
completeButton.addEventListener('click', vanishComplete);
