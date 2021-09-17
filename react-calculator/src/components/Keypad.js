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

    convertNegative = (number) => {
        let newNumber = number * -1;
        this.setState({
            numberValue: [newNumber],
            display: newNumber
        })
    }

    convertPercentage = (number) => {
        let newNumber = number / 100
        this.setState({
            numberValue: [newNumber] , 
            display:newNumber
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleOperator = (e) => {
        e.preventDefault()
        this.setState({numberValue: [], previousValue: this.state.numberValue, operator: e.target.value})
        debugger
    }

    handleNumber = (e) => {
        e.preventDefault();
        let currentValue = this.state.numberValue
        currentValue += e.target.value
        this.setState({numberValue:[currentValue], display:currentValue} )
    }

    handleEquals = (numInput1, numInput2, op) => {
        let results = calculate(numInput1, numInput2, op)
        this.setState({display: results})
    }

    handleAc = () => {
        this.setState({numberValue:[],
            previousValue: "",
            operator: "",
            display:null})
    }

    render(){

        let {numberValue, previousValue, operator, display } = this.state

        return(
            <div className="keypad">
            <Display display={display} />
            <form onClick={this.handleSubmit}>
            <div className="row1">
                <button className="ac" value="AC" onClick={this.handleAc}>AC</button>
                <button value="+/-" className="negative" onClick={() => this.convertNegative(numberValue)}>+/-</button>
                <button value="%" className="percentage" onClick={()=>this.convertPercentage(numberValue)}>%</button>
                </div>
                <div className="row2">
                <button value="7" onClick={this.handleNumber}>7</button>
                <button value="8" onClick={this.handleNumber}>8</button>
                <button value="9" onClick={this.handleNumber}>9</button>
                <button value="x" className="multiply" onClick={this.handleOperator}>x</button>
                </div>
                <div className="row3">
                <button value="4" onClick={this.handleNumber}>4</button> 
                <button value="5" onClick={this.handleNumber}>5</button>
                <button value="6" onClick={this.handleNumber}>6</button>
                <button value="-" className="minus" onClick={this.handleOperator} name="-">-</button>
                </div>
                <div className="row4">
                <button value="1" onClick={this.handleNumber}>1</button>
                <button value="2" onClick={this.handleNumber}>2</button>
                <button value="3" onClick={this.handleNumber}>3</button>
                <button value="+" className="plus" onClick={this.handleOperator} >+</button>
                </div>
                <div className="row5">
                <button value="0" onClick={this.handleNumber}>0</button>
                <button value="=" className="equal" onClick={() => this.handleEquals(previousValue, numberValue, operator)}>=</button>
                <button value="/" className="divide" onClick={this.handleOperator}>/</button>
                </div> 
                </form>
            </div>
        )
    }
}

export default Keypad;



