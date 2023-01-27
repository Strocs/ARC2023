export const CENTRO = {
	id: 'centro-de-la-serena',
	title: 'Centro de La Serena',
	address: '',
	extract: '',
	description: '',
	links: [],
	styles: {
		backgroundColor: 'bg-pink',
		textColor: 'text-pink',
		hoverTextColor: 'hover:text-pink',
		hoverBackgroundColor: 'hover:bg-pink',
		groupHoverTextColor: 'group-hover:text-pink',
		fillColor: 'fill-pink',
		borderColor: 'border-pink'
	},
	image: {
		url: '/arqueologico/arqueologico.svg',
		position: { top: '42%', left: '72%' }
	},
	schedule: [
		{
			day: '',
			events: [
				{
					id: 'la-pelea-del-siglo',
					name: 'La Pelea del Siglo',
					subTitle: {},
					category: 'Circo',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen de la presentación de Los Pasos de Selena'
					},
					links: [],
					description:
						'Espectáculo basado en la técnica de teatro de clown, que nos habla sobre la necesidad de la autodefensa en las mujeres. Entre risas y errores, Jengibre anima a Zufrina a aprender a defenderse.\nJengibre está convencida de que todas las mujeres tienen que aprender a defenderse de quien quiera hacerles daño, así es que decide enseñarle toda su técnica de boxeo a Zufrina, quien paso a paso seguirá todos sus consejos y se preparará para… La pelea del siglo.',
					list: [
						{ title: 'Autoras:', text: ['Jengibre y Zufrina'] },
						{
							title: 'Co-dirección:',
							text: ['Juan Paulo Argandoña', 'Valeska Flores', 'Gabriela Ortiz']
						}
					]
				}
			]
		}
	]
}
