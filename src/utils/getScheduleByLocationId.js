import { getLocationById } from './getLocationById'

export function getScheduleByLocationId(query) {
	const location = getLocationById(query)
	if (location.schedule.byTime.length !== 0) {
		return location.schedule.byTime
	} else if (location.schedule.byDays.length !== 0) {
		return location.schedule.byDays
	}
}