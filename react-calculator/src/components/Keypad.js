import React from 'react';
import './css/Keypad.css';

class Keypad extends React.Component{


    render(){
        debugger
        return(
            <div className="keypad">
            <div className="row1">
                <button name="AC" onClick={e => this.props.OnClick(e.target.name)}>AC</button>
                <button name="%" onClick={e => this.props.OnClick(e.target.name)}>%</button>
                <button name="+/-" onClick={e => this.props.OnClick(e.target.name)}> +/-</button>
                <button id="divide" name="/" onClick={e => this.props.OnClick(e.target.name)}><span>&#247;</span></button>
            </div>
            <div className="row2">
                <button name="7" onClick={e => this.props.OnClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.OnClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.OnClick(e.target.name)}>9</button>
                <button id="multiply" name="multiply" onClick={e => this.props.OnClick(e.target.name)}>X</button>
            </div>
            <div className="row3">
                <button name="4" onClick={e => this.props.OnClick(e.target.name)}>4</button> 
                <button name="5" onClick={e => this.props.OnClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.OnClick(e.target.name)}>6</button>
                <button id="minus" onClick={e => this.props.OnClick(e.target.name)}name="-">-</button>
            </div>
            <div className="row4">
                <button name="1" onClick={e => this.props.OnClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.OnClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.OnClick(e.target.name)}>3</button>
                <button id="plus" name="+" onClick={e => this.props.OnClick(e.target.name)} >+</button>
            </div>
            <div className="row5">
                <button name="0" onClick={e => this.props.OnClick(e.target.name)}>0</button>
                <button name="." onClick={e => this.props.OnClick(e.target.name)}>.</button>
                <button id="equal" name="=" onClick={e => this.props.OnClick(e.target.name)}>=</button>
            </div>
            </div>
        )
    }
}

export default Keypad;