export const MUSEO = {
	id: 'museo-arqueologico-de-la-serena',
	title: 'Museo Arqueológico de La Serena',
	address: 'Cordovez esquina Cienfuegos, S/N, La Serena',
	extract:
		'Las artes visuales y la creación audiovisual se darán cita en el Museo Arqueológico de La Serena, con grandes exponentes regionales y nacionales que llenarán de arte y cultura este mítico espacio cultural de La Serena, que forma parte del circuito del Festival ARC 2023.',
	description:
		'El Museo Arqueológico de La Serena nace como consecuencia de las investigaciones realizadas por don Francisco Cornely Bachman en la década de 1930. Con los auspicios de la Primera Municipalidad de La Serena, fue fundado el 3 de abril de 1943 por el mismo investigador, quien se dedicó a estudiar la Cultura Diaguita en el Valle de Elqui, y posteriormente originó las primeras colecciones del museo.\nLa comunidad con entusiasmo y sus múltiples donaciones amplió las responsabilidades patrimoniales del museo, lo que permitió seguir adelante con un fecundo trabajo y desarrollo al servicio de la comunidad.\nEn 1948 fue transferido a la Dirección de Bibliotecas, Archivos y Museos (Dibam). Durante ese mismo año fue incorporado en el Plan Serena del presidente Gabriel González Videla, lo que significó la construcción de un edificio exclusivo para el museo que se finalizó en 1954, emplazándose en la esquina de las calles Cienfuegos con Cordovéz, en la zona típica de la ciudad. Su fachada incorporó un portal barroco, rescatado de una antigua casa colonial de la ciudad, perteneciente al Conde de Villa Señor.\nÚltimamente cuenta con una reciente ampliación de sus dependencias (edificio de 4 pisos aéreos y 2 pisos subterráneos), junto con una mejorada infraestructura y museografía.',
	links: [{ name: 'ticket', url: 'https://www.portaldisc.com/evento/arc2023' }],
	styles: {
		backgroundColor: 'bg-blue',
		textColor: 'text-blue',
		hoverTextColor: 'hover:text-blue',
		hoverBackgroundColor: 'hover:bg-blue',
		groupHoverTextColor: 'group-hover:text-blue',
		fillColor: 'fill-blue',
		borderColor: 'border-blue'
	},
	image: {
		url: '/arqueologico/museo.svg',
		position: { top: '42%', left: '72%' }
	},
	schedule: [
		{
			day: 'Viernes 10',
			events: [
				{
					id: 'el-arte-del-tiempo',
					name: 'El Arte del Tiempo',
					subTitle: {},
					category: 'Documental',
					time: '18:00',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [],
					description:
						'La construcción de la carretera panamericana que conecta Chile de norte a sur, tropieza con el sitio arqueológico más grande de la región de Coquimbo: El Olivar, un enorme asentamiento que alberga las sepulturas de diferentes culturas prehistóricas de la región, entre ellas, el apogeo de la cultura Diaguita (800 - 1536 d.C). Esta cultura, estudiada por los arqueólogos desde la década de 1920 en adelante, y conocida por su sofisticada alfarería, contiene más de 700 años de prehistoria chilena y su relación con el territorio, revelando esta vez, una profunda concepción del tiempo y la muerte.',
					list: [
						{ title: 'Dirección:', text: ['Emilia Simonetti Bochetti'] },
						{ title: 'Producción:', text: ['Protovisión Audiovisual'] },
						{ title: 'Dirección de Fotografía:', text: ['Diego Mendéz Bravo'] },
						{ title: 'Montaje:', text: ['Diego Mendéz Bravo'] },
						{ title: 'Género:', text: ['Largometraje Documental Regional'] },
						{ title: 'Duración:', text: ['65 minutos'] },
						{ title: 'Año:', text: ['2020'] }
					]
				},
				{
					id: 'aqui-se-construye',
					name: 'Aquí se Construye (o Ya no existe el lugar donde nací)',
					subTitle: {},
					category: 'Documental',
					time: '19:15',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen de la presentación de Los Pasos de Selena'
					},
					links: [],
					description:
						'Un vecino sufre la demolición de la casa vecina y la construcción de un edificio sobre el mismo lugar, en un período de dos años y medio. Durante este tiempo muchas cosas ocurrirán: una muerte y un nacimiento, demoliciones de barrios, construcciones de edificios y el paso de las estaciones. Al final, cuando el edificio está terminado y habitado, los nuevos vecinos miran al protagonista desde sus balcones hacia abajo, como el residuo de una cultura vencida en una guerra urbana y silenciosa. Una película sobre la toma de las ciudades por un invasor sin rostro. Una película sobre el transcurso del tiempo en un espacio que se transforma.',
					list: [
						{ title: 'Dirección:', text: ['Ignacio Agüero'] },
						{ title: 'Producción:', text: ['Fernanda Alburquerque'] },
						{ title: 'Dirección de fotografía:', text: ['Inti Briones'] },
						{ title: 'Montaje:', text: ['Sofie Brança'] },
						{ title: 'Género:', text: ['Largometraje Documental Nacional'] },
						{ title: 'Año:', text: ['2000'] }
					]
				}
			]
		},
		{
			day: 'Sábado 11',
			events: [
				{
					id: 'redención',
					name: 'Redención',
					subTitle: {},
					category: 'Cortometraje',
					time: '18:00',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [],
					description:
						'Alfonso ha escapado con suerte de un fallido asalto junto a Reinaldo, su brazo derecho. Herido y fugitivo, guiado por Reinaldo, pretende refugiarse en el paraíso que lo vio nacer, una remota granja escondida entre las densas montañas de Los Andes Chilenos. Alfonso desea borrar sus culpas y recomponer su destino pero la muerte viene más cerca para atraparlo y dejar a Reinaldo frente a una oportunidad difícil de rechazar para empezar de cero.',
					list: [
						{ title: 'Dirección:', text: ['Diego Rojas Sastre'] },
						{
							title: 'Elenco:',
							text: ['Luis Dubó', 'Daniel Candía', 'Paola Giannini', 'José Herrera']
						},
						{ title: 'Producción:', text: ['Eduardo Mallea', 'María Paz Guzmán'] },
						{ title: 'Dirección de fotografía:', text: ['Rodrigo Avilés', 'Vicente Mayo'] },
						{ title: 'Montaje:', text: ['Camilo Corbeaux'] },
						{ title: 'Género:', text: ['Cortometraje de ficción regional'] },
						{ title: 'Año:', text: ['2021'] }
					]
				},
				{
					id: ' proyecto-fantasma',
					name: ' Proyecto Fantasma',
					subTitle: {},
					category: 'Largometraje',
					time: '18:30',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen de la presentación de Los Pasos de Selena'
					},
					links: [],
					description:
						'Pablo  es un joven de 30 años que sueña con actuar en películas de cine, pero para sobrevivir trabaja como paciente simulado y en extrañas sesiones de terapias alternativas. Su vida viene cuesta abajo, acaba de terminar una relación y su compañero de casa desaparece, dejándole deudas y un sin fin de problemas… entre ellos, un fantasma. Este será el comienzo de su travesía por el barrio de Ñuñoa, conociendo a sus vecinos, haciendo nuevos amigos y descubriendo que el camino para cumplir su sueño será más enredado y complicado de lo que parece.',
					list: [
						{ title: 'Dirección:', text: ['Roberto Doveris'] },
						{
							title: 'Elenco:',
							text: [
								"Juan Cano',' Ingrid Isensee',' Violeta Castillo','Fernanda Toledo','Fernando Castillo','Yasmín Ladueñas','Natalia Grez','Rocío Monasterio','Claudio González Ravanal','Marco Carmona','Conrado Soto','Constanza Fernández Bertrand','Sofío Oportot"
							]
						},
						{ title: 'Producción:', text: ["Aura Sinclair',' Roberto Doveris"] },
						{ title: 'Dirección de fotografía:', text: ['Patricia Alfaro'] },
						{ title: 'Montaje:', text: ['Sylvana Squicciarini'] },
						{ title: 'Género:', text: ['Largometraje de ficción nacional'] },
						{ title: 'Año:', text: ['2022'] }
					]
				}
			]
		},
		{
			day: 'Jueves 9 hasta Sábado 11\nDe 10:30 a 17:30 horas',
			events: [
				{
					id: 'r@stros',
					name: 'R@stros',
					subTitle: {},
					category: 'Exposición de Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [],
					description:
						'A través de un profundo trabajo curatorial realizado por José de Nordenflycht, Doctor en Historia del Arte de la Universidad de Granada y director del departamento de Artes Integradas de la Universidad de Playa Ancha de Valparaíso, se construyó la exposición de artes visuales “R@stros”, en las que participan obras elegidas de ocho artistas visuales de diferentes comunas de la región de Coquimbo, con el fin de representar de alguna forma la territorialidad y la diversidad de expresiones que existen en nuestra región.\nLas/os artistas que participan son los siguientes:',
					list: [
						{ title: 'Mauricio Álvarez Collao, artista visual de Los Vilos', text: [] },
						{ title: 'Claudia Campos Mendoza, artista visual de Illapel', text: [] },
						{ title: 'Paz Alvial Reculé, artista visual de La Serena', text: [] },
						{ title: 'Claudia Suárez Jansson, artista visual de Coquimbo', text: [] },
						{ title: 'Aude Gutiérrez Barraza, artista visual de Vicuña', text: [] },
						{ title: 'Mauricio Toro Goya, fotógrafo y artista visual de Coquimbo', text: [] },
						{ title: 'Tatiana Alfaro Chávez, fotógrafa y artista visual de La Serena', text: [] },
						{ title: 'Oskar Huerta, fotógrafo y artista visual de Ovalle', text: [] }
					]
				}
			]
		},
		{
			day: '',
			events: [
				{
					id: 'mauricio-álvarez-collao',
					name: 'Mauricio Álvarez Collao',
					subTitle: { title: '', text: 'Artista visual de Los Vilos' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [
						{ name: 'instagram', url: 'https://www.instagram.com/mauricioalvarezcollao/?hl=es' },
						{ name: 'facebook', url: 'https://www.facebook.com/macollao/' }
					],
					description:
						'Mi labor como artista visual, desde el año 1993, ha tenido una trayectoria ascendente, logrando realizar una gran cantidad de exposiciones colectivas y más de una docena de muestras individuales, además he obtenido numerosos reconocimientos en concursos de pintura y Fondos de Cultura, entre los que destacan: 3 veces ganador del premio Ricardo Andwanter, ganador del premio Sergio Mortecinos en el concurso internacional de pintura “Valdivia y su rio”, primer premio de la región metropolitana en el concurso de la Cámara de Diputados, primer premio en el concurso “Gabriela Mistral” en La Serena, entre otros. También ejecuté dos proyectos financiados por los Fondos Bicentenario de la Municipalidad de Maipú.\nParalelo a la labor creativa, he desarrollado una amplia labor formativa en talleres de pintura, expresión mural y fotografía en instituciones públicas y privadas, desde el año 1995, actualmente realizo el taller de pintura municipal en Los Vilos.',
					list: []
				},
				{
					id: 'claudia-campos-mendoza',
					name: 'Claudia Campos Mendoza',
					subTitle: { title: '', text: 'Artista visual de Illapel' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [
						{ name: 'instagram', url: 'https://www.instagram.com/artistaclaudiacampos/?hl=es' },
						{ name: 'facebook', url: 'https://www.facebook.com/claudiaangelica.camposmendoza' }
					],
					description:
						'Estudia Licenciatura en Arte, mención en Dibujo en la Pontificia Universidad Católica de Santiago. Después de titularse, en 1996, se radica en la región de Coquimbo, ejerciendo su oficio en diversos ámbitos como la docencia, ilustración de libros, ejecutora de proyectos artísticos y exposiciones individuales y colectivas.\nEn 2013, se lanza el libro “Arte y Cultura Diaguita Chilena”, de la arqueóloga Paola González, en el que la artista visual se encarga de ilustrar su contenido, con 401 diseños diaguita a mano alzada, con la técnica de acuarela pastosa sobre papel. A partir de esta experiencia, Campos se ha dedicado a profundizar en la temática ancestral a través de la recreación artística de distintas técnicas y formatos, apostando siempre a la construcción de propuestas artísticas, que contribuyen a generar identidad y arraigo nacional.',
					list: []
				},
				{
					id: 'paz-alvial-reculé',
					name: 'Paz Alvial Reculé',
					subTitle: { title: '', text: 'Artista visual de La Serena' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [{ name: 'web', url: ' http://pazalvial.blogspot.com/' }],
					description:
						'Comienza su formación artística, estudiando tres años de arquitectura en las Universidades Católica de Valparaíso y Andrés Bello en Santiago. Posteriormente, estudia y se recibe como Licenciada en Arte de la Pontificia Universidad Católica de Chile.\nA lo largo de sus años de ejercicio, se ha dedicado a la pintura en acrílico y óleo principalmente y, además, ha incursionado en libros de artistas e instalaciones. Tras una serie de exposiciones colectivas en La Serena y Coquimbo, el año 2001 participa en el 2° Circuito del Arte “Valle de Elqui”, con una serie de paisajes de la región de Coquimbo, que se exhiben en diferentes espacios, como la Municipalidad de Paihuano, Casa de la Cultura del Molle, Museo de Gualliguaica y Museo Gabriela Mistral en Vicuña.\nEn 2002, expone individualmente “Paisaje Interior”, en la Galería Carmen Codoceo, donde profundiza la temática del paisaje y también desarrolla la exposición individual  “Desnudos Interiores”, invitada por la Universidad Católica del Norte, en la Casa de la Cultura de Coquimbo, donde presenta una serie de desnudos femeninos.\nEn mayo de 2003, participa en la muestra colectiva “Pintoras del Norte Verde”, en la Casa de la Cultura Anahuac, del Parque Metropolitano en Santiago. En estas presentó trabajos con la figura humana, mostrando una fuerte filiación con el post impresionismo y el neo expresionismo.\nEl año 2006 participa con su libro de artista, “Memorial”, en la exposición colectiva itinerante “Fuori Luogo/Out of Place” 7ª, instancia que estuvo presente en diferentes espacios de Italia, como la Biblioteca Casanatense, en Roma; el Centro Per L`Arte Contemporánea Luigi Pecci, en Prato; en Biblioteca Cívica Bertoliana, en Vicenza y en el Museo MART, de Rovereto. Además, en 2007, participa con su libro de artista, “Letras de un Naufragio, en “Islands” 8ª Versión de Libro de Artista, donde vuelve a presentarse en la capital italiana.\nEn 2008 se adjudica el proyecto Fondart Regional, “Retratos de mujer”, que se exhibe en la sala Gabriela Mistral y posteriormente en el Museo del Limarí.\nMás adelante, participa en diversas exposiciones colectivas en la región de Coquimbo, entre ellas el Salón de Julio de 2017, organizado por la Universidad Católica del Norte, junto con presentarse individualmente en el Centro Musicartes, en diciembre de 2016.\nParalelamente a su trabajo creativo, Paz se forma como psicóloga y profundiza en arteterapia y musicoterapia, integrándolas en su trabajo de atención clínica y educacional. Desde 2015 a la fecha trabaja en el Programa de Acompañamiento y Acceso Efectivo a la Educación Superior de la Universidad Católica del Norte.',
					list: []
				},
				{
					id: 'claudia-suárez-jansson',
					name: 'Claudia Suárez Jansson',
					subTitle: { title: '', text: 'Artista visual de Coquimbo' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [
						{ name: 'web', url: 'https://www.claudiasuarezjansson.com/' },
						{ name: 'instagram', url: 'https://www.instagram.com/claudiasuarezartistavisual/' },
						{ name: 'facebook', url: 'https://www.facebook.com/claudiasuarezartistavisual' }
					],
					description:
						'Licenciada en Arte con mención en Pintura de la Pontificia Universidad Católica de Chile, Diplomado en Educación Superior UST 2010, Diplomado en Gestión Cultural Territorial UCN 2017 y Premio Regional de las Culturas, las Artes y el Patrimonio 2022.\n‍El redescubrir algunas labores estigmatizadas al sexo femenino como tejer, bordar, coser, cocinar, entre otros, la lleva a utilizarlas como herramientas para desarrollar su obra como artista y también como aporte social. No es casual que estos oficios textiles sean el medio para hablar de temáticas de género, estas labores han sido vistas como oficios y artes menores por un largo período, son realizadas en la intimidad y silencio de los hogares cuando las otras tareas ya están realizadas. El elegir este oficio para realizar su obra pone en valor el rol de las mujeres durante la historia de las comunidades y su conformación, las matriarcas, las abuelas, las hechiceras y curanderas.\n‍Con su obra pretende cuestionar los roles de género impuestos, invita a la reflexión acerca del Deber Ser Mujer en esta sociedad, a partir de su propia experiencia como hija, mujer y madre, narra una especie de bitácora de vida a través de su trabajo, haciendo pública su intimidad, temores y cuestionamientos. Apropiándose de su territorio/cuerpo que habita, su territorio doméstico y finalmente el territorio geográfico, su flora y fauna nativa. El habitar respetuoso con nuestro entorno y los seres con quienes lo compartimos.\n‍Tras un largo período de trabajar desde el territorio inmediato, nuestro cuerpo y entorno doméstico, paradojalmente durante el año 2020 en confinamiento, busca reconocer y dar visibilidad a las organizaciones comunitarias y vecinales lideradas por mujeres que conforman las Ollas Comunes de la conurbación La Serena/Coquimbo, ollas comunes que son el reflejo de una realidad que hicimos invisible. Buscando en su imaginario y recuerdos de su infancia en la década de los 80 y la significancia que ellas tenían para las comunidades, vinculando este imaginario a las canciones infantiles y a los objetos utilitarios que reconoce.\n‍Develar lo oculto, lo que no queremos ver, darle visibilidad a lo que nos molesta o incomoda, insectos con los que no queremos habitar, las malezas de nuestro jardín, los pelos, el hambre, las necesidades, la menstruación, nuestros cuerpos y sus formas diversas de habitarlo.',
					list: []
				},
				{
					id: 'aude-gutiérrez-barraza',
					name: 'Aude Gutiérrez Barraza',
					subTitle: { title: '', text: 'Artista visual de Vicuña' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [
						{ name: 'web', url: 'http://audegutierrezb.blogspot.com/' },
						{ name: 'instagram', url: 'https://www.instagram.com/audegutierrezb/?hl=es' }
					],
					description:
						'Su formación profesional la realizó en Dinamarca, Francia y Alemania. Ha presentado numerosas exposiciones colectivas e individuales a nivel nacional, en las principales ciudades de la región de Coquimbo, así como en el exterior.\nColecciones privadas de arte en: España, Dinamarca, Alemania, Francia, Argentina, Estados Unidos, México y Chile. Estudios de pintura, cerámica, fotografía en Dinamarca; taller de grabado en Madrid, España y en Ruan, Francia.',
					list: []
				},
				{
					id: 'mauricio-toro-goya',
					name: 'Mauricio Toro Goya',
					subTitle: { title: '', text: 'Fotógrafo y Artista visual de Coquimbo' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [{ name: 'instagram', url: 'https://www.instagram.com/torogoya/?hl=es' }],
					description:
						'Nacido en Vallenar en 1970, Mauricio Toro Goya vive en Coquimbo, donde ha desarrollado un importante trabajo como fotógrafo y como agente dinamizador cultural. Se ha vinculado a la fotografía desde su niñez, pues fue en su propia casa donde tomó contacto con los procedimientos químicos e hizo su rito de iniciación en el cuarto oscuro.\nDesde muy joven mantiene contacto con Sergio Larraín, el gran fotógrafo referencial chileno, quien pasó las últimas décadas en su exilio místico en el interior de la misma región. A través de un sostenido contacto epistolar, el chileno de Magnum ejerce sobre Toro Goya un papel de guía y maestro.\nPosteriormente, en México, perfecciona la técnica decimonónica del ambrotipo con el maestro Waldemaro Concha, antropólogo y fotógrafo.\nHa realizado más de 40 exposiciones, entre individuales y colectivas, en Latinoamérica Estados Unidos, Asia y Europa, y ha publicado al menos 21 libros con su obra.\nLa obra de Mauricio Toro Goya viene definida por dos constantes que se repiten a lo largo de sus series fotográficas: el uso de procedimientos antiguos, comúnmente el ambrotipo –que tuvo una gran vigencia entre 1852 y 1865-, abordados desde una lógica contemporánea, y el desarrollo de temáticas específicas que se manifiestan a través de puestas en escena de carácter alegórico.\nCon una vocación revisionista de toda la tradición iconográfica latinoamericana, muy especialmente la de matriz religiosa, su obra se construye por una serie de elementos cuidadosamente elegidos que se entremezclan para elaborar una compleja crítica social, histórica, cultural, económica y política que pone en cuestionamiento y tensa los discursos hegemónicos. A través del desnudo, la evocación ritual, el discurso político, la presencia a menudo desdramatizada y festiva de la muerte, la omnipresencia animal o los elementos propios de la cultura de masas y el consumo, su obra se hace cargo de la brutalidad y la violencia que esconden los procesos históricos que dan lugar a la identidad latinoamericana y a la conformación de las historias nacionales.\nLa tradición oral popular, las leyendas, los mitos, las construcciones literarias están entre sus fuentes de inspiración.',
					list: []
				},
				{
					id: 'tatiana-alfaro-chávez',
					name: 'Tatiana Alfaro Chávez',
					subTitle: { title: '', text: 'Fotógrafa y Artista visual de La Serena' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [
						{ name: 'instagram', url: 'https://www.instagram.com/noisyeyesimagen/?hl=es' },
						{ name: 'facebook', url: 'https://www.facebook.com/talleralfafotoartestatiana/' }
					],
					description:
						'Nacida en el campamento minero de Chuquicamata, al norte de Chile (actualmente deshabitado), lugar en donde vivió hasta los siete años. Tras la muerte de su padre en 1987, se traslada junto a su madre a la ciudad de La Serena, Chile.\nSus padres y ancestros son originarios de la región de Coquimbo, de los valles del Limarí y de Elqui, y el 2019 es reconocida legalmente como descendiente diaguita por parte de su lado paterno.\nSu inquietud por las artes visuales comienza en su adolescencia, motivada por sus propios cuestionamientos e ideales rupturistas de las normas tradicionales dada por la sociedad de consumo, que la lleva a una búsqueda más profunda de su propia identidad.\nEn el año 2002, toma la decisión de trasladarse a Viña del Mar para estudiar la carrera Técnica de Fotografía en el CFT Ciartes Incacea, con el fin de profundizar sus inquietudes y desarrollar una mirada artística.\nDesde el 2004 sus obras han sido presentadas en diversas exposiciones colectivas en Chile, tal como Valparaíso, Punta Arenas, Santiago, Concepción, Antofagasta, La Serena, Coquimbo y Ovalle.\nHa destacado su participación en actividades organizadas en festivales como FIFV, FOCCO Y ARC en Chile. Además, ha desarrollado varios proyectos como gestora y co-ejecutora de proyectos financiados por el FONDART Regional y Nacional.\nTambién ha sido cofundadora del colectivo VAF (Viceral Acción Fotográfica) y Colectivo FIRC (Fotógrafos independientes de la región de Coquimbo).',
					list: []
				},
				{
					id: 'oskar-huerta',
					name: 'Oskar Huerta',
					subTitle: { title: '', text: 'Fotógrafo y Artista visual de Ovalle' },
					category: 'Artes Visuales',
					time: '',
					image: {
						url: '/municipal/los-pasos-de-selena.jpg',
						alt: 'Imagen del documental El Arte del Tiempo'
					},
					links: [
						{
							name: 'web',
							url: 'https://juanpablomartinezhuerta.weebly.com/juan-pablo-martiacutenez.html'
						},
						{ name: 'instagram', url: 'https://www.instagram.com/oskarhuertafoto/?hl=es' }
					],
					description:
						'Vive y trabaja en Ovalle (1977). Licenciado en Fotografía Publicitaria en el instituto Incacea/Ciartes, donde recibe formación académica de parte de Jorge Gronemeyer, Gastón Salas y Alonso Yañez, entre otros (Viña del Mar 2005).\nSeleccionado en residencias y talleres con Claudi Carrera (España), Eunice Adorno (México), Luis Gonzales Palma (Guatemala), Fernando Montiel Klint (México), Carla Moller (Chile), Pio Figueiroa (Brasil), Bertrand Meunier (Francia) y Daniel Sosa (Uruguay).\nHa participado en diversas exposiciones colectivas, desde el año 2004 en Valparaíso, Viña del Mar, La Serena y Coquimbo, exponiendo, entre otros lugares, en el Parque Cultural ex Cárcel, como parte de las actividades del Festival Internacional de Fotografía de Valparaíso 2013 con exposición Utopía Colectiva (Valparaíso), Centro Cultural Iglesia Santa Inés con obra Habitat (La Serena) , Centro Cultural Palace, con obra Ciudad Fisura y Casa de las Artes, con obra Memoria Sensorial (Coquimbo).',
					list: []
				}
			]
		}
	]
}
