import "./Achievements.css";
import { useLanguage } from "../context/LanguageContext";

function Achievements() {
  const { t } = useLanguage();
  const icons = ["🌟", "🚜", "📜", "🥬", "🏆"];

  return (
    <div className="achievements-container">
      <h2 className="section-title">{t.achievements.title}</h2>
      <div className="milestones-grid">
        {t.achievements.cards.map((card, index) => (
          <div key={index} className="milestone-card">
            <div className="milestone-icon">{icons[index % icons.length]}</div>
            <h3 className="milestone-title">{card.title}</h3>
            <p className="milestone-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
