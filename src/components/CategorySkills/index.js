import React from 'react';
import './index.css';

const CategorySkills = ({ categoryheading, skillsList }) => (
    <div className="category-skills-wrapper">
        <h2 className="category-heading">{categoryheading}</h2>
        <ul className="category-skills-list">
            {skillsList.map(({ name, image }) => (
                <li className="category-skill-item" key={name}>
                    <img src={image} alt={name} className="category-skill-img" />
                    <span className="category-skill-name">{name}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default CategorySkills;
