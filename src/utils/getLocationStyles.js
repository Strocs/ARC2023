export function getLocationStyles(color = '') {
	return {
		textColor: `text-${color}`,
		backgroundColor: `bg-${color}`,
		borderColor: `border-${color}`,
		fillColor: `fill-${color}`,
		hoverTextColor: `hover:text-${color}`,
		hoverBackgroundColor: `hover:bg-${color}`
	}
}
