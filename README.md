# NEET (UG) CBT Online Mock Test Portal

A realistic, high-fidelity Computer Based Test (CBT) simulator built for **ALLEN Pre-Medical Achiever Phase-II Minor Test # 03**.

## 🌟 Key Features

- **Authentic NTA CBT Exam Interface**:
  - Live 100-minute countdown timer with auto-submit.
  - Section & Sub-section navigation (Physics, Chemistry, Botany, Zoology | Section A & Section B).
  - Authentic 5-state NTA question palette (Not Visited, Not Answered, Answered, Marked for Review, Answered & Marked for Review).
  - Anti-cheating fullscreen surveillance and right-click protection.
  - Font Resizer (`A-`, `A`, `A+`) and bilingual language switcher (English / हिन्दी).

- **100 Authentic Questions**:
  - Direct 1:1 extraction from Allen PDF modules matching the exact Minor Test # 03 syllabus slip.
  - Marking scheme: **+4 for correct, -1 for incorrect, 0 for unattempted**.
  - Section B choice limit (Attempt best 5 out of 10 if applicable, or assigned quota).

- **Instant Performance Scorecard & Official PDF**:
  - Immediate subject-wise marks breakdown, accuracy, and estimated percentile.
  - High-fidelity downloadable multi-page vector PDF (`NEET_Scorecard_Mansi_Roll_3804113256.pdf`) containing full question-by-question analysis, student selections, official answer keys, and step-by-step solutions.
  - Server-side email dispatch integration and 1-click **Compose in Gmail** option.

- **Mobile & Tablet Responsive**:
  - Touch-friendly layout with a slide-in overlay drawer for the Question Palette.
  - Standard touch target sizes and responsive grids.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Vanilla CSS (Custom NTA Design System)
- **PDF Generation**: `jspdf`, `jspdf-autotable`, `html2canvas`
- **Animation**: `canvas-confetti`

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/RanvirSahib/CBT-Test.git
cd CBT-Test
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 👤 Default Candidate Login

- **Candidate Name**: `Mansi`
- **Roll Number**: `3804113256`
- **Password / DOB**: `1234`
