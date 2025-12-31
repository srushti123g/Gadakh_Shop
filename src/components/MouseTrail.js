import React, { useEffect, useState } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newSparkle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                type: Math.random() > 0.5 ? '🍃' : '✨'
            };

            setTrail((prev) => [...prev.slice(-15), newSparkle]); // Keep last 15 items
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrail((prev) => prev.filter(item => Date.now() - item.id < 800)); // Remove old
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mouse-trail-container">
            {trail.map((item) => (
                <div
                    key={item.id}
                    className="trail-particle"
                    style={{
                        left: item.x,
                        top: item.y,
                    }}
                >
                    {item.type}
                </div>
            ))}
        </div>
    );
};

export default MouseTrail;
