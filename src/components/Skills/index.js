import SectionHeading from "../SectionHeading";
import ExploreButton from "../ExploreButton";
import { FaCode, FaLaptopCode, FaDatabase, FaReact, } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { IoMdCloudOutline } from "react-icons/io";
import './index.css';


const myskills = [
    {
        id: 1, skill: "Programming", icon: <FaCode />,
    },
    {
        id: 2, skill: "Data Structures And Algorithms", icon: <TbBinaryTree />,
    },
    {
        id: 3, skill: "Databases", icon: <FaDatabase />,
    },
    {
        id: 4, skill: "Frontend Development", icon: <FaReact />,
    },
    {
        id: 5, skill: "Backend Development", icon: <FaLaptopCode />,
    },
    {
        id: 6, skill: "Cloud", icon: <IoMdCloudOutline />,
    }
]

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <SectionHeading title="Skills" />
            <ul className="skills-list-container">
                {myskills.map((skillItem) => (
                    <div className="skill-item-wrapper" key={skillItem.id}>
                        <li key={skillItem.id} className="skill-item-styles">
                            <span className="skillicon-styles">{skillItem.icon}</span>
                            <span>{skillItem.skill}</span>
                        </li>
                    </div>
                ))}
            </ul>
            <ExploreButton linkPath="/exploreskills"/>
        </div>

    )
}

export default Skills;