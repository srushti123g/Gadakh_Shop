import React from 'react';
import './FreshnessTicker.css';
import { useLanguage } from '../context/LanguageContext';

function FreshnessTicker() {
    const { language } = useLanguage();

    const items = language === 'en' ? [
        { text: "Fresh Harvest Daily", icon: "🌱" },
        { text: "Farm to Shop", icon: "🚜" },
        { text: "100% Organic", icon: "🍅" },
        { text: "Premium Quality", icon: "✨" },
        { text: "Visit Us Today", icon: "📍" }
    ] : [
        { text: "दररोज ताजी कापणी", icon: "🌱" },
        { text: "थेट शेतातून दुकानात", icon: "🚜" },
        { text: "१००% सेंद्रिय", icon: "🍅" },
        { text: "उच्च दर्जा", icon: "✨" },
        { text: "आजच भेट द्या", icon: "📍" }
    ];

    // duplicate items for infinite loop illusion
    const displayItems = [...items, ...items, ...items, ...items];

    return (
        <div className="freshness-ticker">
            <div className="ticker-track">
                {displayItems.map((item, index) => (
                    <div className="ticker-item" key={index}>
                        <span className="ticker-icon">{item.icon}</span>
                        <span className="ticker-text">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FreshnessTicker;
