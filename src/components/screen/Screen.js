import React from 'react';
import './Screen.css';

function Screen(props) {
    return (
        <div>
            <h3>{ props.val }</h3>
        </div>
    );
}

export default Screen;
