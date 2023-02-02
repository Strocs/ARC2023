import {
	mapContainer,
	map,
	mapGuide,
	mapLabels,
	displayLocations,
	resetButton,
	linkToMapOwners
} from '.'

let dx = 0
let dy = 0
let scale = 1
let panning = 0
let lastPoints = []
let prevPosition = { dx, dy }
const listenerCallback = []

function handleDisplayLocations(event, index) {
	if (prevPosition.dx !== dx && prevPosition.dy !== dy) {
		event.stopImmediatePropagation()
		return
	}
	displayLocations(index)
}

function showResetButton() {
	if (mapGuide.style.opacity === '1') {
		mapGuide.style.opacity = '0'
		mapGuide.addEventListener('transitionend', () => {
			mapGuide.hidden = true
		})
		resetButton.style.opacity = '1'
	}
}

function update() {
	map.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
}

function getXY(obj) {
	return {
		x: obj.pageX,
		y: obj.pageY
	}
}

function touchDistance(touch1, touch2) {
	const dx = Math.abs(touch2.x - touch1.x)
	const dy = Math.abs(touch2.y - touch1.y)
	return Math.hypot(dx, dy)
}

function getMidpoint(point1, point2) {
	return {
		x: (point1.x + point2.x) / 2,
		y: (point1.y + point2.y) / 2
	}
}

function getPoints(event) {
	return event.touches ? [...event.touches].map((touch) => getXY(touch)) : [getXY(event)]
}

function onWheel(event) {
	event.preventDefault()

	const { left, top } = map.getBoundingClientRect()
	let delta = event.deltaY

	if (event.deltaMode === 1) {
		delta *= 15
	}

	const scaleDiff = delta / 600 + 1

	if (scale * scaleDiff <= 0.76) return
	if (scale * scaleDiff >= 3.63) return

	scale *= scaleDiff
	dx -= (event.pageX - left) * (scaleDiff - 1)
	dy -= (event.pageY - top) * (scaleDiff - 1)
	update()
	showResetButton()

	prevPosition = { dx, dy }
}

function onPointerDown(event) {
	if (event.type === 'mousedown' && event.button !== 0) return
	event.preventDefault()

	lastPoints = getPoints(event)

	panning++

	listenerCallback.forEach((handler) => {
		mapLabels.forEach((icon) => {
			icon.removeEventListener('touchend', handler)
			icon.removeEventListener('mouseup', handler)
		})
	})
	listenerCallback.length = 0

	if (panning === 1) {
		document.addEventListener('mousemove', onPointerMove)
		document.addEventListener('mouseup', onPointerUp)
		document.addEventListener('touchmove', onPointerMove)
		document.addEventListener('touchend', onPointerUp)
	}
	showResetButton()
}

function onPointerMove(event) {
	event.preventDefault()
	const points = getPoints(event)
	const averagePoint = points.reduce(getMidpoint)
	const averageLastPoint = lastPoints.reduce(getMidpoint)
	const { left, top } = map.getBoundingClientRect()

	dx += averagePoint.x - averageLastPoint.x
	dy += averagePoint.y - averageLastPoint.y

	if (points[1]) {
		const scaleDiff =
			touchDistance(points[0], points[1]) / touchDistance(lastPoints[0], lastPoints[1])
		if (scale * scaleDiff < 0.76) {
			scale = 0.76
		} else if (scale * scaleDiff > 3.63) {
			scale = 3.63
		} else {
			scale *= scaleDiff
			dx -= (averagePoint.x - left) * (scaleDiff - 1)
			dy -= (averagePoint.y - top) * (scaleDiff - 1)
		}
	}
	update()
	lastPoints = points
}

function onPointerUp(event) {
	event.preventDefault()
	panning--
	lastPoints.pop()

	if (panning) {
		lastPoints = getPoints(event)
		return
	}

	mapLabels.forEach((icon, index) => {
		const pointerUpHandler = (event) => {
			handleDisplayLocations(event, index)
		}

		listenerCallback.push(pointerUpHandler)
		icon.addEventListener('touchend', pointerUpHandler)
		icon.addEventListener('mouseup', pointerUpHandler)
	})

	prevPosition = { dx, dy }

	document.removeEventListener('mousemove', onPointerMove)
	document.removeEventListener('mouseup', onPointerUp)
	document.removeEventListener('touchmove', onPointerMove)
	document.removeEventListener('touchend', onPointerUp)
}

mapContainer.addEventListener('mousedown', onPointerDown)
mapContainer.addEventListener('touchstart', onPointerDown)
mapContainer.addEventListener('wheel', onWheel)

resetButton.addEventListener('click', () => {
	dx = 0
	dy = 0
	scale = 1
	update()
})

mapLabels.forEach((icon, index) => {
	icon.addEventListener('pointerup', (event) => {
		handleDisplayLocations(event, index)
	})
})

linkToMapOwners.addEventListener('pointerup', () => {
	window.open('https://camipepe.com')
})
