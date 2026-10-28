# 02 · Hồ sơ công ty, kết nối Cục Thuế và Kho hóa đơn

Màn hình: `Khach_HoSo.dc.html` (Hồ sơ & tài khoản), `KhachHang.dc.html` (hàng đợi Cục Thuế, Cảnh báo kết nối), `HoaDon.dc.html` (Kho hóa đơn).

## 1. Hồ sơ công ty

**Thông tin chung**: Tên doanh nghiệp, MST, Phương pháp tính thuế (Khấu trừ), Phần mềm kế toán (mẫu xuất, VD ASP), Tình trạng (Đang làm), Ghi chú (VD "Không có số dư công nợ đầu kỳ" — hiện lại ở thẻ Công nợ của Tổng quan).

**Kỳ kê khai GTGT theo từng năm** (bảng: Năm · Kỳ khai · Căn cứ · Đối chiếu):

| Căn cứ | Kỳ khai |
| --- | --- |
| Doanh thu năm trước ≤ 50 tỷ | Quý |
| Doanh thu năm trước > 50 tỷ | Tháng |
| Doanh nghiệp mới thành lập | Quý |

- Mỗi năm một dòng; đổi được theo từng năm. Màn Tờ khai GTGT đọc bảng này để hiện 12 tháng hay 4 quý (xem [03-to-khai-gtgt.md](03-to-khai-gtgt.md)).
- Tháng 1 năm mới, phần mềm **tự đề xuất** kỳ khai dựa trên doanh thu năm trước; người dùng xác nhận ("+ Đặt kỳ khai").
- Cột Đối chiếu so kỳ khai đã chọn với tờ khai thực nộp lấy từ Dịch vụ công; chỉ ghi "khớp" cho các kỳ đã nộp.

**Nhân viên phụ trách**: danh sách người được giao; chỉ quản trị viên đổi được.

**Tài khoản ngân hàng của doanh nghiệp**: Ngân hàng · Số TK · TK kế toán (VD MB · 263123123 · 1121); thêm được nhiều tài khoản.

## 2. Tài khoản Cục Thuế và bảo mật

Hai tài khoản cho mỗi công ty:

| Tài khoản | Dùng để | Tên đăng nhập |
| --- | --- | --- |
| Hóa đơn điện tử (hoadondientu.gdt.gov.vn) | Lấy hóa đơn bán ra, mua vào, máy tính tiền | MST |
| Dịch vụ công / thuế điện tử | Tờ khai đã nộp, thông báo của CQT, chứng từ nộp thuế | Tài khoản của khách (VD `MST-QL`) |

Quy tắc bảo mật:

- Mật khẩu lưu **mã hóa** trên máy chủ văn phòng; giao diện chỉ hiện trạng thái "Đã lưu" / "Chưa lưu", **không ai xem lại được** mật khẩu.
- Mật khẩu mới ghi đè mật khẩu cũ. Khách đổi mật khẩu thì nhân viên xóa và gõ mật khẩu mới.
- Captcha do máy chủ tự đọc; có nút "Mã khác".
- Không gửi mật khẩu qua chat, email hay bất kỳ dịch vụ ngoài nào; nhân viên tự nhập trong phần mềm.
- Mật khẩu đăng nhập phần mềm chỉ được nhớ trên máy khi tick "Ghi nhớ trên máy này".
- Xóa công ty thì xóa hẳn mật khẩu Cục Thuế đã lưu.

Mỗi thẻ tài khoản hiện "Đăng nhập gần nhất: <ngày giờ> · thành công / lỗi", nút Đổi mật khẩu, Thử đăng nhập (hoặc Nhập tài khoản khi chưa có).

**Tự động hằng đêm** (theo công ty): Lấy hóa đơn mới vào sổ GTGT · Điền tên hàng hóa cho hóa đơn mới · Tải tờ khai và thông báo (chỉ bật được khi đã có tài khoản Dịch vụ công). Công tắc "Tự động hằng đêm" trên màn Hóa đơn là cùng cài đặt này.

## 3. Hàng đợi Cục Thuế

- Máy chủ làm **lần lượt từng công ty** (mỗi lúc một việc). Việc hằng đêm bắt đầu 22:00, nên công ty sau có thể chạy muộn hơn (VD 22:41).
- Nút ở thanh trên: "Hàng đợi Cục Thuế: 1 đang chạy · N chờ". Popup gồm:
  - **Đang chạy**: công ty, bước (VD 3/6), mô tả, giờ bắt đầu, nguồn (Tự động hằng đêm / nhân viên bấm).
  - **Đang chờ**: thứ tự, công ty, việc, ai kích hoạt.
  - **Vừa xong**: kết quả (VD "12 hóa đơn mới", "sai mật khẩu → đưa vào Cảnh báo").
- Việc lấy dữ liệu thủ công cũng vào hàng đợi; đóng cửa sổ vẫn chạy tiếp.

## 4. Cảnh báo kết nối

Tab "Cảnh báo kết nối" trên Công ty của tôi liệt kê các công ty mất kết nối. Việc hằng đêm gặp lỗi đăng nhập thì công ty tự vào danh sách này.

| Lý do | Mức | Ảnh hưởng / cách xử lý |
| --- | --- | --- |
| Chưa kết nối / chưa nhập mật khẩu | Đỏ (Hóa đơn điện tử), cam (Dịch vụ công) | Nhập tài khoản |
| Sai mật khẩu (đã thử N đêm) | Đỏ | Đăng nhập lại với mật khẩu mới |
| Tài khoản bị khóa (nhập sai nhiều lần) | Đỏ | Nhờ khách mở khóa trên trang hóa đơn điện tử, rồi nhập mật khẩu mới |
| Lỗi kết nối liên tiếp (máy chủ CQT không phản hồi) | Cam | Phần mềm tự thử lại đêm sau |
| Mật khẩu hết hạn (đổi định kỳ) | Cam | Khách đổi mật khẩu, nhập lại |

- Cột: Công ty · Mất kết nối với (Hóa đơn điện tử / Dịch vụ công) · Lý do · Từ lúc (mất N ngày) · Ảnh hưởng · Phụ trách · Cách xử lý (Đăng nhập lại, link Hồ sơ).
- Lọc: Tất cả · Hóa đơn điện tử · Dịch vụ công (chỉ đếm mục chưa xử lý). Nút "Thử kết nối lại tất cả".
- Cảnh báo gắn với công ty theo **MST**, không theo vị trí dòng.
- **Đăng nhập lại thành công**: lưu mật khẩu (mã hóa) và **tự lấy lại toàn bộ dữ liệu từ mốc còn đủ dữ liệu đến hôm nay**, không cần bấm thêm. Chưa từng kết nối: hóa đơn lấy từ 01/01 năm hiện tại, Dịch vụ công từ 2 năm trước. Mục đã xử lý chuyển xám "Đã kết nối lại · đang lấy lại dữ liệu".
- Thứ tự bước khi lấy lại: Hóa đơn điện tử: đăng nhập → bán ra → mua vào → máy tính tiền → tên hàng hóa, cập nhật tờ khai kỳ đang mở. Dịch vụ công: đăng nhập → tờ khai đã nộp → thông báo CQT → chứng từ nộp thuế, đối chiếu với sổ.

## 5. Kho hóa đơn

- Khối kết nối: trạng thái kết nối, tài khoản, lần lấy cuối (thời điểm, tự động / thủ công, số HĐ mới), công tắc Tự động hằng đêm (22:00), "Đổi tài khoản" (mở Hồ sơ), "Lấy dữ liệu thủ công".
- Tab: **Bán ra · Mua vào · Máy tính tiền · Chứng từ nhập tay**, kèm số lượng theo kỳ đang chọn. Chọn Tháng (1–12) hoặc Cả năm. Đổi tab / tháng / năm thì xóa lọc và lựa chọn.
- Cột: chọn · Ngày lập · Ký hiệu · Số · Người mua / Người bán (+ MST) · Tổng tiền · Thuế · Trạng thái · Kết quả kiểm tra CQT · Tờ khai · File gốc.
- **Kết quả kiểm tra CQT**: Đã cấp mã (ký hiệu bắt đầu C) · CQT đã nhận không mã (ký hiệu K) · Đã nhận HĐ từ MTT · Nhập tay.
- **Trạng thái** và hóa đơn liên quan: xem mục 4 của [03-to-khai-gtgt.md](03-to-khai-gtgt.md).
- **Cột Tờ khai**: kỳ kê khai của hóa đơn. Bán ra theo ngày lập. Mua vào theo ngày lập, nhưng hóa đơn mua vào về sau khi kỳ đã khóa thì ghi kỳ đang làm. HĐ bị thay thế / đã hủy ghi "Không khai".
- Chân bảng: Đang hiện X / tổng, Tổng tiền, Thuế (của các dòng đang hiện).

### Lấy dữ liệu thủ công

- Khoảng ngày Từ / Đến; chọn nhanh: Phần còn thiếu (từ lần lấy cuối, mặc định), Tháng này, Tháng trước, Quý trước, Từ đầu năm, Năm trước. Chặn ngày không hợp lệ, ngày bắt đầu sau ngày kết thúc, ngày tương lai.
- Lấy những gì: bán ra (có mã, không mã), mua vào (có mã, không mã), máy tính tiền, tên hàng hóa (chạy nền), tải sẵn XML và PDF (không bắt buộc; để trống thì tải khi bấm từng hóa đơn).
- **Quy tắc ghép: trùng thì bỏ qua · thiếu thì thêm · đổi trạng thái (thay thế, điều chỉnh, hủy) thì cập nhật.** Khóa so trùng: MST người bán + ký hiệu + số hóa đơn.
- Các bước: đăng nhập → bán ra → mua vào → máy tính tiền → kiểm tra lại trạng thái hóa đơn đã có → tên hàng hóa. Nút Dừng (dừng việc thật) và Chạy nền.
- Kết quả: Thêm mới (bán ra / mua vào), Trùng bỏ qua, Cập nhật trạng thái, và bảng hóa đơn đổi trạng thái với cột **Ảnh hưởng**:
  - Hóa đơn thuộc kỳ **đã nộp** bị thay thế / điều chỉnh: "kỳ đã nộp → kiểm tra, cần thì khai bổ sung" (đỏ).
  - Hóa đơn thuộc kỳ **chưa khóa**: tự cập nhật tờ khai (xanh).
  - Hóa đơn bị hủy: bỏ khỏi bảng kê, công nợ giảm (cam).
- Kỳ đã khóa không bị thay đổi khi có hóa đơn mới.

### Tải về và xuất

| Nút | Nội dung |
| --- | --- |
| Tải XML | File XML gốc từ hoadondientu, có chữ ký số người bán (lưu trữ, nộp khi CQT yêu cầu) |
| Tải PDF | Bản thể hiện tạo từ XML gốc theo mẫu của người bán; HĐ máy tính tiền dùng mẫu chung |
| XML + PDF (.zip) | Mỗi hóa đơn một cặp XML + PDF cùng tên |
| Xuất Excel | Danh sách hóa đơn (mỗi HĐ một dòng) hoặc Chi tiết dòng hàng (mỗi mặt hàng một dòng) |

- Chứng từ nhập tay không có XML: tắt Tải XML và zip; PDF là file đính kèm đã lưu khi nhập.
- Phạm vi: Hóa đơn đã chọn (N) · Đang hiện theo bộ lọc (N) · Tất cả loại / kỳ (N). Mặc định: có chọn → đã chọn; không thì có lọc → theo lọc; không thì tất cả.
- Chia thư mục theo tháng (khi tải nhiều HĐ cả năm, mặc định bật). Tên file bên trong: `KýHiệu_Số_MSTNgườiBán` (VD `C26TSV_321_0317788710`).
- Tên file tải về: `<TênCtyKhôngDấu>_<MST>_<Loại>_<Kỳ>_<N><HD|CT><đuôi>`; Loại: BanRa, MuaVao, MayTinhTien, ChungTuNhapTay; Kỳ: `T9-2026` hoặc `2026`; đuôi `.xml` / `_XML.zip` / `.pdf` / `_PDF.zip` / `_XML-PDF.zip` / `_DanhSach.xlsx` / `_ChiTietDongHang.xlsx`. VD `ThaoVy_0319411607_MuaVao_T9-2026_203HD_XML.zip`. Số lượng trong tên file không dùng dấu chấm.
- Trên **500 hóa đơn**: máy chủ tạo file trong nền, xong thì báo; dưới mức đó tải thẳng về máy.
- Hóa đơn CQT chưa trả XML (đang chờ cấp mã): ghi tên vào `DANH_SACH_THIEU.txt` trong file nén để tải lại sau.

## Chờ chốt

- "HĐ trong kho" ở Công ty của tôi / Tổng quan đếm những loại nào (bán ra, mua vào, máy tính tiền, nhập tay) để khớp với số theo tab của Kho.
- Chứng từ nhập tay thêm ở màn Hóa đơn hay chỉ ở tab Chứng từ ngoài của Tờ khai (hai nơi phải là cùng dữ liệu).
- Đánh dấu "Không khấu trừ" / "Để kỳ sau" làm ở màn nào.
- Đăng nhập lại thất bại (sai mật khẩu lần nữa, captcha sai) hiện thế nào.
