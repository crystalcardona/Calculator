
const calculate = (numInput1, numInput2, op) => {
        let numberValue = Number(numInput1)
        let previousValue = Number(numInput2)
        if(op === "x"){
            return multiplicationOperator(numberValue, previousValue)
        }
        else if(op === "/"){
            return divisionOperator(numberValue, previousValue)
        }
        else if(op === "-"){
            return minusOperator(numberValue, previousValue)
        }
        else if(op === "+"){
            return addingOperator(numberValue, previousValue)
        }

    }


    const multiplicationOperator = (numberValue, previousValue) => {
        return  numberValue * previousValue
    }

    const divisionOperator = (numberValue, previousValue) => {
        return numberValue / previousValue
    }

    const addingOperator = (numberValue, previousValue) => {
        return numberValue + previousValue
    }

    const minusOperator = (numberValue, previousValue) => {
        return numberValue - previousValue 
    }




export default calculate;