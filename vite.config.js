import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import https from 'https'

const TARGET_EMAIL = 'ranvir.sahibadv88@gmail.com'

// Custom Vite plugin to handle test results archiving and real email dispatch
function resultArchiverPlugin() {
  return {
    name: 'result-archiver',
    configureServer(server) {
      server.middlewares.use('/api/send-result-email', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const resultsDir = path.resolve(process.cwd(), 'test-results');
            if (!fs.existsSync(resultsDir)) {
              fs.mkdirSync(resultsDir, { recursive: true });
            }

            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const safeCandidateName = (data.candidate?.name || 'Mansi').replace(/[^a-zA-Z0-9_-]/g, '_');
            const rollNo = data.candidate?.rollNo || '3804113256';

            // 1. Save JSON payload locally
            const jsonPath = path.join(resultsDir, `${safeCandidateName}_${rollNo}_${timestamp}.json`);
            fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');

            // 2. Save HTML report locally if provided
            if (data.htmlReport) {
              const htmlPath = path.join(resultsDir, `${safeCandidateName}_${rollNo}_${timestamp}.html`);
              fs.writeFileSync(htmlPath, data.htmlReport, 'utf-8');
            }

            console.log(`[Exam Archive] Test result saved locally to ${resultsDir}`);

            // 3. Dispatch directly to user's email via FormSubmit server-side (avoids browser localhost blocking)
            const result = data.result || {};
            const candidate = data.candidate || {};
            const breakdown = result.subjectBreakdown || {};

            const phy = breakdown.phy || {};
            const chem = breakdown.chem || {};
            const bot = breakdown.bot || {};
            const zoo = breakdown.zoo || {};

            // Build question-by-question text summary
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

            const emailReq = https.request(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Origin': 'https://neet-cbt-portal.com',
                'Referer': 'https://neet-cbt-portal.com/'
              }
            }, (emailRes) => {
              let resBody = '';
              emailRes.on('data', chunk => resBody += chunk);
              emailRes.on('end', () => {
                console.log(`[Email Dispatch] Server-side FormSubmit response: ${resBody}`);
              });
            });

            emailReq.on('error', (e) => {
              console.error('[Email Dispatch Error]', e.message);
            });

            emailReq.write(emailPayload);
            emailReq.end();

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, message: 'Result archived and dispatched to email.' }));
          } catch (err) {
            console.error('[Exam Archive Error]', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resultArchiverPlugin()],
})
