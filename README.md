# phong330 — Shadowrocket & Locket

Cấu hình cá nhân hóa **phong330** dành cho Shadowrocket trên iPhone.

## 🚀 Cài nhanh trên iPhone

### 👉 [NHẤN VÀO ĐÂY ĐỂ MỞ TRANG CÀI ĐẶT PHONG330](https://phong330.github.io/Locket/)

**Mở bằng Safari trên iPhone.** Tại trang cài đặt, chọn **Mở trong Shadowrocket**, **Module Shadowrocket** hoặc **Tải hồ sơ DNS**. iOS có thể hỏi xác nhận; không có cách cài hồ sơ DNS tự động mà bỏ qua bước xác nhận của người dùng.

> **Nếu trang trên chưa mở:** Vào repository này → **Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save**. Bảo đảm `index.html` nằm tại thư mục gốc. Chờ GitHub Pages triển khai xong rồi thử lại.

## 🔗 Ba liên kết dự phòng

| Thành phần | Mở / tải |
|---|---|
| **Cấu hình Shadowrocket** | [phong330.conf](https://raw.githubusercontent.com/phong330/Locket/main/phong330.conf) |
| **Module Shadowrocket** *(tùy chọn)* | [phong330.sgmodule](https://raw.githubusercontent.com/phong330/Locket/main/phong330.sgmodule) |
| **Hồ sơ DNS cho iPhone** | [LocketGold_phong330.mobileconfig](https://raw.githubusercontent.com/phong330/Locket/main/assets/LocketGold_phong330.mobileconfig) |

Các liên kết Raw chủ yếu để tải file, **không đảm bảo tự mở ứng dụng**. Nếu nút mở Shadowrocket trên trang cài đặt không hoạt động, mở Shadowrocket → **Config** → thêm URL của `phong330.conf` thủ công. Không cần cài module nếu các quy tắc đã nằm trong cấu hình chính.

## 📱 Cài hồ sơ DNS

Trên iPhone, mở link DNS bằng Safari. Nếu được đề nghị tải hồ sơ, chọn **Cho phép**; sau đó vào **Cài đặt → Đã tải về hồ sơ** (hoặc **Cài đặt chung → VPN & Quản lý thiết bị**) để kiểm tra và xác nhận cài. GitHub Raw có thể chỉ tải file và không hiện lời nhắc hồ sơ.

**Quyền riêng tư:** Hồ sơ có thể sử dụng máy chủ DNS-over-HTTPS của bên thứ ba `my.ublockdns.com`. Tên `phong330` là tên hiển thị cá nhân, không phải nhà cung cấp DNS riêng và không bảo đảm tính năng trả phí của ứng dụng.

## Nguồn mã

Cấu hình cá nhân hóa của **phong330**, dựa trên [duyvinh09/Module_IOS](https://github.com/duyvinh09/Module_IOS). Quyền tác giả các mã nguồn gốc thuộc về tác giả tương ứng. Các script chưa được kiểm thử trên tất cả phiên bản Shadowrocket và iOS.
