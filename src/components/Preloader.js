import React, { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader({ onComplete }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onComplete) setTimeout(onComplete, 500); // Wait for fade out
        }, 2200); // Show for 2.2 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!visible) return null;

    return (
        <div className={`preloader`}>
            <div className="preloader-content">
                <span className="sprout-icon">🌱</span>
                <div className="loading-text">Gadakh Shop</div>
            </div>
        </div>
    );
}

export default Preloader;
