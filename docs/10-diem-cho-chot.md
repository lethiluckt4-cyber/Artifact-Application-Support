# 10 · Điểm chờ chốt và chỗ thiết kế cần sửa

Ngày lập: 28/10/2026. Đội lập trình **không tự quyết** các điểm ở phần A; hỏi chủ dự án trước khi làm phần liên quan. Phần B là chỗ bản thiết kế chưa khớp tài liệu: làm theo tài liệu.

## A. Điểm chờ chốt

### Thuế GTGT

| # | Câu hỏi | Ảnh hưởng | Tài liệu |
| --- | --- | --- | --- |
| T1 | Hóa đơn điều chỉnh, thay thế từ 01/7/2026 kê khai vào kỳ lập hóa đơn điều chỉnh (đang làm) hay khai bổ sung kỳ của hóa đơn gốc? Cần bài hướng dẫn điều chỉnh hóa đơn từ 01/7/2026 | Kỳ kê khai, khai bổ sung | 03 |
| T2 | Hóa đơn Không khấu trừ: bỏ hẳn khỏi [23]/[24] (đang làm) hay vẫn cộng [23]/[24] nhưng không cộng [25]? | [23], [24], [25] | 03 |
| T3 | Dòng mua vào thuế suất 0%, KCT, KKKNT có đưa vào [23] không? | [23] | 03 |
| T4 | Hóa đơn 8%: nghị định giảm thuế đang áp dụng và mẫu phụ lục giảm thuế đi kèm | [32], [33], phụ lục | 03 |
| T5 | Sai sót thuế đầu vào: điều khoản riêng trong TT 89/2026 (loại trừ ở trường hợp 1 và 2.1) để chốt chỉ tiêu ghi hóa đơn mua vào về trễ | [23]/[24] hay [37]/[38] | 03 |
| T6 | Ngày kê khai mua vào: ngày lập hóa đơn hay ngày ký / ngày cấp mã khi các ngày này khác kỳ | Kỳ của hóa đơn | 03 |
| T7 | Ngày nghỉ lễ khi tính hạn nộp (hiện chỉ lùi thứ 7, chủ nhật) | Hạn nộp, tiền chậm nộp | 03, 04 |
| T8 | So lại chỉ tiêu nếu TT 89/2026 đổi mẫu tờ khai 01/GTGT | Toàn bộ tờ khai | 03 |
| T9 | Ngưỡng 5 triệu tính trên tổng thanh toán đã có thuế hay tiền hàng | Cảnh báo, điều kiện khấu trừ | 07 |
| T10 | Tiền chậm nộp khi nộp lần đầu trễ hạn | Chứng từ nộp thuế | 04 |
| T11 | Ngưỡng doanh thu và cách phần mềm đề xuất kỳ khai đầu năm (hiện: ≤ 50 tỷ → quý) | Hồ sơ | 02 |

### Dữ liệu và kết nối

| # | Câu hỏi | Tài liệu |
| --- | --- | --- |
| D1 | "HĐ trong kho" đếm những loại nào (bán ra, mua vào, máy tính tiền, nhập tay) | 02 |
| D2 | Chứng từ nhập tay: thêm ở màn Hóa đơn hay chỉ ở tab Chứng từ ngoài của Tờ khai (phải là cùng dữ liệu) | 02, 03 |
| D3 | Đánh dấu "Không khấu trừ" / "Để kỳ sau" làm ở màn nào ngoài Kiểm tra & cảnh báo | 02 |
| D4 | Tần suất tự lấy từ Dịch vụ công: hằng đêm hay mỗi tuần | 04 |
| D5 | Đăng nhập lại thất bại (sai mật khẩu lần nữa, captcha sai) hiện thế nào | 02 |
| D6 | Danh sách trạng thái CQT của tờ khai ngoài "Đã chấp nhận"; xử lý khi đối chiếu "Lệch" | 04 |

### Ngân hàng, công nợ, danh mục

| # | Câu hỏi | Tài liệu |
| --- | --- | --- |
| N1 | Quy tắc ghép tự động giao dịch ngân hàng với hóa đơn (mã đối tượng, số tiền, số HĐ trong nội dung, khoảng ngày) | 05 |
| N2 | Giao dịch qua cổng thanh toán (ShopeePay, VNPay, MoMo): gán cho cổng hay khách thật | 05 |
| N3 | Định dạng file sao kê theo từng ngân hàng | 05 |
| N4 | Bảng Quy tắc hạch toán NH: lãi tiền gửi, phí, tạm ứng, chuyển nội bộ, hoàn tiền | 05 |
| N5 | Kỳ của báo cáo công nợ; trình bày số dư thuần hay tách dư Nợ / dư Có | 05 |
| N6 | Thứ tự ưu tiên khi nhiều quy tắc ghép cùng khớp | 05 |
| N7 | Quy tắc sinh mã đối tượng không có MST; cột file nhập / xuất Excel danh mục | 06 |
| N8 | Chiết khấu thanh toán (khác chiết khấu thương mại) xử lý thế nào | 03, 05 |

### Quyền và quản trị

| # | Câu hỏi | Tài liệu |
| --- | --- | --- |
| Q1 | Nhân viên có được thêm công ty, xuất Excel danh sách, xem Cảnh báo kết nối, sửa Hồ sơ và tài khoản Cục Thuế không | 08 |
| Q2 | Có cần quyền chi tiết hơn hai vai trò (chỉ xem, được khóa sổ…) | 08 |
| Q3 | "Ghi nhớ trên máy này" nhớ gì và bao lâu; khóa tạm sau bao nhiêu lần sai mật khẩu | 08 |
| Q4 | Màn thùng rác; khôi phục công ty thì nhập lại mật khẩu Cục Thuế | 08 |
| Q5 | Thời gian lưu nhật ký | 08 |
| Q6 | Quy tắc sinh "Việc cần làm" ở Tổng quan | 01, 07 |
| Q7 | Nút thu gọn nhóm menu (để làm sau cùng) | 09 |

## B. Chỗ thiết kế chưa khớp tài liệu (làm theo tài liệu)

| # | Màn | Thiết kế đang | Phải là |
| --- | --- | --- | --- |
| B1 | Công ty của tôi | Chế độ Nhân viên vẫn thấy mọi công ty | Nhân viên chỉ thấy công ty được giao |
| B2 | Công ty của tôi | Cột Phụ trách một người | Đủ những người được giao (một khách nhiều người) |
| B3 | Công ty của tôi | Cảnh báo kết nối nối với công ty theo vị trí dòng | Nối theo MST |
| B4 | Công ty của tôi | Thẻ "đến hạn trong 14 ngày" không lọc theo ngày; dải Hạn gõ cứng | Tính từ hạn nộp thật |
| B5 | Hóa đơn | Cột Tờ khai gán kỳ theo ngày lập cho mọi hóa đơn | Mua vào về sau khi kỳ đã khóa ghi kỳ đang làm |
| B6 | Hồ sơ | Cột Đối chiếu ghi "Q1 → Q4 khớp" khi Q3 chưa khóa, Q4 chưa đến kỳ | Chỉ đối chiếu kỳ đã nộp |
| B7 | Tờ khai đã nộp | Hai nơi nhập mật khẩu Dịch vụ công | Một nơi (Hồ sơ); nút ở các màn mở cùng hộp nhập |
| B8 | Kiểm tra & cảnh báo, Tờ khai | Hóa đơn về trễ ghi "Quý 2 đã nộp (lần cuối 05/09)" dù đã có bổ sung lần 2 ngày 12/10 | Ngày của lần khai sau cùng |
| B9 | Kiểm tra & cảnh báo | Cảnh báo 5 triệu đếm cả ở nhóm Tờ khai và nhóm Ngân hàng; số các nhóm sau gõ cứng | Đếm một lần, số tính động |
| B10 | Kiểm tra & cảnh báo | Mỗi hóa đơn chỉ hiện một vấn đề | Hiện mọi vấn đề của hóa đơn |
| B11 | Ngân hàng | "Sửa" mã của giao dịch đã có mã không đổi được mã | Sửa được, điền sẵn mã cũ |
| B12 | Ngân hàng | Chưa có thao tác ghép giao dịch với hóa đơn | Có (xem 05) |
| B13 | Ngân hàng / Danh mục | Mã khách lẻ `KL_0012` và `KHACHLE` | Một mã `KHACHLE` |
| B14 | Danh mục | Bảng "Chưa tạo" không hiện dòng (lỗi cú pháp `{chuaTao}`) | Hiện danh sách |
| B15 | Danh mục | Hạn thanh toán nhập được cho khách hàng | Chỉ nhà cung cấp |
| B16 | Công nợ | Thẻ tổng Phải trả không khớp bảng tổng hợp; số liệu một số NCC khác nhau giữa các bảng | Thẻ = tổng bảng; một nguồn số liệu |
| B17 | Tờ khai GTGT | Chứng từ ngoài thêm tay chưa cộng vào [23]/[24] | Cộng (loại Nhập khẩu vào cả [23a]/[24a]) |
| B18 | Tờ khai GTGT | Tải về chỉ hiện thông báo, chưa tạo file | Tạo file thật |
| B19 | Nhiều màn | Số "2026", ngày "hôm nay" gõ cứng | Theo năm đang chọn và ngày hệ thống |
