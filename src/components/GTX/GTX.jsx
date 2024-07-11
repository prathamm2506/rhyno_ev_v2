import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../../assets/GTX.png"
import './GTX.css';

const GTX = () => {

    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/SE03');
        window.scrollTo(0, 0);
    };

    return (
        <div className="layer-2">
            <div className="things">
                <h3 className="more-thrills-per">More thrills. Per second.</h3>
                <div className="gtx">GTX</div>
                <img className="side67-1-icon" alt="GTX img" src={IMG} />

                <div className="rectangle-parent">
                    <div className="group-child"></div>
                    <div className="all-new">All New</div>
                </div>
                <h2 className="gtx1" id="title">GTX</h2>
                <span className="starting-at-rs-container">
                    <span>Starting at </span>
                    <span className="rs-102220-">Rs. 102,220/-</span>
                </span>
                <p className="our-digital-display-container">
                    <span className="our-digital-display-container1">
                        <span className="our-digital-display">
                            Our digital display keeps you informed with real-time range and
                            fault indicators. So you can enjoy your ride without anxiety about
                            the remaining range.
                        </span>
                    </span>
                </p>
                <button className="book-now">
                    Book Now
                </button>
                <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
            </div>
        </div>
    );
};

export default GTX;
