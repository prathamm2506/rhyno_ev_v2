import React, { useState } from 'react';
import Formmain2 from '../popupform/Formmain2';
import './GTX.css';

const GTX = () => {
    const [isFormVisible, setFormVisible] = useState(false); // State to control form visibility

    const handleLearnMoreClick = () => {
        const section = document.getElementById('learnmore');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    return (
        <div className="gtx-container">
            <div className="gtx-content">
                <div className="gtx-details">
                    <div className="badge">ALL NEW</div>
                    <h1 className="title11">RHYNO GTX Series</h1>
                    <p className="description11">
                        For those who don’t like a boring scooter! Immerse yourself into a never-before-experience. Stand out from the crowd. Now.
                    </p>
                    <div className="buttons">
                        <button className="ordernowmain" onClick={handleButtonClick}>
                            Order Now
                        </button>
                        <button className="learn-more" onClick={handleLearnMoreClick}>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
            <div className="gtx-image-container">
                <img className="gtx-image" src="https://i.ibb.co/kq00DbT/thrilling-machine-section.png" alt="GTX Series" />
            </div>

            {/* Conditionally render the form as a popup */}
            {isFormVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 md:p-8">
                        <Formmain2 setFormVisible={setFormVisible} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GTX;
