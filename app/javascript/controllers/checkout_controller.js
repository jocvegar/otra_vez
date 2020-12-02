import { Controller } from "stimulus"
import 'choices.js/public/assets/scripts/choices.min.js'
import 'choices.js/public/assets/styles/choices.min.css'

let municipioChoices = null

export default class extends Controller {
	static targets = ["departamentoInput", "municipio"]

	connect() {
		municipioChoices = new Choices(this.municipioTarget, {
			classNames: {
			    containerInner: 'standardHeight',
			}
		});

		const departamento = this.departamentoInputTarget.value
		const selectedMuni = this.municipioTarget.dataset.municipio
		this.handleMunicipioChoices(municipioChoices, this.municipioOptions(departamento, selectedMuni))
	}

	disconnect() {
		municipioChoices.destroy()
	}

	handleDepartmentChange() {
		const departamento = this.departamentoInputTarget.value
		const selectedMuni = this.municipioTarget.dataset.municipio
		this.handleMunicipioChoices(municipioChoices, this.municipioOptions(departamento, selectedMuni))
	}

	handleMunicipioChoices(municipioChoices, choices) {
		municipioChoices.clearChoices();
		municipioChoices.setChoices(choices)
	}

		municipioOptions(departamento, selectedMuni) {
			let values;

			switch(departamento) {
			  	case "atlántida":
				    values = [
					    {
					    	value: 'la_ceiba',
					    	label: 'La Ceiba',
					    	selected: selectedMuni === 'la_ceiba'

					    },
					    {
					    	value: 'tela',
					    	label: 'Tela',
					    	selected: selectedMuni === 'tela',
					    },
					    {
					    	value: 'jutiapa',
					    	label: 'Jutiapa',
					    	selected: selectedMuni === 'jutiapa',
					    },
					    {
					    	value: 'la_masica',
					    	label: 'La Masica',
					    	selected: selectedMuni === 'la_masica',
					    },
					    {
					    	value: 'san_francisco',
					    	label: 'San Francisco',
					    	selected: selectedMuni === 'san_francisco',
					    },
					    {
					    	value: 'arizona',
					    	label: 'Arizona',
					    	selected: selectedMuni === 'arizona',
					    },
					    {
					    	value: 'esparta',
					    	label: 'Esparta',
					    	selected: selectedMuni === 'esparta',
					    },
					    {
					    	value: 'el_porvenir',
					    	label: 'El Porvenir',
					    	selected: selectedMuni === 'el_porvenir',
					    }
				    ]
			    	break;
			  	case "choluteca":
				    values = [
					    {
					    	value: 'choluteca',
					    	label: 'Choluteca',
					    	selected: selectedMuni === 'choluteca'
					    },
					    {
					    	value: 'apacilagua',
					    	label: 'Apacilagua',
					    	selected: selectedMuni === 'apacilagua',
					    },
					    {
					    	value: 'concepción_de_maría',
					    	label: 'Concepción de María',
					    	selected: selectedMuni === 'concepción_de_maría',
					    },
					    {
					    	value: 'duyure',
					    	label: 'Duyure',
					    	selected: selectedMuni === 'duyure',
					    },
					    {
					    	value: 'el_corpus',
					    	label: 'El Corpus',
					    	selected: selectedMuni === 'el_corpus',
					    },
					    {
					    	value: 'el_triunfo',
					    	label: 'El Triunfo',
					    	selected: selectedMuni === 'el_triunfo',
					    },
					    {
					    	value: 'marcovia',
					    	label: 'Marcovia',
					    	selected: selectedMuni === 'marcovia',
					    },
					    {
					    	value: 'morolica',
					    	label: 'Morolica',
					    	selected: selectedMuni === 'morolica',
					    },
					    {
					    	value: 'namasigue',
					    	label: 'Namasigue',
					    	selected: selectedMuni === 'namasigue',
					    },
					    {
					    	value: 'orocuina',
					    	label: 'Orocuina',
					    	selected: selectedMuni === 'orocuina',
					    },
					    {
					    	value: 'pespire',
					    	label: 'Pespire',
					    	selected: selectedMuni === 'pespire',
					    },
					    {
					    	value: 'san_antonio_de_flores',
					    	label: 'San Antonio de Flores',
					    	selected: selectedMuni === 'san_antonio_de_flores',
					    },
					    {
					    	value: 'san_isidro',
					    	label: 'San Isidro',
					    	selected: selectedMuni === 'san_isidro',
					    },
					    {
					    	value: 'san_josé',
					    	label: 'San José',
					    	selected: selectedMuni === 'san_josé',
					    },
					    {
					    	value: 'san_marcos_de_Colón',
					    	label: 'San Marcos de Colón',
					    	selected: selectedMuni === 'san_marcos_de_Colón',
					    },
					    {
					    	value: 'santa_ana_de_yusguare',
					    	label: 'Santa Ana de Yusguare',
					    	selected: selectedMuni === 'santa_ana_de_yusguare',
					    }
					]
			    	break;
		      	case "colón":
		    	    values = [
		    		    {
		    		    	value: 'trujillo',
		    		    	label: 'Trujillo',
		    		    	selected: selectedMuni === 'trujillo'
		    		    },
		    		    {
		    		    	value: 'balfate',
		    		    	label: 'Balfate',
		    		    	selected: selectedMuni === 'balfate'
		    		    },
		    		    {
		    		    	value: 'iriona',
		    		    	label: 'Iriona',
		    		    	selected: selectedMuni === 'iriona'
		    		    },
		    		    {
		    		    	value: 'limón',
		    		    	label: 'Limón',
		    		    	selected: selectedMuni === 'limón'
		    		    },
		    		    {
		    		    	value: 'sabá',
		    		    	label: 'Sabá',
		    		    	selected: selectedMuni === 'sabá'
		    		    },
		    		    {
		    		    	value: 'santa_fe',
		    		    	label: 'Santa Fe',
		    		    	selected: selectedMuni === 'santa_fe'
		    		    },
		    		    {
		    		    	value: 'santa_rosa_de_aguán',
		    		    	label: 'Santa Rosa de Aguán',
		    		    	selected: selectedMuni === 'santa_rosa_de_aguán'
		    		    },
		    		    {
		    		    	value: 'sonaguera',
		    		    	label: 'Sonaguera',
		    		    	selected: selectedMuni === 'sonaguera'
		    		    },
		    		    {
		    		    	value: 'tocoa',
		    		    	label: 'Tocoa',
		    		    	selected: selectedMuni === 'tocoa'
		    		    },
		    		    {
		    		    	value: 'bonito_oriental',
		    		    	label: 'Bonito Oriental',
		    		    	selected: selectedMuni === 'bonito_oriental'
		    		    }
		    		]
		        	break;
		        case "comayagua":
	        	    values = [
	        	    	{
	        	    		value: 'comayagua',
	        	    		label: 'Comayagua',
	        	    		selected: selectedMuni === 'comayagua'
	        	    	},
	        	    	{
	        	    		value: 'ajuterique',
	        	    		label: 'Ajuterique',
	        	    		selected: selectedMuni === 'ajuterique'
	        	    	},
	        	    	{
	        	    		value: 'el_rosario',
	        	    		label: 'El Rosario',
	        	    		selected: selectedMuni === 'el_rosario'
	        	    	},
	        	    	{
	        	    		value: 'esquías',
	        	    		label: 'Esquías',
	        	    		selected: selectedMuni === 'esquías'
	        	    	},
	        	    	{
	        	    		value: 'humuya',
	        	    		label: 'Humuya',
	        	    		selected: selectedMuni === 'humuya'
	        	    	},
	        	    	{
	        	    		value: 'la_libertad',
	        	    		label: 'La libertad',
	        	    		selected: selectedMuni === 'la_libertad'
	        	    	},
	        	    	{
	        	    		value: 'lamaní',
	        	    		label: 'Lamaní',
	        	    		selected: selectedMuni === 'lamaní'
	        	    	},
	        	    	{
	        	    		value: 'la_trinidad',
	        	    		label: 'La Trinidad',
	        	    		selected: selectedMuni === 'la_trinidad'
	        	    	},
	        	    	{
	        	    		value: 'lejamani',
	        	    		label: 'Lejamani',
	        	    		selected: selectedMuni === 'lejamani'
	        	    	},
	        	    	{
	        	    		value: 'meambar',
	        	    		label: 'Meambar',
	        	    		selected: selectedMuni === 'meambar'
	        	    	},
	        	    	{
	        	    		value: 'minas_de_oro',
	        	    		label: 'Minas de Oro',
	        	    		selected: selectedMuni === 'minas_de_oro'
	        	    	},
	        	    	{
	        	    		value: 'ojos_de_agua',
	        	    		label: 'Ojos de Agua',
	        	    		selected: selectedMuni === 'ojos_de_agua'
	        	    	},
	        	    	{
	        	    		value: 'san_jerónimo_(honduras)',
	        	    		label: 'San Jerónimo (Honduras)',
	        	    		selected: selectedMuni === 'san_jerónimo_(honduras)'
	        	    	},
	        	    	{
	        	    		value: 'san_josé_de_comayagua',
	        	    		label: 'San José de Comayagua',
	        	    		selected: selectedMuni === 'san_josé_de_comayagua'
	        	    	},
	        	    	{
	        	    		value: 'san_josé_del_potrero',
	        	    		label: 'San José del Potrero',
	        	    		selected: selectedMuni === 'san_josé_del_potrero'
	        	    	},
	        	    	{
	        	    		value: 'san_luis',
	        	    		label: 'San Luis',
	        	    		selected: selectedMuni === 'san_luis'
	        	    	},
	        	    	{
	        	    		value: 'san_sebastián',
	        	    		label: 'San Sebastián',
	        	    		selected: selectedMuni === 'san_sebastián'
	        	    	},
	        	    	{
	        	    		value: 'siguatepeque',
	        	    		label: 'Siguatepeque',
	        	    		selected: selectedMuni === 'siguatepeque'
	        	    	},
	        	    	{
	        	    		value: 'villa_de_san_antonio',
	        	    		label: 'Villa de San Antonio',
	        	    		selected: selectedMuni === 'villa_de_san_antonio'
	        	    	},
	        	    	{
	        	    		value: 'las_lajas',
	        	    		label: 'Las Lajas',
	        	    		selected: selectedMuni === 'las_lajas'
	        	    	},
	        	    	{
	        	    		value: 'taulabé',
	        	    		label: 'Taulabé',
	        	    		selected: selectedMuni === 'taulabé'
	        	    	}
	        		]
	            	break;
		        case "copán":
	        	    values = [
	        	    	{
	        	    	 	value: "santa_rosa_de_copán",
	        	    		label: "Santa Rosa de Copán",
	        	    		selected: selectedMuni === "santa_rosa_de_copán"
	        	    	},
	        	    	{
	        	    		value: "cabañas",
	        	    		label: "Cabañas",
	        	    		selected: selectedMuni === "cabañas"
	        	    	},
	        	    	{
	        	    		value: "concepción",
	        	    		label: "Concepción",
	        	    		selected: selectedMuni === "concepción"
	        	    	},
	        	    	{
	        	    		value: "copán_ruinas",
	        	    		label: "Copán Ruinas",
	        	    		selected: selectedMuni === "copán_ruinas"
	        	    	},
	        	    	{
	        	    		value: "corquín",
	        	    		label: "Corquín",
	        	    		selected: selectedMuni === "corquín"
	        	    	},
	        	    	{
	        	    		value: "cucuyagua",
	        	    		label: "Cucuyagua",
	        	    		selected: selectedMuni === "cucuyagua"
	        	    	},
	        	    	{
	        	    		value: "dolores",
	        	    		label: "Dolores",
	        	    		selected: selectedMuni === "dolores"
	        	    	},
	        	    	{
	        	    		value: "dulce_nombre",
	        	    		label: "Dulce Nombre",
	        	    		selected: selectedMuni === "dulce_nombre"
	        	    	},
	        	    	{
	        	    		value: "el_paraíso",
	        	    		label: "El Paraíso",
	        	    		selected: selectedMuni === "el_paraíso"
	        	    	},
	        	    	{
	        	    		value: "florida",
	        	    		label: "Florida",
	        	    		selected: selectedMuni === "florida"
	        	    	},
	        	    	{
	        	    		value: "la_jigua",
	        	    		label: "La Jigua",
	        	    		selected: selectedMuni === "la_jigua"
	        	    	},
	        	    	{
	        	    		value: "la_unión",
	        	    		label: "La Unión",
	        	    		selected: selectedMuni === "la_unión"
	        	    	},
	        	    	{
	        	    		value: "nueva_arcadia",
	        	    		label: "Nueva Arcadia",
	        	    		selected: selectedMuni === "nueva_arcadia"
	        	    	},
	        	    	{
	        	    		value: "san_agustín",
	        	    		label: "San Agustín",
	        	    		selected: selectedMuni === "san_agustín"
	        	    	},
	        	    	{
	        	    		value: "san_antonio",
	        	    		label: "San Antonio",
	        	    		selected: selectedMuni === "san_antonio"
	        	    	},
	        	    	{
	        	    		value: "san_jerónimo",
	        	    		label: "San Jerónimo",
	        	    		selected: selectedMuni === "san_jerónimo"
	        	    	},
	        	    	{
	        	    		value: "san_josé",
	        	    		label: "San José",
	        	    		selected: selectedMuni === "san_josé"
	        	    	},
	        	    	{
	        	    		value: "san_juan_de_opoa",
	        	    		label: "San Juan de Opoa",
	        	    		selected: selectedMuni === "san_juan_de_opoa"
	        	    	},
	        	    	{
	        	    		value: "san_nicolás",
	        	    		label: "San Nicolás",
	        	    		selected: selectedMuni === "san_nicolás"
	        	    	},
	        	    	{
	        	    		value: "san_pedro",
	        	    		label: "San Pedro",
	        	    		selected: selectedMuni === "san_pedro"
	        	    	},
	        	    	{
	        	    		value: "santa_rita",
	        	    		label: "Santa Rita",
	        	    		selected: selectedMuni === "santa_rita"
	        	    	},
	        	    	{
	        	    		value: "trinidad_de_copán",
	        	    		label: "Trinidad de Copán",
	        	    		selected: selectedMuni === "trinidad_de_copán"
	        	    	},
	        	    	{
	        	    		value: "veracruz",
	        	    		label: "Veracruz",
	        	    		selected: selectedMuni === "veracruz"
	        	    	}
	        	   	]
	        	   	break;
		        case "cortés":
	        	    values = [
		        	    {	value: "san_pedro_sula",
		        	    	label: "San Pedro Sula",
		        	    	selected: selectedMuni === "san_pedro_sula"
		        	    },
		        	    {	value: "choloma",
		        	    	label: "Choloma",
		        	    	selected: selectedMuni === "choloma"
		        	    },
		        	    {	value: "omoa",
		        	    	label: "Omoa",
		        	    	selected: selectedMuni === "omoa"
		        	    },
		        	    {	value: "pimienta",
		        	    	label: "Pimienta",
		        	    	selected: selectedMuni === "pimienta"
		        	    },
		        	    {	value: "potrerillos",
		        	    	label: "Potrerillos",
		        	    	selected: selectedMuni === "potrerillos"
		        	    },
		        	    {	value: "puerto_cortés",
		        	    	label: "Puerto Cortés",
		        	    	selected: selectedMuni === "puerto_cortés"
		        	    },
		        	    {	value: "san_antonio_de_cortés",
		        	    	label: "San Antonio de Cortés",
		        	    	selected: selectedMuni === "san_antonio_de_cortés"
		        	    },
		        	    {	value: "san_francisco_de_yojoa",
		        	    	label: "San Francisco de Yojoa",
		        	    	selected: selectedMuni === "san_francisco_de_yojoa"
		        	    },
		        	    {	value: "san_manuel",
		        	    	label: "San Manuel",
		        	    	selected: selectedMuni === "san_manuel"
		        	    },
		        	    {	value: "santa_cruz_de_yojoa",
		        	    	label: "Santa Cruz de Yojoa",
		        	    	selected: selectedMuni === "santa_cruz_de_yojoa"
		        	    },
		        	    {	value: "villanueva",
		        	    	label: "Villanueva",
		        	    	selected: selectedMuni === "villanueva"
		        	    },
		        	    {	value: "la_lima",
		        	    	label: "La Lima",
		        	    	selected: selectedMuni === "la_lima"
		        	    }
	        	    ]
	        	    break;
		        case "el_paraíso":
	        	    values = [
	        	    	{	value: "yuscarán",
	        	    		label: "Yuscarán",
	        	    		selected: selectedMuni === "yuscarán"
	        	    	},
	        	    	{	value: "alauca",
	        	    		label: "Alauca",
	        	    		selected: selectedMuni === "alauca"
	        	    	},
	        	    	{	value: "danlí",
	        	    		label: "Danlí",
	        	    		selected: selectedMuni === "danlí"
	        	    	},
	        	    	{	value: "el_paraíso",
	        	    		label: "El Paraíso",
	        	    		selected: selectedMuni === "el_paraíso"
	        	    	},
	        	    	{	value: "güinope",
	        	    		label: "Güinope",
	        	    		selected: selectedMuni === "güinope"
	        	    	},
	        	    	{	value: "jacaleapa",
	        	    		label: "Jacaleapa",
	        	    		selected: selectedMuni === "jacaleapa"
	        	    	},
	        	    	{	value: "liure",
	        	    		label: "Liure",
	        	    		selected: selectedMuni === "liure"
	        	    	},
	        	    	{	value: "morocelí",
	        	    		label: "Morocelí",
	        	    		selected: selectedMuni === "morocelí"
	        	    	},
	        	    	{	value: "oropolí",
	        	    		label: "Oropolí",
	        	    		selected: selectedMuni === "oropolí"
	        	    	},
	        	    	{	value: "potrerillos",
	        	    		label: "Potrerillos",
	        	    		selected: selectedMuni === "potrerillos"
	        	    	},
	        	    	{	value: "san_antonio_de_flores",
	        	    		label: "San Antonio de Flores",
	        	    		selected: selectedMuni === "san_antonio_de_flores"
	        	    	},
	        	    	{	value: "san_lucas",
	        	    		label: "San Lucas",
	        	    		selected: selectedMuni === "san_lucas"
	        	    	},
	        	    	{	value: "san_matías",
	        	    		label: "San Matías",
	        	    		selected: selectedMuni === "san_matías"
	        	    	},
	        	    	{	value: "soledad",
	        	    		label: "Soledad",
	        	    		selected: selectedMuni === "soledad"
	        	    	},
	        	    	{	value: "teupasenti",
	        	    		label: "Teupasenti",
	        	    		selected: selectedMuni === "teupasenti"
	        	    	},
	        	    	{	value: "texiguat",
	        	    		label: "Texiguat",
	        	    		selected: selectedMuni === "texiguat"
	        	    	},
	        	    	{	value: "vado_ancho",
	        	    		label: "Vado Ancho",
	        	    		selected: selectedMuni === "vado_ancho"
	        	    	},
	        	    	{	value: "yauyupe",
	        	    		label: "Yauyupe",
	        	    		selected: selectedMuni === "yauyupe"
	        	    	},
	        	    	{	value: "trojes",
	        	    		label: "Trojes",
	        	    		selected: selectedMuni === "trojes"
	        	    	}
	        	    ]
	        	    break;
		        case "francisco_morazán":
		    	    values = [
			    	    {
			    	    	value: "distrito_central",
			    	    	label: "Distrito Central",
			    	    	selected: selectedMuni === "distrito_central"
			    	    },
			    	    {
			    	    	value: "alubarén",
			    	    	label: "Alubarén",
			    	    	selected: selectedMuni === "alubarén"
			    	    },
			    	    {
			    	    	value: "cedros",
			    	    	label: "Cedros",
			    	    	selected: selectedMuni === "cedros"
			    	    },
			    	    {
			    	    	value: "curarén",
			    	    	label: "Curarén",
			    	    	selected: selectedMuni === "curarén"
			    	    },
			    	    {
			    	    	value: "el_porvenir",
			    	    	label: "El Porvenir",
			    	    	selected: selectedMuni === "el_porvenir"
			    	    },
			    	    {
			    	    	value: "guaimaca",
			    	    	label: "Guaimaca",
			    	    	selected: selectedMuni === "guaimaca"
			    	    },
			    	    {
			    	    	value: "la_libertad",
			    	    	label: "La Libertad",
			    	    	selected: selectedMuni === "la_libertad"
			    	    },
			    	    {
			    	    	value: "la_venta",
			    	    	label: "La Venta",
			    	    	selected: selectedMuni === "la_venta"
			    	    },
			    	    {
			    	    	value: "lepaterique",
			    	    	label: "Lepaterique",
			    	    	selected: selectedMuni === "lepaterique"
			    	    },
			    	    {
			    	    	value: "maraita",
			    	    	label: "Maraita",
			    	    	selected: selectedMuni === "maraita"
			    	    },
			    	    {
			    	    	value: "marale",
			    	    	label: "Marale",
			    	    	selected: selectedMuni === "marale"
			    	    },
			    	    {
			    	    	value: "nueva_armenia",
			    	    	label: "Nueva Armenia",
			    	    	selected: selectedMuni === "nueva_armenia"
			    	    },
			    	    {
			    	    	value: "ojojona",
			    	    	label: "Ojojona",
			    	    	selected: selectedMuni === "ojojona"
			    	    },
			    	    {
			    	    	value: "orica",
			    	    	label: "Orica",
			    	    	selected: selectedMuni === "orica"
			    	    },
			    	    {
			    	    	value: "reitoca",
			    	    	label: "Reitoca",
			    	    	selected: selectedMuni === "reitoca"
			    	    },
			    	    {
			    	    	value: "sabanagrande",
			    	    	label: "Sabanagrande",
			    	    	selected: selectedMuni === "sabanagrande"
			    	    },
			    	    {
			    	    	value: "san_antonio_de_oriente",
			    	    	label: "San Antonio de Oriente",
			    	    	selected: selectedMuni === "san_antonio_de_oriente"
			    	    },
			    	    {
			    	    	value: "san_buenaventura",
			    	    	label: "San Buenaventura",
			    	    	selected: selectedMuni === "san_buenaventura"
			    	    },
			    	    {
			    	    	value: "san_ignacio",
			    	    	label: "San Ignacio",
			    	    	selected: selectedMuni === "san_ignacio"
			    	    },
			    	    {
			    	    	value: "san_juan_de_flores",
			    	    	label: "San Juan de Flores",
			    	    	selected: selectedMuni === "san_juan_de_flores"
			    	    },
			    	    {
			    	    	value: "san_miguelito",
			    	    	label: "San Miguelito",
			    	    	selected: selectedMuni === "san_miguelito"
			    	    },
			    	    {
			    	    	value: "santa_ana",
			    	    	label: "Santa Ana",
			    	    	selected: selectedMuni === "santa_ana"
			    	    },
			    	    {
			    	    	value: "santa_lucía",
			    	    	label: "Santa Lucía",
			    	    	selected: selectedMuni === "santa_lucía"
			    	    },
			    	    {
			    	    	value: "talanga",
			    	    	label: "Talanga",
			    	    	selected: selectedMuni === "talanga"
			    	    },
			    	    {
			    	    	value: "tatumbla",
			    	    	label: "Tatumbla",
			    	    	selected: selectedMuni === "tatumbla"
			    	    },
			    	    {
			    	    	value: "valle_de_ángeles",
			    	    	label: "Valle de Ángeles",
			    	    	selected: selectedMuni === "valle_de_ángeles"
			    	    },
			    	    {
			    	    	value: "villa_de_san_francisco",
			    	    	label: "Villa de San Francisco",
			    	    	selected: selectedMuni === "villa_de_san_francisco"
			    	    },
			    	    {
			    	    	value: "vallecillo",
			    	    	label: "Vallecillo",
			    	    	selected: selectedMuni === "vallecillo"
			    	    }

		    	    ]
		    	    break;
		    	case "gracias_a_dios":
		    		values = [
			    		{
			    			value: "puerto_lempira",
			    			label: "Puerto Lempira",
			    			selected: selectedMuni === "puerto_lempira"
			    		},
			    		{
			    			value: "brus_laguna",
			    			label: "Brus Laguna",
			    			selected: selectedMuni === "brus_laguna"
			    		},
			    		{
			    			value: "ahuas",
			    			label: "Ahuas",
			    			selected: selectedMuni === "ahuas"
			    		},
			    		{
			    			value: "juan_francisco_bulnes",
			    			label: "Juan Francisco Bulnes",
			    			selected: selectedMuni === "juan_francisco_bulnes"
			    		},
			    		{
			    			value: "ramón_villeda_morales",
			    			label: "Ramón Villeda Morales",
			    			selected: selectedMuni === "ramón_villeda_morales"
			    		},
			    		{
			    			value: "wampusirpe",
			    			label: "Wampusirpe",
			    			selected: selectedMuni === "wampusirpe"
			    		}
		    		]
		    		break;
		    	case "intibucá":
		    		values = [
			    		{
			    			value: "la_esperanza",
			    			label: "La Esperanza",
			    			selected: selectedMuni === "la_esperanza"
			    		},
			    		{
			    			value: "camasca",
			    			label: "Camasca",
			    			selected: selectedMuni === "camasca"
			    		},
			    		{
			    			value: "colomoncagua",
			    			label: "Colomoncagua",
			    			selected: selectedMuni === "colomoncagua"
			    		},
			    		{
			    			value: "concepción",
			    			label: "Concepción",
			    			selected: selectedMuni === "concepción"
			    		},
			    		{
			    			value: "dolores",
			    			label: "Dolores",
			    			selected: selectedMuni === "dolores"
			    		},
			    		{
			    			value: "intibucá",
			    			label: "Intibucá",
			    			selected: selectedMuni === "intibucá"
			    		},
			    		{
			    			value: "jesús_de_otoro",
			    			label: "Jesús de Otoro",
			    			selected: selectedMuni === "jesús_de_otoro"
			    		},
			    		{
			    			value: "magdalena",
			    			label: "Magdalena",
			    			selected: selectedMuni === "magdalena"
			    		},
			    		{
			    			value: "masaguara",
			    			label: "Masaguara",
			    			selected: selectedMuni === "masaguara"
			    		},
			    		{
			    			value: "san_antonio",
			    			label: "San Antonio",
			    			selected: selectedMuni === "san_antonio"
			    		},
			    		{
			    			value: "san_isidro",
			    			label: "San Isidro",
			    			selected: selectedMuni === "san_isidro"
			    		},
			    		{
			    			value: "san_juan",
			    			label: "San Juan",
			    			selected: selectedMuni === "san_juan"
			    		},
			    		{
			    			value: "san_marcos_de_la_sierra",
			    			label: "San Marcos de la Sierra",
			    			selected: selectedMuni === "san_marcos_de_la_sierra"
			    		},
			    		{
			    			value: "san_miguel_guancapla",
			    			label: "San Miguel Guancapla",
			    			selected: selectedMuni === "san_miguel_guancapla"
			    		},
			    		{
			    			value: "santa_lucía",
			    			label: "Santa Lucía",
			    			selected: selectedMuni === "santa_lucía"
			    		},
			    		{
			    			value: "yamaranguila",
			    			label: "Yamaranguila",
			    			selected: selectedMuni === "yamaranguila"
			    		},
			    		{
			    			value: "san_francisco_de_opalaca",
			    			label: "San Francisco de Opalaca",
			    			selected: selectedMuni === "san_francisco_de_opalaca"
			    		}
		    		]
		    		break;
		    	case "islas_de_la_bahía":
		    		values = [
			    		{
			    			value: "roatán",
			    			label: "Roatán",
			    			selected: selectedMuni === "roatán"
			    		},
			    		{
			    			value: "guanaja",
			    			label: "Guanaja",
			    			selected: selectedMuni === "guanaja"
			    		},
			    		{
			    			value: "josé_santos_guardiola",
			    			label: "José Santos Guardiola",
			    			selected: selectedMuni === "josé_santos_guardiola"
			    		},
			    		{
			    			value: "utila",
			    			label: "Utila",
			    			selected: selectedMuni === "utila"
			    		}
		    		]
		    		break;
		    	case "la_paz":
		    		values = [
		    			{
		    				value: "la_paz",
		    				label: "La Paz",
		    				selected: selectedMuni === "la_paz"
		    			},
		    			{
		    				value: "aguanqueterique",
		    				label: "Aguanqueterique",
		    				selected: selectedMuni === "aguanqueterique"
		    			},
		    			{
		    				value: "cabañas",
		    				label: "Cabañas",
		    				selected: selectedMuni === "cabañas"
		    			},
		    			{
		    				value: "cane",
		    				label: "Cane",
		    				selected: selectedMuni === "cane"
		    			},
		    			{
		    				value: "chinacla",
		    				label: "Chinacla",
		    				selected: selectedMuni === "chinacla"
		    			},
		    			{
		    				value: "guajiquiro",
		    				label: "Guajiquiro",
		    				selected: selectedMuni === "guajiquiro"
		    			},
		    			{
		    				value: "lauterique",
		    				label: "Lauterique",
		    				selected: selectedMuni === "lauterique"
		    			},
		    			{
		    				value: "marcala",
		    				label: "Marcala",
		    				selected: selectedMuni === "marcala"
		    			},
		    			{
		    				value: "mercedes_de_oriente",
		    				label: "Mercedes de Oriente",
		    				selected: selectedMuni === "mercedes_de_oriente"
		    			},
		    			{
		    				value: "opatoro",
		    				label: "Opatoro",
		    				selected: selectedMuni === "opatoro"
		    			},
		    			{
		    				value: "san_antonio_del_norte",
		    				label: "San Antonio del Norte",
		    				selected: selectedMuni === "san_antonio_del_norte"
		    			},
		    			{
		    				value: "san_josé",
		    				label: "San José",
		    				selected: selectedMuni === "san_josé"
		    			},
		    			{
		    				value: "san_juan",
		    				label: "San Juan",
		    				selected: selectedMuni === "san_juan"
		    			},
		    			{
		    				value: "san_pedro_de_tutule",
		    				label: "San Pedro de Tutule",
		    				selected: selectedMuni === "san_pedro_de_tutule"
		    			},
		    			{
		    				value: "santa_ana",
		    				label: "Santa Ana",
		    				selected: selectedMuni === "santa_ana"
		    			},
		    			{
		    				value: "santa_elena",
		    				label: "Santa Elena",
		    				selected: selectedMuni === "santa_elena"
		    			},
		    			{
		    				value: "santa_maría",
		    				label: "Santa María",
		    				selected: selectedMuni === "santa_maría"
		    			},
		    			{
		    				value: "santiago_de_puringla",
		    				label: "Santiago de Puringla",
		    				selected: selectedMuni === "santiago_de_puringla"
		    			},
		    			{
		    				value: "yarula",
		    				label: "Yarula",
		    				selected: selectedMuni === "yarula"
		    			}
		    		]
		    		break;
		    	case "lempira":
		    		values = [
		    			{
		    				value: "gracias",
		    				label: "Gracias",
		    				selected: selectedMuni === "gracias"
		    			},
		    			{
		    				value: "belén",
		    				label: "Belén",
		    				selected: selectedMuni === "belén"
		    			},
		    			{
		    				value: "candelaria",
		    				label: "Candelaria",
		    				selected: selectedMuni === "candelaria"
		    			},
		    			{
		    				value: "cololaca",
		    				label: "Cololaca",
		    				selected: selectedMuni === "cololaca"
		    			},
		    			{
		    				value: "erandique",
		    				label: "Erandique",
		    				selected: selectedMuni === "erandique"
		    			},
		    			{
		    				value: "gualcince",
		    				label: "Gualcince",
		    				selected: selectedMuni === "gualcince"
		    			},
		    			{
		    				value: "guarita",
		    				label: "Guarita",
		    				selected: selectedMuni === "guarita"
		    			},
		    			{
		    				value: "la_campa",
		    				label: "La Campa",
		    				selected: selectedMuni === "la_campa"
		    			},
		    			{
		    				value: "la_iguala",
		    				label: "La Iguala",
		    				selected: selectedMuni === "la_iguala"
		    			},
		    			{
		    				value: "las_flores",
		    				label: "Las Flores",
		    				selected: selectedMuni === "las_flores"
		    			},
		    			{
		    				value: "la_unión",
		    				label: "La Unión",
		    				selected: selectedMuni === "la_unión"
		    			},
		    			{
		    				value: "la_virtud",
		    				label: "La Virtud",
		    				selected: selectedMuni === "la_virtud"
		    			},
		    			{
		    				value: "lepaera",
		    				label: "Lepaera",
		    				selected: selectedMuni === "lepaera"
		    			},
		    			{
		    				value: "mapulaca",
		    				label: "Mapulaca",
		    				selected: selectedMuni === "mapulaca"
		    			},
		    			{
		    				value: "piraera",
		    				label: "Piraera",
		    				selected: selectedMuni === "piraera"
		    			},
		    			{
		    				value: "san_andrés",
		    				label: "San Andrés",
		    				selected: selectedMuni === "san_andrés"
		    			},
		    			{
		    				value: "san_francisco",
		    				label: "San Francisco",
		    				selected: selectedMuni === "san_francisco"
		    			},
		    			{
		    				value: "san_juan_guarita",
		    				label: "San Juan Guarita",
		    				selected: selectedMuni === "san_juan_guarita"
		    			},
		    			{
		    				value: "san_manuel_colohete",
		    				label: "San Manuel Colohete",
		    				selected: selectedMuni === "san_manuel_colohete"
		    			},
		    			{
		    				value: "san_rafael",
		    				label: "San Rafael",
		    				selected: selectedMuni === "san_rafael"
		    			},
		    			{
		    				value: "san_sebastián",
		    				label: "San Sebastián",
		    				selected: selectedMuni === "san_sebastián"
		    			},
		    			{
		    				value: "santa_cruz",
		    				label: "Santa Cruz",
		    				selected: selectedMuni === "santa_cruz"
		    			},
		    			{
		    				value: "talgua",
		    				label: "Talgua",
		    				selected: selectedMuni === "talgua"
		    			},
		    			{
		    				value: "tambla",
		    				label: "Tambla",
		    				selected: selectedMuni === "tambla"
		    			},
		    			{
		    				value: "tomalá",
		    				label: "Tomalá",
		    				selected: selectedMuni === "tomalá"
		    			},
		    			{
		    				value: "valladolid",
		    				label: "Valladolid",
		    				selected: selectedMuni === "valladolid"
		    			},
		    			{
		    				value: "virginia",
		    				label: "Virginia",
		    				selected: selectedMuni === "virginia"
		    			},
		    			{
		    				value: "san_marcos_de_caiquín",
		    				label: "San Marcos de Caiquín",
		    				selected: selectedMuni === "san_marcos_de_caiquín"
		    			}
		    		]
	        	    break;
		        case "ocotepeque":
	        	    values = [
	        	    	{
	        	    		value: "ocotepeque",
	        	    		label: "Ocotepeque",
	        	    		selected: selectedMuni === "ocotepeque"
	        	    	},
	        	    	{
	        	    		value: "belén_gualcho",
	        	    		label: "Belén Gualcho",
	        	    		selected: selectedMuni === "belén_gualcho"
	        	    	},
	        	    	{
	        	    		value: "concepción",
	        	    		label: "Concepción",
	        	    		selected: selectedMuni === "concepción"
	        	    	},
	        	    	{
	        	    		value: "dolores_merendón",
	        	    		label: "Dolores Merendón",
	        	    		selected: selectedMuni === "dolores_merendón"
	        	    	},
	        	    	{
	        	    		value: "fraternidad",
	        	    		label: "Fraternidad",
	        	    		selected: selectedMuni === "fraternidad"
	        	    	},
	        	    	{
	        	    		value: "la_encarnación",
	        	    		label: "La Encarnación",
	        	    		selected: selectedMuni === "la_encarnación"
	        	    	},
	        	    	{
	        	    		value: "la_labor",
	        	    		label: "La Labor",
	        	    		selected: selectedMuni === "la_labor"
	        	    	},
	        	    	{
	        	    		value: "lucerna",
	        	    		label: "Lucerna",
	        	    		selected: selectedMuni === "lucerna"
	        	    	},
	        	    	{
	        	    		value: "mercedes",
	        	    		label: "Mercedes",
	        	    		selected: selectedMuni === "mercedes"
	        	    	},
	        	    	{
	        	    		value: "san_fernando",
	        	    		label: "San Fernando",
	        	    		selected: selectedMuni === "san_fernando"
	        	    	},
	        	    	{
	        	    		value: "san_francisco_del_valle",
	        	    		label: "San Francisco del Valle",
	        	    		selected: selectedMuni === "san_francisco_del_valle"
	        	    	},
	        	    	{
	        	    		value: "san_jorge",
	        	    		label: "San Jorge",
	        	    		selected: selectedMuni === "san_jorge"
	        	    	},
	        	    	{
	        	    		value: "san_marcos",
	        	    		label: "San Marcos",
	        	    		selected: selectedMuni === "san_marcos"
	        	    	},
	        	    	{
	        	    		value: "santa_fe",
	        	    		label: "Santa Fe",
	        	    		selected: selectedMuni === "santa_fe"
	        	    	},
	        	    	{
	        	    		value: "sensenti",
	        	    		label: "Sensenti",
	        	    		selected: selectedMuni === "sensenti"
	        	    	},
	        	    	{
	        	    		value: "sinuapa",
	        	    		label: "Sinuapa",
	        	    		selected: selectedMuni === "sinuapa"
	        	    	}
	        	    ]
	        	    break;
		        case "olancho":
	        	    values = [
	        	    	{
	        	    		value: "juticalpa",
	        	    		label: "Juticalpa",
	        	    		selected: selectedMuni === "juticalpa"
	        	    	},
	        	    	{
	        	    		value: "campamento",
	        	    		label: "Campamento",
	        	    		selected: selectedMuni === "campamento"
	        	    	},
	        	    	{
	        	    		value: "catacamas",
	        	    		label: "Catacamas",
	        	    		selected: selectedMuni === "catacamas"
	        	    	},
	        	    	{
	        	    		value: "concordia",
	        	    		label: "Concordia",
	        	    		selected: selectedMuni === "concordia"
	        	    	},
	        	    	{
	        	    		value: "dulce_nombre_de_culmí",
	        	    		label: "Dulce Nombre de Culmí",
	        	    		selected: selectedMuni === "dulce_nombre_de_culmí"
	        	    	},
	        	    	{
	        	    		value: "el_rosario",
	        	    		label: "El Rosario",
	        	    		selected: selectedMuni === "el_rosario"
	        	    	},
	        	    	{
	        	    		value: "esquipulas_del_norte",
	        	    		label: "Esquipulas del Norte",
	        	    		selected: selectedMuni === "esquipulas_del_norte"
	        	    	},
	        	    	{
	        	    		value: "gualaco",
	        	    		label: "Gualaco",
	        	    		selected: selectedMuni === "gualaco"
	        	    	},
	        	    	{
	        	    		value: "guarizama",
	        	    		label: "Guarizama",
	        	    		selected: selectedMuni === "guarizama"
	        	    	},
	        	    	{
	        	    		value: "guata",
	        	    		label: "Guata",
	        	    		selected: selectedMuni === "guata"
	        	    	},
	        	    	{
	        	    		value: "guayape",
	        	    		label: "Guayape",
	        	    		selected: selectedMuni === "guayape"
	        	    	},
	        	    	{
	        	    		value: "jano",
	        	    		label: "Jano",
	        	    		selected: selectedMuni === "jano"
	        	    	},
	        	    	{
	        	    		value: "la_unión",
	        	    		label: "La Unión",
	        	    		selected: selectedMuni === "la_unión"
	        	    	},
	        	    	{
	        	    		value: "mangulile",
	        	    		label: "Mangulile",
	        	    		selected: selectedMuni === "mangulile"
	        	    	},
	        	    	{
	        	    		value: "manto",
	        	    		label: "Manto",
	        	    		selected: selectedMuni === "manto"
	        	    	},
	        	    	{
	        	    		value: "salamá",
	        	    		label: "Salamá",
	        	    		selected: selectedMuni === "salamá"
	        	    	},
	        	    	{
	        	    		value: "san_esteban",
	        	    		label: "San Esteban",
	        	    		selected: selectedMuni === "san_esteban"
	        	    	},
	        	    	{
	        	    		value: "san_francisco_de_becerra",
	        	    		label: "San Francisco de Becerra",
	        	    		selected: selectedMuni === "san_francisco_de_becerra"
	        	    	},
	        	    	{
	        	    		value: "san_francisco_de_la_paz",
	        	    		label: "San Francisco de la Paz",
	        	    		selected: selectedMuni === "san_francisco_de_la_paz"
	        	    	},
	        	    	{
	        	    		value: "santa_maría_del_real",
	        	    		label: "Santa María del Real",
	        	    		selected: selectedMuni === "santa_maría_del_real"
	        	    	},
	        	    	{
	        	    		value: "silca",
	        	    		label: "Silca",
	        	    		selected: selectedMuni === "silca"
	        	    	},
	        	    	{
	        	    		value: "yocón",
	        	    		label: "Yocón",
	        	    		selected: selectedMuni === "yocón"
	        	    	},
	        	    	{
	        	    		value: "patuca",
	        	    		label: "Patuca",
	        	    		selected: selectedMuni === "patuca"
	        	    	}
	        	    ]
	        	    break;
		        case "santa_bárbara":
	        	    values = [
	        	    	{
	        	    		value: "santa_bárbara",
	        	    		label: "Santa Bárbara",
	        	    		selected: selectedMuni === "santa_bárbara"
	        	    	},
	        	    	{
	        	    		value: "arada",
	        	    		label: "Arada",
	        	    		selected: selectedMuni === "arada"
	        	    	},
	        	    	{
	        	    		value: "atima",
	        	    		label: "Atima",
	        	    		selected: selectedMuni === "atima"
	        	    	},
	        	    	{
	        	    		value: "azacualpa",
	        	    		label: "Azacualpa",
	        	    		selected: selectedMuni === "azacualpa"
	        	    	},
	        	    	{
	        	    		value: "ceguaca",
	        	    		label: "Ceguaca",
	        	    		selected: selectedMuni === "ceguaca"
	        	    	},
	        	    	{
	        	    		value: "concepción_del_norte",
	        	    		label: "Concepción del Norte",
	        	    		selected: selectedMuni === "concepción_del_norte"
	        	    	},
	        	    	{
	        	    		value: "concepción_del_sur",
	        	    		label: "Concepción del Sur",
	        	    		selected: selectedMuni === "concepción_del_sur"
	        	    	},
	        	    	{
	        	    		value: "chinda",
	        	    		label: "Chinda",
	        	    		selected: selectedMuni === "chinda"
	        	    	},
	        	    	{
	        	    		value: "el_níspero",
	        	    		label: "El Níspero",
	        	    		selected: selectedMuni === "el_níspero"
	        	    	},
	        	    	{
	        	    		value: "gualala",
	        	    		label: "Gualala",
	        	    		selected: selectedMuni === "gualala"
	        	    	},
	        	    	{
	        	    		value: "ilama",
	        	    		label: "Ilama",
	        	    		selected: selectedMuni === "ilama"
	        	    	},
	        	    	{
	        	    		value: "las_vegas",
	        	    		label: "Las Vegas",
	        	    		selected: selectedMuni === "las_vegas"
	        	    	},
	        	    	{
	        	    		value: "macuelizo",
	        	    		label: "Macuelizo",
	        	    		selected: selectedMuni === "macuelizo"
	        	    	},
	        	    	{
	        	    		value: "naranjito",
	        	    		label: "Naranjito",
	        	    		selected: selectedMuni === "naranjito"
	        	    	},
	        	    	{
	        	    		value: "nuevo_celilac",
	        	    		label: "Nuevo Celilac",
	        	    		selected: selectedMuni === "nuevo_celilac"
	        	    	},
	        	    	{
	        	    		value: "nueva_frontera",
	        	    		label: "Nueva Frontera",
	        	    		selected: selectedMuni === "nueva_frontera"
	        	    	},
	        	    	{
	        	    		value: "petoa",
	        	    		label: "Petoa",
	        	    		selected: selectedMuni === "petoa"
	        	    	},
	        	    	{
	        	    		value: "protección",
	        	    		label: "Protección",
	        	    		selected: selectedMuni === "protección"
	        	    	},
	        	    	{
	        	    		value: "quimistán",
	        	    		label: "Quimistán",
	        	    		selected: selectedMuni === "quimistán"
	        	    	},
	        	    	{
	        	    		value: "san_francisco_de_ojuera",
	        	    		label: "San Francisco de Ojuera",
	        	    		selected: selectedMuni === "san_francisco_de_ojuera"
	        	    	},
	        	    	{
	        	    		value: "san_josé_de_las_colinas",
	        	    		label: "San José de las Colinas",
	        	    		selected: selectedMuni === "san_josé_de_las_colinas"
	        	    	},
	        	    	{
	        	    		value: "san_luis",
	        	    		label: "San Luis",
	        	    		selected: selectedMuni === "san_luis"
	        	    	},
	        	    	{
	        	    		value: "san_marcos",
	        	    		label: "San Marcos",
	        	    		selected: selectedMuni === "san_marcos"
	        	    	},
	        	    	{
	        	    		value: "san_nicolás",
	        	    		label: "San Nicolás",
	        	    		selected: selectedMuni === "san_nicolás"
	        	    	},
	        	    	{
	        	    		value: "san_pedro_zacapa",
	        	    		label: "San Pedro Zacapa",
	        	    		selected: selectedMuni === "san_pedro_zacapa"
	        	    	},
	        	    	{
	        	    		value: "san_vicente_centenario",
	        	    		label: "San Vicente Centenario",
	        	    		selected: selectedMuni === "san_vicente_centenario"
	        	    	},
	        	    	{
	        	    		value: "santa_rita",
	        	    		label: "Santa Rita",
	        	    		selected: selectedMuni === "santa_rita"
	        	    	},
	        	    	{
	        	    		value: "trinidad",
	        	    		label: "Trinidad",
	        	    		selected: selectedMuni === "trinidad"
	        	    	}
	        	    ]
	        	    break;
		        case "valle":
	        	    values = [
		        	    {
		        	    	value: "nacaome",
		        	    	label: "Nacaome",
		        	    	selected: selectedMuni === "nacaome"
		        	    },
		        	    {
		        	    	value: "alianza",
		        	    	label: "Alianza",
		        	    	selected: selectedMuni === "alianza"
		        	    },
		        	    {
		        	    	value: "amapala",
		        	    	label: "Amapala",
		        	    	selected: selectedMuni === "amapala"
		        	    },
		        	    {
		        	    	value: "aramecina",
		        	    	label: "Aramecina",
		        	    	selected: selectedMuni === "aramecina"
		        	    },
		        	    {
		        	    	value: "caridad",
		        	    	label: "Caridad",
		        	    	selected: selectedMuni === "caridad"
		        	    },
		        	    {
		        	    	value: "goascorán",
		        	    	label: "Goascorán",
		        	    	selected: selectedMuni === "goascorán"
		        	    },
		        	    {
		        	    	value: "langue",
		        	    	label: "Langue",
		        	    	selected: selectedMuni === "langue"
		        	    },
		        	    {
		        	    	value: "san_francisco_de_coray",
		        	    	label: "San Francisco de Coray",
		        	    	selected: selectedMuni === "san_francisco_de_coray"
		        	    },
		        	    {
		        	    	value: "san_lorenzo",
		        	    	label: "San Lorenzo",
		        	    	selected: selectedMuni === "san_lorenzo"
		        	    }
	        	    ]
	        	    break;
		        case "yoro":
	        	    values = [
		        	    {
		        	    	value: "yoro",
		        	    	label: "Yoro",
		        	    	selected: selectedMuni === "yoro"
		        	    },
		        	    {
		        	    	value: "arenal",
		        	    	label: "Arenal",
		        	    	selected: selectedMuni === "arenal"
		        	    },
		        	    {
		        	    	value: "el_negrito",
		        	    	label: "El Negrito",
		        	    	selected: selectedMuni === "el_negrito"
		        	    },
		        	    {
		        	    	value: "el_progreso",
		        	    	label: "El Progreso",
		        	    	selected: selectedMuni === "el_progreso"
		        	    },
		        	    {
		        	    	value: "jocón",
		        	    	label: "Jocón",
		        	    	selected: selectedMuni === "jocón"
		        	    },
		        	    {
		        	    	value: "morazán",
		        	    	label: "Morazán",
		        	    	selected: selectedMuni === "morazán"
		        	    },
		        	    {
		        	    	value: "olanchito",
		        	    	label: "Olanchito",
		        	    	selected: selectedMuni === "olanchito"
		        	    },
		        	    {
		        	    	value: "santa_rita",
		        	    	label: "Santa Rita",
		        	    	selected: selectedMuni === "santa_rita"
		        	    },
		        	    {
		        	    	value: "sulaco",
		        	    	label: "Sulaco",
		        	    	selected: selectedMuni === "sulaco"
		        	    },
		        	    {
		        	    	value: "victoria",
		        	    	label: "Victoria",
		        	    	selected: selectedMuni === "victoria"
		        	    },
		        	    {
		        	    	value: "yorito",
		        	    	label: "Yorito",
		        	    	selected: selectedMuni === "yorito"
		        	    }
	        	    ]
	        	    break;
			  	default:
			    	values = [
					    {
					    	value: 'sin_departamento',
					    	label: 'Escoger Departamento',
					    	selected: selectedMuni === 'sin_departamento'
					    }
					]
			}
			return values
		}

}
