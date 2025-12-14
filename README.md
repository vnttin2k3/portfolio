# Portfolio Thầy Tín

Website cá nhân giới thiệu về Thầy Tín, Kỹ năng, Khóa học và Blog chia sẻ kiến thức CNTT.

## Công nghệ sử dụng
- React + Vite
- CSS (Custom Properties, Flexbox, Grid)
- Lucide React (Icons)

## Cài đặt và Chạy project

1.  Clone repo:
    ```bash
    git clone <your-repo-url>
    ```
2.  Cài đặt dependencies:
    ```bash
    npm install
    ```
3.  Chạy môi trường dev:
    ```bash
    npm run dev
    ```

## Hướng dẫn Deploy lên Vercel

### 1. Chuẩn bị
- Một tài khoản [GitHub](https://github.com/)
- Một tài khoản [Vercel](https://vercel.com/) (đăng nhập bằng GitHub)
- Project code đã được push lên GitHub repository của bạn.

### 2. Deploy lần đầu
1.  Truy cập [Vercel Dashboard](https://vercel.com/dashboard).
2.  Bấm nút **"Add New..."** -> **"Project"**.
3.  Ở phần **Import Git Repository**, chọn repo `portfolio` của bạn và bấm **Import**.
4.  Ở màn hình **Configure Project**:
    - **Framework Preset**: Vercel thường tự động nhận diện là `Vite`. Nếu không, chọn `Vite`.
    - **Root Directory**: Để mặc định (`./`).
    - **Build Command**: `npm run build` (Mặc định).
    - **Output Directory**: `dist` (Mặc định).
5.  Bấm **Deploy**.
6.  Chờ khoảng 1 phút, Vercel sẽ build và cung cấp domain để truy cập website (ví dụ: `portfolio-thay-tin.vercel.app`).

### 3. Cập nhật thông tin (Deploy lại)
Quy trình cập nhật cực kỳ đơn giản nhờ tính năng **Automatic Deployments** của Vercel:

1.  Mở code trên máy tính, thực hiện các thay đổi (ví dụ: sửa text, thay ảnh, viết blog mới).
2.  Lưu lại các file đã sửa.
3.  Commit và Push code lên GitHub:
    ```bash
    git add .
    git commit -m "Mô tả ngắn gọn về thay đổi"
    git push origin main
    ```
4.  **Xong!** Ngay khi bạn push lên nhánh `main` trên GitHub, Vercel sẽ **tự động** phát hiện sự thay đổi, build lại và update website của bạn sau 1-2 phút. Bạn không cần làm gì thêm trên Vercel.
