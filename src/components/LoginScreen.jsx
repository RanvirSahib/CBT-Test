import React, { useState } from 'react';

export default function LoginScreen({ candidate, onLogin }) {
  const [rollNo, setRollNo] = useState(candidate?.rollNo === 'NEET2026-904128' ? '3804113256' : (candidate?.rollNo || '3804113256'));
  const [name, setName] = useState(candidate?.name === 'Atul Singh' ? 'Mansi' : (candidate?.name || 'Mansi'));
  const [password, setPassword] = useState('1234');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !rollNo.trim()) return;
    onLogin({
      name: name.trim(),
      rollNo: rollNo.trim(),
      systemNode: candidate.systemNode || 'C01-N42',
      subject: 'PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03'
    });
  };

  return (
    <div className="login-screen-wrapper">
      <div className="login-card-container">
        <div className="login-sub-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/nta-logo.png" alt="NTA" style={{ height: '32px', objectFit: 'contain' }} />
            <h2>Candidate Login</h2>
          </div>
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>Computer Based Test (CBT) Portal</span>
        </div>

        <form className="login-form-body" onSubmit={handleSubmit}>
          <div className="login-field-group">
            <label htmlFor="cand-roll">Roll Number / Username</label>
            <input
              id="cand-roll"
              type="text"
              className="login-input"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
          </div>

          <div className="login-field-group">
            <label htmlFor="cand-name">Candidate Full Name</label>
            <input
              id="cand-name"
              type="text"
              className="login-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="login-field-group">
            <label htmlFor="cand-pass">Password / DOB (DD-MM-YYYY)</label>
            <input
              id="cand-pass"
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 100 Questions Practice Badge */}
          <div className="login-mode-selector" style={{ background: 'rgba(2, 132, 199, 0.15)', borderColor: '#0284c7' }}>
            <p style={{ color: '#38bdf8' }}>ACTIVE PRACTICE EXAM:</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '13px', fontWeight: 600 }}>
              <span>⏱️</span>
              <span>NEET (UG) 100 Questions (100 Minutes - 400 Marks)</span>
            </div>
            <div style={{ fontSize: '11px', color: '#cbd5e1', marginTop: '4px' }}>
              Physics: 25 Qs | Chemistry: 25 Qs | Botany: 25 Qs | Zoology: 25 Qs
            </div>
          </div>

          <button type="submit" className="btn-nta-login">
            Login & Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
