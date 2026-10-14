/**
 * Main CBT & Portal Application Controller
 * Handles Navigation, Bilingual Questions (EN/HI), Modals, Font Sizing, Fullscreen, and Exam Flow
 */

let examEngine = null;
let selectedExamMode = "quick"; // 'quick' | 'full'
let currentLanguage = "en"; // 'en' | 'hi'
let baseFontSize = 13;

let candidateInfo = {
  name: "Mansi",
  rollNo: "3804113256",
  systemNode: "C01-N42",
  subject: "NEET (UG) - Medical Entrance Examination"
};

// Formatting seconds into HH:MM:SS
function formatTime(totalSeconds) {
  if (totalSeconds < 0) totalSeconds = 0;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = num => String(num).padStart(2, '0');
  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}

// Switch between screens
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Update Portal Nav Bar active state
  document.querySelectorAll('.portal-nav-link').forEach(link => link.classList.remove('active'));
  if (screenId === 'screen-portal-home') {
    const navHome = document.getElementById('nav-home');
    if (navHome) navHome.classList.add('active');
  } else if (screenId === 'screen-login' || screenId === 'screen-cbt') {
    const navCbt = document.getElementById('nav-cbt');
    if (navCbt) navCbt.classList.add('active');
  }
}

// Modal helper functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modalId === 'modal-question-paper' && examEngine) {
      renderQuestionPaperModalContent();
    }
    modal.classList.add('open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

// Font size accessibility adjuster
function adjustFontSize(step) {
  if (step === 0) {
    baseFontSize = 13;
  } else {
    baseFontSize = Math.min(18, Math.max(11, baseFontSize + step));
  }
  document.documentElement.style.setProperty('--exam-font-size', baseFontSize + 'px');
}

// Fullscreen toggle simulator
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Fullscreen error: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupLoginScreen();
  setupWelcomeScreen();
  setupInstructionScreen();
  setupCbtControls();
  setupModals();
});

/* SCREEN 1: LOGIN SETUP */
function setupLoginScreen() {
  const loginForm = document.getElementById('login-form');
  const modeRadios = document.querySelectorAll('input[name="exam-mode"]');

  modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedExamMode = e.target.value;
      document.querySelectorAll('.mode-pill').forEach(c => c.classList.remove('selected'));
      const pill = e.target.closest('.mode-pill');
      if (pill) pill.classList.add('selected');
    });
  });

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('candidate-name-input');
      const rollInput = document.getElementById('candidate-roll-input');

      if (nameInput && nameInput.value.trim()) candidateInfo.name = nameInput.value.trim();
      if (rollInput && rollInput.value.trim()) candidateInfo.rollNo = rollInput.value.trim();

      updateCandidateDisplay();
      showScreen('screen-welcome');
    });
  }
}

function updateCandidateDisplay() {
  document.querySelectorAll('.display-candidate-name').forEach(el => el.textContent = candidateInfo.name);
  document.querySelectorAll('.display-candidate-roll').forEach(el => el.textContent = candidateInfo.rollNo);
  document.querySelectorAll('.display-system-node').forEach(el => el.textContent = candidateInfo.systemNode);
  document.querySelectorAll('.display-candidate-subject').forEach(el => el.textContent = candidateInfo.subject);
}

/* SCREEN 2: WELCOME VERIFICATION */
function setupWelcomeScreen() {
  const proceedBtn = document.getElementById('btn-welcome-proceed');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      showScreen('screen-instructions');
    });
  }
}

/* SCREEN 3: GENERAL INSTRUCTIONS */
function setupInstructionScreen() {
  const readyCheckbox = document.getElementById('undertaking-checkbox');
  const startExamBtn = document.getElementById('btn-start-exam');
  const langSelect = document.getElementById('instruction-lang-select');

  if (readyCheckbox && startExamBtn) {
    readyCheckbox.addEventListener('change', () => {
      startExamBtn.disabled = !readyCheckbox.checked;
    });

    startExamBtn.addEventListener('click', () => {
      if (!readyCheckbox.checked) return;
      startExam();
    });
  }

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      const liveSelect = document.getElementById('exam-live-lang-select');
      if (liveSelect) liveSelect.value = currentLanguage;
    });
  }
}

/* START EXAM ENGINE */
function startExam() {
  const examData = selectedExamMode === 'full' 
    ? NEET_QUESTION_BANK.getFullNeetMock() 
    : NEET_QUESTION_BANK.quickPractice;

  examEngine = new ExamEngine(examData);

  // Hook engine listeners
  examEngine.onStateChange = () => renderCbtConsole();
  examEngine.onTimerTick = (secs) => {
    const timerDisplay = document.getElementById('timer-countdown');
    if (timerDisplay) {
      timerDisplay.textContent = formatTime(secs);
      if (secs <= 300) {
        timerDisplay.classList.add('warning');
      }
    }
  };
  examEngine.onTimerExpired = () => {
    alert("Time has elapsed! Your examination will now be automatically submitted.");
    submitExam();
  };

  examEngine.startTimer();
  showScreen('screen-cbt');
  renderCbtConsole();
}

/* SCREEN 4: CBT CONSOLE RENDERING */
function renderCbtConsole() {
  renderSectionTabs();
  renderCurrentQuestion();
  renderQuestionPalette();
}

// 1. Render Subject & Subsection Tabs
function renderSectionTabs() {
  const container = document.getElementById('section-tabs-container');
  if (!container) return;

  container.innerHTML = '';

  examEngine.examData.sections.forEach((subj, subjIdx) => {
    subj.subsections.forEach((subSec, subSecIdx) => {
      const tab = document.createElement('button');
      const isActive = subjIdx === examEngine.currentSubjectIdx && subSecIdx === examEngine.currentSubSecIdx;
      tab.className = `section-pill-btn ${isActive ? 'active' : ''}`;
      
      let answeredCount = 0;
      subSec.questions.forEach(q => {
        const status = examEngine.getQuestionStatus(q.id);
        if (status === 'answered' || status === 'answered-marked-review') answeredCount++;
      });

      const sectionTitle = (currentLanguage === 'hi' && subSec.nameHi) ? subSec.nameHi : subSec.name;

      tab.innerHTML = `
        <span>${sectionTitle}</span>
        <span style="font-size: 11px; margin-left: 4px; opacity: 0.85;">(${answeredCount}/${subSec.questions.length})</span>
      `;

      tab.addEventListener('click', () => {
        examEngine.jumpTo(subjIdx, subSecIdx, 0);
      });

      container.appendChild(tab);
    });
  });
}

// 2. Render Current Question (Bilingual EN/HI Support)
function renderCurrentQuestion() {
  const q = examEngine.getCurrentQuestion();
  if (!q) return;

  const qNumTag = document.getElementById('q-current-num');
  const qSubSecTag = document.getElementById('q-current-sec-name');
  const qText = document.getElementById('q-statement-text');
  const optionsContainer = document.getElementById('q-options-container');

  const curSubSec = examEngine.getCurrentSubsection();
  const subSecTitle = (currentLanguage === 'hi' && curSubSec.nameHi) ? curSubSec.nameHi : curSubSec.name;
  
  if (qNumTag) qNumTag.textContent = currentLanguage === 'hi' ? `प्रश्न सं. ${q.num}` : `Question No. ${q.num}`;
  if (qSubSecTag) qSubSecTag.textContent = `(${subSecTitle})`;
  
  // Bilingual question statement
  const statement = (currentLanguage === 'hi' && q.questionHi) ? q.questionHi : q.question;
  if (qText) qText.textContent = statement;

  // Bilingual options
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const currentResp = examEngine.getResponse(q.id);
    const selectedOpt = currentResp.selectedOption;

    const optLabels = ['A', 'B', 'C', 'D'];
    const optionsArray = (currentLanguage === 'hi' && q.optionsHi) ? q.optionsHi : q.options;

    optionsArray.forEach((optText, idx) => {
      const row = document.createElement('div');
      row.className = `option-choice-item ${selectedOpt === idx ? 'selected' : ''}`;
      row.innerHTML = `
        <input type="radio" name="cbt_option" id="opt_${idx}" value="${idx}" class="option-radio" ${selectedOpt === idx ? 'checked' : ''}>
        <span style="font-weight: 700; color: #1a428a;">(${optLabels[idx]})</span>
        <span class="option-choice-text">${optText}</span>
      `;

      row.addEventListener('click', () => {
        const radio = row.querySelector('input[type="radio"]');
        radio.checked = true;
        document.querySelectorAll('.option-choice-item').forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
      });

      optionsContainer.appendChild(row);
    });
  }
}

// 3. Render Question Palette
function renderQuestionPalette() {
  const curSubSec = examEngine.getCurrentSubsection();
  if (!curSubSec) return;

  // Update counts
  const counts = examEngine.getStatusCounts();
  document.getElementById('count-not-visited').textContent = counts.notVisited;
  document.getElementById('count-not-answered').textContent = counts.notAnswered;
  document.getElementById('count-answered').textContent = counts.answered;
  document.getElementById('count-marked-review').textContent = counts.markedReview;
  document.getElementById('count-ans-marked-review').textContent = counts.answeredMarkedReview;

  // Render question number buttons
  const grid = document.getElementById('palette-buttons-grid');
  const paletteTitle = document.getElementById('palette-current-section-title');

  const titleText = (currentLanguage === 'hi' && curSubSec.nameHi) ? curSubSec.nameHi : curSubSec.name;
  if (paletteTitle) paletteTitle.textContent = titleText.toUpperCase();
  if (!grid) return;

  grid.innerHTML = '';

  curSubSec.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    const status = examEngine.getQuestionStatus(q.id);
    const isActive = idx === examEngine.currentQIdx;

    btn.className = `btn-q-num nta-shape-badge status-${status} ${isActive ? 'active-q' : ''}`;
    btn.textContent = String(q.num).padStart(2, '0');
    btn.title = `Question ${q.num} (${status.replace('-', ' ')})`;

    btn.addEventListener('click', () => {
      examEngine.jumpTo(examEngine.currentSubjectIdx, examEngine.currentSubSecIdx, idx);
    });

    grid.appendChild(btn);
  });
}

// Helper: Get currently checked radio option index
function getSelectedOptionFromUi() {
  const checked = document.querySelector('input[name="cbt_option"]:checked');
  return checked ? parseInt(checked.value, 10) : null;
}

/* CBT ACTION CONTROLS */
function setupCbtControls() {
  // Save & Next
  const btnSaveNext = document.getElementById('btn-save-next');
  if (btnSaveNext) {
    btnSaveNext.addEventListener('click', () => {
      const selected = getSelectedOptionFromUi();
      examEngine.saveAndNext(selected);
    });
  }

  // Save & Mark for Review
  const btnSaveReview = document.getElementById('btn-save-review');
  if (btnSaveReview) {
    btnSaveReview.addEventListener('click', () => {
      const selected = getSelectedOptionFromUi();
      examEngine.saveAndMarkForReview(selected);
    });
  }

  // Clear Response
  const btnClear = document.getElementById('btn-clear-response');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      document.querySelectorAll('input[name="cbt_option"]').forEach(r => r.checked = false);
      document.querySelectorAll('.option-choice-item').forEach(r => r.classList.remove('selected'));
      examEngine.clearResponse();
    });
  }

  // Mark for Review & Next
  const btnReviewNext = document.getElementById('btn-review-next');
  if (btnReviewNext) {
    btnReviewNext.addEventListener('click', () => {
      examEngine.markForReviewAndNext();
    });
  }

  // Submit Exam
  const btnSubmit = document.getElementById('btn-submit-exam');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      openSubmitSummaryModal();
    });
  }

  // Palette Slide Toggle
  const toggleBtn = document.getElementById('btn-palette-toggle');
  const palettePane = document.getElementById('palette-pane');
  const cbtWorkspace = document.getElementById('cbt-workspace');

  if (toggleBtn && palettePane) {
    toggleBtn.addEventListener('click', () => {
      palettePane.classList.toggle('collapsed');
      cbtWorkspace.classList.toggle('collapsed');
      toggleBtn.innerHTML = palettePane.classList.contains('collapsed') ? '&lt;' : '&gt;';
    });
  }

  // Live Language Switcher in Exam Console
  const liveLangSelect = document.getElementById('exam-live-lang-select');
  if (liveLangSelect) {
    liveLangSelect.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      renderCbtConsole();
    });
  }
}

/* MODALS SETUP */
function setupModals() {
  // Question Paper Modal
  const btnQp = document.getElementById('btn-question-paper');
  if (btnQp) {
    btnQp.addEventListener('click', () => openModal('modal-question-paper'));
  }

  // Confirm Final Submission
  const confirmSubmit = document.getElementById('btn-confirm-submit');
  if (confirmSubmit) {
    confirmSubmit.addEventListener('click', () => {
      closeModal('modal-submit-summary');
      submitExam();
    });
  }
}

// Render Question Paper Modal content
function renderQuestionPaperModalContent() {
  const container = document.getElementById('qp-modal-body');
  if (!container || !examEngine) return;

  container.innerHTML = '';
  examEngine.examData.sections.forEach(sec => {
    sec.subsections.forEach(sub => {
      const header = document.createElement('h4');
      header.style.color = '#1b365d';
      header.style.margin = '16px 0 8px 0';
      header.style.borderBottom = '1px solid #dcdcdc';
      header.style.paddingBottom = '4px';
      header.textContent = (currentLanguage === 'hi' && sub.nameHi) ? sub.nameHi : sub.name;
      container.appendChild(header);

      sub.questions.forEach(q => {
        const item = document.createElement('div');
        item.className = 'qp-question-card';
        const qStatement = (currentLanguage === 'hi' && q.questionHi) ? q.questionHi : q.question;
        const qOpts = (currentLanguage === 'hi' && q.optionsHi) ? q.optionsHi : q.options;

        item.innerHTML = `
          <div class="qp-q-title">Q${q.num}. ${qStatement}</div>
          <div class="qp-options-list">
            <div><strong>(A)</strong> ${qOpts[0]}</div>
            <div><strong>(B)</strong> ${qOpts[1]}</div>
            <div><strong>(C)</strong> ${qOpts[2]}</div>
            <div><strong>(D)</strong> ${qOpts[3]}</div>
          </div>
        `;
        container.appendChild(item);
      });
    });
  });
}

// Open Submit Summary Modal
function openSubmitSummaryModal() {
  const tbody = document.getElementById('summary-table-body');
  if (!tbody || !examEngine) return;

  const rows = ScoringEngine.getSectionStatusCounts(examEngine.examData, examEngine.userResponses, examEngine.visitedQuestions);
  tbody.innerHTML = '';

  rows.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align: left; font-weight: 600;">${r.sectionName}</td>
      <td>${r.total}</td>
      <td style="color: #28a745; font-weight: 700;">${r.answered}</td>
      <td style="color: #d9534f; font-weight: 700;">${r.notAnswered}</td>
      <td style="color: #7b4397; font-weight: 700;">${r.markedReview}</td>
      <td style="color: #7b4397; font-weight: 700;">${r.answeredMarkedReview}</td>
      <td style="color: #666666;">${r.notVisited}</td>
    `;
    tbody.appendChild(tr);
  });

  openModal('modal-submit-summary');
}

// Final Submit Exam & Compute Result
function submitExam() {
  examEngine.stopTimer();

  const results = ScoringEngine.evaluateTest(examEngine.examData, examEngine.userResponses);
  renderResultScreen(results);
  showScreen('screen-result');
}

// SCREEN 5: Render Result Screen
function renderResultScreen(results) {
  // Score overview
  document.getElementById('res-total-score').textContent = `${results.totalScore} / ${results.maxPossibleMarks}`;
  document.getElementById('res-accuracy').textContent = `${results.accuracy}%`;
  document.getElementById('res-correct').textContent = results.totalCorrect;
  document.getElementById('res-incorrect').textContent = results.totalIncorrect;
  document.getElementById('res-unattempted').textContent = results.totalUnattempted;
  document.getElementById('res-negative').textContent = `-${results.totalNegativeDeduction}`;

  // Subject breakdown table
  const tbody = document.getElementById('res-subject-breakdown-body');
  if (tbody) {
    tbody.innerHTML = '';
    Object.values(results.subjectBreakdown).forEach(sb => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="text-align: left; font-weight: 700;">${sb.name}</td>
        <td>${sb.totalQuestions}</td>
        <td>${sb.attempted}</td>
        <td style="color: #28a745; font-weight: 700;">${sb.correct}</td>
        <td style="color: #d9534f; font-weight: 700;">${sb.incorrect}</td>
        <td style="font-weight: 800; color: #0b5e90;">${sb.score} / ${sb.maxMarks}</td>
        <td>${sb.accuracy}%</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Answer Key & Solutions Review
  renderSolutionsReview();

  // Retake test button
  const btnRetake = document.getElementById('btn-retake-exam');
  if (btnRetake) {
    btnRetake.addEventListener('click', () => {
      showScreen('screen-login');
    });
  }
}

function renderSolutionsReview() {
  const container = document.getElementById('solutions-review-container');
  if (!container || !examEngine) return;

  container.innerHTML = '';
  const optLabels = ['A', 'B', 'C', 'D'];

  examEngine.examData.sections.forEach(sec => {
    sec.subsections.forEach(sub => {
      const subHeader = document.createElement('h4');
      subHeader.style.color = '#1b365d';
      subHeader.style.margin = '20px 0 10px 0';
      subHeader.style.borderBottom = '1px solid #dcdcdc';
      subHeader.style.paddingBottom = '4px';
      subHeader.textContent = (currentLanguage === 'hi' && sub.nameHi) ? sub.nameHi : sub.name;
      container.appendChild(subHeader);

      sub.questions.forEach(q => {
        const resp = examEngine.getResponse(q.id);
        const userChoice = resp.selectedOption;
        const isAttempted = userChoice !== null && userChoice !== undefined;
        const isCorrect = isAttempted && userChoice === q.correct;

        let statusClass = 'unanswered';
        let statusPill = '<span style="background: #6c757d; color: white; padding: 2px 8px; border-radius: 3px; font-size: 11px;">Unattempted (0 Marks)</span>';

        if (isAttempted) {
          if (isCorrect) {
            statusClass = 'correct';
            statusPill = '<span style="background: #5cb85c; color: white; padding: 2px 8px; border-radius: 3px; font-size: 11px;">Correct (+4 Marks)</span>';
          } else {
            statusClass = 'wrong';
            statusPill = '<span style="background: #d9534f; color: white; padding: 2px 8px; border-radius: 3px; font-size: 11px;">Incorrect (-1 Mark)</span>';
          }
        }

        const qStatement = (currentLanguage === 'hi' && q.questionHi) ? q.questionHi : q.question;
        const qOpts = (currentLanguage === 'hi' && q.optionsHi) ? q.optionsHi : q.options;
        const qExp = (currentLanguage === 'hi' && q.explanationHi) ? q.explanationHi : q.explanation;

        const card = document.createElement('div');
        card.className = `solution-card-item ${statusClass}`;
        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong>Question ${q.num}</strong>
            ${statusPill}
          </div>
          <p style="margin-bottom: 8px; font-weight: 600;">${qStatement}</p>
          <div style="font-size: 12.5px; margin-bottom: 8px;">
            <p><strong>Your Answer:</strong> ${isAttempted ? `(${optLabels[userChoice]}) ${qOpts[userChoice]}` : '<em>None</em>'}</p>
            <p style="color: #2e7d32;"><strong>Correct Answer:</strong> (${optLabels[q.correct]}) ${qOpts[q.correct]}</p>
          </div>
          <div style="background: #f8fafc; border: 1px dashed #cbd5e1; padding: 8px 12px; border-radius: 4px; font-size: 12px;">
            <strong>Explanation:</strong> ${qExp}
          </div>
        `;

        container.appendChild(card);
      });
    });
  });
}
