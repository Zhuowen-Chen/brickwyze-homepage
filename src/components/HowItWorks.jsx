import React from "react";
import map from '../assets/images/map.png'

const HowItWorks = () => {
    return (
        <div className="how-it-works-container">
            {/* { google map } */}
            <div className="map-section">
                <img src={map} alt="Manhattan Map" className="map-image" />
            </div>

            {/* { right side processing } */}
            <div className="steps-section">
                <h2 className="section-title">How It Works</h2>

                <div className="step-box dashed-border">
                    <div className="icon"
                </div>
            </div>
        </div>

    );
};

export default HowItWorks;