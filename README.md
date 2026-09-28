# English with Ms. Annie – Website giáo viên Nguyễn Thị Kim Anh

Trang giới thiệu giáo viên song ngữ (Tiếng Việt / English), có chế độ sáng/tối, chạy trên GitHub Pages và không cần máy chủ riêng.

## Cấu trúc thư mục

```
/
├── index.html              ← Giao diện + logic. Hiếm khi phải sửa.
├── content/
│   └── site-data.js        ← TOÀN BỘ nội dung song ngữ. Cập nhật thông tin thì sửa ở đây.
├── assets/
│   ├── avatar.jpg          ← Ảnh chân dung (đổi ảnh thì ghi đè file này)
│   ├── favicon.svg         ← Logo trên tab trình duyệt
│   ├── apple-touch-icon.png← Biểu tượng khi "Thêm vào MH chính" trên iPhone/iPad
│   └── icon-192.png, icon-512.png ← Biểu tượng cho Android
├── site.webmanifest        ← Tên + biểu tượng khi cài lên màn hình chính Android
└── README.md
```

## Cập nhật nội dung (không cần biết lập trình)

**Cách 1: sửa trực tiếp trên GitHub (khuyến nghị)**
1. Mở repository và vào `content/site-data.js`.
2. Bấm biểu tượng ✏️ (Edit this file).
3. Sửa chữ trong dấu nháy kép. Mỗi mục có 2 dòng `vi:` và `en:`, nhớ sửa cả hai.
4. Bấm **Commit changes**. Sau 1–3 phút trang tự cập nhật (GitHub cache tối đa khoảng 10 phút; nhấn Ctrl+F5 để tải lại).

**Cách 2: sửa trên máy rồi đẩy lên**
Sửa file bằng VS Code, mở `index.html` bằng trình duyệt để xem trước, sau đó `git add . && git commit -m "Cập nhật nội dung" && git push`.

### Quy ước định dạng trong chữ
| Viết | Hiển thị |
|---|---|
| `**chữ**` | chữ **đậm** |
| `==chữ==` | chữ tô sáng kiểu bút dạ |
| `[[chữ]]` | chữ màu xanh thương hiệu |

### Thương hiệu
Tên thương hiệu nằm ở `profile.brand` (logo, chân trang, tiêu đề tab). Nếu đổi tên, sửa thêm `meta.title`, `site.webmanifest` và thẻ `apple-mobile-web-app-title` trong `index.html`.

### Các thao tác thường gặp
- **Thêm kinh nghiệm mới:** trong `experience.items`, sao chép một khối `{ … },` rồi dán lên **đầu** danh sách. Chuyển `current: true` sang mục mới và xóa `current: true` ở mục cũ.
- **Thêm chứng chỉ:** thêm một khối vào `credentials.certificates.items`. Khi đã hoàn thành thì xóa `inProgress: true`.
- **Thêm phản hồi học viên:** thêm vào `testimonials.items`. Mục này tự hiện khi có ít nhất một phản hồi. Chỉ đưa lên phản hồi thật và đã được người viết đồng ý.
- **Đổi ảnh:** ghi đè `assets/avatar.jpg` (ảnh dọc 3:4, rộng khoảng 600px, dưới 150 KB).

### Khi trang báo "Không tải được nội dung"
Nguyên nhân gần như luôn là file `site-data.js` bị sai cú pháp: thiếu dấu phẩy giữa hai mục, thiếu dấu nháy, hoặc dùng dấu `"` bên trong chữ (hãy dùng `“ ”`). Xem lại dòng vừa sửa. Trên GitHub bạn cũng có thể mở tab **History** để khôi phục bản trước.

Nếu thiếu bản dịch tiếng Anh, trang sẽ tạm hiện tiếng Việt và ghi cảnh báo trong Console (F12).

## Ngôn ngữ & giao diện
- Ngôn ngữ mặc định lấy theo trình duyệt (tiếng Việt → VI, còn lại → EN). Lựa chọn của người xem được ghi nhớ.
- Có thể chia sẻ link đúng ngôn ngữ: `…/?lang=en` hoặc `…/?lang=vi`.
- Chế độ sáng/tối mặc định theo cài đặt hệ thống. Người xem bấm nút ☀/☾ để đổi, và lựa chọn này được ghi nhớ.
- Muốn đổi bảng màu thì sửa các biến `--paper`, `--brand`… trong thẻ `<style>` của `index.html` (khối `:root` cho chế độ sáng, `.dark` cho chế độ tối).

## Tương thích thiết bị
Đã kiểm tra bố cục ở 16 kích thước màn hình (từ 320px đến 2560px, cả dọc và ngang) cho cả 2 ngôn ngữ. Trang hỗ trợ tai thỏ/Dynamic Island của iPhone, chữ tự phóng to trên màn hình Full HD, 2K và 4K, vùng bấm đủ lớn cho ngón tay, và thanh địa chỉ đổi màu theo chế độ sáng/tối.
Sau mỗi lần sửa giao diện, nên thử lại trên một iPhone thật (Safari) và một điện thoại Android thật (Chrome).

## Xuất bản lên GitHub Pages
1. Tạo repository **Public**, rồi upload **cả thư mục** (giữ nguyên `content/` và `assets/`).
2. Vào **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.
3. Địa chỉ trang: `https://<tên-tài-khoản>.github.io/<tên-repo>/`
