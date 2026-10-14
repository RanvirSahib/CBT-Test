import React from 'react';

export default function WelcomeScreen({ candidate, onProceed }) {
  const handleProceed = () => {
    // Automatically trigger fullscreen mode upon user click
    if (!document.fullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch((err) => {
          console.warn('Fullscreen request blocked or not allowed:', err);
        });
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
    onProceed();
  };

  return (
    <div className="welcome-screen-wrapper">
      <div className="welcome-card-box">
        <img
          src="/nta-logo.png"
          alt="NTA Logo"
          style={{ height: '42px', objectFit: 'contain', marginBottom: '14px' }}
        />
        
        <div className="candidate-photo-frame">
          <span>👤</span>
        </div>

        <div className="welcome-title">
          Welcome, <strong>{candidate.name}</strong>
        </div>

        <div className="welcome-details-grid">
          <table>
            <tbody>
              <tr>
                <td>Roll Number:</td>
                <td><strong>{candidate.rollNo}</strong></td>
              </tr>
              <tr>
                <td>System Node:</td>
                <td><strong>{candidate.systemNode || 'C01-N42'}</strong></td>
              </tr>
              <tr>
                <td>Subject:</td>
                <td><strong>{candidate.subject || 'NEET (UG) - Medical Entrance Examination'}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type="button"
          className="btn-nta-proceed-welcome"
          onClick={handleProceed}
        >
          Proceed to Instructions
        </button>
      </div>
    </div>
  );
}
