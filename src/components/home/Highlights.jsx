import React from 'react';
import Card from '../common/Card';
import { Monitor, Code, Palette } from 'lucide-react';
import './Highlights.css';

const Highlights = () => {
    const highlights = [
        {
            id: 1,
            title: 'IT Support',
            desc: 'Hỗ trợ kỹ thuật, xử lý sự cố phần cứng, phần mềm và hệ thống mạng.',
            icon: <Monitor size={32} />
        },
        {
            id: 2,
            title: 'Teaching & Programming',
            desc: 'Đào tạo tin học văn phòng và lập trình với lộ trình bài bản, thực tế.',
            icon: <Code size={32} />
        },
        {
            id: 3,
            title: 'Web Design',
            desc: 'Thiết kế website hiện đại, chuẩn SEO và tối ưu trải nghiệm người dùng.',
            icon: <Palette size={32} />
        }
    ];

    return (
        <section className="highlights section-padding">
            <div className="container">
                <div className="highlights-grid">
                    {highlights.map((item) => (
                        <Card key={item.id} className="highlight-card">
                            <div className="highlight-icon">
                                {item.icon}
                            </div>
                            <h3 className="highlight-title">{item.title}</h3>
                            <p className="highlight-desc">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
