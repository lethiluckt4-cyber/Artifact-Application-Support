# 03 · Tờ khai GTGT (mẫu 01/GTGT, phương pháp khấu trừ)

Màn hình: `design/ToKhai.dc.html` (Cty Thảo Vy, khai quý) và `design/ToKhaiThang.dc.html` ([Khách hàng C], 2024 khai quý → 2025–2026 khai tháng). Hai file là **một màn chung**, chỉ khác hồ sơ công ty mẫu (`_hoSo()` trong script).

Nguồn quy tắc: tài liệu "Cách kê khai Tờ khai 01/GTGT từ Kho hóa đơn" đã thống nhất ngày 18/10/2026, cộng các quyết định khi duyệt thiết kế 18–19/10/2026. Căn cứ pháp lý: mẫu 01/GTGT hiện hành, Phụ lục II Thông tư 89/2026/TT-BTC (theo hướng dẫn Thuế cơ sở 8 tỉnh Khánh Hòa). Những điểm chưa chốt nằm ở mục 14 và [10-diem-cho-chot.md](10-diem-cho-chot.md).

---

## 1. Kỳ kê khai

| Quy tắc | Chi tiết |
| --- | --- |
| Kỳ khai lưu **theo từng năm** | Hồ sơ công ty có bảng *Kỳ kê khai GTGT theo từng năm*: mỗi năm là `thang` hoặc `quy`. Một công ty có thể năm này khai tháng, năm sau khai quý. |
| Màn tự đổi theo năm | Chọn năm khai tháng → 12 ô tháng; năm khai quý → 4 ô quý. Năm có kỳ khai khác năm trước hiện nhãn vàng "Đổi từ khai quý (năm 2024) sang khai tháng từ năm 2025". |
| Kỳ mặc định khi mở | Năm hiện tại: kỳ đang làm (VD Q3/2026 hoặc T9/2026). Năm cũ: kỳ cuối năm. |

### Hạn nộp

| Kỳ | Hạn | Ví dụ |
| --- | --- | --- |
| Tháng | Ngày 20 của tháng sau | T10/2026 → 20/11/2026 |
| Quý | Ngày cuối của tháng đầu quý sau | Q3/2026 → 31/10/2026 |
| Rơi vào thứ 7, chủ nhật | Lùi sang ngày làm việc kế tiếp | Q3/2026 → **02/11/2026**; Q4/2026 → **01/02/2027** |

Ngày nghỉ lễ chưa đưa vào quy tắc lùi hạn (xem mục chờ chốt).

### Trạng thái kỳ

| Trạng thái | Khi nào | Được làm gì |
| --- | --- | --- |
| Chưa đến kỳ | Kỳ chưa bắt đầu | Chỉ xem, không có số |
| Đang trong kỳ | Kỳ đang diễn ra (VD Q4/2026, T10/2026) | Hiện **số liệu tạm** từ hóa đơn về Kho đến ngày dữ liệu; thêm chứng từ ngoài được; nút chính "Chưa hết kỳ" (khóa) |
| Đang làm · chưa khóa | Hết kỳ, đang lập tờ khai (bản đang làm) | Kiểm tra, xử lý lệch, thêm chứng từ, khóa sổ |
| Đã nộp | Đã khóa sổ và nộp | Chỉ xem; muốn sửa thì "Lập khai bổ sung" |

## 2. Nguồn dữ liệu

- **Kho hóa đơn**: hóa đơn điện tử có mã, không mã, khởi tạo từ máy tính tiền; cả bán ra và mua vào. Lấy tự động hằng đêm (22:00) hoặc bằng nút "Cập nhật từ Kho hóa đơn".
- **Chứng từ ngoài** (nhập tay, mỗi chứng từ có loại riêng): tờ khai hải quan nhập khẩu, hóa đơn giấy (mua vào), chứng từ nộp thuế thay nhà thầu nước ngoài, chứng từ khác.
- Mỗi lần lấy dữ liệu: hóa đơn trùng bỏ qua, hóa đơn thiếu thì thêm, hóa đơn đổi trạng thái thì cập nhật. **Kỳ đã khóa không bị thay đổi** khi có hóa đơn mới về Kho.
- Số liệu tờ khai cộng từ **từng dòng hàng** của hóa đơn, không cộng theo tổng hóa đơn (một hóa đơn có thể có nhiều thuế suất).
- Thuế làm tròn **theo từng dòng** rồi mới cộng; [40] = [35] − [25] phải đúng trên từng dòng chỉ tiêu.
- Ngoại tệ: quy đổi VND theo tỷ giá ghi trên hóa đơn.

## 3. Kỳ của từng hóa đơn

- **Bán ra**: theo ngày lập hóa đơn. Bán ra **không được chuyển kỳ**: bán ra về trễ của kỳ đã khóa phải khai bổ sung kỳ đó.
- **Mua vào**: theo ngày lập hóa đơn. Mua vào về Kho sau khi kỳ của nó đã khóa sổ thì đưa vào **kỳ đang làm** (sai sót thuế đầu vào được loại trừ khỏi trường hợp 1 và 2.1, Phụ lục II TT 89/2026).

## 4. Trạng thái hóa đơn

Cột **"Trạng thái HĐ"** là cột đầu tiên của mọi bảng kê và bảng Chi tiết hóa đơn. Dòng phụ dưới trạng thái ghi hóa đơn liên quan và **ngày của hóa đơn liên quan** (VD "điều chỉnh giảm cho C26TTV · 1342 · ngày 08/09/2026").

| Trạng thái trên Cục Thuế | Có lên tờ khai không |
| --- | --- |
| Mới (hóa đơn gốc) | Có |
| Thay thế | Có, thay cho hóa đơn bị thay thế |
| Bị thay thế | Không |
| Đã hủy | Không |
| Điều chỉnh | Có, ghi tăng hoặc giảm (âm) theo nội dung điều chỉnh |
| Bị điều chỉnh | Giữ nguyên số của hóa đơn gốc; phần chênh nằm ở hóa đơn điều chỉnh |

Hóa đơn gốc luôn có ngày **trước** hóa đơn thay thế / điều chỉnh. Số hóa đơn tăng dần theo ngày trong cùng ký hiệu.

## 5. Các tình huống đặc biệt trên dòng hàng

Mỗi dòng bảng kê có cột "Kiểm tra" ghi phần mềm đã xử lý gì. Các tình huống đã thống nhất:

**Mua vào**

| Tình huống | Phần mềm làm |
| --- | --- |
| HĐ chỉ có dòng chiết khấu thương mại | Tự ghi âm |
| Dòng chiết khấu đã trừ trong HĐ | Giữ nguyên, tổng không đổi |
| Tên hàng có chữ "giảm giá" nhưng số dương | Hỏi xác nhận trước khi ghi âm |
| HĐ điều chỉnh giảm / trả hàng mà người bán ghi số dương (sai dấu) | **Tạm loại**, chờ người bán lập lại |
| HĐ điều chỉnh mà người bán đã ghi đúng dấu | Cùng dấu, giữ nguyên |
| HĐ bị thay thế | Không khai |
| Tên hàng có chữ "chiết khấu" nhưng không phải chiết khấu (VD "Thẻ chiết khấu thành viên") | Hỏi xác nhận, giữ dương |
| Hàng khuyến mại thành tiền 0 | Không ghi âm |
| HĐ ngoại tệ | Quy đổi VND theo tỷ giá trên HĐ |
| Dùng chung cho hàng chịu thuế và không chịu thuế | Khấu trừ theo tỷ lệ doanh thu chịu thuế (VD 80%) |
| Ô tô chở người từ 9 chỗ trở xuống, nguyên giá trên 1,6 tỷ | Không khấu trừ thuế phần vượt 1,6 tỷ |
| HĐ từ 5 triệu trả tiền mặt | Không đủ điều kiện khấu trừ |
| HĐ có dòng không chịu thuế (KCT) | Tách dòng KCT khỏi [23] |

**Bán ra**

| Tình huống | Phần mềm làm |
| --- | --- |
| A. Khuyến mại đã đăng ký | Giá tính thuế 0 |
| B. Biếu tặng | Tính thuế theo giá bán cùng loại |
| C. Trả thay lương | Tính thuế như bán |
| D. Tiêu dùng nội bộ cho SXKD | Không tính thuế, không khai |
| E. Hàng mẫu | Làm như khuyến mại nếu đúng quy định |
| HĐ chỉ có dòng chiết khấu | Tự ghi âm |
| HĐ điều chỉnh giảm do trả hàng mà ghi số dương | Tạm loại, cần lập lại |

**Nhận biết chiết khấu / giảm giá / trả lại (ghi âm)**: tên dòng có chữ "chiết khấu", hoặc tính chất dòng là chiết khấu thương mại, hoặc dòng có số lượng 0 và đơn giá 0 nhưng có thành tiền. Hóa đơn dương có các chữ này thì phần mềm **hỏi lại** trước khi ghi âm.

Khi kỳ đã khóa, các dòng "cần xác nhận / tạm loại" phải hiện **trạng thái cuối** (đã xác nhận, không kê khai kỳ này…), không còn trạng thái chờ xử lý.

## 6. Doanh số và thuế đầu ra

Mỗi dòng bán ra xếp vào chỉ tiêu theo **thuế suất ghi trên dòng** (không tự tính lại thuế suất).

| Thuế suất trên dòng | Doanh số (chưa thuế) | Thuế GTGT |
| --- | --- | --- |
| Không chịu thuế (KCT) | [26] | — |
| 0% | [29] | — |
| 5% | [30] | [31] |
| 10% | [32] | [33] |
| 8% (được giảm 2%) | [32] | [33], tính theo 8%; kèm Phụ lục giảm thuế GTGT |
| Không phải kê khai, tính nộp (KKKNT) | [32a] | — |
| Thuế suất khác (KHAC) | Không tự xếp: báo để nhân viên chọn | — |

- [27] = [29] + [30] + [32] + [32a]
- [28] = [31] + [33]
- [34] = [26] + [27]
- [35] = [28]

Dòng chiết khấu và hóa đơn điều chỉnh giảm trừ thẳng vào ô cùng thuế suất.

## 7. Mua vào và thuế đầu vào

Chỉ tiêu mua vào cộng từ **bảng kê mua vào của kỳ**: hóa đơn mua vào có mã, không mã, máy tính tiền, chứng từ ngoài, và hóa đơn về trễ từ kỳ đã khóa. Hóa đơn đã đánh dấu **Không khấu trừ** không lên bảng kê.

| Chỉ tiêu | Lấy từ đâu |
| --- | --- |
| [22] Thuế còn được khấu trừ kỳ trước chuyển sang | [43] của tờ khai kỳ trước. Chênh lệch do khai bổ sung kỳ trước không sửa ô này mà vào [37]/[38] |
| [23] Giá trị HHDV mua vào | Tổng tiền chưa thuế các dòng trên bảng kê mua vào |
| [23a] Trong đó: nhập khẩu | Trị giá tính thuế trên tờ khai hải quan (chứng từ ngoài loại Nhập khẩu) |
| [24] Thuế GTGT HHDV mua vào | Tổng tiền thuế các dòng trên bảng kê mua vào |
| [24a] Trong đó: nhập khẩu | Thuế GTGT hàng nhập khẩu trên tờ khai hải quan |
| [25] Thuế GTGT được khấu trừ kỳ này | Bằng [24] (hóa đơn không được khấu trừ đã bị loại khỏi bảng kê) |

**Cảnh báo, không tự loại** (hiện ở khối "Hóa đơn mua vào cần kiểm tra"; mỗi hóa đơn có các cách xử lý để chọn):

- Hóa đơn từ **5 triệu đồng** trở lên chưa khớp được giao dịch ngân hàng thanh toán (đối chiếu từ mục Ngân hàng; 4 cột thanh toán trên bảng kê mua vào). Xử lý: ghép giao dịch ngân hàng.
- Người bán có MST **ngừng hoạt động** hoặc không hoạt động tại địa chỉ đăng ký vào ngày lập hóa đơn (tra cứu MST lúc lấy hóa đơn). Xử lý: Không khấu trừ.
- **Nghi sai thuế suất** (VD dịch vụ không thuộc diện giảm mà ghi 8%). Xử lý: "Đúng, giữ nguyên" hoặc chờ người bán điều chỉnh.
- Dòng mua vào thuế suất KCT, KKKNT hoặc KHAC: chờ chốt (mục 14).
- Hóa đơn có MST chưa có trong Danh mục: nút **"Tạo mã nhanh"** tạo đối tượng từ MST (tên, địa chỉ, tình trạng MST tra cứu), cho sửa trước khi lưu vào Danh mục.

## 8. Các chỉ tiêu tính toán

Phần mềm tự tính; chỉ [39a], [40b], [42] nhập tay.

| Chỉ tiêu | Cách tính |
| --- | --- |
| [36] Thuế phát sinh trong kỳ | [35] − [25] |
| [37] Điều chỉnh giảm | Tự điền từ lần khai bổ sung kỳ trước lập trong kỳ này (trường hợp 2.1, 3) |
| [38] Điều chỉnh tăng | Tự điền từ lần khai bổ sung kỳ trước (trường hợp 1, 2.2, 2.3, 4) |
| [39a] Thuế nhận bàn giao được khấu trừ | Nhập tay theo Thông báo chuyển nghĩa vụ thuế |
| [40a] Thuế phải nộp của SXKD | [36] − [22] + [37] − [38] − [39a], nếu ≥ 0 |
| [40b] Thuế mua vào dự án đầu tư được bù trừ | Nhập tay, chỉ khi có tờ khai 02/GTGT; mặc định 0 |
| [40] Thuế phải nộp trong kỳ | [40a] − [40b] |
| [41] Chưa khấu trừ hết kỳ này | Phần âm của ([36] − [22] + [37] − [38] − [39a]), ghi số dương |
| [42] Đề nghị hoàn | Nhập tay khi làm hồ sơ hoàn |
| [43] Còn được khấu trừ chuyển kỳ sau | [41] − [42]; thành [22] của kỳ sau |

Bảng tờ khai hiện **đủ toàn bộ chỉ tiêu mẫu 01/GTGT**, không gộp chỉ tiêu, kể cả dòng bằng 0.

## 9. Khóa sổ và hóa đơn lệch

Nút **Khóa sổ** chỉ bật khi không còn hóa đơn lệch giữa Kho và bảng kê của kỳ. Phần mềm so từng hóa đơn theo **MST người bán + ký hiệu + số hóa đơn**; chứng từ ngoài không đưa vào so sánh. Khi còn lệch, cạnh nút có link đỏ "Còn N hóa đơn lệch · xử lý trước khi khóa →" dẫn sang Kiểm tra & cảnh báo.

| Lệch | Cách xử lý được phép |
| --- | --- |
| Mua vào có trong Kho, chưa kê khai | Đưa vào kê khai, hoặc Không khấu trừ |
| Bán ra có trong Kho, chưa kê khai | Chỉ "Đưa vào kê khai" (bán ra bắt buộc khai đúng kỳ) |
| Mua vào về trễ từ kỳ đã khóa | Tự chuyển vào so sánh của kỳ đang làm; xử lý như mua vào thường |
| Bán ra về trễ từ kỳ đã khóa | Không chuyển kỳ; báo cần khai bổ sung kỳ cũ |

Không tính là lệch (phần mềm tự xử lý): hóa đơn bị thay thế hoặc đã hủy tự bỏ khỏi bảng kê nếu kỳ chưa khóa; nếu kỳ đã khóa thì báo cần khai bổ sung.

## 10. Lần khai và khai bổ sung

- Mỗi kỳ có danh sách **lần khai**: Lần đầu, Bổ sung lần 1, Bổ sung lần 2, … (không giới hạn số lần). Kỳ đang làm có "Bản đang làm"; kỳ đang diễn ra có "Số liệu tạm".
- Sau khi khóa, muốn sửa thì bấm **"+ Lập khai bổ sung lần N"** ngay trong kỳ đó. Mỗi lần bổ sung là **một bản riêng**, lần trước giữ nguyên.
- Mỗi hóa đơn biết nó được thêm ở lần nào (`bs: n`). Xem lần k thì bảng kê và tờ khai gồm hóa đơn gốc + mọi hóa đơn có `bs ≤ k`. Dòng thêm ở lần bổ sung ghi "Thêm ở Bổ sung lần n".
- Số liệu lần k = lần đầu + cộng dồn phần thêm của các lần 1…k (bán ra và mua vào đều có thể thay đổi). Ví dụ mẫu Q2/2026 Thảo Vy:

| | Lần đầu (29/07) | Bổ sung lần 1 (05/09) | Bổ sung lần 2 (12/10) |
| --- | --- | --- | --- |
| Thêm | — | 2 HĐ bán ra bỏ sót | 1 HĐ bán ra + 1 HĐ mua vào về trễ |
| [34] Doanh thu | 1.987.250.000 | 2.053.900.000 | 2.071.900.000 |
| [25] Thuế đầu vào | 129.568.700 | 129.568.700 | 129.888.700 |
| [40] Phải nộp | 29.411.300 | 34.743.300 | 35.863.300 |

**Khi lập khai bổ sung một kỳ cũ**, phần mềm so lần bổ sung với lần khai trước ở [40] và [43] để biết trường hợp (Phụ lục II TT 89/2026):

| Trường hợp | [40] phải nộp | [43] chuyển kỳ sau | Phần mềm làm |
| --- | --- | --- | --- |
| 1 | Không đổi | Tăng | Ghi phần tăng vào [38] kỳ đang làm |
| 2.1 (chưa đề nghị hoàn) | Không đổi | Giảm | Ghi phần giảm vào [37] kỳ đang làm |
| 2.2 (đã đề nghị, chưa được hoàn) | Không đổi | Giảm | Nhắc gửi văn bản hủy hồ sơ hoàn, giảm [42] trên tờ khai bổ sung, phần còn được khấu trừ vào [38] |
| 2.3 (đã được hoàn) | Không đổi | Giảm | Giảm [42], tính số thu hồi hoàn và tiền chậm nộp, phần còn được khấu trừ vào [38] |
| 3 | Tăng | Giảm | Tính số nộp thêm và tiền chậm nộp; phần giảm vào [37] |
| 4 | Giảm | Tăng | Giảm tiền chậm nộp nếu có, báo số được bù trừ hoặc hoàn; phần tăng vào [38] |

Phần mềm cần lưu **trạng thái hoàn thuế của từng kỳ** (chưa đề nghị, đã đề nghị, đã được hoàn) để phân biệt 2.1, 2.2, 2.3.

Tiền chậm nộp: số thuế nộp thêm × 0,03% × số ngày chậm (tính từ ngày sau hạn nộp đến ngày trước ngày nộp). Ví dụ: Bổ sung lần 2 Q2/2026 nộp thêm 1.120.000 ngày 12/10/2026, hạn 31/07/2026 → 72 ngày → 24.192 đ. Chi tiết ở [04-to-khai-da-nop.md](04-to-khai-da-nop.md).

### So sánh các lần

- Nút **"So sánh các lần"** hiện khi kỳ có từ 2 lần khai.
- Bảng chỉ tiêu: các lần đặt cạnh nhau + cột "Chênh lệch" (lần cuối − lần đầu). Chênh lệch [34], [35], [23], [24] phải bằng đúng tổng các hóa đơn thêm ở các lần bổ sung.
- Bảng kê bán ra / mua vào: **chỉ hiện hóa đơn thay đổi** giữa các lần.
- Chứng từ ngoài: không hiện gì (chứng từ ngoài không phải nội dung điều chỉnh).

## 11. Cả năm

Ô **"Cả năm"** đứng đầu màn tổng quan và có nút ở màn chi tiết.

- Cả năm = **mỗi kỳ đã nộp lấy lần khai sau cùng** + **kỳ đang làm / đang trong kỳ lấy số liệu hiện có** = toàn bộ chứng từ tại thời điểm xem. Nhãn: "Số liệu đến 17/10/2026" khi có kỳ chưa nộp, "Số liệu sau cùng" khi cả năm đã nộp.
- Các chỉ tiêu cộng theo từng kỳ; riêng **[22] lấy của kỳ đầu năm**, **[41]–[43] lấy của kỳ cuối**.
- Có đủ tab như một kỳ: Tờ khai 01/GTGT, Bảng kê bán ra, Bảng kê mua vào, Chứng từ ngoài, và thêm **Chi tiết hóa đơn** (tab này chỉ có ở Cả năm).
- Hàng "Đang xem" hiện lần khai được lấy của từng kỳ (VD "Q2 · Bổ sung lần 2"); bấm để mở kỳ đó.
- Cả năm **chỉ để xem**: không thêm chứng từ, không tải file lên.
- Ví dụ mẫu Thảo Vy 2026: Q1 17.913.920 + Q2 35.863.300 + Q3 36.724.128 + Q4 tạm 6.043.869 = **96.545.217** phải nộp.

## 12. Màn hình

### Màn tổng quan năm (mở đầu)

- Tiêu đề "Tờ khai GTGT · Năm 2026"; nhãn "Kỳ khai năm 2026: Quý/Tháng" (+ nhãn đổi kỳ khai nếu có).
- Ô **Cả năm**: Doanh thu chịu thuế, Thuế đầu ra, Thuế đầu vào được khấu trừ, Thuế phải nộp, Còn khấu trừ cuối năm; không ghi mã chỉ tiêu.
- Mỗi ô tháng/quý: tên kỳ, trạng thái, **Phải nộp**, **Còn khấu trừ**, nhãn lần khai (Lần đầu / Bổ sung lần N · ngày / Đang làm · N lệch / Số liệu tạm), "Xem chi tiết →". **Không** hiện ngày nộp, hạn nộp, doanh thu hay mã chỉ tiêu trên ô.

### Màn chi tiết một kỳ

Thứ tự từ trên xuống:

1. Thanh chuyển kỳ: "← 4 quý / 12 tháng", "‹ kỳ trước | kỳ đang xem | kỳ sau ›", trạng thái, hạn nộp, nút "Cả năm".
2. Hàng **"Đang xem"**: các lần khai, "So sánh các lần", bên phải là link đỏ còn lệch và nút chính (Khóa sổ / + Lập khai bổ sung lần N / Chưa hết kỳ).
3. 4 ô số: Doanh thu chịu thuế, Thuế đầu ra, Thuế đầu vào được khấu trừ, Thuế phải nộp (ô cuối đổi thành "Còn được khấu trừ chuyển kỳ sau" khi không phải nộp). Không ghi mã chỉ tiêu.
4. Tab theo thứ tự: **Tờ khai 01/GTGT** (đầu tiên), Bảng kê bán ra, Bảng kê mua vào, Chứng từ ngoài; ở Cả năm thêm Chi tiết hóa đơn. Cùng hàng tab: nút "Xuất bảng kê" và link "Đối chiếu đã nộp".

Bố cục gọn để thấy được nguyên mặt tờ khai; mỗi màn chỉ một thanh cuộn dọc.

### Bảng kê bán ra / mua vào

- Cột: Trạng thái HĐ · **File** (biểu tượng ghim) · Ngày · Ký hiệu · Số · Người mua/bán (+ mặt hàng) · Mã đối tượng · Tiền hàng · Thuế · Thuế suất / Nhóm · Kiểm tra.
- Bấm ghim → menu **Xem hóa đơn** · **Tải PDF** · **Tải XML (có chữ ký số)**. Tên file: `MST người bán_Ký hiệu_Số`.
- Xem hóa đơn mở đúng tờ hóa đơn gốc giống bản của người bán (lấy từ XML gốc có chữ ký số + mẫu hiển thị của người bán): logo/màu người bán, ký hiệu, số, mã CQT, bên bán, bên mua, các dòng hàng, cộng tiền, thuế suất, tổng thanh toán, số tiền bằng chữ, ô chữ ký số. Chân hộp xem ghi kỳ kê khai, tiền và thuế kê khai.
- Lọc nhanh: Tất cả · Khác dấu / khác số với Kho · Không thu tiền. Dòng khác Kho hiện thêm số tiền theo Kho bên dưới.

### Chi tiết hóa đơn (chỉ ở Cả năm)

- Mỗi dòng = **một dòng hàng**, số tiền **giống hóa đơn gốc** (SL × đơn giá = thành tiền; USD giữ nguyên USD).
- Thêm cột **Kê khai** (kỳ kê khai, hoặc Không kê khai / Tạm loại + lý do), **Tiền kê khai**, **Thuế kê khai** (phần đã lên bảng kê, chia theo tỷ lệ dòng). Tổng Tiền/Thuế kê khai phải bằng bảng kê.
- Nút xem hóa đơn gốc ở dòng đầu của mỗi hóa đơn.

### Chứng từ ngoài

- Cột: **Loại chứng từ · File · Ngày · Số** · Đối tác · Tiền hàng · Thuế · Người nhập.
- Có file: ghim → **Xem file** · **Tải xuống** · (kỳ đang làm) **Thay file khác**. Chưa có file: kỳ đang làm có nút "Tải file lên"; kỳ đã khóa ghi "Chưa có file".
- Xem file: ảnh và PDF xem ngay trong trình duyệt; loại khác (XLSX, ZIP…) báo cần tải về.
- **"+ Thêm chứng từ"** (chỉ kỳ đang làm / đang trong kỳ): Loại, Số, Ngày, Đối tác, Tiền hàng, Thuế GTGT, file đính kèm (PDF, JPG, PNG, XML, XLSX, ZIP, tối đa 10 MB). Kiểm tra: bắt buộc số, ngày, tiền hàng; **ngày phải thuộc kỳ đang làm**; không trùng số đã có trong kỳ.
- Kỳ đã khóa: "Kỳ đã nộp, số liệu đã khóa · muốn thêm chứng từ thì lập khai bổ sung".

### Xuất bảng kê

Bấm **"Xuất bảng kê"** tải ngay file Excel, không hỏi tùy chọn: sheet **BK BR hoàn chỉnh** + **BK MV hoàn chỉnh** của lần đang xem. Tên file: `BangKe_<Cty>_<MST>_<Kỳ>-<Năm>_<Lần>.xlsx` (Lần: LanDau / BanDangLam / BoSung1…). Cả năm: `…_CaNam-<Năm>_SoLieuSauCung.xlsx` hoặc `_Den17-10` khi có kỳ chưa nộp.

Cột BK mua vào hoàn chỉnh: Kỳ kê khai, STT, Ký hiệu mẫu HĐ, Ký hiệu, Số hóa đơn, Ngày hóa đơn, Tên người bán, MST, Mặt hàng, Giá trị MV chưa thuế, Thuế GTGT, Tổng giá trị, Nhóm, CT thanh toán (Hình thức TT, Ngày CT, Số CT, Số tiền), Chênh lệch, Ghi chú.

## 13. Kiểm tra phần mềm thật phải đạt

Bộ `tests/t_logic.js` đã kiểm trên thiết kế; phần mềm thật cần giữ đủ các bất biến:

- 4 ô số = [34], [35], [25], [40] của lần đang xem; [40] = [35] − [25].
- Chênh lệch khi so sánh = tổng hóa đơn thêm ở các lần bổ sung.
- Ngày mọi hóa đơn thuộc đúng kỳ; ký hiệu hóa đơn đúng năm (C26… cho 2026).
- Thuế = tiền × thuế suất (trừ các dòng đặc biệt ở mục 5).
- Kỳ đã khóa: không còn trạng thái chờ xử lý, không thêm chứng từ, không hiện khối kiểm tra, nút chính là "Lập khai bổ sung lần N".
- Cả năm = tổng các kỳ theo quy tắc mục 11; số hóa đơn không trùng giữa các kỳ.
- Chi tiết hóa đơn: SL × ĐG = thành tiền; tổng kê khai = bảng kê.

## 14. Điểm còn chờ chốt

- Hóa đơn điều chỉnh, thay thế từ 01/7/2026 kê khai vào kỳ lập hóa đơn điều chỉnh (đang làm) hay khai bổ sung kỳ của hóa đơn gốc. Cần bài hướng dẫn điều chỉnh hóa đơn từ 01/7/2026.
- Hóa đơn Không khấu trừ: bỏ hẳn khỏi [23]/[24] (đang làm) hay vẫn cộng [23]/[24] nhưng không cộng [25].
- Dòng mua vào thuế suất 0%, KCT, KKKNT: có đưa vào [23] không.
- Hóa đơn 8%: xác nhận nghị định giảm thuế đang áp dụng và mẫu phụ lục giảm thuế đi kèm.
- Sai sót thuế đầu vào: đối chiếu điều khoản riêng trong TT 89/2026 để chốt chỉ tiêu ghi hóa đơn mua vào về trễ.
- Ngày kê khai mua vào: theo ngày lập hóa đơn hay ngày ký / ngày cấp mã khi các ngày này khác kỳ.
- Ngày nghỉ lễ khi tính hạn nộp.
- Chứng từ ngoài thêm tay: trong thiết kế chưa cộng vào [23]/[24]; phần mềm thật phải cộng (loại Nhập khẩu vào cả [23a]/[24a]).
- Cần so lại chỉ tiêu nếu TT 89/2026 đổi mẫu tờ khai.
