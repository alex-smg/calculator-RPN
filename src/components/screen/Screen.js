import React from 'react';
import './Screen.css';

function Screen(props) {
    return (
        <div className="ecran">
            <h3>{ props.affiche }</h3>
            <ul>{ props.affichePile.map((person, index) => (
                <li>{person}</li>
            ))}</ul>
        </div>
    );
}

export default Screen;
