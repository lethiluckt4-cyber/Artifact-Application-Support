# Artifact-Application-Support

Bản thiết kế giao diện **Phần mềm hỗ trợ công việc** (dịch vụ kế toán): hóa đơn, tờ khai GTGT, tờ khai đã nộp, ngân hàng, công nợ, danh mục… Thiết kế được làm trên Claude dưới dạng Design artifact; repo này lưu bản nguồn để làm tiếp phần mềm thật.

## Cấu trúc

```
design/                      các màn hình (mỗi file .dc.html là 1 bảng vẽ)
  canvas.json                bố cục bảng vẽ, tên từng màn, ghi chú quy tắc
  Main.dc.html               1 · Đăng nhập
  KhachHang.dc.html          2 · Công ty của tôi (tổng quan tất cả công ty)
  Khach_TongQuan.dc.html     3 · Tổng quan một công ty
  HoaDon.dc.html             4 · Hóa đơn (kho hóa đơn)
  ToKhaiDaNop.dc.html        5 · Tờ khai đã nộp
  ToKhai.dc.html             6 · Tờ khai GTGT · Cty Thảo Vy (khai quý)
  ToKhaiThang.dc.html        6b · Tờ khai GTGT · [Khách hàng C] (2024 quý → 2025–2026 tháng)
  NganHang.dc.html           7 · Ngân hàng
  CongNo.dc.html             Công nợ
  Khach_CanhBao.dc.html      Kiểm tra & cảnh báo
  Khach_HoSo.dc.html         Hồ sơ & tài khoản
  DanhMuc.dc.html            Danh mục (đối tượng, mặt hàng, ghép ngân hàng)
  QuanTri.dc.html            Quản trị
  HuongDan.dc.html           Hướng dẫn
tests/                       kiểm tra logic số liệu (Node.js)
```

## Định dạng file

Mỗi `.dc.html` gồm phần giao diện trong `<x-dc>…</x-dc>` (chỗ trống `{{...}}`, `<sc-if>`, `<sc-for>`) và phần logic trong
`<script type="text/x-dc">` với `class Component extends DCLogic` (hàm `renderVals()` tính toàn bộ số liệu hiển thị).
File cần bộ hiển thị của Design artifact trên claude.ai để chạy; bộ hiển thị đó không nằm trong repo này.

Màn 6 và 6b dùng **chung một khung**: kỳ khai (tháng / quý) lưu theo từng năm trong `_hoSo()` của từng công ty,
chọn năm nào thì màn tự hiện 12 tháng hoặc 4 quý của năm đó.

## Kiểm tra logic

```
node tests/t_logic.js            # Tờ khai GTGT Cty Thảo Vy: KPI = tờ khai, so sánh các lần = HĐ bổ sung, ngày, ký hiệu, cả năm…
node tests/t_logic_thang.js      # cùng bộ kiểm tra cho [Khách hàng C]
node tests/t_tim.js design/ToKhai.dc.html   # ô tìm trong bộ lọc kiểu Excel
```

`t_logic_thang.js` báo 36 lỗi "xuat …" là bình thường: phần đó kiểm tra file xuất theo mẫu quý, không áp dụng cho năm khai tháng.

## Ghi chú

- Số liệu trong thiết kế là số mẫu; ngày dữ liệu 17/10/2026.
- Phần tải về / tải lên trong thiết kế chỉ mô phỏng (hiện thông báo); phần mềm thật sẽ tải file thật.
