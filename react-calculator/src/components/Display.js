import React from 'react';
import './css/Display.css'

const Display = ({display}) => {

    return (
        <div>
            <p>{display.toLocaleString()}</p>
        </div>
    )
}





export default Result