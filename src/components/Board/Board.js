import React from 'react';
import './Board.css';
import NumberButton from "../Button/NumberButton/NumberButton";
import ActionButton from "../Button/ActionButton/ActionButton";
import Screen from "../screen/Screen";

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prePile: [],
            pile: []
        }
        // this.addNumber = this.addNumber.bind(this);
    }

    addNumber = (number) => {

        let fakePrepile = this.state.prePile;
        console.log(fakePrepile)
        fakePrepile.push(number);
        let prePileJoin = fakePrepile.join('')
        let result = parseInt(prePileJoin, 10)
        
        this.setState((state, props) => ({
            prePile: [result],
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
        if (this.state.prePile){
                let fakeState = this.state.pile;
                fakeState.push(this.state.prePile);
                this.setState((state, props) => ({
                    pile: fakeState,
                    prePile: [],
                }), () => {
                    console.log(this.state)
                })
            
        } else {
            alert('La pile est vide')
        }
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
                    <Screen affiche={this.state.prePile} affichePile={this.state.pile}></Screen>   
                    <div className="clavier">
                        {numbers.map((number, index) => (<NumberButton  key={index} handleClick={() => this.addNumber(number)} value={number} /> )) }
                    </div>
                    { actions.map((action, index) => <ActionButton handleClick={() => this.calculAction()} key={index} value={action} />) }
                    <ActionButton handleClick={() => this.enterAction()} value='enter' />
                    <ActionButton handleClick={() => this.dropItemAction()} value='drop' />
                    <ActionButton handleClick={() => this.swapItemAction()} value='swap' />
                </div>
            );
        }
        
}

export default Board;
