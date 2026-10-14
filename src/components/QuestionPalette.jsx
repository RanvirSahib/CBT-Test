import React from 'react';

export default function QuestionPalette({
  candidate,
  isCollapsed,
  onToggleCollapse,
  activeSection,
  questions,
  currentQIndex,
  onSelectQuestion,
  getQuestionStatus,
  stats
}) {
  return (
    <>
      {/* Mobile Backdrop when palette is open on small screens */}
      {!isCollapsed && (
        <div
          className="palette-mobile-backdrop"
          onClick={onToggleCollapse}
          title="Click to close palette"
        />
      )}

      {/* Slide Toggle Arrow Button on Left of Palette */}
      <button
        type="button"
        className={`palette-collapse-toggle ${isCollapsed ? 'collapsed' : ''}`}
        onClick={onToggleCollapse}
        title={isCollapsed ? 'Expand Question Palette' : 'Collapse Question Palette'}
      >
        {isCollapsed ? '◀' : '▶'}
      </button>

      {/* Palette Pane Wrapper */}
      <aside className={`palette-pane-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Mobile Header with Close Button */}
        <div className="palette-mobile-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>📋</span>
            <strong>Question Palette</strong>
            <span style={{ fontSize: '11px', background: '#0284c7', color: '#fff', padding: '1px 6px', borderRadius: '10px' }}>
              {questions.length} Qs
            </span>
          </div>
          <button
            type="button"
            className="btn-close-palette-mobile"
            onClick={onToggleCollapse}
            title="Close Palette"
          >
            ✕ Close
          </button>
        </div>

        {/* Candidate Profile Bar */}
        <div className="palette-candidate-profile">
          <div className="palette-candidate-avatar">👤</div>
          <div className="palette-candidate-meta">
            <div><strong>{candidate.name}</strong></div>
            <div style={{ color: '#64748b' }}>Roll: <strong>{candidate.rollNo || '3804113256'}</strong></div>
            <div style={{ color: '#94a3b8', fontSize: '10.5px' }}>Node: {candidate.systemNode || 'C01-N42'}</div>
          </div>
        </div>

        {/* 5-State Legend Counter Box */}
        <div className="palette-legend-grid">
          <div className="legend-stat-item">
            <span className="nta-shape-badge badge-not-visited">{stats.notVisited}</span>
            <span>Not Visited</span>
          </div>

          <div className="legend-stat-item">
            <span className="nta-shape-badge badge-not-answered">{stats.notAnswered}</span>
            <span>Not Answered</span>
          </div>

          <div className="legend-stat-item">
            <span className="nta-shape-badge badge-answered">{stats.answered}</span>
            <span>Answered</span>
          </div>

          <div className="legend-stat-item">
            <span className="nta-shape-badge badge-marked-review">{stats.markedReview}</span>
            <span>Marked Review</span>
          </div>

          <div className="legend-stat-item" style={{ gridColumn: 'span 2' }}>
            <span className="nta-shape-badge badge-ans-marked-review">{stats.ansMarkedReview}</span>
            <span>Ans & Marked for Review</span>
          </div>
        </div>

        {/* Question Grid View */}
        <div className="palette-grid-scroll">
          <div className="palette-sec-heading">
            {activeSection ? activeSection.name.toUpperCase() : 'SECTION QUESTIONS'}
          </div>

          <div className="palette-grid-buttons">
            {questions.map((q, idx) => {
              const status = getQuestionStatus(q.id);
              const isActive = idx === currentQIndex;

              let statusClass = 'status-not-visited';
              if (status === 'answered') statusClass = 'status-answered';
              else if (status === 'not-answered') statusClass = 'status-not-answered';
              else if (status === 'marked-review') statusClass = 'status-marked-review';
              else if (status === 'answered-marked-review') statusClass = 'status-answered-marked-review';

              return (
                <button
                  key={q.id}
                  type="button"
                  className={`btn-q-num nta-shape-badge ${statusClass} ${isActive ? 'active-current' : ''}`}
                  onClick={() => {
                    onSelectQuestion(idx);
                    // On small screens, auto-close the palette when a question is clicked so candidate sees the question immediately
                    if (window.innerWidth <= 768) {
                      onToggleCollapse();
                    }
                  }}
                  title={`Question ${q.num} (${status})`}
                >
                  {String(q.num).padStart(2, '0')}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
