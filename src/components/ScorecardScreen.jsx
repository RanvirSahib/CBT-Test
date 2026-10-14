import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { openMailClientWithScorecard } from '../utils/emailService';
import { generateScorecardPDF } from '../utils/pdfGenerator';

export default function ScorecardScreen({ candidate, result, onRetake, onReturnHome }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'correct' | 'incorrect' | 'unattempted'
  const [solLang, setSolLang] = useState('en');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}

    // Silently archive and dispatch result email in background without showing any banner
    try {
      fetch('/api/send-result-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ candidate, result })
      }).catch(() => {});
    } catch {}
  }, []);

  const handleDownloadPDF = () => {
    try {
      setIsGeneratingPdf(true);
      generateScorecardPDF(candidate, result);
    } catch (err) {
      console.error('Error generating PDF:', err);
      // Fallback to native print-to-PDF if browser blocks dynamic worker
      window.print();
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 800);
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const filteredQuestions = (result.questionResults || []).filter(q => {
    if (filter === 'all') return true;
    if (filter === 'correct') return q.status === 'correct';
    if (filter === 'incorrect') return q.status === 'incorrect';
    if (filter === 'unattempted') return q.status === 'unattempted' || q.status === 'exceeded-quota';
    return true;
  });

  return (
    <div className="scorecard-screen-wrapper">
      {/* Header Banner */}
      <div className="scorecard-header">
        <div>
          <h2>NEET (UG) - Performance Scorecard & Analysis</h2>
          <p style={{ fontSize: '13px', opacity: 0.9 }}>
            Candidate: <strong>{candidate.name}</strong> | Roll No: <strong>{candidate.rollNo}</strong> | Node: <strong>{candidate.systemNode || 'C01-N42'}</strong>
          </p>
        </div>
        <div className="scorecard-header-actions">
          <button
            type="button"
            className="btn-cbt-action btn-nta-green"
            onClick={handleDownloadPDF}
            disabled={isGeneratingPdf}
            style={{ fontWeight: 700 }}
          >
            {isGeneratingPdf ? '⏳ Generating PDF...' : '📄 Download Result (PDF)'}
          </button>
          <button
            type="button"
            className="btn-cbt-action btn-nta-white"
            onClick={handlePrintPDF}
            style={{ fontWeight: 600 }}
            title="Open system print dialog to save as PDF"
          >
            🖨️ Print / Save as PDF
          </button>
          <button
            type="button"
            className="btn-cbt-action btn-nta-white"
            onClick={() => openMailClientWithScorecard(candidate, result)}
            style={{ fontWeight: 600 }}
            title="Open Gmail to ranvir.sahibadv88@gmail.com with prefilled scorecard"
          >
            ✉️ Compose in Gmail
          </button>
          <button
            type="button"
            className="btn-cbt-action btn-nta-white"
            onClick={onReturnHome}
          >
            🏠 Return to Portal
          </button>
          <button
            type="button"
            className="btn-cbt-action btn-nta-green"
            onClick={onRetake}
          >
            🔄 Retake Test
          </button>
        </div>
      </div>

      {/* 6 Key Stats Grid */}
      <div className="score-stats-grid">
        <div className="stat-tile score-highlight">
          <div className="title">Total Score</div>
          <div className="num">{result.totalScore} / {result.maxPossibleMarks}</div>
        </div>
        <div className="stat-tile">
          <div className="title">Accuracy</div>
          <div className="num" style={{ color: '#0284c7' }}>{result.accuracy}%</div>
        </div>
        <div className="stat-tile">
          <div className="title">Correct (+4)</div>
          <div className="num" style={{ color: '#16a34a' }}>{result.totalCorrect}</div>
        </div>
        <div className="stat-tile">
          <div className="title">Incorrect (-1)</div>
          <div className="num" style={{ color: '#dc2626' }}>{result.totalIncorrect}</div>
        </div>
        <div className="stat-tile">
          <div className="title">Unattempted</div>
          <div className="num" style={{ color: '#64748b' }}>{result.totalUnattempted}</div>
        </div>
        <div className="stat-tile">
          <div className="title">Est. Percentile</div>
          <div className="num" style={{ color: '#9333ea' }}>{result.estimatedPercentile} %ile</div>
        </div>
      </div>

      {/* Scorecard Body: Subject Breakdown & Solutions */}
      <div className="scorecard-body">
        {/* Subject Breakdown Table */}
        <h3 style={{ fontSize: '15px', marginBottom: '10px', color: '#1b365d' }}>
          Subject-wise Marks Breakdown:
        </h3>

        <div className="nta-table-responsive">
          <table className="nta-summary-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Subject</th>
                <th>Total Qs</th>
                <th>Attempted</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Score</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(result.subjectBreakdown || {}).map(subKey => {
                const sub = result.subjectBreakdown[subKey];
                return (
                  <tr key={subKey}>
                    <td style={{ textAlign: 'left', fontWeight: 600 }}>{sub.name}</td>
                    <td>{sub.totalQuestions}</td>
                    <td>{sub.attempted}</td>
                    <td style={{ color: '#16a34a', fontWeight: 700 }}>{sub.correct}</td>
                    <td style={{ color: '#dc2626', fontWeight: 700 }}>{sub.incorrect}</td>
                    <td><strong>{sub.score}</strong> / {sub.maxMarks}</td>
                    <td>{sub.accuracy}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Detailed Solutions Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '15px', color: '#1b365d' }}>
            Question Solutions & Detailed Explanations:
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <span>Language:</span>
            <select
              value={solLang}
              onChange={(e) => setSolLang(e.target.value)}
              style={{ padding: '3px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>

        {/* Solution Filter Pills */}
        <div className="sol-filter-bar">
          <button
            type="button"
            className={`btn-sol-filter ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Questions ({result.questionResults?.length || 0})
          </button>
          <button
            type="button"
            className={`btn-sol-filter ${filter === 'correct' ? 'active' : ''}`}
            onClick={() => setFilter('correct')}
          >
            Correct ({result.totalCorrect})
          </button>
          <button
            type="button"
            className={`btn-sol-filter ${filter === 'incorrect' ? 'active' : ''}`}
            onClick={() => setFilter('incorrect')}
          >
            Incorrect ({result.totalIncorrect})
          </button>
          <button
            type="button"
            className={`btn-sol-filter ${filter === 'unattempted' ? 'active' : ''}`}
            onClick={() => setFilter('unattempted')}
          >
            Unattempted ({result.totalUnattempted})
          </button>
        </div>

        {/* Solutions List */}
        <div className="solutions-container">
          {filteredQuestions.map((q) => {
            const isCorrect = q.status === 'correct';
            const isIncorrect = q.status === 'incorrect';
            const isUnattempted = q.status === 'unattempted' || q.status === 'exceeded-quota';

            let cardClass = 'is-unattempted';
            if (isCorrect) cardClass = 'is-correct';
            else if (isIncorrect) cardClass = 'is-incorrect';

            const userOptText = q.userSelected !== null && q.userSelected !== undefined
              ? (solLang === 'en' ? q.options[q.userSelected] : q.optionsHi[q.userSelected])
              : 'None (Unattempted)';

            const correctOptText = solLang === 'en' ? q.options[q.correctAnswer] : q.optionsHi[q.correctAnswer];

            return (
              <div key={q.id} className={`sol-card ${cardClass}`}>
                <div className="sol-card-header">
                  <div>
                    <strong style={{ fontSize: '14px' }}>Question No. {q.num}</strong>
                    <span style={{ color: '#64748b', marginLeft: '8px' }}>({q.subSecName})</span>
                  </div>

                  <div>
                    {isCorrect && (
                      <span style={{ color: '#16a34a', fontWeight: 700, background: '#f0fdf4', padding: '3px 8px', borderRadius: '4px' }}>
                        ✓ Correct (+4)
                      </span>
                    )}
                    {isIncorrect && (
                      <span style={{ color: '#dc2626', fontWeight: 700, background: '#fef2f2', padding: '3px 8px', borderRadius: '4px' }}>
                        ✗ Incorrect (-1)
                      </span>
                    )}
                    {isUnattempted && (
                      <span style={{ color: '#64748b', fontWeight: 600, background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>
                        ⚪ Not Attempted (0)
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 500 }}>
                  {solLang === 'en' ? q.question : q.questionHi}
                </div>

                <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ width: '130px', color: '#64748b' }}>Your Response:</span>
                    <strong style={{ color: isCorrect ? '#16a34a' : isIncorrect ? '#dc2626' : '#64748b' }}>
                      {userOptText}
                    </strong>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ width: '130px', color: '#64748b' }}>Correct Answer:</span>
                    <strong style={{ color: '#16a34a' }}>
                      {correctOptText}
                    </strong>
                  </div>
                </div>

                <div className="sol-explanation-box">
                  <strong>💡 Scientific Explanation:</strong>
                  <div style={{ marginTop: '4px' }}>
                    {solLang === 'en' ? q.explanation : q.explanationHi}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
