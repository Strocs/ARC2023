export const GAVIOTA = {
	id: 'espacio-la-gaviota',
	title: 'Espacio La Gaviota',
	address: 'Balmaceda N° 124, Barrio Almagro, La Serena',
	extract:
		'El espacio de la escuela y compañía teatral, TeatroPuerto, será el lugar ideal para disfrutar de la belleza de las artes escénicas regionales, con su remodelada Sala Josefa, como parte del circuito artístico ciudadano que el Festival ARC 2023 desarrollará en el Centro de La Serena.',
	description:
		'Espacio La Gaviota se encuentra en la ciudad de La Serena, específicamente en el Barrio Almagro, el cual es parte del casco histórico de la ciudad declarado zona típica en el año 1981. El inmueble fue construido en el año 1920 y posee un estilo ecléctico característico de las construcciones que datan entre los años 1880 y 1940.\nEsta construcción que posee 100 años fue durante gran parte de su historia la vivienda de la familia Mascaró. A partir del año 1997 deja de ser una vivienda y sus dueños buscan nuevos arrendatarios. En el año 1998 y debido a la elección de la entonces senadora por la 4 º circunscripción, Evelyn Matthei, la casona pasa a ser la sede de la Unión Demócrata Independiente en la ciudad de La Serena, lo cual se mantuvo hasta el año 2014.\nEl año 2015 el inmueble se convierte en un espacio cultural dedicado a la creación, exhibición, investigación y difusión de las artes escénicas de la mano de la organización TeatroPuerto, quienes gracias a la adjudicación del programa Otras Instituciones Colaboradoras del Estado otorgado por el Ministerio de las Culturas, las artes y el patrimonio logran instalarse en este histórico barrio patrimonial y acrecentar la oferta artística y cultural de la ciudad.',
	links: [],
	tickets: { name: 'ticket', url: 'https://www.portaldisc.com/evento/espaciolagaviotaarc2023' },
	styles: {
		backgroundColor: 'bg-orange',
		textColor: 'text-orange',
		hoverTextColor: 'hover:text-orange',
		hoverBackgroundColor: 'hover:bg-orange',
		groupHoverTextColor: 'group-hover:text-orange',
		fillColor: 'fill-orange',
		borderColor: 'border-orange'
	},
	image: {},
	schedule: [
		{
			day: 'Viernes 10',
			events: [
				{
					id: 'la-cantina-de-la-negra',
					name: 'La Cantina de la Negra',
					subTitle: { title: 'Compañía:', text: 'La Chinchilla Subversiva' },
					category: 'Teatro',
					time: '19:00',
					image: {
						url: '/gaviota/la-cantina-de-la-negra.jpg',
						alt: 'Imagen de la presentación de la obra teatral La Cantina de la Negra'
					},
					links: [
						{ name: 'instagram', url: 'https://www.instagram.com/cialachinchillasubversiva/' }
					],
					description:
						'Una densa bruma oculta los recuerdos de la miseria, alojados en desgastados muebles volcados, vasos derramados y ropajes repartidos que nos presentan un imaginario del mundo de la prostitución. Entre risas, llantos y tacones, se abren paso melodías de dos grandes obras del teatro nacional, “La Negra Ester” de Andrés Pérez y “Amores de Cantina” de Juán Radrigán, dando origen a “La Cantina de la Negra”, una historia que se desarrolla en un prostíbulo de pueblo en el que trabajan Berta, Luana, Rosa y La China, quienes, a través de relatos biográficos, removidas por el luto, nos invitan a reflexionar sobre el mundo íntimo de las trabajadoras sexuales, sus dolores, sus heridas y sus anhelos.',
					list: [
						{
							title: 'Elenco:',
							text: [
								'Natalia Peña',
								'Yaritza Rodríguez',
								'Javiera Sepúlveda',
								'Vianni Tapia',
								'Ángelo Orrego',
								'Rodrigo Piñones',
								'Evelyn Rodríguez',
								'Turquesa Fernández'
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
					id: 'preciosas-y-ridículas',
					name: 'Preciosas y Ridículas',
					subTitle: { title: 'Compañía:', text: 'Teatro Gárgaras' },
					category: 'Teatro',
					time: '19:00',
					image: {
						url: '/gaviota/preciosas-y-ridiculas.jpg',
						alt: 'Imagen de la presentación de la obra teatral Preciosas y Ridículas'
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/teatrogargaras/' }],
					description:
						'Preciosas y Ridículas es una adaptación de  “Las Preciosas Ridículas” de Moliere. Dos doncellas llegan al palacio de su tío el Rey Luis XIV o Rey Sol luego de huir de dos pretendientes. La presencia de estas doncellas incomoda al rey, ya que sus comportamientos están en contra de los modos de la época, por lo que el rey maquiavélicamente planea una venganza; contrata a dos Lacayos para que se hagan pasar por hombres sofisticados y elegantes.\nFinalmente, el Rey Sol desenmascara tal situación, en un acto de soberbia y moralidad y descarga su pedantería ante un mundo actual evolucionado.\nEsta comedia conserva la fuerza, picardía y movimiento de los personajes protagónicos Madelón y su prima Cathos, junto a sus pretendientes Mascarilla y Jodelet todo entrelazado en la venganza del Rey Sol por la conductas de sus sobrinas, toda esta trama encubierta por Marotte sirvienta del palacio.\nPreciosas y Ridículas pertenece a Teatro Gárgaras fue estrenada en septiembre del 2022 en Centro Cultural Palace de Coquimbo.',
					list: [
						{
							title: 'Dirección, Adaptación y Dramaturgia:',
							text: ['Rodrigo Castillo Cuello']
						},
						{
							title: 'Elenco:',
							text: [
								'Ricardo Carvajal Cereijo',
								'Luis Jímenez Díaz',
								'Andrea Ochoa Díaz',
								'Romina Urbina Briones',
								'Camila Vega Astudillo ',
								'Rodrigo Castillo Cuello'
							]
						},
						{ title: 'Diseño de Vestuario:', text: ['Daniel Bagmara Mena '] },
						{ title: 'Diseño Sonoro e Iluminación:', text: ['Gabriel Campos '] }
					]
				}
			]
		},
		{
			day: 'Domingo 12',
			events: [
				{
					id: 'los-de-allá',
					name: 'Los de Allá',
					subTitle: { title: 'Compañía:', text: 'Colectivo Con - Zumo Teatro' },
					category: 'Teatro',
					time: '19:00',
					image: {
						url: '/gaviota/los-de-alla.jpg',
						alt: 'Imagen de la presentación de la obra teatral Los de Allá'
					},
					links: [],
					description:
						'La obra es una nueva versión, una nueva mirada de la obra “Chuchetas ”, escrita el año 2012. Esta vez el montaje se centra en el desconcierto y la desolación del ser frente a las realidades adversas a las que se ve enfrentado en un contexto de marginalidad rural. La falta de agua, la desertificación cada vez más cruda, ponen a prueba la templanza y la resiliencia de los habitantes de estos territorios.\nLa obra toma como escenario referencial, el Desierto de Atacama y sus paisajes. En este espacio, la relación del hombre con los animales y su entorno se replantea poniendo en discusión el concepto de familia y de la propiedad privada.',
					list: [
						{ title: 'Dramaturgia y Dirección:', text: ['Héctor Álvarez Godoy'] },
						{ title: 'Elenco:', text: ['Margarita Castro', 'Jonatan Olea'] },
						{ title: 'Diseño Sonoro:', text: ['Diego Contreras'] },
						{ title: 'Encargado Técnico:', text: ['William López'] },
						{ title: 'Maquillaje y Vestuario:', text: ['Luis Mondaca'] }
					]
				}
			]
		}
	]
}
