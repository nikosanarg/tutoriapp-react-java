import React from 'react';
import './../../App.css';
import './../Header/style.css';
class Header extends React.Component {

    render() {
        return (
            <div className="header" id="header">
                <h1>Reactpp</h1>
                <h3>... y a futuro Java</h3>
            </div>
        )
    } 
}

export default Header;