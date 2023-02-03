export const CENTRO = {
	id: 'centro-de-la-serena',
	title: 'Centro de La Serena',
	address: 'Visita cada evento para saber en qué lugar se realizarán',
	extract:
		'La versión 2023 del Festival ARC busca dar un nuevo sentido al uso de los espacios públicos, transformándolos en el escenario ideal para disfrutar del arte y la cultura. El centro de la ciudad de La Serena, capital regional de la Región de Coquimbo, se llenará de vida, color y energía con una serie de intervenciones artísticas que buscan acercar el derecho a la cultura a la comunidad a través de la acción de entrar en su cotidianidad.',
	description:
		'El Centro Histórico de la ciudad de La Serena se ubica entre las calles Videla y Almagro por el norte, Alameda por el sur, P.P. Muñoz por el oeste y las calles Vicuña y Zorrilla por el este. Este centro comenzó a formarse desde el momento en que la ciudad fue fundada, en el año 1544, cuando los primeros españoles llegaron a ese territorio. Cuatro años después, en 1548, fue destruida por los indígenas y en 1549, fue refundada con el nombre de San Bartolomé de La Serena.\nSu primer trazado correspondía al formato de damero, de 6 x 6 cuadras españolas. En la época colonial, la ciudad estuvo expuesta al asalto de piratas y corsarios. En 1680 fue saqueada e incendiada por Bartolomé Sharp. La arquitectura colonial que caracterizó a La Serena es la de barro y paja, con corralón, portón y casa al interior; habiendo además una arquitectura religiosa hecha en su mayoría de mampostería en piedra. Este estilo predomina hasta la década de 1840, cuando la ciudad comienza a transformarse en unas de las mejor conformadas del país, gracias al auge minero que trajo la explotación del cobre de los cerros de Tamaya. Precisamente, durante la segunda mitad del siglo XIX, atraídos tanto por la minería como por el comercio, llega un importante contingente de migrantes, entre los que se contaban carpinteros ingleses y americanos, quienes imprimen un sello particular a la ciudad con sus construcciones.\nEs posible distinguir un período clásico entre 1830 y 1860, ligado formalmente al Classic Revival americano y con posteridad, entre 1850 y 1880, un clásico serenense caracterizado por el establecimiento de los carpinteros extranjeros y la formación de otros regionales, quienes complejizan y enriquecen la carpintería decorativa, generalizan el uso del antetecho, la pilastra en fachada y tejuela de alerce. Después de 1880 la arquitectura abandona órdenes puros para entrar en un período ecléctico (1880-1940). Hacia 1940 se impone e incorpora a la ciudad el estilo neocolonial. Corresponden a este estilo los edificios de la Municipalidad-Tribunales, el Banco Central, la Estación de Ferrocarril y el Palacio Arzobispal. Algunos de estos inmuebles se edifican dentro del "Plan Serena", impulsado por el gobierno de Gabriel González Videla (1946-1952), gracias al cual se logró un centro urbano de gran homogeneidad y con carácter propio. El Centro Histórico de la ciudad de La Serena fue declarado Zona Típica el 12 de febrero de 1981,a través del Decreto Supremo N°499. Decreto 499 (1981)',
	links: [],
	tickets: {},
	styles: {
		backgroundColor: 'bg-pink',
		textColor: 'text-pink',
		hoverTextColor: 'hover:text-pink',
		hoverBackgroundColor: 'hover:bg-pink',
		groupHoverTextColor: 'group-hover:text-pink',
		fillColor: 'fill-pink',
		borderColor: 'border-pink'
	},
	image: {},
	schedule: [
		{
			day: 'Viernes 10\nDesde las 11:00 horas',
			events: [
				{
					id: 'pulso',
					name: 'PULSO',
					subTitle: { title: 'Lugar:', text: 'Intersección de las calles Balmaceda con Cordovez' },
					category: 'Performance',
					time: '',
					image: {
						url: '/centro/pulso.jpg',
						alt: 'Imagen de la Intervención de PULSO'
					},
					links: [],
					description:
						'PULSO es una acción de arte compuesta por 36 artistas escénicos que realizarán una intervención en el centro de la ciudad de La Serena.\nEl performance, tipo flashmob relata la historia de un amor atormentado por el orgullo y los prejuicios de sus familiares que se oponen a esta pasión.\nLa musicalización de la performance es el tema “Estrechez de Corazón” de LOS PRISIONEROS que será interpretado por una soprano y un tenor.',
					list: [
						{ title: 'Idea original y dirección:', text: ['Julio Bustamante', 'Gonzalo Peralta'] }
					]
				}
			]
		},
		{
			day: 'Sábado 11\nDesde las 11:00 horas',
			events: [
				{
					id: 'danza-afro-y-danza-espectaculo',
					name: 'Danza Afro y Danza Espectáculo + Clown callejero',
					subTitle: {
						title: 'Lugar:',
						text: 'Intersecciones calles Prat, O`Higgins, Cordovez y Balmaceda'
					},
					category: 'Danza',
					time: '',
					image: {
						url: '/centro/danza-afro.jpg',
						alt: 'Imagen de la Intervenciones de Danza Afro y Danza Espectáculo'
					},
					links: [],
					description:
						'La intervención de danza Afro consta de conectar al espectador con la visión expresiva de la danza africana como matriz cultural, rítmica y su legado en la afrodiáspora Latinoamérica, la cual difunde historia, estética y energía en su quehacer.\nPor su parte, la propuesta artística comprende un extracto de diferentes montajes de danza espectáculo, de las distintas escuelas y compañías que cada intérprete representa, las cuales reúnen las técnicas de Lirical Jazz, Jazz Dance y Ballroom Dance.\nEstas presentaciones serán acompañadas por un espectáculo clown de intervención callejera que buscará romper la cotidianeidad, a cargo del Payaso Metrayeta, artista que cuenta con 28 años de experiencia en esta disciplina, siendo uno de los precursores del concepto “Mimo de Calle” en las calles de la ciudad de La Serena.',
					list: [{ title: 'Artista:', text: ['Agrupación Astradanza', 'Payaso Metrayeta'] }]
				}
			]
		},
		{
			day: 'Domingo 12\nDesde las 11:00 horas',
			events: [
				{
					id: 'danza-flamenco',
					name: 'Danza Flamenco',
					subTitle: { title: 'Lugar:', text: 'La Recova' },
					category: 'Danza',
					time: '',
					image: {
						url: '/centro/danza-flamenco.jpg',
						alt: 'Imagen de la Intervención de Danza Flamenco'
					},
					links: [],
					description:
						'La propuesta artística consiste en la realización de una juerga flamenca, donde interactúan músicos y bailarinas de flamenco, mezclando música, percusión, guitarra, canto, palmas y baile.',
					list: [{ title: 'Artista:', text: ['Agrupación Astradanza'] }]
				},
				{
					id: 'la-pelea-del-siglo',
					name: 'La Pelea del Siglo',
					subTitle: { title: 'Lugar:', text: 'Sector de la Catedral' },
					category: 'Circo',
					time: '',
					image: {
						url: '/centro/la-pelea-del-siglo.jpg',
						alt: 'Imagen de la presentación de La Pelea del Siglo'
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
