import React from 'react';
import './DimonBody.css';
import DimonTanks from './DimonTanks/DimonTanks';

const DimonBody = (props) => {
    return (
        <div className="dimon-body">
            <DimonTanks/>
        </div>
    );
}
export default DimonBody;