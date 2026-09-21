// 5. Create a to-do list application.
const tasks = ['Learn JavaScript', 'Practice DOM'];

function addTask(task) {
  tasks.push(task);
}

function removeTask(index) {
  tasks.splice(index, 1);
}

addTask('Complete assignment');
removeTask(0);
console.log(tasks);
