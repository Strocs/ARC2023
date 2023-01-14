import { ARC_2023 } from '../data/ARC_2023'
const { locations } = ARC_2023
export function getArtistById(query) {
	return locations.map(location => location.artists.find(artist => artist.id === query))[0]
}
