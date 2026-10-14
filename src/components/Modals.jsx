import React from 'react';

export default function Modals({
  activeModal,
  onClose,
  examData,
  userResponses,
  onConfirmSubmit,
  onStartExamFromModal
}) {
  if (!activeModal) return null;

  return (
    <div className="nta-modal-overlay" onClick={onClose}>
      <div className="nta-modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* ====================================================================
             1. INFORMATION BULLETIN MODAL
             ==================================================================== */}
        {activeModal === 'bulletin' && (
          <>
            <div className="nta-modal-header">
              <h3>NEET (UG) Information Bulletin & Scheme of Examination</h3>
              <button type="button" className="nta-modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="nta-modal-content">
              <h4 style={{ color: '#1b365d', marginBottom: '8px' }}>1. Pattern of the Test</h4>
              <p>The practice test pattern comprises 100 Questions (Duration: 100 Minutes, Total Marks: 400). Each of the 4 subjects (Physics, Chemistry, Botany, Zoology) consists of two sections:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
                <li><strong>Section A:</strong> 20 Questions (Compulsory)</li>
                <li><strong>Section B:</strong> 5 Questions (Analytical Problem Solving)</li>
              </ul>

              <h4 style={{ color: '#1b365d', marginBottom: '8px' }}>2. Marking Scheme</h4>
              <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
                <li>Correct answer: <strong style={{ color: '#16a34a' }}>Four marks (+4)</strong></li>
                <li>Incorrect option marked: <strong style={{ color: '#dc2626' }}>Minus one mark (-1)</strong></li>
                <li>Unanswered / Unattempted: <strong>Zero marks (0)</strong></li>
              </ul>

              <h4 style={{ color: '#1b365d', marginBottom: '8px' }}>3. Medium of Question Paper</h4>
              <p style={{ marginBottom: '16px' }}>
                Candidates can switch between English and Hindi live during the test. In case of any ambiguity in translation, the English version shall be treated as final.
              </p>

              <h4 style={{ color: '#1b365d', marginBottom: '8px' }}>4. Syllabus Scope</h4>
              <p>
                The syllabus notified by National Medical Commission (NMC) covers Core Physics, Chemistry, and Biology (Botany and Zoology) based on NCERT guidelines.
              </p>
            </div>
            <div className="nta-modal-footer">
              <button
                type="button"
                className="btn-cbt-action btn-nta-green"
                onClick={() => {
                  onClose();
                  if (onStartExamFromModal) onStartExamFromModal();
                }}
              >
                Take CBT Mock Test Now
              </button>
              <button type="button" className="btn-cbt-action btn-nta-white" onClick={onClose}>
                Close
              </button>
            </div>
          </>
        )}

        {/* ====================================================================
             2. NEET SYLLABUS CHECKLIST MODAL
             ==================================================================== */}
        {activeModal === 'syllabus' && (
          <>
            <div className="nta-modal-header">
              <h3>PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03 SYLLABUS</h3>
              <button type="button" className="nta-modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="nta-modal-content">
              {/* Slip Header Banner */}
              <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '6px', padding: '12px 16px', marginBottom: '18px' }}>
                <div style={{ fontWeight: 800, color: '#92400e', fontSize: '13px' }}>
                  ALLEN CAREER INSTITUTE | MINOR TEST # 03, TEST SLIP
                </div>
                <div style={{ fontSize: '12px', color: '#78350f', marginTop: '2px' }}>
                  Course: <strong>ACHIEVER Phase - II</strong> &nbsp;|&nbsp; Test Date: <strong>26.10.2026</strong> &nbsp;|&nbsp; Centres: Amritsar, Chandigarh & Mohali
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1b365d', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '10px', fontSize: '14px' }}>
                    ⚛️ Physics (25 Questions)
                  </h4>
                  <ul style={{ marginLeft: '18px', fontSize: '13px', lineHeight: '1.9', color: '#1e293b' }}>
                    <li><strong>Work Power Energy</strong> (Complete)</li>
                    <li><strong>Centre of Mass</strong></li>
                    <li><strong>Momentum & Collision</strong> (Complete)</li>
                  </ul>
                </div>

                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1b365d', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '10px', fontSize: '14px' }}>
                    🧪 Chemistry (25 Questions)
                  </h4>
                  <ul style={{ marginLeft: '18px', fontSize: '13px', lineHeight: '1.9', color: '#1e293b' }}>
                    <li><strong>IOC: Chemical Bonding</strong> (Remaining)</li>
                    <li><strong>PC: Liquid Solution</strong> (Remaining)</li>
                    <li><strong>PC: Chemical Equilibrium</strong> (Till law of mass action)</li>
                  </ul>
                </div>

                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1b365d', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '10px', fontSize: '14px' }}>
                    🌿 Botany (25 Questions)
                  </h4>
                  <ul style={{ marginLeft: '18px', fontSize: '13px', lineHeight: '1.9', color: '#1e293b' }}>
                    <li><strong>Morphology of flowering plant</strong> (Complete)</li>
                    <li><strong>Plant Anatomy</strong> (Till Classification of permanent tissue)</li>
                  </ul>
                </div>

                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1b365d', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '10px', fontSize: '14px' }}>
                    🧬 Zoology (25 Questions)
                  </h4>
                  <ul style={{ marginLeft: '18px', fontSize: '13px', lineHeight: '1.9', color: '#1e293b' }}>
                    <li><strong>Circulatory System</strong> (Complete)</li>
                    <li><strong>Excretory System</strong> (Till Types of Nephron)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nta-modal-footer">
              <button type="button" className="btn-cbt-action btn-nta-white" onClick={onClose}>
                Close
              </button>
            </div>
          </>
        )}

        {/* ====================================================================
             3. TEST PRACTICE CENTRES (TPC) MODAL
             ==================================================================== */}
        {activeModal === 'tpc' && (
          <>
            <div className="nta-modal-header">
              <h3>Test Practice Centres (TPC) - NTA Network</h3>
              <button type="button" className="nta-modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="nta-modal-content">
              <p style={{ marginBottom: '12px' }}>
                As per Ministry of Education guidelines and official NTA guidelines:
              </p>
              <p style={{ marginBottom: '12px' }}>
                NTA has established a countrywide network of Test Practice Centres (TPCs) across schools and engineering colleges equipped with modern computer infrastructure. Any student can use this facility free of charge on Saturdays and Sundays to practice using the computer mouse, virtual keypad, question palette, and reviewing answers.
              </p>
              <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', padding: '14px', borderRadius: '6px', marginTop: '16px' }}>
                <strong style={{ color: '#0369a1' }}>Your Current Active Practice Terminal:</strong>
                <div style={{ marginTop: '4px', color: '#0f172a' }}>
                  Node C01-N42 (Local Simulated Practice Environment)
                </div>
              </div>
            </div>
            <div className="nta-modal-footer">
              <button type="button" className="btn-cbt-action btn-nta-white" onClick={onClose}>
                Close
              </button>
            </div>
          </>
        )}

        {/* ====================================================================
             4. QUESTION PAPER MODAL (VIEW ALL QUESTIONS)
             ==================================================================== */}
        {activeModal === 'question-paper' && (
          <>
            <div className="nta-modal-header">
              <h3>Question Paper Archive (All Questions)</h3>
              <button type="button" className="nta-modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="nta-modal-content">
              {examData?.sections?.map((subject) => (
                <div key={subject.id} style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#1b365d', background: '#f1f5f9', padding: '8px 12px', borderRadius: '4px', marginBottom: '12px' }}>
                    {subject.name} ({subject.nameHi})
                  </h4>

                  {subject.subsections.map((subSec) => (
                    <div key={subSec.id} style={{ marginBottom: '16px' }}>
                      <h5 style={{ color: '#0284c7', marginBottom: '8px' }}>
                        {subSec.name}
                      </h5>

                      {subSec.questions.map((q) => (
                        <div key={q.id} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '10px' }}>
                          <div style={{ fontWeight: 600, marginBottom: '6px' }}>
                            Q{q.num}. {q.question}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '13px' }}>
                            {q.options.map((opt, oIdx) => (
                              <div key={oIdx} style={{ color: '#475569' }}>
                                ({['A', 'B', 'C', 'D'][oIdx]}) {opt}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="nta-modal-footer">
              <button type="button" className="btn-cbt-action btn-nta-white" onClick={onClose}>
                Close
              </button>
            </div>
          </>
        )}

        {/* ====================================================================
             5. EXAMINATION SUMMARY CONFIRMATION MODAL
             ==================================================================== */}
        {activeModal === 'submit-summary' && (
          <>
            <div className="nta-modal-header">
              <h3>Examination Summary</h3>
              <button type="button" className="nta-modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="nta-modal-content">
              <p style={{ marginBottom: '12px', fontWeight: 700 }}>
                Please review your section-wise status summary before confirming final submission:
              </p>

              <table className="nta-summary-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Section Name</th>
                    <th>Total Qs</th>
                    <th>Answered</th>
                    <th>Not Answered</th>
                    <th>Marked Review</th>
                    <th>Ans & Marked Review</th>
                    <th>Not Visited</th>
                  </tr>
                </thead>
                <tbody>
                  {examData?.sections?.map(subject =>
                    subject.subsections.map(subSec => {
                      let answered = 0;
                      let notAnswered = 0;
                      let markedReview = 0;
                      let ansMarkedReview = 0;
                      let notVisited = 0;

                      subSec.questions.forEach(q => {
                        const resp = userResponses[q.id];
                        const hasAns = resp && resp.selectedOption !== null && resp.selectedOption !== undefined;
                        const isMarked = resp && resp.markedForReview;

                        if (!resp) notVisited++;
                        else if (hasAns && isMarked) ansMarkedReview++;
                        else if (hasAns && !isMarked) answered++;
                        else if (!hasAns && isMarked) markedReview++;
                        else notAnswered++;
                      });

                      return (
                        <tr key={subSec.id}>
                          <td style={{ textAlign: 'left', fontWeight: 600 }}>{subSec.name}</td>
                          <td>{subSec.questions.length}</td>
                          <td style={{ color: '#16a34a', fontWeight: 700 }}>{answered}</td>
                          <td style={{ color: '#dc2626' }}>{notAnswered}</td>
                          <td style={{ color: '#9333ea' }}>{markedReview}</td>
                          <td style={{ color: '#9333ea', fontWeight: 700 }}>{ansMarkedReview}</td>
                          <td>{notVisited}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>

              <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '10px 14px', borderRadius: '4px', fontSize: '12.5px', color: '#92400e', marginTop: '14px' }}>
                ⚠️ <strong>Important:</strong> Are you sure you wish to submit the examination? Once submitted, answers cannot be modified and your performance scorecard will be generated.
              </div>
            </div>
            <div className="nta-modal-footer">
              <button
                type="button"
                className="btn-cbt-action btn-nta-white"
                onClick={onClose}
              >
                No (Resume Test)
              </button>
              <button
                type="button"
                className="btn-cbt-action btn-nta-green"
                onClick={() => {
                  onClose();
                  onConfirmSubmit();
                }}
              >
                Yes (Submit Test)
              </button>
            </div>
          </>
        )}

        {/* ====================================================================
             6. CONTACT US MODAL
             ==================================================================== */}
        {activeModal === 'contact' && (
          <>
            <div className="nta-modal-header">
              <h3>National Testing Agency - Contact & Support</h3>
              <button type="button" className="nta-modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="nta-modal-content">
              <p><strong>NTA Helpline Numbers:</strong> 011-40759000 / 011-69227700</p>
              <p style={{ marginTop: '8px' }}><strong>Official Helpdesk Email:</strong> neet@nta.ac.in</p>
              <p style={{ marginTop: '8px' }}>
                <strong>Corporate Office:</strong><br />
                National Testing Agency, First Floor, NSIC-MDBP Building, Okhla Industrial Estate, New Delhi, Delhi 110020
              </p>
            </div>
            <div className="nta-modal-footer">
              <button type="button" className="btn-cbt-action btn-nta-white" onClick={onClose}>
                Close
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
