export const FRONTIS = {
	id: 'frontis-gobierno-regional-de-coquimbo',
	title: 'Frontis Gobierno Regional de Coquimbo',
	address: {
		text: 'Calle Arturo Prat N° 350, La Serena',
		url: 'https://goo.gl/maps/WsXnQHJ4AFCtRNKS6'
	},
	extract:
		'Música orquestada, circo teatro y circo contemporáneo de la Región de Coquimbo llenarán de arte y cultura el corazón de la ciudad de La Serena, uniendo el quehacer diario de la comunidad con la belleza expresiva de lo escénico, creando un nuevo sentido a este emblemático espacio público',
	description:
		'La Casa de Gobierno a fines del s. XVIII se ubicó frente a la Plaza de Armas en el lado norte sector poniente, posiblemente en un edificio proyectado por el ingeniero Pedro Rico en 1795, que se habría desalojado por el deterioro. Más tarde la Intendencia arrienda casa a algunos propietarios hasta fines del siglo pasado, cuando se construye frente a la Plaza, en su lado poniente, un edificio de dos pisos destinado a Intendencia, Correos y otros servicios públicos. Este edificio fue demolido a raíz del sismo de 1975. Hacia 1940 se impone e incorpora a la ciudad el estilo neocolonial. Corresponden a este estilo los edificios de la Municipalidad-Tribunales, el Banco Central, la Estación de Ferrocarril y el Palacio Arzobispal. El Inmueble de la Intendencia, se edifica dentro del "Plan Serena", impulsado por el gobierno de Gabriel González Videla (1946-1952), gracias al cual se logró un centro urbano de gran homogeneidad y con carácter propio. En 1952 se inauguró, en la ubicación original y su proyecto corresponde al arquitecto de la Dirección General de Obras Públicas señor Edwin Weil.\nEste es un Inmueble de Conservación Histórica, declarado de esta manera por el instrumento de planificación comunal. Además, está al interior de la Zona Típica “Centro Histórico de La Serena” por lo que está protegido por la Ley de Monumentos Nacionales.',
	links: [],
	tickets: {},
	styles: {
		backgroundColor: 'bg-blue',
		textColor: 'text-blue',
		hoverTextColor: 'hover:text-blue',
		hoverBackgroundColor: 'hover:bg-blue',
		groupHoverTextColor: 'group-hover:text-blue',
		fillColor: 'fill-blue',
		borderColor: 'border-blue'
	},
	image: {},
	schedule: [
		{
			day: 'Viernes 10',
			events: [
				{
					id: 'mushi',
					name: 'Mushi, un espectáculo de bichos',
					subTitle: { title: 'Presenta:', text: 'Compañía Teatro Gestual de Chile' },
					category: 'Circo',
					time: '21:00',
					timeTable: { day: 'el Viernes 10', time: 'a las 21:00 horas' },
					image: {
						url: '/frontis/mushi.jpg',
						alt: 'Imagen de la presentación de Mushi, un espectáculo de bichos',
						styles: { aspectRatio: 'aspect-[3/2]', height: '373', width: '560' }
					},
					links: [],
					description:
						'Obra familiar sobre insectos,  protagonizada por la mosca y su amiga. Esta mosca se siente más identificada con las abejas que con las moscas y junto con su amiga se embarcan en aventuras inolvidables, en donde los talentosos amigos de la mosca/abeja orientan a nuestros protagonistas  a través de los pastos al encuentro de momentos que jamás olvidarán.',
					list: [
						{ title: 'Dirección:', text: ['Juan Paulo Argandoña'] },
						{ title: 'Dramaturgia:', text: ['Felipe Rivera'] },
						{ title: 'Coreografía:', text: ['Tania Guerrero'] },
						{ title: 'Músicos:', text: ['Felipe Geraldo', 'Pedro Rojas'] },
						{
							title: 'Elenco:',
							text: [
								'Janet Barriga',
								'Jessenia Jamet',
								'Valeska Flores',
								'Henry Ireland',
								'Gonzalo Pasten',
								'Álvaro Leiva',
								'Cristian Vega',
								'Carla Ríos',
								'Constanza Guerrero'
							]
						}
					]
				}
			]
		},
		{
			day: 'Sábado 11',
			events: [
				{
					id: 'concierto-el-señor-de-los-anillos',
					name: 'Concierto El Señor de los Anillos Sinfónico',
					subTitle: {
						title: 'Presenta:',
						text: 'Orquesta Filarmónica de La Antena y Coro Polifónico Academia Pedro Aguirre Cerda'
					},
					category: 'Música',
					time: '21:00',
					timeTable: { day: 'el Sábado 11', time: 'a las 21:00 horas' },
					image: {
						url: '/frontis/orquesta-PAC.jpg',
						alt: 'Imagen de la presentación del Concierto El Señor de los Anillos Sinfónico',
						styles: { aspectRatio: 'aspect-[3/2]', height: '373', width: '560' }
					},
					links: [
						{ name: 'instagram', url: 'https://www.instagram.com/orquesta_filarmonica_ofi/' },
						{ name: 'instagram', url: 'https://www.instagram.com/academiapac/' }
					],
					description:
						'Concierto presentado por la Orquesta Filarmónica de La Antena y coro polifónico Pedro Aguirre Cerda, en el que se realiza un viaje por la obra musical compuesta por Howard Shore, en las cintas El Hobbit y El Señor de los Anillos; la presentación musical se presenta un programa cronológico con las piezas más destacadas de las películas antes mencionadas.\n\bSobre la organización\b\nLa academia de música Pedro Aguirre Cerda es una institución de formación musical gratuita, que por más de 20 años ha impartido clases de forma gratuita en el sector de La Antena de la ciudad de La Serena, siendo esta la piedra angular de todo el movimiento musical sinfónico del sector en el cual se encuentra.',
					list: []
				}
			]
		},
		{
			day: 'Domingo 12',
			events: [
				{
					id: 'calle',
					name: 'Calle',
					subTitle: { title: 'Presenta:', text: 'Circo La Cuarta Estación' },
					category: 'Circo',
					time: '21:00',
					timeTable: { day: 'el Domingo 12', time: 'a las 21:00 horas' },
					image: {
						url: '/frontis/calle.jpg',
						alt: 'Imagen de la presentación de Calle, obra de circo contemporáneo',
						styles: { aspectRatio: 'aspect-[3/2]', height: '373', width: '560' }
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/circolacuartaestacion/' }],
					description:
						'“Calle” es una obra dramática de circo contemporáneo, inspirada en relatos reales de abandono, vulnerabilidad y la violencia psicológica - física que podemos ver día a día en las poblaciones.\nLos personajes abordan las diferentes temáticas de la obra mediante el lenguaje del gesto, físico y expresivo, apoyado principalmente de coreografías grupales.',
					list: [
						{
							title: 'Elenco:',
							text: [
								'Sebastián A.C.',
								'Paula Masciangelo',
								'Danielas Miles',
								'Karen González',
								'Joan Uren',
								'Julieta García',
								'Nicola González',
								'Lucas Reynolds',
								'Álvaro Leiva'
							]
						},
						{ title: 'Dirección general:', text: ['Sebastián Araya C.'] },
						{ title: 'Coreografía:', text: ['Karen González'] },
						{ title: 'Diseño escénico:', text: ['Gonzalo Peralta Godoy'] },
						{ title: 'Diseño de vestuario:', text: ['Marlene Plaza'] },
						{ title: 'Diseño de sonoro:', text: ['Gonzalo Aguirre'] },
						{ title: 'Iluminación:', text: ['Jaime Vega'] },
						{ title: 'Producción:', text: ['Valentina Pierotic'] }
					]
				}
			]
		}
	]
}
