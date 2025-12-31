import { useRef, useEffect, useState } from "react";
import "./App.css";
import ShopInfo from "./components/ShopInfo";
import About from "./components/About";
import Vegetables from "./components/Vegetables";
import Achievements from "./components/Achievements";
import ContactUs from "./components/ContactUs";
import FreshnessTicker from "./components/FreshnessTicker";
import BackgroundElements from "./components/BackgroundElements";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";


function InnerApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const vegRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <BackgroundElements />

      {/* Navbar */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-logo">Gadakh Shop</div>

        {/* Language Switcher & Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="lang-toggle lang-toggle-header" onClick={toggleLanguage}>
            {language === 'en' ? '🇮🇳 मराठी' : '🇺🇸 English'}
          </button>

          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection(homeRef)}>{t.navbar.home}</button>
          <button onClick={() => scrollToSection(aboutRef)}>{t.navbar.about}</button>
          <button onClick={() => scrollToSection(vegRef)}>{t.navbar.vegetables}</button>
          <button onClick={() => scrollToSection(achievementsRef)}>{t.navbar.whyChooseUs}</button>
          <button onClick={() => scrollToSection(contactRef)} className="btn-primary">{t.navbar.contact}</button>

          {/* Mobile Only Language Toggle */}
          <button className="lang-toggle lang-toggle-mobile" onClick={toggleLanguage}>
            Switch to {language === 'en' ? '🇮🇳 मराठी' : '🇺🇸 English'}
          </button>
        </div>
      </nav>

      {/* Sections */}
      <main>
        <div ref={homeRef} className="hero-section">
          <ShopInfo />
        </div>

        {/* Wave Divider 1 */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div ref={aboutRef} className="section-light fade-in-section">
          <About />
        </div>

        {/* Wave Divider 2 (Gray to White) */}
        <div className="wave-divider-gray">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#F1F8E9"></path>
          </svg>
        </div>

        <div ref={vegRef} className="section">
          <Vegetables />
        </div>

        <div ref={achievementsRef} className="section-gray fade-in-section">
          <Achievements />
        </div>

        {/* Testimonials Section */}
        <div className="section fade-in-section">
          <Testimonials />
        </div>

        {/* News & Innovation Section */}
        <div className="section-light fade-in-section">
          <News />
        </div>

        {/* Wave Divider 3 (Gray to Light) */}
        <div className="wave-divider-simple">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#FAFAF5' }}></path>
          </svg>
        </div>

        <div ref={contactRef} className="section-light fade-in-section">
          <ContactUs />
        </div>
      </main>

      {/* Rich Organic Footer */}
      <footer className="footer-rich">
        <div className="footer-content">
          <div className="footer-col brand-col">
            <h3>Gadakh Shop</h3>
            <p>Bringing nature's finest fresh vegetables directly from our farm to your family's table.</p>
          </div>

          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
            <button onClick={() => scrollToSection(vegRef)}>Vegetables</button>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </div>

          <div className="footer-col contact-col">
            <h4>Visit Us</h4>
            <p>Chickhli Road, near Lahase Tower,<br />Buldhana</p>
            <p>📞 9860035883</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gadakh Vegetable Shop. Grown with ❤️ in India.</p>
        </div>
      </footer>
     <a
  href="https://wa.me/919860035883"
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
>
  <span className="whatsapp-icon">💬</span>
</a>


    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <InnerApp />
    </LanguageProvider>
  );
}

export default App;
