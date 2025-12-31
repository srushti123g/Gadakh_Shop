import React from 'react';
import './News.css';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';
import VideoGallery from './VideoGallery';

const News = () => {
    const { language } = useLanguage();
    const t = content[language].news;
    const articles = t.articles;

    return (
        <section className="news-section">
            <div className="news-container">
                <div className="news-header">
                    <h2 className="news-title">{t.title}</h2>
                    <p className="news-subtitle">{t.subtitle}</p>
                </div>

                {/* Integrated Video Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <VideoGallery isEmbedded={true} />
                </div>

                <div className="news-grid">
                    {articles.map((article) => (
                        <div key={article.id} className="news-card">
                            <div className="news-image-container">
                                {/* Use a placeholder if image fails or is generic */}
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="news-image"
                                    onError={(e) => { e.target.src = "https://placehold.co/600x400/e8f5e9/1b5e20?text=Gadakh+Shop" }}
                                />
                                <span className="news-source">{article.source}</span>
                            </div>
                            <div className="news-content">
                                <span className="news-date">{article.date}</span>
                                <h3 className="news-card-title">{article.title}</h3>
                                <p className="news-excerpt">{article.excerpt}</p>
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="btn-read-more">
                                    {language === 'en' ? 'Read Full Story' : 'संपूर्ण बातमी वाचा'} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
