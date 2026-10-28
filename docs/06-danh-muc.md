# 06 · Danh mục

Màn hình: `DanhMuc.dc.html`. Ba danh mục của mỗi công ty: **Đối tượng**, **Mặt hàng**, **Ghép ngân hàng**. Nút chung: Nhập từ Excel, Xuất Excel, Thêm (theo tab).

## Đối tượng (khách hàng, nhà cung cấp, nhân viên, khác)

- Lọc nhanh có số đếm: **Chưa tạo** (mặc định, nổi bật) · Tất cả · Khách hàng · Nhà cung cấp · Nhân viên · Khác. Tìm theo mã, tên, MST.
- Cột: Mã · Tên (tên ngắn / ghi chú nguồn) · Loại · MST / CCCD · Số TK ngân hàng (+ ngân hàng) · HĐ bán · HĐ mua · Hạn TT · Nguồn.
- Nguồn: Tự tạo từ HĐ · Tạo nhanh từ HĐ · Nhập Excel · Nhập tay.

### Quy ước mã

| Đối tượng | Mã |
| --- | --- |
| Tổ chức / hộ kinh doanh có MST | Mã = MST |
| Khách lẻ không lấy hóa đơn | `KHACHLE` (dùng một mã cho mọi màn) |
| Nhân viên | `NV_` + viết tắt tên (VD `NV_DMT`), MST/CCCD = CCCD |
| Ngân hàng | Mã ngân hàng (VD `MB`) |
| Cơ quan thuế | `THUE` |
| Người mua không có MST | Đề xuất `KH_D01`, `KH_D02`… (không trùng mã có sẵn) |

### Tự tạo và tạo nhanh

- Hóa đơn **có MST** chưa có trong danh mục: **tự tạo** đối tượng, mã = MST, lấy tên, địa chỉ, số tài khoản từ hóa đơn; hóa đơn mua → NCC, hóa đơn bán → KH. Không cần hỏi.
- Hóa đơn **không có MST** (người mua cá nhân…): vào danh sách **Chưa tạo** (Tên trên chứng từ · MST · Loại đề xuất · Xuất hiện ở · Số chứng từ · Xử lý). Xử lý: **Tạo mã nhanh** hoặc **Gộp vào có sẵn** (chọn đối tượng đích; hóa đơn và công nợ chuyển sang đối tượng đó).
- Hộp **Tạo mã nhanh** (điền sẵn từ hóa đơn, kiểm tra rồi lưu): Loại (NCC / KH / Vừa KH vừa NCC / Nhân viên / Khác), Tình trạng MST (tra cứu; chữ "Ngừng" tô đỏ), Mã (bắt buộc, không trùng), MST/CCCD, Tên đầy đủ, Tên ngắn, Điện thoại, Địa chỉ, Số TK, Ngân hàng, Email, Hạn thanh toán (ngày; trống = thanh toán ngay). Ghi nguồn "Tạo nhanh từ HĐ … · người tạo · ngày".
- Tạo nhiều một lượt: "Đối tượng i / n", nút Bỏ qua, "Lưu & sang đối tượng tiếp", cuối cùng "Lưu vào Danh mục".
- **Hạn thanh toán chỉ điền cho nhà cung cấp**; dùng để tính ngày đến hạn ở Công nợ.
- Đối tượng "Vừa KH vừa NCC" hiện ở cả hai bộ lọc.

## Mặt hàng (nhóm mặt hàng mua vào)

- Dùng cho cột **Mặt hàng** của bảng kê và báo cáo chi phí. Cột: Mặt hàng (nhóm) · Nhận diện theo (từ khóa tên hàng, VD "thịt, cá, gạo, rau") · Người bán hay dùng · Số HĐ · Tiền hàng năm.
- Cách điền cột Mặt hàng trên bảng kê:
  - **Bán ra**: lấy tên một dòng hàng bất kỳ của hóa đơn.
  - **Mua vào**: ghi **nhóm cụ thể** theo nội dung hóa đơn (VD hóa đơn món ăn → "Tiếp khách"; bút, giấy → "Văn phòng phẩm").
- Nhóm tự xếp theo tên hàng trên hóa đơn và **nhớ theo người bán**; sửa một lần thì các hóa đơn sau của người bán đó tự theo.

## Ghép ngân hàng (kho quy tắc cho màn Ngân hàng)

- Cột: Ghép theo (Số tài khoản / Tên trên sao kê / Quy tắc) · Số TK hoặc tên trên sao kê · Mã đối tượng · Tên đối tượng · Số giao dịch · Nguồn (Học từ file đã làm / Học khi gán mã / Chờ bạn gán / Nhập Excel / Quy tắc chung).
- Sửa và xóa được từng quy tắc; dòng "Chờ bạn gán" gán được ngay tại đây.
- Càng dùng càng tự ghép được nhiều: mỗi lần gán có "Nhớ cho lần sau" thêm một dòng (xem [05](05-ngan-hang-cong-no.md)).

## Chờ chốt

- Quy tắc sinh mã cho đối tượng không có MST ngoài mẫu `KH_D01`.
- Cột của file Nhập / Xuất Excel danh mục.
- Thao tác sửa nhóm mặt hàng và từ khóa nhận diện.
