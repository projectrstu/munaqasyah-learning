/* ============================================================
   MUNAQASYAH LEARNING SYSTEM — FULL APPLICATION LOGIC
   Duolingo-style + SQLite Synchronization + SSE Real-Time Sync
   ============================================================ */

const APP = {
  // ─── State ──────────────────────────────────────────────
  currentUser: null,
  currentLevel: null,
  quizState: null,
  syncStatus: 'online',
  soundEnabled: true,
  audioCtx: null,
  eventSource: null,
  networkUrls: ['http://localhost:3000'],
  selectedStudentForMessage: null,

  // ─── Local Fallback Database ────────────────────────────
  users: {
    ferdi:  { password: 'ferdi1234',  name: 'Ferdi',           role: 'santri', color: '#58cc02', avatar: '👦' },
    kaniah: { password: 'kaniah1234', name: 'Kaniah',          role: 'santri', color: '#ce82ff', avatar: '👧' },
    fitrah: { password: 'fitrah1234', name: 'Fitrah',          role: 'santri', color: '#38bdf8', avatar: '👦' },
    ikhsan: { password: 'ikhsan1234', name: 'Ikhsan',          role: 'santri', color: '#fbbf24', avatar: '👦' },
    admin:  { password: 'admin1234',  name: 'Ustadz (Admin)',  role: 'ustadz', color: '#ff6b6b', avatar: '👳' }
  },

  // ─── Level & Curriculum Map ─────────────────────────────
  dayMap: [
    { day: 1, label: 'Hari 1', subject: 'Fiqh Ibadah & Kesucian', cssClass: 'fiqh', icon: '🕌', levels: [1,2,3,4] },
    { day: 2, label: 'Hari 2', subject: 'Tauhid & Rukun Iman', cssClass: 'tauhid', icon: '☪️', levels: [5,6,7] },
    { day: 3, label: 'Hari 3', subject: 'Tarikh / Kisah Islami & Sahabat', cssClass: 'tarikh', icon: '📖', levels: [8,9,10] },
    { day: 4, label: 'Hari 4', subject: 'Ilmu Tajwid & Fawatihussuwar', cssClass: 'tajwid', icon: '📿', levels: [11,12,13,14] },
    { day: 0, label: '🏆', subject: 'Tryout Simulasi Ujian Akhir Munaqasyah', cssClass: 'final', icon: '🏆', levels: [15] }
  ],

  TOTAL_LEVELS: 15,

  // ─── Initialization ────────────────────────────────────
  async init() {
    // Sound setting
    const savedSound = localStorage.getItem('munaqasyah_sound');
    if (savedSound !== null) {
      this.soundEnabled = savedSound === 'true';
    }
    this.updateSoundIcons();

    // Fetch network info for device connection & QR Code
    await this.fetchNetworkInfo();

    // Connect SSE for real-time synchronization
    this.initSync();

    // Check saved session
    const session = localStorage.getItem('munaqasyah_session');
    if (session) {
      try {
        const { username } = JSON.parse(session);
        if (this.users[username]) {
          // Verify with server or use local
          await this.loadUserSession(username);
          return;
        }
      } catch (e) {
        localStorage.removeItem('munaqasyah_session');
      }
    }

    this.showScreen('login');
  },

  async loadUserSession(username) {
    try {
      const res = await fetch('/api/progress/' + username);
      if (res.ok) {
        const data = await res.json();
        this.currentUser = { ...this.users[username], username, ...data.progress };
        this.updateSyncBadge('online', 'Tersinkron (SQLite)');
      } else {
        throw new Error('Server error');
      }
    } catch (e) {
      this.currentUser = { ...this.users[username], username };
      this.updateSyncBadge('offline', 'Mode Offline (Lokal)');
    }

    if (this.currentUser.role === 'ustadz') {
      this.showScreen('ustadz');
      await this.renderUstadzDashboard();
    } else {
      this.showScreen('dashboard');
      await this.renderDashboard();
    }
  },

  // ─── Sound Synthesizer (Web Audio API) ───────────────────
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('munaqasyah_sound', this.soundEnabled);
    this.updateSoundIcons();
    if (this.soundEnabled) {
      this.playClick();
      this.showNotification('🔊 Suara diaktifkan', 'info');
    } else {
      this.showNotification('🔇 Suara dinonaktifkan', 'info');
    }
  },

  updateSoundIcons() {
    const icon = this.soundEnabled ? '🔊' : '🔇';
    ['btn-sound-student', 'btn-sound-lesson', 'btn-sound-ustadz'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = icon;
    });
  },

  playTone(freq, type = 'sine', duration = 0.15, gainValue = 0.15, startTime = 0) {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainValue, ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration);
    } catch (e) { /* ignore audio error */ }
  },

  playCorrect() {
    this.playTone(523.25, 'triangle', 0.12, 0.2, 0);     // C5
    this.playTone(659.25, 'triangle', 0.25, 0.25, 0.1);   // E5
  },

  playIncorrect() {
    this.playTone(220, 'sawtooth', 0.15, 0.2, 0);       // A3
    this.playTone(185, 'sawtooth', 0.25, 0.25, 0.12);   // F#3
  },

  playClick() {
    this.playTone(440, 'sine', 0.05, 0.1, 0);
  },

  playHeartLost() {
    this.playTone(320, 'triangle', 0.12, 0.2, 0);
    this.playTone(220, 'sawtooth', 0.2, 0.25, 0.1);
  },

  playFanfare() {
    if (!this.soundEnabled) return;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, i) => {
      this.playTone(freq, 'triangle', 0.2, 0.2, i * 0.12);
    });
    setTimeout(() => {
      this.playTone(523.25, 'triangle', 0.4, 0.3, 0);
    }, 550);
  },

  // ─── Network & Device Info ──────────────────────────────
  async fetchNetworkInfo() {
    try {
      const res = await fetch('/api/network-info');
      if (res.ok) {
        const data = await res.json();
        this.networkUrls = data.urls.length ? data.urls : [data.localUrl];
      }
    } catch (e) {
      this.networkUrls = [`http://${window.location.hostname || 'localhost'}:3000`];
    }
  },

  showDeviceModal() {
    const url = this.networkUrls[0] || `http://${window.location.hostname || 'localhost'}:3000`;
    document.getElementById('network-url-text').textContent = url;

    // Generate SVG QR Code using qrcode.js
    const qrContainer = document.getElementById('qr-code-box');
    if (window.QRCode && window.QRCode.generateSvg) {
      qrContainer.innerHTML = window.QRCode.generateSvg(url, 5, 2);
    } else {
      qrContainer.innerHTML = `<p style="color:#000;padding:10px;">Buka: <strong>${url}</strong></p>`;
    }

    this.openModal('modal-device');
  },

  copyNetworkUrl() {
    const text = document.getElementById('network-url-text').textContent;
    navigator.clipboard.writeText(text).then(() => {
      this.showNotification('📋 Link URL berhasil disalin!', 'success');
      this.playClick();
    }).catch(() => {
      prompt('Salin link berikut:', text);
    });
  },

  // ─── Real-Time Sync (Server-Sent Events) ─────────────────
  initSync() {
    if (this.eventSource) {
      try { this.eventSource.close(); } catch(e){}
    }

    try {
      this.eventSource = new EventSource('/api/events');

      this.eventSource.addEventListener('connected', () => {
        this.updateSyncBadge('online', 'Tersinkron (SQLite)');
      });

      this.eventSource.addEventListener('quiz_completed', (e) => {
        const data = JSON.parse(e.data);
        this.handleRemoteQuizComplete(data);
      });

      this.eventSource.addEventListener('hearts_refilled', (e) => {
        const data = JSON.parse(e.data);
        if (this.currentUser && this.currentUser.username === data.username) {
          this.currentUser.hearts = 5;
          const heartsEl = document.getElementById('header-hearts');
          if (heartsEl) heartsEl.textContent = '5';
          this.playCorrect();
          this.showNotification('💖 MasyaAllah! Ustadz baru saja mengisi ulang nyawamu menjadi 5!', 'success');
        }
        if (this.currentUser && this.currentUser.role === 'ustadz') {
          this.renderUstadzDashboard();
        }
      });

      this.eventSource.addEventListener('xp_rewarded', (e) => {
        const data = JSON.parse(e.data);
        if (this.currentUser && this.currentUser.username === data.username) {
          this.currentUser.xp = (this.currentUser.xp || 0) + data.amount;
          const xpEl = document.getElementById('header-xp');
          if (xpEl) xpEl.textContent = this.currentUser.xp;
          this.playFanfare();
          this.showNotification(`⚡ Selamat! Ustadz memberikan bonus +${data.amount} XP untukmu!`, 'success');
        }
        if (this.currentUser && this.currentUser.role === 'ustadz') {
          this.renderUstadzDashboard();
        }
      });

      this.eventSource.addEventListener('feedback_received', (e) => {
        const data = JSON.parse(e.data);
        if (this.currentUser && this.currentUser.username === data.username) {
          this.showUstadzFeedbackBanner(data.message);
          this.playCorrect();
          this.showNotification('💌 Ada pesan bimbingan baru dari Ustadz!', 'info');
        }
      });

      this.eventSource.addEventListener('progress_updated', () => {
        if (this.currentUser && this.currentUser.role === 'ustadz') {
          this.renderUstadzDashboard();
        }
      });

      this.eventSource.onerror = () => {
        this.updateSyncBadge('offline', 'Mode Offline (Lokal)');
      };
    } catch (e) {
      this.updateSyncBadge('offline', 'Mode Offline (Lokal)');
    }
  },

  updateSyncBadge(status, text) {
    this.syncStatus = status;
    ['sync-badge-student', 'sync-badge-ustadz'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.className = 'sync-badge ' + status;
      }
    });
    ['sync-text-student', 'sync-text-ustadz'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = text;
      }
    });
  },

  handleRemoteQuizComplete(data) {
    const student = this.users[data.username];
    const studentName = student ? student.name : data.username;
    const levelInfo = window.QUESTIONS_DATA ? window.QUESTIONS_DATA[data.levelId] : null;
    const levelTitle = levelInfo ? levelInfo.title : 'Level ' + data.levelId;

    // If Ustadz is viewing, add to live activity feed and refresh dashboard
    if (this.currentUser && this.currentUser.role === 'ustadz') {
      const feed = document.getElementById('activity-feed-list');
      if (feed) {
        const item = document.createElement('div');
        item.className = 'activity-item';
        const starsText = data.stars ? '⭐'.repeat(data.stars) : '❌';
        item.innerHTML = `
          <div class="activity-item-left">
            <span class="activity-dot" style="background:${student?.color || '#58cc02'};"></span>
            <strong>${studentName}</strong> ${data.passed ? 'lulus' : 'mencoba'} <em>${levelTitle}</em> (${data.percentage}%) ${starsText}
          </div>
          <span class="activity-time">Baru saja</span>
        `;
        if (feed.firstElementChild && feed.firstElementChild.textContent.includes('Menunggu')) {
          feed.innerHTML = '';
        }
        feed.insertBefore(item, feed.firstChild);
      }

      this.showNotification(`🔔 ${studentName} baru saja menyelesaikan ${levelTitle} dengan skor ${data.percentage}%!`, 'info');
      this.renderUstadzDashboard();
    }
  },

  // ─── Modal Management ──────────────────────────────────
  openModal(id) {
    this.activeModal = id;
    const el = document.getElementById(id);
    if (el) el.style.display = 'flex';
  },

  closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
    this.activeModal = null;
  },

  // ─── Login System ──────────────────────────────────────
  quickFill(username, password) {
    document.getElementById('login-username').value = username;
    document.getElementById('login-password').value = password;
    this.playClick();
    this.login(new Event('submit'));
  },

  async login(e) {
    if (e && e.preventDefault) e.preventDefault();
    const username = document.getElementById('login-username').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');

    errorEl.classList.remove('show');

    // Attempt Server Login First
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (!res.ok) {
        errorEl.textContent = '❌ ' + (data.error || 'Login gagal!');
        errorEl.classList.add('show');
        this.playIncorrect();
        return false;
      }

      this.currentUser = { ...data.user, ...data.progress };
      localStorage.setItem('munaqasyah_session', JSON.stringify({ username }));
      this.updateSyncBadge('online', 'Tersinkron (SQLite)');

    } catch (err) {
      // Offline fallback: check local user database
      if (!this.users[username]) {
        errorEl.textContent = '❌ Username tidak ditemukan!';
        errorEl.classList.add('show');
        this.playIncorrect();
        return false;
      }
      if (this.users[username].password !== password) {
        errorEl.textContent = '❌ Password salah!';
        errorEl.classList.add('show');
        this.playIncorrect();
        return false;
      }

      const prog = this.getLocalProgress(username);
      this.currentUser = { ...this.users[username], username, ...prog };
      localStorage.setItem('munaqasyah_session', JSON.stringify({ username }));
      this.updateSyncBadge('offline', 'Mode Offline (Lokal)');
    }

    this.playCorrect();
    this.showNotification(`Assalamu'alaikum, ${this.currentUser.name}! 🌙`, 'success');

    if (this.currentUser.role === 'ustadz') {
      this.showScreen('ustadz');
      await this.renderUstadzDashboard();
    } else {
      this.showScreen('dashboard');
      await this.renderDashboard();
    }

    return false;
  },

  logout() {
    this.currentUser = null;
    this.currentLevel = null;
    this.quizState = null;
    localStorage.removeItem('munaqasyah_session');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    this.showScreen('login');
  },

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById('screen-' + screenId);
    if (screen) screen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ─── Progress Management (Server + Local Fallback) ───────
  getLocalProgress(username) {
    const key = 'munaqasyah_progress_' + (username || this.currentUser.username);
    const stored = localStorage.getItem(key);
    if (stored) {
      try { return JSON.parse(stored); } catch (e) {}
    }
    return { xp: 0, streak: 0, hearts: 5, lastActive: null, levels: {} };
  },

  saveLocalProgress(username, progress) {
    const key = 'munaqasyah_progress_' + (username || this.currentUser.username);
    localStorage.setItem(key, JSON.stringify(progress));
  },

  async getProgress(username) {
    const userToFetch = username || this.currentUser.username;
    try {
      const res = await fetch('/api/progress/' + userToFetch);
      if (res.ok) {
        const data = await res.json();
        const merged = {
          xp: data.progress.xp || 0,
          streak: data.progress.streak || 0,
          hearts: data.progress.hearts ?? 5,
          lastActive: data.progress.last_active,
          levels: data.levels || {},
          unreadFeedback: data.unreadFeedback || []
        };
        this.saveLocalProgress(userToFetch, merged);
        return merged;
      }
    } catch (e) {}
    return this.getLocalProgress(userToFetch);
  },

  isLevelUnlocked(levelId, progress) {
    if (levelId === 1) return true;
    if (levelId === 15) {
      // Must complete all 14 preparatory levels
      for (let i = 1; i <= 14; i++) {
        if (!progress.levels[i] || !progress.levels[i].completed) return false;
      }
      return true;
    }
    return progress.levels[levelId - 1] && progress.levels[levelId - 1].completed;
  },

  getCompletedCount(progress) {
    let count = 0;
    for (let i = 1; i <= this.TOTAL_LEVELS; i++) {
      if (progress.levels[i] && progress.levels[i].completed) count++;
    }
    return count;
  },

  // ─── Student Dashboard ──────────────────────────────────
  async renderDashboard() {
    if (!this.currentUser) return;
    const progress = await this.getProgress();
    const completed = this.getCompletedCount(progress);
    const pct = Math.round((completed / this.TOTAL_LEVELS) * 100);

    // Update Header
    document.getElementById('header-xp').textContent = progress.xp || 0;
    document.getElementById('header-streak').textContent = progress.streak || 0;
    document.getElementById('header-hearts').textContent = progress.hearts ?? 5;
    document.getElementById('header-name').textContent = this.currentUser.name;
    document.getElementById('header-avatar').textContent = this.currentUser.name.charAt(0);
    document.getElementById('header-avatar').style.background = `linear-gradient(135deg, ${this.currentUser.color}, ${this.currentUser.color}88)`;

    // Check Unread Ustadz Feedback
    if (progress.unreadFeedback && progress.unreadFeedback.length > 0) {
      this.showUstadzFeedbackBanner(progress.unreadFeedback[0].message);
    } else {
      const banner = document.getElementById('ustadz-feedback-banner');
      if (banner) banner.style.display = 'none';
    }

    // Exam Readiness Indicator Card
    let readinessText = 'Belum Mulai';
    let readinessClass = 'gray';
    let readinessIcon = '🌱';
    let isFinalPassed = progress.levels[15] && progress.levels[15].completed;

    if (isFinalPassed) {
      readinessText = 'Mumtaz! Lulus Munaqasyah 🏆';
      readinessClass = 'gold';
      readinessIcon = '🏆';
    } else if (completed >= 14) {
      readinessText = 'Sangat Siap Ikut Ujian Munaqasyah 🟢';
      readinessClass = 'green';
      readinessIcon = '🎯';
    } else if (completed >= 7) {
      readinessText = 'Progres Mantap Menuju Munaqasyah 🟡';
      readinessClass = 'yellow';
      readinessIcon = '📖';
    } else if (completed > 0) {
      readinessText = 'Perlu Terus Berlatih 🟠';
      readinessClass = 'orange';
      readinessIcon = '💪';
    }

    const readinessEl = document.getElementById('readiness-card');
    readinessEl.innerHTML = `
      <div class="readiness-left">
        <div class="readiness-icon">${readinessIcon}</div>
        <div>
          <div class="readiness-title">Indikator Kesiapan Ujian Munaqasyah</div>
          <div class="readiness-badge ${readinessClass}">${readinessText}</div>
        </div>
      </div>
      <div class="readiness-right">
        <div class="readiness-progress-wrapper">
          <div class="readiness-pct">${pct}%</div>
          <div class="readiness-desc">${completed}/${this.TOTAL_LEVELS} Level Selesai</div>
        </div>
        ${completed >= 14 || isFinalPassed ? `
          <button class="btn-certificate" onclick="APP.showCertificate('${this.currentUser.username}')">
            📜 Lihat Sertifikat Kesiapan
          </button>
        ` : ''}
      </div>
    `;

    // Stats Bar
    document.getElementById('stats-bar').innerHTML = `
      <div class="stat-card">
        <div class="stat-icon">⚡</div>
        <div class="stat-value xp-value">${progress.xp || 0}</div>
        <div class="stat-label">Total XP</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔥</div>
        <div class="stat-value streak-value">${progress.streak || 0}</div>
        <div class="stat-label">Streak Hari</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">❤️</div>
        <div class="stat-value" style="color:#ff6b6b;">${progress.hearts ?? 5}/5</div>
        <div class="stat-label">Nyawa Tersisa</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-value">${pct}%</div>
        <div class="stat-label">Target 4 Hari</div>
      </div>
    `;

    // Level Path (Duolingo style)
    this.renderLevelPath(progress);
  },

  showUstadzFeedbackBanner(message) {
    const banner = document.getElementById('ustadz-feedback-banner');
    if (!banner) return;
    banner.style.display = 'flex';
    banner.innerHTML = `
      <div class="feedback-content">
        <div class="feedback-icon">💌</div>
        <div>
          <div class="feedback-title">Catatan Bimbingan dari Ustadz:</div>
          <div class="feedback-text">"${message}"</div>
        </div>
      </div>
      <button class="btn-ack-feedback" onclick="APP.ackFeedback()">Tandai Sudah Dibaca ✓</button>
    `;
  },

  async ackFeedback() {
    try {
      await fetch('/api/feedback/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.currentUser.username })
      });
    } catch(e){}
    document.getElementById('ustadz-feedback-banner').style.display = 'none';
    this.showNotification('Catatan telah ditandai dibaca.', 'info');
  },

  renderLevelPath(progress) {
    const container = document.getElementById('level-path');
    let html = '';

    this.dayMap.forEach(day => {
      html += `<div class="day-section">
        <div class="day-header ${day.cssClass}">
          <span>${day.icon}</span>
          <span>${day.day ? day.label + ': ' : ''}${day.subject}</span>
          <span class="day-tag">${day.day ? 'Hari ' + day.day : 'Ujian Akhir'}</span>
        </div>
        <div class="level-track">`;

      day.levels.forEach((levelId, idx) => {
        const levelData = window.QUESTIONS_DATA[levelId];
        if (!levelData) return;
        const lp = progress.levels[levelId];
        const isCompleted = lp && lp.completed;
        const isUnlocked = this.isLevelUnlocked(levelId, progress);
        const isCurrent = isUnlocked && !isCompleted;

        const stateClass = isCompleted ? 'completed' : (isCurrent ? 'current' : 'locked');
        const diffClass = levelData.difficulty === 'easy' ? 'difficulty-easy' :
                          levelData.difficulty === 'medium' ? 'difficulty-medium' : 'difficulty-hard';
        const diffLabel = levelData.difficulty === 'easy' ? 'Mudah' :
                          levelData.difficulty === 'medium' ? 'Sedang' : 'Sulit';

        const stars = isCompleted ? this.renderStars(lp.stars) : '';
        const circleContent = isCompleted ? (levelData.icon || '✓') : levelId;

        html += `
          <div class="level-node ${stateClass}" onclick="${isUnlocked ? 'APP.openLevel(' + levelId + ')' : 'APP.lockedLevelAlert(' + levelId + ')'}" 
               title="${isUnlocked ? levelData.title : 'Selesaikan level sebelumnya'}">
            <div class="level-circle">${circleContent}</div>
            <div class="level-title">${levelData.title}</div>
            ${stars ? '<div class="level-stars">' + stars + '</div>' : ''}
            <span class="level-difficulty ${diffClass}">${diffLabel}</span>
          </div>`;

        if (idx < day.levels.length - 1) {
          const nextCompleted = progress.levels[day.levels[idx + 1]] && progress.levels[day.levels[idx + 1]].completed;
          html += `<div class="level-connector ${isCompleted ? 'done' : ''}"></div>`;
        }
      });

      html += '</div></div>';
    });

    container.innerHTML = html;
  },

  lockedLevelAlert(levelId) {
    this.playTone(200, 'sawtooth', 0.1, 0.15);
    if (levelId === 15) {
      this.showNotification('🔒 Level 15 adalah Simulasi Ujian Akhir! Selesaikan semua Level 1 s/d 14 terlebih dahulu.', 'error');
    } else {
      this.showNotification('🔒 Selesaikan level sebelumnya terlebih dahulu untuk membuka materi ini!', 'error');
    }
  },

  renderStars(count) {
    let html = '';
    for (let i = 0; i < 3; i++) {
      html += i < count ? '⭐' : '<span class="star-empty">⭐</span>';
    }
    return html;
  },

  // ─── Lesson Screen ─────────────────────────────────────
  openLevel(levelId) {
    const levelData = window.QUESTIONS_DATA[levelId];
    if (!levelData) return;

    this.playClick();
    this.currentLevel = levelId;
    document.getElementById('lesson-title').textContent = `Level ${levelId}: ${levelData.title}`;
    document.getElementById('lesson-badge').textContent = `${levelData.icon} ${levelData.subjectLabel || levelData.subject.toUpperCase()}`;
    document.getElementById('lesson-xp').textContent = this.currentUser.xp || 0;
    document.getElementById('lesson-hearts').textContent = this.currentUser.hearts ?? 5;

    const topicsHtml = (levelData.topics || []).map(t => `<span class="lesson-topic-tag">${t}</span>`).join('');
    document.getElementById('lesson-topics').innerHTML = topicsHtml;
    document.getElementById('lesson-content').innerHTML = levelData.lesson || '<p>Pelajari materi dengan cermat sebelum menjawab kuis.</p>';

    this.showScreen('lesson');
  },

  // ─── Quiz Engine ───────────────────────────────────────
  startQuiz() {
    const levelData = window.QUESTIONS_DATA[this.currentLevel];
    if (!levelData || !levelData.questions || !levelData.questions.length) return;

    const hearts = this.currentUser.hearts ?? 5;
    if (hearts <= 0) {
      this.showNotification('💔 Nyawamu telah habis! Hubungi Ustadz untuk mengisi ulang atau coba lagi nanti.', 'error');
      this.playIncorrect();
      return;
    }

    this.playClick();
    this.quizState = {
      questions: JSON.parse(JSON.stringify(levelData.questions)),
      currentIndex: 0,
      score: 0,
      hearts: hearts,
      answered: false
    };

    this.showScreen('quiz');
    this.renderQuestion();
  },

  renderQuestion() {
    const qs = this.quizState;
    const q = qs.questions[qs.currentIndex];
    const total = qs.questions.length;

    qs.answered = false;

    // Progress bar
    const progressPct = ((qs.currentIndex) / total) * 100;
    document.getElementById('quiz-progress-fill').style.width = progressPct + '%';

    // Hearts
    let heartsHtml = '';
    for (let i = 0; i < 5; i++) {
      heartsHtml += i < qs.hearts ? '<span class="heart full">❤️</span>' : '<span class="heart empty">🖤</span>';
    }
    document.getElementById('quiz-hearts').innerHTML = heartsHtml;

    // Question header
    document.getElementById('quiz-question-number').textContent = `Pertanyaan ${qs.currentIndex + 1} dari ${total}`;
    const typeLabel = q.type === 'multiple_choice' ? 'Pilihan Ganda' :
                      q.type === 'true_false' ? 'Benar atau Salah' :
                      q.type === 'ordering' ? 'Susun Urutan' : 'Isian Singkat';
    document.getElementById('quiz-question-type').textContent = typeLabel;
    document.getElementById('quiz-question-text').textContent = q.question;

    // Hide feedback & bottom bar
    const feedback = document.getElementById('quiz-feedback');
    feedback.className = 'quiz-feedback';
    feedback.style.display = 'none';
    document.getElementById('quiz-bottom-bar').style.display = 'none';

    // Render answer area
    const area = document.getElementById('quiz-answer-area');
    area.innerHTML = '';

    if (q.type === 'multiple_choice') {
      this.renderMultipleChoice(area, q);
    } else if (q.type === 'true_false') {
      this.renderTrueFalse(area, q);
    } else if (q.type === 'fill_blank') {
      this.renderFillBlank(area, q);
    } else if (q.type === 'ordering') {
      this.renderOrdering(area, q);
    }
  },

  renderMultipleChoice(area, q) {
    const letters = ['A', 'B', 'C', 'D'];
    let html = '<div class="quiz-options">';
    q.options.forEach((opt, idx) => {
      html += `
        <button class="quiz-option" id="opt-${idx}" onclick="APP.selectMC(${idx})">
          <span class="quiz-option-letter">${letters[idx]}</span>
          <span>${opt}</span>
        </button>`;
    });
    html += '</div>';
    area.innerHTML = html;
  },

  renderTrueFalse(area, q) {
    area.innerHTML = `
      <div class="quiz-options">
        <button class="quiz-option" id="opt-true" onclick="APP.selectTF(true)">
          <span class="quiz-option-letter">✓</span>
          <span>Benar</span>
        </button>
        <button class="quiz-option" id="opt-false" onclick="APP.selectTF(false)">
          <span class="quiz-option-letter">✗</span>
          <span>Salah</span>
        </button>
      </div>`;
  },

  renderFillBlank(area, q) {
    area.innerHTML = `
      <div class="quiz-fill-container">
        <input type="text" class="quiz-fill-input" id="fill-input" placeholder="Ketik jawabanmu di sini..." 
               autocomplete="off" onkeydown="if(event.key==='Enter')APP.checkFillBlank()">
        <button class="btn-check" onclick="APP.checkFillBlank()">Periksa Jawaban</button>
      </div>`;
    setTimeout(() => document.getElementById('fill-input')?.focus(), 100);
  },

  renderOrdering(area, q) {
    let html = '<div class="ordering-area">';
    html += '<div class="ordering-label">Klik kartu item di bawah sesuai urutan yang tepat:</div>';
    html += '<div class="ordering-selected-area" id="ordering-selected">';
    html += '<div class="ordering-placeholder" id="ordering-placeholder">Klik item di bawah untuk mengurutkan</div>';
    html += '</div>';
    html += '<div class="ordering-available" id="ordering-available">';

    const shuffled = q.items.map((item, idx) => ({ item, origIdx: idx }));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.quizState._shuffledOrder = shuffled;

    shuffled.forEach((s, i) => {
      html += `<div class="ordering-item" id="ord-item-${i}" onclick="APP.pickOrderItem(${i})">${s.item}</div>`;
    });

    html += '</div>';
    html += '<button class="btn-check" id="btn-check-order" style="margin-top:16px;width:100%;display:none;" onclick="APP.checkOrdering()">Periksa Urutan</button>';
    html += '</div>';
    area.innerHTML = html;
  },

  pickOrderItem(shuffledIdx) {
    if (this.quizState.answered) return;
    const itemEl = document.getElementById(`ord-item-${shuffledIdx}`);
    if (!itemEl || itemEl.classList.contains('picked')) return;

    this.playClick();
    itemEl.classList.add('picked');

    const selectedArea = document.getElementById('ordering-selected');
    const placeholder = document.getElementById('ordering-placeholder');
    if (placeholder) placeholder.style.display = 'none';

    const s = this.quizState._shuffledOrder[shuffledIdx];
    const chip = document.createElement('div');
    chip.className = 'ordering-chip';
    chip.dataset.origIdx = s.origIdx;
    chip.dataset.shuffledIdx = shuffledIdx;
    chip.textContent = s.item;
    chip.onclick = () => this.unpickOrderItem(chip);
    selectedArea.appendChild(chip);

    // If all picked, show submit button
    const totalPicked = selectedArea.querySelectorAll('.ordering-chip').length;
    if (totalPicked === this.quizState._shuffledOrder.length) {
      document.getElementById('btn-check-order').style.display = 'block';
    }
  },

  unpickOrderItem(chip) {
    if (this.quizState.answered) return;
    this.playClick();
    const shuffledIdx = chip.dataset.shuffledIdx;
    document.getElementById(`ord-item-${shuffledIdx}`).classList.remove('picked');
    chip.remove();

    const selectedArea = document.getElementById('ordering-selected');
    const remaining = selectedArea.querySelectorAll('.ordering-chip').length;
    if (remaining === 0) {
      const placeholder = document.getElementById('ordering-placeholder');
      if (placeholder) placeholder.style.display = 'block';
    }
    document.getElementById('btn-check-order').style.display = 'none';
  },

  checkOrdering() {
    if (this.quizState.answered) return;
    this.quizState.answered = true;

    const chips = document.querySelectorAll('#ordering-selected .ordering-chip');
    const userOrder = Array.from(chips).map(c => parseInt(c.dataset.origIdx, 10));
    const isCorrect = userOrder.every((val, idx) => val === idx);

    chips.forEach((c, idx) => {
      c.classList.add(parseInt(c.dataset.origIdx, 10) === idx ? 'correct' : 'incorrect');
    });

    const q = this.quizState.questions[this.quizState.currentIndex];
    this.processAnswer(isCorrect, q.explanation);
  },

  selectMC(index) {
    if (this.quizState.answered) return;
    this.quizState.answered = true;

    const q = this.quizState.questions[this.quizState.currentIndex];
    const correct = index === q.correct;

    document.querySelectorAll('.quiz-option').forEach(el => el.classList.add('disabled'));
    const selected = document.getElementById('opt-' + index);
    selected.classList.add(correct ? 'correct' : 'incorrect');

    if (!correct) {
      document.getElementById('opt-' + q.correct).classList.add('show-correct');
    }

    this.processAnswer(correct, q.explanation);
  },

  selectTF(answer) {
    if (this.quizState.answered) return;
    this.quizState.answered = true;

    const q = this.quizState.questions[this.quizState.currentIndex];
    const correct = answer === q.correct;

    document.querySelectorAll('.quiz-option').forEach(el => el.classList.add('disabled'));
    const selectedId = answer ? 'opt-true' : 'opt-false';
    document.getElementById(selectedId).classList.add(correct ? 'correct' : 'incorrect');

    if (!correct) {
      const correctId = q.correct ? 'opt-true' : 'opt-false';
      document.getElementById(correctId).classList.add('show-correct');
    }

    this.processAnswer(correct, q.explanation);
  },

  checkFillBlank() {
    if (this.quizState.answered) return;
    const input = document.getElementById('fill-input');
    const val = (input?.value || '').trim().toLowerCase();
    if (!val) return;

    this.quizState.answered = true;
    const q = this.quizState.questions[this.quizState.currentIndex];

    // Check against accepted answers
    const answers = Array.isArray(q.correct) ? q.correct : [q.correct];
    const isCorrect = answers.some(a => a.toLowerCase().trim() === val);

    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    this.processAnswer(isCorrect, q.explanation);
  },

  processAnswer(isCorrect, explanation) {
    const qs = this.quizState;
    const feedback = document.getElementById('quiz-feedback');
    const title = document.getElementById('quiz-feedback-title');
    const text = document.getElementById('quiz-feedback-text');

    if (isCorrect) {
      qs.score++;
      this.playCorrect();
      feedback.className = 'quiz-feedback correct show';
      feedback.style.display = 'block';
      title.textContent = '🎉 MasyaAllah, Jawaban Benar!';
    } else {
      qs.hearts--;
      this.playIncorrect();
      this.playHeartLost();
      feedback.className = 'quiz-feedback incorrect show';
      feedback.style.display = 'block';
      title.textContent = qs.hearts <= 0 ? '💔 Nyawa Habis!' : '✗ Astagfirullah, Kurang Tepat';
    }

    text.textContent = explanation || '';

    // Update hearts display
    let heartsHtml = '';
    for (let i = 0; i < 5; i++) {
      heartsHtml += i < qs.hearts ? '<span class="heart full">❤️</span>' : '<span class="heart empty">🖤</span>';
    }
    document.getElementById('quiz-hearts').innerHTML = heartsHtml;

    document.getElementById('quiz-bottom-bar').style.display = 'flex';
    const nextBtn = document.getElementById('quiz-next-btn');

    if (qs.currentIndex >= qs.questions.length - 1 || qs.hearts <= 0) {
      nextBtn.textContent = 'Lihat Hasil Akhir →';
    } else {
      nextBtn.textContent = 'Lanjut →';
    }

    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  nextQuestion() {
    const qs = this.quizState;
    qs.currentIndex++;

    if (qs.currentIndex >= qs.questions.length || qs.hearts <= 0) {
      this.endQuiz();
    } else {
      this.renderQuestion();
    }
  },

  quitQuiz() {
    if (confirm('Yakin ingin keluar? Nilai kuis saat ini tidak akan tersimpan.')) {
      this.quizState = null;
      this.showScreen('dashboard');
      this.renderDashboard();
    }
  },

  async endQuiz() {
    const qs = this.quizState;
    const total = qs.questions.length;
    const percentage = Math.round((qs.score / total) * 100);
    const passingGrade = this.currentLevel === 15 ? 75 : 70;
    const passed = percentage >= passingGrade && qs.hearts > 0;
    const stars = percentage >= 90 ? 3 : percentage >= 75 ? 2 : percentage >= 50 ? 1 : 0;
    const xpEarned = passed ? (qs.score * 10 + (stars * 25) + (qs.hearts * 5)) : 5;

    // Update current user hearts
    this.currentUser.hearts = Math.max(0, qs.hearts);

    // Save to server SQLite DB and broadcast via SSE
    try {
      await fetch('/api/quiz-complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.currentUser.username,
          levelId: this.currentLevel,
          score: qs.score,
          total,
          percentage,
          passed,
          stars,
          xpEarned,
          heartsLeft: qs.hearts
        })
      });
      this.updateSyncBadge('online', 'Tersinkron (SQLite)');
    } catch (e) {
      // Local fallback
      const prog = this.getLocalProgress(this.currentUser.username);
      if (passed) {
        prog.levels[this.currentLevel] = {
          completed: true,
          score: qs.score,
          total,
          stars: Math.max(stars, prog.levels[this.currentLevel]?.stars || 0),
          bestScore: Math.max(percentage, prog.levels[this.currentLevel]?.bestScore || 0),
          attempts: (prog.levels[this.currentLevel]?.attempts || 0) + 1,
          completedAt: new Date().toISOString()
        };
        prog.xp = (prog.xp || 0) + xpEarned;
      }
      prog.hearts = qs.hearts;
      this.saveLocalProgress(this.currentUser.username, prog);
      this.updateSyncBadge('offline', 'Mode Offline (Lokal)');
    }

    if (passed) {
      this.playFanfare();
    } else {
      this.playIncorrect();
    }

    this.renderResults({
      score: qs.score,
      total,
      percentage,
      passed,
      stars,
      xpEarned,
      heartsLeft: qs.hearts
    });
  },

  renderResults(results) {
    const card = document.getElementById('results-card');
    card.className = 'results-card ' + (results.passed ? 'passed' : 'failed');

    document.getElementById('results-icon').textContent = results.passed
      ? (results.stars === 3 ? '🏆' : results.stars === 2 ? '🌟' : '✅')
      : (results.heartsLeft <= 0 ? '💔' : '📝');

    document.getElementById('results-title').textContent = results.passed
      ? (results.stars === 3 ? 'Mumtaz! Luar Biasa!' : results.stars === 2 ? 'Bagus Sekali!' : 'Alhamdulillah Lulus!')
      : (results.heartsLeft <= 0 ? 'Nyawa Telah Habis!' : 'Belum Mencapai KKM');

    document.getElementById('results-subtitle').textContent = results.passed
      ? (this.currentLevel === 15 ? 'Selamat! Kamu dinyatakan SIAP UJIAN MUNAQASYAH TPA!' : 'Alhamdulillah! Kamu berhasil menyelesaikan materi ini.')
      : 'Jangan patah semangat! Pelajari kembali materi dan coba lagi ya.';

    let starsHtml = '';
    for (let i = 0; i < 3; i++) {
      starsHtml += i < results.stars ? '⭐' : '<span class="star-empty">⭐</span>';
    }
    document.getElementById('results-stars').innerHTML = starsHtml;

    document.getElementById('results-stats').innerHTML = `
      <div class="results-stat">
        <div class="results-stat-value" style="color: var(--color-success)">${results.score}/${results.total}</div>
        <div class="results-stat-label">Jawaban Benar</div>
      </div>
      <div class="results-stat">
        <div class="results-stat-value">${results.percentage}%</div>
        <div class="results-stat-label">Skor Akhir</div>
      </div>
      <div class="results-stat">
        <div class="results-stat-value" style="color: var(--color-secondary)">+${results.passed ? results.xpEarned : 0}</div>
        <div class="results-stat-label">XP Diperoleh</div>
      </div>
    `;

    let actionsHtml = '';
    if (results.passed) {
      const nextLevel = this.currentLevel + 1;
      if (nextLevel <= this.TOTAL_LEVELS && window.QUESTIONS_DATA[nextLevel]) {
        actionsHtml += `<button class="btn btn-primary" onclick="APP.openLevel(${nextLevel})">Level Selanjutnya →</button>`;
      }
      if (this.currentLevel === 15) {
        actionsHtml += `
          <button class="btn btn-gold" style="width:100%;padding:16px;font-size:15px;" onclick="APP.showCertificate('${this.currentUser.username}')">
            🎓 Buka & Cetak Sertifikat Kelulusan Munaqasyah
          </button>`;
      }
    } else {
      actionsHtml += `<button class="btn btn-primary" onclick="APP.openLevel(${this.currentLevel})">Pelajari Lagi</button>`;
    }
    actionsHtml += `<button class="btn btn-secondary" onclick="APP.showScreen('dashboard');APP.renderDashboard()">Kembali ke Peta Belajar</button>`;

    document.getElementById('results-actions').innerHTML = actionsHtml;
    this.showScreen('results');

    if (results.passed && results.stars >= 2) {
      this.createConfetti();
    }
  },

  // ─── Ustadz Dashboard & Monitoring ─────────────────────
  async renderUstadzDashboard() {
    let data = null;
    try {
      const res = await fetch('/api/ustadz/overview');
      if (res.ok) {
        data = await res.json();
        this.updateSyncBadge('online', 'Real-Time SSE Aktif');
      }
    } catch(e) {}

    // Fallback if offline
    if (!data) {
      const santriList = ['ferdi', 'kaniah', 'fitrah', 'ikhsan'];
      const students = santriList.map(username => {
        const user = this.users[username];
        const prog = this.getLocalProgress(username);
        const completedCount = this.getCompletedCount(prog);
        return {
          username,
          name: user.name,
          color: user.color,
          avatar: user.avatar,
          xp: prog.xp || 0,
          streak: prog.streak || 0,
          hearts: prog.hearts ?? 5,
          completedCount,
          totalLevels: this.TOTAL_LEVELS,
          progressPct: Math.round((completedCount / this.TOTAL_LEVELS) * 100),
          totalStars: 0,
          avgScore: 0,
          readiness: completedCount >= 14 ? 'Siap Ujian Munaqasyah' : 'Sedang Belajar',
          readinessClass: completedCount >= 14 ? 'green' : 'yellow',
          levels: prog.levels
        };
      });
      data = {
        students,
        summary: {
          totalStudents: 4,
          totalXP: students.reduce((sum, s) => sum + s.xp, 0),
          totalCompleted: students.reduce((sum, s) => sum + s.completedCount, 0),
          avgProgress: Math.round((students.reduce((sum, s) => sum + s.completedCount, 0) / (4 * 15)) * 100),
          readyCount: students.filter(s => s.completedCount >= 14).length
        },
        recentActivity: []
      };
    }

    // Render Summary Cards
    document.getElementById('ustadz-summary').innerHTML = `
      <div class="summary-card">
        <div class="summary-icon">👨‍🎓</div>
        <div class="summary-value">${data.summary.totalStudents}</div>
        <div class="summary-label">Total Santri</div>
      </div>
      <div class="summary-card">
        <div class="summary-icon">📊</div>
        <div class="summary-value">${data.summary.avgProgress}%</div>
        <div class="summary-label">Rata-rata Progres</div>
      </div>
      <div class="summary-card">
        <div class="summary-icon">🎯</div>
        <div class="summary-value" style="color:#4ade80;">${data.summary.readyCount}/4</div>
        <div class="summary-label">Santri Siap Ujian</div>
      </div>
      <div class="summary-card">
        <div class="summary-icon">⚡</div>
        <div class="summary-value">${data.summary.totalXP}</div>
        <div class="summary-label">Total XP Bersama</div>
      </div>
    `;

    // Render 4 Santri Cards
    let gridHtml = '';
    data.students.forEach(s => {
      let dotsHtml = '';
      for (let i = 1; i <= this.TOTAL_LEVELS; i++) {
        const lp = s.levels[i];
        const isCompleted = lp && lp.completed;
        const isUnlocked = this.isLevelUnlocked(i, s);
        const dotClass = isCompleted ? 'dot-completed' : (isUnlocked ? 'dot-current' : 'dot-locked');
        dotsHtml += `<div class="level-dot ${dotClass}" title="Level ${i}: ${window.QUESTIONS_DATA[i]?.title}">${i}</div>`;
      }

      gridHtml += `
        <div class="student-card">
          <div class="student-card-header" onclick="APP.showStudentDetail('${s.username}')">
            <div class="student-avatar" style="background: linear-gradient(135deg, ${s.color}, ${s.color}88);">${s.avatar || s.name.charAt(0)}</div>
            <div class="student-info">
              <div class="student-name">${s.name}</div>
              <div class="student-xp">⚡ ${s.xp} XP · 🔥 ${s.streak} hari · ❤️ ${s.hearts}/5 nyawa</div>
            </div>
            <span class="readiness-badge ${s.readinessClass}" style="font-size:11px;padding:4px 8px;border-radius:6px;background:rgba(255,255,255,0.06);">${s.readiness}</span>
          </div>

          <div class="student-progress-bar" onclick="APP.showStudentDetail('${s.username}')">
            <div class="student-progress-fill" style="width: ${s.progressPct}%; background: linear-gradient(90deg, ${s.color}, ${s.color}88);"></div>
          </div>
          <div class="student-progress-text" onclick="APP.showStudentDetail('${s.username}')">
            <span>${s.completedCount} dari ${this.TOTAL_LEVELS} level (${s.progressPct}%)</span>
            <span>Rata-rata: ${s.avgScore}%</span>
          </div>
          <div class="student-levels-preview" onclick="APP.showStudentDetail('${s.username}')">${dotsHtml}</div>

          <!-- Ustadz Direct Actions -->
          <div class="student-card-actions">
            <button class="btn-action-sm heart-btn" onclick="APP.refillHearts('${s.username}')" title="Isi ulang nyawa santri menjadi 5">
              💖 Isi Nyawa
            </button>
            <button class="btn-action-sm xp-btn" onclick="APP.rewardXP('${s.username}', 50)" title="Berikan bonus +50 XP">
              ⚡ +50 XP
            </button>
            <button class="btn-action-sm msg-btn" onclick="APP.openMessageModal('${s.username}')" title="Kirim bimbingan / catatan">
              💌 Pesan
            </button>
            <button class="btn-action-sm" onclick="APP.showCertificate('${s.username}')" title="Lihat sertifikat santri ini">
              📜 Sertifikat
            </button>
          </div>
        </div>`;
    });
    document.getElementById('ustadz-students-grid').innerHTML = gridHtml;

    // Leaderboard
    const sorted = [...data.students].sort((a, b) => b.xp - a.xp);
    let lbHtml = '<div class="leaderboard-title">🏆 Peringkat Leaderboard Santri</div>';
    sorted.forEach((s, i) => {
      const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
      const rankLabel = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;

      lbHtml += `
        <div class="leaderboard-item">
          <div class="leaderboard-rank ${rankClass}">${rankLabel}</div>
          <div class="leaderboard-avatar" style="background: linear-gradient(135deg, ${s.color}, ${s.color}88);">${s.avatar || s.name.charAt(0)}</div>
          <div class="leaderboard-name">
            ${s.name}
            <div class="leaderboard-levels">${s.completedCount}/${this.TOTAL_LEVELS} level selesai · ${s.readiness}</div>
          </div>
          <div class="leaderboard-xp">⚡ ${s.xp} XP</div>
        </div>`;
    });
    document.getElementById('leaderboard').innerHTML = lbHtml;
  },

  async showStudentDetail(username) {
    const user = this.users[username];
    const prog = await this.getProgress(username);
    const completed = this.getCompletedCount(prog);

    let html = `
      <div class="student-detail-panel show">
        <div class="detail-header">
          <div class="detail-student-info">
            <div class="detail-avatar" style="background: linear-gradient(135deg, ${user.color}, ${user.color}88);">${user.avatar || user.name.charAt(0)}</div>
            <div>
              <div class="detail-name">${user.name} — Detail Progres Kurikulum 4 Hari</div>
              <div class="detail-stats">⚡ ${prog.xp || 0} XP · 🔥 ${prog.streak || 0} hari · ❤️ ${prog.hearts ?? 5}/5 nyawa · ✅ ${completed}/${this.TOTAL_LEVELS} level</div>
            </div>
          </div>
          <button class="detail-close" onclick="document.getElementById('student-detail-container').innerHTML=''">✕</button>
        </div>`;

    this.dayMap.forEach(day => {
      html += `<div class="detail-subject-header">${day.icon} ${day.subject} (${day.day ? 'Hari ' + day.day : 'Ujian Akhir'})</div>`;
      html += '<div class="detail-levels-grid">';

      day.levels.forEach(levelId => {
        const levelData = window.QUESTIONS_DATA[levelId];
        if (!levelData) return;
        const lp = prog.levels[levelId];
        const isCompleted = lp && lp.completed;
        const stateClass = isCompleted ? 'level-completed' : 'level-not-started';

        html += `
          <div class="detail-level-item ${stateClass}">
            <div class="detail-level-name">${levelData.icon} Level ${levelId}: ${levelData.title}</div>
            ${isCompleted ? `
              <div class="detail-level-score">Skor Terbaik: ${lp.bestScore}% · Dicoba: ${lp.attempts}x</div>
              <div class="detail-level-stars">${this.renderStars(lp.stars)}</div>
            ` : '<div class="detail-level-score" style="color:var(--text-muted)">Belum dikerjakan</div>'}
          </div>`;
      });

      html += '</div>';
    });

    html += `
      <div style="margin-top:20px;display:flex;gap:12px;justify-content:flex-end;">
        <button class="btn btn-certificate" onclick="APP.showCertificate('${username}')">
          📜 Lihat / Cetak Sertifikat Santri Ini
        </button>
      </div>
    </div>`;

    document.getElementById('student-detail-container').innerHTML = html;
    document.getElementById('student-detail-container').scrollIntoView({ behavior: 'smooth' });
  },

  // ─── Ustadz Direct Actions ─────────────────────────────
  async refillHearts(username) {
    this.playClick();
    try {
      const res = await fetch('/api/ustadz/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'refill_hearts', username })
      });
      const data = await res.json();
      this.showNotification(`💖 ${data.message || 'Nyawa santri berhasil diisi ulang!'}`, 'success');
      this.playCorrect();
      this.renderUstadzDashboard();
    } catch(e) {
      this.showNotification('Gagal mengisi ulang nyawa (koneksi offline)', 'error');
    }
  },

  async rewardXP(username, amount = 50) {
    this.playClick();
    try {
      const res = await fetch('/api/ustadz/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add_xp', username, amount })
      });
      const data = await res.json();
      this.showNotification(`⚡ ${data.message || 'Bonus XP berhasil diberikan!'}`, 'success');
      this.playFanfare();
      this.renderUstadzDashboard();
    } catch(e) {
      this.showNotification('Gagal memberikan bonus XP (koneksi offline)', 'error');
    }
  },

  openMessageModal(username) {
    this.selectedStudentForMessage = username;
    const user = this.users[username];
    document.getElementById('message-modal-sub').textContent = `Kirim bimbingan & motivasi khusus untuk ${user?.name || username}`;
    document.getElementById('ustadz-msg-input').value = '';
    this.openModal('modal-message');
  },

  async submitUstadzMessage() {
    const text = (document.getElementById('ustadz-msg-input')?.value || '').trim();
    if (!text) {
      alert('Tuliskan pesan terlebih dahulu.');
      return;
    }

    try {
      await fetch('/api/ustadz/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'send_feedback',
          username: this.selectedStudentForMessage,
          message: text
        })
      });
      this.closeModal('modal-message');
      this.playCorrect();
      this.showNotification('💌 Pesan motivasi berhasil terkirim ke santri!', 'success');
    } catch(e) {
      this.showNotification('Gagal mengirim pesan (koneksi offline)', 'error');
    }
  },

  // ─── Certificate & Summary Raport ───────────────────────
  async showCertificate(username) {
    const user = this.users[username] || this.currentUser;
    const prog = await this.getProgress(username);
    const completed = this.getCompletedCount(prog);

    // Calculate average score across completed levels
    let sum = 0, count = 0;
    for (let k in prog.levels) {
      if (prog.levels[k].completed && prog.levels[k].bestScore) {
        sum += prog.levels[k].bestScore;
        count++;
      }
    }
    const avgScore = count ? Math.round(sum / count) : 85;

    let predikat = 'MUMTAZ (Istimewa) 🌟';
    if (avgScore < 75) predikat = 'JAYYID (Baik)';
    else if (avgScore < 88) predikat = 'JAYYID JIDDAN (Sangat Baik)';

    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    const certHtml = `
      <div class="cert-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
      <div class="cert-header">BADAN KOMUNIKASI PEMUDA REMAJA MASJID INDONESIA (BKPRMI)</div>
      <div class="cert-org">LEMBAGA PEMBINAAN DAN PENGEMBANGAN TK AL-QUR'AN (LPPTKA)</div>
      <div class="cert-suborg">TAMAN PENDIDIKAN AL-QUR'AN (TPA) / TPQ</div>

      <div class="cert-title">SERTIFIKAT KESIAPAN MUNAQASYAH SANTRI</div>

      <div class="cert-body">
        Diberikan dengan penuh rasa bangga dan penghargaan kepada:
      </div>

      <div class="cert-recipient">${user.name.toUpperCase()}</div>

      <div class="cert-body">
        Telah berhasil menuntaskan seluruh <strong>Kurikulum Belajar 4 Hari Persiapan Munaqasyah</strong><br>
        yang mencakup materi pokok: <em>Fiqh Ibadah, Tauhid / Aqidah, Tarikh & Kisah 25 Nabi/Sahabat, dan Ilmu Tajwid</em>.
      </div>

      <div class="cert-score-box">
        Nilai Rata-rata: <strong>${avgScore}/100</strong> &nbsp;|&nbsp; 
        Predikat Kelulusan: <strong>${predikat}</strong><br>
        Status: <strong>DINYATAKAN SIAP MENGIKUTI UJIAN MUNAQASYAH SANTRI TPA</strong>
      </div>

      <div class="cert-signatures">
        <div class="cert-sig-box">
          <div>Mengetahui,</div>
          <div>Kepala Unit LPPTKA-BKPRMI</div>
          <div class="cert-sig-space"></div>
          <div class="cert-sig-name">Ust. H. Ahmad Fauzi, S.Pd.I</div>
        </div>
        <div class="cert-sig-box">
          <div>Ditetapkan pada: ${todayStr}</div>
          <div>Ustadz Pembimbing / Penguji</div>
          <div class="cert-sig-space"></div>
          <div class="cert-sig-name">Ustadz Admin Munaqasyah</div>
        </div>
      </div>
    `;

    document.getElementById('certificate-content').innerHTML = certHtml;
    this.openModal('modal-certificate');
  },

  async showSummaryReportModal() {
    let data = null;
    try {
      const res = await fetch('/api/ustadz/overview');
      if (res.ok) data = await res.json();
    } catch(e){}

    const students = data?.students || ['ferdi', 'kaniah', 'fitrah', 'ikhsan'].map(u => ({
      username: u, name: this.users[u].name, completedCount: 0, progressPct: 0, avgScore: 0, readiness: 'Belum Mulai', xp: 0
    }));

    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    let tableRows = '';
    students.forEach((s, i) => {
      tableRows += `
        <tr style="border-bottom:1px solid #e2e8f0;text-align:center;">
          <td style="padding:10px;">${i + 1}</td>
          <td style="padding:10px;text-align:left;font-weight:bold;">${s.name}</td>
          <td style="padding:10px;">${s.completedCount}/15 (${s.progressPct}%)</td>
          <td style="padding:10px;font-weight:bold;">${s.avgScore}%</td>
          <td style="padding:10px;color:#d97706;font-weight:bold;">⚡ ${s.xp}</td>
          <td style="padding:10px;font-weight:bold;color:${s.completedCount >= 14 ? '#059669' : '#d97706'};">${s.readiness}</td>
        </tr>`;
    });

    const reportHtml = `
      <div style="text-align:center;border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:20px;">
        <h2 style="margin:0;font-size:20px;font-weight:bold;">RAPORT REKAPITULASI KESIAPAN MUNAQASYAH SANTRI TPA</h2>
        <p style="margin:4px 0 0;font-size:13px;color:#4b5563;">LEMBAGA PEMBINAAN DAN PENGEMBANGAN TK AL-QUR'AN (LPPTKA-BKPRMI)</p>
        <p style="margin:2px 0 0;font-size:12px;color:#6b7280;">Kurikulum Munaqasyah 4 Hari: Fiqh, Tauhid, Tarikh, dan Ilmu Tajwid</p>
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
        <thead>
          <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;text-align:center;font-weight:bold;">
            <th style="padding:10px;">No</th>
            <th style="padding:10px;text-align:left;">Nama Santri</th>
            <th style="padding:10px;">Level Selesai</th>
            <th style="padding:10px;">Nilai Rata-rata</th>
            <th style="padding:10px;">Total XP</th>
            <th style="padding:10px;">Status Kesiapan Ujian</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <div style="display:flex;justify-content:space-between;margin-top:30px;padding:0 20px;font-size:13px;">
        <div style="text-align:center;">
          <div>Mengetahui,</div>
          <div>Kepala Unit TPA</div>
          <div style="height:60px;"></div>
          <div style="font-weight:bold;border-top:1px solid #000;padding-top:4px;min-width:140px;">Ust. H. Ahmad Fauzi</div>
        </div>
        <div style="text-align:center;">
          <div>Tanggal: ${todayStr}</div>
          <div>Ustadz Penguji & Pembimbing</div>
          <div style="height:60px;"></div>
          <div style="font-weight:bold;border-top:1px solid #000;padding-top:4px;min-width:140px;">Ustadz Admin</div>
        </div>
      </div>
    `;

    document.getElementById('summary-report-content').innerHTML = reportHtml;
    this.openModal('modal-summary-report');
  },

  // ─── Visual Confetti Effect ─────────────────────────────
  createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#58cc02', '#fbbf24', '#38bdf8', '#ce82ff', '#ff6b6b', '#22c55e', '#f59e0b'];

    for (let i = 0; i < 70; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = (Math.random() * 8 + 6) + 'px';
      piece.style.height = (Math.random() * 8 + 6) + 'px';
      piece.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-in ${Math.random() * 1.5}s forwards`;
      container.appendChild(piece);
    }

    setTimeout(() => { container.innerHTML = ''; }, 6000);
  },

  showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.classList.add('hide');
      setTimeout(() => notif.remove(), 350);
    }, 3500);
  }
};

// ─── Boot Application ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => APP.init());
