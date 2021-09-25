import logo from './logo.svg';
import './App.css';

function App() {

  const collabs = ["MiduDev", "EdYoda", "UTN FRLP", "Santander"];
  const list_collabs = collabs.map(c => <li>{ c }</li>)

  const alumno = {
    nombre: "Nicolas",
    edad: 26,
    pais: "AR"
  }

  return (
    <div class="App">
      <h1>App en React</h1>

        <p>Esta es mi primera app en React</p>

        <ul>
          <li>Nombre: { alumno.nombre }</li>
          <li>Edad: { alumno.edad } años</li>
          <li>Pais: { alumno.pais }</li>
        </ul>

        <p>Gracias a los tutoriales de:</p>

        <ul>{ list_collabs }</ul>
        
    </div>
  );
}

export default App;
