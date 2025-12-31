import React, { useState, useEffect } from 'react';
import './VideoGallery.css';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';

const VideoGallery = ({ isEmbedded }) => {
    const { language } = useLanguage();
    const t = content[language].video;

    // Initialize with the first video in the playlist, or fallback to single src
    const initialVideo = t.playlist ? t.playlist[0] : { src: t.src, title: t.title };
    const [activeVideo, setActiveVideo] = useState(initialVideo);

    // Update active video if language changes (to keep titles in sync if we had localized titles in playlist)
    // or if the underlying data structure changes.
    useEffect(() => {
        if (t.playlist) {
            setActiveVideo(t.playlist[0]);
        } else {
            setActiveVideo({ src: t.src, title: t.title });
        }
    }, [language, t]);

    if (!t) return null;

    return (
        <section className={isEmbedded ? "" : "video-section"}>
            <div className="video-container">
                {!isEmbedded && (
                    <div className="video-header">
                        <h2 className="video-title">{t.title}</h2>
                        <p className="video-subtitle">{t.subtitle}</p>
                    </div>
                )}

                <div className="video-main-stage">
                    <div className="video-wrapper">
                        <div className="video-frame-container">
                            <iframe
                                src={activeVideo.src}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="video-iframe"
                            ></iframe>
                        </div>
                    </div>
                    <div className="video-status-bar">
                        <span className="playing-now">Now Playing:</span>
                        <span className="playing-title">{activeVideo.title}</span>
                    </div>
                </div>

                {t.playlist && t.playlist.length > 1 && (
                    <div className="playlist-container">
                        {t.playlist.map((video) => (
                            <div
                                key={video.id}
                                className={`playlist-item ${activeVideo.id === video.id ? 'active' : ''}`}
                                onClick={() => setActiveVideo(video)}
                            >
                                <div className="playlist-thumbnail-wrapper">
                                    {/* Using YouTube thumbnail hack */}
                                    <img
                                        src={`https://img.youtube.com/vi/${video.src.split('/').pop().split('?')[0]}/0.jpg`}
                                        alt={video.title}
                                        className="playlist-thumbnail"
                                    />
                                    <div className="play-overlay">▶</div>
                                </div>
                                <h4 className="playlist-item-title">{video.title}</h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoGallery;
