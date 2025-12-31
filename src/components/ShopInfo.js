import "./ShopInfo.css";
import { useLanguage } from "../context/LanguageContext";

function ShopInfo() {
  const { t } = useLanguage();

  const scrollToVegetables = () => {
    const vegSection = document.querySelector('.vegetables-container');
    if (vegSection) {
      vegSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-split">
      <div className="hero-text">
        <h1>{t.hero.title}</h1>
        <h3>{t.hero.subtitle}</h3>
        <p className="location-text"><span>📍</span> {t.hero.location}</p>

        <div className="owners-badge">
          <strong>{t.hero.owners}</strong>
        </div>

        <div className="hero-actions">
          <button className="btn-hero-primary" onClick={scrollToVegetables}>
            {t.hero.cta} 🥬
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <img src="/images/background.png" alt="Fresh Vegetables Basket" className="hero-img-main" />
      </div>

      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </div>
  );
}

export default ShopInfo;
