export const ESTACIONAMIENTO = {
	id: 'estacionamiento-plaza-de-armas',
	title: 'Estacionamiento Plaza de Armas',
	address: {
		text: 'Calle Los Carrera con Arturo Prat, a un costado del Gobierno Regional (Plaza de los Periodistas)',
		url: 'https://goo.gl/maps/jMm8hEXnHQxAmcuA9'
	},
	extract:
		'Un espacio inmersivo de proyecciones y visualidades invitarán a la comunidad a reflexionar a través de sus sentidos, a través de una inédita obra que dotará de un nuevo sentido a los estacionamientos de la Plaza de Armas de La Serena, espacio no convencional que será parte del recorrido del Festival ARC 2023. ',
	description:
		'Los estacionamientos de la Plaza de Armas fueron construidos entre los años 2008 y 2012, a través de un Proyecto Municipal de Desarrollo Privado. En su obra trabajaron más de 100 personas y durante su desarrollo, se encontraron una serie de osamentas, vasijas y otros elementos, que componían un deshuesadero de llamas que estaba ubicado en el lugar durante tiempos prehispánicos.',
	links: [],
	tickets: {},
	styles: {
		backgroundColor: 'bg-yellow',
		textColor: 'text-yellow',
		hoverTextColor: 'hover:text-yellow',
		hoverBackgroundColor: 'hover:bg-yellow',
		groupHoverTextColor: 'group-hover:text-yellow',
		fillColor: 'fill-yellow',
		borderColor: 'border-yellow'
	},
	image: {},
	schedule: [
		{
			day: 'Del 10 hasta el 12 de Feb\nDesde las 10:00 horas',
			events: [
				{
					id: 'bajo-simulación',
					name: 'Bajo Simulación',
					subTitle: { title: 'Colectivo:', text: 'La Velocidad de la Luz' },
					category: 'Instalación Multimedia',
					time: '',
					timeTable: { day: 'del Viernes 10 hasta el Domingo 12', time: 'de 10:00 a 21:00 horas' },
					image: {
						url: '/estacionamiento/velocidad-de-la-luz.jpg',
						alt: 'Imagen de la performance de La Velocidad de la Luz',
						styles: { aspectRatio: 'aspect-[3/2]', height: '373', width: '560' }
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/lavelocidad.delaluz/' }],
					description:
						'El espacio inmersivo se construye por medio de capas traslúcidas y verticales, donde la sucesión de  proyecciones y experiencias individuales se unen, logrando percibir y construir una volumetría lumínica que nos invita a la reflexión por medio de distintas visualidades. La instalación propone un diálogo entre elementos contrastantes, a través del habitar de la luz y oscuridad. \nLa propuesta se inserta a lo largo del área central del estacionamiento de La Serena Centro, específicamente en el segundo nivel, utilizando alrededor de 30 estacionamientos.',
					list: []
				}
			]
		}
	]
}
