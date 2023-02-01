export function getStylesByColor(color = '') {
	return {
		backgroundColor: `bg-${color}`,
		fillColor: `fill-${color}`,
		borderColor: `border-${color}`,
		textColor: `text-${color}`,
		hoverTextColor: `hover:text-${color}`
	}
}
