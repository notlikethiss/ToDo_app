const settingsButton = document.querySelector('.settingsButton')
const settings = document.querySelector('.settings')

settingsButton.addEventListener('click', () => {
	settings.classList.toggle('hidden')
})