/**
 * Email Service for NEET CBT Examination Portal
 * Delivers comprehensive test scorecard & question-by-question analysis to ranvir.sahibadv88@gmail.com
 */

const TARGET_EMAIL = 'ranvir.sahibadv88@gmail.com';

/**
 * Format questions for a specific subject
 */
function formatQuestionsForSubject(questionResults, subjectName) {
  const filtered = questionResults.filter(q => q.subjectName === subjectName);
  return filtered.map(q => {
    const userChoice = q.options?.find(o => o.key === q.userSelected);
    const correctChoice = q.options?.find(o => o.key === q.correctAnswer);

    const userAnsText = q.userSelected 
      ? `(${q.userSelected}) ${userChoice?.text || ''}` 
      : '[UNATTEMPTED / NOT ANSWERED]';

    const correctAnsText = `(${q.correctAnswer}) ${correctChoice?.text || ''}`;

    let verdict = 'UNATTEMPTED (0 Marks)';
    if (q.status === 'correct') verdict = 'CORRECT (+4 Marks)';
    else if (q.status === 'incorrect') verdict = 'INCORRECT (-1 Mark)';
    else if (q.status === 'exceeded-quota') verdict = 'EXCEEDED SECTION B QUOTA (0 Marks)';

    return [
      `Q${q.num}. [${q.subSecName}]`,
      `Question: ${q.question}`,
      `Candidate Answer: ${userAnsText}`,
      `Expected / Correct Answer: ${correctAnsText}`,
      `Result: ${verdict}`,
      `Explanation: ${q.explanation || 'N/A'}`,
      '--------------------------------------------------'
    ].join('\n');
  }).join('\n\n');
}

/**
 * Generates an HTML report suitable for browser download or email attachment
 */
export function generateFullHtmlReport(candidate, result) {
  const dateStr = new Date().toLocaleString();
  
  const questionRows = (result.questionResults || []).map(q => {
    const userChoice = q.options?.find(o => o.key === q.userSelected);
    const correctChoice = q.options?.find(o => o.key === q.correctAnswer);
    
    const isCorrect = q.status === 'correct';
    const isIncorrect = q.status === 'incorrect';
    const bgCol = isCorrect ? '#f0fdf4' : isIncorrect ? '#fef2f2' : '#f8fafc';
    const tagCol = isCorrect ? '#16a34a' : isIncorrect ? '#dc2626' : '#64748b';

    return `
      <tr style="background: ${bgCol};">
        <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700; text-align: center;">Q${q.num}</td>
        <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">${q.subjectName}<br><small style="color: #64748b;">${q.subSecName}</small></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">
          <div style="font-weight: 600; color: #0f172a; margin-bottom: 6px;">${q.question}</div>
          <div style="font-size: 12px; color: #475569; margin-bottom: 4px;"><strong>Options:</strong></div>
          <div style="font-size: 12px; color: #475569; line-height: 1.4;">
            ${(q.options || []).map(o => `<div>(${o.key}) ${o.text}</div>`).join('')}
          </div>
          ${q.explanation ? `<div style="margin-top: 8px; font-size: 11.5px; color: #1e40af; background: #eff6ff; padding: 6px; border-radius: 4px;"><strong>Sol:</strong> ${q.explanation}</div>` : ''}
        </td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">
          ${q.userSelected ? `<strong>(${q.userSelected})</strong> ${userChoice?.text || ''}` : '<span style="color: #94a3b8; font-style: italic;">Unattempted</span>'}
        </td>
        <td style="padding: 10px; border: 1px solid #e2e8f0; color: #16a34a;">
          <strong>(${q.correctAnswer})</strong> ${correctChoice?.text || ''}
        </td>
        <td style="padding: 10px; border: 1px solid #e2e8f0; text-align: center; font-weight: 800; color: ${tagCol};">
          ${q.marksAwarded > 0 ? `+${q.marksAwarded}` : q.marksAwarded}
        </td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>NEET CBT Minor Test 03 Result - ${candidate.name}</title>
      <style>
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; padding: 24px; color: #1e293b; background: #ffffff; line-height: 1.5; font-size: 13px; }
        .header { background: #1b365d; color: #ffffff; padding: 20px 24px; border-radius: 8px; margin-bottom: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-bottom: 24px; }
        .stat-card { border: 1px solid #cbd5e1; background: #f8fafc; padding: 12px; border-radius: 6px; text-align: center; }
        .stat-card .num { font-size: 20px; font-weight: 800; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 12.5px; }
        th { background: #f1f5f9; padding: 10px; border: 1px solid #cbd5e1; text-align: left; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0 0 6px 0;">NEET (UG) CBT Exam Result & Detailed Question-by-Question Analysis</h2>
        <div>Candidate: <strong>${candidate.name}</strong> | Roll No: <strong>${candidate.rollNo}</strong> | Test: <strong>PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03</strong></div>
        <div style="font-size: 12px; opacity: 0.85; margin-top: 4px;">Submitted On: ${dateStr}</div>
      </div>

      <div class="stats-grid">
        <div class="stat-card" style="background: #f0fdf4; border-color: #86efac;">
          <div style="font-size: 11px; color: #16a34a; font-weight: 700;">TOTAL SCORE</div>
          <div class="num" style="color: #16a34a;">${result.totalScore} / ${result.maxPossibleMarks}</div>
        </div>
        <div class="stat-card">
          <div style="font-size: 11px; color: #64748b; font-weight: 700;">ACCURACY</div>
          <div class="num" style="color: #0284c7;">${result.accuracy}%</div>
        </div>
        <div class="stat-card">
          <div style="font-size: 11px; color: #64748b; font-weight: 700;">CORRECT (+4)</div>
          <div class="num" style="color: #16a34a;">${result.totalCorrect}</div>
        </div>
        <div class="stat-card">
          <div style="font-size: 11px; color: #64748b; font-weight: 700;">INCORRECT (-1)</div>
          <div class="num" style="color: #dc2626;">${result.totalIncorrect}</div>
        </div>
        <div class="stat-card">
          <div style="font-size: 11px; color: #64748b; font-weight: 700;">UNATTEMPTED</div>
          <div class="num" style="color: #64748b;">${result.totalUnattempted}</div>
        </div>
        <div class="stat-card">
          <div style="font-size: 11px; color: #64748b; font-weight: 700;">PERCENTILE</div>
          <div class="num" style="color: #9333ea;">${result.estimatedPercentile} %ile</div>
        </div>
      </div>

      <h3>Detailed 100-Question Analysis (Questions, Selected Answers & Expected Answers):</h3>
      <table>
        <thead>
          <tr>
            <th style="width: 50px; text-align: center;">Q#</th>
            <th style="width: 140px;">Subject & Sec</th>
            <th>Question & Options</th>
            <th style="width: 180px;">Candidate Selected Answer</th>
            <th style="width: 180px;">Expected Answer</th>
            <th style="width: 60px; text-align: center;">Marks</th>
          </tr>
        </thead>
        <tbody>
          ${questionRows}
        </tbody>
      </table>
    </body>
    </html>
  `;
}

/**
 * Dispatches test results to ranvir.sahibadv88@gmail.com
 */
export async function sendExamResultsToEmail(candidate, result) {
  const submissionTime = new Date().toLocaleString();
  const questionResults = result.questionResults || [];

  const physicsReport = formatQuestionsForSubject(questionResults, 'Physics');
  const chemistryReport = formatQuestionsForSubject(questionResults, 'Chemistry');
  const botanyReport = formatQuestionsForSubject(questionResults, 'Botany');
  const zoologyReport = formatQuestionsForSubject(questionResults, 'Zoology');

  // Clean, professional executive summary for email
  const breakdown = result.subjectBreakdown || {};
  const phy = breakdown.phy || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'phy') : {}) || {};
  const chem = breakdown.chem || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'chem') : {}) || {};
  const bot = breakdown.bot || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'bot') : {}) || {};
  const zoo = breakdown.zoo || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'zoo') : {}) || {};

  const payload = {
    _subject: `[OFFICIAL SCORECARD] NEET Minor Test #03 - ${candidate.name} (Roll: ${candidate.rollNo}) | Score: ${result.totalScore}/${result.maxPossibleMarks}`,
    _template: 'table',
    _captcha: 'false',
    Target_Recipient: TARGET_EMAIL,
    Candidate_Name: candidate.name,
    Roll_Number: candidate.rollNo,
    Examination: 'ALLEN PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03',
    Date_And_Time: submissionTime,
    Total_Marks: `${result.totalScore} / ${result.maxPossibleMarks} (${((result.totalScore / (result.maxPossibleMarks || 400)) * 100).toFixed(1)}%)`,
    Estimated_Percentile: `${result.estimatedPercentile} %ile`,
    Accuracy: `${result.accuracy}%`,
    Correct_Answers_Count: `${result.totalCorrect} (+${result.totalCorrect * 4} Marks)`,
    Incorrect_Answers_Count: `${result.totalIncorrect} (-${result.totalIncorrect} Marks)`,
    Unattempted_Questions: `${result.totalUnattempted}`,
    Physics_Section: `${phy.score ?? phy.marks ?? 0} / 100 Marks (Correct: ${phy.correct || 0}, Incorrect: ${phy.incorrect || 0}, Accuracy: ${phy.accuracy || 0}%)`,
    Chemistry_Section: `${chem.score ?? chem.marks ?? 0} / 100 Marks (Correct: ${chem.correct || 0}, Incorrect: ${chem.incorrect || 0}, Accuracy: ${chem.accuracy || 0}%)`,
    Botany_Section: `${bot.score ?? bot.marks ?? 0} / 100 Marks (Correct: ${bot.correct || 0}, Incorrect: ${bot.incorrect || 0}, Accuracy: ${bot.accuracy || 0}%)`,
    Zoology_Section: `${zoo.score ?? zoo.marks ?? 0} / 100 Marks (Correct: ${zoo.correct || 0}, Incorrect: ${zoo.incorrect || 0}, Accuracy: ${zoo.accuracy || 0}%)`,
    Physics_Analysis: physicsReport,
    Chemistry_Analysis: chemistryReport,
    Botany_Analysis: botanyReport,
    Zoology_Analysis: zoologyReport,
    Official_PDF_Report: `Full 100-Question Analysis & Solution Key available as PDF in the CBT portal.`
  };

  const status = {
    formSubmitSuccess: false,
    localSaved: false,
    message: ''
  };

  // 1. Try local Vite dev server endpoint to save complete archive
  try {
    const localRes = await fetch('/api/send-result-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        candidate,
        result,
        htmlReport: generateFullHtmlReport(candidate, result)
      })
    });
    if (localRes.ok) {
      status.localSaved = true;
    }
  } catch (err) {
    // ignore
  }

  // 2. Dispatch to FormSubmit with a strict 3-second timeout so UI never hangs
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    const data = await res.json().catch(() => ({}));

    if (res.ok && data.success !== 'false') {
      status.formSubmitSuccess = true;
      status.message = `Successfully dispatched to ${TARGET_EMAIL}!`;
      return { success: true, ...status };
    } else {
      status.message = 'Results archived on local disk. Use "Open in Gmail" or download PDF.';
      return { success: false, ...status };
    }
  } catch (err) {
    status.message = 'Results archived on local disk. Use "Open in Gmail" or download PDF.';
    return { success: false, ...status };
  }
}

/**
 * Opens Gmail Web Compose or default mail client directly with prefilled scorecard
 */
export function openMailClientWithScorecard(candidate, result) {
  const breakdown = result.subjectBreakdown || {};
  const phy = breakdown.phy || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'phy') : {}) || {};
  const chem = breakdown.chem || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'chem') : {}) || {};
  const bot = breakdown.bot || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'bot') : {}) || {};
  const zoo = breakdown.zoo || (Array.isArray(breakdown) ? breakdown.find(s => s.id === 'zoo') : {}) || {};

  const subject = `NEET Minor Test #03 Result - ${candidate.name} (Roll: ${candidate.rollNo}) | Score: ${result.totalScore}/${result.maxPossibleMarks}`;
  const body = 
`ALLEN PRE-MEDICAL ACHIEVER PHASE - II
MINOR TEST # 03 (EXAMINATION RESULT)

Candidate: ${candidate.name}
Roll Number: ${candidate.rollNo}
Submission Date: ${new Date().toLocaleString()}

=========================================
EXECUTIVE SCORECARD SUMMARY
=========================================
• Total Marks: ${result.totalScore} / ${result.maxPossibleMarks} (${((result.totalScore / (result.maxPossibleMarks || 400)) * 100).toFixed(1)}%)
• Estimated Percentile: ${result.estimatedPercentile} %ile
• Overall Accuracy: ${result.accuracy}%
• Total Correct (+4): ${result.totalCorrect}
• Total Incorrect (-1): ${result.totalIncorrect}
• Total Unattempted (0): ${result.totalUnattempted}
• Negative Marks Incurred: -${result.totalNegativeDeduction} Marks

=========================================
SUBJECT-WISE MARKS BREAKDOWN
=========================================
• Physics: ${phy.score ?? phy.marks ?? 0} / 100 Marks (Correct: ${phy.correct || 0}, Incorrect: ${phy.incorrect || 0})
• Chemistry: ${chem.score ?? chem.marks ?? 0} / 100 Marks (Correct: ${chem.correct || 0}, Incorrect: ${chem.incorrect || 0})
• Botany: ${bot.score ?? bot.marks ?? 0} / 100 Marks (Correct: ${bot.correct || 0}, Incorrect: ${bot.incorrect || 0})
• Zoology: ${zoo.score ?? zoo.marks ?? 0} / 100 Marks (Correct: ${zoo.correct || 0}, Incorrect: ${zoo.incorrect || 0})

* Note: Complete 100-Question Detailed Analysis PDF is available in the CBT portal.`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${encodedSubject}&body=${encodedBody}`;
  const win = window.open(gmailUrl, '_blank');
  if (!win) {
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
  }
}

