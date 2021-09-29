import { useState } from "react";
import Header from './../../components/Header';
import './style.css';

import create from 'zustand';

import card1 from "./../../assets/imgs/card1.jpg";
import card2 from "./../../assets/imgs/card2.jpg";
import card3 from "./../../assets/imgs/card3.jpg";

const array = [
    {key: "1", nombre:"MiduDev"}, 
    {key: "2", nombre:"EdYoda"}, 
    {key: "3", nombre:"UTN FRLP"}, 
    {key: "4", nombre:"Santander"}
];

export default function Home(params) {
   
	const [collabs, ] = useState(array);
	
	const [alumno] = useState({
		nombre: "Nico",
		edad: 26,
		pais: "AR",
	});

	function presentarse() {
		return <h3>Hola, soy { alumno.nombre } y este es mi primer React</h3>
	}

	function mostrarColaboradores() {
		return(<ul> { collabs.map((c, index) => <li key={c.key}>{ c.nombre }</li>) } </ul>)
	}

    function Card({text, img}) {
        let url = "./src/assets/imgs/" + img + ".jpg"
        console.log(url)
        return (
            <div className="card">
                { text }
                <hr/>
                <img alt="" src={ img } className="card-image"/>
            </div>
        )
    }
	
    return (
        <div className="body">
            <Header />
            <div className="body-container">
                { presentarse() }
                { mostrarColaboradores() }
                <Card 
                    text="Mi nombre es Nicolás, y soy un apasionado de la ciencia y la astronomía" 
                    img={card1}
                />
                <Card 
                    text="Desde la secundaria me gustó el desarrollo de videojuegos, hoy apunto al machine learning o ciencia de datos" 
                    img={card2}
                />
                <Card 
                    text="Me gusta disfrutar de la naturaleza, el deporte y los vínculos que voy creando con la gente que me rodea" 
                    img={card3}
                />

            </div>
        </div>
    )
}