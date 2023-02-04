import { ARC_2023 } from '../data/ARC_2023'

const { locations } = ARC_2023

export function getEventsPath() {
	return locations.flatMap((location) =>
		location.schedule.flatMap((schedule) =>
			schedule.events.map((event) => {
				return {
					location: location.id,
					event: event.id,
					eventName: event.name
				}
			})
		)
	)
}
