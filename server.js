// ============================================================
// MUNAQASYAH LEARNING SYSTEM — BACKEND SERVER & REAL-TIME SYNC
// Node.js + SQLite (node:sqlite) + Server-Sent Events (SSE)
// Supports: Local Network, Public Cloudflare/Pinggy Tunnels, Render, Railway, Glitch
// ============================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { DatabaseSync } = require('node:sqlite');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'munaqasyah.db');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize SQLite database
const db = new DatabaseSync(DB_PATH);

// Create schema
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    color TEXT NOT NULL,
    avatar TEXT
  );

  CREATE TABLE IF NOT EXISTS santri_progress (
    username TEXT PRIMARY KEY REFERENCES users(username),
    xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    hearts INTEGER DEFAULT 5,
    last_active TEXT,
    updated_at TEXT
  );

  CREATE TABLE IF NOT EXISTS level_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    level_id INTEGER NOT NULL,
    completed INTEGER DEFAULT 0,
    score INTEGER DEFAULT 0,
    total INTEGER DEFAULT 0,
    stars INTEGER DEFAULT 0,
    best_score INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 0,
    completed_at TEXT,
    UNIQUE(username, level_id)
  );

  CREATE TABLE IF NOT EXISTS quiz_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    level_id INTEGER NOT NULL,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    percentage INTEGER NOT NULL,
    passed INTEGER NOT NULL,
    stars INTEGER NOT NULL,
    xp_earned INTEGER NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS ustadz_feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    message TEXT NOT NULL,
    sender TEXT DEFAULT 'Ustadz',
    created_at TEXT NOT NULL,
    is_read INTEGER DEFAULT 0
  );
`);

// Seed default users if empty
const defaultUsers = [
  { username: 'ferdi',  password: 'ferdi1234',  name: 'Ferdi',           role: 'santri', color: '#58cc02', avatar: '👦' },
  { username: 'kaniah', password: 'kaniah1234', name: 'Kaniah',          role: 'santri', color: '#ce82ff', avatar: '👧' },
  { username: 'fitrah', password: 'fitrah1234', name: 'Fitrah',          role: 'santri', color: '#38bdf8', avatar: '👦' },
  { username: 'ikhsan', password: 'ikhsan1234', name: 'Ikhsan',          role: 'santri', color: '#fbbf24', avatar: '👦' },
  { username: 'admin',  password: 'admin1234',  name: 'Ustadz (Admin)',  role: 'ustadz', color: '#ff6b6b', avatar: '👳' }
];

const checkUserStmt = db.prepare('SELECT username FROM users WHERE username = ?');
const insertUserStmt = db.prepare('INSERT INTO users (username, password, name, role, color, avatar) VALUES (?, ?, ?, ?, ?, ?)');
const checkProgStmt = db.prepare('SELECT username FROM santri_progress WHERE username = ?');
const insertProgStmt = db.prepare('INSERT INTO santri_progress (username, xp, streak, hearts, last_active, updated_at) VALUES (?, 0, 0, 5, NULL, ?)');

defaultUsers.forEach(u => {
  const existing = checkUserStmt.get(u.username);
  if (!existing) {
    insertUserStmt.run(u.username, u.password, u.name, u.role, u.color, u.avatar);
  }
  if (u.role === 'santri') {
    const prog = checkProgStmt.get(u.username);
    if (!prog) {
      insertProgStmt.run(u.username, new Date().toISOString());
    }
  }
});

// SSE Clients for real-time synchronization
const sseClients = new Set();

function broadcastEvent(type, payload) {
  const message = `event: ${type}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(message);
    } catch (e) {
      sseClients.delete(client);
    }
  }
}

// Keep SSE alive with ping
setInterval(() => {
  for (const client of sseClients) {
    try {
      client.write(': ping\n\n');
    } catch (e) {
      sseClients.delete(client);
    }
  }
}, 25000);

// Helper to get local network IP addresses
function getNetworkIps() {
  const ips = [];
  const ifaces = os.networkInterfaces();
  for (const devName in ifaces) {
    for (const iface of ifaces[devName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push(iface.address);
      }
    }
  }
  return ips;
}

// Helper: parse JSON body
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

// Helper: send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

// MIME types for static files
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Request Handler
const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // ----------------------------------------------------------------
  // SSE: /api/events
  // ----------------------------------------------------------------
  if (req.method === 'GET' && pathname === '/api/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write('event: connected\ndata: {"status":"connected"}\n\n');
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // ----------------------------------------------------------------
  // API: Network & Public Web Info
  // ----------------------------------------------------------------
  if (req.method === 'GET' && pathname === '/api/network-info') {
    const rawHost = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
    const host = rawHost.split(':')[0];
    const rawProto = req.headers['x-forwarded-proto'] || (req.socket.encrypted ? 'https' : 'http');
    const isPublic = !host.includes('localhost') && !host.includes('127.0.0.1') && !host.startsWith('192.168.') && !host.startsWith('10.');

    const currentOrigin = `${rawProto}://${rawHost}`;
    const ips = getNetworkIps();
    const urls = [];

    if (isPublic) {
      urls.push(currentOrigin);
    }
    ips.forEach(ip => urls.push(`http://${ip}:${PORT}`));
    urls.push(`http://localhost:${PORT}`);

    return sendJson(res, 200, {
      publicUrl: isPublic ? currentOrigin : null,
      currentOrigin,
      isPublic,
      ips,
      port: PORT,
      urls,
      localUrl: `http://localhost:${PORT}`
    });
  }

  // ----------------------------------------------------------------
  // API: Login
  // ----------------------------------------------------------------
  if (req.method === 'POST' && pathname === '/api/login') {
    try {
      const { username, password } = await parseJsonBody(req);
      const user = db.prepare('SELECT * FROM users WHERE LOWER(username) = LOWER(?)').get(username);
      if (!user) {
        return sendJson(res, 401, { error: 'Username tidak ditemukan!' });
      }
      if (user.password !== password) {
        return sendJson(res, 401, { error: 'Password salah!' });
      }

      // If santri, fetch progress & level progress
      let progress = null;
      let levels = {};
      if (user.role === 'santri') {
        let prog = db.prepare('SELECT * FROM santri_progress WHERE username = ?').get(user.username);
        if (!prog) {
          db.prepare('INSERT INTO santri_progress (username, xp, streak, hearts, last_active, updated_at) VALUES (?, 0, 0, 5, NULL, ?)')
            .run(user.username, new Date().toISOString());
          prog = db.prepare('SELECT * FROM santri_progress WHERE username = ?').get(user.username);
        }
        progress = prog;

        const levelRows = db.prepare('SELECT * FROM level_progress WHERE username = ?').all(user.username);
        levelRows.forEach(row => {
          levels[row.level_id] = {
            completed: Boolean(row.completed),
            score: row.score,
            total: row.total,
            stars: row.stars,
            bestScore: row.best_score,
            attempts: row.attempts,
            completedAt: row.completed_at
          };
        });
      }

      return sendJson(res, 200, {
        success: true,
        user: {
          username: user.username,
          name: user.name,
          role: user.role,
          color: user.color,
          avatar: user.avatar
        },
        progress,
        levels
      });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ----------------------------------------------------------------
  // API: Get Santri Progress
  // ----------------------------------------------------------------
  if (req.method === 'GET' && pathname.startsWith('/api/progress/')) {
    const username = pathname.replace('/api/progress/', '').toLowerCase();
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (!user) {
      return sendJson(res, 404, { error: 'User tidak ditemukan' });
    }

    const prog = db.prepare('SELECT * FROM santri_progress WHERE username = ?').get(username) || {
      username, xp: 0, streak: 0, hearts: 5, last_active: null
    };

    const levelRows = db.prepare('SELECT * FROM level_progress WHERE username = ?').all(username);
    const levels = {};
    levelRows.forEach(row => {
      levels[row.level_id] = {
        completed: Boolean(row.completed),
        score: row.score,
        total: row.total,
        stars: row.stars,
        bestScore: row.best_score,
        attempts: row.attempts,
        completedAt: row.completed_at
      };
    });

    const unreadFeedback = db.prepare('SELECT * FROM ustadz_feedback WHERE username = ? AND is_read = 0 ORDER BY created_at DESC').all(username);

    return sendJson(res, 200, {
      username,
      progress: prog,
      levels,
      unreadFeedback
    });
  }

  // ----------------------------------------------------------------
  // API: Update Progress (general sync)
  // ----------------------------------------------------------------
  if (req.method === 'POST' && pathname.startsWith('/api/progress/')) {
    const username = pathname.replace('/api/progress/', '').toLowerCase();
    try {
      const data = await parseJsonBody(req);
      const now = new Date().toISOString();

      if (data.xp !== undefined || data.streak !== undefined || data.hearts !== undefined) {
        db.prepare(`
          INSERT INTO santri_progress (username, xp, streak, hearts, last_active, updated_at)
          VALUES (?, ?, ?, ?, ?, ?)
          ON CONFLICT(username) DO UPDATE SET
            xp = COALESCE(excluded.xp, santri_progress.xp),
            streak = COALESCE(excluded.streak, santri_progress.streak),
            hearts = COALESCE(excluded.hearts, santri_progress.hearts),
            last_active = COALESCE(excluded.last_active, santri_progress.last_active),
            updated_at = excluded.updated_at
        `).run(
          username,
          data.xp ?? 0,
          data.streak ?? 0,
          data.hearts ?? 5,
          data.lastActive || now,
          now
        );
      }

      broadcastEvent('progress_updated', { username, timestamp: now });
      return sendJson(res, 200, { success: true });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ----------------------------------------------------------------
  // API: Quiz Complete (Atomic save & live broadcast)
  // ----------------------------------------------------------------
  if (req.method === 'POST' && pathname === '/api/quiz-complete') {
    try {
      const data = await parseJsonBody(req);
      const { username, levelId, score, total, percentage, passed, stars, xpEarned, heartsLeft } = data;
      const now = new Date().toISOString();

      // Record quiz history
      db.prepare(`
        INSERT INTO quiz_history (username, level_id, score, total, percentage, passed, stars, xp_earned, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(username, levelId, score, total, percentage, passed ? 1 : 0, stars, xpEarned, now);

      // Fetch existing level progress
      const existing = db.prepare('SELECT * FROM level_progress WHERE username = ? AND level_id = ?').get(username, levelId);

      if (passed) {
        const bestScore = existing ? Math.max(existing.best_score, percentage) : percentage;
        const bestStars = existing ? Math.max(existing.stars, stars) : stars;
        const attempts = (existing ? existing.attempts : 0) + 1;

        db.prepare(`
          INSERT INTO level_progress (username, level_id, completed, score, total, stars, best_score, attempts, completed_at)
          VALUES (?, ?, 1, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(username, level_id) DO UPDATE SET
            completed = 1,
            score = excluded.score,
            total = excluded.total,
            stars = excluded.stars,
            best_score = excluded.best_score,
            attempts = excluded.attempts,
            completed_at = excluded.completed_at
        `).run(username, levelId, score, total, bestStars, bestScore, attempts, now);

        // Update XP and streak in santri_progress
        const prog = db.prepare('SELECT * FROM santri_progress WHERE username = ?').get(username);
        const currentXP = (prog?.xp || 0) + xpEarned;
        const today = now.split('T')[0];
        let streak = prog?.streak || 0;
        if (prog?.last_active !== today) {
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          streak = (prog?.last_active === yesterday) ? streak + 1 : 1;
        }

        db.prepare(`
          INSERT INTO santri_progress (username, xp, streak, hearts, last_active, updated_at)
          VALUES (?, ?, ?, ?, ?, ?)
          ON CONFLICT(username) DO UPDATE SET
            xp = excluded.xp,
            streak = excluded.streak,
            hearts = excluded.hearts,
            last_active = excluded.last_active,
            updated_at = excluded.updated_at
        `).run(username, currentXP, streak, heartsLeft, today, now);

      } else {
        // Failed attempt: increment attempt count and update hearts
        const attempts = (existing ? existing.attempts : 0) + 1;
        db.prepare(`
          INSERT INTO level_progress (username, level_id, completed, score, total, stars, best_score, attempts, completed_at)
          VALUES (?, ?, 0, ?, ?, 0, ?, ?, NULL)
          ON CONFLICT(username, level_id) DO UPDATE SET
            attempts = excluded.attempts
        `).run(username, levelId, score, total, existing?.best_score || 0, attempts);

        db.prepare(`
          UPDATE santri_progress SET hearts = ?, updated_at = ? WHERE username = ?
        `).run(heartsLeft, now, username);
      }

      // Broadcast to Ustadz and all other devices in real-time!
      broadcastEvent('quiz_completed', {
        username,
        levelId,
        score,
        total,
        percentage,
        passed,
        stars,
        xpEarned,
        heartsLeft,
        timestamp: now
      });

      return sendJson(res, 200, { success: true, timestamp: now });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ----------------------------------------------------------------
  // API: Ustadz Overview (Live monitoring across all santri)
  // ----------------------------------------------------------------
  if (req.method === 'GET' && pathname === '/api/ustadz/overview') {
    const santriUsers = db.prepare("SELECT username, name, color, avatar FROM users WHERE role = 'santri'").all();
    const TOTAL_LEVELS = 15;

    const students = santriUsers.map(user => {
      const prog = db.prepare('SELECT * FROM santri_progress WHERE username = ?').get(user.username) || {
        xp: 0, streak: 0, hearts: 5, last_active: null
      };

      const levelRows = db.prepare('SELECT * FROM level_progress WHERE username = ?').all(user.username);
      const levels = {};
      let completedCount = 0;
      let totalStars = 0;
      let scoreSum = 0;
      let scoreCount = 0;

      levelRows.forEach(row => {
        levels[row.level_id] = {
          completed: Boolean(row.completed),
          score: row.score,
          total: row.total,
          stars: row.stars,
          bestScore: row.best_score,
          attempts: row.attempts,
          completedAt: row.completed_at
        };
        if (row.completed) {
          completedCount++;
          totalStars += row.stars;
        }
        if (row.best_score > 0) {
          scoreSum += row.best_score;
          scoreCount++;
        }
      });

      const avgScore = scoreCount > 0 ? Math.round(scoreSum / scoreCount) : 0;
      const progressPct = Math.round((completedCount / TOTAL_LEVELS) * 100);

      // Readiness indicator
      let readiness = 'Belum Mulai';
      let readinessClass = 'gray';
      if (completedCount >= 15 && avgScore >= 85) {
        readiness = 'Sangat Siap (Mumtaz) 🏆';
        readinessClass = 'gold';
      } else if (completedCount >= 14 && avgScore >= 75) {
        readiness = 'Siap Ujian Munaqasyah 🟢';
        readinessClass = 'green';
      } else if (completedCount >= 8) {
        readiness = 'Progres Baik 🟡';
        readinessClass = 'yellow';
      } else if (completedCount > 0) {
        readiness = 'Perlu Bimbingan 🟠';
        readinessClass = 'orange';
      }

      // Recent activity
      const recentQuizzes = db.prepare('SELECT * FROM quiz_history WHERE username = ? ORDER BY id DESC LIMIT 5').all(user.username);

      return {
        username: user.username,
        name: user.name,
        color: user.color,
        avatar: user.avatar,
        xp: prog.xp || 0,
        streak: prog.streak || 0,
        hearts: prog.hearts ?? 5,
        lastActive: prog.last_active,
        completedCount,
        totalLevels: TOTAL_LEVELS,
        progressPct,
        totalStars,
        avgScore,
        readiness,
        readinessClass,
        levels,
        recentQuizzes
      };
    });

    // Summary stats
    const totalXP = students.reduce((sum, s) => sum + s.xp, 0);
    const totalCompleted = students.reduce((sum, s) => sum + s.completedCount, 0);
    const avgProgress = students.length ? Math.round((totalCompleted / (students.length * TOTAL_LEVELS)) * 100) : 0;
    const readyCount = students.filter(s => s.completedCount >= 14).length;

    // Recent global activity
    const recentActivity = db.prepare(`
      SELECT qh.*, u.name, u.color
      FROM quiz_history qh
      JOIN users u ON qh.username = u.username
      ORDER BY qh.id DESC LIMIT 10
    `).all();

    return sendJson(res, 200, {
      students,
      summary: {
        totalStudents: students.length,
        totalXP,
        totalCompleted,
        avgProgress,
        readyCount
      },
      recentActivity
    });
  }

  // ----------------------------------------------------------------
  // API: Ustadz Actions (Add XP, Refill Hearts, Send Note, Reset)
  // ----------------------------------------------------------------
  if (req.method === 'POST' && pathname === '/api/ustadz/action') {
    try {
      const data = await parseJsonBody(req);
      const { action, username, amount, message } = data;
      const now = new Date().toISOString();

      if (action === 'refill_hearts') {
        db.prepare('UPDATE santri_progress SET hearts = 5, updated_at = ? WHERE username = ?').run(now, username);
        broadcastEvent('hearts_refilled', { username, hearts: 5 });
        return sendJson(res, 200, { success: true, message: 'Nyawa berhasil diisi ulang menjadi 5!' });
      }

      if (action === 'add_xp') {
        const xpToAdd = parseInt(amount, 10) || 50;
        db.prepare('UPDATE santri_progress SET xp = xp + ?, updated_at = ? WHERE username = ?').run(xpToAdd, now, username);
        broadcastEvent('xp_rewarded', { username, amount: xpToAdd });
        return sendJson(res, 200, { success: true, message: `Berhasil menambahkan +${xpToAdd} XP untuk ${username}!` });
      }

      if (action === 'send_feedback') {
        db.prepare('INSERT INTO ustadz_feedback (username, message, sender, created_at, is_read) VALUES (?, ?, ?, ?, 0)')
          .run(username, message, 'Ustadz', now);
        broadcastEvent('feedback_received', { username, message, created_at: now });
        return sendJson(res, 200, { success: true, message: 'Pesan / Motivasi berhasil dikirim ke santri!' });
      }

      if (action === 'reset_student') {
        db.prepare('DELETE FROM level_progress WHERE username = ?').run(username);
        db.prepare('UPDATE santri_progress SET xp = 0, streak = 0, hearts = 5, last_active = NULL, updated_at = ? WHERE username = ?').run(now, username);
        broadcastEvent('student_reset', { username });
        return sendJson(res, 200, { success: true, message: `Progress ${username} berhasil di-reset!` });
      }

      return sendJson(res, 400, { error: 'Aksi tidak dikenali' });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ----------------------------------------------------------------
  // API: Feedback Read
  // ----------------------------------------------------------------
  if (req.method === 'POST' && pathname === '/api/feedback/read') {
    try {
      const { username } = await parseJsonBody(req);
      db.prepare('UPDATE ustadz_feedback SET is_read = 1 WHERE username = ?').run(username);
      return sendJson(res, 200, { success: true });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // ----------------------------------------------------------------
  // Static Files Server
  // ----------------------------------------------------------------
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

// Start Server
server.listen(PORT, '0.0.0.0', () => {
  const ips = getNetworkIps();
  console.log('============================================================');
  console.log('🌙 MUNAQASYAH LEARNING SYSTEM — SERVER WEB APP AKTIF');
  console.log('============================================================');
  console.log(`📡 Local Computer : http://localhost:${PORT}`);
  ips.forEach(ip => {
    console.log(`📱 Local WiFi     : http://${ip}:${PORT}`);
  });
  console.log('🌐 Public Online  : Siap digunakan di Render, Railway, Glitch, atau Tunnel');
  console.log('------------------------------------------------------------');
  console.log('✅ SQLite Database  : ./data/munaqasyah.db (Tersinkron Otomatis)');
  console.log('✅ Real-Time Events: Server-Sent Events (SSE) Aktif');
  console.log('============================================================');
});
