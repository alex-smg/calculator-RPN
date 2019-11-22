import React from 'react';
import './Board.css';
import NumberButton from "../Button/NumberButton/NumberButton";
import ActionButton from "../Button/ActionButton/ActionButton";
import Screen from "../screen/Screen";

class Board extends React.Component {
        constructor (props) {
            super(props);
            this.state = { prePile: null }
            // this.addNumber = this.addNumber.bind(this);
        }
        addNumber = (number) => {
            this.setState((state, props) => ({
                prePile: number,
              }), () => {
                console.log(this.state)
              })
             
            
            
        }
        testFun(){
            console.log('test');
        }
        render() {
            let numbers = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9]
            
            let actions = ['-', '+', '*', '/', 'enter']

            return (
                <div>
                    <Screen affiche={this.state.prePile}></Screen>   
                    {numbers.map((number, index) => (<NumberButton  key={index} handleClick={() => this.addNumber(number)} value={number} /> )) }
                    { actions.map((action, index) => <ActionButton key={index} value={action} />) }
                </div>
            );
        }
        
}

export default Board;
