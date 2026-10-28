# 01 · Tổng quan

**Phần mềm hỗ trợ công việc** dành cho văn phòng kế toán dịch vụ làm sổ thuế cho nhiều công ty khách hàng. Phần mềm tự lấy hóa đơn điện tử và tờ khai từ Cục Thuế, lập tờ khai 01/GTGT, đối chiếu ngân hàng và công nợ, rồi xuất dữ liệu sang phần mềm kế toán.

- Cài trên **máy chủ nội bộ của văn phòng** ("Phiên bản 4.0 · Máy chủ nội bộ văn phòng"); máy chủ chạy việc nền và hàng đợi Cục Thuế.
- Dữ liệu của khách không gửi sang dịch vụ bên ngoài, ngoài các trang của Cục Thuế mà phần mềm đăng nhập để lấy dữ liệu.

## Người dùng

| Vai trò | Làm gì |
| --- | --- |
| Quản trị viên (admin) | Tạo / khóa tài khoản nhân viên, đặt lại mật khẩu, giao khách cho nhân viên, đổi người phụ trách, xóa và khôi phục công ty, xem nhật ký |
| Nhân viên | Làm việc trên **những công ty được giao**: lấy dữ liệu, kiểm tra, lập và khóa tờ khai, gán mã ngân hàng, xuất file |
| Tự động (hệ thống) | Việc nền hằng đêm: lấy hóa đơn, điền tên hàng, tải tờ khai và thông báo; được ghi trong nhật ký với người làm "Tự động" |

Chi tiết quyền ở [08-phan-quyen-quan-tri.md](08-phan-quyen-quan-tri.md).

## Hai cấp màn hình

**Cấp văn phòng** (không gắn với một công ty): Công ty của tôi; Dùng chung (Quy tắc hạch toán NH, Ngân hàng & cổng TT, Mẫu xuất phần mềm KT); Quản trị (Nhân viên & phân quyền, Nhật ký hoạt động, Thiết lập).

**Cấp công ty** (sau khi chọn công ty):

| # | Màn hình | File thiết kế | Tài liệu |
| --- | --- | --- | --- |
| 1 | Đăng nhập | `Main.dc.html` | 08 |
| 2 | Công ty của tôi (tất cả công ty) | `KhachHang.dc.html` | 02, 08 |
| 3 | Tổng quan một công ty | `Khach_TongQuan.dc.html` | 01 (dưới) |
| 3b | Kiểm tra & cảnh báo | `Khach_CanhBao.dc.html` | 07 |
| 4 | Hóa đơn (Kho hóa đơn) | `HoaDon.dc.html` | 02 |
| 5 | Tờ khai đã nộp | `ToKhaiDaNop.dc.html` | 04 |
| 6 / 6b | Tờ khai GTGT (một màn chung cho khai tháng và khai quý) | `ToKhai.dc.html`, `ToKhaiThang.dc.html` | 03 |
| 7 | Ngân hàng | `NganHang.dc.html` | 05 |
| 8 | Công nợ | `CongNo.dc.html` | 05 |
| 9 | Danh mục | `DanhMuc.dc.html` | 06 |
| 10 | Hồ sơ & tài khoản | `Khach_HoSo.dc.html` | 02 |
| 11 | Quản trị (nhân viên, phân quyền, nhật ký) | `QuanTri.dc.html` | 08 |
| 12 | Hướng dẫn | `HuongDan.dc.html` | — |

## Luồng làm việc một kỳ thuế

1. **Kết nối**: nhập tài khoản Hóa đơn điện tử và Dịch vụ công của công ty trong Hồ sơ (mật khẩu lưu mã hóa).
2. **Lấy dữ liệu**: hằng đêm 22:00 máy chủ tự lấy hóa đơn mới; nhân viên có thể bấm "Lấy dữ liệu thủ công".
3. **Kiểm tra**: xử lý cảnh báo hóa đơn (MST ngừng hoạt động, nghi sai thuế suất, từ 5 triệu chưa thanh toán qua ngân hàng, sai dấu…), gán mã giao dịch ngân hàng, tạo mã đối tượng mới.
4. **Lập tờ khai**: hết kỳ, bản đang làm tự cộng từ Kho + chứng từ ngoài; xử lý hết hóa đơn lệch.
5. **Khóa sổ** khi không còn lệch; nộp tờ khai; phần mềm tải lại tờ khai đã nộp và chứng từ nộp tiền từ Dịch vụ công để đối chiếu.
6. **Sửa sau khi nộp**: lập khai bổ sung lần N ngay trong kỳ đó.
7. **Xuất**: bảng kê Excel, dữ liệu theo mẫu phần mềm kế toán của khách (VD ASP).

## Tổng quan một công ty

Màn đến khi bấm "Vào" một công ty. Gồm:

- **Bốn thẻ tóm tắt** (mỗi thẻ mở màn tương ứng): Tờ khai GTGT (kỳ đang làm, hạn, số HĐ lệch, số HĐ trong năm và mốc dữ liệu đủ đến), Ngân hàng (số tài khoản, khớp số dư sao kê, số giao dịch chưa có mã), Công nợ (số HĐ quá hạn), Danh mục (số đối tượng, đối tượng chưa tạo, NCC mới đã tự tạo mã).
- **Việc cần làm cho khách này**: mỗi việc có tiêu đề, chi tiết, nút dẫn tới màn xử lý; màu cam = cần xử lý gấp, xanh = việc thường. Ví dụ: Gán mã N giao dịch ngân hàng · Xử lý N hóa đơn lệch (xử lý xong mới khóa sổ được) · Kiểm tra N hóa đơn · Khóa sổ tờ khai kỳ X (hạn …) · Nhập mật khẩu Dịch vụ công.

Mọi số trên Tổng quan phải tính từ dữ liệu thật và khớp với các màn chi tiết (VD số HĐ lệch = số trên Tờ khai và Kiểm tra & cảnh báo). Quy tắc sinh và sắp xếp "Việc cần làm" là điểm chờ chốt.

## Ngày và năm làm việc

- Ô **Năm** ở thanh trên là năm làm việc (2026 / 2025 / 2024); đổi năm thì mọi màn đổi theo.
- Kỳ khai (tháng / quý) có thể khác nhau giữa các năm của cùng một công ty.
- "Hôm nay" và "dữ liệu đủ đến" là hai mốc khác nhau: dữ liệu chỉ đủ đến lần lấy thành công gần nhất. Màn nào hiện số theo thời điểm phải ghi rõ mốc (VD "Số liệu đến 17/10/2026").
