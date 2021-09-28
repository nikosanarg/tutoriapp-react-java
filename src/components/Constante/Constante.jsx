import { useState, useEffect } from 'react';
import './style.css';

const Componente = () => {

	const [nombre, setNombre] = useState("nikosanarg");

    useEffect(() => {
        console.log("Montaje exitoso")
        
        return () => {
            console.log("Fin de la ejecución del efecto")
        } 
    }, [nombre]);
	
	return(
        <div>
			<input onChange={ ( { target: { value } }) => setNombre(value) }/>
		</div>
	)
}

export default Componente