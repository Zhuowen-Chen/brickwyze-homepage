import React from "react";
import img1 from '../assets/images/why1.png'
import img2 from '../assets/images/why2.png'
import img3 from '../assets/images/why3.png'
import rightArrow from '../assets/icons/rightArrow.png'

const cardData = [
    {
        title: "Smart Filtering Algorithm",
        text: "Automatically recommend the best startup locations based on your industry, budget, foot traffic, and more.",
        link: "Learn how it works",
        image: img1,
    },
    {
        title: "Reliable Data Sources",
        text: "Powered by real-time government, demographic, and business district data to support confident decisions.",
        link: "View our data sources",
        image: img2,
    },
    {
        title: "Real Entrepreneur Stories",
        text: "Discover how founders used our platform to find locations and launch successful businesses.",
        link: "See their journeys",
        image: img3,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="whychooseus-section">
            {cardData.map((card, index) => (
                <div className={`whychooseus-card card-${index}`} key={index}>
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h1>{card.title}</h1>
                    <p>{card.text}</p>
                    <a href="/">{card.link} <img src={rightArrow} alt="arrow" className="arrow-icon" /></a>

                </div>
            ))}
        </section>
    );
};

export default WhyChooseUs;