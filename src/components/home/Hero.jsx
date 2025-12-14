import React from 'react';
import Button from '../common/Button';
import { ArrowRight, BookOpen } from 'lucide-react';
import './Hero.css';
import heroImg from '../../assets/hero-img.JPG';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Thầy Tín – Công nghệ thông tin từ <span className="text-gradient">cơ bản đến thực tế</span>
                    </h1>
                    <p className="hero-subtitle">
                        IT Staff Specialist – Dạy Tin học & Lập trình – Thiết kế Website
                    </p>
                    <div className="hero-actions">
                        <Button variant="gradient" size="lg" onClick={() => console.log('Portfolio')}>
                            Xem Portfolio <ArrowRight size={20} />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => console.log('Blog')}>
                            Đọc Blog <BookOpen size={20} />
                        </Button>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-img-wrapper">
                        <img src={heroImg} alt="Thầy Tín" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
