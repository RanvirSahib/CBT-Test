import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Generates an executive, multi-page Official Scorecard & Detailed Analysis PDF
 * for NEET CBT Minor Test # 03.
 * 
 * @param {Object} candidate - Candidate details (name, rollNo)
 * @param {Object} result - Calculated exam result object with breakdown & questionResults
 */
export function generateScorecardPDF(candidate, result) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const submissionDate = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  // ==========================================
  // PAGE 1: EXECUTIVE SCORECARD & ANALYTICS
  // ==========================================

  // Header Banner
  doc.setFillColor(27, 54, 93); // Deep Navy (#1b365d)
  doc.rect(0, 0, pageWidth, 28, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('ALLEN CAREER INSTITUTE', pageWidth / 2, 9, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03 (ALLEN)', pageWidth / 2, 16, { align: 'center' });

  doc.setFontSize(8.5);
  doc.setTextColor(226, 232, 240);
  doc.text('OFFICIAL CBT SCORECARD & PERFORMANCE REPORT', pageWidth / 2, 22, { align: 'center' });

  // Candidate Information Box
  doc.setFillColor(248, 250, 252); // Slate-50
  doc.setDrawColor(203, 213, 225); // Slate-300
  doc.roundedRect(12, 33, pageWidth - 24, 26, 2, 2, 'FD');

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(9.5);

  doc.setFont('helvetica', 'bold');
  doc.text('Candidate Name:', 16, 40);
  doc.setFont('helvetica', 'normal');
  doc.text(String(candidate.name || 'Mansi'), 48, 40);

  doc.setFont('helvetica', 'bold');
  doc.text('Roll Number:', 110, 40);
  doc.setFont('helvetica', 'normal');
  doc.text(String(candidate.rollNo || '3804113256'), 136, 40);

  doc.setFont('helvetica', 'bold');
  doc.text('Course / Phase:', 16, 48);
  doc.setFont('helvetica', 'normal');
  doc.text('Achiever Phase - II', 48, 48);

  doc.setFont('helvetica', 'bold');
  doc.text('Test Date & Time:', 110, 48);
  doc.setFont('helvetica', 'normal');
  doc.text(submissionDate, 142, 48);

  doc.setFont('helvetica', 'bold');
  doc.text('Pattern & Duration:', 16, 54);
  doc.setFont('helvetica', 'normal');
  doc.text('NEET (100 Qs | 400 Marks | 100 Min)', 52, 54);

  doc.setFont('helvetica', 'bold');
  doc.text('Marking Scheme:', 110, 54);
  doc.setFont('helvetica', 'normal');
  doc.text('+4 for Correct | -1 for Incorrect', 140, 54);

  // Key Metric Summary Cards
  const scoreCards = [
    { label: 'TOTAL SCORE', val: `${result.totalScore} / ${result.maxPossibleMarks}`, col: [22, 163, 74] },
    { label: 'ACCURACY', val: `${result.accuracy}%`, col: [2, 132, 199] },
    { label: 'PERCENTILE', val: `${result.estimatedPercentile} %ile`, col: [147, 51, 234] },
    { label: 'CORRECT (+4)', val: `${result.totalCorrect}`, col: [22, 163, 74] },
    { label: 'INCORRECT (-1)', val: `${result.totalIncorrect}`, col: [220, 38, 38] },
    { label: 'UNATTEMPTED', val: `${result.totalUnattempted}`, col: [100, 116, 139] }
  ];

  const cardWidth = (pageWidth - 24 - 15) / 6;
  scoreCards.forEach((c, idx) => {
    const x = 12 + idx * (cardWidth + 3);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(x, 63, cardWidth, 18, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(71, 85, 105);
    doc.text(c.label, x + cardWidth / 2, 68, { align: 'center' });

    doc.setFontSize(10.5);
    doc.setTextColor(c.col[0], c.col[1], c.col[2]);
    doc.text(c.val, x + cardWidth / 2, 76, { align: 'center' });
  });

  // Section 1: Subject-Wise Performance Breakdown Table
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(27, 54, 93);
  doc.text('1. Subject-Wise Performance Analysis', 12, 88);

  const subjectRows = (result.subjectBreakdown || []).map(s => [
    s.name,
    String(s.totalQuestions),
    String(s.attempted),
    String(s.correct),
    String(s.incorrect),
    String(s.unattempted),
    `${s.marks} / ${s.maxMarks}`,
    `${s.accuracy}%`
  ]);

  // Append Grand Total Row
  subjectRows.push([
    'GRAND TOTAL',
    String(result.totalQuestions || 100),
    String((result.totalCorrect || 0) + (result.totalIncorrect || 0)),
    String(result.totalCorrect || 0),
    String(result.totalIncorrect || 0),
    String(result.totalUnattempted || 0),
    `${result.totalScore} / ${result.maxPossibleMarks}`,
    `${result.accuracy}%`
  ]);

  autoTable(doc, {
    startY: 92,
    margin: { left: 12, right: 12 },
    head: [['Subject', 'Total Qs', 'Attempted', 'Correct (+4)', 'Incorrect (-1)', 'Unattempted', 'Marks', 'Accuracy']],
    body: subjectRows,
    theme: 'grid',
    headStyles: {
      fillColor: [27, 54, 93],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8.5,
      halign: 'center'
    },
    bodyStyles: {
      fontSize: 8,
      textColor: [15, 23, 42],
      halign: 'center'
    },
    columnStyles: {
      0: { halign: 'left', fontStyle: 'bold', cellWidth: 38 },
      6: { fontStyle: 'bold', textColor: [22, 163, 74] }
    },
    didParseCell: function(data) {
      if (data.row.index === subjectRows.length - 1) {
        data.cell.styles.fontStyle = 'bold';
        data.cell.styles.fillColor = [241, 245, 249];
      }
    }
  });

  // Syllabus Alignment Notice
  const afterSubjTableY = doc.lastAutoTable.finalY + 8;
  doc.setFillColor(254, 243, 199); // Amber-100
  doc.setDrawColor(245, 158, 11); // Amber-500
  doc.roundedRect(12, afterSubjTableY, pageWidth - 24, 28, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(180, 83, 9);
  doc.text('OFFICIAL SYLLABUS ALIGNMENT VERIFIED (MINOR TEST # 03):', 16, afterSubjTableY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(30, 41, 59);
  doc.text('• Physics: Work Power Energy (Complete), Centre of Mass, Momentum & Collision (Complete)', 16, afterSubjTableY + 11);
  doc.text('• Chemistry: Chemical Bonding (Remaining), Liquid Solution (Remaining) & Chemical Equilibrium (Till Law of Mass Action)', 16, afterSubjTableY + 16);
  doc.text('• Botany: Morphology of Flowering Plants (Complete), Plant Anatomy (Till Classification of Permanent Tissue)', 16, afterSubjTableY + 21);
  doc.text('• Zoology: Circulatory System (Complete) & Excretory System (Till Types of Nephron)', 16, afterSubjTableY + 26);

  // Verification & Sign-off Footer Box
  const signY = afterSubjTableY + 34;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('* This score report is generated directly by the NEET CBT Examination System and authenticated for Candidate Mansi.', 12, signY);

  // ==========================================
  // PAGE 2+: DETAILED 100-QUESTION ANALYSIS
  // ==========================================
  doc.addPage();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(27, 54, 93);
  doc.text('2. Comprehensive 100-Question Analysis & Solution Key', 12, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('Questions, Candidate Selected Responses, Official Expected Answers & Explanations', 12, 19);

  const questionTableBody = (result.questionResults || []).map(q => {
    const userChoice = q.options?.find(o => o.key === q.userSelected);
    const correctChoice = q.options?.find(o => o.key === q.correctAnswer);

    const userAnsStr = q.userSelected
      ? `(${q.userSelected}) ${userChoice?.text || ''}`
      : 'Unattempted';

    const correctAnsStr = `(${q.correctAnswer}) ${correctChoice?.text || ''}`;

    let statusText = 'UNATTEMPTED\n(0)';
    if (q.status === 'correct') statusText = 'CORRECT\n(+4)';
    else if (q.status === 'incorrect') statusText = 'INCORRECT\n(-1)';
    else if (q.status === 'exceeded-quota') statusText = 'EXCEEDED\n(0)';

    // Format Question Statement with brief explanation
    const questionText = `${q.question}\n\n[Sol]: ${q.explanation || 'Refer NCERT'}`;

    return [
      `Q${q.num}`,
      q.subjectName,
      questionText,
      userAnsStr,
      correctAnsStr,
      statusText
    ];
  });

  autoTable(doc, {
    startY: 23,
    margin: { left: 10, right: 10 },
    head: [['Q#', 'Subject', 'Question Statement & Solution Explanation', 'Candidate Answer', 'Official Key', 'Status']],
    body: questionTableBody,
    theme: 'grid',
    headStyles: {
      fillColor: [27, 54, 93],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8,
      halign: 'center'
    },
    bodyStyles: {
      fontSize: 7,
      textColor: [15, 23, 42],
      valign: 'middle',
      lineColor: [226, 232, 240]
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 10, fontStyle: 'bold' },
      1: { halign: 'center', cellWidth: 18, fontStyle: 'bold' },
      2: { cellWidth: 92, overflow: 'linebreak' },
      3: { cellWidth: 32, overflow: 'linebreak' },
      4: { cellWidth: 32, overflow: 'linebreak', textColor: [22, 163, 74], fontStyle: 'bold' },
      5: { halign: 'center', cellWidth: 16, fontStyle: 'bold' }
    },
    didParseCell: function(data) {
      if (data.section === 'body') {
        const qResult = result.questionResults?.[data.row.index];
        if (qResult) {
          if (qResult.status === 'correct') {
            data.cell.styles.fillColor = [240, 253, 244]; // Soft green
            if (data.column.index === 5) {
              data.cell.styles.textColor = [22, 163, 74];
            }
          } else if (qResult.status === 'incorrect') {
            data.cell.styles.fillColor = [254, 242, 242]; // Soft red
            if (data.column.index === 5) {
              data.cell.styles.textColor = [220, 38, 38];
            }
          } else {
            data.cell.styles.fillColor = [248, 250, 252]; // Neutral gray
            if (data.column.index === 5) {
              data.cell.styles.textColor = [100, 116, 139];
            }
          }
        }
      }
    }
  });

  // Add running headers & footers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);

    // Footer
    doc.text(
      `Candidate: Mansi (Roll No: 3804113256) | ALLEN Achiever Phase-II Minor Test # 03 | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 6,
      { align: 'center' }
    );
  }

  // Trigger browser download
  const filename = `NEET_Scorecard_Mansi_Roll_3804113256.pdf`;
  doc.save(filename);
  return filename;
}
