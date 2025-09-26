import './index.css';

const RotatingSkills = () => (
    <div className="RotatingSkillsContainer">
        <div className="slider" style={{ "--quantity": 20 }}>
            <div className="item" style={{ "--position": 1 }}>
                <img src="https://skillicons.dev/icons?i=c" alt="c" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
                <img src="https://skillicons.dev/icons?i=cpp" alt="cpp" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
                <img src="https://skillicons.dev/icons?i=py" alt="py" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
                <img src="https://skillicons.dev/icons?i=java" alt="java" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
                <img src="https://skillicons.dev/icons?i=html" alt="html" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
                <img src="https://skillicons.dev/icons?i=css" alt="css" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
                <img src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
                <img src="https://skillicons.dev/icons?i=js" alt="js" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
                <img src="https://skillicons.dev/icons?i=react" alt="react" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
                <img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 11 }}>
                <img src="https://skillicons.dev/icons?i=express" alt="express" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 12 }}>
                <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 13 }}>
                <img src="https://skillicons.dev/icons?i=react" alt="react" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 14 }}>
                <img src="https://skillicons.dev/icons?i=sqlite" alt="sqlite" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 15 }}>
                <img src="https://skillicons.dev/icons?i=vscode" alt="vscode" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 16 }}>
                <img src="https://skillicons.dev/icons?i=aws" alt="aws" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 17 }}>
                <img src="https://skillicons.dev/icons?i=spring" alt="spring" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 18 }}>
                <img src="https://skillicons.dev/icons?i=github" alt="github" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 19 }}>
                <img src="https://skillicons.dev/icons?i=postman" alt="postman" className="skill-image" />
            </div>
            <div className="item" style={{ "--position": 20 }}>
                <img src="https://skillicons.dev/icons?i=git" alt="git" className="skill-image" />
            </div>
        </div>
        <div className='myskills-text-image-container'>
            <h1 className='myskills-heading'>
                <span className='myskills-heading-my'>MY</span>
                <span className='myskills-heading-skills'>SKILLS</span>
            </h1>
            <div className='modal-image'></div>
        </div>
    </div>
)

export default RotatingSkills;