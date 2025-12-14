import React from 'react';
import './Partners.css';

const Partners = () => {
    // Placeholder data for partners
    const partners = [
        { id: 1, name: 'TechLab', logo: '🏢' },
        { id: 2, name: 'CodeAcademy', logo: '🎓' },
        { id: 3, name: 'DevStudio', logo: '💻' },
        { id: 4, name: 'CloudNet', logo: '☁️' },
        { id: 5, name: 'SecurityPlus', logo: '🛡️' },
        { id: 6, name: 'AI Solutions', logo: '🤖' },
        { id: 7, name: 'EduTech', logo: '📚' },
        { id: 8, name: 'WebMasters', logo: '🌐' }
    ];

    return (
        <section className="partners-section">
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Đối tác & Nhà tài trợ</h2>

                <div className="partners-carousel">
                    <div className="partners-track">
                        {/* Double the list for seamless infinite scroll */}
                        {[...partners, ...partners].map((partner, index) => (
                            <div className="partner-card" key={`${partner.id}-${index}`}>
                                <div className="partner-logo">{partner.logo}</div>
                                <span className="partner-name">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
