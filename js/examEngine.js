/**
 * NTA CBT Exam Engine
 * Handles navigation, timer, question states, and action flows
 */

class ExamEngine {
  constructor(examData) {
    this.examData = examData;
    this.currentSubjectIdx = 0;
    this.currentSubSecIdx = 0;
    this.currentQIdx = 0;

    // Responses: { [qId]: { selectedOption: number | null, markedForReview: boolean } }
    this.userResponses = {};
    // Visited question IDs
    this.visitedQuestions = new Set();

    // Timer setup
    this.totalSeconds = examData.durationMinutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.timerInterval = null;

    // Callbacks
    this.onStateChange = null;
    this.onTimerTick = null;
    this.onTimerExpired = null;

    // Mark initial question visited
    const firstQ = this.getCurrentQuestion();
    if (firstQ) {
      this.visitedQuestions.add(firstQ.id);
    }
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;

      if (this.onTimerTick) {
        this.onTimerTick(this.remainingSeconds);
      }

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        if (this.onTimerExpired) {
          this.onTimerExpired();
        }
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getCurrentSubject() {
    return this.examData.sections[this.currentSubjectIdx];
  }

  getCurrentSubsection() {
    const subj = this.getCurrentSubject();
    return subj ? subj.subsections[this.currentSubSecIdx] : null;
  }

  getCurrentQuestion() {
    const subSec = this.getCurrentSubsection();
    return subSec ? subSec.questions[this.currentQIdx] : null;
  }

  getResponse(questionId) {
    return this.userResponses[questionId] || { selectedOption: null, markedForReview: false };
  }

  // Returns exact status: 'not-visited' | 'not-answered' | 'answered' | 'marked-review' | 'answered-marked-review'
  getQuestionStatus(questionId) {
    const resp = this.userResponses[questionId];
    const visited = this.visitedQuestions.has(questionId);
    const hasAnswer = resp && resp.selectedOption !== null && resp.selectedOption !== undefined;
    const isMarked = resp && resp.markedForReview;

    if (!visited && !hasAnswer && !isMarked) {
      return 'not-visited';
    }
    if (hasAnswer && isMarked) {
      return 'answered-marked-review';
    }
    if (hasAnswer && !isMarked) {
      return 'answered';
    }
    if (!hasAnswer && isMarked) {
      return 'marked-review';
    }
    return 'not-answered';
  }

  // Temporary selection in UI
  tempSelectOption(optionIndex) {
    const curQ = this.getCurrentQuestion();
    if (!curQ) return;
    this.tempSelection = optionIndex;
  }

  // Save & Next Action
  saveAndNext(selectedOption) {
    const curQ = this.getCurrentQuestion();
    if (!curQ) return;

    if (selectedOption !== null && selectedOption !== undefined) {
      this.userResponses[curQ.id] = {
        selectedOption: selectedOption,
        markedForReview: false
      };
    }

    this.advanceToNextQuestion();
  }

  // Save & Mark for Review Action
  saveAndMarkForReview(selectedOption) {
    const curQ = this.getCurrentQuestion();
    if (!curQ) return;

    if (selectedOption !== null && selectedOption !== undefined) {
      this.userResponses[curQ.id] = {
        selectedOption: selectedOption,
        markedForReview: true
      };
    } else {
      // If no option selected, marks as marked for review
      this.userResponses[curQ.id] = {
        selectedOption: null,
        markedForReview: true
      };
    }

    this.advanceToNextQuestion();
  }

  // Mark for Review & Next (without answering)
  markForReviewAndNext() {
    const curQ = this.getCurrentQuestion();
    if (!curQ) return;

    this.userResponses[curQ.id] = {
      selectedOption: null,
      markedForReview: true
    };

    this.advanceToNextQuestion();
  }

  // Clear Response
  clearResponse() {
    const curQ = this.getCurrentQuestion();
    if (!curQ) return;

    if (this.userResponses[curQ.id]) {
      this.userResponses[curQ.id].selectedOption = null;
      this.userResponses[curQ.id].markedForReview = false;
    }

    if (this.onStateChange) this.onStateChange();
  }

  // Navigate directly to question (does not auto-save pending uncommitted state)
  jumpTo(subjectIdx, subSecIdx, qIdx) {
    this.currentSubjectIdx = subjectIdx;
    this.currentSubSecIdx = subSecIdx;
    this.currentQIdx = qIdx;

    const q = this.getCurrentQuestion();
    if (q) {
      this.visitedQuestions.add(q.id);
    }

    if (this.onStateChange) this.onStateChange();
  }

  advanceToNextQuestion() {
    const curSubSec = this.getCurrentSubsection();
    if (!curSubSec) return;

    // Check if next question in current subsection
    if (this.currentQIdx < curSubSec.questions.length - 1) {
      this.currentQIdx++;
    } else {
      // Try next subsection in same subject
      const curSubj = this.getCurrentSubject();
      if (this.currentSubSecIdx < curSubj.subsections.length - 1) {
        this.currentSubSecIdx++;
        this.currentQIdx = 0;
      } else {
        // Try next subject
        if (this.currentSubjectIdx < this.examData.sections.length - 1) {
          this.currentSubjectIdx++;
          this.currentSubSecIdx = 0;
          this.currentQIdx = 0;
        } else {
          // Reached end of exam
          if (this.onStateChange) this.onStateChange();
          return;
        }
      }
    }

    const nextQ = this.getCurrentQuestion();
    if (nextQ) {
      this.visitedQuestions.add(nextQ.id);
    }

    if (this.onStateChange) this.onStateChange();
  }

  // Counts of each status across entire exam or current subsection
  getStatusCounts() {
    let counts = {
      notVisited: 0,
      notAnswered: 0,
      answered: 0,
      markedReview: 0,
      answeredMarkedReview: 0
    };

    this.examData.sections.forEach(sec => {
      sec.subsections.forEach(sub => {
        sub.questions.forEach(q => {
          const status = this.getQuestionStatus(q.id);
          switch(status) {
            case 'not-visited': counts.notVisited++; break;
            case 'not-answered': counts.notAnswered++; break;
            case 'answered': counts.answered++; break;
            case 'marked-review': counts.markedReview++; break;
            case 'answered-marked-review': counts.answeredMarkedReview++; break;
          }
        });
      });
    });

    return counts;
  }
}
