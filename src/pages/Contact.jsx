import React from 'react';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất.');
    };

    return (
        <div className="contact-page section-padding">
            <div className="container">
                <h1 className="section-title text-center" style={{ marginBottom: '48px' }}>Liên hệ</h1>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Kết nối ngay</h2>
                        <p>
                            Bạn cần hỗ trợ kỹ thuật, muốn học lập trình hay thiết kế một website chuyên nghiệp? Đừng ngần ngại nhắn tin cho Thầy Tín nhé!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail size={24} />
                                <span>contact@thaytin.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={24} />
                                <span>0909 123 456</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={24} />
                                <span>TP. Hồ Chí Minh, Việt Nam</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Họ và tên</label>
                                <input type="text" id="name" className="form-input" placeholder="Nhập tên của bạn" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-input" placeholder="example@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Nội dung tin nhắn</label>
                                <textarea id="message" className="form-textarea" placeholder="Bạn cần hỗ trợ gì?" required></textarea>
                            </div>

                            <Button type="submit" variant="gradient" size="lg" style={{ marginTop: '16px' }}>
                                Gửi tin nhắn <Send size={20} />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
