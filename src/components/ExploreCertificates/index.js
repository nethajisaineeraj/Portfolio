import React from 'react';
import SectionHeading from "../SectionHeading";
import CertificateItem from '../CertificateItem';
import './index.css';
import nodejs from '../../images/nodejs.png';
import databases from '../../images/databases.png';
import javascriptessentials from '../../images/javascriptessentials.png';
import developerfoundations from '../../images/developerfoundations.png';
import dynamicwebdesign from '../../images/dynamicwebdesign.png';
import cssflexbox from '../../images/cssflexbox.png';
import responsivedesign from '../../images/responsivedesign.png';
import staticwebdesign from '../../images/staticwebdesign.png';
import python from '../../images/python.png';
import skillrackjava from '../../images/skillrackjava.png';
import nptelc from '../../images/nptelc.png';
import nptelcpp from '../../images/nptelcpp.png';
import sidsa from '../../images/sidsa.png';

const AllCertificates = [
    {
        name: 'Data Structures & Algorithms',
        image: sidsa,
        issuedBy: 'Smart Interviews',
        link: 'https://smartinterviews.in/certificate/6982ce0c',
    },
    {
        name: 'Node JS',
        image: nodejs,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/node-js?id=XUAWMZMUKW',
    },
    {
        name: 'Developer Foundations',
        image: developerfoundations,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/developer-foundations?id=RMNTASJDJU',
    },
    {
        name: 'Introduction to Databases',
        image: databases,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=WRNXRWLSDN',
    },
    {
        name: 'Javascript Essentials',
        image: javascriptessentials,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/javascript-essentials?id=JTCPCCMLJG',
    },
    {
        name: 'Dynamic Web Design',
        image: dynamicwebdesign,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=VSVCDXZWHE',
    },
    {
        name: 'Responsive Web Design Using Flexbox',
        image: cssflexbox,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=LISURBHREO',
    },
    {
        name: 'Responsive Web Design',
        image: responsivedesign,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=APOGAGJAIJ',
    },
    {
        name: 'Static Web Design',
        image: staticwebdesign,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/static-website?id=LACZUXYRUJ',
    },
    {
        name: 'Programming Foundations With Python',
        image: python,
        issuedBy: 'Nxtwave',
        link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=MWPJUQZQGD',
    },
    {
        name: 'Java Programming',
        image: skillrackjava,
        issuedBy: 'Skill Rack',
        link: 'www.SkillRack.com/cert/531837/IEH',
    },
    {
        name: 'Problem Solving Through Programming in C',
        image: nptelc,
        issuedBy: 'NPTEL',
        link: 'https://drive.google.com/file/d/1i-lAmOpDgGGKKkWqmOUOocLfYIH4jAuJ/view?usp=sharing',
    },
    {
        name: 'Programming in Modern C++',
        image: nptelcpp,
        issuedBy: 'NPTEL',
        link: 'https://drive.google.com/file/d/1i-lAmOpDgGGKKkWqmOUOocLfYIH4jAuJ/view?usp=sharing',
    },

];

const ExploreCertificates = () => (
    <div className="explore-certificates-section">
        <SectionHeading title="Certifications" />
        <ul className="explore-certificates-list">
            {AllCertificates.map((cert) => (
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
    </div>
)

export default ExploreCertificates