import React from 'react';

export default function Header() {
  return (
    <>
      {/* 1. Government of India Tricolor Top Accent */}
      <div className="gov-tricolor-stripe" />

      {/* 2. Official NTA Portal Header (exams.nta.ac.in/NEET) */}
      <header className="portal-top-bar">
        <div className="portal-emblem-cluster">
          {/* Ashoka Lion Capital Emblem */}
          <svg className="india-emblem-svg" viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 C35 5 25 15 25 28 C25 40 35 48 50 50 C65 48 75 40 75 28 C75 15 65 5 50 5 Z" fill="#1b365d" />
            <path d="M40 52 L35 75 L65 75 L60 52 Z" fill="#1b365d" />
            <circle cx="50" cy="85" r="10" fill="none" stroke="#1b365d" strokeWidth="2" />
            <rect x="25" y="98" width="50" height="8" rx="2" fill="#1b365d" />
            <text x="50" y="118" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#1b365d">सत्यमेव जयते</text>
          </svg>

          {/* Official NTA Logo */}
          <img src="/nta-logo.png" alt="National Testing Agency Logo" className="nta-logo-img" />

          <div className="portal-brand-text">
            <div className="hindi-title">राष्ट्रीय पात्रता सह प्रवेश परीक्षा (यूजी)</div>
            <div className="english-title">NATIONAL ELIGIBILITY CUM ENTRANCE TEST (UG)</div>
            <div className="sub-agency">Department of Higher Education, Ministry of Education, Government of India</div>
          </div>
        </div>

        <div className="portal-header-right">
          <div className="helpline-box">
            <div>NTA Helpdesk / Support:</div>
            <strong>011-40759000 / 011-69227700</strong>
            <div>Email: neet@nta.ac.in</div>
          </div>
          <div className="status-badge-live">
            <span className="pulse-dot" />
            <span>CBT Server Online</span>
          </div>
        </div>
      </header>
    </>
  );
}
