import React from 'react';
import SectionHeading from "../SectionHeading";
import WorkshopItem from '../WorkshopItem';
import attendedWorkshops from './attendedWorkshops';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Workshops = () => {
    const navigate = useNavigate();
    return (
        <div className="workshops-section">
            <SectionHeading title="Workshops" />
            <ul className="workshops-list">
                {attendedWorkshops.map((ws, idx) => (
                    <li key={ws.id || idx}>
                        <WorkshopItem
                            id={ws.id}
                            image={ws.image}
                            name={ws.title}
                            description={ws.description}
                            keyActivities={ws.keyActivities}
                            keyTakeaways={ws.keyTakeaways}
                            techStack={ws.techStack}
                            link={ws.credentials}
                            onMoreInfoClick={() => navigate(`/workshops/${ws.id}`)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Workshops;
