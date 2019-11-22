import React from 'react';
import './Board.css';
import NumberButton from "../Button/NumberButton/NumberButton";
import ActionButton from "../Button/ActionButton/ActionButton";

function Board() {

    const numbers = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9]
    const actions = ['-', '+', '*', '/', 'enter']

    return (
        <div>
            { numbers.map(number => <NumberButton value={number} />) }
            { actions.map(action => <ActionButton value={action} />) }
        </div>
    );
}

export default Board;
