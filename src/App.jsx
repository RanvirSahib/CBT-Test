import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import PortalHome from './components/PortalHome';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import InstructionScreen from './components/InstructionScreen';
import ExamScreen from './components/ExamScreen';
import ScorecardScreen from './components/ScorecardScreen';
import Modals from './components/Modals';

import { NEET_QUESTION_BANK } from './data/mockData';
import { ScoringEngine } from './utils/scoringEngine';

export default function App() {
  // Sync activeScreen with URL hash: #/portal, #/login, #/welcome, #/instructions, #/exam, #/scorecard
  const getScreenFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const valid = ['portal-home', 'login', 'welcome', 'instructions', 'exam', 'scorecard'];
    return valid.includes(hash) ? hash : 'portal-home';
  };

  const [activeScreen, setActiveScreen] = useState(getScreenFromHash);
  const [candidate, setCandidate] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_cbt_candidate');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Atul Singh' || parsed.rollNo === 'NEET2026-904128') {
          return {
            ...parsed,
            name: 'Mansi',
            rollNo: '3804113256'
          };
        }
        return parsed;
      }
    } catch {}
    return {
      name: 'Mansi',
      rollNo: '3804113256',
      systemNode: 'C01-N42',
      subject: 'PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03'
    };
  });

  const [userResponses, setUserResponses] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_cbt_user_responses');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  const [activeModal, setActiveModal] = useState(null);
  const [evaluationResult, setEvaluationResult] = useState(null);

  // Check for paused test in localStorage
  const [pausedTestInfo, setPausedTestInfo] = useState(() => {
    try {
      const status = localStorage.getItem('neet_cbt_test_status');
      const savedSecs = localStorage.getItem('neet_cbt_remaining_seconds');
      if (status === 'paused' && savedSecs !== null) {
        return { savedSeconds: parseInt(savedSecs, 10) };
      }
    } catch {}
    return null;
  });

  // 100 Questions / 100 Minutes Exam Dataset
  const activeExamData = useMemo(() => {
    return NEET_QUESTION_BANK.getNeet100Mock();
  }, []);

  // Listen for browser Back/Forward hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      setActiveScreen(getScreenFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigate between screens & update URL hash
  const handleNavigate = (screen) => {
    setActiveScreen(screen);
    window.location.hash = '#/' + screen;
    window.scrollTo(0, 0);
  };

  const triggerFullscreen = () => {
    if (!document.fullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
  };

  // Launch from Portal Home
  const handleStartPractice = () => {
    handleNavigate('login');
  };

  // Resume a paused test
  const handleResumeTest = () => {
    try {
      const savedResponses = localStorage.getItem('neet_cbt_user_responses');
      if (savedResponses) setUserResponses(JSON.parse(savedResponses));

      const savedCandidate = localStorage.getItem('neet_cbt_candidate');
      if (savedCandidate) setCandidate(JSON.parse(savedCandidate));

      const savedSecs = parseInt(localStorage.getItem('neet_cbt_remaining_seconds') || '6000', 10);
      localStorage.setItem('neet_cbt_target_end_time', Date.now() + savedSecs * 1000);
      localStorage.setItem('neet_cbt_test_status', 'in-progress');
    } catch {}

    setPausedTestInfo(null);
    triggerFullscreen();
    handleNavigate('exam');
  };

  // Discard paused test & start fresh
  const handleDiscardPausedTest = () => {
    localStorage.removeItem('neet_cbt_test_status');
    localStorage.removeItem('neet_cbt_remaining_seconds');
    localStorage.removeItem('neet_cbt_target_end_time');
    localStorage.removeItem('neet_cbt_user_responses');
    localStorage.removeItem('neet_cbt_visited_questions');
    setPausedTestInfo(null);
    setUserResponses({});
  };

  // Candidate login completed
  const handleLogin = (candData) => {
    setCandidate(candData);
    try {
      localStorage.setItem('neet_cbt_candidate', JSON.stringify(candData));
    } catch {}
    handleNavigate('welcome');
  };

  // Welcome screen proceed
  const handleWelcomeProceed = () => {
    triggerFullscreen();
    handleNavigate('instructions');
  };

  // Start fresh exam from instructions
  const handleStartExam = () => {
    triggerFullscreen();
    setUserResponses({});
    setEvaluationResult(null);
    localStorage.removeItem('neet_cbt_user_responses');
    localStorage.removeItem('neet_cbt_visited_questions');
    localStorage.setItem('neet_cbt_remaining_seconds', 100 * 60);
    localStorage.setItem('neet_cbt_target_end_time', Date.now() + 100 * 60 * 1000);
    localStorage.setItem('neet_cbt_test_status', 'in-progress');
    setPausedTestInfo(null);
    handleNavigate('exam');
  };

  // Pause & Exit Exam
  const handlePauseExam = (remainingSecs) => {
    setPausedTestInfo({ savedSeconds: remainingSecs });
    handleNavigate('portal-home');
  };

  // Finish exam (either timer expired or confirmed submission)
  const handleFinishExam = () => {
    const result = ScoringEngine.evaluateTest(activeExamData, userResponses);
    setEvaluationResult(result);
    localStorage.removeItem('neet_cbt_target_end_time');
    localStorage.removeItem('neet_cbt_test_status');
    localStorage.removeItem('neet_cbt_remaining_seconds');
    setPausedTestInfo(null);
    handleNavigate('scorecard');
  };

  // Retake exam
  const handleRetakeExam = () => {
    setUserResponses({});
    setEvaluationResult(null);
    handleDiscardPausedTest();
    handleNavigate('instructions');
  };

  // Check if we are on the portal home screen
  const isPortalHome = activeScreen === 'portal-home';

  return (
    <>
      {/* 
        CRITICAL UI FIX: 
        Only render Government Tricolor Bar, Emblem Header, Navigation Bar, and News Ticker
        on the PORTAL HOME page.
        During the Exam, Instructions, and Welcome screens, these website bars are completely hidden
        for an authentic, distraction-free, 100% full-screen CBT examination environment!
      */}
      {isPortalHome && (
        <>
          <Header />
          <Navbar
            activeScreen={activeScreen}
            onNavigate={handleNavigate}
            onOpenModal={(modal) => setActiveModal(modal)}
          />
          <NewsTicker />
        </>
      )}

      {/* Main Screen Content */}
      <main className="main-viewport">
        {activeScreen === 'portal-home' && (
          <PortalHome
            onStartPractice={handleStartPractice}
            onOpenModal={(modal) => setActiveModal(modal)}
            pausedTestInfo={pausedTestInfo}
            onResumeTest={handleResumeTest}
            onDiscardPausedTest={handleDiscardPausedTest}
          />
        )}

        {activeScreen === 'login' && (
          <LoginScreen
            candidate={candidate}
            onLogin={handleLogin}
          />
        )}

        {activeScreen === 'welcome' && (
          <WelcomeScreen
            candidate={candidate}
            onProceed={handleWelcomeProceed}
          />
        )}

        {activeScreen === 'instructions' && (
          <InstructionScreen
            examData={activeExamData}
            onBack={() => handleNavigate('welcome')}
            onStartExam={handleStartExam}
          />
        )}

        {activeScreen === 'exam' && (
          <ExamScreen
            candidate={candidate}
            examData={activeExamData}
            userResponses={userResponses}
            setUserResponses={setUserResponses}
            onFinishExam={handleFinishExam}
            onOpenSubmitModal={() => setActiveModal('submit-summary')}
          />
        )}

        {activeScreen === 'scorecard' && evaluationResult && (
          <ScorecardScreen
            candidate={candidate}
            result={evaluationResult}
            onRetake={handleRetakeExam}
            onReturnHome={() => handleNavigate('portal-home')}
          />
        )}
      </main>

      {/* Global Modals Container */}
      <Modals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        examData={activeExamData}
        userResponses={userResponses}
        onConfirmSubmit={handleFinishExam}
        onStartExamFromModal={() => handleNavigate('login')}
      />
    </>
  );
}
