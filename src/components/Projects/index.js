import SectionHeading from "../SectionHeading";
import ExploreButton from "../ExploreButton";
import './index.css';
import nxttrendz from '../../images/nxttrendz.png';
import socialmediaapi from '../../images/socialmediaapi.png';
import todoslist from '../../images/todoslist.png';
import ProjectItem from '../ProjectItem';

const projects = [
  {
    title: 'NxtTrendz E-Commerce Application',
    description: 'Developed a feature-rich e-commerce web app applying authentication, routing, and state management principles.',
    technologies: ["React.js", "React Router", "React Context", "CSS Flexbox"],
    image: nxttrendz,
    link: 'https://neerajnxttrendz.ccbp.tech/',
    moredescription: ["Implemented login/logout, protected routes, and role-based UI for prime vs non-prime users.", "Built product listing with search, category & rating filters, and price-based sorting.", "Designed a cart system with item quantity updates, bulk removal, and total cart summary."],
    sourcecodelink: 'https://github.com/nethajisaineeraj/NxtTrendz-E-commerce-application.git',
  },
  {
    title: 'Social Media Backend API',
    description: 'Built a backend service for a Twitter-like platform with authentication, relational data management, & secure API access.',
    technologies: ["Node.js", "Express.js", "SQLite", "JWT Auth"],
    image: socialmediaapi,
    link: 'https://github.com/nethajisaineeraj/Social-Media-Backend-API.git',
    moredescription: ["Designed and implemented 11 RESTful APIs for user registration, login, tweets, likes, and replies.", "Developed JWT authentication middleware to secure endpoints and manage sessions.", "Modeled relational data across five normalized tables (user, follower, tweet, reply, like)."],
    sourcecodelink: 'https://github.com/nethajisaineeraj/Social-Media-Backend-API.git',
  },
  {
    title: 'To-Do List Application',
    description: 'Full-stack task management app enabling users to create, update, and track daily tasks. ',
    technologies: ["Spring Boot", "Spring Data JPA", "MySQL (AWS RDS)", "React.js"],
    image: todoslist,
    link: 'https://github.com/nethajisaineeraj/todoslist-application.git',
    moredescription: ["Built RESTful APIs with Spring Boot & JPA to support full CRUD functionality.", "Deployed MySQL database on AWS RDS for scalable cloud-based storage.", "Developed a responsive React.js frontend with validation, conditional rendering, and real-time updates."],
    sourcecodelink: 'https://github.com/nethajisaineeraj/todoslist-application.git',
  },
];

const Projects = () => (
  <div className="projects-section">
    <SectionHeading title="Projects" />
    <ul className="projects-list">
      {projects.map((project) => (
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
    <ExploreButton linkPath="/exploreprojects" />
  </div>
);

export default Projects;
