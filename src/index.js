
const taskInput = document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')
const cleanButton = document.querySelector('#cleanToDo')

const tasks = []

localStorage.tasks ? undefined : localStorage.setItem('tasks', tasks)

const savedTasks = localStorage.tasks
const finalTask = savedTasks.split(',')

const newTask = () => {
	const task = document.createElement('li')
	
	task.className = 'task'
	task.innerText = `${taskInput.value}`
	
	tasks.push(taskInput.value)

	localStorage.setItem('tasks', tasks)
	taskList.appendChild(task)
}

const clearTasks = () => {
	taskList.innerHTML = ''
	taskInput.value = ''

	localStorage.setItem('tasks', tasks)
}

const reloadPageUpdate = () => {
	finalTask.forEach((x) => {
		const task = document.createElement('li')
		
		task.innerText = x
		task.className = 'task'
		taskList.appendChild(task)
		
	})
}

taskInput.addEventListener('keypress', (e) => {
	if(e.key === 'Enter'){
		newTask()
		taskInput.value = ''
	}
})

cleanButton.addEventListener('click', () => {
	clearTasks()
})

window.addEventListener('load', () => {
	if(finalTask != false){
		reloadPageUpdate()
	}
})