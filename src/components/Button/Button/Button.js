import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div>
            <button onClick={props.handleClick}>{props.value}</button>
        </div>
    );
}

export default Button;
