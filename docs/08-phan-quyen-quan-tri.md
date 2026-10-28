# 08 · Đăng nhập, phân quyền và quản trị

Màn hình: `Main.dc.html` (đăng nhập), `QuanTri.dc.html` (nhân viên, phân quyền, nhật ký), `KhachHang.dc.html` (xóa công ty).

## Đăng nhập

- Không có đăng ký tự do: tài khoản do quản trị viên cấp ("Dùng tài khoản quản trị viên cấp cho bạn").
- Quên mật khẩu: nhờ quản trị viên đặt lại; không có luồng tự lấy lại mật khẩu.
- Trường: Tên đăng nhập, Mật khẩu, "Ghi nhớ trên máy này" (mặc định tick).
- Đăng nhập xong vào màn "Công ty của tôi".
- Tài khoản "Đã khóa" không đăng nhập được.

## Vai trò và phạm vi dữ liệu

| Việc | Quản trị viên | Nhân viên |
| --- | --- | --- |
| Thấy công ty | Tất cả | **Chỉ công ty được giao** |
| Làm nghiệp vụ trên công ty (lấy dữ liệu, kiểm tra, lập / khóa tờ khai, gán mã, xuất file) | Có | Có, trên công ty được giao |
| Đổi người phụ trách một công ty | Có | Không ("Chỉ quản trị viên đổi được người phụ trách") |
| Tạo, sửa, khóa tài khoản nhân viên; đặt lại mật khẩu | Có | Không |
| Giao khách cho nhân viên | Có | Không |
| Xóa / khôi phục công ty | Có | Không (nút không hiện) |
| Xem nhật ký hoạt động | Có | Chờ chốt |

Quyền lấy theo tài khoản đăng nhập. Nút "Xem thử quyền: Admin / Nhân viên" trên màn Công ty của tôi chỉ có trong bản thiết kế.

## Nhân viên

- Bảng: Tài khoản (họ tên + tên đăng nhập), Vai trò, Khách được giao (Quản trị viên = "Tất cả"), Đăng nhập gần nhất ("Đang online", "Hôm nay 14:52"…), Trạng thái, Sửa.
- Trạng thái: **Hoạt động** / **Đã khóa**. Nhân viên nghỉ việc bị khóa, không xóa, để giữ lịch sử.

## Giao khách cho nhân viên

- Chọn nhân viên, tick các công ty để giao, "Lưu phân công".
- **Một khách có thể giao cho nhiều nhân viên.** Mỗi dòng hiện người khác đang phụ trách hoặc "Chưa giao".
- Cột "Phụ trách" ở Công ty của tôi phải hiện đủ những người được giao (thiết kế hiện chỉ một người, cần sửa theo quy tắc này).

## Xóa và khôi phục công ty

- Nút thùng rác ở mỗi dòng Công ty của tôi, **chỉ quản trị viên** thấy. Quyền được kiểm tra lại lúc xác nhận.
- Hộp xác nhận ghi rõ dữ liệu bị xóa cùng: hóa đơn trong Kho, tờ khai và bảng kê, sao kê ngân hàng, danh mục, công nợ, tài khoản Cục Thuế đã lưu (mật khẩu bị xóa hẳn).
- Xác nhận bằng cách **gõ đúng MST** của công ty; nút "Xóa công ty" chỉ bật khi khớp.
- Công ty chuyển vào **thùng rác 30 ngày**; quản trị viên khôi phục được trong thời gian này, sau đó xóa vĩnh viễn.
- Sau khi xóa: công ty biến khỏi danh sách và mọi số tổng; thanh báo "Đã chuyển … vào thùng rác · khôi phục được trong 30 ngày" có nút **Hoàn tác**.
- Mọi lần xóa / khôi phục ghi vào Nhật ký hoạt động.

## Nhật ký hoạt động

- Cột: Thời gian · Người làm · Khách hàng · Thao tác. Người làm có thể là "Tự động".
- Phải ghi tối thiểu: gán mã giao dịch ngân hàng, xuất Excel (mẫu, kỳ), khóa sổ tờ khai, lập khai bổ sung, thêm công ty, lưu / đổi mật khẩu Cục Thuế (không ghi mật khẩu), kết quả việc tự động hằng đêm (VD "27 thành công, 1 sai mật khẩu"), xóa / khôi phục công ty, đổi phân công.
- Lọc theo nhân viên và khoảng thời gian (mặc định 7 ngày qua).

## Chờ chốt

- Nhân viên có được thêm công ty, xuất Excel danh sách, xem tab Cảnh báo kết nối, sửa Hồ sơ và tài khoản Cục Thuế không.
- Có cần quyền chi tiết hơn hai vai trò (chỉ xem, được khóa sổ…) không.
- "Ghi nhớ trên máy này" nhớ tên đăng nhập hay giữ phiên, giữ bao lâu; khóa tạm sau bao nhiêu lần sai mật khẩu.
- Khôi phục công ty từ thùng rác thì tài khoản Cục Thuế (mật khẩu đã xóa) phải nhập lại; cần màn thùng rác.
- Thời gian lưu nhật ký.
