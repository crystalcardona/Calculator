
const Calculate = (numInput1, numInput2, operator) => {
        let numberValue = Number(numInput1)
        let previousValue = Number(numInput2)
        if(operator === "x"){
            return multiplicationOperator(numberValue, previousValue)
        }
        else if(operator === "/"){
            return divisionOperator(numberValue, previousValue)
        }
        else if(operator === "-"){
            return minusOperator(numberValue, previousValue)
        }
        else if(operator === "+"){
            return addingOperator(numberValue, previousValue)
        }

    }


    const multiplicationOperator = (numberValue, previousValue) => {
        return  numberValue * previousValue
    }

    const divisionOperator = (numberValue, previousValue) => {
        return numberValue/previousValue
    }

    const addingOperator = (numberValue, previousValue) => {
        return numberValue + previousValue
    }

    const minusOperator = (numberValue, previousValue) => {
        return numberValue - previousValue 
    }




export default Calculate;