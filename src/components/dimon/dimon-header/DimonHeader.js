import React from 'react';
import './DimonHeader.css';
import dimonImage from '../../../assets/images/dimon-main.jpeg'

const DimonHeader = () => {
    return (
        <div className={"header"}>
            <img src={dimonImage} alt="Nature" className={"header-image"}/>
        </div>
    );
}
export default DimonHeader;