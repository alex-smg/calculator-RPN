import React from 'react';
import './NumberButton.css';

function NumberButton(props) {
    return (
        <div>
            <button onClick={props.handleClick}>{props.value}</button>
        </div>
    );
}

export default NumberButton;
