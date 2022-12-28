const taskInput = document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')
const cleanButton = document.querySelector('#cleanToDo')
const body = document.querySelector('body')

const tasks = []
let finalTasks = tasks.split(', ')

body.addEventListener('DOMContentLoaded', () => {
	localStorage.getItem('tasks', finalTasks)
	tasks.className = 'task'
	tasks.innerText = `${taskInput.value}`
	taskList.append(tasks)
})

const newTask = () => {
	const task = document.createElement('li')
	
	task.className = 'task'
	task.innerText = `${taskInput.value}`
	taskList.appendChild(task)

	localStorage.setItem('tasks', finalTasks)

	tasks.push(taskInput.value)
}

taskInput.addEventListener('keypress', (e) => {
	if(e.key === 'Enter'){
		newTask()
	}
})

cleanButton.addEventListener('click', () => {
	taskList.innerHTML = ''
	taskInput.value = ''
})