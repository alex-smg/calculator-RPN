import React from 'react';
import './Board.css';
import NumberButton from "../Button/NumberButton/NumberButton";
import ActionButton from "../Button/ActionButton/ActionButton";
import Screen from "../screen/Screen";

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prePile: null,
            pile: []
        }
        // this.addNumber = this.addNumber.bind(this);
    }

    addNumber = (number) => {
        this.setState((state, props) => ({
            prePile: number,
          }), () => {
            console.log(this.state)
          })
        // TODO: Add multiple "number" to do ONE value
    }

    calculAction () {
        // TODO: execute calcul with 2 last item in this.state.pile (If their is at least 2 item)
        // TODO: Remove the last 2 items from this.state.pile
        // TODO: Add the result to this.state.pile
    }

    enterAction() {
        // TODO: Add this.state.prePile to this.state.pile and clean this.state.prepile
    }

    dropItemAction () {
        // TODO: Drop the last item of this.sate.pile
    }

    swapItemAction () {
    //    TODO: Switch the two last item of this.state.pile
    }

        render() {
            let numbers = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9]
            
            let actions = ['-', '+', '*', '/']

            return (
                <div>
                    <Screen></Screen>   
                    {numbers.map((number, index) => (<NumberButton  key={index} handleClick={() => this.addNumber(number)} value={number} /> )) }
                    { actions.map((action, index) => <ActionButton handleClick={() => this.calculAction()} key={index} value={action} />) }
                    <ActionButton handleClick={() => this.enterAction()} value='enter' />
                    <ActionButton handleClick={() => this.dropItemAction()} value='drop' />
                    <ActionButton handleClick={() => this.swapItemAction()} value='swap' />
                </div>
            );
        }
        
}

export default Board;
