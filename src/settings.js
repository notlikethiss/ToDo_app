const settingsButton = document.querySelector('.settingsButton')
const settingsBox = document.querySelector('.settings')

let settings = false

settingsButton.addEventListener('click', () => {
	settings = true
})

if (settings) {
	settings.classList.toggle('visible')
} else {
	settings.classList.toggle('hidden')
}