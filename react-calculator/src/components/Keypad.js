import React from 'react';
import './css/Keypad.css';
import calculate from './Calculator';

class Keypad extends React.Component{

    state ={
        displayValue:"",
        previousValue: "",
        operator: ''
    }

    handleOperator = (e) => {
        e.preventDefault()
        this.setState({displayValue: "", previousValue: this.state.displayValue, operator: e.target.value})
    }

    handleNumber = (e) => {
        e.preventDefault();
        this.setState({displayValue:e.target.value, previousValue: e.target.value} )
    }

    equals = () => {
        const {displayValue, previousValue, operator} = this.state
        let results = calculate(displayValue, previousValue, operator)
        this.setState({displayValue: results})
    }

    acOperator = () => {
        this.setState({displayValue:0,
            previousValue: [],
            operator: ''})
    }

    render(){
        debugger
        console.log(this.state)
        return(
            <div className="keypad">
            <div className="row1">
                <button value="AC" onClick={this.handleNumber}>AC</button>
                <button value="+/-" onClick={this.handleNumber}> +/-</button>
                <button value="/" onClick={this.handleNumber}>/</button>
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
            </div>
        )
    }
}

export default Keypad;