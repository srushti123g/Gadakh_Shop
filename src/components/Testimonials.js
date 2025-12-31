import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { useLanguage } from "../context/LanguageContext";

const testimonialsData = [
    { id: 1, name: "Anita D.", text: "The freshest vegetables I've ever tasted! I love visiting the shop daily.", rating: 5 },
    { id: 2, name: "Rahul S.", text: "Extremely happy with the organic quality. My family loves it!", rating: 5 },
    { id: 3, name: "Priya K.", text: "Great service and amazing prices for organic produce. Highly recommend!", rating: 4 },
    { id: 4, name: "Vikas M.", text: "Authentic farm taste. Reminds me of my village.", rating: 5 },
];

const testimonialsDataMr = [
    { id: 1, name: "अनिता ड.", text: "आतापर्यंतच्या सर्वात ताज्या भाज्या! मला दररोज दुकानात यायला आवडते.", rating: 5 },
    { id: 2, name: "राहुल स.", text: "सेंद्रिय गुणवत्तेने खूप आनंदी आहे. माझ्या कुटुंबाला ते खूप आवडते!", rating: 5 },
    { id: 3, name: "प्रिया के.", text: "उत्तम सेवा आणि सेंद्रिय उत्पादनासाठी आश्चर्यकारक किंमती!", rating: 4 },
    { id: 4, name: "विकास म.", text: "गावरान चव. मला माझ्या गावाची आठवण करून दिली.", rating: 5 },
];

function Testimonials() {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = language === 'en' ? testimonialsData : testimonialsDataMr;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="testimonials-container">
            <h2 className="section-title">
                {language === 'en' ? "What Our Customers Say" : "आमचे ग्राहक काय म्हणतात"}
            </h2>
            <div className="testimonial-card fade-key" key={currentIndex}>
                <div className="stars">{"⭐".repeat(data[currentIndex].rating)}</div>
                <p className="testimonial-text">"{data[currentIndex].text}"</p>
                <h4 className="testimonial-name">- {data[currentIndex].name}</h4>
            </div>
            <div className="testimonial-dots">
                {data.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
