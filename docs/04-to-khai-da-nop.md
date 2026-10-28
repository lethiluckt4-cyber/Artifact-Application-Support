# 04 · Tờ khai đã nộp, thông báo và chứng từ nộp thuế

Màn hình: `ToKhaiDaNop.dc.html`. Dữ liệu lấy từ **Dịch vụ công** bằng tài khoản Dịch vụ công của công ty (khác tài khoản Hóa đơn điện tử).

## Kết nối

- Chưa kết nối: mọi bảng rỗng, số đếm 0, câu báo "Chưa kết nối Dịch vụ công · bấm Kết nối Dịch vụ công ở trên để lấy tờ khai đã nộp về".
- Kết nối: Tài khoản (dạng `MST-QL`), Mật khẩu; tùy chọn "Tự động lấy tờ khai, thông báo mới" và "Lấy toàn bộ tờ khai đã nộp từ năm 2024 ngay sau khi kết nối". Mật khẩu lưu mã hóa như ở [02](02-ket-noi-kho-hoa-don.md). Nơi nhập là **một**: Hồ sơ & tài khoản; nút trên màn này mở cùng hộp nhập đó.
- Đã kết nối: tài khoản, lần lấy cuối, nút "Lấy tờ khai ngay" (vào hàng đợi Cục Thuế), "Đổi tài khoản".
- Thử đăng nhập phải xử lý lỗi: sai mật khẩu, captcha sai, tài khoản bị khóa (đưa vào Cảnh báo kết nối).

## Năm và xếp theo kỳ

- Chọn **năm của kỳ tính thuế** (đồng bộ ô Năm ở thanh trên). Tờ khai xếp theo **kỳ tính thuế, không theo ngày nộp** (VD Q4/2025 nộp 26/01/2026 nằm ở năm 2025).
- Năm không có dữ liệu: "Chưa có dữ liệu năm … trên Dịch vụ công".

## Tab Tờ khai

- Lọc nhanh có số đếm: Tất cả · GTGT · TNCN · TNDN · Báo cáo tài chính · Khác.
- Cột: Tờ khai (tên + mẫu: 01/GTGT, 05/KK-TNCN, 03/TNDN, 05/QTT-TNCN, B01a-DNN, 01/LPMB…) · Kỳ tính thuế · **Lần nộp** (Lần đầu / Bổ sung lần N — mỗi lần một dòng) · Ngày nộp · Mã giao dịch · Trạng thái CQT · **Đối chiếu với sổ** · Tệp (XML, PDF).
- Kỳ tờ khai GTGT theo kỳ khai của năm (tháng hoặc quý). Danh sách lần nộp phải khớp danh sách lần khai ở Tờ khai GTGT (cùng ngày nộp).
- **Đối chiếu với sổ** (chỉ tờ khai GTGT): so tờ khai đã nộp với số liệu **đã khóa của đúng lần đó** ở Tờ khai GTGT.
  - "Khớp".
  - "Lệch [chỉ tiêu] số tiền" (VD "Lệch [40] 1.250.000").
  - "—" với tờ khai không phải GTGT.
- Tờ khai lấy về có kỳ khai (tháng / quý) khác bảng kỳ khai của năm trong Hồ sơ → **báo để sửa, không tự đổi**.
- "Tải tất cả (.zip)".

## Tab Thông báo của CQT

Cột: Ngày · Thông báo (VD Thông báo chấp nhận hồ sơ) · Liên quan tờ khai (kỳ) · Nội dung (VD "Chấp nhận tờ khai 01/GTGT bổ sung lần 2") · Tệp PDF.

## Tab Chứng từ nộp thuế

Cột: Ngày nộp · Số chứng từ · Nội dung · **Tiểu mục** · Kỳ thuế · Số tiền · Tệp PDF.

| Tiểu mục | Nội dung |
| --- | --- |
| 1701 | Thuế GTGT (lần đầu, hoặc "tăng thêm · bổ sung lần N") |
| 4931 | Tiền chậm nộp thuế GTGT |
| 2862 | Lệ phí môn bài |

Số tiền nộp thuế GTGT của mỗi lần = [40] lần đó − [40] lần trước (lần đầu = [40]).

## Tiền chậm nộp

**Tiền chậm nộp = số thuế nộp thêm × 0,03% × số ngày chậm**, làm tròn đến đồng.

- Số ngày chậm đếm **từ ngày liền sau hạn nộp của kỳ gốc đến ngày liền trước ngày nộp tiền**.
- Hạn nộp: tháng = ngày 20 tháng sau; quý = ngày cuối tháng đầu quý sau; gặp thứ 7 / chủ nhật lùi sang ngày làm việc kế tiếp.

| Kỳ | Hạn | Nộp tiền | Số ngày | Phép tính | Tiền chậm nộp |
| --- | --- | --- | --- | --- | --- |
| Q2/2026 bổ sung lần 1 | 31/07/2026 | 05/09/2026 | 35 | 5.332.000 × 0,03% × 35 | 55.986 |
| Q2/2026 bổ sung lần 2 | 31/07/2026 | 12/10/2026 | 72 | 1.120.000 × 0,03% × 72 | 24.192 |
| Q4/2025 bổ sung lần 1 | 02/02/2026 (31/01 là thứ 7) | 18/03/2026 | 43 | 5.332.000 × 0,03% × 43 | 68.783 |

## Chờ chốt

- Tần suất tự lấy từ Dịch vụ công: hằng đêm 22:00 (Hướng dẫn) hay mỗi tuần (màn này).
- Danh sách trạng thái CQT ngoài "Đã chấp nhận" (từ chối, chờ xử lý…) và cách hiện.
- Khi "Lệch": thao tác xử lý (mở Tờ khai GTGT kỳ đó, lập bổ sung…).
- Tiền chậm nộp khi nộp lần đầu bị trễ hạn; ngày nghỉ lễ khi tính hạn.
