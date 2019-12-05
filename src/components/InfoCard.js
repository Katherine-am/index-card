import React from 'react';
import CardTop from './CardTop';
import CardBody from './CardBody';

const InfoCard = (props) => {
    return (
        <div className="card" style={{width:'18rem'}}>
            <CardTop />
            <CardBody />
        </div>
    )
} 

export default InfoCard;