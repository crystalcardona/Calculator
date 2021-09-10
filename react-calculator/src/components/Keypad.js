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


    handleOperator = (e) => {
        e.preventDefault()
        this.setState({numberValue: [""], previousValue: this.state.numberValue, operator: e.target.value})
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
                <button value="AC" onClick={this.handleAc}>AC</button>
                <button value="/" onClick={this.handleOperator}>/</button>
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
                <button value="=" onClick={this.handleEquals(previousValue, numberValue, operator)}>=</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Keypad;


{/* <div className="row2">
<button value="7" >7</button>
<button value="8" >8</button>
<button value="9">9</button>
</div> */}




