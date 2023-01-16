export const TEATRO = {
	id: 'teatro-municipal',
	title: 'Teatro Municipal',
	backgroundColor: 'bg-purple',
	textColor: 'group-hover:text-purple',
	description: '',
	locationImage: {
		url: '',
		position: { top: '28%', left: '68%' },
	},
	artists: [
		{
			id: 'los-pasos-de-selena',
			name: 'Los Pasos de Selena',
			image: { url: '/municipal/los-pasos-de-selena.jpg', position: { marginTop: '3rem' }, alt: 'Imagen de la presentación de la obra teatral Los Pasos de Selena' },
			links: [],
			description:
				'Selena es una adolescente muy curiosa que desea encontrar respuestas a todas sus interrogantes, pero entre sus estudios y quehaceres domésticos, ve limitada esta posibilidad.\nDecidida a explorar el universo que la rodea, crea un clon para que este pueda suplantarla en aquellas labores que considera aburridas. Pero Selena no contaba que su clon también experimentaría la curiosidad que posee ella de recorrer el mundo.\nFinalmente, ambas emprenden un viaje de conocimiento a través de lugares asombrosos con ayuda de la ciencia e imaginación.',
			extra: {
				text: 'Equipo:',
				subTitle: 'Compañía: La Colectiva Creación',
				list: ['Constanza Becerra', 'Yocelyn Chacana', 'Enzo Escobar', 'Paulo Peña', 'Javiera Vegas', 'William Lopez'],
			},
		},
		{
			id: 'soy',
			name: '¡Soy! ',
			image: { url: '/municipal/soy.jpg', position: { marginTop: '3rem' }, alt: 'Imagen de la presentación de la obra teatral ¡Soy!' },
			links: [],
			description:
				'Un viaje de juegos e imaginarios de nuestras infancias propuestos como una experiencia escénica, para descubrir nuestra identidad y libertad, desarrollada a través de  un montaje que propone un espacio de libertad y tiempo de creación, que nos permite abrazar nuestras diferencias y volcar nuestra imaginación a la realidad.\nLa obra nace de un bello proceso de residencia creativo realizado entre el laboratorio creativo de la Fundación Círculo Remolino y la Compañía Teatro Merkén.',
			extra: {
				text: 'Equipo:',
				subTitle: '',
				list: [
					'Idea Creativa: Cía. Teatro Merkén / Laboratorio Creativo Remolino',
					'Dirección: Gabriel Silva Vilches',
					'Diseño: Luis Mondaca Rodríguez',
					'Producción: Jony Olea Alvarado',
					'Elenco: Nicolás Yusta Moraga / Anita María Contreras Vegas / Jony Olea Alvarado/ Gabriel Silva Vilches',
					'Diseño Sonoro: Liliana Peña Gómez',
				],
			},
		},
	],
}
