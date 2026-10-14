import React from 'react';

export default function Navbar({ activeScreen, onNavigate }) {
  return (
    <nav className="portal-nav-bar">
      <button
        type="button"
        className="portal-nav-link highlight-cbt active"
        onClick={() => onNavigate('login')}
      >
        <span>💻</span> CBT Online Mock Test
      </button>
    </nav>
  );
}
