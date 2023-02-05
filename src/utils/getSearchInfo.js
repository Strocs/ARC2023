import { ARC_2023 } from '../data/ARC_2023'

const { locations } = ARC_2023

export function getSearchInfo() {
	const locationsInfo = locations.map((location) => {
		return {
			path: `/${location.id}`,
			name: location.title
		}
	})
	const eventInfo = locations.flatMap((location) =>
		location.schedule.flatMap((schedule) =>
			schedule.events.map((event) => {
				return {
					path: `/${location.id}/${event.id}`,
					name: event.name
				}
			})
		)
	)

	return [...eventInfo, ...locationsInfo]
}
