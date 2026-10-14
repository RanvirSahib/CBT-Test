const https = require('https');

const TARGET_EMAIL = 'ranvir.sahibadv88@gmail.com';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const candidate = data.candidate || {};
    const result = data.result || {};
    const breakdown = result.subjectBreakdown || {};

    const phy = breakdown.phy || {};
    const chem = breakdown.chem || {};
    const bot = breakdown.bot || {};
    const zoo = breakdown.zoo || {};

    // Build question summaries
    const qSummaries = (result.questionResults || []).map(q => {
      const userAns = q.userSelected ? `(${q.userSelected})` : '[UNATTEMPTED]';
      const correctAns = `(${q.correctAnswer})`;
      const verdict = q.status === 'correct' ? 'CORRECT (+4)' : q.status === 'incorrect' ? 'INCORRECT (-1)' : 'UNATTEMPTED (0)';
      return `Q${q.num}. [${q.subjectName} - ${q.subSecName}]
Question: ${q.question}
Candidate Answer: ${userAns}
Expected Correct: ${correctAns}
Verdict: ${verdict}
${q.explanation ? `Solution: ${q.explanation}` : ''}
--------------------------------------------------`;
    }).join('\n\n');

    const emailPayload = JSON.stringify({
      _subject: `NEET Minor Test #03 Result: ${candidate.name || 'Mansi'} (Roll: ${candidate.rollNo || '3804113256'}) - Score ${result.totalScore || 0}/${result.maxPossibleMarks || 400}`,
      Candidate_Name: candidate.name || 'Mansi',
      Roll_Number: candidate.rollNo || '3804113256',
      Test_Title: 'ALLEN PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03',
      Total_Score: `${result.totalScore || 0} / ${result.maxPossibleMarks || 400} Marks`,
      Accuracy_Percentage: `${result.accuracy || 0}%`,
      Estimated_Percentile: `${result.estimatedPercentile || 0} %ile`,
      Total_Correct: `${result.totalCorrect || 0} questions (+4 each)`,
      Total_Incorrect: `${result.totalIncorrect || 0} questions (-1 each)`,
      Total_Unattempted: `${result.totalUnattempted || 0} questions`,
      Physics_Score: `${phy.score || 0} / 100 Marks (Correct: ${phy.correct || 0}, Incorrect: ${phy.incorrect || 0})`,
      Chemistry_Score: `${chem.score || 0} / 100 Marks (Correct: ${chem.correct || 0}, Incorrect: ${chem.incorrect || 0})`,
      Botany_Score: `${bot.score || 0} / 100 Marks (Correct: ${bot.correct || 0}, Incorrect: ${bot.incorrect || 0})`,
      Zoology_Score: `${zoo.score || 0} / 100 Marks (Correct: ${zoo.correct || 0}, Incorrect: ${zoo.incorrect || 0})`,
      Questions_And_Answers: qSummaries
    });

    await new Promise((resolve, reject) => {
      const req = https.request(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Origin': 'https://neet-cbt-portal.com',
          'Referer': 'https://neet-cbt-portal.com/'
        }
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => resolve(body));
      });

      req.on('error', reject);
      req.write(emailPayload);
      req.end();
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Dispatched to email.' })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
