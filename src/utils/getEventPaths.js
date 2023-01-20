import { ARC_2023 } from '../data/ARC_2023'

const { locations } = ARC_2023

export function getEventsPath() {
	return locations.flatMap((location) => {
		const baseData = {
			location: location.id
		}
		if (location.schedule.byTime.length !== 0) {
			return location.schedule.byTime.flatMap((schedule) => {
				return schedule.events.map((event) => {
					return {
						...baseData,
						event: event.id
					}
				})
			})
		} else if (location.schedule.byDays.length !== 0) {
			return location.schedule.byDays.flatMap((schedule) => {
				return schedule.events.map((event) => {
					return {
						...baseData,
						event: event.id
					}
				})
			})
		}
	})
}
