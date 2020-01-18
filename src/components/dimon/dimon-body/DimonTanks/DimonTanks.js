import React from 'react';
import './DimonTanks.css';
import DimonTank from './DimonTank/DimonTank';
import DimonTankImages from './DimonTankImages'

const DimonTanks = (props) => {
    return (
        <div className="dimon-tanks container">
            <div className="row tanks-heading"><font>Products</font></div>
            <div className="row">
                {DimonTankImages.map((dimonTankImage) => {
                    return <div className="col-4 col-md-2 dimon-tank-col"><DimonTank dimonImage={dimonTankImage.image} dimonTankColor={dimonTankImage.imageColor}/></div>
                })}
            </div>
        </div>
    );
}
export default DimonTanks;