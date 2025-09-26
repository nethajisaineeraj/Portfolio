import React, { Component } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import attendedWorkshops from '../Workshops/attendedWorkshops';
import './index.css';

class WorkshopDetails extends Component {
  render() {
    const { id } = this.props; // get id from wrapper
    const workshop = attendedWorkshops.find(ws => ws.id === id);

    if (!workshop) {
      return <Navigate to="/notfound" replace />;
    }

    const { image, title, description, keyActivities, keyTakeaways, techStack, credentials } = workshop;

    return (
      <div className="workshopdetails-modal">
        <Link to="/" className="workshopdetails-close">&times;</Link>
        <img src={image} alt={title} className="workshopdetails-img" />
        <h2 className="workshopdetails-title">{title}</h2>
        <p className="workshopdetails-desc">{description}</p>

        {keyActivities && keyActivities.length > 0 && (
          <div className="workshopdetails-section">
            <h4>Key Activities</h4>
            <ul className="workshopdetails-list">
              {keyActivities.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {keyTakeaways && keyTakeaways.length > 0 && (
          <div className="workshopdetails-section">
            <h4>Key Takeaways</h4>
            <ul className="workshopdetails-list">
              {keyTakeaways.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {techStack && techStack.length > 0 && (
          <div className="workshopdetails-section">
            <h4>Tech Stack</h4>
            <div className="workshopdetails-techs">
              {techStack.map((tech, idx) => <span className="workshopdetails-tech" key={idx}>{tech}</span>)}
            </div>
          </div>
        )}

        {credentials && (
          <a
            className="workshopdetails-credentials"
            href={credentials}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credentials
          </a>
        )}
      </div>
    );
  }
}

// Wrapper functional component to inject params
const WorkshopDetailsWrapper = () => {
  const { id } = useParams();
  return <WorkshopDetails id={id} />;
};

export default WorkshopDetailsWrapper;
