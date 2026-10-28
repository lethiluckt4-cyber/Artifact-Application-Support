# 07 · Kiểm tra & cảnh báo

Màn hình: `Khach_CanhBao.dc.html`. Gom mọi việc cần xử lý của **một công ty** theo 4 nhóm; mỗi nhóm có một thẻ (tên, số lượng, mô tả) và một tab. Mọi số đếm tính từ dữ liệu thật và giảm ngay khi xử lý ở bất kỳ màn nào; một việc chỉ đếm một lần.

| Nhóm | Gồm |
| --- | --- |
| Tờ khai GTGT | Hóa đơn lệch giữa Kho và kê khai (chặn khóa sổ) + Hóa đơn cần kiểm tra |
| Ngân hàng | Giao dịch chưa có mã đối tượng |
| Danh mục | Đối tượng chưa tạo (người mua không có MST); thông tin NCC mới đã tự tạo mã (không cộng vào số) |
| Kết nối Cục Thuế | Trạng thái tài khoản Hóa đơn điện tử và Dịch vụ công của công ty |

Mỗi dòng đã xử lý hiện "✓ kết quả" và nút **hoàn tác**. Mọi xử lý ghi vào Nhật ký hoạt động.

## 1. Hóa đơn lệch giữa Kho và kê khai (chặn khóa sổ)

Áp dụng cho kỳ đang làm. So từng hóa đơn theo MST người bán + ký hiệu + số; chứng từ ngoài không đưa vào so sánh. Hết lệch: "✓ Kho và kê khai đã khớp · có thể khóa sổ".

| Loại lệch | Ví dụ mô tả | Xử lý được phép |
| --- | --- | --- |
| Mua vào có trong Kho, chưa kê khai | "Về Kho ngày 14/10" | Đưa vào kê khai kỳ đang làm · Không khấu trừ (không lên bảng kê) |
| Bán ra có trong Kho, chưa kê khai | "Bán ra bắt buộc khai đúng kỳ" | Chỉ Đưa vào kê khai |
| Mua vào về trễ từ kỳ đã khóa | "Quý 2 đã nộp (lần cuối …) · về Kho 02/10" | Đưa vào kê khai **kỳ đang làm** · Không khấu trừ |
| Bán ra về trễ từ kỳ đã khóa | — | Không chuyển kỳ; báo cần khai bổ sung kỳ cũ |

"Lần cuối" trong mô tả phải là ngày của lần khai sau cùng đã nộp của kỳ đó.

## 2. Hóa đơn cần kiểm tra (không chặn khóa sổ)

Mỗi hóa đơn hiện **mọi** vấn đề nó có (một hóa đơn có thể vừa nghi sai thuế suất vừa chưa thanh toán qua ngân hàng). Dòng tóm tắt đếm theo từng loại.

| Vấn đề | Mức | Điều kiện | Xử lý 1 → kết quả | Xử lý 2 → kết quả |
| --- | --- | --- | --- | --- |
| MST ngừng hoạt động | Lỗi | Ngày lập hóa đơn sau ngày người bán ngừng hoạt động / không hoạt động tại địa chỉ (tra lúc lấy hóa đơn) | Không khấu trừ → không lên bảng kê | Vẫn khấu trừ (đã kiểm tra) → giữ, kèm ghi chú người kiểm tra |
| Nghi sai thuế suất | Cảnh báo | Dòng ghi 8% nhưng hàng / dịch vụ không thuộc diện giảm (lẽ ra 10%) | Đúng, giữ nguyên → giữ 8% | Báo NCC điều chỉnh → chờ, tạm không khấu trừ |
| Từ 5 triệu chưa thấy thanh toán qua ngân hàng | Cảnh báo | Hóa đơn mua vào từ 5.000.000 đ chưa ghép được giao dịch ngân hàng trả tiền | Ghép giao dịch ngân hàng (chọn giao dịch) → đã ghép, ngày | Chưa đến hạn thanh toán → nhắc lại khi đến hạn (theo hạn TT của NCC) |
| Hóa đơn mua vào lập sai dấu | Lỗi | Điều chỉnh giảm / trả hàng nhưng người bán ghi số dương → tạm loại khỏi bảng kê | Báo người bán lập lại → chờ hóa đơn đúng | Đã nhận hóa đơn đúng → đã có HĐ điều chỉnh số âm |
| Hóa đơn bán ra lập sai dấu | Lỗi | Công ty tự lập điều chỉnh giảm / trả hàng ghi số dương | Lập lại hóa đơn điều chỉnh → chờ lấy về Kho | Đã lập đúng → đã có HĐ điều chỉnh số âm |

Bảng có cột "Người bán / người mua" (vì gồm cả hóa đơn bán ra).

Quy tắc liên quan: hóa đơn từ 5 triệu **đã quá hạn** mà trả tiền mặt thì không đủ điều kiện khấu trừ ([03](03-to-khai-gtgt.md), mục 5).

## 3. Ngân hàng

"Giao dịch ngân hàng chưa có mã đối tượng · N" → Gán mã (màn Ngân hàng). Cảnh báo 5 triệu chỉ nằm ở nhóm Tờ khai GTGT, không đếm lại ở đây.

## 4. Danh mục

"Đối tượng chưa tạo (người mua không có MST) · N" → Tạo mã nhanh. "Nhà cung cấp mới đã tự tạo mã từ MST · N" → Xem (chỉ thông tin).

## 5. Kết nối Cục Thuế

Hai dòng: Hóa đơn điện tử (VD "Đã kết nối · lấy hóa đơn lúc 22:00 hằng đêm"), Dịch vụ công (VD "Chưa nhập mật khẩu · chưa tự lấy tờ khai, thông báo, chứng từ nộp thuế" → Nhập mật khẩu, mở Hồ sơ). Cảnh báo kết nối của tất cả công ty xem ở [02](02-ket-noi-kho-hoa-don.md), mục 4.

## Chờ chốt

- Ngưỡng 5 triệu tính trên tổng tiền thanh toán (đã có thuế) hay tiền hàng.
- Danh sách "Việc cần làm" ở Tổng quan: điều kiện xuất hiện và thứ tự ưu tiên.
