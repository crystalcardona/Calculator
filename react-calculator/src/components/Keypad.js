import React from 'react';
import './css/Keypad.css';
import Display from './Display'
import calculate from './Calculator';

class Keypad extends React.Component{

    state ={
        numberValue:[],
        previousValue: "",
        operator: "",
        display: 0
    }

    convertNumber = (number) => {
        let newNumber = -Math.abs(number);
        this.setState({
            numberValue: [newNumber],
            display: newNumber
        })
    }

    clearKeypad = () => {
        this.setState({
            display: '0'
        })
    }


    handleOperator = (e) => {
        e.preventDefault()
        this.setState({numberValue: [""], previousValue: this.state.numberValue, operator: e.target.value})
    }

    handleNumber = (e) => {
        e.preventDefault();
        let currentValue = this.state.numberValue
        currentValue += e.target.value
        this.setState({numberValue:[currentValue], previousValue: currentValue} )
    }

    equals = () => {
        const {displayValue, previousValue, operator} = this.state
        let results = calculate(displayValue, previousValue, operator)
        this.setState({numberValue: results})
    }

    acOperator = () => {
        this.setState({numberValue:0,
            previousValue: [],
            operator: ''})
    }

    render(){
        debugger
        let {numberValue, previousValue, operator, display } = this.state
        console.log(this.state)
        return(
            <div className="keypad">
            <Display display={display} />
            <form>
            <div className="row1">
                {/* <button value="AC" onClick={this.handl}>AC</button> */}
                <button value="+/-"> +/-</button>
                <button value="/">/</button>
            </div>
            <div className="row2">
                <button value="7" onClick={this.handleNumber}>7</button>
                <button value="8" onClick={this.handleNumber}>8</button>
                <button value="9" onClick={this.handleNumber}>9</button>
                <button value="x" name="x" onClick={this.handleOperator}>X</button>
            </div>
            <div className="row3">
                <button value="4" onClick={this.handleNumber}>4</button> 
                <button value="5" onClick={this.handleNumber}>5</button>
                <button value="6" onClick={this.handleNumber}>6</button>
                <button value="-" onClick={this.handleOperator} name="-">-</button>
            </div>
            <div className="row4">
                <button value="1" onClick={this.handleNumber}>1</button>
                <button value="2" onClick={this.handleNumber}>2</button>
                <button value="3" onClick={this.handleNumber}>3</button>
                <button value="+" name="+" onClick={this.handleOperator} >+</button>
            </div>
            <div className="row5">
                <button value="0" onClick={this.handleNumber}>0</button>
                <button value="=" name="=" onClick={this.equals}>=</button>
            </div>
            </form>
            </div>
        )
    }
}

export default Keypad;