import React from 'react';

export default function PortalHome({
  onStartPractice,
  onOpenModal,
  pausedTestInfo,
  onResumeTest,
  onDiscardPausedTest
}) {
  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    const pad = n => String(n).padStart(2, '0');
    if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
    return `${pad(m)}:${pad(s)}`;
  };

  return (
    <div className="portal-home-container">

      {/* Hero Banner Grid */}
      <div className="portal-hero-grid">
        {/* Left: Main Hero Banner */}
        <div className="hero-banner-card">
          <div>
            <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', fontWeight: 800, fontSize: '11.5px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #fde68a', marginBottom: '10px' }}>
              ALLEN CAREER INSTITUTE | PRE-MEDICAL ACHIEVER PHASE - II
            </div>
            <h2>MINOR TEST # 03 (TEST DATE: 26.10.2026)</h2>
            <p>
              Computer Based Test (CBT) simulator for <strong>Achiever Phase - II Minor Test # 03</strong> (Amritsar, Chandigarh & Mohali). Exactly <strong>100 Questions / 100 Minutes / 400 Marks</strong> covering the assigned syllabus:
            </p>
            <div className="hero-syllabus-preview">
              <div>
                <strong className="subject-physics">⚛️ Physics:</strong>
                <span className="subject-desc">WPE (Complete), COM, Momentum & Collision</span>
              </div>
              <div>
                <strong className="subject-chemistry">🧪 Chemistry:</strong>
                <span className="subject-desc">Chemical Bonding, Liquid Solution, Chem Equilibrium</span>
              </div>
              <div>
                <strong className="subject-botany">🌿 Botany:</strong>
                <span className="subject-desc">Morphology (Complete), Plant Anatomy (Till perm tissue)</span>
              </div>
              <div>
                <strong className="subject-zoology">🧬 Zoology:</strong>
                <span className="subject-desc">Circulatory System (Complete), Excretory (Till Nephron)</span>
              </div>
            </div>
          </div>

          <div className="hero-action-buttons">
            <button
              type="button"
              className="btn-hero-launch-cbt"
              style={{ fontSize: '14.5px', padding: '14px 28px' }}
              onClick={onStartPractice}
            >
              <span>🚀</span> Start Minor Test # 03 (100 Qs / 100 Min)
            </button>
            <button
              type="button"
              className="btn-hero-secondary"
              onClick={() => onOpenModal('bulletin')}
            >
              <span>📄</span> Test Pattern
            </button>
            <button
              type="button"
              className="btn-hero-secondary"
              onClick={() => onOpenModal('syllabus')}
            >
              <span>🧪</span> View Full Syllabus Slip
            </button>
          </div>
        </div>

        {/* Right: Candidate Activity Panel */}
        <div className="activity-card">
          <h3>Candidate Activity</h3>
          <div className="activity-links-list">
            <div
              className="activity-link-item"
              onClick={onStartPractice}
            >
              <span>📝 Launch 100-Question CBT Test</span>
              <span>➔</span>
            </div>
            <div
              className="activity-link-item"
              onClick={() => onOpenModal('bulletin')}
            >
              <span>📘 Information Bulletin & Exam Scheme</span>
              <span>➔</span>
            </div>
            <div
              className="activity-link-item"
              onClick={() => onOpenModal('syllabus')}
            >
              <span>📚 NEET (UG) Subject Syllabus</span>
              <span>➔</span>
            </div>
            <div
              className="activity-link-item"
              onClick={() => onOpenModal('tpc')}
            >
              <span>🏢 Test Practice Centre (TPC) Network</span>
              <span>➔</span>
            </div>
            <div
              className="activity-link-item"
              onClick={() => onOpenModal('question-paper')}
            >
              <span>📄 View All 100 Questions Archive</span>
              <span>➔</span>
            </div>
            <div
              className="activity-link-item"
              onClick={() => onOpenModal('contact')}
            >
              <span>📞 Helpdesk & Support Contacts</span>
              <span>➔</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Portal Information Columns */}
      <div className="portal-info-row">
        <div className="portal-tile-card">
          <h4>🎯 100-Question Pattern</h4>
          <p>
            The test comprises four subjects: <strong>Physics</strong> (25 Qs), <strong>Chemistry</strong> (25 Qs), <strong>Botany</strong> (25 Qs), and <strong>Zoology</strong> (25 Qs). Each subject has <strong>Section A</strong> (20 Questions) and <strong>Section B</strong> (5 Questions).
          </p>
        </div>

        <div className="portal-tile-card">
          <h4>⚖️ Official Marking Scheme</h4>
          <p>
            Correct response: <strong style={{ color: '#16a34a' }}>+4 marks</strong>. Incorrect response: <strong style={{ color: '#dc2626' }}>-1 mark</strong>. Unattempted: <strong>0 marks</strong>. Total maximum score is <strong>400 marks</strong>.
          </p>
        </div>

        <div className="portal-tile-card">
          <h4>⏱️ Half-Time Duration (100 Mins)</h4>
          <p>
            Total examination duration is <strong>100 minutes</strong> (1 hour 40 minutes) for 100 questions. Countdown timer displays exact remaining time and alerts when time runs low.
          </p>
        </div>
      </div>
    </div>
  );
}
