import React from 'react';
import SectionHeading from "../SectionHeading";
import ExploreButton from "../ExploreButton";
import CertificateItem from '../CertificateItem';
import './index.css';
import nodejs from '../../images/nodejs.png';
import databases from '../../images/databases.png';
import sidsa from '../../images/sidsa.png';
import developerfoundations from '../../images/developerfoundations.png';

const certificates = [
    {
        name: 'Node JS',
        image: nodejs,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/node-js?id=XUAWMZMUKW',
    },
    {
        name: 'Introduction to Databases',
        image: databases,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=WRNXRWLSDN',
    },
    {
        name: 'Data Structures & Algorithms',
        image: sidsa,
        issuedBy: 'Smart Interviews',
        link: 'https://smartinterviews.in/certificate/6982ce0c',
    },
    {
        name: 'Developer Foundations',
        image: developerfoundations,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/developer-foundations?id=RMNTASJDJU',
    },
];

const Certificates = () => (
    <div className="certificates-section">
        <SectionHeading title="Certifications" />
        <ul className="certificates-list">
            {certificates.map((cert) => (
                <li key={cert.name}>
                    <CertificateItem
                        image={cert.image}
                        name={cert.name}
                        issuedBy={cert.issuedBy}
                        link={cert.link}
                    />
                </li>
            ))}
        </ul>
        <ExploreButton linkPath="/explorecertificates" />
    </div>
);

export default Certificates;
