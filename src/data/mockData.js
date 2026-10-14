/**
 * PRE-MEDICAL ACHIEVER PHASE - II
 * MINOR TEST # 03 (ALLEN CAREER INSTITUTE)
 * Test Date: 26.10.2026 | Centres: Amritsar, Chandigarh & Mohali
 * 
 * EXACT TEST SLIP SYLLABUS (DIRECTLY EXTRACTED FROM ALLEN MODULE PDFs):
 * - PHYSICS: Work Power Energy (Complete), Centre of Mass, Momentum & Collision (Complete) [ALLEN NCR PWP & PSC series]
 * - CHEMISTRY: IOC - Chemical Bonding (Remaining), PC - Liquid Solution (Remaining) & Chemical Equilibrium (Till law of mass action) [ALLEN NCR CS, CE & CB series]
 * - BOTANY: Morphology of flowering plant (Complete), Plant Anatomy (Till Classification of permanent tissue) [ALLEN NCR BMP & BPA series]
 * - ZOOLOGY: Circulatory System (Complete) & Excretory System (Till Types of Nephron) [ALLEN NCR BFC & BEX series]
 * 
 * Pattern: Exactly 100 Questions | 100 Minutes | 400 Marks (+4 / -1 Marking Scheme)
 * 25 Questions per subject: Section A (20 Qs) + Section B (5 Qs)
 */

export const NEET_QUESTION_BANK = {
  getNeet100Mock: function() {
    return {
  "id": "allen_achiever_minor_03",
  "title": "PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03 (ALLEN)",
  "durationMinutes": 100,
  "totalMarks": 400,
  "totalQuestions": 100,
  "sections": [
    {
      "id": "phy",
      "name": "Physics",
      "nameHi": "भौतिक विज्ञान",
      "subsections": [
        {
          "id": "phy_sec_a",
          "name": "Physics - Section A",
          "nameHi": "भौतिक विज्ञान - खंड A",
          "maxAttempt": 20,
          "questions": [
            {
              "id": "q_phy_1",
              "num": 1,
              "question": "[ALLEN NCR PWP198] Which of the following statements is INCORRECT?\n(1) Kinetic energy may be zero, positive or negative\n(2) Power, energy and work are all scalars\n(3) Potential energy may be zero, positive or negative\n(4) Ballistic pendulum is a device for measuring the speed of bullets",
              "questionHi": "[ALLEN NCR PWP198] निम्नलिखित में से कौन सा कथन गलत है?\n(1) गतिज ऊर्जा शून्य, धनात्मक या ऋणात्मक हो सकती है\n(2) शक्ति, ऊर्जा तथा कार्य सभी अदिश राशियाँ हैं\n(3) स्थितिज ऊर्जा शून्य, धनात्मक या ऋणात्मक हो सकती है\n(4) बैलिस्टिक पेंडुलम गोलियों की चाल मापने का एक उपकरण है",
              "options": [
                "Kinetic energy may be zero, positive or negative",
                "Power, energy and work are all scalars",
                "Potential energy may be zero, positive or negative",
                "Ballistic pendulum is a device for measuring the speed of bullets"
              ],
              "optionsHi": [
                "गतिज ऊर्जा शून्य, धनात्मक या ऋणात्मक हो सकती है",
                "शक्ति, ऊर्जा तथा कार्य सभी अदिश राशियाँ हैं",
                "स्थितिज ऊर्जा शून्य, धनात्मक या ऋणात्मक हो सकती है",
                "बैलिस्टिक पेंडुलम गोलियों की चाल मापने का एक उपकरण है"
              ],
              "correct": 0,
              "explanation": "[ALLEN PWP198]: Kinetic energy is defined as K = 1/2 m v² where mass m > 0 and v² ≥ 0. Therefore, kinetic energy can NEVER be negative. Potential energy can be positive, negative, or zero depending on the reference level. Thus statement (1) is incorrect.",
              "explanationHi": "गतिज ऊर्जा K = 1/2 m v² सदैव शून्य या धनात्मक होती है, कभी ऋणात्मक नहीं हो सकती। अतः कथन (1) गलत है।"
            },
            {
              "id": "q_phy_2",
              "num": 2,
              "question": "[ALLEN NCR PWP199] If the force acting on a body is inversely proportional to its speed, then its kinetic energy is:",
              "questionHi": "[ALLEN NCR PWP199] यदि किसी पिंड पर लगने वाला बल उसकी चाल के व्युत्क्रमानुपाती है, तो उसकी गतिज ऊर्जा:",
              "options": [
                "Linearly related to time",
                "Inversely proportional to time",
                "Inversely proportional to the square of time",
                "A constant"
              ],
              "optionsHi": [
                "समय के साथ रैखिक रूप से संबंधित है",
                "समय के व्युत्क्रमानुपाती है",
                "समय के वर्ग के व्युत्क्रमानुपाती है",
                "एक नियतांक है"
              ],
              "correct": 0,
              "explanation": "[ALLEN PWP199]: Power P = F · v. Given F ∝ 1/v => F = k/v => P = F · v = (k/v) · v = k (constant). Since Power = dK/dt = k, integrating gives Kinetic Energy K = k·t + C, which is linearly related to time.",
              "explanationHi": "शक्ति P = F·v = (k/v)·v = k (नियत)। dK/dt = k => K = kt + c, अतः गतिज ऊर्जा समय के साथ रैखिक रूप से बढ़ती है।"
            },
            {
              "id": "q_phy_3",
              "num": 3,
              "question": "[ALLEN NCR PWP200] The momentum of a body is increased by 25%. The kinetic energy is increased by about:",
              "questionHi": "[ALLEN NCR PWP200] किसी पिंड के संवेग में 25% की वृद्धि की जाती है। इसकी गतिज ऊर्जा में लगभग कितनी वृद्धि होगी?",
              "options": [
                "25%",
                "5%",
                "56%",
                "38%"
              ],
              "optionsHi": [
                "25%",
                "5%",
                "56%",
                "38%"
              ],
              "correct": 2,
              "explanation": "[ALLEN PWP200]: Kinetic energy K = p² / (2m). New momentum p' = 1.25 p = 5/4 p. New kinetic energy K' = (p')² / (2m) = (25/16) K = 1.5625 K. Percentage increase = (1.5625 - 1) × 100% ≈ 56%.",
              "explanationHi": "K = p²/(2m)। p' = 1.25 p => K' = (1.25)² K = 1.5625 K। वृद्धि = 56.25% ≈ 56%।"
            },
            {
              "id": "q_phy_4",
              "num": 4,
              "question": "[ALLEN NCR PWP201] Two bodies A and B have masses 20 kg and 5 kg respectively. Each one is acted upon by a constant force of 4 kg-wt. If they acquire the same kinetic energy in times t_A and t_B starting from rest, then the ratio t_A / t_B is:",
              "questionHi": "[ALLEN NCR PWP201] दो पिंडों A तथा B के द्रव्यमान क्रमशः 20 kg तथा 5 kg हैं। प्रत्येक पर 4 kg-wt का बल कार्य करता है। यदि वे विरामावस्था से चलकर समय t_A तथा t_B में समान गतिज ऊर्जा प्राप्त करते हैं, तो अनुपात t_A / t_B है:",
              "options": [
                "1 / 2",
                "2",
                "2 / 5",
                "5 / 6"
              ],
              "optionsHi": [
                "1 / 2",
                "2",
                "2 / 5",
                "5 / 6"
              ],
              "correct": 1,
              "explanation": "[ALLEN PWP201]: Impulse J = F · t = p => p = F · t. Kinetic energy K = p² / (2m) = (F² t²) / (2m). Since K and F are identical for both: t² / m = constant => t ∝ √m. Therefore, t_A / t_B = √(m_A / m_B) = √(20 / 5) = √4 = 2.",
              "explanationHi": "K = (F² t²)/(2m)। K तथा F समान हैं => t ∝ √m => t_A / t_B = √(20/5) = 2।"
            },
            {
              "id": "q_phy_5",
              "num": 5,
              "question": "[ALLEN NCR PWP203] A block of mass 10 kg is moving in x-direction with a constant speed of 10 m/s. It is subjected to a retarding force F_x = -0.1x N during its travel from x = 20 m to x = 30 m. Its final kinetic energy will be:",
              "questionHi": "[ALLEN NCR PWP203] 10 kg द्रव्यमान का एक गुटका 10 m/s की नियत चाल से x-दिशा में गतिमान है। x = 20 m से x = 30 m की यात्रा के दौरान इस पर एक मंदक बल F_x = -0.1x N लगाया जाता है। इसकी अंतिम गतिज ऊर्जा होगी:",
              "options": [
                "250 J",
                "275 J",
                "450 J",
                "475 J"
              ],
              "optionsHi": [
                "250 J",
                "275 J",
                "450 J",
                "475 J"
              ],
              "correct": 3,
              "explanation": "[ALLEN PWP203]: Initial KE = 1/2 m v² = 1/2 (10) (10)² = 500 J. Work done by retarding force W = ∫₂₀³⁰ (-0.1x) dx = -0.1 [x²/2]₂₀³⁰ = -0.05 [900 - 400] = -0.05 (500) = -25 J. Final KE = Initial KE + W = 500 - 25 = 475 J.",
              "explanationHi": "प्रारंभिक KE = 500 J। किया गया कार्य W = ∫₂₀³⁰ (-0.1x) dx = -0.05(900 - 400) = -25 J। अंतिम KE = 500 - 25 = 475 J।"
            },
            {
              "id": "q_phy_6",
              "num": 6,
              "question": "[ALLEN NCR PWP204] A particle in a conservative force field has a potential energy function U(x, y) = 20xy J. The force vector acting on the particle at the point (1, -2) is:",
              "questionHi": "[ALLEN NCR PWP204] एक संरक्षी बल क्षेत्र में कण का स्थितिज ऊर्जा फलन U(x, y) = 20xy J है। बिंदु (1, -2) पर कण पर लगने वाला बल सदिश है:",
              "options": [
                "(40 î - 20 ĵ) N",
                "(-40 î + 20 ĵ) N",
                "(20 î - 40 ĵ) N",
                "(-20 î + 40 ĵ) N"
              ],
              "optionsHi": [
                "(40 î - 20 ĵ) N",
                "(-40 î + 20 ĵ) N",
                "(20 î - 40 ĵ) N",
                "(-20 î + 40 ĵ) N"
              ],
              "correct": 0,
              "explanation": "[ALLEN PWP204]: F_x = -∂U/∂x = -20y. At y = -2: F_x = -20(-2) = +40 N. F_y = -∂U/∂y = -20x. At x = 1: F_y = -20(1) = -20 N. Therefore, F = (40 î - 20 ĵ) N.",
              "explanationHi": "F_x = -∂U/∂x = -20y = +40 N; F_y = -∂U/∂y = -20x = -20 N। अतः बल = (40 î - 20 ĵ) N।"
            },
            {
              "id": "q_phy_7",
              "num": 7,
              "question": "[ALLEN NCR PWP206] A body of mass 2 kg falls freely from a height of 20 m. With what velocity does it strike the ground? (g = 10 m/s²)",
              "questionHi": "[ALLEN NCR PWP206] 2 kg द्रव्यमान का एक पिंड 20 m की ऊँचाई से स्वतंत्रतापूर्वक गिरता है। यह किस वेग से जमीन से टकराएगा? (g = 10 m/s²)",
              "options": [
                "10 m/s",
                "20 m/s",
                "30 m/s",
                "40 m/s"
              ],
              "optionsHi": [
                "10 m/s",
                "20 m/s",
                "30 m/s",
                "40 m/s"
              ],
              "correct": 1,
              "explanation": "[ALLEN PWP206]: Conservation of mechanical energy: mgh = 1/2 m v² => v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s.",
              "explanationHi": "ऊर्जा संरक्षण से: v = √(2gh) = √(2 × 10 × 20) = 20 m/s।"
            },
            {
              "id": "q_phy_8",
              "num": 8,
              "question": "[ALLEN NCR PWP208] A light spring of force constant k is cut into two equal halves. The spring constant of each half is:",
              "questionHi": "[ALLEN NCR PWP208] बल नियतांक k की एक हल्की स्प्रिंग को दो बराबर भागों में काटा जाता है। प्रत्येक आधे भाग का स्प्रिंग नियतांक है:",
              "options": [
                "k / 2",
                "k",
                "2k",
                "4k"
              ],
              "optionsHi": [
                "k / 2",
                "k",
                "2k",
                "4k"
              ],
              "correct": 2,
              "explanation": "[ALLEN PWP208]: The spring constant is inversely proportional to its natural length: k · L = constant. When length becomes L' = L/2, the new spring constant becomes k' = 2k.",
              "explanationHi": "स्प्रिंग नियतांक लंबाई के व्युत्क्रमानुपाती होता है (k·L = नियतांक)। आधी लंबाई (L/2) करने पर स्प्रिंग नियतांक 2k हो जाता है।"
            },
            {
              "id": "q_phy_9",
              "num": 9,
              "question": "[ALLEN NCR PWP210] A small sphere attached to a string of length R is whirled in a vertical circle. The ratio of tension in the string at the lowest point to that at the highest point, when it has the minimum speed required to complete the circle, is:",
              "questionHi": "[ALLEN NCR PWP210] लंबाई R की डोरी से बंधा एक छोटा गोला ऊर्ध्वाधर वृत्त में घुमाया जाता है। वृत्त पूरा करने के लिए आवश्यक न्यूनतम चाल होने पर निम्नतम बिंदु तथा उच्चतम बिंदु पर डोरी में तनाव का अनुपात है:",
              "options": [
                "6 : 0 (infinite)",
                "3 : 1",
                "5 : 1",
                "6 : 1"
              ],
              "optionsHi": [
                "6 : 0 (अनंत)",
                "3 : 1",
                "5 : 1",
                "6 : 1"
              ],
              "correct": 0,
              "explanation": "[ALLEN PWP210]: For minimum looping velocity, v_top = √(gR) and v_bot = √(5gR). Tension at top T_top = m v_top² / R - mg = mg - mg = 0. Tension at bottom T_bot = m v_bot² / R + mg = 5mg + mg = 6mg. Ratio T_bot / T_top = 6mg / 0 = infinite (undefined).",
              "explanationHi": "न्यूनतम चाल पर उच्चतम बिंदु पर तनाव T_top = 0 तथा निम्नतम बिंदु पर T_bot = 6mg होता है। अतः अनुपात 6:0 (अनंत) है।"
            },
            {
              "id": "q_phy_10",
              "num": 10,
              "question": "[ALLEN NCR PWP212] An engine pumps water continuously through a hose with velocity v. If m is the mass per unit length of the water jet, the rate at which kinetic energy is imparted to water is:",
              "questionHi": "[ALLEN NCR PWP212] एक इंजन नली से वेग v के साथ लगातार पानी पंप करता है। यदि पानी की धार का प्रति इकाई लंबाई द्रव्यमान m है, तो पानी को गतिज ऊर्जा प्रदान करने की दर है:",
              "options": [
                "1/2 m v²",
                "1/2 m v³",
                "m v³",
                "1/2 m² v²"
              ],
              "optionsHi": [
                "1/2 m v²",
                "1/2 m v³",
                "m v³",
                "1/2 m² v²"
              ],
              "correct": 1,
              "explanation": "[ALLEN PWP212]: Mass flow rate dm/dt = m · v (mass per unit length × velocity). Rate of kinetic energy imparted = dK/dt = 1/2 (dm/dt) v² = 1/2 (m v) v² = 1/2 m v³.",
              "explanationHi": "द्रव्यमान प्रवाह दर dm/dt = m·v। गतिज ऊर्जा देने की दर = 1/2 (dm/dt) v² = 1/2 m v³।"
            },
            {
              "id": "q_phy_11",
              "num": 11,
              "question": "[ALLEN NCR PSC167] The bob A of a pendulum of mass m released from horizontal hits another bob B of the same mass at rest on a table. If the length of the pendulum is 1 m, what is the speed with which bob B starts moving? (Neglect size of bobs, assume elastic collision, g = 10 m/s²):",
              "questionHi": "[ALLEN NCR PSC167] क्षैतिज स्थिति से छोड़ा गया द्रव्यमान m का एक लोलक बॉब A मेज पर विराम में स्थित समान द्रव्यमान के दूसरे बॉब B से टकराता है। यदि लोलक की लंबाई 1 m है, तो बॉब B किस चाल से गति प्रारंभ करेगा? (प्रत्यास्थ टक्कर, g = 10 m/s²):",
              "options": [
                "4.47 m/s",
                "5.47 m/s",
                "6.47 m/s",
                "3.47 m/s"
              ],
              "optionsHi": [
                "4.47 m/s",
                "5.47 m/s",
                "6.47 m/s",
                "3.47 m/s"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC167]: Speed of bob A just before collision: v = √(2gL) = √(2 × 10 × 1) = √20 ≈ 4.47 m/s. In an elastic head-on collision between equal masses, velocities are exchanged. Thus bob A comes to rest and bob B moves with 4.47 m/s.",
              "explanationHi": "टक्कर से ठीक पहले बॉब A की चाल v = √(2gL) = √20 ≈ 4.47 m/s। समान द्रव्यमानों की प्रत्यास्थ टक्कर में वेग का विनिमय हो जाता है, अतः बॉब B 4.47 m/s से चलेगा।"
            },
            {
              "id": "q_phy_12",
              "num": 12,
              "question": "[ALLEN NCR PSC168] A spherical ball A of mass 4 kg moving along a straight line strikes another spherical ball B of mass 1 kg at rest. After collision, A and B move with velocities V₁ and V₂ making angles of 30° and 60° respectively with original direction of A. The ratio V₁ / V₂ is:",
              "questionHi": "[ALLEN NCR PSC168] 4 kg द्रव्यमान की एक गोलाकार गेंद A विराम में स्थित 1 kg द्रव्यमान की दूसरी गेंद B से टकराती है। टक्कर के बाद A और B क्रमशः V₁ और V₂ वेग से A की मूल दिशा के साथ 30° और 60° का कोण बनाते हुए गति करते हैं। अनुपात V₁ / V₂ होगा:",
              "options": [
                "√3 / 4",
                "4 / √3",
                "1 / (4√3)",
                "√3"
              ],
              "optionsHi": [
                "√3 / 4",
                "4 / √3",
                "1 / (4√3)",
                "√3"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC168]: Conserving momentum perpendicular to initial direction: m_A V₁ sin 30° = m_B V₂ sin 60° => 4 V₁ (1/2) = 1 V₂ (√3/2) => 2 V₁ = (√3/2) V₂ => V₁ / V₂ = √3 / 4.",
              "explanationHi": "लंबवत दिशा में संवेग संरक्षण: m_A V₁ sin 30° = m_B V₂ sin 60° => 4 V₁ (1/2) = 1 V₂ (√3/2) => V₁ / V₂ = √3 / 4।"
            },
            {
              "id": "q_phy_13",
              "num": 13,
              "question": "[ALLEN NCR PSC169] The linear density of a non-uniform rod of length 1 m is given by ρ(x) = a(1 + bx²), where a and b are constants and 0 ≤ x ≤ 1. The centre of mass of the rod is at:",
              "questionHi": "[ALLEN NCR PSC169] लंबाई 1 m की एक असमान छड़ का घनत्व ρ(x) = a(1 + bx²) द्वारा दिया गया है, जहाँ a और b नियतांक हैं तथा 0 ≤ x ≤ 1 है। छड़ का द्रव्यमान केंद्र स्थित होगा:",
              "options": [
                "3(2 + b) / [4(3 + b)]",
                "4(2 + b) / [3(3 + b)]",
                "3(3 + b) / [4(2 + b)]",
                "4(3 + b) / [3(2 + b)]"
              ],
              "optionsHi": [
                "3(2 + b) / [4(3 + b)]",
                "4(2 + b) / [3(3 + b)]",
                "3(3 + b) / [4(2 + b)]",
                "4(3 + b) / [3(2 + b)]"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC169]: X_com = ∫₀¹ x dm / ∫₀¹ dm = ∫₀¹ x a(1 + bx²) dx / ∫₀¹ a(1 + bx²) dx = [x²/2 + b x⁴/4]₀¹ / [x + b x³/3]₀¹ = (1/2 + b/4) / (1 + b/3) = ((2 + b)/4) / ((3 + b)/3) = 3(2 + b) / [4(3 + b)].",
              "explanationHi": "X_com = ∫ x dm / ∫ dm = [1/2 + b/4] / [1 + b/3] = 3(2 + b) / [4(3 + b)]।"
            },
            {
              "id": "q_phy_14",
              "num": 14,
              "question": "[ALLEN NCR PSC170] Masses 8, 2, 4, 2 kg are placed at corners A, B, C, D respectively of a square ABCD of diagonal 80 cm. The distance of the centre of mass from corner A is:",
              "questionHi": "[ALLEN NCR PSC170] विकर्ण 80 cm वाले एक वर्ग ABCD के कोनों A, B, C, D पर क्रमशः 8, 2, 4, 2 kg द्रव्यमान रखे हैं। कोने A से द्रव्यमान केंद्र की दूरी होगी:",
              "options": [
                "20 cm",
                "30 cm",
                "40 cm",
                "60 cm"
              ],
              "optionsHi": [
                "20 cm",
                "30 cm",
                "40 cm",
                "60 cm"
              ],
              "correct": 1,
              "explanation": "[ALLEN PSC170]: By symmetry about diagonal AC (masses at B and D are identical = 2 kg), the COM lies on diagonal AC. Taking A as origin (x=0) and C at x = 80 cm: X_com = (m_A(0) + m_B(40) + m_D(40) + m_C(80)) / (8 + 2 + 2 + 4) = (0 + 80 + 80 + 320) / 16 = 480 / 16 = 30 cm from A.",
              "explanationHi": "सममिति से द्रव्यमान केंद्र विकर्ण AC पर स्थित है। A को मूल बिंदु लेने पर: X_com = (2(40) + 2(40) + 4(80))/16 = 480/16 = 30 cm।"
            },
            {
              "id": "q_phy_15",
              "num": 15,
              "question": "[ALLEN NCR PSC171] A bomb of mass 9 kg explodes into two parts of 3 kg and 6 kg. If the velocity of the 3 kg mass is 16 m/s, the kinetic energy of the 6 kg mass is:",
              "questionHi": "[ALLEN NCR PSC171] 9 kg द्रव्यमान का एक बम 3 kg तथा 6 kg के दो टुकड़ों में विस्फोटित होता है। यदि 3 kg के टुकड़े का वेग 16 m/s है, तो 6 kg के टुकड़े की गतिज ऊर्जा है:",
              "options": [
                "192 J",
                "384 J",
                "96 J",
                "576 J"
              ],
              "optionsHi": [
                "192 J",
                "384 J",
                "96 J",
                "576 J"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC171]: Conservation of linear momentum: m₁ v₁ = m₂ v₂ => (3)(16) = 6 v₂ => v₂ = 8 m/s. Kinetic energy of 6 kg piece = 1/2 m₂ v₂² = 1/2 (6) (8)² = 3 × 64 = 192 J.",
              "explanationHi": "संवेग संरक्षण: 3 × 16 = 6 × v₂ => v₂ = 8 m/s। 6 kg की गतिज ऊर्जा = 1/2 × 6 × 8² = 192 J।"
            },
            {
              "id": "q_phy_16",
              "num": 16,
              "question": "[ALLEN NCR PSC173] A 1 kg ball moving with 12 m/s collides head-on with a stationary 2 kg ball. If the collision is perfectly elastic, the velocity of the 1 kg ball after the collision is:",
              "questionHi": "[ALLEN NCR PSC173] 12 m/s से गतिमान 1 kg की गेंद विराम में स्थित 2 kg की गेंद से सम्मुख पूर्णतः प्रत्यास्थ टक्कर करती है। टक्कर के बाद 1 kg की गेंद का वेग है:",
              "options": [
                "-4 m/s",
                "+4 m/s",
                "-8 m/s",
                "+8 m/s"
              ],
              "optionsHi": [
                "-4 m/s",
                "+4 m/s",
                "-8 m/s",
                "+8 m/s"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC173]: Velocity of first mass after 1D elastic collision: v₁ = ((m₁ - m₂)/(m₁ + m₂)) u₁ + ((2m₂)/(m₁ + m₂)) u₂. With u₂ = 0: v₁ = ((1 - 2)/(1 + 2)) (12) = (-1/3)(12) = -4 m/s (rebounds at 4 m/s).",
              "explanationHi": "v₁ = [(m₁ - m₂)/(m₁ + m₂)] u₁ = [(1 - 2)/3] × 12 = -4 m/s।"
            },
            {
              "id": "q_phy_17",
              "num": 17,
              "question": "[ALLEN NCR PSC175] A ball dropped from a height of 2 m rebounds to a height of 1.28 m. The coefficient of restitution between the ball and the floor is:",
              "questionHi": "[ALLEN NCR PSC175] 2 m की ऊँचाई से गिराई गई एक गेंद 1.28 m की ऊँचाई तक वापस उछलती है। गेंद और फर्श के बीच प्रत्यावस्थान गुणांक है:",
              "options": [
                "0.8",
                "0.64",
                "0.5",
                "0.6"
              ],
              "optionsHi": [
                "0.8",
                "0.64",
                "0.5",
                "0.6"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC175]: Height after first rebound h₁ = e² h₀ => e = √(h₁ / h₀) = √(1.28 / 2) = √0.64 = 0.8.",
              "explanationHi": "h₁ = e² h₀ => e = √(1.28 / 2) = √0.64 = 0.8।"
            },
            {
              "id": "q_phy_18",
              "num": 18,
              "question": "[ALLEN NCR PSC178] Two bodies of masses 2 kg and 4 kg are moving with velocities 2 m/s and 10 m/s towards each other. The velocity of their centre of mass is:",
              "questionHi": "[ALLEN NCR PSC178] 2 kg तथा 4 kg द्रव्यमान के दो पिंड 2 m/s तथा 10 m/s के वेग से एक दूसरे की ओर गति कर रहे हैं। उनके द्रव्यमान केंद्र का वेग है:",
              "options": [
                "6 m/s",
                "-6 m/s",
                "8 m/s",
                "5.33 m/s"
              ],
              "optionsHi": [
                "6 m/s",
                "-6 m/s",
                "8 m/s",
                "5.33 m/s"
              ],
              "correct": 1,
              "explanation": "[ALLEN PSC178]: Taking direction of 2 kg as positive (+2 m/s), 4 kg moves in opposite direction (-10 m/s). V_com = (m₁ v₁ + m₂ v₂) / (m₁ + m₂) = (2(2) + 4(-10)) / (2 + 4) = (4 - 40) / 6 = -36 / 6 = -6 m/s (in the direction of the 4 kg mass).",
              "explanationHi": "V_com = (m₁v₁ + m₂v₂)/(m₁ + m₂) = [2(2) + 4(-10)]/6 = -36/6 = -6 m/s।"
            },
            {
              "id": "q_phy_19",
              "num": 19,
              "question": "[ALLEN NCR PSC180] A shell of mass 20 kg at rest explodes into two pieces of masses 12 kg and 8 kg. The velocity of the 8 kg mass is 6 m/s. The kinetic energy of the 12 kg mass is:",
              "questionHi": "[ALLEN NCR PSC180] विरामावस्था में 20 kg का एक गोला 12 kg तथा 8 kg के दो टुकड़ों में विस्फोटित होता है। 8 kg के टुकड़े का वेग 6 m/s है। 12 kg के टुकड़े की गतिज ऊर्जा है:",
              "options": [
                "96 J",
                "144 J",
                "48 J",
                "72 J"
              ],
              "optionsHi": [
                "96 J",
                "144 J",
                "48 J",
                "72 J"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC180]: By conservation of momentum: 12 v₁ = 8(6) => 12 v₁ = 48 => v₁ = 4 m/s. Kinetic energy of 12 kg mass = 1/2 (12) (4)² = 6 × 16 = 96 J.",
              "explanationHi": "संवेग संरक्षण: 12 × v₁ = 8 × 6 => v₁ = 4 m/s। KE = 1/2 × 12 × 16 = 96 J।"
            },
            {
              "id": "q_phy_20",
              "num": 20,
              "question": "[ALLEN NCR PSC182] In a head-on perfectly inelastic collision between two bodies of masses m₁ and m₂ moving with initial velocities u₁ and u₂, the loss of kinetic energy is:",
              "questionHi": "[ALLEN NCR PSC182] प्रारंभिक वेग u₁ तथा u₂ से गतिमान द्रव्यमान m₁ तथा m₂ के दो पिंडों के सम्मुख पूर्णतः अप्रत्यास्थ संघट्ट में गतिज ऊर्जा की हानि है:",
              "options": [
                "1/2 [m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)²",
                "1/2 (m₁ + m₂) (u₁ - u₂)²",
                "1/2 [m₁ m₂ / (m₁ + m₂)] (u₁ + u₂)²",
                "[m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)"
              ],
              "optionsHi": [
                "1/2 [m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)²",
                "1/2 (m₁ + m₂) (u₁ - u₂)²",
                "1/2 [m₁ m₂ / (m₁ + m₂)] (u₁ + u₂)²",
                "[m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC182]: Standard formula for kinetic energy loss in 1D inelastic collision: ΔK = 1/2 [m₁ m₂ / (m₁ + m₂)] (1 - e²) (u₁ - u₂)². For perfectly inelastic collision e = 0 => ΔK = 1/2 [m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)², which represents the kinetic energy in the centre-of-mass frame.",
              "explanationHi": "पूर्णतः अप्रत्यास्थ टक्कर (e = 0) में गतिज ऊर्जा हानि ΔK = 1/2 [m₁m₂/(m₁+m₂)] (u₁ - u₂)² होती है।"
            }
          ]
        },
        {
          "id": "phy_sec_b",
          "name": "Physics - Section B",
          "nameHi": "भौतिक विज्ञान - खंड B",
          "maxAttempt": 5,
          "questions": [
            {
              "id": "q_phy_21",
              "num": 21,
              "question": "[ALLEN NCR PWP215] A block of mass m moving with velocity v compresses a spring of force constant k through distance x before coming momentarily to rest. If the mass of the block is doubled and its velocity is halved, the maximum compression of the spring will be:",
              "questionHi": "[ALLEN NCR PWP215] वेग v से गतिमान द्रव्यमान m का एक गुटका क्षणिक विराम में आने से पहले बल नियतांक k की स्प्रिंग को x दूरी तक संपीड़ित करता है। यदि गुटके का द्रव्यमान दोगुना कर दिया जाए तथा वेग आधा कर दिया जाए, तो स्प्रिंग का अधिकतम संपीड़न होगा:",
              "options": [
                "x / √2",
                "x / 2",
                "x √2",
                "2x"
              ],
              "optionsHi": [
                "x / √2",
                "x / 2",
                "x √2",
                "2x"
              ],
              "correct": 0,
              "explanation": "[ALLEN PWP215]: 1/2 k x² = 1/2 m v² => x = v √(m/k). New compression x' = (v/2) √(2m/k) = (√2 / 2) v √(m/k) = x / √2.",
              "explanationHi": "x = v√(m/k)। x' = (v/2)√(2m/k) = x/√2।"
            },
            {
              "id": "q_phy_22",
              "num": 22,
              "question": "[ALLEN NCR PWP218] A particle of mass 0.1 kg is subjected to a force which varies with distance as F = -kx, where k = 10 N/m. It starts from rest at x = 1 m. Its speed at x = 0 is:",
              "questionHi": "[ALLEN NCR PWP218] 0.1 kg द्रव्यमान के कण पर दूरी के साथ परिवर्ती बल F = -kx (k = 10 N/m) कार्य करता है। यह x = 1 m से विराम से प्रारंभ करता है। x = 0 पर इसकी चाल है:",
              "options": [
                "10 m/s",
                "5 m/s",
                "1 m/s",
                "0.1 m/s"
              ],
              "optionsHi": [
                "10 m/s",
                "5 m/s",
                "1 m/s",
                "0.1 m/s"
              ],
              "correct": 0,
              "explanation": "[ALLEN PWP218]: Work done W = ∫₁⁰ (-10x) dx = -10 [x²/2]₁⁰ = -10 (0 - 1/2) = 5 J. Work-energy theorem: W = 1/2 m v² => 5 = 1/2 (0.1) v² => v² = 100 => v = 10 m/s.",
              "explanationHi": "कार्य W = 1/2 k x² = 1/2(10)(1)² = 5 J। 1/2 m v² = 5 => 0.05 v² = 5 => v = 10 m/s।"
            },
            {
              "id": "q_phy_23",
              "num": 23,
              "question": "[ALLEN NCR PSC185] A uniform square plate of side a has a circular hole of radius a/4 cut out such that the centre of the hole is at (a/4, a/4) from the centre of the plate. The x-coordinate of the COM of the remaining plate from the centre is:",
              "questionHi": "[ALLEN NCR PSC185] भुजा a की एकसमान वर्गाकार प्लेट से त्रिज्या a/4 का एक वृत्ताकार छिद्र काटा जाता है जिसका केंद्र प्लेट के केंद्र से (a/4, a/4) पर है। मूल केंद्र से शेष प्लेट के द्रव्यमान केंद्र का x-निर्देशांक है:",
              "options": [
                "-πa / [4(16 - π)]",
                "-πa / [16 - π]",
                "-a / [4(16 - π)]",
                "-a / 16"
              ],
              "optionsHi": [
                "-πa / [4(16 - π)]",
                "-πa / [16 - π]",
                "-a / [4(16 - π)]",
                "-a / 16"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC185]: Area of square A₁ = a². Area of hole A₂ = π(a/4)² = πa²/16. Shift X_com = - (A₂ x₂) / (A₁ - A₂) = - (πa²/16 × a/4) / (a² - πa²/16) = - (πa/64) / ((16 - π)/16) = - πa / [4(16 - π)].",
              "explanationHi": "X_com = - (A₂ x₂) / (A₁ - A₂) = - (πa³/64) / [a²(16 - π)/16] = - πa / [4(16 - π)]।"
            },
            {
              "id": "q_phy_24",
              "num": 24,
              "question": "[ALLEN NCR PSC188] A particle of mass m moving with velocity u strikes a stationary identical particle elastically. If the collision is oblique and the first particle is deflected by 30°, the angle of deflection of the second particle is:",
              "questionHi": "[ALLEN NCR PSC188] वेग u से गतिमान द्रव्यमान m का कण विराम में स्थित समान कण से प्रत्यास्थ टक्कर करता है। यदि तिर्यक टक्कर में पहला कण 30° से विक्षेपित होता है, तो दूसरे कण का विक्षेपण कोण है:",
              "options": [
                "30°",
                "45°",
                "60°",
                "90°"
              ],
              "optionsHi": [
                "30°",
                "45°",
                "60°",
                "90°"
              ],
              "correct": 2,
              "explanation": "[ALLEN PSC188]: In an oblique elastic collision between identical masses where the target is at rest, the angle between the two final velocity vectors is always 90°: θ₁ + θ₂ = 90° => 30° + θ₂ = 90° => θ₂ = 60°.",
              "explanationHi": "समान द्रव्यमानों की तिर्यक प्रत्यास्थ टक्कर में दोनों कणों के मध्य कोण 90° होता है: θ₁ + θ₂ = 90° => 30° + θ₂ = 90° => θ₂ = 60°।"
            },
            {
              "id": "q_phy_25",
              "num": 25,
              "question": "[ALLEN NCR PSC190] A body of mass 2 kg moving with 3 m/s collides with a body of mass 1 kg at rest and sticks to it. The loss in kinetic energy during the collision is:",
              "questionHi": "[ALLEN NCR PSC190] 3 m/s से गतिमान 2 kg का पिंड विराम में स्थित 1 kg के पिंड से टकराकर उससे चिपक जाता है। संघट्ट के दौरान गतिज ऊर्जा में हानि है:",
              "options": [
                "3 J",
                "6 J",
                "9 J",
                "1.5 J"
              ],
              "optionsHi": [
                "3 J",
                "6 J",
                "9 J",
                "1.5 J"
              ],
              "correct": 0,
              "explanation": "[ALLEN PSC190]: ΔK = 1/2 [m₁ m₂ / (m₁ + m₂)] u₁² = 1/2 [(2 × 1) / (2 + 1)] (3)² = 1/2 (2/3) (9) = 3 J.",
              "explanationHi": "गतिज ऊर्जा हानि ΔK = 1/2 [m₁m₂/(m₁+m₂)] u₁² = 1/2 (2/3) (9) = 3 J।"
            }
          ]
        }
      ]
    },
    {
      "id": "chem",
      "name": "Chemistry",
      "nameHi": "रसायन विज्ञान",
      "subsections": [
        {
          "id": "chem_sec_a",
          "name": "Chemistry - Section A",
          "nameHi": "रसायन विज्ञान - खंड A",
          "maxAttempt": 20,
          "questions": [
            {
              "id": "q_chem_26",
              "num": 26,
              "question": "[ALLEN NCR CS0075] The van 't Hoff factor (i) is:",
              "questionHi": "[ALLEN NCR CS0075] वान्ट हॉफ गुणांक (i) होता है:",
              "options": [
                "Less than one in case of dissociation",
                "More than one in case of association",
                "Always less than one",
                "Less than one in case of association"
              ],
              "optionsHi": [
                "वियोजन की स्थिति में एक से कम",
                "संगुणन की स्थिति में एक से अधिक",
                "सदैव एक से कम",
                "संगुणन की स्थिति में एक से कम"
              ],
              "correct": 3,
              "explanation": "[ALLEN CS0075]: For dissociation, total number of particles increases, so i > 1. For association (e.g. dimerization of benzoic acid), total number of particles decreases, so i < 1. For non-electrolytes, i = 1.",
              "explanationHi": "वियोजन में कण बढ़ते हैं (i > 1) तथा संगुणन में कण घटते हैं, अतः संगुणन में वान्ट हॉफ गुणांक i < 1 होता है।"
            },
            {
              "id": "q_chem_27",
              "num": 27,
              "question": "[ALLEN NCR CS0076] The van 't Hoff factor (i) for a dilute solution of K₃[Fe(CN)₆] assuming complete dissociation is:",
              "questionHi": "[ALLEN NCR CS0076] K₃[Fe(CN)₆] के तनु विलयन के लिए पूर्ण वियोजन मानते हुए वान्ट हॉफ गुणांक (i) है:",
              "options": [
                "10",
                "4",
                "5",
                "0.25"
              ],
              "optionsHi": [
                "10",
                "4",
                "5",
                "0.25"
              ],
              "correct": 1,
              "explanation": "[ALLEN CS0076]: K₃[Fe(CN)₆] dissociates into 3 K⁺ + [Fe(CN)₆]³⁻, giving a total of n = 3 + 1 = 4 ions. For 100% dissociation (α = 1), i = n = 4.",
              "explanationHi": "K₃[Fe(CN)₆] वियोजित होकर 3 K⁺ तथा 1 [Fe(CN)₆]³⁻ (कुल 4 आयन) देता है। अतः i = 4।"
            },
            {
              "id": "q_chem_28",
              "num": 28,
              "question": "[ALLEN NCR CS0077] The experimental (observed) molecular weight of an electrolyte in solution will always be less than its normal theoretical value because the value of van 't Hoff factor 'i' for electrolytes is:",
              "questionHi": "[ALLEN NCR CS0077] विलयन में किसी विद्युत-अपघट्य का प्रायोगिक अणुभार सदैव उसके सैद्धांतिक मान से कम होता है क्योंकि विद्युत-अपघट्य के लिए वान्ट हॉफ गुणांक 'i' का मान:",
              "options": [
                "Less than 1",
                "Greater than 1",
                "One",
                "Zero"
              ],
              "optionsHi": [
                "1 से कम होता है",
                "1 से अधिक होता है",
                "1 होता है",
                "शून्य होता है"
              ],
              "correct": 1,
              "explanation": "[ALLEN CS0077]: Colligative property ∝ i ∝ 1 / M_observed. For electrolytes undergoing dissociation, i > 1, which increases the colligative property and results in an observed molecular weight less than the normal theoretical molecular weight.",
              "explanationHi": "विद्युत-अपघट्य के वियोजन के कारण i > 1 होता है, जिससे प्रायोगिक अणुभार सैद्धांतिक मान से कम आता है।"
            },
            {
              "id": "q_chem_29",
              "num": 29,
              "question": "[ALLEN NCR CS0078] The van 't Hoff factor (i) for a dilute aqueous solution of Glucose (C₆H₁₂O₆) is:",
              "questionHi": "[ALLEN NCR CS0078] ग्लूकोज (C₆H₁₂O₆) के तनु जलीय विलयन के लिए वान्ट हॉफ गुणांक (i) है:",
              "options": [
                "Zero",
                "1.0",
                "1.5",
                "2.0"
              ],
              "optionsHi": [
                "शून्य",
                "1.0",
                "1.5",
                "2.0"
              ],
              "correct": 1,
              "explanation": "[ALLEN CS0078]: Glucose is a non-electrolyte. It neither dissociates nor associates in aqueous solution, hence its van 't Hoff factor is exactly i = 1.0.",
              "explanationHi": "ग्लूकोज एक अनपघट्य है जो जल में न तो वियोजित होता है और न ही संगुणित, अतः i = 1.0।"
            },
            {
              "id": "q_chem_30",
              "num": 30,
              "question": "[ALLEN NCR CS0079] The osmotic pressure of 0.585% (w/v) NaCl aqueous solution at 27 °C assuming complete dissociation is: (R = 0.0821 L·atm·mol⁻¹·K⁻¹)",
              "questionHi": "[ALLEN NCR CS0079] 27 °C पर 0.585% (w/v) NaCl के जलीय विलयन का पूर्ण वियोजन मानते हुए परासरण दाब है: (R = 0.0821 L·atm·mol⁻¹·K⁻¹)",
              "options": [
                "2.49 atm",
                "4.92 atm",
                "1.2 atm",
                "3.8 atm"
              ],
              "optionsHi": [
                "2.49 atm",
                "4.92 atm",
                "1.2 atm",
                "3.8 atm"
              ],
              "correct": 1,
              "explanation": "[ALLEN CS0079]: 0.585% w/v = 0.585 g in 100 mL = 5.85 g/L. Molarity C = 5.85 / 58.5 = 0.1 M. For NaCl (i = 2). Osmotic pressure π = i C R T = 2 × 0.1 × 0.0821 × 300 = 4.926 ≈ 4.92 atm.",
              "explanationHi": "C = 5.85 / 58.5 = 0.1 M। NaCl के लिए i = 2। π = i C R T = 2 × 0.1 × 0.0821 × 300 = 4.92 atm।"
            },
            {
              "id": "q_chem_31",
              "num": 31,
              "question": "[ALLEN NCR CS0080] A substance A when dissolved in solvent B trimerizes to form A₃. If the degree of association is 100%, the van 't Hoff factor will be:",
              "questionHi": "[ALLEN NCR CS0080] विलायक B में विलेय A त्रितयीकरण (trimerization) करके A₃ बनाता है। यदि संगुणन 100% है, तो वान्ट हॉफ गुणांक होगा:",
              "options": [
                "1",
                "2",
                "3",
                "1 / 3"
              ],
              "optionsHi": [
                "1",
                "2",
                "3",
                "1 / 3"
              ],
              "correct": 3,
              "explanation": "[ALLEN CS0080]: For association into an n-mer: i = 1 - (1 - 1/n)α. For trimerization n = 3 and 100% association (α = 1): i = 1/3.",
              "explanationHi": "त्रितयीकरण (n = 3) तथा पूर्ण संगुणन (α = 1) में i = 1/n = 1/3।"
            },
            {
              "id": "q_chem_32",
              "num": 32,
              "question": "[ALLEN NCR CS0081] The ratio of the value of any colligative property for 0.1 M KCl solution to that for 0.1 M Sugar solution is nearly:",
              "questionHi": "[ALLEN NCR CS0081] 0.1 M KCl विलयन के लिए किसी अणुसंख्य गुणधर्म के मान का 0.1 M शर्करा विलयन के मान से अनुपात लगभग है:",
              "options": [
                "1",
                "2",
                "0.5",
                "3"
              ],
              "optionsHi": [
                "1",
                "2",
                "0.5",
                "3"
              ],
              "correct": 1,
              "explanation": "[ALLEN CS0081]: Colligative property ∝ i × C. For KCl (dissociates into K⁺ + Cl⁻), i ≈ 2. For sugar (non-electrolyte), i = 1. Ratio = (2 × 0.1) / (1 × 0.1) = 2.",
              "explanationHi": "अणुसंख्य गुणधर्म ∝ i। KCl के लिए i = 2 तथा शर्करा के लिए i = 1। अनुपात = 2/1 = 2।"
            },
            {
              "id": "q_chem_33",
              "num": 33,
              "question": "[ALLEN NCR CE0042] For the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), if active masses of N₂, H₂ and NH₃ are 1, 2 and 4 mol/L respectively at equilibrium, the equilibrium constant Kc is:",
              "questionHi": "[ALLEN NCR CE0042] अभिक्रिया: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) के लिए, यदि साम्यावस्था पर N₂, H₂ तथा NH₃ के सक्रिय द्रव्यमान क्रमशः 1, 2 तथा 4 mol/L हैं, तो साम्य स्थिरांक Kc है:",
              "options": [
                "2 L²·mol⁻²",
                "4 L²·mol⁻²",
                "0.5 L²·mol⁻²",
                "1 L²·mol⁻²"
              ],
              "optionsHi": [
                "2 L²·mol⁻²",
                "4 L²·mol⁻²",
                "0.5 L²·mol⁻²",
                "1 L²·mol⁻²"
              ],
              "correct": 0,
              "explanation": "[ALLEN CE0042]: By Law of Mass Action: Kc = [NH₃]² / ([N₂] [H₂]³) = (4)² / (1 × (2)³) = 16 / 8 = 2 L²·mol⁻².",
              "explanationHi": "Kc = [NH₃]² / ([N₂][H₂]³) = 16 / (1 × 8) = 2 L²·mol⁻²।"
            },
            {
              "id": "q_chem_34",
              "num": 34,
              "question": "[ALLEN NCR CE0045] The value of equilibrium constant Kc for the reaction: H₂(g) + I₂(g) ⇌ 2HI(g) is 50. What is the value of equilibrium constant for the reaction: HI(g) ⇌ 1/2 H₂(g) + 1/2 I₂(g)?",
              "questionHi": "[ALLEN NCR CE0045] अभिक्रिया: H₂(g) + I₂(g) ⇌ 2HI(g) के लिए साम्य स्थिरांक Kc का मान 50 है। अभिक्रिया: HI(g) ⇌ 1/2 H₂(g) + 1/2 I₂(g) के लिए साम्य स्थिरांक का मान क्या होगा?",
              "options": [
                "0.02",
                "1 / √50",
                "√50",
                "25"
              ],
              "optionsHi": [
                "0.02",
                "1 / √50",
                "√50",
                "25"
              ],
              "correct": 1,
              "explanation": "[ALLEN CE0045]: The reaction is reversed and halved. Therefore, Kc' = (1 / Kc)^(1/2) = 1 / √50.",
              "explanationHi": "अभिक्रिया को उलटने तथा 1/2 से गुणा करने पर: Kc' = (1/50)^(1/2) = 1/√50।"
            },
            {
              "id": "q_chem_35",
              "num": 35,
              "question": "[ALLEN NCR CE0048] In which of the following gaseous equilibria is Kp equal to Kc?",
              "questionHi": "[ALLEN NCR CE0048] निम्नलिखित में से किस गैसीय साम्यावस्था में Kp का मान Kc के बराबर होता है?",
              "options": [
                "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)",
                "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
                "H₂(g) + I₂(g) ⇌ 2HI(g)",
                "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)"
              ],
              "optionsHi": [
                "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)",
                "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
                "H₂(g) + I₂(g) ⇌ 2HI(g)",
                "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)"
              ],
              "correct": 2,
              "explanation": "[ALLEN CE0048]: Kp = Kc(RT)^Δng. When Δng = 0, (RT)⁰ = 1 => Kp = Kc. For H₂(g) + I₂(g) ⇌ 2HI(g), Δng = 2 - (1 + 1) = 0. Therefore Kp = Kc.",
              "explanationHi": "Kp = Kc(RT)^Δng। H₂ + I₂ ⇌ 2HI में Δng = 2 - 2 = 0 है, अतः Kp = Kc।"
            },
            {
              "id": "q_chem_36",
              "num": 36,
              "question": "[ALLEN NCR CE0051] For the dissociation reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), if one mole of PCl₅ is heated in a container of volume V and degree of dissociation is α, then Kc is given by:",
              "questionHi": "[ALLEN NCR CE0051] वियोजन अभिक्रिया: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) के लिए, यदि PCl₅ के एक मोल को आयतन V के पात्र में गर्म किया जाए और वियोजन की मात्रा α हो, तो Kc है:",
              "options": [
                "α² / [(1 - α) V]",
                "α² V / (1 - α)",
                "(1 - α) / (α² V)",
                "α / [(1 - α) V]"
              ],
              "optionsHi": [
                "α² / [(1 - α) V]",
                "α² V / (1 - α)",
                "(1 - α) / (α² V)",
                "α / [(1 - α) V]"
              ],
              "correct": 0,
              "explanation": "[ALLEN CE0051]: At equilibrium: [PCl₅] = (1 - α)/V, [PCl₃] = α/V, [Cl₂] = α/V. Kc = [PCl₃][Cl₂] / [PCl₅] = (α/V)(α/V) / ((1 - α)/V) = α² / [(1 - α) V].",
              "explanationHi": "साम्य पर [PCl₅] = (1 - α)/V, [PCl₃] = α/V, [Cl₂] = α/V। Kc = (α/V)² / ((1 - α)/V) = α² / [(1 - α)V]।"
            },
            {
              "id": "q_chem_37",
              "num": 37,
              "question": "[ALLEN NCR CB0215] According to Molecular Orbital Theory, which of the following species has the highest bond order?",
              "questionHi": "[ALLEN NCR CB0215] आण्विक कक्षक सिद्धांत (MOT) के अनुसार, निम्नलिखित में से किस स्पीशीज की बंध कोटि उच्चतम है?",
              "options": [
                "O₂",
                "O₂⁺",
                "O₂⁻",
                "O₂²⁻"
              ],
              "optionsHi": [
                "O₂",
                "O₂⁺",
                "O₂⁻",
                "O₂²⁻"
              ],
              "correct": 1,
              "explanation": "[ALLEN CB0215]: Bond orders from MOT: O₂ (16 e⁻) = 2.0; O₂⁺ (15 e⁻) = 2.5; O₂⁻ (17 e⁻) = 1.5; O₂²⁻ (18 e⁻) = 1.0. Therefore, O₂⁺ has the highest bond order (2.5).",
              "explanationHi": "MOT से बंध कोटि: O₂⁺ (15 e⁻) = 2.5 (उच्चतम); O₂ = 2.0; O₂⁻ = 1.5; O₂²⁻ = 1.0।"
            },
            {
              "id": "q_chem_38",
              "num": 38,
              "question": "[ALLEN NCR CB0218] Which of the following molecules has zero dipole moment (μ = 0) despite having polar bonds?",
              "questionHi": "[ALLEN NCR CB0218] ध्रुवीय बंध होने के बावजूद निम्नलिखित में से किस अणु का द्विध्रुव आघूर्ण शून्य (μ = 0) है?",
              "options": [
                "H₂O",
                "NH₃",
                "CCl₄",
                "SO₂"
              ],
              "optionsHi": [
                "H₂O",
                "NH₃",
                "CCl₄",
                "SO₂"
              ],
              "correct": 2,
              "explanation": "[ALLEN CB0218]: CCl₄ has a symmetrical regular tetrahedral geometry. The four polar C-Cl bond dipoles cancel each other symmetrically in 3D space, resulting in a net dipole moment μ = 0.",
              "explanationHi": "CCl₄ की सममित चतुष्फलकीय ज्यामिति होने के कारण चारों C-Cl द्विध्रुव एक दूसरे को निरस्त कर देते हैं (μ = 0)।"
            },
            {
              "id": "q_chem_39",
              "num": 39,
              "question": "[ALLEN NCR CB0222] Which type of hydrogen bonding is responsible for the abnormally high boiling point and viscosity of Glycerol?",
              "questionHi": "[ALLEN NCR CB0222] ग्लिसरॉल के असामान्य रूप से उच्च क्वथनांक तथा श्यानता के लिए किस प्रकार का हाइड्रोजन आबंधन उत्तरदायी है?",
              "options": [
                "Intramolecular hydrogen bonding",
                "Intermolecular hydrogen bonding",
                "Metallic bonding",
                "Ion-dipole interaction"
              ],
              "optionsHi": [
                "अंतःअणुक हाइड्रोजन आबंधन",
                "अंतरा-अणुक हाइड्रोजन आबंधन",
                "धात्विक आबंधन",
                "आयन-द्विध्रुव अन्योन्यक्रिया"
              ],
              "correct": 1,
              "explanation": "[ALLEN CB0222]: Glycerol has three -OH groups per molecule, leading to an extensive 3D network of intermolecular hydrogen bonding between different molecules, resulting in high viscosity and boiling point.",
              "explanationHi": "ग्लिसरॉल में तीन -OH समूह व्यापक अंतरा-अणुक हाइड्रोजन बंध बनाते हैं जिससे इसका क्वथनांक व श्यानता बहुत अधिक होती है।"
            },
            {
              "id": "q_chem_40",
              "num": 40,
              "question": "[ALLEN NCR CB0225] The hybridization and shape of ClF₃ molecule according to VSEPR theory are respectively:",
              "questionHi": "[ALLEN NCR CB0225] VSEPR सिद्धांत के अनुसार ClF₃ अणु का संकरण तथा आकृति क्रमशः हैं:",
              "options": [
                "sp³d and T-shaped",
                "sp³d and Trigonal bipyramidal",
                "sp³d² and Square planar",
                "sp³ and Pyramidal"
              ],
              "optionsHi": [
                "sp³d तथा T-आकृति",
                "sp³d तथा त्रिकोणीय द्विपिरामिडी",
                "sp³d² तथा वर्ग समतलीय",
                "sp³ तथा पिरामिडी"
              ],
              "correct": 0,
              "explanation": "[ALLEN CB0225]: In ClF₃, Chlorine has 7 valence electrons: 3 form single bonds with F, leaving 2 lone pairs. Total electron pairs = 3 + 2 = 5 (sp³d hybridization). The 2 lone pairs occupy equatorial positions, giving a bent T-shaped molecular geometry.",
              "explanationHi": "ClF₃ में 3 बंध युग्म + 2 एकाकी युग्म = 5 (sp³d संकरण)। दो एकाकी युग्म निरक्षीय स्थिति में होने से आकृति T-आकृति (T-shaped) होती है।"
            },
            {
              "id": "q_chem_41",
              "num": 41,
              "question": "[ALLEN NCR CS0083] The freezing point of a 1.0 molal NaCl aqueous solution assuming 100% dissociation is: (Kf for water = 1.86 K·kg·mol⁻¹):",
              "questionHi": "[ALLEN NCR CS0083] जल के लिए Kf = 1.86 K·kg·mol⁻¹ लेते हुए, 100% वियोजित 1.0 मोलल NaCl जलीय विलयन का हिमांक है:",
              "options": [
                "-1.86 °C",
                "-3.72 °C",
                "+3.72 °C",
                "-0.93 °C"
              ],
              "optionsHi": [
                "-1.86 °C",
                "-3.72 °C",
                "+3.72 °C",
                "-0.93 °C"
              ],
              "correct": 1,
              "explanation": "[ALLEN CS0083]: For 100% dissociated NaCl, i = 2. Depression in freezing point ΔTf = i Kf m = 2 × 1.86 × 1.0 = 3.72 °C. Freezing point Tf = 0 - 3.72 = -3.72 °C.",
              "explanationHi": "NaCl के लिए i = 2। ΔTf = 2 × 1.86 × 1.0 = 3.72 °C। अतः हिमांक = -3.72 °C।"
            },
            {
              "id": "q_chem_42",
              "num": 42,
              "question": "[ALLEN NCR CS0085] According to Raoult's law, the relative lowering of vapour pressure for a dilute solution of a non-volatile solute is equal to:",
              "questionHi": "[ALLEN NCR CS0085] राउल्ट के नियमानुसार, अवाष्पशील विलेय के तनु विलयन के लिए वाष्प दाब का आपेक्षिक अवनमन किसके बराबर होता है?",
              "options": [
                "Mole fraction of the solute",
                "Mole fraction of the solvent",
                "Molarity of the solution",
                "Mass percentage of the solute"
              ],
              "optionsHi": [
                "विलेय का मोल प्रभाज",
                "विलायक का मोल प्रभाज",
                "विलयन की मोलरता",
                "विलेय का द्रव्यमान प्रतिशत"
              ],
              "correct": 0,
              "explanation": "[ALLEN CS0085]: Raoult's Law states that for a non-volatile solute: (P° - P_s) / P° = x_solute (relative lowering of vapour pressure equals the mole fraction of solute).",
              "explanationHi": "राउल्ट के नियमानुसार: (P° - P_s)/P° = x_विलेय (विलेय का मोल प्रभाज)।"
            },
            {
              "id": "q_chem_43",
              "num": 43,
              "question": "[ALLEN NCR CE0054] In the reaction: A + 2B ⇌ 2C, if 2 moles of A and 2 moles of B are mixed in a 1 L vessel and at equilibrium 1 mole of C is formed, the equilibrium constant Kc is:",
              "questionHi": "[ALLEN NCR CE0054] अभिक्रिया: A + 2B ⇌ 2C में, यदि 1 L के पात्र में 2 मोल A तथा 2 मोल B मिलाए जाते हैं और साम्यावस्था पर 1 मोल C बनता है, तो साम्य स्थिरांक Kc है:",
              "options": [
                "0.67",
                "1.5",
                "0.5",
                "2.0"
              ],
              "optionsHi": [
                "0.67",
                "1.5",
                "0.5",
                "2.0"
              ],
              "correct": 0,
              "explanation": "[ALLEN CE0054]: 2 moles of C formed means 2x = 1 => x = 0.5. At equilibrium: [A] = 2 - 0.5 = 1.5 M; [B] = 2 - 2(0.5) = 1.0 M; [C] = 1.0 M. Kc = [C]² / ([A] [B]²) = (1.0)² / ((1.5) (1.0)²) = 1 / 1.5 = 2/3 ≈ 0.67 L·mol⁻¹.",
              "explanationHi": "[C] = 1 M => x = 0.5। साम्य पर [A] = 1.5 M, [B] = 1.0 M। Kc = 1² / (1.5 × 1²) = 1/1.5 ≈ 0.67।"
            },
            {
              "id": "q_chem_44",
              "num": 44,
              "question": "[ALLEN NCR CB0228] Which of the following diatomic molecules possesses only pi (π) bonds according to Molecular Orbital Theory?",
              "questionHi": "[ALLEN NCR CB0228] आण्विक कक्षक सिद्धांत (MOT) के अनुसार, निम्नलिखित में से किस द्विपरमाणुक अणु में केवल पाई (π) आबंध पाए जाते हैं?",
              "options": [
                "C₂",
                "N₂",
                "O₂",
                "Be₂"
              ],
              "optionsHi": [
                "C₂",
                "N₂",
                "O₂",
                "Be₂"
              ],
              "correct": 0,
              "explanation": "[ALLEN CB0228]: In C₂ (12 electrons): σ1s² σ*1s² σ2s² σ*2s² π2px²=π2py². The four valence electrons are both in degenerate π2px and π2py molecular orbitals, so the double bond in C₂ consists entirely of two pi bonds.",
              "explanationHi": "C₂ (12 e⁻) में संयोजी कक्षक π2px² तथा π2py² में दोनों इलेक्ट्रॉन युग्म होते हैं, अतः C₂ के दोनों बंध केवल पाई (π) बंध होते हैं।"
            },
            {
              "id": "q_chem_45",
              "num": 45,
              "question": "[ALLEN NCR CS0088] An azeotropic mixture of two liquids boils at a lower temperature than either of them when:",
              "questionHi": "[ALLEN NCR CS0088] दो द्रवों का स्थिरक्वाथी मिश्रण दोनों घटकों के क्वथनांक से कम ताप पर उबलता है जब:",
              "options": [
                "It shows positive deviation from Raoult's law",
                "It shows negative deviation from Raoult's law",
                "It behaves like an ideal solution",
                "Both liquids have identical vapour pressures"
              ],
              "optionsHi": [
                "यह राउल्ट के नियम से धनात्मक विचलन दर्शाता है",
                "यह राउल्ट के नियम से ऋणात्मक विचलन दर्शाता है",
                "यह आदर्श विलयन की तरह व्यवहार करता है",
                "दोनों द्रवों का वाष्प दाब समान होता है"
              ],
              "correct": 0,
              "explanation": "[ALLEN CS0088]: Minimum boiling azeotropes are formed by mixtures showing large positive deviations from Raoult's law, where vapour pressure reaches a maximum and boiling point reaches a minimum.",
              "explanationHi": "राउल्ट के नियम से अत्यधिक धनात्मक विचलन दर्शाने वाले विलयन न्यूनतम क्वथनांक स्थिरक्वाथी बनाते हैं।"
            }
          ]
        },
        {
          "id": "chem_sec_b",
          "name": "Chemistry - Section B",
          "nameHi": "रसायन विज्ञान - खंड B",
          "maxAttempt": 5,
          "questions": [
            {
              "id": "q_chem_46",
              "num": 46,
              "question": "[ALLEN NCR CB0232] The correct order of decreasing dipole moment among the following methyl halides is:",
              "questionHi": "[ALLEN NCR CB0232] निम्नलिखित मेथिल हैलाइडों में द्विध्रुव आघूर्ण का सही घटता क्रम है:",
              "options": [
                "CH₃Cl > CH₃F > CH₃Br > CH₃I",
                "CH₃F > CH₃Cl > CH₃Br > CH₃I",
                "CH₃Cl > CH₃Br > CH₃F > CH₃I",
                "CH₃I > CH₃Br > CH₃Cl > CH₃F"
              ],
              "optionsHi": [
                "CH₃Cl > CH₃F > CH₃Br > CH₃I",
                "CH₃F > CH₃Cl > CH₃Br > CH₃I",
                "CH₃Cl > CH₃Br > CH₃F > CH₃I",
                "CH₃I > CH₃Br > CH₃Cl > CH₃F"
              ],
              "correct": 0,
              "explanation": "[ALLEN CB0232]: Dipole moment μ = q × d. Although F is more electronegative than Cl, the C-Cl bond length (d) is significantly larger than C-F, making the product q × d higher for CH₃Cl (1.86 D) than CH₃F (1.82 D).",
              "explanationHi": "μ = q × d। C-Cl बंध लंबाई C-F से काफी अधिक होने के कारण CH₃Cl का द्विध्रुव आघूर्ण CH₃F से अधिक होता है: CH₃Cl > CH₃F > CH₃Br > CH₃I।"
            },
            {
              "id": "q_chem_47",
              "num": 47,
              "question": "[ALLEN NCR CS0092] A 0.2 molal aqueous solution of a weak electrolyte AB is 20% dissociated. The freezing point of the solution is: (Kf = 1.86 K·kg·mol⁻¹):",
              "questionHi": "[ALLEN NCR CS0092] एक दुर्बल विद्युत-अपघट्य AB का 0.2 मोलल जलीय विलयन 20% वियोजित होता है। विलयन का हिमांक है: (Kf = 1.86 K·kg·mol⁻¹):",
              "options": [
                "-0.446 °C",
                "-0.372 °C",
                "-0.223 °C",
                "-0.892 °C"
              ],
              "optionsHi": [
                "-0.446 °C",
                "-0.372 °C",
                "-0.223 °C",
                "-0.892 °C"
              ],
              "correct": 0,
              "explanation": "[ALLEN CS0092]: For AB ⇌ A⁺ + B⁻ (n = 2): i = 1 + (n - 1)α = 1 + (2 - 1)(0.20) = 1.20. ΔTf = i Kf m = 1.20 × 1.86 × 0.2 = 0.4464 °C. Freezing point = -0.446 °C.",
              "explanationHi": "i = 1 + α = 1 + 0.2 = 1.20। ΔTf = 1.2 × 1.86 × 0.2 = 0.446 °C => हिमांक = -0.446 °C।"
            },
            {
              "id": "q_chem_48",
              "num": 48,
              "question": "[ALLEN NCR CE0058] For the equilibrium: N₂O₄(g) ⇌ 2NO₂(g), the degree of dissociation α is related to equilibrium vapour density D and initial vapour density d by:",
              "questionHi": "[ALLEN NCR CE0058] साम्यावस्था: N₂O₄(g) ⇌ 2NO₂(g) के लिए, वियोजन की मात्रा α का प्रारंभिक वाष्प घनत्व D तथा साम्य वाष्प घनत्व d से संबंध है:",
              "options": [
                "α = (D - d) / d",
                "α = (d - D) / d",
                "α = (D - d) / D",
                "α = (D - d) / 2d"
              ],
              "optionsHi": [
                "α = (D - d) / d",
                "α = (d - D) / d",
                "α = (D - d) / D",
                "α = (D - d) / 2d"
              ],
              "correct": 0,
              "explanation": "[ALLEN CE0058]: For reaction of type A ⇌ nB, α = (D - d) / [(n - 1) d]. Here n = 2 (1 N₂O₄ gives 2 NO₂), so n - 1 = 1. Therefore, α = (D - d) / d.",
              "explanationHi": "α = (D - d) / [(n - 1)d]। यहाँ n = 2 है, अतः α = (D - d) / d।"
            },
            {
              "id": "q_chem_49",
              "num": 49,
              "question": "[ALLEN NCR CB0235] Which of the following arrangements represents the correct order of bond strength according to MOT?",
              "questionHi": "[ALLEN NCR CB0235] MOT के अनुसार बंध सामर्थ्य का सही क्रम कौन सा है?",
              "options": [
                "N₂ > O₂ > F₂",
                "O₂ > N₂ > F₂",
                "F₂ > O₂ > N₂",
                "N₂ > F₂ > O₂"
              ],
              "optionsHi": [
                "N₂ > O₂ > F₂",
                "O₂ > N₂ > F₂",
                "F₂ > O₂ > N₂",
                "N₂ > F₂ > O₂"
              ],
              "correct": 0,
              "explanation": "[ALLEN CB0235]: Bond strength is directly proportional to bond order. Bond orders: N₂ = 3.0 (triple bond), O₂ = 2.0 (double bond), F₂ = 1.0 (single bond). Thus N₂ > O₂ > F₂.",
              "explanationHi": "बंध सामर्थ्य ∝ बंध कोटि। N₂ (3) > O₂ (2) > F₂ (1)।"
            },
            {
              "id": "q_chem_50",
              "num": 50,
              "question": "[ALLEN NCR CE0062] The equilibrium constant Kp for the dissociation of solid ammonium hydrogen sulphide: NH₄HS(s) ⇌ NH₃(g) + H₂S(g) at a given temperature if total pressure at equilibrium is P is:",
              "questionHi": "[ALLEN NCR CE0062] ठोस अमोनियम हाइड्रोजन सल्फाइड के वियोजन: NH₄HS(s) ⇌ NH₃(g) + H₂S(g) के लिए यदि साम्य पर कुल दाब P है, तो Kp है:",
              "options": [
                "P² / 4",
                "P²",
                "P / 2",
                "P² / 2"
              ],
              "optionsHi": [
                "P² / 4",
                "P²",
                "P / 2",
                "P² / 2"
              ],
              "correct": 0,
              "explanation": "[ALLEN CE0062]: Equal moles of NH₃ and H₂S gases are produced. Therefore partial pressures are P_NH₃ = P/2 and P_H₂S = P/2. Kp = (P/2)(P/2) = P² / 4.",
              "explanationHi": "P_NH₃ = P/2 तथा P_H₂S = P/2। Kp = (P/2)(P/2) = P²/4।"
            }
          ]
        }
      ]
    },
    {
      "id": "bot",
      "name": "Botany",
      "nameHi": "वनस्पति विज्ञान",
      "subsections": [
        {
          "id": "bot_sec_a",
          "name": "Botany - Section A",
          "nameHi": "वनस्पति विज्ञान - खंड A",
          "maxAttempt": 20,
          "questions": [
            {
              "id": "q_bot_51",
              "num": 51,
              "question": "[ALLEN NCR BMP164] The standard (posterior) petal of a papilionaceous corolla is also called:",
              "questionHi": "[ALLEN NCR BMP164] तितलीनुमा (papilionaceous) दलपुंज का मानक (पश्च) दल क्या कहलाता है?",
              "options": [
                "Carina",
                "Pappus",
                "Vexillum",
                "Corona"
              ],
              "optionsHi": [
                "कैरिना (नौतल)",
                "पैपस",
                "वैक्सिलम (ध्वजक)",
                "कोरोना"
              ],
              "correct": 2,
              "explanation": "[ALLEN BMP164]: In papilionaceous corolla (Fabaceae), the largest posterior petal is called the standard or vexillum. The two lateral petals are called wings (alae), and the two anterior fused petals are called the keel (carina).",
              "explanationHi": "तितलीनुमा दलपुंज में सबसे बड़ा पश्च दल वैक्सिलम (ध्वजक) कहलाता है।"
            },
            {
              "id": "q_bot_52",
              "num": 52,
              "question": "[ALLEN NCR BMP165] A tricarpellary syncarpous gynoecium with a superior trilocular ovary and axile placentation is found in flowers of:",
              "questionHi": "[ALLEN NCR BMP165] त्रिअंडपी युक्तांडपी जायांग, ऊर्ध्ववर्ती त्रिकोष्ठीय अंडाशय तथा अक्षीय बीजांडन्यास किस कुल के पुष्पों में पाया जाता है?",
              "options": [
                "Liliaceae",
                "Solanaceae",
                "Fabaceae",
                "Poaceae"
              ],
              "optionsHi": [
                "लिलिएसी (Liliaceae)",
                "सोलेनेसी",
                "फेबेसी",
                "पोएसी"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP165]: Family Liliaceae (monocots like Allium, Aloe, Gloriosa) is characterized by a tricarpellary, syncarpous, superior ovary with 3 locules and axile placentation.",
              "explanationHi": "लिलिएसी कुल में त्रिअंडपी युक्तांडपी ऊर्ध्ववर्ती अंडाशय पाया जाता है।"
            },
            {
              "id": "q_bot_53",
              "num": 53,
              "question": "[ALLEN NCR BMP166] Which of the following is NOT a stem modification?",
              "questionHi": "[ALLEN NCR BMP166] निम्नलिखित में से कौन सा तने का रूपांतरण नहीं है?",
              "options": [
                "Pitcher of Nepenthes",
                "Thorns of Citrus",
                "Tendrils of Cucumber",
                "Flattened green structures of Opuntia"
              ],
              "optionsHi": [
                "नेपेंथीस का घट (Pitcher)",
                "सिट्रस के कांटे",
                "खीरे के प्रतान",
                "ओपंशिया की चपटी हरी संरचनाएँ"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP166]: The pitcher of pitcher plant (Nepenthes) is a leaf modification (modified lamina). Thorns of Citrus, tendrils of cucumber, and flattened phylloclades of Opuntia are stem modifications.",
              "explanationHi": "नेपेंथीस का घट पत्ती का रूपांतरण है। सिट्रस के कांटे, खीरे के प्रतान व नागफनी का पर्णाभ स्तंभ तने के रूपांतरण हैं।"
            },
            {
              "id": "q_bot_54",
              "num": 54,
              "question": "[ALLEN NCR BMP167] The single large, shield-shaped cotyledon of a maize grain (monocot) is called:",
              "questionHi": "[ALLEN NCR BMP167] मक्के के दाने (एकबीजपत्री) का एकल बड़ा ढाल के आकार का बीजपत्र कहलाता है:",
              "options": [
                "Plumule",
                "Coleorhiza",
                "Coleoptile",
                "Scutellum"
              ],
              "optionsHi": [
                "प्रांकुर",
                "मूलांकुरचोल",
                "प्रांकुरचोल",
                "स्कुटेलम (Scutellum)"
              ],
              "correct": 3,
              "explanation": "[ALLEN BMP167]: In monocot seeds such as Maize, the single large cotyledon situated towards one side of the embryonal axis is called the scutellum.",
              "explanationHi": "घास व मक्के के बीज में स्थित एकल ढालनुमा बीजपत्र स्कुटेलम कहलाता है।"
            },
            {
              "id": "q_bot_55",
              "num": 55,
              "question": "[ALLEN NCR BMP168] Stems modified into flat, green photosynthetic organs performing the functions of leaves, as seen in Opuntia, are known as:",
              "questionHi": "[ALLEN NCR BMP168] पत्तियों के कार्य करने हेतु चपटे हरे अंगों में रूपांतरित तने, जैसा कि ओपंशिया में देखा जाता है, कहलाते हैं:",
              "options": [
                "Cladodes",
                "Phyllodes",
                "Phylloclades",
                "Scales"
              ],
              "optionsHi": [
                "क्लैडोड",
                "पर्णाभ वृंत (Phyllode)",
                "पर्णाभ स्तंभ (Phylloclade)",
                "शल्क पत्र"
              ],
              "correct": 2,
              "explanation": "[ALLEN BMP168]: Flattened, green, fleshy stem modifications with multiple nodes and internodes that carry out photosynthesis are called phylloclades (e.g. Opuntia). Phyllodes are modified petioles (Acacia).",
              "explanationHi": "ओपंशिया में पत्ती जैसा कार्य करने वाला चपटा हरा तना पर्णाभ स्तंभ (Phylloclade) कहलाता है।"
            },
            {
              "id": "q_bot_56",
              "num": 56,
              "question": "[ALLEN NCR BMP169] The botanical term 'polyadelphous' is related to which floral whorl?",
              "questionHi": "[ALLEN NCR BMP169] वानस्पतिक शब्द 'बहुसंघी' (polyadelphous) किस पुष्पीय चक्र से संबंधित है?",
              "options": [
                "Corolla",
                "Calyx",
                "Gynoecium",
                "Androecium"
              ],
              "optionsHi": [
                "दलपुंज",
                "बाह्यदलपुंज",
                "जायांग",
                "पुमंग (Androecium)"
              ],
              "correct": 3,
              "explanation": "[ALLEN BMP169]: Polyadelphous refers to an androecium where stamens are fused by their filaments into many bundles or groups, as seen in Citrus flowers.",
              "explanationHi": "जब पुंकेसरों के तंतु कई गुच्छों में जुड़े होते हैं (उदा. नींबू), तो इसे बहुसंघी (polyadelphous) पुमंग कहते हैं।"
            },
            {
              "id": "q_bot_57",
              "num": 57,
              "question": "[ALLEN NCR BMP170] How many plants among: Salvia, Mustard, Radish, Turnip have stamens of different lengths in their flowers?",
              "questionHi": "[ALLEN NCR BMP170] निम्नलिखित में से कितने पादपों के पुष्पों में अलग-अलग लंबाई के पुंकेसर होते हैं: साल्विया, सरसों, मूली, शलजम?",
              "options": [
                "One",
                "Two",
                "Three",
                "Four"
              ],
              "optionsHi": [
                "एक",
                "दो",
                "तीन",
                "चार (सभी)"
              ],
              "correct": 3,
              "explanation": "[ALLEN BMP170]: Didynamous stamens (2 long + 2 short) occur in Salvia. Tetradynamous stamens (4 long + 2 short) occur in Cruciferae / Brassicaceae members: Mustard, Radish, and Turnip. Thus all 4 plants possess stamens of different lengths.",
              "explanationHi": "साल्विया में द्विदीर्घी (didynamous) तथा सरसों, मूली व शलजम में चतुर्दीर्घी (tetradynamous) पुंकेसर होते हैं, अतः चारों में विभिन्न लंबाई के पुंकेसर होते हैं।"
            },
            {
              "id": "q_bot_58",
              "num": 58,
              "question": "[ALLEN NCR BMP172] In unilocular ovary with ovules attached along the ridge of the ventral suture, the placentation is:",
              "questionHi": "[ALLEN NCR BMP172] अधर सीवनी के कटक पर लगे बीजांडों वाले एककोष्ठीय अंडाशय में बीजांडन्यास होता है:",
              "options": [
                "Marginal",
                "Axile",
                "Parietal",
                "Free central"
              ],
              "optionsHi": [
                "सीमांत (Marginal)",
                "अक्षीय",
                "भित्तीय",
                "मुक्त स्तंभीय"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP172]: In marginal placentation (typical of Pea/Fabaceae), the placenta forms a ridge along the ventral suture of the monocarpellary ovary and ovules are borne along this ridge.",
              "explanationHi": "मटर में अधर सीवन पर कटक बनता है जिस पर बीजांड लगे होते हैं, इसे सीमांत (marginal) बीजांडन्यास कहते हैं।"
            },
            {
              "id": "q_bot_59",
              "num": 59,
              "question": "[ALLEN NCR BMP175] Roots that develop from parts of the plant other than the radicle are called:",
              "questionHi": "[ALLEN NCR BMP175] मूलांकुर (radicle) के अतिरिक्त पादप के किसी अन्य भाग से विकसित होने वाली जड़ें कहलाती हैं:",
              "options": [
                "Tap roots",
                "Adventitious roots",
                "Fibrous roots",
                "Nodulated roots"
              ],
              "optionsHi": [
                "मूसला जड़ें",
                "अपस्थानिक जड़ें (Adventitious)",
                "झकड़ा जड़ें",
                "ग्रंथिल जड़ें"
              ],
              "correct": 1,
              "explanation": "[ALLEN BMP175]: Roots arising from any part of the plant other than the radicle (such as stem nodes or leaves, e.g. Banyan, Monstera, Grasses) are called adventitious roots.",
              "explanationHi": "मूलांकुर के अलावा तने या पत्तियों से निकलने वाली जड़ें अपस्थानिक जड़ें कहलाती हैं।"
            },
            {
              "id": "q_bot_60",
              "num": 60,
              "question": "[ALLEN NCR BPA118] Specialized cells of permanent tissue that are living, thin-walled with cellulose, and perform functions like photosynthesis, storage, and secretion are:",
              "questionHi": "[ALLEN NCR BPA118] स्थायी ऊतक की वे विशिष्ट कोशिकाएँ जो जीवित, पतली सेल्युलोज भित्ति वाली होती हैं तथा प्रकाश संश्लेषण, संचयन और स्रावण का कार्य करती हैं, कहलाती हैं:",
              "options": [
                "Parenchyma",
                "Collenchyma",
                "Sclerenchyma fibres",
                "Sclereids"
              ],
              "optionsHi": [
                "मृदूतक (Parenchyma)",
                "स्थूलकोण ऊतक",
                "दृढ़ोतक रेशे",
                "स्कलेरीड्स"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA118]: Parenchyma forms the major component within plant organs. Its cells are living, isodiametric, with thin cellulose walls, and perform photosynthesis, storage, and secretion.",
              "explanationHi": "मृदूतक (Parenchyma) पतली भित्ति युक्त जीवित कोशिकाएँ होती हैं जो भोजन संचयन, स्रावण व प्रकाश संश्लेषण करती हैं।"
            },
            {
              "id": "q_bot_61",
              "num": 61,
              "question": "[ALLEN NCR BPA120] Collenchyma tissue provides mechanical support to growing parts of the plant such as young stems and petioles. Its cells are characterized by:",
              "questionHi": "[ALLEN NCR BPA120] स्थूलकोण ऊतक तरुण तने तथा पर्णवृंत जैसे बढ़ते हुए अंगों को यांत्रिक सहारा प्रदान करता है। इसकी कोशिकाओं की विशेषता है:",
              "options": [
                "Thickenings of cellulose, hemicellulose and pectin at corners",
                "Lignified secondary cell walls with simple pits",
                "Suberized impermeable cell walls",
                "Dead empty cells without protoplasts"
              ],
              "optionsHi": [
                "कोनों पर सेल्युलोज, हेमीसेल्युलोज तथा पेक्टिन का स्थूलन",
                "लिग्नीकृत द्वितीयक कोशिका भित्ति",
                "सुबेरिनयुक्त अपारगम्य भित्ति",
                "जीवद्रव्य रहित मृत कोशिकाएँ"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA120]: Collenchyma consists of living cells with localized corner thickenings of cellulose, hemicellulose, and pectin. They provide tensile strength and flexibility without intercellular spaces.",
              "explanationHi": "स्थूलकोण ऊतक (Collenchyma) के कोनों पर पेक्टिन व सेल्युलोज का निक्षेपण होता है।"
            },
            {
              "id": "q_bot_62",
              "num": 62,
              "question": "[ALLEN NCR BPA122] Sclerenchymatous stone cells (sclereids) with extremely thick lignified walls and very narrow lumens are found in:",
              "questionHi": "[ALLEN NCR BPA122] अत्यधिक मोटी लिग्नीकृत भित्ति तथा संकीर्ण गुहा वाली अश्म कोशिकाएँ (स्कलेरीड्स) पाई जाती हैं:",
              "options": [
                "Fruit pulp of guava, pear and sapota",
                "Seed coat of legumes",
                "Leaves of tea",
                "All of the above"
              ],
              "optionsHi": [
                "अमरूद, नाशपाती तथा चीकू के गूदे में",
                "लेग्यूम के बीजावरण में",
                "चाय की पत्तियों में",
                "उपरोक्त सभी में"
              ],
              "correct": 3,
              "explanation": "[ALLEN BPA122]: According to NCERT, sclereids are found in the fruit walls of nuts; pulp of fruits like guava, pear and sapota; seed coats of legumes; and leaves of tea. Hence all of the above.",
              "explanationHi": "स्कलेरीड्स अमरूद, नाशपाती, चीकू के गूदे, दालों के बीजावरण तथा चाय की पत्तियों में पाए जाते हैं (उपरोक्त सभी)।"
            },
            {
              "id": "q_bot_63",
              "num": 63,
              "question": "[ALLEN NCR BPA124] Which constituent of complex permanent tissue xylem possesses perforated end walls and forms a long continuous tube for water conduction?",
              "questionHi": "[ALLEN NCR BPA124] जटिल स्थायी ऊतक जाइलम का कौन सा घटक छिद्रित अंत भित्ति युक्त होकर जल संवहन के लिए एक लंबी सतत नली बनाता है?",
              "options": [
                "Tracheids",
                "Vessels",
                "Xylem fibres",
                "Xylem parenchyma"
              ],
              "optionsHi": [
                "वाहिनिकाएँ (Tracheids)",
                "वाहिकाएँ (Vessels)",
                "जाइलम रेशे",
                "जाइलम मृदूतक"
              ],
              "correct": 1,
              "explanation": "[ALLEN BPA124]: Xylem vessels consist of multiple cylindrical vessel elements joined end-to-end with perforated end walls forming continuous conduits for water transport in angiosperms.",
              "explanationHi": "जाइलम वाहिकाएँ (Vessels) अंत भित्तियों पर छिद्रित होकर जल संवहन हेतु सतत नलिका बनाती हैं।"
            },
            {
              "id": "q_bot_64",
              "num": 64,
              "question": "[ALLEN NCR BPA126] In angiosperm phloem, the transport of food occurs through sieve tubes. Sieve tube elements are closely connected and dependent for their nuclear regulation on:",
              "questionHi": "[ALLEN NCR BPA126] आवृतबीजी फ्लोएम में भोजन का परिवहन चालनी नलिकाओं द्वारा होता है। चालनी नलिका तत्व अपने केंद्रकीय नियमन के लिए किससे घनिष्ठ रूप से जुड़े होते हैं?",
              "options": [
                "Companion cells",
                "Phloem parenchyma",
                "Bast fibres",
                "Albuminous cells"
              ],
              "optionsHi": [
                "सहचर कोशिकाएँ (Companion cells)",
                "फ्लोएम मृदूतक",
                "फ्लोएम रेशे",
                "एल्ब्यूमिनस कोशिकाएँ"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA126]: Sieve tube elements lose their nucleus at maturity. The companion cells contain large nuclei that control the metabolic activities and maintain pressure gradients in sieve tubes.",
              "explanationHi": "परिपक्व चालनी नलिका में केंद्रक नहीं होता, इसका चयापचय सहचर कोशिकाओं (companion cells) के केंद्रक द्वारा नियंत्रित होता है।"
            },
            {
              "id": "q_bot_65",
              "num": 65,
              "question": "[ALLEN NCR BMP178] A flower with radial symmetry that can be divided into two equal halves along any vertical plane passing through the centre is called:",
              "questionHi": "[ALLEN NCR BMP178] अरीय सममिति वाला पुष्प जिसे केंद्र से गुजरने वाले किसी भी ऊर्ध्वाधर तल से दो समान भागों में विभाजित किया जा सकता है, कहलाता है:",
              "options": [
                "Actinomorphic",
                "Zygomorphic",
                "Asymmetric",
                "Epigynous"
              ],
              "optionsHi": [
                "त्रिज्या सममित (Actinomorphic)",
                "एकव्याससममित (Zygomorphic)",
                "असममित",
                "जायांगोपरिक"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP178]: When a flower can be divided into two equal radial halves in any radial plane passing through the centre, it is actinomorphic (e.g. Mustard, Datura, Chilli).",
              "explanationHi": "केंद्र से गुजरने वाले किसी भी तल से दो समान भागों में कटने वाला पुष्प त्रिज्या सममित (actinomorphic) कहलाता है।"
            },
            {
              "id": "q_bot_66",
              "num": 66,
              "question": "[ALLEN NCR BMP180] The condition where stamens are attached directly to the petals, as observed in Brinjal and Solanaceae, is known as:",
              "questionHi": "[ALLEN NCR BMP180] वह अवस्था जिसमें पुंकेसर सीधे दलों से जुड़े होते हैं, जैसा कि बैंगन तथा सोलेनेसी में देखा जाता है, कहलाती है:",
              "options": [
                "Epipetalous",
                "Epitepalous",
                "Gynandrous",
                "Syngenesious"
              ],
              "optionsHi": [
                "दललग्न (Epipetalous)",
                "परिदललग्न",
                "पुंजायांगी",
                "युक्तपोषी"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP180]: When stamens are attached to the petals, they are epipetalous (e.g. Brinjal, Solanaceae). When attached to perianth tepals, they are epiphyllous / epitepalous (e.g. Lily).",
              "explanationHi": "जब पुंकेसर दलपुंज से जुड़े हों, तो इसे दललग्न (epipetalous) कहते हैं (उदा. बैंगन)।"
            },
            {
              "id": "q_bot_67",
              "num": 67,
              "question": "[ALLEN NCR BMP182] Which of the following is a drupe fruit developed from a monocarpellary superior ovary?",
              "questionHi": "[ALLEN NCR BMP182] एकअंडपी ऊर्ध्ववर्ती अंडाशय से विकसित होने वाला अष्ठिल फल (drupe) निम्नलिखित में से कौन सा है?",
              "options": [
                "Mango and Coconut",
                "Tomato and Brinjal",
                "Apple and Pear",
                "Guava and Cucumber"
              ],
              "optionsHi": [
                "आम तथा नारियल",
                "टमाटर तथा बैंगन",
                "सेब तथा नाशपाती",
                "अमरूद तथा खीरा"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP182]: Mango and Coconut are drupe fruits developed from monocarpellary superior ovaries and are one-seeded.",
              "explanationHi": "आम और नारियल एकअंडपी ऊर्ध्ववर्ती अंडाशय से विकसित होने वाले अष्ठिल (drupe) फल हैं।"
            },
            {
              "id": "q_bot_68",
              "num": 68,
              "question": "[ALLEN NCR BPA128] Which meristem occurs at the tips of roots and shoots and produces primary tissues of the plant body?",
              "questionHi": "[ALLEN NCR BPA128] कौन सा विभज्योतक मूल तथा प्ररोह के शीर्ष पर पाया जाता है और प्राथमिक ऊतकों का निर्माण करता है?",
              "options": [
                "Apical meristem",
                "Lateral meristem",
                "Intercalary meristem",
                "Cork cambium"
              ],
              "optionsHi": [
                "शीर्षस्थ विभज्योतक (Apical)",
                "पार्श्व विभज्योतक",
                "अंतर्वेशी विभज्योतक",
                "कॉर्क कैम्बियम"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA128]: Apical meristems occur at root and shoot apices and produce primary body tissues responsible for vertical elongation.",
              "explanationHi": "शीर्षस्थ विभज्योतक (Apical meristem) जड़ व तने के शीर्ष पर रहकर प्राथमिक वृद्धि करता है।"
            },
            {
              "id": "q_bot_69",
              "num": 69,
              "question": "[ALLEN NCR BMP185] An underground stem modification seen in Colocasia and Zamikand with condensed vertical fleshy stem axis is called a:",
              "questionHi": "[ALLEN NCR BMP185] कोलोकेसिया तथा जमीकंद में देखा जाने वाला ऊर्ध्वाधर मांसल तने का भूमिगत रूपांतरण कहलाता है:",
              "options": [
                "Corm",
                "Rhizome",
                "Tuber",
                "Bulb"
              ],
              "optionsHi": [
                "घनकंद (Corm)",
                "प्रकंद (Rhizome)",
                "कंद (Tuber)",
                "शल्ककंद (Bulb)"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP185]: A corm is a vertically oriented, swollen, fleshy underground stem storehouse for food (e.g. Amorphophallus/Zamikand, Colocasia).",
              "explanationHi": "जमीकंद तथा अरबी (कोलोकेसिया) में ऊर्ध्वाधर रूप से फूला हुआ तना घनकंद (Corm) कहलाता है।"
            },
            {
              "id": "q_bot_70",
              "num": 70,
              "question": "[ALLEN NCR BPA130] The only living cells found in mature angiospermic xylem tissue are:",
              "questionHi": "[ALLEN NCR BPA130] परिपक्व आवृतबीजी जाइलम ऊतक में पाई जाने वाली एकमात्र जीवित कोशिकाएँ हैं:",
              "options": [
                "Xylem parenchyma",
                "Tracheids",
                "Vessels",
                "Xylem fibres"
              ],
              "optionsHi": [
                "जाइलम मृदूतक (Xylem parenchyma)",
                "वाहिनिकाएँ",
                "वाहिकाएँ",
                "जाइलम रेशे"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA130]: In xylem, tracheids, vessels, and xylem fibres are all dead and lignified at maturity. Only xylem parenchyma cells are living and thin-walled.",
              "explanationHi": "जाइलम में केवल जाइलम मृदूतक ही जीवित कोशिकाएँ होती हैं।"
            }
          ]
        },
        {
          "id": "bot_sec_b",
          "name": "Botany - Section B",
          "nameHi": "वनस्पति विज्ञान - खंड B",
          "maxAttempt": 5,
          "questions": [
            {
              "id": "q_bot_71",
              "num": 71,
              "question": "[ALLEN NCR BMP188] Persistent calyx that remains attached to the mature fruit is a diagnostic feature of family:",
              "questionHi": "[ALLEN NCR BMP188] परिपक्व फल से जुड़ा रहने वाला चिरलग्न बाह्यदलपुंज (persistent calyx) किस कुल का लाक्षणिक गुण है?",
              "options": [
                "Solanaceae (Brinjal, Tomato)",
                "Fabaceae (Pea)",
                "Liliaceae (Allium)",
                "Malvaceae"
              ],
              "optionsHi": [
                "सोलेनेसी (बैंगन, टमाटर)",
                "फेबेसी",
                "लिलिएसी",
                "मालवेसी"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP188]: Persistent calyx is a characteristic feature of family Solanaceae, clearly visible on Brinjal, Tomato, and Chilli fruits.",
              "explanationHi": "चिरलग्न बाह्यदलपुंज सोलेनेसी (बैंगन, टमाटर, मिर्च) का प्रमुख लक्षण है।"
            },
            {
              "id": "q_bot_72",
              "num": 72,
              "question": "[ALLEN NCR BMP190] In Garlic and Onion, the edible fleshy part used as food is derived from:",
              "questionHi": "[ALLEN NCR BMP190] लहसुन तथा प्याज में भोजन के रूप में खाया जाने वाला मांसल भाग किससे व्युत्पन्न होता है?",
              "options": [
                "Fleshy scale leaves",
                "Compressed stem",
                "Roots",
                "Petiole"
              ],
              "optionsHi": [
                "मांसल शल्क पत्र (Scale leaves)",
                "संक्षिप्त तना",
                "जड़ें",
                "पर्णवृंत"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP190]: In bulbs of Onion and Garlic, the edible parts are fleshy scale leaves storing carbohydrates surrounding a highly reduced disc-like stem.",
              "explanationHi": "प्याज और लहसुन में भोजन संग्रह करने वाले मांसल शल्क पत्र खाए जाते हैं।"
            },
            {
              "id": "q_bot_73",
              "num": 73,
              "question": "[ALLEN NCR BPA132] Interfascicular cambium and cork cambium are classified on the basis of origin as:",
              "questionHi": "[ALLEN NCR BPA132] उत्पत्ति के आधार पर अंतरपूलीय कैम्बियम तथा कॉर्क कैम्बियम को वर्गीकृत किया जाता है:",
              "options": [
                "Secondary meristems",
                "Primary meristems",
                "Promeristems",
                "Permanent tissues"
              ],
              "optionsHi": [
                "द्वितीयक विभज्योतक (Secondary meristems)",
                "प्राथमिक विभज्योतक",
                "प्राक-विभज्योतक",
                "स्थायी ऊतक"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA132]: Interfascicular cambium and cork cambium (phellogen) arise later in plant life from differentiated permanent cells via dedifferentiation, hence are secondary meristems.",
              "explanationHi": "अंतरपूलीय कैम्बियम और कागजन (कॉर्क कैम्बियम) निर्विभेदीकरण से बनते हैं, अतः ये द्वितीयक विभज्योतक हैं।"
            },
            {
              "id": "q_bot_74",
              "num": 74,
              "question": "[ALLEN NCR BMP192] When a flower has both androecium and gynoecium present together, the flower is called:",
              "questionHi": "[ALLEN NCR BMP192] जब किसी पुष्प में पुमंग और जायांग दोनों उपस्थित होते हैं, तो पुष्प कहलाता है:",
              "options": [
                "Bisexual",
                "Unisexual",
                "Staminate",
                "Pistillate"
              ],
              "optionsHi": [
                "द्विलिंगी (Bisexual)",
                "एकलिंगी",
                "पुंकेसरी",
                "स्त्रीकेसरी"
              ],
              "correct": 0,
              "explanation": "[ALLEN BMP192]: A flower possessing both male (androecium) and female (gynoecium) reproductive organs is designated as bisexual.",
              "explanationHi": "पुमंग व जायांग दोनों युक्त पुष्प द्विलिंगी कहलाता है।"
            },
            {
              "id": "q_bot_75",
              "num": 75,
              "question": "[ALLEN NCR BPA135] Gymnosperms lack true xylem vessels and which element in their phloem?",
              "questionHi": "[ALLEN NCR BPA135] अनावृतबीजी (जिम्नोस्पर्म) पादपों में जाइलम वाहिकाएँ तथा फ्लोएम में कौन सा घटक अनुपस्थित होता है?",
              "options": [
                "Companion cells",
                "Sieve cells",
                "Phloem parenchyma",
                "Albuminous cells"
              ],
              "optionsHi": [
                "सहचर कोशिकाएँ (Companion cells)",
                "चालनी कोशिकाएँ",
                "फ्लोएम मृदूतक",
                "एल्ब्यूमिनस कोशिकाएँ"
              ],
              "correct": 0,
              "explanation": "[ALLEN BPA135]: Gymnosperms lack true xylem vessels and companion cells (they have albuminous cells and sieve cells).",
              "explanationHi": "जिम्नोस्पर्म में जाइलम वाहिकाएँ तथा फ्लोएम में सहचर कोशिकाएँ अनुपस्थित होती हैं।"
            }
          ]
        }
      ]
    },
    {
      "id": "zoo",
      "name": "Zoology",
      "nameHi": "प्राणी विज्ञान",
      "subsections": [
        {
          "id": "zoo_sec_a",
          "name": "Zoology - Section A",
          "nameHi": "प्राणी विज्ञान - खंड A",
          "maxAttempt": 20,
          "questions": [
            {
              "id": "q_zoo_76",
              "num": 76,
              "question": "[ALLEN NCR BFC235] Which of the following is an INCORRECT match of white blood cells with their functions?\n(1) Neutrophils - Phagocytic cells\n(2) Eosinophils - Resist infections and associated with allergic reactions\n(3) Basophils - Secrete histamine, serotonin and heparin\n(4) T-Lymphocytes - Directly secrete circulating antibodies",
              "questionHi": "[ALLEN NCR BFC235] श्वेत रक्त कणिकाओं का उनके कार्यों के साथ निम्नलिखित में से कौन सा गलत मिलान है?\n(1) न्यूट्रोफिल - भक्षकाणु कोशिकाएँ\n(2) इओसिनोफिल - संक्रमण से बचाव व एलर्जी से संबंधित\n(3) बेसोफिल - हिस्टामिन, सेरोटोनिन व हेपरिन का स्रावण\n(4) T-लिम्फोसाइट - सीधे संचारी एंटीबॉडीज स्रावित करना",
              "options": [
                "Neutrophils - Phagocytic cells",
                "Eosinophils - Resist infections and associated with allergic reactions",
                "Basophils - Secrete histamine, serotonin and heparin",
                "T-Lymphocytes - Directly secrete circulating antibodies"
              ],
              "optionsHi": [
                "न्यूट्रोफिल - भक्षकाणु कोशिकाएँ",
                "इओसिनोफिल - संक्रमण से बचाव व एलर्जी से संबंधित",
                "बेसोफिल - हिस्टामिन, सेरोटोनिन व हेपरिन का स्रावण",
                "T-लिम्फोसाइट - सीधे संचारी एंटीबॉडीज स्रावित करना"
              ],
              "correct": 3,
              "explanation": "[ALLEN BFC235]: B-lymphocytes (plasma cells) produce circulating antibodies. T-lymphocytes do not secrete antibodies directly; they provide cell-mediated immunity and assist B-cells.",
              "explanationHi": "एंटीबॉडीज का उत्पादन B-लिम्फोसाइट्स द्वारा होता है, T-लिम्फोसाइट्स कोशिका-माध्यित प्रतिरक्षा प्रदान करते हैं।"
            },
            {
              "id": "q_zoo_77",
              "num": 77,
              "question": "[ALLEN NCR BFC236] The clinical state of the heart when it is not pumping blood effectively enough to meet the metabolic needs of the body is termed:",
              "questionHi": "[ALLEN NCR BFC236] हृदय की वह स्थिति जब यह शरीर की आवश्यकताओं को पूरा करने के लिए प्रभावी रूप से रक्त पंप नहीं कर पाता है, कहलाती है:",
              "options": [
                "Heart attack",
                "Cardiac arrest",
                "Angina pectoris",
                "Heart failure"
              ],
              "optionsHi": [
                "हार्ट अटैक",
                "कार्डियक अरेस्ट",
                "एंजाइना पेक्टोरिस",
                "हार्ट फेलियर (हृदय पात)"
              ],
              "correct": 3,
              "explanation": "[ALLEN BFC236]: Heart failure means the state of the heart when it does not pump blood effectively enough to meet the needs of the body. Cardiac arrest is when heart stops beating; Heart attack is when heart muscle is suddenly damaged.",
              "explanationHi": "हार्ट फेलियर वह स्थिति है जब हृदय शरीर की आवश्यकताओं के अनुसार रक्त पंप नहीं कर पाता।"
            },
            {
              "id": "q_zoo_78",
              "num": 78,
              "question": "[ALLEN NCR BFC237] The atrioventricular aperture between the right atrium and right ventricle is guarded by:",
              "questionHi": "[ALLEN NCR BFC237] दाएँ आलिंद तथा दाएँ निलय के बीच का छिद्र किस कपाट द्वारा रक्षित होता है?",
              "options": [
                "Tricuspid valve",
                "Bicuspid (Mitral) valve",
                "Aortic semilunar valve",
                "Eustachian valve"
              ],
              "optionsHi": [
                "त्रिवलनी कपाट (Tricuspid)",
                "द्विवलनी (मिट्रल) कपाट",
                "महाधमनी अर्धचंद्राकार कपाट",
                "यूस्टेशियन कपाट"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC237]: The opening between right atrium and right ventricle is guarded by the tricuspid valve (having 3 muscular cusps). The bicuspid/mitral valve guards the left AV opening.",
              "explanationHi": "दाएँ आलिंद व दाएँ निलय के मध्य त्रिवलनी कपाट (Tricuspid valve) पाया जाता है।"
            },
            {
              "id": "q_zoo_79",
              "num": 79,
              "question": "[ALLEN NCR BFC238] Incomplete double circulation where oxygenated and deoxygenated blood mix in a single ventricle is found in:",
              "questionHi": "[ALLEN NCR BFC238] अपूर्ण दोहरा परिसंचरण जिसमें ऑक्सीजनित व विऑक्सीजनित रक्त एकल निलय में मिश्रित हो जाते हैं, किसमें पाया जाता है?",
              "options": [
                "Reptiles and Birds",
                "Amphibians and Reptiles",
                "Birds and Mammals",
                "Fishes and Amphibia"
              ],
              "optionsHi": [
                "सरीसृप तथा पक्षी",
                "उभयचर तथा सरीसृप (Amphibians & Reptiles)",
                "पक्षी तथा स्तनधारी",
                "मत्स्य तथा उभयचर"
              ],
              "correct": 1,
              "explanation": "[ALLEN BFC238]: Amphibians and reptiles (except crocodiles) possess a 3-chambered heart (2 atria + 1 ventricle), where blood mixes in the ventricle, creating incomplete double circulation.",
              "explanationHi": "उभयचरों व सरीसृपों में 3-कक्षीय हृदय होने के कारण अपूर्ण दोहरा परिसंचरण होता है।"
            },
            {
              "id": "q_zoo_80",
              "num": 80,
              "question": "[ALLEN NCR BFC239] The first heart sound ('lubb') during the cardiac cycle is associated with:",
              "questionHi": "[ALLEN NCR BFC239] हृद चक्र के दौरान प्रथम हृदय ध्वनि ('लब') किससे संबंधित है?",
              "options": [
                "Closure of semilunar valves",
                "Closure of tricuspid and bicuspid (AV) valves",
                "Opening of semilunar valves",
                "Opening of bicuspid valve"
              ],
              "optionsHi": [
                "अर्धचंद्राकार कपाटों का बंद होना",
                "त्रिवलनी तथा द्विवलनी (AV) कपाटों का बंद होना",
                "अर्धचंद्राकार कपाटों का खुलना",
                "द्विवलनी कपाट का खुलना"
              ],
              "correct": 1,
              "explanation": "[ALLEN BFC239]: The first heart sound 'lubb' is caused by the closure of the atrioventricular (tricuspid and bicuspid) valves at the onset of ventricular systole.",
              "explanationHi": "प्रथम ध्वनि 'लब' निलय संकुचन के प्रारंभ में त्रिवलनी व द्विवलनी कपाटों के बंद होने से उत्पन्न होती है।"
            },
            {
              "id": "q_zoo_81",
              "num": 81,
              "question": "[ALLEN NCR BFC240] A reduction in the number of blood platelets (thrombocytopenia) leads to:",
              "questionHi": "[ALLEN NCR BFC240] रक्त प्लेटलेट्स की संख्या में कमी (थ्रॉम्बोसाइटोपेनिया) का परिणाम होता है:",
              "options": [
                "Clotting disorders and excessive blood loss from the body",
                "Polycythemia",
                "Severe leukopenia",
                "Enhanced prothrombin formation"
              ],
              "optionsHi": [
                "स्कंदन विकार तथा शरीर से अत्यधिक रक्तस्राव",
                "पॉलीसिथीमिया",
                "ल्यूकोपेनिया",
                "प्रोथ्रॉम्बिन निर्माण में वृद्धि"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC240]: Platelets release thromboplastin essential for coagulation. A reduction in platelet count causes clotting disorders leading to excessive blood loss.",
              "explanationHi": "प्लेटलेट्स की कमी से रक्त का थक्का नहीं जम पाता और अत्यधिक रक्तस्राव होता है।"
            },
            {
              "id": "q_zoo_82",
              "num": 82,
              "question": "[ALLEN NCR BFC242] The Sino-atrial Node (SAN) of the human heart is situated in:",
              "questionHi": "[ALLEN NCR BFC242] मानव हृदय का शिरा-आलिंद पर्व (SAN) कहाँ स्थित होता है?",
              "options": [
                "Upper right corner of the right atrium",
                "Lower left corner of the right atrium",
                "Upper left corner of the left atrium",
                "Interventricular septum"
              ],
              "optionsHi": [
                "दाएँ आलिंद के ऊपरी दाएँ कोने में",
                "दाएँ आलिंद के निचले बाएँ कोने में",
                "बाएँ आलिंद के ऊपरी बाएँ कोने में",
                "अंतरा-निलय पट में"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC242]: The SAN is located in the upper right wall/corner of the right atrium near the opening of superior vena cava.",
              "explanationHi": "SAN दाएँ आलिंद के ऊपरी दाएँ कोने में स्थित होता है।"
            },
            {
              "id": "q_zoo_83",
              "num": 83,
              "question": "[ALLEN NCR BFC244] Which of the following is correct regarding blood grouping and compatibility in humans?",
              "questionHi": "[ALLEN NCR BFC244] मानव में रक्त समूहन तथा सुसंगतता के संबंध में निम्नलिखित में से कौन सा सही है?",
              "options": [
                "Person with blood group 'O' is universal donor because RBCs lack antigens A and B",
                "Person with blood group 'AB' is universal donor",
                "Person with blood group 'O' has both antigens A and B on RBCs",
                "Person with blood group 'A' can donate blood to group 'B'"
              ],
              "optionsHi": [
                "रक्त समूह 'O' वाला व्यक्ति सर्वदाता है क्योंकि RBC पर प्रतिजन A व B अनुपस्थित होते हैं",
                "रक्त समूह 'AB' वाला व्यक्ति सर्वदाता है",
                "रक्त समूह 'O' वाले की RBC पर A व B दोनों प्रतिजन होते हैं",
                "रक्त समूह 'A' वाला व्यक्ति 'B' को रक्त दे सकता है"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC244]: Group O RBCs have neither A nor B surface antigens, so anti-A or anti-B antibodies in the recipient cannot agglutinate them, making O universal donor.",
              "explanationHi": "रक्त समूह 'O' की लाल रुधिर कणिकाओं पर कोई प्रतिजन नहीं होता, अतः यह सर्वदाता कहलाता है।"
            },
            {
              "id": "q_zoo_84",
              "num": 84,
              "question": "[ALLEN NCR BFC246] The ECG wave that marks the repolarisation of the ventricles and the end of ventricular systole is the:",
              "questionHi": "[ALLEN NCR BFC246] ईसीजी (ECG) की वह तरंग जो निलयों के पुनर्ध्रुवण तथा निलय प्रकुंचन के अंत को दर्शाती है, वह है:",
              "options": [
                "P wave",
                "Q wave",
                "QRS complex",
                "T wave"
              ],
              "optionsHi": [
                "P तरंग",
                "Q तरंग",
                "QRS सम्मिश्र",
                "T तरंग"
              ],
              "correct": 3,
              "explanation": "[ALLEN BFC246]: The T wave represents the return of the ventricles from excited to normal state (repolarisation). The end of the T-wave marks the end of systole.",
              "explanationHi": "T तरंग निलयों के पुनर्ध्रुवण (repolarisation) को दर्शाती है तथा T तरंग का अंत प्रकुंचन का अंत होता है।"
            },
            {
              "id": "q_zoo_85",
              "num": 85,
              "question": "[ALLEN NCR BFC248] The volume of blood pumped out by each ventricle per cardiac cycle is called Stroke Volume. In a normal adult at rest, it is approximately:",
              "questionHi": "[ALLEN NCR BFC248] प्रत्येक हृद चक्र में प्रत्येक निलय द्वारा पंप किए गए रक्त का आयतन स्ट्रोक आयतन कहलाता है। एक सामान्य वयस्क में यह लगभग होता है:",
              "options": [
                "70 mL",
                "500 mL",
                "5 Litres",
                "120 mL"
              ],
              "optionsHi": [
                "70 mL",
                "500 mL",
                "5 लीटर",
                "120 mL"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC248]: During each cardiac cycle, each ventricle pumps out approximately 70 mL of blood, which is the stroke volume.",
              "explanationHi": "प्रत्येक स्पंदन में निलय लगभग 70 mL रक्त पंप करता है जिसे स्ट्रोक आयतन कहते हैं।"
            },
            {
              "id": "q_zoo_86",
              "num": 86,
              "question": "[ALLEN NCR BEX202] Which of the following modes of nitrogenous excretion requires the minimum amount of water for its elimination?",
              "questionHi": "[ALLEN NCR BEX202] नाइट्रोजन अपशिष्ट उत्सर्जन की निम्नलिखित में से किस विधि में निष्कासन हेतु जल की न्यूनतम मात्रा की आवश्यकता होती है?",
              "options": [
                "Ammonotelism",
                "Ureotelism",
                "Uricotelism",
                "Aminotelism"
              ],
              "optionsHi": [
                "अमोनिया उत्सर्जन",
                "यूरिया उत्सर्जन",
                "यूरिक अम्ल उत्सर्जन (Uricotelism)",
                "अमीनो उत्सर्जन"
              ],
              "correct": 2,
              "explanation": "[ALLEN BEX202]: Uric acid is the least toxic nitrogenous waste and requires the least water for elimination, being excreted as a dry paste or pellet by birds and reptiles.",
              "explanationHi": "यूरिक अम्ल सबसे कम विषैला होता है और इसके उत्सर्जन में सबसे कम जल की आवश्यकता होती है।"
            },
            {
              "id": "q_zoo_87",
              "num": 87,
              "question": "[ALLEN NCR BEX203] The notch on the concave inner margin of the human kidney through which the renal artery, renal vein, nerves and ureter enter or exit is called:",
              "questionHi": "[ALLEN NCR BEX203] मानव वृक्क के भीतरी अवतल किनारे पर स्थित वह खांच जिसके माध्यम से वृक्क धमनी, वृक्क शिरा, तंत्रिकाएँ तथा मूत्रवाहिनी प्रवेश या निकास करती हैं, कहलाती है:",
              "options": [
                "Hilum",
                "Pelvis",
                "Calyx",
                "Capsule"
              ],
              "optionsHi": [
                "हाइलम (नाभिका)",
                "पेल्विस (श्रोणि)",
                "कैलिक्स (चषक)",
                "संपुट"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX203]: Towards the centre of the inner concave surface of the kidney is a notch called the hilum through which ureter, blood vessels and nerves enter.",
              "explanationHi": "वृक्क के भीतरी अवतल सतह पर स्थित खांच हाइलम (नाभिका) कहलाती है।"
            },
            {
              "id": "q_zoo_88",
              "num": 88,
              "question": "[ALLEN NCR BEX204] The tuft of capillaries involved in filtration of blood enclosed by Bowman's capsule is called:",
              "questionHi": "[ALLEN NCR BEX204] बोमन सम्पुट द्वारा घिरे रक्त निस्यंदन में भाग लेने वाले केशिकाओं के गुच्छे को क्या कहा जाता है?",
              "options": [
                "Glomerulus",
                "Malpighian tubule",
                "Vasa recta",
                "Loop of Henle"
              ],
              "optionsHi": [
                "केशिकागुच्छ (Glomerulus)",
                "मैल्पीघी नलिका",
                "वासा रेक्टा",
                "हेनले का लूप"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX204]: Glomerulus is a tuft of capillaries formed by afferent arteriole enclosed within the double-walled cup-like Bowman's capsule.",
              "explanationHi": "बोमन सम्पुट द्वारा घिरे केशिकाओं के गुच्छे को केशिकागुच्छ (Glomerulus) कहते हैं।"
            },
            {
              "id": "q_zoo_89",
              "num": 89,
              "question": "[ALLEN NCR BEX205] The Malpighian body (renal corpuscle) of a human nephron comprises:",
              "questionHi": "[ALLEN NCR BEX205] मानव नेफ्रॉन की मैल्पीघी कणिका (वृक्क कणिका) में सम्मिलित हैं:",
              "options": [
                "Glomerulus along with Bowman's capsule",
                "Bowman's capsule and PCT",
                "Glomerulus and Efferent arteriole",
                "Loop of Henle and Collecting duct"
              ],
              "optionsHi": [
                "केशिकागुच्छ तथा बोमन सम्पुट",
                "बोमन सम्पुट तथा समीपस्थ कुंडलित नलिका",
                "केशिकागुच्छ तथा अपवाही धमनिका",
                "हेनले का लूप तथा संग्रह नलिका"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX205]: Glomerulus along with Bowman's capsule is called the Malpighian body or renal corpuscle.",
              "explanationHi": "केशिकागुच्छ और बोमन सम्पुट को मिलाकर मैल्पीघी कणिका कहते हैं।"
            },
            {
              "id": "q_zoo_90",
              "num": 90,
              "question": "[ALLEN NCR BEX206] In human kidneys, Cortical nephrons differ from Juxtamedullary nephrons in having:",
              "questionHi": "[ALLEN NCR BEX206] मानव वृक्क में कॉर्टिकल नेफ्रॉन जक्सटामेडुलरी नेफ्रॉन से किस बात में भिन्न होते हैं?",
              "options": [
                "A short loop of Henle that extends very little into the medulla",
                "A very long loop of Henle deep into the medulla",
                "Well-developed vasa recta",
                "Location of Bowman's capsule in the medulla"
              ],
              "optionsHi": [
                "हेनले का एक छोटा लूप जो मध्यांश में बहुत कम जाता है",
                "मध्यांश में गहराई तक धंसा एक बहुत लंबा हेनले लूप",
                "सुविकसित वासा रेक्टा",
                "मध्यांश में स्थित बोमन सम्पुट"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX206]: In cortical nephrons (~85%), the loop of Henle is short and extends only very little into the medulla, with absent or highly reduced vasa recta.",
              "explanationHi": "कॉर्टिकल नेफ्रॉन में हेनले का लूप बहुत छोटा होता है जो मध्यांश में बहुत कम धंसा होता है।"
            },
            {
              "id": "q_zoo_91",
              "num": 91,
              "question": "[ALLEN NCR BEX208] The visceral layer of Bowman's capsule contains specialized cells called podocytes that leave narrow filtration pores known as:",
              "questionHi": "[ALLEN NCR BEX208] बोमन सम्पुट के आंतरांगी स्तर में पोडोसाइट्स नामक विशिष्ट कोशिकाएँ होती हैं जो संकीर्ण निस्यंदन छिद्र छोड़ती हैं, जिन्हें कहा जाता है:",
              "options": [
                "Slit pores (filtration slits)",
                "Fenestrae",
                "Maculae",
                "Calyces"
              ],
              "optionsHi": [
                "स्लिट पोर्स (निस्यंदन खांचे)",
                "फेनेस्ट्रा",
                "मैकुला",
                "कैलिक्स"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX208]: Podocytes wrap around glomerular capillaries leaving intricate microscopic spaces called filtration slits or slit pores for ultrafiltration.",
              "explanationHi": "पोडोसाइट्स के प्रवर्ध निस्यंदन खांचे (स्लिट पोर्स) बनाते हैं।"
            },
            {
              "id": "q_zoo_92",
              "num": 92,
              "question": "[ALLEN NCR BFC250] Parasympathetic neural signals through the vagus nerve affect heart function by:",
              "questionHi": "[ALLEN NCR BFC250] वेगस तंत्रिका के माध्यम से परानुकंपी तंत्रिका संकेत हृदय के कार्य को किस प्रकार प्रभावित करते हैं?",
              "options": [
                "Decreasing both heart rate and speed of conduction of action potentials",
                "Increasing heart rate and cardiac output",
                "Constricting coronary arteries exclusively",
                "Increasing ventricular force of contraction"
              ],
              "optionsHi": [
                "हृदय दर तथा क्रिया विभव के चालन की गति दोनों को घटाकर",
                "हृदय दर और कार्डियक आउटपुट को बढ़ाकर",
                "केवल कोरोनरी धमनियों को संकुचित करके",
                "निलय संकुचन की शक्ति को बढ़ाकर"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC250]: Parasympathetic neural signals release acetylcholine, decreasing the rate of heart beat, speed of conduction, and cardiac output.",
              "explanationHi": "परानुकंपी तंत्रिका तंत्र हृदय दर व चालन गति दोनों को कम करता है।"
            },
            {
              "id": "q_zoo_93",
              "num": 93,
              "question": "[ALLEN NCR BFC252] The blood vessel that carries oxygenated blood from the lungs directly into the left atrium is the:",
              "questionHi": "[ALLEN NCR BFC252] फेफड़ों से ऑक्सीजनित रक्त को सीधे बाएँ आलिंद में लाने वाली रक्त वाहिका है:",
              "options": [
                "Pulmonary vein",
                "Pulmonary artery",
                "Coronary vein",
                "Vena cava"
              ],
              "optionsHi": [
                "फुफ्फुसीय शिरा (Pulmonary vein)",
                "फुफ्फुसीय धमनी",
                "कोरोनरी शिरा",
                "महाशिरा"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC252]: Pulmonary veins carry oxygenated blood from the lungs into the left atrium of the heart.",
              "explanationHi": "फेफड़ों से शुद्ध (ऑक्सीजनित) रक्त फुफ्फुसीय शिरा द्वारा बाएँ आलिंद में आता है।"
            },
            {
              "id": "q_zoo_94",
              "num": 94,
              "question": "[ALLEN NCR BEX210] In humans, terrestrial amphibians, and marine fishes, the primary nitrogenous excretory product is:",
              "questionHi": "[ALLEN NCR BEX210] मानव, स्थलीय उभयचरों तथा समुद्री मछलियों में प्रमुख उत्सर्जी उत्पाद है:",
              "options": [
                "Urea",
                "Uric acid",
                "Ammonia",
                "Guanine"
              ],
              "optionsHi": [
                "यूरिया (Urea)",
                "यूरिक अम्ल",
                "अमोनिया",
                "गुआनिन"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX210]: Mammals, many terrestrial amphibians, and marine fishes mainly excrete urea and are called ureotelic animals.",
              "explanationHi": "मानव, स्थलीय उभयचर तथा समुद्री मछलियाँ यूरियोटेलिक हैं और यूरिया का उत्सर्जन करते हैं।"
            },
            {
              "id": "q_zoo_95",
              "num": 95,
              "question": "[ALLEN NCR BEX212] The medullary pyramids of human kidneys project into cup-like chambers called:",
              "questionHi": "[ALLEN NCR BEX212] मानव वृक्क के मध्यांश पिरामिड प्यालेनुमा कक्षों में खुलते हैं जिन्हें कहा जाता है:",
              "options": [
                "Calyces",
                "Columns of Bertini",
                "Hilum",
                "Urinary bladder"
              ],
              "optionsHi": [
                "चषक (Calyces)",
                "बर्तनी के स्तंभ",
                "हाइलम",
                "मूत्राशय"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX212]: The renal cortex extends between medullary pyramids, which project into the calyces (minor and major calyces leading to the renal pelvis).",
              "explanationHi": "मध्यांश पिरामिड चषकों (calyces) में खुलते हैं।"
            }
          ]
        },
        {
          "id": "zoo_sec_b",
          "name": "Zoology - Section B",
          "nameHi": "प्राणी विज्ञान - खंड B",
          "maxAttempt": 5,
          "questions": [
            {
              "id": "q_zoo_96",
              "num": 96,
              "question": "[ALLEN NCR BFC255] Atherosclerosis (Coronary Artery Disease) is caused by the deposition of which of the following substances in the lumen of arteries supplying heart muscle?",
              "questionHi": "[ALLEN NCR BFC255] धमनीकाठिन्य (कोरोनरी धमनी रोग) हृदय की पेशियों को आपूर्ति करने वाली धमनियों में किन पदार्थों के जमाव के कारण होता है?",
              "options": [
                "Calcium, fat, cholesterol and fibrous tissue",
                "Glycogen and glucose",
                "Hemoglobin and iron",
                "Urea and uric acid crystals"
              ],
              "optionsHi": [
                "कैल्शियम, वसा, कोलेस्ट्रॉल तथा रेशेदार ऊतक",
                "ग्लाइकोजन तथा ग्लूकोज",
                "हीमोग्लोबिन तथा आयरन",
                "यूरिया तथा यूरिक अम्ल क्रिस्टल"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC255]: Coronary Artery Disease (CAD), often referred to as atherosclerosis, affects the vessels supplying blood to the heart muscle. It is caused by deposits of calcium, fat, cholesterol and fibrous tissue, making arterial lumens narrower.",
              "explanationHi": "कोरोनरी धमनियों में कैल्शियम, वसा, कोलेस्ट्रॉल तथा रेशेदार ऊतकों का जमाव धमनीकाठिन्य कहलाता है।"
            },
            {
              "id": "q_zoo_97",
              "num": 97,
              "question": "[ALLEN NCR BFC258] A unique vascular connection existing between the digestive tract and liver for nutrient processing is called the:",
              "questionHi": "[ALLEN NCR BFC258] पोषक तत्वों के प्रसंस्करण हेतु पाचन तंत्र तथा यकृत के मध्य स्थित एक विशिष्ट संवहनी संपर्क कहलाता है:",
              "options": [
                "Hepatic portal system",
                "Renal portal system",
                "Hypophyseal portal system",
                "Coronary circulation"
              ],
              "optionsHi": [
                "यकृत निवाहिका तंत्र (Hepatic portal system)",
                "वृक्क निवाहिका तंत्र",
                "हाइपोफिसियल निवाहिका तंत्र",
                "कोरोनरी परिसंचरण"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC258]: The hepatic portal vein carries blood from the intestine to the liver before it is delivered to the systemic circulation.",
              "explanationHi": "आंत से रक्त को यकृत में ले जाने वाला तंत्र यकृत निवाहिका तंत्र कहलाता है।"
            },
            {
              "id": "q_zoo_98",
              "num": 98,
              "question": "[ALLEN NCR BEX215] Juxtamedullary nephrons with their hairpin-shaped vasa recta are particularly crucial in mammals for:",
              "questionHi": "[ALLEN NCR BEX215] स्तनधारियों में अपने हेयरपिन के आकार के वासा रेक्टा वाले जक्सटामेडुलरी नेफ्रॉन विशेष रूप से किस कार्य हेतु महत्वपूर्ण हैं?",
              "options": [
                "Concentrating urine by counter-current mechanism",
                "Excreting large volumes of dilute hypotonic urine",
                "Filtration of large plasma proteins",
                "Eliminating excess uric acid exclusively"
              ],
              "optionsHi": [
                "प्रतिप्रवाह क्रियाविधि द्वारा मूत्र को सांद्रित करना",
                "अत्यधिक मात्रा में तनु मूत्र का उत्सर्जन",
                "बड़े प्लाज्मा प्रोटीनों का निस्यंदन",
                "केवल अतिरिक्त यूरिक अम्ल का निष्कासन"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX215]: Long loops of Henle and vasa recta of juxtamedullary nephrons maintain high medullary hypertonicity via counter-current multiplication, producing concentrated urine to prevent water loss.",
              "explanationHi": "जक्सटामेडुलरी नेफ्रॉन प्रतिप्रवाह क्रियाविधि (counter-current) द्वारा सांद्र मूत्र बनाने में सहायक होते हैं।"
            },
            {
              "id": "q_zoo_99",
              "num": 99,
              "question": "[ALLEN NCR BFC260] Lymph contains which of the following cell types in large abundance?",
              "questionHi": "[ALLEN NCR BFC260] लसिका (Lymph) में निम्नलिखित में से कौन सी कोशिकाएँ प्रचुर मात्रा में पाई जाती हैं?",
              "options": [
                "Lymphocytes",
                "Erythrocytes (RBCs)",
                "Thrombocytes",
                "Neutrophils only"
              ],
              "optionsHi": [
                "लिम्फोसाइट्स (Lymphocytes)",
                "लाल रक्त कणिकाएँ (RBCs)",
                "थ्रॉम्बोसाइट्स",
                "केवल न्यूट्रोफिल"
              ],
              "correct": 0,
              "explanation": "[ALLEN BFC260]: Lymph is a colorless interstitial fluid containing specialized lymphocytes responsible for immune responses of the body, lacking RBCs and platelets.",
              "explanationHi": "लसिका में लिम्फोसाइट्स प्रचुर मात्रा में पाए जाते हैं जो प्रतिरक्षा के लिए उत्तरदायी होते हैं।"
            },
            {
              "id": "q_zoo_100",
              "num": 100,
              "question": "[ALLEN NCR BEX218] High glomerular capillary hydrostatic pressure essential for ultrafiltration is maintained because:",
              "questionHi": "[ALLEN NCR BEX218] परानिस्यंदन हेतु आवश्यक उच्च केशिकागुच्छ द्रवस्थैतिक दाब इसलिए बना रहता है क्योंकि:",
              "options": [
                "The diameter of the afferent arteriole is wider than that of the efferent arteriole",
                "The diameter of the efferent arteriole is wider than that of the afferent arteriole",
                "Renal veins lack valves",
                "Podocytes actively pump fluid into the renal tubule"
              ],
              "optionsHi": [
                "अभिवाही धमनिका का व्यास अपवाही धमनिका से अधिक चौड़ा होता है",
                "अपवाही धमनिका का व्यास अभिवाही धमनिका से अधिक चौड़ा होता है",
                "वृक्क शिराओं में कपाट नहीं होते",
                "पोडोसाइट्स सक्रिय रूप से द्रव को पंप करते हैं"
              ],
              "correct": 0,
              "explanation": "[ALLEN BEX218]: The lumen diameter of afferent arteriole entering the glomerulus is broader than that of efferent arteriole leaving it, creating resistance and generating high hydrostatic filtration pressure (~55 mm Hg).",
              "explanationHi": "अभिवाही धमनिका का व्यास अपवाही से चौड़ा होने के कारण केशिकागुच्छ में उच्च निस्यंदन दाब बना रहता है।"
            }
          ]
        }
      ]
    }
  ]
};
  }
};
