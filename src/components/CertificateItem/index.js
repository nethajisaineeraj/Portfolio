import React from 'react';
import Popup from 'reactjs-popup';
import './index.css';

const CertificateItem = ({ image, name, issuedBy, link }) => (
    <div className="certificate-item-card">
        <img src={image} alt={name} className="certificate-item-img" />
        <div className="certificate-item-info">
            <h3 className="certificate-item-name">{name}</h3>
            <p className="certificate-item-issued">Issued by: {issuedBy}</p>
        </div>
        <Popup
            trigger={<button className="certificate-item-moreinfo">More Info</button>}
            modal
            closeOnDocumentClick
        >
            {close => (
                <div className="certificate-popup-modal">
                    <button className="certificate-popup-close" onClick={close}>&times;</button>
                    <img src={image} alt={name} className="certificate-popup-img" />
                    <button
                        className="certificate-popup-credentials"
                        onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                    >
                        View Credentials
                    </button>
                </div>
            )}
        </Popup>
    </div>
);

export default CertificateItem;
