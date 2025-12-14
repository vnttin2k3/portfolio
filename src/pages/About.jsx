import React from 'react';
import profilesImg from '../assets/profile.png';
import { CheckCircle, Award, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
    // New Skills Data
    const technicalSkills = [
        {
            category: 'Hạ tầng & Hệ thống',
            items: [
                'Hỗ trợ kỹ thuật (Troubleshooting)',
                'Quản lý mạng (Networking)',
                'Bảo mật thông tin (Cybersecurity)',
                'Cloud (AWS, Azure)',
                'Windows Server / Linux',
                'Office 365 Admin'
            ]
        },
        {
            category: 'Giảng dạy & Đào tạo',
            items: [
                'Tin học văn phòng (Word, Excel, PPT)',
                'Lập trình Python cơ bản & nâng cao',
                'Tư duy lập trình cho người mới',
                'Kỹ năng sử dụng máy tính hiệu quả'
            ]
        },
        {
            category: 'Thiết kế Website',
            items: [
                'Frontend (HTML, CSS, ReactJS)',
                'UI/UX Design cơ bản',
                'Tối ưu hóa SEO & Performance',
                'Responsive Web Design'
            ]
        }
    ];

    const degrees = [
        {
            school: 'Trường Đại học Nguyễn Tất Thành',
            degree: 'Thạc sĩ Công nghệ thông tin',
            year: '2022 - 2024',
            description: 'Tốt nghiệp chuyên ngành Khoa học máy tính.'
        },
        {
            school: 'Trường Đại học Nguyễn Tất Thành',
            degree: 'Cử nhân Công nghệ thông tin',
            year: '2014 - 2018',
            description: 'Tốt nghiệp chuyên ngành Công nghệ phần mềm.'
        }
    ];

    const certifications = [
        'Google IT Support Professional',
        'IBM IT Support Professional',
        'IBM Data Science',
        'Gemini Certified Educator',
        'Gemini Certified Student',
        'Cisco CCNA'
    ];

    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1>Giới thiệu Thầy Tín</h1>
                    <p>Chuyên gia CNTT & Giảng viên</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="about-wrapper">
                    <div className="about-profile">
                        <img src={profilesImg} alt="Thầy Tín" className="about-img-real" />
                    </div>
                    <div className="about-details">
                        <h2 className="about-heading">Hành trình & Kinh nghiệm</h2>
                        <p className="text-muted" style={{ marginBottom: '16px' }}>
                            Chào bạn, mình là Tín. Với niềm đam mê công nghệ từ những ngày đầu tiếp xúc với máy tính, mình đã dành hơn 10 năm để nghiên cứu và làm việc trong lĩnh vực IT Support, Quản trị mạng và Lập trình.
                        </p>
                        <p className="text-muted">
                            Hiện tại, mình tập trung vào việc chia sẻ kiến thức, đào tạo các bạn trẻ đam mê công nghệ và cung cấp các giải pháp website tối ưu cho cá nhân và doanh nghiệp nhỏ.
                        </p>

                        <h3 style={{ marginTop: '24px', marginBottom: '16px' }}>Triết lý giảng dạy</h3>
                        <ul className="philosophy-list">
                            <li><strong>Thực tế là trọng tâm:</strong> "Học đi đôi với hành", tập trung vào kỹ năng làm việc thực tế.</li>
                            <li><strong>Đơn giản hóa kiến thức:</strong> Biến những khái niệm phức tạp thành dễ hiểu.</li>
                            <li><strong>Hỗ trợ tận tâm:</strong> Đồng hành cùng học viên cho đến khi làm được việc.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="skills-section">
                <div className="container">
                    <h2 className="text-center section-title" style={{ marginBottom: '40px' }}>Kỹ Năng Chuyên Môn</h2>

                    {/* Skills Grid */}
                    <div className="skills-grid-new">
                        {technicalSkills.map((group, idx) => (
                            <div className="skill-card-new" key={idx}>
                                <h3 className="skill-category-title">{group.category}</h3>
                                <ul className="skill-list-items">
                                    {group.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={16} className="skill-icon" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Degrees & Certifications */}
                    {/* Degrees & Certifications */}
                    <div className="certifications-wrapper" style={{ marginTop: '80px' }}>
                        <h2 className="text-center section-title" style={{ marginBottom: '60px' }}>Chứng Chỉ & Bằng Cấp</h2>

                        <div className="qualifications-container">
                            {/* Degrees - Timeline Style */}
                            <div className="qualification-group">
                                <h3 className="subsection-title">Bằng Cấp</h3>
                                <div className="timeline">
                                    {degrees.map((item, idx) => (
                                        <div className="timeline-item" key={idx}>
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <div className="timeline-year">{item.year}</div>
                                                <h4 className="timeline-degree">{item.degree}</h4>
                                                <div className="timeline-school"><GraduationCap size={16} style={{ display: 'inline', marginTop: '-3px' }} /> {item.school}</div>
                                                <p className="timeline-desc">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications - 3 Columns Grid */}
                            <div className="qualification-group" style={{ marginTop: '50px' }}>
                                <h3 className="subsection-title">Chứng Chỉ Chuyên Môn</h3>
                                <div className="certs-grid-3col">
                                    {certifications.map((cert, idx) => (
                                        <div className="cert-card" key={idx}>
                                            <Award size={32} className="cert-icon" />
                                            <span className="cert-name">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
