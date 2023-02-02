import { getStylesByColor } from '../utils'
import {
	footer,
	header,
	logo,
	downloadScheduleBtn,
	socialMediaLinks,
	locationsInfo,
	resetButton,
	spanResetButton
} from './'

const colors = [
	getStylesByColor('pale-purple'),
	getStylesByColor('orange'),
	getStylesByColor('black-pink'),
	getStylesByColor('purple'),
	getStylesByColor('pink'),
	getStylesByColor('yellow'),
	getStylesByColor('blue'),
	getStylesByColor('red'),
	getStylesByColor('pale-blue')
]

export function changeElementStyles(index, change) {
	const changeBackgroundElements = [header, footer, downloadScheduleBtn, resetButton]
	if (change) {
		changeBackgroundElements.forEach((element) => {
			element.classList.add(colors[index].backgroundColor)
		})
		spanResetButton.classList.add(colors[index].borderColor, colors[index].textColor)
		spanResetButton.classList.remove('border-main', 'text-main')
		logo.classList.add(colors[index].fillColor)
		logo.classList.remove('fill-main')
		socialMediaLinks.forEach((link) => {
			link.classList.remove('hover:text-main')
			link.classList.add(colors[index].hoverTextColor)
		})
		if (index === 5) {
			footer.classList.add('text-neutral-700')
			header.classList.add('text-neutral-700')
			downloadScheduleBtn.classList.add('text-neutral-700')
			downloadScheduleBtn.classList.add('border-neutral-700')
			downloadScheduleBtn.classList.add('border-neutral-700')
			downloadScheduleBtn.parentElement.classList.add('bg-neutral-700')
		}
	} else {
		changeBackgroundElements.forEach((element) => {
			element.classList.remove(colors[index].backgroundColor)
		})
		spanResetButton.classList.remove(colors[index].borderColor, colors[index].textColor)
		spanResetButton.classList.add('border-main', 'text-main')
		logo.classList.remove(colors[index].fillColor)
		logo.classList.add('fill-main')
		socialMediaLinks.forEach((link) => {
			link.classList.remove(colors[index].hoverTextColor)
			link.classList.add('hover:text-main')
		})
		if (index === 5) {
			footer.classList.remove('text-neutral-700')
			header.classList.remove('text-neutral-700')
			downloadScheduleBtn.classList.remove('text-neutral-700')
			downloadScheduleBtn.classList.remove('border-neutral-700')
			downloadScheduleBtn.parentElement.classList.remove('bg-neutral-700')
		}
	}
}

export function showLocationsInfo(element, show) {
	if (show) {
		element.style.right = '0'
		element.style.zIndex = '20'
		element.style.opacity = '1'
	} else {
		element.style.zIndex = '10'
		element.style.right = '-448px'
	}
}

export function displayLocations(i) {
	locationsInfo.forEach((location, index) => {
		showLocationsInfo(location, false)
		changeElementStyles(index, false)
	})
	showLocationsInfo(locationsInfo[i], true)
	changeElementStyles(i, true)
}

locationsInfo.forEach((location, index) => {
	const closeLocationInfoButton = location.querySelector('button')
	location.addEventListener(
		'transitionend',
		(e) => {
			if (location !== e.target) return
			if (location.style.right === '-448px') {
				location.style.opacity = '0'
				closeLocationInfoButton.removeEventListener('click', () => {
					showLocationsInfo(location, false)
					changeElementStyles(index, false)
				})
			}
		},
		false
	)
	closeLocationInfoButton.addEventListener('click', () => {
		showLocationsInfo(location, false)
		changeElementStyles(index, false)
	})
})
