import { ARC_2023 } from '../data/ARC_2023'

const { locations } = ARC_2023

export function getArtistsByLocation(query) {
	return locations
		.find(location => location.id === query)
		.artists.map(artist => {
			return { name: artist.name, artistId: artist.id }
		})
}
