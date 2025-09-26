import SectionHeading from "../SectionHeading";
import './index.css';
import nxttrendz from '../../images/nxttrendz.png';
import socialmediaapi from '../../images/socialmediaapi.png';
import todoslist from '../../images/todoslist.png';
import jobbyapp from '../../images/jobbyapp.png';
import emojigame from '../../images/emojigame.png';
import cricstat from '../../images/cricstat.jpg';
import covid19 from '../../images/covid19.jpg';
import cryptarithmetic from '../../images/cryptarithmetic.png';
import wikipedia from '../../images/wikipedia.png';
import gorestconsole from '../../images/gorestconsole.png';
import ProjectItem from '../ProjectItem';

const AllProjects = [
    {
        title: 'NxtTrendz E-Commerce Application',
        description: 'Developed a feature-rich e-commerce web app applying authentication, routing, and state management principles.',
        technologies: ["React.js", "React Router", "React Context", "CSS(Flexbox)"],
        image: nxttrendz,
        link: 'https://neerajnxttrendz.ccbp.tech/',
        moredescription: [
            "Implemented login/logout, protected routes, and role-based UI for prime vs non-prime users.",
            "Built product listing with search, category & rating filters, and price-based sorting.",
            "Designed a cart system with item quantity updates, bulk removal, and total cart summary."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/NxtTrendz-E-commerce-application.git',
    },
    {
        title: 'Jobby Application',
        description: 'Developed a job search platform enabling users to explore, filter, and apply for jobs with authentication and detailed listings.',
        technologies: ["React.js", "React Router", "JWT Authentication", "CSS(Flexbox)"],
        image: jobbyapp,
        link: 'https://neerajjobbyapp.ccbp.tech/',
        moredescription: [
            "Implemented secure login/logout with JWT-based authentication and protected routes.",
            "Built job listings with keyword search, employment type & salary range filters, and retry on API failure.",
            "Designed a detailed job view with company info, required skills, and similar job suggestions.",
            "Developed a responsive UI with loader, success, failure, and no-results states for seamless user experience."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Jobby-App.git',
    },
    {
        title: 'Emoji Memory Game',
        description: 'Created an interactive memory-based game applying component architecture and responsive design principles.',
        technologies: ["React.js", "CSS(Flexbox)"],
        image: emojigame,
        link: 'https://mnsemojigame.ccbp.tech/',
        moredescription: ["Built a component-driven game interface with dynamic score and top score tracking.",
            "Applied Flexbox for seamless responsiveness across various screen sizes.",
            "Implemented conditional rendering for win/lose game states and replay functionality."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Emoji-Memory-Game.git',
    },
    {
        title: 'Social Media Backend API',
        description: 'Built a backend service for a Twitter-like platform with authentication, relational data management, & secure API access.',
        technologies: ["Node.js", "Express.js", "SQLite", "JWT Auth"],
        image: socialmediaapi,
        link: 'https://github.com/nethajisaineeraj/Social-Media-Backend-API.git',
        moredescription: [
            "Designed and implemented 11 RESTful APIs for user registration, login, tweets, likes, and replies.",
            "Developed JWT authentication middleware to secure endpoints and manage sessions.",
            "Modeled relational data across five normalized tables (user, follower, tweet, reply, like)."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Social-Media-Backend-API.git',
    },
    {
        title: 'Covid-19 India Portal',
        description: 'Developed a secure RESTful API to manage Covid-19 statistics across states and districts in India with authentication and CRUD operations.',
        technologies: ["Node.js", "Express.js", "SQLite", "JWT Auth"],
        image: covid19,
        link: 'https://github.com/nethajisaineeraj/Covid-19-India-Portal.git',
        moredescription: [
            "Implemented JWT-based authentication to secure API access and manage sessions.",
            "Designed and developed 8 RESTful APIs for managing states, districts, and user data.",
            "Built relational database schema with normalized state, district, and user tables.",
            "Exposed endpoints to handle CRUD operations and generate aggregated state-level Covid-19 statistics."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Covid-19-India-Portal.git',
    },
    {
        title: 'CricStat API',
        description: 'Built a backend service to manage cricket player statistics and match details with secure CRUD operations and relational queries.',
        technologies: ["Node.js", "Express.js", "SQLite"],
        image: cricstat,
        link: 'https://github.com/nethajisaineeraj/CricStat-API.git',
        moredescription: [
            "Designed RESTful APIs to fetch players, matches, and player statistics across multiple tables.",
            "Implemented endpoints for player CRUD operations and match details retrieval.",
            "Created APIs to return aggregated player performance stats (runs, fours, sixes).",
            "Normalized database schema with player_details, match_details, and player_match_score tables."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/CricStat-API.git',
    },
    {
        title: 'To-Do List Application',
        description: 'Full-stack task management app enabling users to create, update, and track daily tasks. ',
        technologies: ["Spring Boot", "Spring Data JPA", "MySQL (AWS RDS)", "React.js"],
        image: todoslist,
        link: 'https://github.com/nethajisaineeraj/todoslist-application.git',
        moredescription: [
            "Built RESTful APIs with Spring Boot & JPA to support full CRUD functionality.",
            "Deployed MySQL database on AWS RDS for scalable cloud-based storage.",
            "Developed a responsive React.js frontend with validation, conditional rendering, and real-time updates."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/todoslist-application.git',
    },
    {
        title: 'Wikipedia Search Application',
        description: 'Developed a dynamic web application that allows users to search and view Wikipedia articles in real-time, showcasing expertise in interactive web development.',
        technologies: ["HTML", "CSS", "JavaScript"],
        image: wikipedia,
        link: 'https://mnswikipedia.ccbp.tech/',
        moredescription: [
            "Implemented real-time search functionality with seamless retrieval and display of Wikipedia articles.",
            "Designed a clean, responsive, and user-friendly interface to enhance accessibility and engagement.",
            "Leveraged JavaScript API integration and asynchronous data handling to deliver fast and dynamic content updates.",
            "Strengthened frontend development skills through hands-on experience with real-time data fetching and DOM manipulation."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Wikipedia-Search-Application.git',
    },
    {
        title: 'Go Rest Console',
        description: 'Developed an interactive REST API console to perform GET, POST, and PUT requests dynamically with live response display.',
        technologies: ["HTML", "CSS", "JavaScript (Fetch API)"],
        image: gorestconsole,
        link: 'https://mnsrestconsole.ccbp.tech/',
        moredescription: [
            "Implemented real-time search functionality with seamless retrieval and display of Wikipedia articles.",
            "Designed a clean, responsive, and user-friendly interface to enhance accessibility and engagement.",
            "Leveraged JavaScript API integration and asynchronous data handling to deliver fast and dynamic content updates.",
            "Strengthened frontend development skills through hands-on experience with real-time data fetching and DOM manipulation."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Go-Rest-Console.git',
    },
    {
        title: 'Cryptarithmetic Solver',
        description: 'Developed a Python program to solve cryptarithmetic addition problems using backtracking and algorithmic techniques.',
        technologies: ["Python", "pyttsx3"],
        image: cryptarithmetic,
        link: 'https://youtu.be/ZknAMhIJytk?si=FPAsrVy9QIMC7VY2',
        moredescription: [
            "Designed an algorithmic approach to map letters to digits and find valid solutions.",
            "Utilized backtracking and constraint satisfaction techniques for optimal performance.",
            "Integrated voice-based commands to maintain user engagement during longer computations, enhancing usability and user experience."],
        sourcecodelink: 'https://github.com/nethajisaineeraj/Cryptarithmetic-Solver.git',
    },
];

const ExploreProjects = () => (
    <div className="explore-projects-section">
        <SectionHeading title="Projects" />
        <ul className="all-projects-list">
            {AllProjects.map((project) => (
                <li key={project.title}>
                    <ProjectItem
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                        moredescription={project.moredescription}
                        sourcecodelink={project.sourcecodelink}
                    />
                </li>
            ))}
        </ul>
    </div>
)

export default ExploreProjects