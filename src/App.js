import React from 'react';
//import ReactDOM from 'react-dom';
import { useState } from 'react';
//import { useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Componente from './components/Componente/Componente';
import Constante from './components/Constante/Constante';

const App = () => {

	const [collabs, ] = useState(["MiduDev", "EdYoda", "UTN FRLP", "Santander"]);
	
	const [alumno] = useState({
		nombre: "Nico",
		edad: 26,
		pais: "AR",
	});

	function presentarse() {
		return "Hola, soy " + alumno.nombre + " y esta es mi primera web con React"
	}

	function mostrarColaboradores() {
		return(<ul> { collabs.map((c, key) => <li>{ c }</li>) } </ul>)
	}

	// Ejemplo funcional (de preferencia) con desestructuración de EM6
	function HolaNombre({nombre, pais}) {
		return <div>
			<h2>Hola { nombre }!, eres de { pais }?</h2>
			<h4>(ejemplo con function)</h4>
		</div>
	}	

	return (
	<div class="App">
			
		<Header />
		
		
		<div className="body-container">
			<Componente />
			<Constante />
			<HolaNombre nombre="Nico" pais="Arg" />
			<h3>{ presentarse() }</h3>
			<ul>
				<li>Nombre: { alumno.nombre }</li>
				<li>Edad: { alumno.edad } años</li>
				<li>Pais: { alumno.pais }</li>
			</ul>

			<p>Gracias a los tutoriales de:</p>
			{ mostrarColaboradores() }

		</div>
		
	</div>
	);
}

export default App;
