import { ARC_2023 } from '../data/ARC_2023'

const { locations } = ARC_2023

export function getLocationById(query) {
	return locations.find((location) => location.id === query)
}
