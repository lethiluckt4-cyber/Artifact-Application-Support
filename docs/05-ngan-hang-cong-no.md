# 05 · Ngân hàng và Công nợ

Màn hình: `NganHang.dc.html`, `CongNo.dc.html`. Quy tắc ghép lưu ở Danh mục › Ghép ngân hàng ([06](06-danh-muc.md)).

## A. Ngân hàng

Mục đích: xem giao dịch sao kê của công ty và **gán mã đối tượng** cho từng giao dịch để hạch toán và đối chiếu công nợ. Phần mềm tự ghép theo quy tắc đã học; nhân viên gán tay phần còn lại.

### Dữ liệu và kỳ

- Nguồn: file sao kê nhập vào ("Nhập sao kê"), mỗi tài khoản ngân hàng của doanh nghiệp (khai trong Hồ sơ, kèm TK kế toán VD 1121).
- Kỳ: Cả năm hoặc từng tháng của năm làm việc (chỉ tới tháng hiện tại).
- Thẻ mỗi tài khoản: ngân hàng · số TK · TK kế toán · số dư · trạng thái đối chiếu "Khớp số dư sao kê" (số dư sổ = số dư cuối sao kê).
- Thẻ "Giao dịch kỳ": tổng số, số đã có mã, tỷ lệ %. Thẻ "Chưa có đối tượng" (bấm để lọc "Chưa có mã").

### Bảng giao dịch

- Lọc nhanh: **Chưa có mã** (mặc định) · Vừa gán · Tất cả · Thu · Chi. Tìm theo nội dung (không phân biệt hoa thường) hoặc số tiền. Mới nhất trước. Không chia trang: cuộn để tải thêm.
- Cột: Ngày · Nội dung sao kê · Thu · Chi · Đối tượng (mã + tên) · Hạch toán · Ghép theo · nút Gán mã / Sửa.
- **Ghép theo** (cách phần mềm ra mã): Đã học (từ lần gán trước) · Theo số TK (số tài khoản đối ứng) · Quy tắc (quy tắc chung, VD "NOP THUE NSNN TM:1701" → THUE, "Phi quan ly tai khoan" → mã ngân hàng) · Vừa gán · Chưa ghép.

### Hạch toán mặc định

| Giao dịch | Hạch toán |
| --- | --- |
| Thu, chưa có mã | Nợ 1121 / Có ? |
| Chi, chưa có mã | Nợ ? / Có 1121 |
| Thu, có mã khách hàng | Nợ 1121 / Có 131 |
| Chi, mã THUE | Nợ 33311 / Có 1121 |
| Chi, mã nhà cung cấp | Nợ 331 / Có 1121 |

Các loại khác (lãi tiền gửi, phí ngân hàng, tạm ứng nhân viên, chuyển nội bộ giữa hai tài khoản, hoàn tiền thẻ) cần bảng **Quy tắc hạch toán NH** ở cấp văn phòng (chờ chốt).

### Gán mã

1. Bấm "Gán mã" (hoặc "Sửa"): dòng chuyển sang chế độ sửa, mỗi lúc một dòng. Khi sửa, điền sẵn mã cũ.
2. Gõ mã hoặc tên; gợi ý từ Danh mục đối tượng. Mã có sẵn hiện "→ tên"; mã chưa có hiện "→ mã mới, sẽ thêm vào danh mục đối tượng".
3. **"Nhớ cho lần sau (thêm vào Danh mục ghép)"** mặc định bật, kèm ô từ khóa "Nội dung sao kê có chứa từ khóa" (điền sẵn tên rút từ nội dung, VD "SHOPEEPAY").
   - Từ khóa **dưới 4 ký tự**: báo đỏ "Từ khóa quá ngắn, dễ gán nhầm · khớp N giao dịch khác" (cảnh báo, không chặn).
   - Từ khóa hợp lệ: "Khớp thêm N giao dịch chưa gán · sẽ gán luôn" + tối đa 3 ví dụ.
   - Khớp = nội dung sao kê **chứa** từ khóa, không phân biệt hoa thường; chỉ xét giao dịch chưa có mã.
4. **Lưu**: gán mã cho dòng; nếu Nhớ bật thì thêm quy tắc {từ khóa → mã} vào Danh mục ghép và gán luôn mọi giao dịch chưa gán khớp từ khóa. Thông báo: "Đã gán X cho 1 giao dịch và tự gán thêm N giao dịch có chữ "…". Đã lưu vào Danh mục ghép, lần sau nhập sao kê sẽ tự nhận."
5. Mỗi lần gán ghi vào Nhật ký hoạt động.

### Ghép giao dịch với hóa đơn

Cảnh báo "Hóa đơn từ 5 triệu chưa thấy thanh toán qua ngân hàng" ([07](07-kiem-tra-canh-bao.md)) và 4 cột chứng từ thanh toán trên bảng kê mua vào (Hình thức TT, Ngày CT, Số CT, Số tiền) lấy từ việc ghép giao dịch chi với hóa đơn mua vào. Quy tắc ghép tự động (theo mã đối tượng, số tiền, số hóa đơn trong nội dung, khoảng ngày) là điểm chờ chốt; giao diện cần thao tác chọn giao dịch để ghép tay.

Xuất: "Xuất Excel (ASP)" theo mẫu phần mềm kế toán của khách (khai ở Hồ sơ, danh mục Mẫu xuất phần mềm KT).

## B. Công nợ

Báo cáo **Phải thu (131)** và **Phải trả (331)** theo đối tượng; mặc định Phải trả. Phát sinh lấy từ hóa đơn (tăng) và giao dịch ngân hàng đã gán mã (thanh toán).

### Thẻ tổng

Phát sinh tăng (hóa đơn) · Đã thanh toán · Số dư cuối kỳ · HĐ quá hạn (Phải trả) / HĐ chưa thu tiền (Phải thu). Các thẻ phải bằng tổng của bảng tổng hợp.

### Báo cáo

| Tab | Phải trả | Phải thu |
| --- | --- | --- |
| Báo cáo tổng hợp | Có | Có |
| Báo cáo chi tiết (sổ chi tiết một đối tượng) | Có | Có |
| HĐ chưa thanh toán / chưa thu tiền | Có | Có |
| HĐ quá hạn | Có | Không (khách không có hạn thanh toán) |

**Tổng hợp** — cột: Đối tượng · PS Nợ · PS Có · Dư Nợ cuối · Dư Có cuối · Tình trạng · Hạn TT / quá hạn. Gồm **mọi đối tượng có phát sinh trong kỳ** (trả đủ, trả thừa, còn thiếu). Lọc: Tất cả có phát sinh · Còn phải trả (thu) · Đã thanh toán đủ · Trả dư.

| Tài khoản | Dư Có > 0 | Dư = 0 | Dư Nợ > 0 |
| --- | --- | --- | --- |
| 331 Phải trả | Còn phải trả | Đã thanh toán đủ | Trả dư / ứng trước |
| 131 Phải thu | Khách trả dư | Đã thanh toán đủ | Còn phải thu |

**Chi tiết** — chọn một đối tượng; cột: Ngày CT · Số CT · Loại (Hóa đơn / Ngân hàng) · Diễn giải · TK ĐƯ · PS Nợ · PS Có · Dư lũy kế; dòng đầu số dư đầu kỳ, dòng cuối cộng phát sinh và số dư cuối kỳ. 331: hóa đơn mua ghi Có, thanh toán ngân hàng ghi Nợ (TK ĐƯ 1121).

**Hóa đơn chưa thanh toán / quá hạn** — cột: Đối tượng · Ngày HĐ · Hóa đơn · Tổng tiền · Đã TT · Còn lại · Hạn TT · Đến hạn · Quá hạn.

- **Ngày đến hạn = ngày hóa đơn + hạn thanh toán của nhà cung cấp** (Danh mục). Hạn trống = thanh toán ngay (đến hạn = ngày hóa đơn). VD 28/08 + 30 ngày = 27/09.
- **Số ngày quá hạn = hôm nay − ngày đến hạn**; ≤ 0 ghi "Trong hạn". Tab quá hạn chỉ lấy hóa đơn quá hạn > 0.
- Phải thu: Hạn TT và Đến hạn để "—"; cột cuối ghi "N ngày chưa thu" tính từ ngày hóa đơn.
- Số dư đầu kỳ lấy từ ghi chú / số dư khai ở Hồ sơ (VD "Không có số dư công nợ đầu kỳ").

## Chờ chốt

- Quy tắc ghép tự động giao dịch ngân hàng với hóa đơn; ngưỡng 5 triệu tính trên tổng thanh toán hay tiền hàng.
- Giao dịch qua cổng thanh toán (ShopeePay, VNPay, MoMo): gán cho cổng hay cho khách thật.
- Định dạng file sao kê nhập vào theo từng ngân hàng.
- Bảng Quy tắc hạch toán NH (lãi, phí, tạm ứng, chuyển nội bộ).
- Kỳ của báo cáo công nợ (tháng / quý / năm) và cách trình bày số dư: thuần hay tách dư Nợ / dư Có.
- Thứ tự ưu tiên khi nhiều quy tắc ghép cùng khớp, hoặc quy tắc mới mâu thuẫn quy tắc cũ.
