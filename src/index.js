const taskInput = document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')
const cleanButton = document.querySelector('#cleanToDo')

const newTask = () => {
	const task = document.createElement('li')
	task.className = 'task'
	task.innerText = `${taskInput.value}`
	taskInput.value = ''

	taskList.appendChild(task)
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