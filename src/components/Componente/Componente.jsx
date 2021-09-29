import { Component } from 'react';
import './style.css';

class Componente extends Component {
	constructor(props){
		super(props)
		this.state = {
			nombre: "JuanPedroPablo"
		}
		this.setState({nombre:"Demonio"});
	}

	componentDidMount() {
		console.log("El componente '" + this.state.nombre + "' se ha montado correctamente")
	}

	componentDidUpdate() {
		console.log("Algún estado del componente se actualizó")
	}

	shouldComponentUpdate() {
		return true // true por defecto permite re-renderizar, false no
	}

	/*getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(prevProps, prevState)
	}*/
	
	render() {
		return(
			<div>
				<input value={ this.state.nombre } onChange={({ target: {value}}) => this.setState({nombre: value})}/>
			</div>
		)
	};
}

export default Componente