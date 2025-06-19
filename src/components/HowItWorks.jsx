import React from "react";
import map from '../assets/images/map.png'
import icon1 from '../assets/icons/process1.png'
import icon2 from '../assets/icons/process2.png'
import icon3 from '../assets/icons/process3.png'
import icon4 from '../assets/icons/'

const HowItWorks = () => {
    return (
        <div className="how-it-works-wrapper">
            {/* { title } */}
            <h2 className="section-title">How It Works</h2>

            <div className="how-it-works-container">
                {/* { map side } */}
                <div className="map-section">
                    <img src={map} alt="Manhattan Map" className="map-image" />
                </div>

                {/* { right side processing } */}
                <div className="steps-section">
                    <div className="step-box dashed-border">
                        <img src={icon1} alt="Input Criteria Icon" className="step-icon" />
                        <h3>Input Criteria</h3>
                        <p>Tell us your industry, budget, and location preferences</p>
                    </div>

                    <div className="arrow"
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;