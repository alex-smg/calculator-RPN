import React from 'react';
import './ActionButton.css';

function ActionButton(props) {
    return (
        <div>
            <button>{props.value}</button>
        </div>
    );
}

export default ActionButton;
