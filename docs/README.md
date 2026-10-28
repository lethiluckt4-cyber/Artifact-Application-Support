# Tài liệu nghiệp vụ · Phần mềm hỗ trợ công việc

Bộ tài liệu này ghi lại các quy tắc nghiệp vụ đã trao đổi và thống nhất khi thiết kế phần mềm, để đội lập trình làm đúng. Đọc cùng với:

- **Thiết kế** (`design/`): giao diện và hành vi từng màn hình. Logic trong từng file `.dc.html` là bản mẫu chạy được của các quy tắc dưới đây.
- **SOW**: phạm vi công việc, mốc và nghiệm thu (tài liệu riêng của dự án).
- **Tài liệu này** (`docs/`): vì sao và theo quy tắc nào. Khi thiết kế và tài liệu khác nhau, **tài liệu là chuẩn** và cần báo lại để sửa thiết kế.

Ngày chốt: 19/10/2026 (thiết kế bản 98). Số liệu trong thiết kế là số mẫu, ngày dữ liệu mẫu 17/10/2026.

## Mục lục

| File | Nội dung |
| --- | --- |
| [01-tong-quan.md](01-tong-quan.md) | Phần mềm làm gì, người dùng, danh sách màn hình, luồng làm việc |
| [02-ket-noi-kho-hoa-don.md](02-ket-noi-kho-hoa-don.md) | Kết nối Cục Thuế, bảo mật tài khoản, lấy hóa đơn, Kho hóa đơn, tải về |
| [03-to-khai-gtgt.md](03-to-khai-gtgt.md) | Tờ khai 01/GTGT: kỳ khai, chỉ tiêu, bảng kê, khóa sổ, khai bổ sung, cả năm |
| [04-to-khai-da-nop.md](04-to-khai-da-nop.md) | Tờ khai đã nộp, thông báo CQT, chứng từ nộp thuế, tiền chậm nộp |
| [05-ngan-hang-cong-no.md](05-ngan-hang-cong-no.md) | Giao dịch ngân hàng, ghép với hóa đơn, công nợ và quá hạn |
| [06-danh-muc.md](06-danh-muc.md) | Đối tượng, mặt hàng, ghép ngân hàng |
| [07-kiem-tra-canh-bao.md](07-kiem-tra-canh-bao.md) | Các loại cảnh báo, điều kiện và cách xử lý |
| [08-phan-quyen-quan-tri.md](08-phan-quyen-quan-tri.md) | Vai trò, phân quyền, quản lý công ty, xóa và khôi phục |
| [09-quy-uoc-giao-dien.md](09-quy-uoc-giao-dien.md) | Quy ước dùng chung: bố cục, bảng, lọc, file đính kèm, thông báo |
| [10-diem-cho-chot.md](10-diem-cho-chot.md) | Các điểm chưa chốt, cần trả lời trước khi làm phần liên quan |

## Quy ước trong tài liệu

- **Đã chốt**: mặc định mọi quy tắc trong tài liệu là đã chốt, trừ khi ghi "chờ chốt".
- **Chờ chốt**: liệt kê ở cuối từng file và gom lại trong `10-diem-cho-chot.md`.
- Mã chỉ tiêu dạng `[34]` là chỉ tiêu trên mẫu tờ khai 01/GTGT.
- "Ví dụ mẫu" là số trong thiết kế, dùng để đối chiếu cách tính, không phải dữ liệu thật.

## Kiểm tra

`tests/` có bộ kiểm tra logic chạy trên thiết kế (Node.js). Khi làm phần mềm thật, các bất biến đó cần thành test tự động của hệ thống (xem mục 13 trong `03-to-khai-gtgt.md`).
