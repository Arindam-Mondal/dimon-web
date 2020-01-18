import React from 'react';
import './DimonTank.css';

const DimonTank = (props) => {
    return (
        <>
            <div className="dimon-tank">
                <img src={props.dimonImage} alt="tank" className="dimon-tank-image" />
            </div>
            <div className="dimon-tank-color">{props.dimonTankColor}</div>
        </>
    );
}
export default DimonTank;