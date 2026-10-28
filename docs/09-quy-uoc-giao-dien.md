# 09 · Quy ước giao diện dùng chung

Các quy ước áp dụng cho mọi màn hình trong `design/`. Khi một màn có cách làm riêng, tài liệu của màn đó ghi rõ.

## Bố cục

- Thanh trên cùng: ô **Công ty** (chọn công ty đang làm), ô **Năm**, nút "Công ty của tôi". Không có chip / cửa sổ Dịch vụ công ở thanh trên.
- Menu trái theo nhóm: Tổng quan, Kiểm tra & cảnh báo; **Nghiệp vụ** (Hóa đơn, Tờ khai GTGT, Tờ khai đã nộp, Ngân hàng, Công nợ, Tra cứu MST đối tác); **Danh mục** (Đối tượng, Mặt hàng, Ghép ngân hàng); **Thông tin** (Hồ sơ & tài khoản); Hướng dẫn.
- Các nhóm menu **luôn mở**; chức năng thu gọn nhóm làm sau cùng.
- Mỗi màn chỉ **một thanh cuộn dọc** (không lồng hai vùng cuộn).
- Bố cục gọn: ưu tiên thấy được trọn nội dung chính (VD nguyên mặt tờ khai) mà không phải cuộn nhiều.

## Chọn công ty

- Chọn công ty ở thanh trên = đổi công ty cho **toàn bộ** phần mềm (mọi màn hiện dữ liệu công ty vừa chọn). Phần mềm nhớ công ty đang làm cho lần mở sau.
- Menu Tờ khai GTGT mở đúng một màn chung; màn tự hiện 12 tháng hoặc 4 quý theo kỳ khai của năm đang chọn.
- Trong bản thiết kế mỗi màn là một bản vẽ riêng nên lựa chọn công ty không truyền sang màn khác; đây là giới hạn của bản vẽ, không phải yêu cầu.

## Bảng dữ liệu

- Mỗi cột có nút **lọc kiểu Excel**: Sắp xếp tăng / giảm, **ô tìm giá trị** (tìm không dấu, VD gõ "huong duong" ra "Hướng Dương"), danh sách giá trị có ô chọn, "Chọn tất cả", nút Xóa lọc và OK. Cột hành động (File, Xử lý) không có lọc.
- Ô tìm chung trên bảng: tìm số HĐ, đối tác, MST.
- Số tiền canh phải, phân cách hàng nghìn bằng dấu chấm (1.234.567); số âm có dấu trừ (−).
- Ngày dạng `dd/mm/yyyy`.
- Bảng rộng cuộn ngang trong khung của nó; tiêu đề cột dính khi cuộn.
- Bảng trống có câu báo cụ thể (VD "Chưa có chứng từ ngoài", "Không có chứng từ ngoài thay đổi giữa các lần khai").

## Trạng thái hóa đơn

Cột "Trạng thái HĐ" là cột đầu tiên mọi bảng kê. Màu nhãn: Mới (xanh lá), Thay thế (xanh dương), Bị thay thế / Điều chỉnh / Bị điều chỉnh (vàng), Đã hủy (đỏ). Dòng phụ ghi hóa đơn liên quan kèm ngày.

## File đính kèm (biểu tượng ghim)

- Cột "File" dùng **một biểu tượng ghim** cho mỗi dòng. Bấm ghim mở menu nhỏ; bấm ra ngoài thì đóng.
- Hóa đơn: Xem hóa đơn · Tải PDF · Tải XML (có chữ ký số).
- Chứng từ ngoài: tên file · Xem file · Tải xuống · Thay file khác (chỉ kỳ đang làm).
- Dòng chưa có file: nút "Tải file lên" (kỳ đang làm) hoặc chữ "Chưa có file" (kỳ đã khóa).
- Tải về xong hiện thông báo góc phải dưới "Đã tải về máy · <tên file>" có nút đóng.

## Hộp xem tài liệu

- Thanh tối phía trên: tên file, nút In / Tải PDF / Tải XML (hóa đơn) hoặc Tải về (chứng từ), nút đóng ×.
- Hóa đơn hiển thị giống bản PDF của người bán; chứng từ ngoài hiển thị file đã tải lên (ảnh, PDF) hoặc bản xem mẫu.
- Chân hộp ghi thông tin kê khai (kỳ, tiền, thuế).

## Nút và trạng thái nút

- Nút chính màu xanh đậm; nút bị khóa màu xám, có lý do (VD "Chưa hết kỳ", "Khóa sổ" khi còn lệch kèm link đỏ "Còn N hóa đơn lệch…").
- Thao tác xóa / thao tác không hoàn tác được phải xác nhận (VD gõ MST để xóa công ty, xem [08-phan-quyen-quan-tri.md](08-phan-quyen-quan-tri.md)).

## Ngôn ngữ

Toàn bộ giao diện tiếng Việt. Mã chỉ tiêu tờ khai ([34], [40]…) chỉ hiện trong bảng tờ khai, không hiện trên ô tóm tắt.
