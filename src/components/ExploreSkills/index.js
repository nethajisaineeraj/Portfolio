
import './index.css';
import CategorySkills from '../CategorySkills';
import RotatingSkills from '../RotatingSkills';
import dsa from '../../images/dsa.png';
import oracle from '../../images/oracle.jpg';


const programmingSkills = [
    { name: 'C', image: 'https://skillicons.dev/icons?i=c' },
    { name: 'C++', image: 'https://skillicons.dev/icons?i=cpp' },
    { name: 'Python', image: 'https://skillicons.dev/icons?i=py' },
    { name: 'Java', image: 'https://skillicons.dev/icons?i=java' },
    { name: 'Data Structures & Algorithms', image: dsa },
];

const frontendSkills = [
    { name: 'HTML', image: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', image: 'https://skillicons.dev/icons?i=css' },
    { name: 'Bootstrap', image: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'JavaScript', image: 'https://skillicons.dev/icons?i=js' },
    { name: 'React', image: 'https://skillicons.dev/icons?i=react' },
];

const backendSkills = [
    { name: 'Node.js', image: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Express.js', image: 'https://skillicons.dev/icons?i=express' },
    { name: 'Spring & Spring Boot', image: 'https://skillicons.dev/icons?i=spring' },
    { name: 'Spring Data JPA & Hibernate', image: 'https://skillicons.dev/icons?i=hibernate' },
];

const databaseSkills = [
    { name: 'MySQL', image: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'SQLite', image: 'https://skillicons.dev/icons?i=sqlite' },
    { name: 'Oracle', image: oracle },
    { name: 'MongoDB', image: 'https://skillicons.dev/icons?i=mongodb' },
];

const cloudSkills = [
    { name: 'AWS', image: 'https://skillicons.dev/icons?i=aws' },
];

const toolsSkills = [
    { name: 'Git', image: 'https://skillicons.dev/icons?i=git' },
    { name: 'GitHub', image: 'https://skillicons.dev/icons?i=github' },
    { name: 'Postman', image: 'https://skillicons.dev/icons?i=postman' },
    { name: 'VS Code', image: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'Eclipse', image: 'https://skillicons.dev/icons?i=eclipse' },
];

const ExploreSkills = () => (
    <div className='ExploreSkillsMainContainer'>
        <RotatingSkills />
        <div className="show-skills-container">
            <CategorySkills categoryheading="Programming Languages & DSA" skillsList={programmingSkills} />
            <CategorySkills categoryheading="Frontend" skillsList={frontendSkills} />
            <CategorySkills categoryheading="Backend" skillsList={backendSkills} />
            <CategorySkills categoryheading="Databases" skillsList={databaseSkills} />
            <CategorySkills categoryheading="Cloud" skillsList={cloudSkills} />
            <CategorySkills categoryheading="Tools" skillsList={toolsSkills} />
        </div>
    </div>
)

export default ExploreSkills;