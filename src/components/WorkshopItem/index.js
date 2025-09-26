import React from 'react';

import './index.css';

const WorkshopItem = ({ image, name, description, onMoreInfoClick }) => (
    <div className="workshop-item-card">
        <img src={image} alt={name} className="workshop-item-img" />
        <div className="workshop-item-info">
            <h3 className="workshop-item-name">{name}</h3>
            <p className="workshop-item-desc">{description}</p>
        </div>
        <button className="workshop-item-moreinfo" onClick={onMoreInfoClick}>More Info</button>
    </div>
);

export default WorkshopItem;
