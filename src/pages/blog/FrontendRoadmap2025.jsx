import React from 'react';
import './BlogPost.css';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FrontendRoadmap2025 = () => {
    const navigate = useNavigate();

    return (
        <div className="blog-post-page section-padding">
            <div className="container blog-post-container">
                <button className="back-btn" onClick={() => navigate('/blog')}>
                    <ArrowLeft size={20} /> Quay lại Blog
                </button>

                <article className="blog-content-wrapper">
                    <header className="blog-header">
                        <span className="blog-category-tag">Career Path</span>
                        <h1 className="blog-h1">Lộ trình học Lập trình Web Frontend 2025</h1>
                        <div className="blog-meta">
                            <span>December 14, 2025</span> • <span>Thầy Tín</span>
                        </div>
                    </header>

                    <div className="blog-body">
                        <p className="lead">
                            Để tự học trở thành Web Developer trong năm 2026, bạn nên đi theo lộ trình từ nền tảng (HTML/CSS/JS) → frontend framework → backend + database → dự án thực tế + portfolio, đồng thời tận dụng AI để học và code nhanh hơn. Nếu học đều đặn 6–12 tháng, bạn có thể đạt mức xin thực tập/freelance hoặc junior, nhất là nếu đã quen với IT trước đó như bạn.
                        </p>

                        <hr />

                        <h2>Tổng quan lộ trình 6–12 tháng</h2>
                        <ul>
                            <li><strong>0–3 tháng:</strong> HTML, CSS, JavaScript cơ bản, Git/GitHub, làm 2–3 website tĩnh (landing page, blog, CV online).</li>
                            <li><strong>3–6 tháng:</strong> JavaScript nâng cao, 1 frontend framework (ưu tiên React/Next.js), CSS framework (Tailwind/Bootstrap), responsive, deploy lên Vercel/Netlify.</li>
                            <li><strong>6–12 tháng:</strong> Backend (Node.js + Express), database (MongoDB hoặc PostgreSQL/MySQL), API, auth, làm 2–3 web app full-stack và hoàn thiện portfolio.</li>
                        </ul>

                        <hr />

                        <h2>Giai đoạn 1: Nền tảng bắt buộc</h2>
                        <p>
                            Tập trung học vững 3 thứ: <strong>HTML5, CSS3, JavaScript ES6+</strong> vì đây vẫn là nền tảng của web đến 2026. Song song, làm quen Git/GitHub để quản lý code và luyện thói quen làm việc như dev chuyên nghiệp.
                        </p>
                        <p><strong>Gợi ý nội dung:</strong></p>
                        <ul>
                            <li><strong>HTML5:</strong> Thẻ semantic, form, cấu trúc trang, SEO & accessibility cơ bản.</li>
                            <li><strong>CSS3:</strong> Flexbox, Grid, responsive, biến CSS, animation; thử Tailwind hoặc Bootstrap sau khi nắm CSS thuần.</li>
                            <li><strong>JavaScript:</strong> Biến, hàm, mảng, object, DOM, fetch API, promise, async/await, module.</li>
                        </ul>

                        <hr />

                        <h2>Giai đoạn 2: Frontend hiện đại</h2>
                        <p>
                            Khi đã tự làm được vài trang tĩnh với JS thuần, chuyển sang frontend framework để theo kịp thị trường 2025–2026. <strong>React</strong> vẫn là lựa chọn an toàn, kết hợp <strong>Next.js</strong> để làm SPA/SSR, tối ưu SEO và performance.
                        </p>
                        <p><strong>Những mảng nên học:</strong></p>
                        <ul>
                            <li><strong>React:</strong> Component, props, state, hooks, routing, gọi API, quản lý state (Context, Redux hoặc Zustand nếu cần).</li>
                            <li><strong>Next.js:</strong> Routing, data fetching, API routes, tối ưu image, deploy lên Vercel.</li>
                            <li><strong>UI:</strong> Tailwind CSS hoặc một UI kit (MUI, Ant Design) để tăng tốc độ làm giao diện.</li>
                        </ul>

                        <hr />

                        <h2>Giai đoạn 3: Backend, Database, DevOps cơ bản</h2>
                        <p>
                            Để trở thành Web Developer “đa năng” hoặc hướng fullstack, bạn nên nắm thêm backend và database thay vì chỉ frontend. Stack phổ biến, dễ tiếp cận là <strong>Node.js + Express + MongoDB (MERN)</strong> hoặc Node.js + Express + PostgreSQL/MySQL.
                        </p>
                        <p><strong>Nội dung quan trọng:</strong></p>
                        <ul>
                            <li><strong>Backend:</strong> REST API, routing, middleware, xử lý auth (JWT/cookie), validation, upload file cơ bản.</li>
                            <li><strong>Database:</strong> CRUD, quan hệ (SQL) hoặc document (MongoDB), index, cơ bản tối ưu truy vấn.</li>
                            <li><strong>Triển khai:</strong> Deploy backend lên Render/Railway hoặc VPS, frontend lên Vercel/Netlify, kết nối domain.</li>
                        </ul>

                        <hr />

                        <h2>Giai đoạn 4: Dự án, portfolio và kỹ năng 2026</h2>
                        <p>
                            Thay vì chỉ học tutorial, hãy đặt mục tiêu làm 3–5 dự án “có thể cho người khác dùng thật”, rồi đưa hết lên GitHub + online demo. Dự án nên có: auth, gọi API, CRUD, responsive, deploy đầy đủ để mô phỏng sản phẩm thực tế.
                        </p>
                        <p><strong>Một số điểm cộng cho năm 2026:</strong></p>
                        <ul>
                            <li>Biết dùng <strong>AI hỗ trợ code</strong> (Copilot, ChatGPT, Perplexity) để gợi ý code, review, debug, nhưng luôn tự hiểu và chỉnh lại code.</li>
                            <li>Nắm kiến thức cơ bản về performance, SEO, accessibility, security (XSS, CSRF, hash password) để vượt lên mặt bằng “chỉ biết code chạy được”.</li>
                        </ul>

                        <hr />

                        <h2>Bảng tóm tắt lộ trình & công nghệ</h2>
                        <div className="table-responsive">
                            <table className="blog-table">
                                <thead>
                                    <tr>
                                        <th>Giai đoạn</th>
                                        <th>Thời lượng gợi ý</th>
                                        <th>Công nghệ chính</th>
                                        <th>Mục tiêu đạt được</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nền tảng</td>
                                        <td>0–3 tháng</td>
                                        <td>HTML5, CSS3, JS ES6, Git/GitHub</td>
                                        <td>Tự làm 2–3 trang web tĩnh, push code lên GitHub</td>
                                    </tr>
                                    <tr>
                                        <td>Frontend hiện đại</td>
                                        <td>3–6 tháng</td>
                                        <td>React, Next.js, Tailwind/Bootstrap</td>
                                        <td>Làm 1–2 SPA/website responsive, deploy Vercel/Netlify</td>
                                    </tr>
                                    <tr>
                                        <td>Backend & DB</td>
                                        <td>6–9 tháng</td>
                                        <td>Node.js, Express, MongoDB/SQL</td>
                                        <td>Xây 1–2 REST API, app fullstack có đăng nhập & CRUD</td>
                                    </tr>
                                    <tr>
                                        <td>Portfolio & kỹ năng 2026</td>
                                        <td>9–12 tháng</td>
                                        <td>AI tools, tối ưu performance, SEO, security</td>
                                        <td>3–5 dự án thật, portfolio online, sẵn sàng xin việc/freelance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <p className="blog-footer-note">
                            Nếu bạn cho biết hiện đang ở mức nào (chưa biết gì, biết chút JS, hay từng chạm vào PHP/.NET, v.v.), có thể tinh chỉnh lại lộ trình chi tiết theo từng tháng và gợi ý tài nguyên miễn phí cụ thể (khóa học, tài liệu, kênh YouTube).
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default FrontendRoadmap2025;
