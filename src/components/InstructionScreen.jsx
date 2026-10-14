import React, { useState, useEffect } from 'react';

export default function InstructionScreen({ onBack, onStartExam }) {
  const [lang, setLang] = useState('en');
  const [declared, setDeclared] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement));

  const durationText = '100 minutes (1 hour 40 minutes)';

  const triggerFullscreen = () => {
    if (!document.fullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch((err) => {
          console.warn('Fullscreen auto-request prevented by browser:', err);
        });
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    // Attempt automatic fullscreen as soon as user arrives on Instructions page
    triggerFullscreen();

    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  const handleContainerClick = () => {
    if (!isFullscreen) {
      triggerFullscreen();
    }
  };

  const handleProceedClick = () => {
    triggerFullscreen();
    onStartExam();
  };

  return (
    <div className="instruction-screen-wrapper" onClick={handleContainerClick}>
      <div className="instruction-container">
        {/* Instruction Top Bar */}
        <div className="instruction-top-bar">
          <h2>{lang === 'en' ? 'General Instructions' : 'सामान्य निर्देश'}</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {!isFullscreen && (
              <button
                type="button"
                className="btn-cbt-action btn-nta-blue"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerFullscreen();
                }}
                style={{ padding: '4px 10px', fontSize: '11.5px', display: 'flex', alignItems: 'center', gap: '4px' }}
                title="Exam requirement: click to enter fullscreen mode"
              >
                <span>⛶</span> Enter Fullscreen
              </button>
            )}

            <div className="instruction-lang-selector">
              <label htmlFor="inst-lang">{lang === 'en' ? 'View in:' : 'भाषा चुनें:'}</label>
              <select
                id="inst-lang"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scrollable Instruction Body */}
        <div className="instruction-body-scroll">
          {lang === 'en' ? (
            <>
              <h3>Please read the instructions carefully</h3>
              <p><strong>General Examination Guidelines:</strong></p>
              <ol>
                <li>Total duration of examination is <strong>{durationText}</strong> for <strong>100 Questions</strong>.</li>
                <li>The test consists of 4 subjects: <strong>Physics (25 Qs)</strong>, <strong>Chemistry (25 Qs)</strong>, <strong>Botany (25 Qs)</strong>, and <strong>Zoology (25 Qs)</strong>. Each subject contains Section A (20 Qs) and Section B (5 Qs).</li>
                <li>The server clock manages the test. The countdown timer in the top-right corner of the screen displays the remaining time available for you to complete the test. When the timer reaches zero, the examination will end automatically. You will not be required to manually submit your test when time runs out.</li>
                <li>The Question Palette displayed on the right side of the screen shows the status of each question using the official NTA symbols:</li>
              </ol>

              {/* Exact Official Symbols Table */}
              <table className="legend-explain-table">
                <tbody>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-not-visited">99</span>
                    </td>
                    <td>You have <strong>not visited</strong> the question yet.</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-not-answered">02</span>
                    </td>
                    <td>You have <strong>not answered</strong> the question.</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-answered">03</span>
                    </td>
                    <td>You have <strong>answered</strong> the question.</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-marked-review">00</span>
                    </td>
                    <td>You have <strong>NOT answered</strong> the question, but have marked the question for review.</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-ans-marked-review">00</span>
                    </td>
                    <td>The question(s) <strong>Answered and Marked for Review</strong> will be considered for evaluation.</td>
                  </tr>
                </tbody>
              </table>

              <h3>Navigating to a Question:</h3>
              <ol>
                <li>To answer a question, click on the question number in the Question Palette at the right of your screen to jump directly to that question. Note that clicking a palette number directly does NOT save your current response.</li>
                <li>Click on <strong>Save & Next</strong> to save your answer for the current question and proceed to the next question.</li>
                <li>Click on <strong>Mark for Review & Next</strong> to mark the question for review without answering and proceed.</li>
                <li>Click on <strong>Save & Mark For Review</strong> to save your chosen answer and mark it for review.</li>
              </ol>

              <h3>Answering a Question:</h3>
              <ol>
                <li>To select your answer, click on the option button or anywhere on the option item. You can also use keyboard shortcuts <strong>1, 2, 3, 4</strong> or <strong>A, B, C, D</strong>.</li>
                <li>To change your selected response, click on another option.</li>
                <li>To clear your selected response, click on the <strong>Clear Response</strong> button.</li>
                <li>To save your answer, you MUST click on the <strong>Save & Next</strong> button.</li>
                <li>NEET Marking Scheme: <strong>+4 Marks</strong> for each correct response, <strong>-1 Mark</strong> for incorrect response, and <strong>0 Marks</strong> for unattempted questions. Maximum score: <strong>400 Marks</strong>.</li>
              </ol>
            </>
          ) : (
            <>
              <h3>कृपया निर्देशों को ध्यानपूर्वक पढ़ें</h3>
              <p><strong>सामान्य परीक्षा निर्देश:</strong></p>
              <ol>
                <li>परीक्षा की कुल अवधि <strong>100 मिनट</strong> है (कुल <strong>100 प्रश्न</strong>)।</li>
                <li>परीक्षा में 4 विषय हैं: <strong>भौतिक विज्ञान (25 प्रश्न)</strong>, <strong>रसायन विज्ञान (25 प्रश्न)</strong>, <strong>वनस्पति विज्ञान (25 प्रश्न)</strong>, तथा <strong>प्राणी विज्ञान (25 प्रश्न)</strong>। प्रत्येक विषय में खंड A (20 प्रश्न) तथा खंड B (5 प्रश्न) हैं।</li>
                <li>सर्वर की घड़ी के अनुसार समय की गणना की जाएगी। स्क्रीन के शीर्ष दाएं कोने में काउंटडाउन टाइमर शेष उपलब्ध समय दिखाएगा। समय समाप्त होने पर परीक्षा स्वतः समाप्त हो जाएगी।</li>
                <li>स्क्रीन के दाईं ओर प्रश्न पैलेट प्रत्येक प्रश्न की स्थिति को आधिकारिक NTA प्रतीकों के माध्यम से प्रदर्शित करता है:</li>
              </ol>

              {/* Exact Official Symbols Table in Hindi */}
              <table className="legend-explain-table">
                <tbody>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-not-visited">99</span>
                    </td>
                    <td>आप अभी तक प्रश्न पर <strong>नहीं गए हैं</strong>।</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-not-answered">02</span>
                    </td>
                    <td>आपने प्रश्न का <strong>उत्तर नहीं दिया है</strong>।</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-answered">03</span>
                    </td>
                    <td>आप प्रश्न का <strong>उत्तर दे चुके हैं</strong>।</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-marked-review">00</span>
                    </td>
                    <td>आपने प्रश्न का उत्तर <strong>नहीं दिया है</strong>, परंतु समीक्षा के लिए चिह्नित किया है।</td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}>
                      <span className="nta-shape-badge badge-ans-marked-review">00</span>
                    </td>
                    <td>वे प्रश्न जिनका <strong>उत्तर दिया गया है और समीक्षा हेतु चिह्नित है</strong>, मूल्यांकन में गिने जाएंगे।</td>
                  </tr>
                </tbody>
              </table>

              <h3>प्रश्नों पर नेविगेशन:</h3>
              <ol>
                <li>किसी प्रश्न का उत्तर देने के लिए प्रश्न पैलेट में उस प्रश्न संख्या पर क्लिक करें।</li>
                <li>वर्तमान प्रश्न के उत्तर को सुरक्षित करने और अगले प्रश्न पर जाने के लिए <strong>Save & Next</strong> पर क्लिक करें।</li>
                <li>प्रश्न का उत्तर दिए बिना समीक्षा हेतु चिह्नित करने के लिए <strong>Mark for Review & Next</strong> पर क्लिक करें।</li>
                <li>NEET अंकन योजना: प्रत्येक सही उत्तर के लिए <strong>+4 अंक</strong>, गलत उत्तर के लिए <strong>-1 अंक</strong>, और अनुत्तरित प्रश्नों के लिए <strong>0 अंक</strong>। कुल अंक: <strong>400 अंक</strong>।</li>
              </ol>
            </>
          )}
        </div>

        {/* Declaration Undertaking Box */}
        <div className="instruction-declaration-box">
          <label>
            <input
              type="checkbox"
              checked={declared}
              onChange={(e) => {
                setDeclared(e.target.checked);
                if (!isFullscreen) triggerFullscreen();
              }}
            />
            <span>
              {lang === 'en'
                ? 'I have read and understood all the instructions. All computer hardware allotted to me is in proper working condition. I declare that I am not in possession of any prohibited electronic devices or cheating materials.'
                : 'मैंने सभी निर्देशों को पढ़ और समझ लिया है। मुझे आवंटित कंप्यूटर हार्डवेयर सही स्थिति में है। मैं घोषणा करता/करती हूँ कि मेरे पास कोई भी प्रतिबंधित इलेक्ट्रॉनिक उपकरण नहीं है।'}
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="instruction-footer-buttons">
          <button
            type="button"
            className="btn-cbt-action btn-nta-white"
            onClick={onBack}
          >
            « {lang === 'en' ? 'Back' : 'पीछे'}
          </button>
          <button
            type="button"
            className="btn-nta-proceed-exam"
            disabled={!declared}
            onClick={handleProceedClick}
          >
            {lang === 'en' ? 'PROCEED TO TEST' : 'परीक्षा प्रारंभ करें'} »
          </button>
        </div>
      </div>
    </div>
  );
}
