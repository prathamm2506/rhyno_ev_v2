import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/GTX.png';
import { IoIosArrowDropright } from "react-icons/io";
import './GTX.css';

const GTX = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        window.scrollTo(0, 1650);
    };

    return (
        <div className="gtx-container">
            <div className="gtx-content">
                <div className="gtx-details">
                    <div className="headerText">The Thrilling Machine</div>
                    <div className="badge">ALL NEW</div>
                    <h2 className="title">RHYNO GTX Series</h2>
                    <p className="description">
                        For those who don’t like a boring scooter! Immerse yourself into a never-before-experience. Stand out from the crowd. Now
                    </p>
                    <div className="buttons">
                        <button className="book-now">
                            <a href="https://wa.me/9023987528" className="book-now-link" target='_blank' rel="noopener noreferrer">
                                Book Now
                            </a>
                            <IoIosArrowDropright size="20px" />
                        </button>
                        <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
                    </div>
                </div>
                <div className="gtx-image-container">
                    <img className="gtx-image" src={IMG} alt="GTX Series" />
                </div>
            </div>
        </div>
    );
};

export default GTX;
