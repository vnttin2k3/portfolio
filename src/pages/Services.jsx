import React from 'react';
import Card from '../components/common/Card';
import { Monitor, Code, Palette, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Hỗ trợ kỹ thuật CNTT',
            desc: 'Giải quyết mọi vấn đề về máy tính, mạng và phần mềm giúp bạn yên tâm làm việc.',
            icon: <Monitor size={40} />,
            features: [
                'Cài đặt hệ điều hành, phần mềm',
                'Xử lý sự cố mạng, wifi, máy in',
                'Tư vấn nâng cấp phần cứng',
                'Hỗ trợ kỹ thuật từ xa (UltraViewer/TeamViewer)'
            ]
        },
        {
            id: 2,
            title: 'Dạy tin học & lập trình',
            desc: 'Các khóa học từ cơ bản đến nâng cao, thiết kế riêng theo nhu cầu học viên.',
            icon: <Code size={40} />,
            features: [
                'Tin học văn phòng (Word, Excel, PowerPoint)',
                'Lập trình cơ bản (C++, Python, Java)',
                'Lập trình Web Frontend (HTML, CSS, JS, React)',
                'Hướng dẫn đồ án môn học'
            ]
        },
        {
            id: 3,
            title: 'Thiết kế website',
            desc: 'Xây dựng website chuyên nghiệp, tốc độ cao và chuẩn SEO cho cá nhân, doanh nghiệp.',
            icon: <Palette size={40} />,
            features: [
                'Website cá nhân (Portfolio, Blog)',
                'Landing Page giới thiệu sản phẩm',
                'Website doanh nghiệp',
                'Tối ưu hóa SEO & Tốc độ tải trang'
            ]
        }
    ];

    return (
        <div className="services-page section-padding">
            <div className="container">
                <div className="services-header">
                    <h1>Dịch vụ cung cấp</h1>
                    <p>Giải pháp công nghệ toàn diện cho cá nhân và doanh nghiệp</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <Card key={service.id} className="service-card-full">
                            <div className="service-icon-lg">{service.icon}</div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{service.title}</h2>
                            <p className="text-muted" style={{ marginBottom: '16px' }}>{service.desc}</p>

                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>

                            <a href="#contact" className="service-link">
                                Liên hệ ngay <ArrowRight size={16} />
                            </a>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
