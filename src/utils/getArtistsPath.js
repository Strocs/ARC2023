import { ARC_2023 } from '../data/ARC_2023'

const { locations } = ARC_2023

export function getArtistsPath() {
	return locations.flatMap(location =>
		location.artists.map(artist => {
			return {
				path: location.id,
				location: location.title,
				backgroundColor: location.backgroundColor,
				textColor: location.textColor,
				artistInfo: artist,
			}
		})
	)
}
