import React from 'react';
import './Modelpage_L4.css';
import Img9 from '../../assets/9.png';

const Modelpage_L4 = () => {
    return (
        <div className="custom-bike-layout">
            <div className="custom-top-section">
                <div className="custom-video-container">
                    <iframe 
                        width="100%" 
                        height="450"  
                        src="https://www.youtube.com/embed/HKfZifYO2w4?si=lJUhU-RDkrJ4Bleb" 
                        title="YouTube video 1" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    {/* <p className="custom-description-text">
                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
                    </p> */}
                </div>
                <div className="custom-video-container">
                    <iframe 
                        width="100%" 
                        height="450"  
                        src="https://www.youtube.com/embed/-41dJi_UPlc?si=UoTh3nD-TmClWH1G" 
                        title="YouTube video 2" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    {/* <p className="custom-description-text">
                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
                    </p> */}
                </div>
            </div>
            <div className="custom-bike-row">
                <img src="https://i.ibb.co/s5ngXN0/rhyno-prodcut-section-multi-vehicle.jpg" alt="Row of Bikes" className="custom-bike-image" />
            </div>
        </div>
    );
};

export default Modelpage_L4;
