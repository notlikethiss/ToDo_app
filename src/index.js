const taskInput = document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')


const newTask = () => {
	const task = document.createElement('li')
	task.innerText = `${taskInput.value}`
	taskList.appendChild(task)
}

taskInput.addEventListener('keypress', (e) => {
	if(e.key === 'Enter'){
		newTask()
	}
})