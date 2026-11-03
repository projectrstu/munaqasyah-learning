# 📿 Munaqasyah Learning System — Santri TPA (Duolingo Style)

Sistem belajar interaktif gamifikasi bergaya **Duolingo** khusus persiapan **Ujian Munaqasyah Santri TPA (LPPTKA-BKPRMI)**. Dilengkapi dengan **sinkronisasi multi-device real-time** berbasis SQLite & Server-Sent Events (SSE).

---

## 🚀 Cara Menjalankan Aplikasi

1. **Jalankan via Batch Script (Paling Mudah di Windows):**
   Cukup klik dua kali file `start.bat`. Browser akan otomatis terbuka ke `http://localhost:3000`.

2. **Atau jalankan via Terminal / PowerShell:**
   ```bash
   cd "C:\Users\VICTUS\.gemini\antigravity\scratch\munaqasyah-learning"
   node server.js
   ```

3. **Buka di Browser:**
   - **Komputer/Laptop Utama:** [http://localhost:3000](http://localhost:3000)
   - **HP / Tablet Santri & Ustadz (WiFi yang sama):** Buka URL yang tampil di konsol (contoh: `http://192.168.1.15:3000`) atau scan **QR Code** yang ada di tombol `📱 Buka di HP`.

---

## 👥 Akun Login (Tersimpan & Tersinkron)

Tersedia fitur **Pilih Akun Cepat (1-Klik)** pada halaman login, atau login manual:

| Role | Username | Password | Keterangan |
| :--- | :--- | :--- | :--- |
| **Santri 1** | `ferdi` | `ferdi1234` | Akun Belajar Santri Ferdi |
| **Santri 2** | `kaniah` | `kaniah1234` | Akun Belajar Santri Kaniah |
| **Santri 3** | `fitrah` | `fitrah1234` | Akun Belajar Santri Fitrah |
| **Santri 4** | `ikhsan` | `ikhsan1234` | Akun Belajar Santri Ikhsan |
| **Ustadz** | `admin` | `admin1234` | Akun Monitoring & Bimbingan Ustadz |

---

## 📅 Roadmap Belajar 4 Hari (Sesuai Materi Munaqasyah)

Kurikulum dirancang intensif dalam **4 Hari Belajar + Ujian Akhir** untuk memastikan santri 100% siap menghadapi ujian munaqasyah:

### 🕌 Hari 1: Fiqh Ibadah & Kesucian
- **Level 1 (Mudah):** Rukun Islam, Waktu-Waktu Salat, Puasa Ramadhan, Zakat Fitrah
- **Level 2 (Sedang):** Hari-Hari Besar Islam, Bulan Hijriyah, Tata Cara Ibadah Haji/Umroh
- **Level 3 (Sedang):** Jenis-Jenis Air, Thaharah, Tayammum, Mandi Besar
- **Level 4 (Sulit):** Puasa Sunnah, Puasa Nazar, Puasa Kafarat

### ☪️ Hari 2: Tauhid & Rukun Iman
- **Level 5 (Mudah):** Asmaul Husna, Sifat Wajib Bagi Allah, Sifat Mustahil Bagi Allah, Sifat Jaiz Bagi Allah
- **Level 6 (Sedang):** Rukun Iman, Kalimat Thoyyibah, Nama-nama Malaikat Allah & Tugasnya
- **Level 7 (Sulit):** Qada dan Qadar, Nabi-Nabi Ulul Azmi, Tanda-Tanda Kiamat

### 📖 Hari 3: Tarikh & Kisah Islami
- **Level 8 (Mudah):** Kisah Nabi Adam a.s., Kisah Nabi Nuh a.s., Kisah Nabi Ibrahim a.s., Kisah Nabi Ismail a.s.
- **Level 9 (Sedang):** Kisah Nabi Yusuf a.s., Kisah Nabi Musa a.s., Kisah Nabi Daud a.s., Kisah Nabi Sulaiman a.s.
- **Level 10 (Sulit):** Kisah Nabi Isa a.s., Kisah Nabi Muhammad SAW, Khulafaur Rasyidin (Abu Bakar, Umar, Utsman)

### 📿 Hari 4: Master Ilmu Tajwid
- **Level 11 (Mudah):** Makharijul Huruf, Sifatul Huruf, Tafkhim dan Tarqiq, Alif Lam (Syamsiyah & Qamariyah)
- **Level 12 (Sedang):** Hukum Nun Sukun & Tanwin, Hukum Mim Mati, Idgham yang lain, Bacaan Qolqolah
- **Level 13 (Sedang):** Macam-macam Mad, Waqaf Wal Ibtida, Tanda-tanda Waqaf
- **Level 14 (Sulit):** Fawathissuwar, Shod yang dibaca Shin, Gharib (Imalah, Isymam, Naql, Tashil, Saktah), Mengenal Ayat Sajadah

### 🏆 Simulasi Ujian Akhir Munaqasyah
- **Level 15 (Tryout Komprehensif):** 20 Soal ujian gabungan seluruh materi. Syarat kelulusan KKM 75%. Membuka **Sertifikat Kelulusan & Kesiapan Munaqasyah TPA**.

---

## 🎮 Fitur Gamifikasi Ala Duolingo

1. **Sistem Nyawa / Hearts (❤️ 5 Nyawa):**
   - Menjawab salah mengurangi 1 nyawa.
   - Efek suara detak jantung & nada sedih saat nyawa berkurang.
   - Ustadz dapat mengisi ulang nyawa santri dari panel pemantau.
2. **XP & Leveling (⚡ XP):**
   - Mendapatkan XP berdasarkan jawaban benar, jumlah bintang (⭐ 1-3), dan sisa nyawa.
3. **Streak Harian (🔥 Hari):**
   - Mencatat keaktifan belajar berturut-turut.
4. **Efek Audio Sintetis (Web Audio API):**
   - Nada *ding/chime* kemenangan saat jawaban benar.
   - Nada *buzzer* saat salah.
   - Fanfare terompet ceria saat menuntaskan level.
   - Dapat diaktifkan / dimatikan sewaktu-waktu dengan tombol 🔊/🔇.
5. **Variasi Bentuk Soal:**
   - Pilihan Ganda (A, B, C, D)
   - Benar atau Salah (✓ / ✗)
   - Susun Urutan (Reordering chips)
   - Isian Singkat
6. **Kotak Penjelasan & Dalil:**
   - Muncul otomatis setelah menjawab, memberikan hikmah, rujukan dalil, dan alasan jawaban.
7. **Pesta Konfeti 🎊:**
   - Konfeti animasi saat berhasil menyelesaikan level dengan predikat bintang 2 atau 3.

---

## 👳 Fitur Panel Ustadz (Monitoring & Bimbingan)

1. **Live Feed Real-Time (Server-Sent Events):**
   - Memantau aktivitas santri detik demi detik saat santri mengerjakan kuis di HP masing-masing tanpa perlu refresh halaman.
2. **Status Kesiapan Ujian Munaqasyah:**
   - Indikator otomatis: *Belum Mulai*, *Perlu Bimbingan*, *Progres Baik*, *Siap Ujian*, atau *Sangat Siap (Mumtaz)*.
3. **Aksi Interaktif Ustadz:**
   - 💖 **Isi Nyawa:** Mengisi ulang nyawa santri menjadi 5 secara instan.
   - ⚡ **Beri Bonus XP:** Menghadiahkan +50 XP kepada santri yang rajin.
   - 💌 **Kirim Pesan Bimbingan:** Mengirimkan pesan/catatan motivasi yang langsung muncul di dashboard santri.
4. **Raport & Sertifikat Cetak:**
   - 📜 **Sertifikat Munaqasyah Santri:** Sertifikat resmi format LPPTKA-BKPRMI dengan nama santri, predikat Mumtaz, dan tanda tangan Ustadz.
   - 🖨️ **Raport Rekapitulasi Seluruh Santri:** Tabel rekap nilai dan status munaqasyah siap cetak.

---

## 📁 Struktur File Proyek

```
munaqasyah-learning/
├── data/
│   └── munaqasyah.db      # Database SQLite (Tersinkron Multi-Device)
├── server.js              # Server HTTP + SQLite + SSE Real-Time Sync
├── index.html             # Tampilan Antarmuka Aplikasi (Single Page App)
├── style.css              # Styling Tema Islami Dark-Emerald ala Duolingo
├── app.js                 # Logika Inti, State Management & Audio Synthesizer
├── questions.js           # 160 Soal Kurikulum Lengkap Fiqh, Tauhid, Tarikh, Tajwid
├── qrcode.js              # Generator QR Code Standalone untuk HP Santri
├── start.bat              # Script Cepat Menjalankan Server di Windows
└── package.json           # Metadata Aplikasi
```
