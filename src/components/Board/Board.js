import React from 'react';
import './Board.css';
import Button from "../Button/Button/Button";
import Screen from "../screen/Screen";

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prePile: [],
            pile: []
        }
    }

    addNumber = (number) => {

        let fakePrepile = this.state.prePile;

        let prePileJoin = `${fakePrepile}${number}`;
        let result = parseInt(prePileJoin, 10);

        this.setState((state, props) => ({
            prePile: result,
          }), () => {
            console.log(this.state)
          })
        // TODO: Add multiple "number" to do ONE value
    };

    calculAction =  (action) => {
        let result;

        const pile = this.state.pile;
        const pileLength = pile.length;

        if (pileLength >= 2) {

            const a = pile.pop();
            const b = pile.pop();

            switch (action) {
                case '+':
                    result = b + a;
                    break;
                case '-':
                    result = b - a;
                    break;
                case '*':
                    result = b * a;
                    break;
                case '/':
                    result = b / a;
                    break;
                default:
                    break;
            }

            pile.push(result);

            this.setState( (state, props) => ({
                    pile: pile
                })
            )
        }
    }

    enterAction() {
        // TODO: Add this.state.prePile to this.state.pile and clean this.state.prepile
        if (this.state.prePile){
                let fakeState = this.state.pile;
                fakeState.push(this.state.prePile);
                this.setState((state, props) => ({
                    pile: fakeState,
                    prePile: '',
                }), () => {
                    console.log(this.state)
                })

        } else {
            alert('La pile est vide')
        }
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
    deleteItemAction() {
        const prepile = this.state.prePile.toString();
        const prePileDelete = prepile.substring(0,prepile.length-1);
        const result = parseInt(prePileDelete, 10);
        console.log(prePileDelete);
        this.setState((state, props) => ({
            prePile: result,
        }), () => {
            console.log(this.state.prePile);
        })
    }

        render() {
            const numbers = [9,8,7,6,5,4,3,2,1,0];
            const actions = ['-', '+', '*', '/'];

            return (
                <div className="calculatrice">
                    <Screen affiche={this.state.prePile} affichePile={this.state.pile}></Screen>
                    <div className="clavier">
                     { numbers.map((number, index) => (<Button key={index} handleClick={() => this.addNumber(number)} value={number} /> )) }
                        { actions.map((action, index) => <Button handleClick={() => this.calculAction(action)} key={index} value={action} />) }
                        <Button handleClick={() => this.enterAction()} value='enter' />
                        <Button handleClick={() => this.dropItemAction()} value='drop' />
                        <Button handleClick={() => this.swapItemAction()} value='swap' />
                        <Button handleClick={() => this.deleteItemAction()} value='<-' />
                    </div>
                </div>
            );
        }
        
}

export default Board;
