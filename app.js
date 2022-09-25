const activeSliders = (active = 0) => {
	const sliders = document.querySelectorAll('.slide')

	sliders[active].classList.add('active')

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
}

activeSliders()
