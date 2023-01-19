import { getLocationById } from './getLocationById'

export function getEventsByLocationId(query) {
	const location = getLocationById(query)
	if (location.schedule.byTime.length !== 0) {
		return location.schedule.byTime.events
	} else if (location.schedule.byDays.length !== 0) {
		return location.schedule.byDays.flatMap(day => day.events)
	}
}
