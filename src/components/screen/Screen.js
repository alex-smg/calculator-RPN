import React from 'react';
import './Screen.css';

function Screen(props) {
    return (
        <div className="ecran">
            <h3>{ props.affiche }</h3>
            <h4>{ props.affichePile}</h4>
        </div>
    );
}

export default Screen;
