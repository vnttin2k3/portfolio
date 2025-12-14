import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Search } from 'lucide-react';
import './Blog.css';
import { useNavigate } from 'react-router-dom';
import thumbnail from '../assets/lo-trinh-hoc-lap-trinh-web-frontend-2026.png';

const Blog = () => {
    const navigate = useNavigate();

    const featuredPost = {
        id: 99,
        title: 'Lộ trình học Lập trình Web Frontend 2025',
        excerpt: 'Hướng dẫn chi tiết từ số 0 đến khi có việc làm với ReactJS, NextJS và các công nghệ mới nhất.',
        category: 'Featured',
        image: thumbnail
    };

    const posts = [
        {
            id: 1,
            title: 'Khắc phục lỗi màn hình xanh trên Windows',
            excerpt: 'Tổng hợp các mã lỗi thường gặp và cách xử lý nhanh chóng.',
            category: 'IT Support',
            date: 'Dec 10, 2025',
            image: '💻'
        },
        {
            id: 2,
            title: 'Tại sao website của bạn cần chuẩn SEO?',
            excerpt: 'Lợi ích của SEO đối với doanh nghiệp và cách tối ưu cơ bản.',
            category: 'Web Design',
            date: 'Dec 05, 2025',
            image: '📊'
        },
        {
            id: 3,
            title: 'Review khóa học Tin học văn phòng tại Thầy Tín',
            excerpt: 'Chia sẻ cảm nhận của học viên sau khi hoàn thành khóa học.',
            category: 'Teaching',
            date: 'Nov 28, 2025',
            image: '✨'
        },
        {
            id: 4,
            title: 'Cấu hình mạng Wifi Mesh cho nhà cao tầng',
            excerpt: 'Giải pháp phủ sóng wifi toàn bộ căn nhà 4 tầng hiệu quả.',
            category: 'Networking',
            date: 'Nov 20, 2025',
            image: '📡'
        }
    ];

    const categories = ['IT Support (12)', 'Teaching (8)', 'Web Design (15)', 'Networking (5)', 'Tips & Tricks (20)'];

    return (
        <div className="blog-page section-padding">
            <div className="container">
                <h1 className="section-title text-center" style={{ marginBottom: '48px' }}>Blog</h1>

                {/* Featured Post */}
                <div
                    className="featured-post"
                    onClick={() => navigate('/blog/frontend-roadmap-2025')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="featured-img">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="featured-content">
                        <span className="featured-badge">{featuredPost.category}</span>
                        <h2 className="featured-title">{featuredPost.title}</h2>
                        <p className="featured-excerpt">{featuredPost.excerpt}</p>
                    </div>
                </div>

                <div className="blog-layout">
                    {/* Main Content */}
                    <div className="blog-main">
                        <div className="blog-list-grid">
                            {posts.map(post => (
                                <div key={post.id} className="blog-list-item">
                                    <div className="blog-item-img">{post.image}</div>
                                    <div className="blog-item-info">
                                        <span style={{ color: 'var(--primary-red)', fontSize: '0.875rem', fontWeight: 600 }}>{post.category}</span>
                                        <h3 style={{ margin: '8px 0' }}>{post.title}</h3>
                                        <p className="text-muted" style={{ marginBottom: '16px' }}>{post.excerpt}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#999' }}>{post.date}</span>
                                            <a href="#" style={{ fontWeight: 600 }}>Read more</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="blog-sidebar">
                        <div className="sidebar-widget">
                            <div className="search-bar">
                                <input type="text" placeholder="Tìm kiếm bài viết..." className="search-input" />
                                <Button variant="primary" style={{ padding: '0 12px' }}><Search size={20} /></Button>
                            </div>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="widget-title">Chuyên mục</h3>
                            <ul className="category-list">
                                {categories.map((cat, idx) => (
                                    <li key={idx}><a href="#">{cat} <span>&rarr;</span></a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="widget-title">Bài viết nổi bật</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {posts.slice(0, 2).map(p => (
                                    <div key={p.id} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <div style={{ width: '60px', height: '60px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                            {p.image}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{p.title}</h4>
                                            <span style={{ fontSize: '0.8rem', color: '#999' }}>{p.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Blog;
