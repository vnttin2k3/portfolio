import React from 'react';
import Card from '../common/Card';
import { ArrowRight } from 'lucide-react';
import './LatestBlog.css';
import blog1 from '../../assets/5-ky-nang-cntt-can-thiet-cho-nguoi-moi-bat-dau.png';
import blog2 from '../../assets/cach-khac-phuc-may-tinh-chay-cham-don-gian.png';
import blog3 from '../../assets/xu-huong-thiet-ke-web-nam-2025.png';

const LatestBlog = () => {
    const posts = [
        {
            id: 1,
            title: '5 Kỹ năng CNTT cần thiết cho người mới bắt đầu',
            excerpt: 'Khám phá những kỹ năng nền tảng giúp bạn tự tin bước vào thế giới công nghệ thông tin.',
            category: 'Học tập',
            image: blog1
        },
        {
            id: 2,
            title: 'Cách khắc phục máy tính chạy chậm đơn giản',
            excerpt: 'Những mẹo nhỏ giúp tối ưu hóa hiệu suất máy tính của bạn mà không cần mang ra tiệm.',
            category: 'Thủ thuật',
            image: blog2
        },
        {
            id: 3,
            title: 'Xu hướng thiết kế web năm 2025',
            excerpt: 'Cập nhật những xu hướng thiết kế website mới nhất để thu hút khách hàng.',
            category: 'Thiết kế',
            image: blog3
        }
    ];

    return (
        <section className="latest-blog section-padding">
            <div className="container">
                <h2 className="section-title text-center">Bài viết mới nhất</h2>
                <div className="blog-grid">
                    {posts.map((post) => (
                        <Card key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <span className="blog-category">{post.category}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href="#" className="blog-read-more">
                                    Đọc tiếp <ArrowRight size={16} />
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    {/* Center button handled by utility classes or flex */}
                    <div className="flex-center">
                        <a href="/blog" style={{ fontWeight: 600, color: 'var(--primary-red)' }}>Xem tất cả bài viết &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;
