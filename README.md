# phong330 — Cấu hình Shadowrocket & Locket

Bộ cấu hình cá nhân hóa của **phong330**, dựa trên mã nguồn dự án [duyvinh09/Module_IOS](https://github.com/duyvinh09/Module_IOS). Các mã JavaScript bên thứ ba và quyền tác giả gốc thuộc về tác giả tương ứng.

## Liên kết sử dụng

| Thành phần | Liên kết |
|---|---|
| **Cấu hình Shadowrocket (`.conf`)** | [Tải phong330.conf](https://raw.githubusercontent.com/phong330/Locket/main/phong330.conf) |
| **Module Shadowrocket (`.sgmodule`)** | [Tải phong330.sgmodule](https://raw.githubusercontent.com/phong330/Locket/main/phong330.sgmodule) |
| **Hồ sơ DNS iPhone (`.mobileconfig`)** | [Tải LocketGold_phong330.mobileconfig](https://raw.githubusercontent.com/phong330/Locket/main/assets/LocketGold_phong330.mobileconfig) |

> Các link trên hoạt động khi file đã có đúng tên và đúng vị trí trong nhánh `main` của repository. Nếu gặp 404, hãy kiểm tra lại đường dẫn và chữ hoa/chữ thường.

## Cách cài

### Shadowrocket
1. Mở ứng dụng **Shadowrocket** trên iPhone.
2. Vào **Config**, thêm cấu hình bằng URL.
3. Dán URL của `phong330.conf`, tải về và chọn cấu hình.
4. File `.sgmodule` là module tùy chọn; không cần nhập đồng thời nếu nội dung đã có trong `.conf` để tránh trùng quy tắc.

### Hồ sơ DNS iPhone
1. Mở link `.mobileconfig` bằng **Safari** trên iPhone.
2. Nếu Safari đề nghị tải hồ sơ, chọn **Cho phép**.
3. Mở **Cài đặt → Đã tải về hồ sơ** (hoặc **Cài đặt → Cài đặt chung → VPN & Quản lý thiết bị**) để xem và cài.
4. GitHub Raw có thể tải xuống như file thông thường, không phải lúc nào cũng tự mở trang cài hồ sơ.

**Chú ý:** File DNS trong bộ này có thể dùng máy chủ DoH của bên thứ ba (`my.ublockdns.com`). Đổi tên hồ sơ sang `phong330` không đổi nhà cung cấp DNS và không đảm bảo mở khóa tính năng ứng dụng. Hãy cân nhắc quyền riêng tư và chỉ cài hồ sơ từ nguồn bạn tin tưởng.

## Cấu trúc repository

```text
Locket/
├── assets/
│   └── LocketGold_phong330.mobileconfig
├── js/
├── modules/
├── phong330.conf
├── phong330.sgmodule
└── README.md
```

## Thông tin

- GitHub: https://github.com/phong330/Locket
- Bản cấu hình cá nhân: **phong330**
- Nguồn tham khảo mã gốc: https://github.com/duyvinh09/Module_IOS

*Các script bên ngoài chưa được kiểm thử hoàn toàn trên mọi phiên bản Shadowrocket và iOS.*
