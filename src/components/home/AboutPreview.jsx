import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import profilesImg from '../../assets/profile.png';
import './AboutPreview.css';

const AboutPreview = () => {
    return (
        <section className="about-preview section-padding">
            <div className="container about-preview-container">
                <div className="about-image">
                    <img src={profilesImg} alt="Thầy Tín" className="about-img-real" />
                </div>
                <div className="about-content">
                    <h2 className="about-title">Về Thầy Tín</h2>
                    <p className="about-text">
                        Với hơn 10 năm kinh nghiệm trong lĩnh vực Công nghệ thông tin, tôi đam mê chia sẻ kiến thức và hỗ trợ mọi người tiếp cận công nghệ một cách dễ dàng nhất. Từ sửa chữa phần cứng, cài đặt hệ thống đến lập trình và thiết kế web, tôi luôn sẵn sàng đồng hành cùng bạn.
                    </p>
                    <Button variant="outline" onClick={() => console.log('Go to About')}>
                        Tìm hiểu thêm <ArrowRight size={20} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
