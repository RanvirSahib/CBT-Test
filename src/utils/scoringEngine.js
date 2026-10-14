/**
 * NEET Scoring Engine
 * Computes official +4 / -1 evaluation with Section B attempt constraints
 */

export const ScoringEngine = {
  // Evaluates candidate's state and answers against answer key
  evaluateTest: function(examData, userResponses) {
    let totalMarks = 0;
    let maxPossibleMarks = 0;
    let totalAttempted = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalUnattempted = 0;
    let totalNegativeDeduction = 0;

    const subjectBreakdown = {};
    const questionResults = [];

    examData.sections.forEach(subject => {
      let subjMarks = 0;
      let subjMax = 0;
      let subjCorrect = 0;
      let subjIncorrect = 0;
      let subjAttempted = 0;
      let subjQuestionsCount = 0;

      subject.subsections.forEach(subSec => {
        const isSectionB = subSec.id.includes("sec_b");
        let attemptsInSectionB = 0;

        subSec.questions.forEach(q => {
          subjQuestionsCount++;
          const response = userResponses[q.id];
          const hasAnswer = response && response.selectedOption !== null && response.selectedOption !== undefined;

          // Check Section B maximum attempts limit (e.g. 10 out of 15 or 1 out of 2)
          let isValidForGrading = false;
          if (hasAnswer) {
            if (isSectionB) {
              if (attemptsInSectionB < subSec.maxAttempt) {
                isValidForGrading = true;
                attemptsInSectionB++;
              } else {
                isValidForGrading = false; // Exceeded Section B quota
              }
            } else {
              isValidForGrading = true;
            }
          }

          // Each valid graded question carries +4 max marks
          if (!isSectionB || attemptsInSectionB <= subSec.maxAttempt) {
            subjMax += 4;
          }

          let qStatus = "unattempted"; // 'correct' | 'incorrect' | 'unattempted' | 'exceeded-quota'
          let marksAwarded = 0;

          if (isValidForGrading) {
            subjAttempted++;
            totalAttempted++;

            if (response.selectedOption === q.correct) {
              subjMarks += 4;
              totalMarks += 4;
              subjCorrect++;
              totalCorrect++;
              marksAwarded = 4;
              qStatus = "correct";
            } else {
              subjMarks -= 1;
              totalMarks -= 1;
              subjIncorrect++;
              totalIncorrect++;
              totalNegativeDeduction += 1;
              marksAwarded = -1;
              qStatus = "incorrect";
            }
          } else if (hasAnswer && isSectionB) {
            qStatus = "exceeded-quota";
          } else {
            totalUnattempted++;
          }

          questionResults.push({
            id: q.id,
            num: q.num,
            subjectId: subject.id,
            subjectName: subject.name,
            subSecId: subSec.id,
            subSecName: subSec.name,
            question: q.question,
            questionHi: q.questionHi,
            options: q.options,
            optionsHi: q.optionsHi,
            userSelected: response ? response.selectedOption : null,
            correctAnswer: q.correct,
            status: qStatus,
            marksAwarded: marksAwarded,
            explanation: q.explanation,
            explanationHi: q.explanationHi
          });
        });
      });

      maxPossibleMarks += subjMax;

      subjectBreakdown[subject.id] = {
        name: subject.name,
        nameHi: subject.nameHi,
        score: subjMarks,
        maxMarks: subjMax,
        correct: subjCorrect,
        incorrect: subjIncorrect,
        attempted: subjAttempted,
        totalQuestions: subjQuestionsCount,
        accuracy: subjAttempted > 0 ? ((subjCorrect / subjAttempted) * 100).toFixed(1) : "0.0"
      };
    });

    const overallAccuracy = totalAttempted > 0 ? ((totalCorrect / totalAttempted) * 100).toFixed(1) : "0.0";
    
    // Percentile estimation based on normalized marks
    const normalizedPercent = Math.max(0, Math.min(100, (totalMarks / (maxPossibleMarks || 1)) * 100));
    const estimatedPercentile = (Math.min(99.98, Math.max(10.0, 50 + (normalizedPercent - 50) * 0.98))).toFixed(2);

    return {
      totalScore: totalMarks,
      maxPossibleMarks: maxPossibleMarks,
      totalAttempted: totalAttempted,
      totalCorrect: totalCorrect,
      totalIncorrect: totalIncorrect,
      totalUnattempted: totalUnattempted,
      totalNegativeDeduction: totalNegativeDeduction,
      accuracy: overallAccuracy,
      estimatedPercentile: estimatedPercentile,
      subjectBreakdown: subjectBreakdown,
      questionResults: questionResults
    };
  }
};
