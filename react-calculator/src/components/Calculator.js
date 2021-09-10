import React from 'react';


const Calculate = (numInput1, numInput2, operator) => {
        let numInp1 = Number(numInput1)
        let numInp2 = Number(numInput2)
        if(operator === "x"){
            multiplicationOperator(numInp1, numInp2)
        }
        else if(operator === "/"){
            divisionOperator(numInp1, numInp2)
        }
        else if(operator === "-"){
            minusOperator(numInp1, numInp2)
        }
        else if(operator === "+"){
            addingOperator(numInp1, numInp2)
        }

    }


    const multiplicationOperator = (displayValue, previousValue) => {
        return  displayValue * previousValue
    }

    const divisionOperator = (displayValue, previousValue) => {
        return displayValue/previousValue
    }

    const addingOperator = (displayValue, previousValue) => {
        return displayValue + previousValue
    }

    const minusOperator = (displayValue, previousValue) => {
        return displayValue - previousValue 
    }




export default Calculate;