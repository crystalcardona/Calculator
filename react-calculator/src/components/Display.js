import React from 'react';
import './css/Display.css'

const Display = ({display}) => {

    return (
        <div>
            <p>{Number(display).toLocaleString()}</p>
        </div>
    )
}





export default Display; 