import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import Formmain2 from '../popupform/Formmain2';
import './GTX.css';

const GTX = () => {
    const handleLearnMoreClick = () => {
        const section = document.getElementById('learnmore');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="gtx-container">
            <div className="gtx-content">
                <div className="gtx-details">
                    <div className="badge">ALL NEW</div>
                    <h1 className="title">RHYNO GTX Series</h1>
                    <p className="description">
                        For those who don’t like a boring scooter! Immerse yourself into a never-before-experience. Stand out from the crowd. Now.
                    </p>
                    <div className="buttons">
                        <button className="ordernow">
                            <Formmain2 />
                        </button>
                        <button className="learn-more" onClick={handleLearnMoreClick}>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
            <div className="gtx-image-container">
                <img className="gtx-image" src="https://i.ibb.co/g7t4W6f/thrilling-machine-section.png" alt="GTX Series" />
            </div>
        </div>
    );
};

export default GTX;
