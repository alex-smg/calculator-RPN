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
            pile: [10, 5, 6] // TODO: Delete this test value
        }
    }

    addNumber = (number) => {
        this.setState((state, props) => ({
            prePile: number,
          }), () => {
            console.log(this.state)
          })
        // TODO: Add multiple "number" to do ONE value
    }

    calculAction =  (action) => {
        let result

        const pile = this.state.pile
        const pileLength = pile.length

        if (pileLength >= 2) {

            const a = pile.pop()
            const b = pile.pop()

            switch (action) {
                case '+':
                    result = b + a
                    break
                case '-':
                    result = b - a
                    break
                case '*':
                    result = b * a
                    break
                case '/':
                    result = b / a
                    break
                default:
                    break
            }

            pile.push(result)

            this.setState( (state, props) => ({
                    pile: pile
                })
            )
        }
    }

    enterAction() {
        // TODO: Add this.state.prePile to this.state.pile and clean this.state.prepile
    }

    dropItemAction () {
        const pile = this.state.pile

        if (pile.length > 0) {
            pile.pop()

            this.setState( (state, props) => ({
                    pile: pile
                })
            )
        }
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
                    { actions.map((action, index) => <ActionButton handleClick={() => this.calculAction(action)} key={index} value={action} />) }
                    <ActionButton handleClick={() => this.enterAction()} value='enter' />
                    <ActionButton handleClick={() => this.dropItemAction()} value='drop' />
                    <ActionButton handleClick={() => this.swapItemAction()} value='swap' />
                </div>
            );
        }
        
}

export default Board;
