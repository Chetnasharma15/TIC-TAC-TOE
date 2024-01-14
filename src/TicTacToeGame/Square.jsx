import React from 'react';

const Square= (props) => {
    return (
        <div
           onClick = {props.onClick}
           style={{
            background: "lightcyan",
            color: "blueviolet",
            border: "3px solid violet",
            fontSize: "40px",
	        cursor: "pointer",
            height:"100px", 
            width: "100px", 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
        }}
           className='square'>
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;