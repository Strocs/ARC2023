export const MUNICIPAL = {
	id: 'teatro-municipal-de-la-serena',
	title: 'Teatro Municipal de La Serena',
	address: 'Calle Benavente N° 580, La Serena',
	extract:
		'Grandes obras de las artes escénicas regionales, con un enfoque educativo y familiar, se darán cita en el escenario del Teatro Municipal de La Serena, uno de los espacios culturales más importantes de la ciudad, cuya infraestructura es ideal para que la comunidad pueda disfrutar de una linda tarde de teatro. ',
	description:
		'El Teatro Municipal de La Serena, emplazado a un costado del emblemático Liceo de Niñas Gabriela Mistral, fue construido entre los años 1945 y 1952 e inaugurado durante el gobierno del expresidente Gabriel González Videla.\nPosteriormente, fue remodelado con la colaboración de la Embajada de Japón en Chile en el marco del "Programa de Asistencia Comunitaria Cultural", (APCC) en agosto de 2009.\nActualmente administrado por la Ilustre Municipalidad de La Serena, destaca por las distintas presentaciones de conciertos sinfónicos y de cámara, danza y teatro que se realizan en su infraestructura. \nEl espacio es un importante centro de expresión cultural de la ciudad, por ser escenario fundamental de las creaciones y manifestaciones artísticas regionales, como también nacionales.',
	links: [],
	tickets: { name: 'ticket', url: 'https://www.portaldisc.com/evento/teatromunicipalarc2023' },
	styles: {
		backgroundColor: 'bg-pale-blue',
		textColor: 'text-pale-blue',
		hoverTextColor: 'hover:text-pale-blue',
		hoverBackgroundColor: 'hover:bg-pale-blue',
		groupHoverTextColor: 'group-hover:text-pale-blue',
		fillColor: 'fill-pale-blue',
		borderColor: 'border-pale-blue'
	},
	image: {},
	schedule: [
		{
			day: 'Viernes 10',
			events: [
				{
					id: 'los-pasos-de-selena',
					name: 'Los Pasos de Selena',
					subTitle: { title: 'Compañía:', text: 'La Colectiva Creación' },
					category: 'Teatro',
					time: '12:00',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen de la presentación de Los Pasos de Selena'
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/lacolectiva.creacion/' }],
					description:
						'Selena es una adolescente muy curiosa que desea encontrar respuestas a todas sus interrogantes, pero entre sus estudios y quehaceres domésticos, ve limitada esta posibilidad.\nDecidida a explorar el universo que la rodea, crea un clon para que este pueda suplantarla en aquellas labores que considera aburridas. Pero Selena no contaba que su clon también experimentaría la curiosidad que posee ella de recorrer el mundo.\nFinalmente, ambas emprenden un viaje de conocimiento a través de lugares asombrosos con ayuda de la ciencia e imaginación.',
					list: [
						{ title: 'Dirección y dramaturgia:', text: ['Javiera Vegas'] },
						{
							title: 'Elenco:',
							text: ['Constanza Becerra', 'Yocelyn Chacana', 'Enzo Escobar', 'Paulo Peña']
						},
						{ title: 'Diseño Escénico:', text: ['Andre Álvarez', 'Rocío Cifuentes'] },
						{ title: 'Diseño sonoro:', text: ['Aaron Abarca'] },
						{ title: 'Diseño de iluminación:', text: ['William López'] },
						{ title: 'Confección de vestuarios:', text: ['Verónica Zapata'] }
					]
				},
				{
					id: 'grieta',
					name: 'Grieta',
					subTitle: { title: 'Compañía:', text: 'Corazón de Madera' },
					category: 'Danza',
					time: '19:00',
					image: {
						url: '/municipal/grieta.jpg',
						alt: 'Imagen de la presentación de Grieta'
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/laurenciaflamenca/' }],
					description:
						'Montaje de flamenco-fusión que aborda la temática de la sequía y la infertilidad, conceptos que se manifiestan a través del cuerpo de una mujer. Lo complementa, un paisaje sonoro que evoca un espacio desolador, yerto, desamparado y árido. En medio de esa orfandad se encuentra un ente femenino, del recuerdo sin tiempo ni rostro de una mujer, quien camina en el espacio y va dejando un rastro, una huella interminable de innumerables polleras armando una extensa hilera roja como reminiscencia. En este paisaje surge el personaje femenino infértil incapaz por el tiempo de dar a luz.',
					list: [
						{
							title: 'Elenco:',
							text: ['Claudia Sanhueza', 'Camilo Candía', 'Constanza Mardones']
						}
					]
				}
			]
		},
		{
			day: 'Sábado 11',
			events: [
				{
					id: 'soy',
					name: 'Soy',
					subTitle: {},
					category: 'Teatro',
					time: '12:00',
					image: {
						url: '/municipal/soy.jpg',
						alt: 'Imagen de la presentación de Soy'
					},
					links: [
						{ name: 'instagram', url: 'https://www.instagram.com/companiateatromerken/' },
						{ name: 'instagram', url: 'https://www.instagram.com/fundacion_circulo_remolino/' }
					],
					description:
						'Un viaje de juegos e imaginarios de nuestras infancias propuestos como una experiencia escénica, para descubrir nuestra identidad y libertad, desarrollada a través de  un montaje que propone un espacio de libertad y tiempo de creación, que nos permite abrazar nuestras diferencias y volcar nuestra imaginación a la realidad.\nLa obra nace de un bello proceso de residencia creativa, realizado entre el laboratorio creativo de la Fundación Círculo Remolino y la Compañía Teatro Merkén.',
					list: [
						{
							title: 'Idea Creativa:',
							text: ['Compañía Teatro Merkén', 'Laboratorio Creativo Remolino']
						},
						{ title: 'Dirección:', text: ['Gabriel Silva Vilches'] },
						{ title: 'Diseño:', text: ['Luis Mondaca Rodríguez'] },
						{ title: 'Producción:', text: ['Jony Olea Alvarado'] },
						{
							title: 'Elenco:',
							text: [
								'Nicolás Yusta Moraga',
								'Anita María Contreras Vegas',
								'Jony Olea Alvarado',
								'Gabriel Silva Vilches'
							]
						},
						{ title: 'Diseño Sonoro:', text: ['Liliana Peña Gómez'] }
					]
				},
				{
					id: 'en-este-lugar-una-y-otra-vez',
					name: 'En Este Lugar Una y Otra Vez',
					subTitle: {},
					category: 'Danza',
					time: '19:00',
					image: {
						url: '/municipal/en-este-lugar-una-y-otra-vez.jpg',
						alt: 'Imagen de la presentación de En Este Lugar Una y Otra Vez'
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/zona.de.obras/' }],
					description:
						'En Este Lugar Una y Otra Vez invita a reflexionar sobre el estado del mundo actual, de las relaciones entre pasado, presente y futuro, de la esperanza y el desencanto que se respiran día a día, desde la mirada de dos generaciones diferentes, como la de una hija y su madre o de una estudiante y su profesora. La preocupación de ambas por una sociedad que sienten en decadencia, individualista y segregadora, es sobrellevada a través de un simple juego que realizan con el fin de alimentar la inocencia y esperanzas en el ser humano y su actuar.',
					list: [
						{
							title: 'Intérpretes:',
							text: [
								'Carlos Tapia (danza)',
								'Sandra Acevedo (danza)',
								'Diego Contreras (músico bajista)'
							]
						}
					]
				}
			]
		},
		{
			day: 'Domingo 12',
			events: [
				{
					id: 'la-raíz-del-rosal',
					name: 'La Raíz del Rosal',
					subTitle: { title: 'Compañía:', text: 'Compañía Teatro del Elqui' },
					category: 'Teatro',
					time: '12:00',
					image: {
						url: '/municipal/la-raiz-del-rosal.jpg',
						alt: 'Imagen de la presentación de La Raíz del Rosal'
					},
					links: [],
					description:
						'Un cuento poético escrito en el Valle de Elqui, por la premio Nobel Gabriela Mistral, antes de cumplir 20 años, crea este relato filosófico de los contrarios que se complementan, lo claro y lo oscuro, arriba/abajo.\n“La raíz del Rosal”, nos sensibiliza respecto a lo seres que viven y luchan, sin ser vistos, pues viven bajo tierra…buscando la luz desde las raíces; nos muestra con esa metáfora como la belleza germina desde el fondo de la oscuridad, como un rosal que también es raíz deforme.',
					list: [
						{
							title: 'Intérpretes Escénicos:',
							text: ['Natalia Candia', 'Rodrigo Medina', 'Alfonso Miño']
						}
					]
				},
				{
					id: 'mandragora-el-sueño-continúa',
					name: 'Mandrágora, el sueño continúa',
					subTitle: { title: 'Compañía:', text: 'Academia Byfon' },
					category: 'Danza',
					time: '19:00',
					image: {
						url: '/municipal/mandrágora-el-sueño-continúa.jpg',
						alt: 'Imagen de la presentación de Mandrágora, el sueño continúa'
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/danzabyfon/' }],
					description:
						'La obra cita a un movimiento de vanguardia chileno llamado Mandrágora, fundado en 1938 por los poetas Teófilo Cid Enrique Gómez Correa y Braulio Arenas. Específicamente tomando del movimiento, la utopía, lo telúrico y la imaginación como componentes necesarios y resignificando las imágenes poéticas a través del collage.',
					list: [
						{ title: 'Dirección Artística:', text: ['Jaime Alfaro Castillo Ndwazi'] },
						{ title: 'Dirección General:', text: ['Jacqueline Pacheco Castillo'] },
						{
							title: 'Intérpretes Escénicos:',
							text: [
								'Matías Letelier Pardo',
								'Benjamín Contreras Ossandón',
								'Josefa Egaña Núñez',
								'Montserrat Rivera Villalobos'
							]
						}
					]
				}
			]
		}
	]
}
