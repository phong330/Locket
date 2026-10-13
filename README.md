# phong330 — Shadowrocket & DNS

Bản cá nhân hóa giao diện/tên hiển thị từ mã nguồn dự án `duyvinh09/Module_IOS`. Mã gốc và tác giả gốc vẫn được ghi nhận; không nhận là tác giả của toàn bộ mã nguồn.

## HAI LINK CÀI ĐẶT

**1. Shadowrocket (cấu hình chính):**

https://raw.githubusercontent.com/phong330/phong/main/phong330.conf

**2. Hồ sơ DNS iPhone:**

https://raw.githubusercontent.com/phong330/phong/main/assets/LocketGold_phong330.mobileconfig

Link chỉ chạy sau khi tải đúng **toàn bộ nội dung ZIP** lên nhánh `main` của `https://github.com/phong330/phong` (không upload nguyên ZIP).

**Module tùy chọn (không nên bật cùng cấu hình chính vì quy tắc trùng):**
https://raw.githubusercontent.com/phong330/phong/main/phong330.sgmodule

### Cách cài

- Shadowrocket: Config → thêm URL `.conf` → tải về và chọn cấu hình.
- DNS: mở URL `.mobileconfig` bằng Safari; nếu iOS nhận hồ sơ thì vào Cài đặt → Đã tải về hồ sơ → xem nội dung rồi mới quyết định cài. GitHub Raw có thể chỉ tải tập tin thay vì kích hoạt luồng cài hồ sơ; iOS không cho website tự cài cấu hình.

### Cảnh báo

- DNS hiện vẫn gửi truy vấn tới `https://my.ublockdns.com/z451ak95` của bên thứ ba (URL gốc không thay đổi). Đổi tên thành phong330 **không đổi nhà cung cấp DNS** và không bảo đảm bất kỳ tính năng Premium nào.
- Các script sử dụng MITM và can thiệp nội dung HTTPS; nên xem xét rủi ro bảo mật, quyền riêng tư và độ tin cậy của script trước khi bật.
- Chưa kiểm thử thực tế trên iPhone. Nếu định đưa repo lên public, hãy rà soát giấy phép và ghi nhận nguồn gốc phù hợp.

Nguồn code ban đầu: https://github.com/duyvinh09/Module_IOS
