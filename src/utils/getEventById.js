import { ARC_2023 } from '../data/ARC_2023'
const { locations } = ARC_2023
export function getEventById(query) {
	return locations
		.flatMap(location => {
			if (location.schedule.byTime.length !== 0) {
				return location.schedule.byTime.map(time => {
					time.events.find(event => event.id === query)
				})
			} else if (location.schedule.byDays.length !== 0) {
				return location.schedule.byDays.map(day =>
					day.events.find(event => {
						return event.id === query
					})
				)
			}
		})
		.filter(item => !!item)[0]
}
