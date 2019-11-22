import React from 'react';
import './Board.css';
import Button from "../Button/Button/Button";
import Screen from "../screen/Screen";

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prePile: null,
            pile: []
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
        const pile = this.state.pile
        const pileLength = pile.length

        if (pileLength - 1 >= 2) {
            const last = pile[pileLength - 1]
            pile[pileLength - 1] = pile[pileLength - 2]
            pile[pileLength - 2] = last

            this.setState( (state, props) => ({
                    pile: pile
                })
            )
        }
    }

        render() {
            const numbers = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9]
            const actions = ['-', '+', '*', '/']

            return (
                <div>
                    <Screen></Screen>   
                    {numbers.map((number, index) => (<Button key={index} handleClick={() => this.addNumber(number)} value={number} /> )) }
                    { actions.map((action, index) => <Button handleClick={() => this.calculAction(action)} key={index} value={action} />) }
                    <Button handleClick={() => this.enterAction()} value='enter' />
                    <Button handleClick={() => this.dropItemAction()} value='drop' />
                    <Button handleClick={() => this.swapItemAction()} value='swap' />
                </div>
            );
        }
        
}

export default Board;
