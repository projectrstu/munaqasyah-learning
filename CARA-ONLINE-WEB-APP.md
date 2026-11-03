# 🌐 Panduan Menjalankan Web App Munaqasyah di Internet (Beda WiFi / Luar Jaringan)

Agar santri (Ferdi, Kaniah, Fitrah, Ikhsan) dan Ustadz dapat membuka aplikasi dari **mana saja** (menggunakan kuota data HP 4G/5G, WiFi rumah masing-masing, atau warnet tanpa harus satu WiFi), Anda memiliki **2 Pilihan Praktis**:

---

## ⚡ CARA 1: Link Publik Instan dari Laptop (Paling Cepat, 1 Menit)
*Cocok jika Anda ingin langsung membagikan link ke santri sekarang tanpa perlu daftar akun cloud.*

1. Jalankan `start.bat` untuk menyalakan server lokal di laptop Anda.
2. Klik dua kali file **`online-tunnel.bat`**.
3. Terminal akan otomatis membuat link HTTPS publik yang aman (contoh):
   ```
   https://x892a-192-168.a.pinggy.link
   ```
4. **Selesai!** Bagikan link `https://...` tersebut ke WhatsApp santri.
   - Santri bisa membuka di browser HP mana pun (Chrome/Safari).
   - Menggunakan kuota seluler Telkomsel, Indosat, XL, atau WiFi apa pun.
   - Semua progres belajar tersinkron langsung ke laptop Anda secara real-time!

> *Catatan: Cara ini membutuhkan laptop Anda tetap menyala dan terhubung ke internet saat santri belajar.*

---

## ☁️ CARA 2: Deploy Permanen di Cloud 24/7 (Laptop Boleh Mati)
*Cocok untuk penggunaan jangka panjang di mana server online 24 jam nonstop tanpa membebani laptop Anda.*

### Pilihan A: Render.com (Gratis & Direkomendasikan)
1. Buat akun gratis di [https://render.com](https://render.com).
2. Buat repository baru di GitHub (misal: `munaqasyah-learning`) dan upload file proyek ini.
3. Di Dashboard Render, klik **New +** -> **Web Service**.
4. Hubungkan repository GitHub Anda.
5. Konfigurasi otomatis:
   - **Environment:** `Node`
   - **Build Command:** *(kosongkan atau `echo ok`)*
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
6. Klik **Create Web Service**.
7. Dalam 1-2 menit, Anda akan mendapatkan URL web publik resmi seperti:
   **`https://munaqasyah-tpa.onrender.com`**
8. Link ini aktif 24 jam nonstop, bisa dibuka kapan saja oleh santri & ustadz dari perangkat apa saja!

---

### Pilihan B: Glitch.com (Paling Mudah, Tanpa Git)
1. Buka [https://glitch.com](https://glitch.com) dan daftar akun gratis.
2. Klik **New Project** -> **Import from GitHub** atau drag & drop file proyek ini.
3. Server Node.js akan langsung berjalan otomatis.
4. Anda langsung mendapatkan domain web seperti:
   **`https://munaqasyah-tpa.glitch.me`**

---

## 📱 Apakah Fitur Tetap Berjalan Lengkap di Web App Publik?
**YA, 100% LENGKAP!**
- ✅ Fitur Login 4 Santri (`ferdi`, `kaniah`, `fitrah`, `ikhsan`) & 1 Ustadz (`admin`)
- ✅ Sinkronisasi database SQLite real-time
- ✅ Suara chime & buzzer Duolingo (Web Audio API)
- ✅ Live feed pemantauan Ustadz melalui Server-Sent Events (SSE)
- ✅ Pengisian nyawa, pemberian bonus XP, & pesan motivasi Ustadz
- ✅ Cetak Sertifikat & Raport Rekapitulasi Munaqasyah
