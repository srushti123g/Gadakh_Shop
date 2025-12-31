import "./ContactUs.css";
import { shopInfo } from "../data";
import { useLanguage } from "../context/LanguageContext";

function ContactUs() {
  const { t } = useLanguage();

  return (
    <div className="contact-container">
      <div className="contact-card-premium">
        <h2 className="contact-headline">{t.contact.title}</h2>
        <p className="contact-sub">{t.contact.subtitle}</p>

        <div className="contact-grid">
          {/* Address Box */}
          <div className="info-box">
            <span className="icon-large">📍</span>
            <h3 className="info-title">{t.contact.visit}</h3>
            <div className="map-container" style={{ width: '100%', borderRadius: '15px', overflow: 'hidden', marginTop: '0.5rem' }}>
              <iframe
                title="Shop Location"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Gadakh+vegetable+shop+Buldhana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{ filter: "contrast(1.1)" }}
              ></iframe>
            </div>
            <p style={{ color: '#555', marginTop: '0.5rem', fontSize: '0.9rem' }}>{t.hero.location}</p>
          </div>

          {/* Phone Box */}
          <div className="info-box">
            <span className="icon-large">📞</span>
            <h3 className="info-title">{t.contact.call}</h3>
            {shopInfo.phone.map((num, index) => (
              <div key={index}>
                <a href={`tel:${num}`} className="info-link">{num}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Actions */}
        <div className="social-actions" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

{/* Single WhatsApp Button */}
<a
  href={`https://wa.me/${shopInfo.whatsapp?.[0]?.replace(/\D/g, '') || '919860035883'}`}
  target="_blank"
  rel="noreferrer"
  className="btn-whatsapp-large"
>
  <span>💬 {t.contact.chat || "Chat Now"}</span>
</a>



          {/* Social Links */}
          <div className="social-links-row">
            <a href={shopInfo.instagram} target="_blank" rel="noreferrer" className="btn-social btn-instagram" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href={shopInfo.facebook} target="_blank" rel="noreferrer" className="btn-social btn-facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href={shopInfo.youtube} target="_blank" rel="noreferrer" className="btn-social btn-youtube" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
