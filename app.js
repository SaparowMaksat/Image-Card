const sliders = document.querySelectorAll('.slide')

const clearActiveClasses = () => {
	sliders.forEach(slider => {
		slider.classList.remove('active')
	})
}

for (const slider of sliders) {
	slider.addEventListener('click', () => {
		clearActiveClasses()
		slider.classList.add('active')
	})
}
