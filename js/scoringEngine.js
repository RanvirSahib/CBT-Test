/**
 * NEET Scoring Engine
 * Computes official +4 / -1 evaluation with Section B attempt constraints
 */

const ScoringEngine = {
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

          // Check Section B maximum attempts limit (e.g. 10 out of 15)
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

          // In NEET: each graded question carries +4 marks
          if (!isSectionB || attemptsInSectionB <= subSec.maxAttempt) {
            subjMax += 4;
          }

          if (isValidForGrading) {
            subjAttempted++;
            totalAttempted++;

            if (response.selectedOption === q.correct) {
              subjMarks += 4;
              totalMarks += 4;
              subjCorrect++;
              totalCorrect++;
            } else {
              subjMarks -= 1;
              totalMarks -= 1;
              subjIncorrect++;
              totalIncorrect++;
              totalNegativeDeduction += 1;
            }
          } else if (!hasAnswer) {
            totalUnattempted++;
          }
        });
      });

      maxPossibleMarks += subjMax;

      subjectBreakdown[subject.id] = {
        name: subject.name,
        score: subjMarks,
        maxMarks: subjMax,
        correct: subjCorrect,
        incorrect: subjIncorrect,
        attempted: subjAttempted,
        totalQuestions: subjQuestionsCount,
        accuracy: subjAttempted > 0 ? ((subjCorrect / subjAttempted) * 100).toFixed(1) : 0
      };
    });

    const overallAccuracy = totalAttempted > 0 ? ((totalCorrect / totalAttempted) * 100).toFixed(1) : 0;

    return {
      totalScore: totalMarks,
      maxPossibleMarks: maxPossibleMarks,
      totalAttempted: totalAttempted,
      totalCorrect: totalCorrect,
      totalIncorrect: totalIncorrect,
      totalUnattempted: totalUnattempted,
      totalNegativeDeduction: totalNegativeDeduction,
      accuracy: overallAccuracy,
      subjectBreakdown: subjectBreakdown
    };
  },

  // Generates status counts table for the confirmation modal
  getSectionStatusCounts: function(examData, userResponses, visitedQuestions) {
    const countsPerSubSec = [];

    examData.sections.forEach(sec => {
      sec.subsections.forEach(sub => {
        let notVisited = 0;
        let notAnswered = 0;
        let answered = 0;
        let markedReview = 0;
        let answeredMarkedReview = 0;

        sub.questions.forEach(q => {
          const resp = userResponses[q.id];
          const visited = visitedQuestions.has(q.id);
          const hasAnswer = resp && resp.selectedOption !== null && resp.selectedOption !== undefined;
          const isMarked = resp && resp.markedForReview;

          if (!visited && !hasAnswer && !isMarked) {
            notVisited++;
          } else if (hasAnswer && isMarked) {
            answeredMarkedReview++;
          } else if (hasAnswer && !isMarked) {
            answered++;
          } else if (!hasAnswer && isMarked) {
            markedReview++;
          } else {
            notAnswered++;
          }
        });

        countsPerSubSec.push({
          sectionName: sub.name,
          total: sub.questions.length,
          answered: answered,
          notAnswered: notAnswered,
          markedReview: markedReview,
          answeredMarkedReview: answeredMarkedReview,
          notVisited: notVisited
        });
      });
    });

    return countsPerSubSec;
  }
};
