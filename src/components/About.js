import React, { useEffect, useRef } from "react";
import "./About.css";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <h2 className="section-title">{t.about.title}</h2>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line"></div>

        {/* Item 1: The Beginning */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🌱 The Beginning</h3>
            <p>{t.about.text}</p>
          </div>
        </div>

        {/* Item 2: Innovation */}
        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🚜 Innovation</h3>
            <p>{t.achievements.cards[0].desc}</p>
          </div>
        </div>

        {/* Item 3: Exotic Selection */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🥦 Exotic Variety</h3>
            <p>{t.achievements.cards[2].desc}</p>
          </div>
        </div>

        {/* Item 4: Direct to Market */}
        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🤝 Direct to Customer</h3>
            <p>{t.achievements.cards[4].desc}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
