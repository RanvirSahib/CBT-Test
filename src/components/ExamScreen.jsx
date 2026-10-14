import React, { useState, useEffect, useMemo, useCallback } from 'react';
import QuestionPalette from './QuestionPalette';

export default function ExamScreen({
  candidate,
  examData,
  onFinishExam,
  onOpenSubmitModal,
  userResponses,
  setUserResponses
}) {
  const [currentSubjectIdx, setCurrentSubjectIdx] = useState(0);
  const [currentSubSecIdx, setCurrentSubSecIdx] = useState(0);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [visitedQuestions, setVisitedQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_cbt_visited_questions');
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });
  const [isPaletteCollapsed, setIsPaletteCollapsed] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState(14);

  // Timer Initialization from localStorage or default
  const [secondsRemaining, setSecondsRemaining] = useState(() => {
    const savedSecs = localStorage.getItem('neet_cbt_remaining_seconds');
    if (savedSecs !== null && !isNaN(parseInt(savedSecs, 10))) {
      return parseInt(savedSecs, 10);
    }
    return examData.durationMinutes * 60;
  });

  // Current Subject and Subsections
  const currentSubject = examData.sections[currentSubjectIdx] || examData.sections[0];
  const currentSubsection = currentSubject.subsections[currentSubSecIdx] || currentSubject.subsections[0];
  const questionsInCurrentSubSec = currentSubsection.questions || [];
  const currentQuestion = questionsInCurrentSubSec[currentQIdx] || questionsInCurrentSubSec[0];

  // Current response state
  const currentResponse = currentQuestion ? userResponses[currentQuestion.id] : null;
  const selectedOption = currentResponse ? currentResponse.selectedOption : null;

  // Save userResponses & visitedQuestions to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('neet_cbt_user_responses', JSON.stringify(userResponses));
    } catch {}
  }, [userResponses]);

  useEffect(() => {
    try {
      localStorage.setItem('neet_cbt_visited_questions', JSON.stringify(Array.from(visitedQuestions)));
    } catch {}
  }, [visitedQuestions]);

  // Mark current question as visited
  useEffect(() => {
    if (currentQuestion) {
      setVisitedQuestions(prev => {
        if (prev.has(currentQuestion.id)) return prev;
        const next = new Set(prev);
        next.add(currentQuestion.id);
        return next;
      });
    }
  }, [currentQuestion]);

  // Ensure fullscreen on exam mount & prevent tab close
  useEffect(() => {
    if (!document.fullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = 'Strict exam is active. Leaving the page will submit or lose your test!';
      return e.returnValue;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Wall-clock Accurate Timer Effect
  // If the user switches tabs, minimizes window, or screen locks, the timer DOES NOT stop!
  useEffect(() => {
    let targetEndTime = parseInt(localStorage.getItem('neet_cbt_target_end_time'), 10);
    const testStatus = localStorage.getItem('neet_cbt_test_status');

    if (!targetEndTime || isNaN(targetEndTime) || testStatus === 'paused') {
      // Calculate new target end time based on seconds remaining
      targetEndTime = Date.now() + secondsRemaining * 1000;
      localStorage.setItem('neet_cbt_target_end_time', targetEndTime);
      localStorage.setItem('neet_cbt_test_status', 'in-progress');
    }

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.round((targetEndTime - now) / 1000));
      setSecondsRemaining(diff);
      localStorage.setItem('neet_cbt_remaining_seconds', diff);

      if (diff <= 0) {
        localStorage.removeItem('neet_cbt_target_end_time');
        localStorage.setItem('neet_cbt_test_status', 'completed');
        onFinishExam();
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // Event listeners for tab switch / minimize / focus
    // This ensures the timer recalculates accurately the moment the tab becomes visible!
    const handleVisibilitySync = () => {
      updateTimer();
    };

    document.addEventListener('visibilitychange', handleVisibilitySync);
    window.addEventListener('focus', handleVisibilitySync);
    window.addEventListener('pageshow', handleVisibilitySync);

    return () => {
      clearInterval(timerInterval);
      document.removeEventListener('visibilitychange', handleVisibilitySync);
      window.removeEventListener('focus', handleVisibilitySync);
      window.removeEventListener('pageshow', handleVisibilitySync);
    };
  }, [onFinishExam]);

  // Format Timer to HH:MM:SS
  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    const pad = n => String(n).padStart(2, '0');
    if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
    return `${pad(m)}:${pad(s)}`;
  };

  // Status computation for question
  const getQuestionStatus = useCallback((qId) => {
    const resp = userResponses[qId];
    const visited = visitedQuestions.has(qId);
    const hasAnswer = resp && resp.selectedOption !== null && resp.selectedOption !== undefined;
    const isMarked = resp && resp.markedForReview;

    if (!visited && !hasAnswer && !isMarked) return 'not-visited';
    if (hasAnswer && isMarked) return 'answered-marked-review';
    if (hasAnswer && !isMarked) return 'answered';
    if (!hasAnswer && isMarked) return 'marked-review';
    return 'not-answered';
  }, [userResponses, visitedQuestions]);

  // Overall statistics for the current subsection
  const currentSubSecStats = useMemo(() => {
    let notVisited = 0;
    let notAnswered = 0;
    let answered = 0;
    let markedReview = 0;
    let ansMarkedReview = 0;

    questionsInCurrentSubSec.forEach(q => {
      const st = getQuestionStatus(q.id);
      if (st === 'not-visited') notVisited++;
      else if (st === 'not-answered') notAnswered++;
      else if (st === 'answered') answered++;
      else if (st === 'marked-review') markedReview++;
      else if (st === 'answered-marked-review') ansMarkedReview++;
    });

    return { notVisited, notAnswered, answered, markedReview, ansMarkedReview };
  }, [questionsInCurrentSubSec, getQuestionStatus]);

  // Answer selection handler
  const handleSelectOption = (optIdx) => {
    if (!currentQuestion) return;
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.id]: {
        selectedOption: optIdx,
        markedForReview: prev[currentQuestion.id]?.markedForReview || false
      }
    }));
  };

  // Keyboard shortcuts (1, 2, 3, 4, A, B, C, D)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['1', '2', '3', '4'].includes(e.key)) {
        handleSelectOption(parseInt(e.key, 10) - 1);
      } else if (['a', 'A'].includes(e.key)) {
        handleSelectOption(0);
      } else if (['b', 'B'].includes(e.key)) {
        handleSelectOption(1);
      } else if (['c', 'C'].includes(e.key)) {
        handleSelectOption(2);
      } else if (['d', 'D'].includes(e.key)) {
        handleSelectOption(3);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion]);

  // Action: Save & Next
  const handleSaveAndNext = () => {
    if (currentQuestion) {
      setUserResponses(prev => ({
        ...prev,
        [currentQuestion.id]: {
          selectedOption: selectedOption,
          markedForReview: false
        }
      }));
    }
    advanceNextQuestion();
  };

  // Action: Save & Mark for Review
  const handleSaveAndMarkReview = () => {
    if (currentQuestion) {
      setUserResponses(prev => ({
        ...prev,
        [currentQuestion.id]: {
          selectedOption: selectedOption,
          markedForReview: true
        }
      }));
    }
    advanceNextQuestion();
  };

  // Action: Clear Response
  const handleClearResponse = () => {
    if (currentQuestion) {
      setUserResponses(prev => {
        const copy = { ...prev };
        if (copy[currentQuestion.id]) {
          copy[currentQuestion.id] = {
            selectedOption: null,
            markedForReview: false
          };
        }
        return copy;
      });
    }
  };

  // Action: Mark for Review & Next
  const handleMarkReviewAndNext = () => {
    if (currentQuestion) {
      setUserResponses(prev => ({
        ...prev,
        [currentQuestion.id]: {
          selectedOption: selectedOption,
          markedForReview: true
        }
      }));
    }
    advanceNextQuestion();
  };

  // Move to next question or next section
  const advanceNextQuestion = () => {
    if (currentQIdx < questionsInCurrentSubSec.length - 1) {
      setCurrentQIdx(currentQIdx + 1);
    } else {
      if (currentSubSecIdx < currentSubject.subsections.length - 1) {
        setCurrentSubSecIdx(currentSubSecIdx + 1);
        setCurrentQIdx(0);
      } else if (currentSubjectIdx < examData.sections.length - 1) {
        setCurrentSubjectIdx(currentSubjectIdx + 1);
        setCurrentSubSecIdx(0);
        setCurrentQIdx(0);
      }
    }
  };


  // Adjust font size accessibility (A-, A, A+)
  const adjustFontSize = (delta) => {
    let newSize;
    if (delta === 0) {
      newSize = 14;
    } else {
      newSize = Math.max(11, Math.min(22, fontSize + delta));
    }
    setFontSize(newSize);
    document.documentElement.style.setProperty('--exam-font-size', `${newSize}px`);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  // Flattened list of sections for tabs
  const allSubsectionsList = useMemo(() => {
    const list = [];
    examData.sections.forEach((sub, sIdx) => {
      sub.subsections.forEach((subSec, ssIdx) => {
        const answeredCount = subSec.questions.filter(q => {
          const resp = userResponses[q.id];
          return resp && resp.selectedOption !== null && resp.selectedOption !== undefined;
        }).length;

        list.push({
          subjectIndex: sIdx,
          subsectionIndex: ssIdx,
          id: subSec.id,
          name: subSec.name,
          nameHi: subSec.nameHi,
          total: subSec.questions.length,
          answered: answeredCount,
          isActive: sIdx === currentSubjectIdx && ssIdx === currentSubSecIdx
        });
      });
    });
    return list;
  }, [examData, currentSubjectIdx, currentSubSecIdx, userResponses]);

  return (
    <div className="cbt-master-layout" onContextMenu={(e) => e.preventDefault()}>
      {/* Official Top Banner Toolbar (Distraction Free) */}
      <div className="cbt-top-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/nta-logo.png" alt="NTA Logo" style={{ height: '30px', objectFit: 'contain' }} />
          <div className="candidate-name-bracket">
            [ <span>{candidate.name}</span> - <span>{candidate.rollNo}</span> ]
          </div>
        </div>

        <div className="cbt-top-right-group">
          {/* Mobile Palette Toggle Button */}
          <button
            type="button"
            className="btn-mobile-palette-toggle"
            onClick={() => setIsPaletteCollapsed(!isPaletteCollapsed)}
            title="Open Question Palette"
          >
            📋 Palette ({currentQuestion?.num || 1}/100)
          </button>

          {/* Font Resizer */}
          <div className="font-resizer-group">
            <span style={{ fontSize: '11px', color: '#64748b', marginRight: '4px' }}>Font:</span>
            <button
              type="button"
              className={`btn-font-resize ${fontSize < 14 ? 'active' : ''}`}
              onClick={() => adjustFontSize(-2.5)}
              title="Decrease Font Size (A-)"
            >
              A-
            </button>
            <button
              type="button"
              className={`btn-font-resize ${fontSize === 14 ? 'active' : ''}`}
              onClick={() => adjustFontSize(0)}
              title="Reset to Default Font Size (A)"
            >
              A
            </button>
            <button
              type="button"
              className={`btn-font-resize ${fontSize > 14 ? 'active' : ''}`}
              onClick={() => adjustFontSize(2.5)}
              title="Increase Font Size (A+)"
            >
              A+
            </button>
          </div>

          {/* Language Switcher */}
          <div className="lang-switcher-wrap" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
            <span>Lang:</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{ padding: '2px 6px', fontSize: '11.5px', borderRadius: '3px', border: '1px solid #cbd5e1' }}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>

          {/* Fullscreen Button */}
          <button
            type="button"
            className="btn-cbt-action btn-nta-white btn-fullscreen-toggle"
            onClick={toggleFullscreen}
            style={{ padding: '3px 8px', fontSize: '11px' }}
          >
            ⛶ Fullscreen
          </button>

          {/* Strict Exam Mode Badge */}
          <span className="strict-mode-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#b91c1c',
            fontSize: '11px',
            fontWeight: 700,
            padding: '3px 9px',
            borderRadius: '4px'
          }}>
            🔒 Strict Mode
          </span>

          {/* Countdown Timer */}
          <div className="countdown-timer-container">
            <span className="timer-label-text" style={{ fontWeight: 700, fontSize: '12px' }}>Time:</span>
            <span className={`countdown-timer-badge ${secondsRemaining < 300 ? 'warning' : ''}`}>
              {formatTime(secondsRemaining)}
            </span>
          </div>
        </div>
      </div>

      {/* Section Tabs Row */}
      <div className="cbt-sections-bar">
        {allSubsectionsList.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`section-pill-btn ${tab.isActive ? 'active' : ''}`}
            onClick={() => {
              setCurrentSubjectIdx(tab.subjectIndex);
              setCurrentSubSecIdx(tab.subsectionIndex);
              setCurrentQIdx(0);
            }}
          >
            <span>{language === 'en' ? tab.name : tab.nameHi}</span>
            <span className="sec-progress-pill">{tab.answered}/{tab.total}</span>
          </button>
        ))}
      </div>

      {/* CBT Main Body: Left Question Pane + Right Palette */}
      <div className="cbt-main-body">
        {/* Left Question Pane */}
        <div className="question-pane-wrapper">
          {currentQuestion ? (
            <>
              {/* Question Header */}
              <div className="question-header-bar">
                <div>
                  <span className="q-title-bold">Question No. {currentQuestion.num}</span>
                  <span style={{ color: '#64748b', fontSize: '12px', marginLeft: '8px' }}>
                    ({language === 'en' ? currentSubsection.name : currentSubsection.nameHi})
                  </span>
                </div>
                <div className="q-marks-pill">
                  Marks for correct: <strong style={{ color: '#16a34a' }}>+4</strong> | Negative: <strong style={{ color: '#dc2626' }}>-1</strong>
                </div>
              </div>

              {/* Question Scroll Viewport */}
              <div className="question-scroll-viewport" style={{ fontSize: `${fontSize}px` }}>
                <div className="question-statement-box" style={{ fontSize: `${fontSize + 1.5}px`, lineHeight: 1.6 }}>
                  {language === 'en' ? currentQuestion.question : currentQuestion.questionHi}
                </div>

                {/* Multiple Choice Options */}
                <div className="options-list-grid">
                  {(language === 'en' ? currentQuestion.options : currentQuestion.optionsHi).map((opt, oIdx) => {
                    const isSelected = selectedOption === oIdx;
                    const letter = ['A', 'B', 'C', 'D'][oIdx];

                    return (
                      <div
                        key={oIdx}
                        className={`option-choice-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectOption(oIdx)}
                      >
                        <span className="option-letter-badge">{letter}</span>
                        <span className="option-choice-text" style={{ fontSize: `${fontSize}px` }}>
                          {opt}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Controls Footer */}
              <div className="cbt-action-footer">
                <div className="footer-action-buttons-left">
                  <button
                    type="button"
                    className="btn-cbt-action btn-nta-green btn-action-save-next"
                    onClick={handleSaveAndNext}
                  >
                    Save & Next ➔
                  </button>
                  <button
                    type="button"
                    className="btn-cbt-action btn-nta-orange btn-action-save-mark"
                    onClick={handleSaveAndMarkReview}
                  >
                    Save & Mark Review
                  </button>
                  <button
                    type="button"
                    className="btn-cbt-action btn-nta-white btn-action-clear"
                    onClick={handleClearResponse}
                  >
                    Clear Response
                  </button>
                  <button
                    type="button"
                    className="btn-cbt-action btn-nta-blue btn-action-mark-next"
                    onClick={handleMarkReviewAndNext}
                  >
                    Mark Review & Next
                  </button>
                </div>

                <div className="footer-action-buttons-right">
                  <button
                    type="button"
                    className="btn-cbt-action btn-nta-submit btn-action-submit"
                    onClick={onOpenSubmitModal}
                  >
                    Submit Test ✓
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div style={{ padding: '40px', textAlign: 'center' }}>No questions available.</div>
          )}
        </div>

        {/* Right Question Palette */}
        <QuestionPalette
          candidate={candidate}
          isCollapsed={isPaletteCollapsed}
          onToggleCollapse={() => setIsPaletteCollapsed(!isPaletteCollapsed)}
          activeSection={currentSubsection}
          questions={questionsInCurrentSubSec}
          currentQIndex={currentQIdx}
          onSelectQuestion={(idx) => setCurrentQIdx(idx)}
          getQuestionStatus={getQuestionStatus}
          stats={currentSubSecStats}
        />
      </div>
    </div>
  );
}
