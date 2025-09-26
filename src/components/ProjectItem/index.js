
import { MdArrowOutward } from "react-icons/md";
import Popup from 'reactjs-popup';
import './index.css';

const ProjectItem = ({ image, title, description, technologies, link, moredescription, sourcecodelink }) => (
    <div className="project-item-card">
        <img src={image} alt={title} className="project-item-img" />
        <div className="project-item-info">
            <h3 className="project-item-title">{title}</h3>
            <p className="project-item-desc">{description}</p>
            <div className="project-item-techs">
                {technologies.map((tech) => (
                    <span className="project-item-tech" key={tech}>{tech}</span>
                ))}
            </div>
        </div>
        <Popup
            trigger={<button className="project-item-moreinfo">More Info</button>}
            modal
            closeOnDocumentClick
        >
            {close => (
                <div className="project-popup-modal">
                    <button className="project-popup-close" onClick={close}>&times;</button>
                    <h2 className="project-popup-title">{title}</h2>
                    <p className="project-popup-desc">{description}</p>
                    <div className="project-popup-techs">
                        {technologies.map((tech) => (
                            <span className="project-popup-tech" key={tech}>{tech}</span>
                        ))}
                    </div>
                    {moredescription && Array.isArray(moredescription) && (
                        <ul className="project-popup-points">
                            {moredescription.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    )}
                    {sourcecodelink && (
                        <a className="project-popup-link" href={sourcecodelink} target="_blank" rel="noopener noreferrer">GitHub Source Code</a>
                    )}
                </div>
            )}
        </Popup>
        <button
            className="project-item-arrow"
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
            aria-label="View Project"
        >
            <span><MdArrowOutward /></span>
        </button>

    </div>
);

export default ProjectItem;
