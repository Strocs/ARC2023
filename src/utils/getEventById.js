import { ARC_2023 } from '../data/ARC_2023'
const { locations } = ARC_2023
export function getEventById(query) {
	return locations
		.flatMap((location) =>
			location.schedule.map((schedule) => schedule.events.find((event) => event.id === query))
		)
		.filter((res) => !!res)[0]
}
