import React from 'react';
import './NumberButton.css';

function NumberButton(props) {
    return (
        <div>
            <button>{props.value}</button>
        </div>
    );
}

export default NumberButton;
