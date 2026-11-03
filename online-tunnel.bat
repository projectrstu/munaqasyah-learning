@echo off
title Munaqasyah Learning - Public Online Tunnel (Tanpa WiFi Sama)
echo ============================================================
echo   🌐 MEMBUAT LINK WEB APP PUBLIK (INTERNET LUAS / BEDA WIFI)
echo   Santri bisa akses dari HP mana saja (Kuota 4G/5G / WiFi rumah)
echo ============================================================
echo.
echo Pastikan server (start.bat) SUDAH BERJALAN di latar belakang!
echo.
echo Menghubungkan ke secure tunnel public via SSH...
echo Setelah terhubung, URL publik (https://....) akan tampil di bawah ini.
echo Bagikan link tersebut ke santri atau ustadz!
echo.
echo Tekan Ctrl+C jika ingin mematikan tunnel.
echo ------------------------------------------------------------
ssh -p 443 -o StrictHostKeyChecking=no -R0:localhost:3000 a.pinggy.io
pause
