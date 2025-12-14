import React, { useState } from 'react';
import Button from '../components/common/Button';
import { Eye } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'Hệ thống mạng Văn phòng ABC',
            category: 'IT Support',
            desc: 'Thiết kế và lắp đặt hệ thống mạng LAN/Wifi mesh cho văn phòng 50 nhân sự.',
            tech: ['Cisco', 'MikroTik', 'Unifi'],
            image: '🖥️'
        },
        {
            id: 2,
            title: 'Website Bán hàng Thời trang',
            category: 'Web Design',
            desc: 'Website thương mại điện tử với đầy đủ tính năng giỏ hàng, thanh toán.',
            tech: ['React', 'Node.js', 'Stripe'],
            image: '🛍️'
        },
        {
            id: 3,
            title: 'Khóa học Python cho người mới',
            category: 'Teaching',
            desc: 'Biên soạn giáo trình và giảng dạy trực tiếp khóa học Python cơ bản.',
            tech: ['Python', 'Teaching', 'Curriculum'],
            image: '🐍'
        },
        {
            id: 4,
            title: 'Landing Page Bất động sản',
            category: 'Web Design',
            desc: 'Landing page giới thiệu dự án căn hộ cao cấp với hiệu ứng visual ấn tượng.',
            tech: ['HTML/CSS', 'JS', 'GSAP'],
            image: '🏢'
        },
        {
            id: 5,
            title: 'Bảo trì máy tính định kỳ',
            category: 'IT Support',
            desc: 'Dịch vụ bảo trì, vệ sinh và tối ưu hóa phần mềm cho dàn máy thiết kế đồ họa.',
            tech: ['Hardware', 'Optimization'],
            image: '🔧'
        }
    ];

    const categories = ['All', 'IT Support', 'Teaching', 'Web Design'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="portfolio-page section-padding">
            <div className="container">
                <div className="portfolio-header">
                    <h1>Dự án tiêu biểu</h1>
                    <p>Những dự án tôi đã thực hiện trong nhiều lĩnh vực</p>
                </div>

                <div className="filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-thumbnail">
                                <div className="project-thumbnail-placeholder">{project.image}</div>
                                <div className="project-overlay">
                                    <Button variant="outline" style={{ borderColor: 'white', color: 'white' }}>
                                        Xem chi tiết <Eye size={16} />
                                    </Button>
                                </div>
                            </div>
                            <div className="project-info">
                                <span style={{ fontSize: '0.875rem', color: 'var(--primary-red)', fontWeight: 600 }}>{project.category}</span>
                                <h3 style={{ margin: '8px 0', fontSize: '1.25rem' }}>{project.title}</h3>
                                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{project.desc}</p>
                                <div className="project-tags">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
