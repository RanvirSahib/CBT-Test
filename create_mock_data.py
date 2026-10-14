# -*- coding: utf-8 -*-
"""
Script to generate the complete 100-question Allen Pre-Medical Achiever Phase-II Minor Test # 03 Question Bank.
Syllabus:
- Physics: Work Power Energy (Complete), Centre of Mass, Momentum & Collision (Complete)
- Chemistry: IOC - Chemical Bonding (Remaining), PC - Liquid Solution (Remaining) & Chemical Equilibrium (Till law of mass action)
- Botany: Morphology of flowering plant (Complete), Plant Anatomy (Till Classification of permanent tissue)
- Zoology: Circulatory System (Complete) & Excretory System (Till Types of Nephron)
"""

import json

questions_data = {
    "phy_sec_a": [
        # Q1: Variable force work
        {
            "num": 1,
            "question": "A force F = (3x² + 2x - 5) N acts on a particle of mass 2 kg moving along the x-axis from x = 0 to x = 2 m. The work done by this force on the particle is:",
            "questionHi": "x-अक्ष के अनुदिश x = 0 से x = 2 m तक गतिमान 2 kg द्रव्यमान के कण पर एक बल F = (3x² + 2x - 5) N कार्य करता है। कण पर इस बल द्वारा किया गया कार्य है:",
            "options": ["2 J", "6 J", "8 J", "12 J"],
            "optionsHi": ["2 J", "6 J", "8 J", "12 J"],
            "correct": 0,
            "explanation": "Work done by variable force: W = ∫ F dx from 0 to 2 = ∫(3x² + 2x - 5) dx = [x³ + x² - 5x]₀² = (8 + 4 - 10) - 0 = 2 J.",
            "explanationHi": "परिवर्ती बल द्वारा किया गया कार्य: W = ∫ F dx = [x³ + x² - 5x]₀² = (8 + 4 - 10) = 2 J।"
        },
        # Q2: [NEET 2019] Vertical circle min speed
        {
            "num": 2,
            "question": "[NEET 2019] A small body of mass m is tied to a light string of length L and whirled in a vertical circle. The minimum horizontal speed required at the lowest point to complete the vertical circle is:",
            "questionHi": "[NEET 2019] द्रव्यमान m का एक छोटा पिंड लंबाई L की हल्की डोरी से बंधा है और एक ऊर्ध्वाधर वृत्त में घुमाया जाता है। ऊर्ध्वाधर वृत्त पूरा करने के लिए निम्नतम बिंदु पर आवश्यक न्यूनतम क्षैतिज चाल है:",
            "options": ["√(gL)", "√(2gL)", "√(3gL)", "√(5gL)"],
            "optionsHi": ["√(gL)", "√(2gL)", "√(3gL)", "√(5gL)"],
            "correct": 3,
            "explanation": "At the topmost point, minimum speed for string not to slack is v_top = √(gL). Conserving mechanical energy: 1/2 m v_bottom² = 1/2 m v_top² + mg(2L) => v_bottom = √(v_top² + 4gL) = √(5gL).",
            "explanationHi": "उच्चतम बिंदु पर डोरी ढीली न होने हेतु न्यूनतम चाल v_top = √(gL) होती है। यांत्रिक ऊर्जा संरक्षण से: निम्नतम बिंदु पर चाल v_bottom = √(5gL) होती है।"
        },
        # Q3: Potential energy curve & equilibrium
        {
            "num": 3,
            "question": "The potential energy of a conservative system as a function of position is given by U(x) = ax² - bx, where a and b are positive constants. The position of stable equilibrium is:",
            "questionHi": "एक संरक्षी निकाय की स्थितिज ऊर्जा स्थिति के फलन के रूप में U(x) = ax² - bx द्वारा दी जाती है, जहाँ a तथा b धनात्मक नियतांक हैं। स्थायी साम्यावस्था की स्थिति है:",
            "options": ["x = b / a", "x = b / (2a)", "x = -b / (2a)", "x = 2b / a"],
            "optionsHi": ["x = b / a", "x = b / (2a)", "x = -b / (2a)", "x = 2b / a"],
            "correct": 1,
            "explanation": "For equilibrium, F = -dU/dx = -(2ax - b) = 0 => x = b/(2a). Second derivative: d²U/dx² = 2a > 0 (since a > 0), confirming a potential energy minimum (stable equilibrium).",
            "explanationHi": "साम्यावस्था के लिए F = -dU/dx = -(2ax - b) = 0 => x = b/(2a)। d²U/dx² = 2a > 0 होने से यह स्थायी साम्यावस्था है।"
        },
        # Q4: Work-energy theorem on rough incline
        {
            "num": 4,
            "question": "A block of mass 2 kg slides down an inclined plane of inclination 30° from a vertical height of 5 m. If it reaches the bottom with a velocity of 6 m/s, the work done against friction is: (take g = 10 m/s²)",
            "questionHi": "2 kg द्रव्यमान का एक गुटका 30° झुकाव वाले नत तल पर 5 m की ऊर्ध्वाधर ऊँचाई से नीचे फिसलता है। यदि यह तलहटी पर 6 m/s के वेग से पहुँचता है, तो घर्षण के विरुद्ध किया गया कार्य है: (g = 10 m/s² लें)",
            "options": ["36 J", "64 J", "100 J", "136 J"],
            "optionsHi": ["36 J", "64 J", "100 J", "136 J"],
            "correct": 1,
            "explanation": "Work-Energy Theorem: W_gravity + W_friction = ΔK => mgh + W_friction = 1/2 m v² - 0 => (2)(10)(5) + W_friction = 1/2 (2) (6)² => 100 + W_friction = 36 => W_friction = -64 J. Therefore, work done against friction = 64 J.",
            "explanationHi": "कार्य-ऊर्जा प्रमेय: W_g + W_f = ΔK => (2)(10)(5) + W_f = 1/2(2)(36) => 100 + W_f = 36 => W_f = -64 J। अतः घर्षण के विरुद्ध कार्य = 64 J।"
        },
        # Q5: [NEET 2016] Constant power displacement relation
        {
            "num": 5,
            "question": "[NEET 2016] A particle of mass m is driven by a machine that delivers a constant power P watts. If the particle starts from rest, the displacement of the particle at time t is proportional to:",
            "questionHi": "[NEET 2016] द्रव्यमान m का एक कण एक मशीन द्वारा संचालित होता है जो नियत शक्ति P वाट प्रदान करती है। यदि कण विरामावस्था से प्रारंभ करता है, तो समय t पर कण का विस्थापन किसके समानुपाती है?",
            "options": ["t^(1/2)", "t^(3/2)", "t²", "t^(5/2)"],
            "optionsHi": ["t^(1/2)", "t^(3/2)", "t²", "t^(5/2)"],
            "correct": 1,
            "explanation": "Power P = F·v = m (v dv/dt) => v dv = (P/m) dt => v² / 2 = (P/m) t => v = √(2P/m) t^(1/2). Since v = ds/dt, integrating gives s = ∫ v dt ∝ t^(3/2).",
            "explanationHi": "शक्ति P = m v (dv/dt) => v dv = (P/m) dt => v = √(2P/m) t^(1/2)। विस्थापन s = ∫ v dt ∝ t^(3/2)।"
        },
        # Q6: Spring compression and speed
        {
            "num": 6,
            "question": "A spring of spring constant k = 800 N/m is compressed by 0.1 m on a smooth horizontal table. A ball of mass 0.2 kg placed against it is released from rest. The exit speed of the ball as the spring regains its natural length is:",
            "questionHi": "स्प्रिंग नियतांक k = 800 N/m की एक स्प्रिंग को एक चिकनी क्षैतिज मेज पर 0.1 m संपीड़ित किया जाता है। इसके सामने रखी 0.2 kg द्रव्यमान की गेंद को विराम से छोड़ा जाता है। स्प्रिंग के अपनी मूल लंबाई प्राप्त करने पर गेंद की चाल है:",
            "options": ["2 m/s", "4 m/s", "6.32 m/s", "10 m/s"],
            "optionsHi": ["2 m/s", "4 m/s", "6.32 m/s", "10 m/s"],
            "correct": 2,
            "explanation": "Elastic potential energy converts into kinetic energy: 1/2 k x² = 1/2 m v² => v = x √(k/m) = 0.1 × √(800 / 0.2) = 0.1 × √(4000) = 0.1 × 63.245 ≈ 6.32 m/s.",
            "explanationHi": "प्रत्यास्थ स्थितिज ऊर्जा गतिज ऊर्जा में बदलती है: 1/2 k x² = 1/2 m v² => v = x√(k/m) = 0.1 × √(4000) ≈ 6.32 m/s।"
        },
        # Q7: [NEET PYQ] Kinetic energy & momentum percentage increase
        {
            "num": 7,
            "question": "[NEET PYQ] If the kinetic energy of a moving particle is increased by 300%, the percentage increase in its linear momentum will be:",
            "questionHi": "[NEET PYQ] यदि किसी गतिमान कण की गतिज ऊर्जा में 300% की वृद्धि की जाती है, तो इसके रेखीय संवेग में कितने प्रतिशत की वृद्धि होगी?",
            "options": ["50%", "100%", "150%", "200%"],
            "optionsHi": ["50%", "100%", "150%", "200%"],
            "correct": 1,
            "explanation": "K_final = K_initial + 3 K_initial = 4 K_initial. Since momentum p = √(2mK), p_final = √(2m × 4 K_initial) = 2 p_initial. Percentage increase = ((2p - p)/p) × 100% = 100%.",
            "explanationHi": "K' = K + 3K = 4K। संवेग p = √(2mK) => p' = √(4) p = 2p। संवेग में प्रतिशत वृद्धि = ((2p - p)/p) × 100% = 100%।"
        },
        # Q8: Pump power efficiency
        {
            "num": 8,
            "question": "An electric water pump of efficiency 80% is used to pump 1200 kg of water to a storage tank situated at a height of 20 m in 5 minutes. The electric power consumed by the motor is: (g = 10 m/s²)",
            "questionHi": "80% दक्षता वाले एक विद्युत जल पंप का उपयोग 5 मिनट में 20 m की ऊँचाई पर स्थित एक भंडारण टंकी में 1200 kg पानी पंप करने के लिए किया जाता है। मोटर द्वारा उपभुक्त विद्युत शक्ति है: (g = 10 m/s²)",
            "options": ["600 W", "800 W", "1000 W", "1250 W"],
            "optionsHi": ["600 W", "800 W", "1000 W", "1250 W"],
            "correct": 2,
            "explanation": "Useful output power P_out = mgh / t = (1200 × 10 × 20) / (5 × 60) = 240000 / 300 = 800 W. Since efficiency η = P_out / P_in = 0.80, Power input P_in = 800 / 0.80 = 1000 W.",
            "explanationHi": "निर्गत शक्ति P_out = mgh/t = (1200 × 10 × 20) / 300 = 800 W। दक्षता η = P_out / P_in => P_in = 800 / 0.8 = 1000 W।"
        },
        # Q9: Conservative force work path independence
        {
            "num": 9,
            "question": "A force field given by F = (y î + x ĵ) N acts on a particle. The work done in moving the particle from the origin (0, 0) to the point (2, 3) along the parabolic path y = (3/4)x² is:",
            "questionHi": "एक बल क्षेत्र F = (y î + x ĵ) N एक कण पर कार्य करता है। कण को मूल बिंदु (0, 0) से बिंदु (2, 3) तक परवलयिक पथ y = (3/4)x² के अनुदिश ले जाने में किया गया कार्य है:",
            "options": ["0 J", "3 J", "6 J", "12 J"],
            "optionsHi": ["0 J", "3 J", "6 J", "12 J"],
            "correct": 2,
            "explanation": "Notice that dW = F·dr = y dx + x dy = d(xy), which is an exact differential (conservative force). W = ∫ d(xy) from (0,0) to (2,3) = [xy]₍₀,₀₎⁽²,³⁾ = (2 × 3) - 0 = 6 J (independent of path).",
            "explanationHi": "dW = y dx + x dy = d(xy) एक यथार्थ अवकलज है (संरक्षी बल)। अतः W = [xy] = 2 × 3 - 0 = 6 J (पथ से स्वतंत्र)।"
        },
        # Q10: Vertical circle tension difference
        {
            "num": 10,
            "question": "A particle of mass m rotates in a vertical circle of radius R tied to a light string. The difference between the tension in the string at the lowest point (T_L) and at the highest point (T_H) is:",
            "questionHi": "द्रव्यमान m का एक कण एक हल्की डोरी से बंधा त्रिज्या R के ऊर्ध्वाधर वृत्त में घूमता है। निम्नतम बिंदु पर डोरी में तनाव (T_L) और उच्चतम बिंदु पर तनाव (T_H) के बीच का अंतर है:",
            "options": ["2 mg", "3 mg", "6 mg", "8 mg"],
            "optionsHi": ["2 mg", "3 mg", "6 mg", "8 mg"],
            "correct": 2,
            "explanation": "At lowest point: T_L = m v_L² / R + mg. At highest point: T_H = m v_H² / R - mg. From energy conservation: v_L² - v_H² = 4 g R. Substituting: T_L - T_H = m(v_L² - v_H²)/R + 2mg = 4mg + 2mg = 6mg.",
            "explanationHi": "निम्नतम बिंदु पर: T_L = m v_L²/R + mg। उच्चतम बिंदु पर: T_H = m v_H²/R - mg। ऊर्जा संरक्षण से: v_L² - v_H² = 4gR। अतः T_L - T_H = 6 mg।"
        },
        # Q11: Cut-out disc COM shift
        {
            "num": 11,
            "question": "From a uniform circular disc of radius 4R, a circular hole of radius R is cut out. The centre of the hole is located at a distance 2R from the centre of the original disc. The shift in the centre of mass of the remaining portion from the original centre is:",
            "questionHi": "त्रिज्या 4R की एकसमान वृत्ताकार चकती में से त्रिज्या R का एक वृत्ताकार छिद्र काटा जाता है। छिद्र का केंद्र मूल चकती के केंद्र से 2R की दूरी पर स्थित है। मूल केंद्र से शेष भाग के द्रव्यमान केंद्र का विस्थापन है:",
            "options": ["2R / 15", "R / 15", "4R / 15", "R / 8"],
            "optionsHi": ["2R / 15", "R / 15", "4R / 15", "R / 8"],
            "correct": 0,
            "explanation": "Area of original disc A₁ = π(4R)² = 16πR². Area of removed disc A₂ = πR². Shift X_com = - (A₂ × x₂) / (A₁ - A₂) = - (πR² × 2R) / (16πR² - πR²) = - 2πR³ / (15πR²) = - 2R / 15 (magnitude = 2R/15).",
            "explanationHi": "मूल चकती का क्षेत्रफल A₁ = 16πR², हटाए गए भाग का A₂ = πR²। द्रव्यमान केंद्र का विस्थापन X_com = - (A₂ × x₂) / (A₁ - A₂) = - (πR² × 2R) / (15πR²) = - 2R/15।"
        },
        # Q12: [NEET 2021] Three particles at equilateral triangle COM
        {
            "num": 12,
            "question": "[NEET 2021] Three point masses of 1 kg, 2 kg, and 3 kg are placed at the vertices of an equilateral triangle of side length 1 m. If 1 kg is at (0, 0) and 2 kg is at (1, 0), the coordinates of the centre of mass are:",
            "questionHi": "[NEET 2021] 1 kg, 2 kg और 3 kg के तीन बिंदु द्रव्यमान 1 m भुजा वाले समबाहु त्रिभुज के शीर्षों पर रखे हैं। यदि 1 kg (0, 0) पर तथा 2 kg (1, 0) पर स्थित है, तो द्रव्यमान केंद्र के निर्देशांक हैं:",
            "options": ["(7/12, √3/4)", "(5/12, √3/4)", "(7/12, √3/6)", "(1/2, √3/6)"],
            "optionsHi": ["(7/12, √3/4)", "(5/12, √3/4)", "(7/12, √3/6)", "(1/2, √3/6)"],
            "correct": 0,
            "explanation": "Coordinates: m₁=1 at (0,0); m₂=2 at (1,0); m₃=3 at (0.5, √3/2). X_com = (1(0) + 2(1) + 3(0.5)) / (1+2+3) = (2 + 1.5)/6 = 3.5/6 = 7/12 m. Y_com = (1(0) + 2(0) + 3(√3/2)) / 6 = (3√3/2)/6 = √3/4 m. Thus, (7/12, √3/4).",
            "explanationHi": "m₁=1 (0,0); m₂=2 (1,0); m₃=3 (1/2, √3/2)। X_com = (2 + 1.5)/6 = 7/12 m। Y_com = (3√3/2)/6 = √3/4 m। निर्देशांक = (7/12, √3/4)।"
        },
        # Q13: [NEET PYQ] Man walking on plank COM
        {
            "num": 13,
            "question": "[NEET PYQ] A man of mass 60 kg stands on a uniform wooden plank of mass 40 kg and length 10 m resting on a frictionless ice surface. If the man walks from one end of the plank to the other, the distance moved by the plank relative to the ice is:",
            "questionHi": "[NEET PYQ] 60 kg द्रव्यमान का एक व्यक्ति घर्षण रहित बर्फ की सतह पर रखे 40 kg द्रव्यमान और 10 m लंबे एकसमान लकड़ी के तख्ते पर खड़ा है। यदि व्यक्ति तख्ते के एक सिरे से दूसरे सिरे तक चलता है, तो बर्फ के सापेक्ष तख्ते द्वारा तय की गई दूरी है:",
            "options": ["4 m", "6 m", "5 m", "10 m"],
            "optionsHi": ["4 m", "6 m", "5 m", "10 m"],
            "correct": 1,
            "explanation": "Since no external horizontal force acts on the (man + plank) system, the centre of mass remains stationary: ΔX_com = 0 => m_man Δx_man + M_plank Δx_plank = 0. If plank moves distance s opposite to man: 60(10 - s) - 40s = 0 => 600 - 60s - 40s = 0 => 100s = 600 => s = 6 m.",
            "explanationHi": "कोई बाह्य क्षैतिज बल नहीं है, अतः ΔX_com = 0 => m(L - s) = M·s => 60(10 - s) = 40 s => 100 s = 600 => s = 6 m।"
        },
        # Q14: [NEET 2019] Bomb exploding into 3 pieces
        {
            "num": 14,
            "question": "[NEET 2019] A stationary bomb of mass 3 kg explodes into three pieces of equal mass 1 kg each. Two pieces fly off with speeds of 30 m/s each along perpendicular directions (x and y axes). The magnitude of velocity of the third piece is:",
            "questionHi": "[NEET 2019] 3 kg द्रव्यमान का एक स्थिर बम 1 kg द्रव्यमान के तीन समान टुकड़ों में विस्फोटित होता है। दो टुकड़े 30 m/s की चाल से परस्पर लंबवत दिशाओं (x तथा y अक्षों) में उड़ते हैं। तीसरे टुकड़े के वेग का परिमाण है:",
            "options": ["30 m/s", "30√2 m/s", "60 m/s", "15√2 m/s"],
            "optionsHi": ["30 m/s", "30√2 m/s", "60 m/s", "15√2 m/s"],
            "correct": 1,
            "explanation": "By conservation of linear momentum: p₁ + p₂ + p₃ = 0 => p₃ = -(p₁ + p₂). Since p₁ = (1)(30) î and p₂ = (1)(30) ĵ, |p₃| = √((30)² + (30)²) = 30√2 kg·m/s. Since m₃ = 1 kg, v₃ = |p₃| / m₃ = 30√2 m/s.",
            "explanationHi": "रेखीय संवेग संरक्षण से: p₁ + p₂ + p₃ = 0 => |p₃| = √(p₁² + p₂²) = √(30² + 30²) = 30√2 kg·m/s। चूँकि m₃ = 1 kg है, अतः v₃ = 30√2 m/s।"
        },
        # Q15: Head-on elastic collision equal masses
        {
            "num": 15,
            "question": "A sphere of mass m moving with velocity 8 m/s collides head-on elastically with an identical sphere of mass m at rest. After the collision, their respective velocities are:",
            "questionHi": "8 m/s के वेग से गतिमान द्रव्यमान m का एक गोला विराम में स्थित समान द्रव्यमान m के दूसरे गोले से सम्मुख प्रत्यास्थ टक्कर करता है। टक्कर के बाद उनके क्रमशः वेग होंगे:",
            "options": ["4 m/s and 4 m/s", "0 and 8 m/s", "-4 m/s and 8 m/s", "2 m/s and 6 m/s"],
            "optionsHi": ["4 m/s और 4 m/s", "0 और 8 m/s", "-4 m/s और 8 m/s", "2 m/s और 6 m/s"],
            "correct": 1,
            "explanation": "In a 1D elastic head-on collision between two equal masses (m₁ = m₂), the velocities are completely exchanged: v₁' = u₂ = 0 and v₂' = u₁ = 8 m/s.",
            "explanationHi": "समान द्रव्यमानों की एकविमीय प्रत्यास्थ सम्मुख टक्कर में वेगों का परस्पर विनिमय हो जाता है: पहला गोला विराम में आ जाता है (0) और दूसरा 8 m/s से गति करने लगता है।"
        },
        # Q16: Ballistic pendulum
        {
            "num": 16,
            "question": "A bullet of mass 20 g moving horizontally with 400 m/s strikes a wooden block of mass 3.98 kg suspended by a light vertical cord and embeds into it. The vertical height to which the block-bullet system rises is: (g = 10 m/s²)",
            "questionHi": "400 m/s की चाल से क्षैतिज गतिमान 20 g की एक गोली एक हल्की ऊर्ध्वाधर डोरी से लटके 3.98 kg के लकड़ी के गुटके से टकराकर उसमें धंस जाती है। गुटका-गोली निकाय जिस ऊर्ध्वाधर ऊँचाई तक उठता है, वह है: (g = 10 m/s²)",
            "options": ["0.2 m", "0.4 m", "0.8 m", "1.6 m"],
            "optionsHi": ["0.2 m", "0.4 m", "0.8 m", "1.6 m"],
            "correct": 0,
            "explanation": "Total mass M = 0.02 + 3.98 = 4.0 kg. Conservation of linear momentum: m u = M V => (0.02)(400) = 4.0 V => V = 8 / 4 = 2 m/s. Rise in height h = V² / (2g) = (2)² / (2 × 10) = 4 / 20 = 0.2 m.",
            "explanationHi": "संवेग संरक्षण: (0.02)(400) = 4.0 V => V = 2 m/s। ऊँचाई h = V²/(2g) = 4/20 = 0.2 m।"
        },
        # Q17: Rebounding ball total distance
        {
            "num": 17,
            "question": "A rubber ball is dropped from a height h onto a horizontal concrete floor. If the coefficient of restitution between the ball and floor is e, the total distance travelled by the ball before coming to rest is:",
            "questionHi": "एक रबर की गेंद को कंक्रीट के क्षैतिज फर्श पर h ऊँचाई से गिराया जाता है। यदि गेंद और फर्श के बीच प्रत्यावस्थान गुणांक e है, तो विराम में आने से पहले गेंद द्वारा तय की गई कुल दूरी है:",
            "options": ["h (1 - e²) / (1 + e²)", "h (1 + e²) / (1 - e²)", "h / (1 - e²)", "2h e² / (1 - e²)"],
            "optionsHi": ["h (1 - e²) / (1 + e²)", "h (1 + e²) / (1 - e²)", "h / (1 - e²)", "2h e² / (1 - e²)"],
            "correct": 1,
            "explanation": "Total distance H = h + 2h₁ + 2h₂ + ... = h + 2(e²h + e⁴h + ...) = h [1 + 2e²/(1 - e²)] = h [(1 - e² + 2e²)/(1 - e²)] = h (1 + e²) / (1 - e²).",
            "explanationHi": "कुल दूरी H = h + 2h e² + 2h e⁴ + ... = h [1 + 2e²/(1 - e²)] = h (1 + e²)/(1 - e²)।"
        },
        # Q18: [NEET 2017] Impulse from F-t graph
        {
            "num": 18,
            "question": "[NEET 2017] A triangular force pulse F(t) acts on a particle of mass 0.5 kg initially at rest. The force increases linearly from 0 to 20 N in 2 seconds and drops linearly back to 0 in another 2 seconds. The final velocity of the particle is:",
            "questionHi": "[NEET 2017] प्रारंभ में विराम में स्थित 0.5 kg के कण पर एक त्रिभुजाकार बल स्पंद F(t) कार्य करता है। बल 2 सेकंड में 0 से 20 N तक रैखिक रूप से बढ़ता है और अगले 2 सेकंड में वापस 0 हो जाता है। कण का अंतिम वेग है:",
            "options": ["40 m/s", "80 m/s", "20 m/s", "10 m/s"],
            "optionsHi": ["40 m/s", "80 m/s", "20 m/s", "10 m/s"],
            "correct": 1,
            "explanation": "Impulse J = Area under F-t graph = 1/2 × base × height = 1/2 × 4 s × 20 N = 40 N·s. Impulse-momentum theorem: J = m (v - 0) => 40 = 0.5 v => v = 80 m/s.",
            "explanationHi": "आवेग J = F-t वक्र का क्षेत्रफल = 1/2 × 4 × 20 = 40 N·s। आवेग J = m·v => 40 = 0.5 v => v = 80 m/s।"
        },
        # Q19: Inelastic collision kinetic energy loss
        {
            "num": 19,
            "question": "A body of mass m₁ moving with velocity u₁ collides with a stationary body of mass m₂. If the collision is completely inelastic (e = 0), the fractional loss of kinetic energy is given by:",
            "questionHi": "वेग u₁ से गतिमान द्रव्यमान m₁ का एक पिंड विराम में स्थित द्रव्यमान m₂ के पिंड से टकराता है। यदि टक्कर पूर्णतः अप्रत्यास्थ (e = 0) है, तो गतिज ऊर्जा की भिन्नात्मक हानि है:",
            "options": ["m₁ / (m₁ + m₂)", "m₂ / (m₁ + m₂)", "m₁ m₂ / (m₁ + m₂)²", "(m₁ - m₂) / (m₁ + m₂)"],
            "optionsHi": ["m₁ / (m₁ + m₂)", "m₂ / (m₁ + m₂)", "m₁ m₂ / (m₁ + m₂)²", "(m₁ - m₂) / (m₁ + m₂)"],
            "correct": 1,
            "explanation": "Initial KE = 1/2 m₁ u₁². Common final velocity V = m₁ u₁ / (m₁ + m₂). Final KE = 1/2 (m₁ + m₂) V² = 1/2 m₁² u₁² / (m₁ + m₂). Loss in KE = Initial - Final = 1/2 (m₁ m₂ / (m₁ + m₂)) u₁². Fractional loss = ΔK / K_initial = m₂ / (m₁ + m₂).",
            "explanationHi": "गतिज ऊर्जा हानि ΔK = 1/2 [m₁ m₂ / (m₁ + m₂)] u₁²। भिन्नात्मक हानि = ΔK / K₁ = m₂ / (m₁ + m₂)।"
        },
        # Q20: [NEET 2020] 2D elastic collision 90 degrees
        {
            "num": 20,
            "question": "[NEET 2020] A billiard ball of mass m moving with speed v collides glancingly and elastically with an identical billiard ball at rest. If the collision is not head-on, the angle between their directions of motion after the collision is:",
            "questionHi": "[NEET 2020] चाल v से गतिमान द्रव्यमान m की एक बिलियर्ड गेंद विराम में स्थित समान बिलियर्ड गेंद से तिर्यक (glancing) प्रत्यास्थ टक्कर करती है। यदि टक्कर सम्मुख नहीं है, तो टक्कर के बाद उनकी गति की दिशाओं के बीच का कोण है:",
            "options": ["30°", "45°", "60°", "90°"],
            "optionsHi": ["30°", "45°", "60°", "90°"],
            "correct": 3,
            "explanation": "Conservation of momentum: v = v₁ + v₂ => v² = v₁² + v₂² + 2(v₁·v₂). Conservation of kinetic energy (elastic): 1/2 m v² = 1/2 m v₁² + 1/2 m v₂² => v² = v₁² + v₂². Equating gives 2(v₁·v₂) = 0 => v₁ ⊥ v₂ (angle = 90°).",
            "explanationHi": "संवेग व गतिज ऊर्जा संरक्षण से: v² = v₁² + v₂² + 2(v₁·v₂) तथा v² = v₁² + v₂²। अतः v₁·v₂ = 0 => कोण = 90°।"
        }
    ],
    "phy_sec_b": [
        # Q21: Spring on incline
        {
            "num": 21,
            "question": "A block of mass 1 kg is released from rest from a point 1 m above the uncompressed end of a vertical spring of spring constant k = 100 N/m. The maximum compression x of the spring is: (g = 10 m/s²)",
            "questionHi": "स्प्रिंग नियतांक k = 100 N/m की एक ऊर्ध्वाधर स्प्रिंग के असंपीड़ित सिरे से 1 m ऊपर स्थित बिंदु से 1 kg द्रव्यमान के गुटके को छोड़ा जाता है। स्प्रिंग का अधिकतम संपीड़न x है: (g = 10 m/s²)",
            "options": ["0.2 m", "0.4 m", "0.5 m", "0.6 m"],
            "optionsHi": ["0.2 m", "0.4 m", "0.5 m", "0.6 m"],
            "correct": 3,
            "explanation": "Total drop in height is (h + x) = (1 + x). Conservation of energy: mg(1 + x) = 1/2 k x² => 10(1 + x) = 50 x² => 5x² - x - 1 = 0 => x = (1 + √(1 + 20)) / 10 = (1 + 4.58) / 10 ≈ 0.56 m ≈ 0.6 m.",
            "explanationHi": "ऊर्जा संरक्षण: mg(1 + x) = 1/2 k x² => 10(1 + x) = 50 x² => 5x² - x - 1 = 0 => x ≈ 0.6 m।"
        },
        # Q22: Variable power P = 2t
        {
            "num": 22,
            "question": "A particle of mass 1 kg starts from rest and is driven by an engine delivering variable power P(t) = 6t W. The velocity of the particle at t = 2 seconds is:",
            "questionHi": "1 kg द्रव्यमान का एक कण विरामावस्था से चलना प्रारंभ करता है और एक इंजन द्वारा संचालित होता है जो परिवर्ती शक्ति P(t) = 6t W प्रदान करता है। t = 2 सेकंड पर कण का वेग है:",
            "options": ["2 m/s", "4 m/s", "4.9 m/s", "6 m/s"],
            "optionsHi": ["2 m/s", "4 m/s", "4.9 m/s", "6 m/s"],
            "correct": 2,
            "explanation": "Work done W = ∫ P dt = ∫₀² 6t dt = [3t²]₀² = 12 J. From work-energy theorem: W = 1/2 m v² - 0 => 12 = 1/2 (1) v² => v² = 24 => v = √24 ≈ 4.899 ≈ 4.9 m/s.",
            "explanationHi": "कार्य W = ∫₀² 6t dt = 3(4) = 12 J। कार्य-ऊर्जा प्रमेय: 1/2 m v² = 12 => v = √24 ≈ 4.9 m/s।"
        },
        # Q23: COM of two masses connected by spring
        {
            "num": 23,
            "question": "Two blocks of masses 2 kg and 3 kg are placed on a smooth horizontal table connected by a light spring. A horizontal constant force of 10 N is applied to the 3 kg block directed away from the 2 kg block. The acceleration of the centre of mass of the system is:",
            "questionHi": "2 kg और 3 kg द्रव्यमान के दो गुटके एक चिकनी क्षैतिज मेज पर रखी एक हल्की स्प्रिंग से जुड़े हैं। 3 kg के गुटके पर 2 kg के गुटके से दूर निर्देशित 10 N का एक क्षैतिज नियत बल लगाया जाता है। निकाय के द्रव्यमान केंद्र का त्वरण है:",
            "options": ["1 m/s²", "2 m/s²", "3.33 m/s²", "5 m/s²"],
            "optionsHi": ["1 m/s²", "2 m/s²", "3.33 m/s²", "5 m/s²"],
            "correct": 1,
            "explanation": "Acceleration of centre of mass depends only on external forces: a_com = F_ext / M_total = 10 N / (2 kg + 3 kg) = 10 / 5 = 2 m/s².",
            "explanationHi": "द्रव्यमान केंद्र का त्वरण केवल बाह्य बलों पर निर्भर करता है: a_com = F_ext / (m₁ + m₂) = 10 / 5 = 2 m/s²।"
        },
        # Q24: Collision with rebound coefficient e
        {
            "num": 24,
            "question": "A ball strikes a rigid horizontal floor normally with velocity u and rebounds with velocity v. If the coefficient of restitution is e = 0.6, the percentage of kinetic energy lost in the impact is:",
            "questionHi": "एक गेंद दृढ़ क्षैतिज फर्श से अभिलंबवत u वेग से टकराती है और v वेग से वापस उछलती है। यदि प्रत्यावस्थान गुणांक e = 0.6 है, तो संघट्ट में नष्ट हुई गतिज ऊर्जा का प्रतिशत है:",
            "options": ["36%", "40%", "64%", "80%"],
            "optionsHi": ["36%", "40%", "64%", "80%"],
            "correct": 2,
            "explanation": "Rebound velocity v = e u. Final KE = 1/2 m v² = e² (1/2 m u²) = (0.6)² K_initial = 0.36 K_initial. Kinetic energy lost = (1 - 0.36) × 100% = 64%.",
            "explanationHi": "उछाल का वेग v = e·u। अंतिम गतिज ऊर्जा K' = e² K = (0.36) K। गतिज ऊर्जा की प्रतिशत हानि = (1 - 0.36) × 100% = 64%।"
        },
        # Q25: Heavy mass colliding with light stationary mass
        {
            "num": 25,
            "question": "[NEET PYQ] A very massive body of mass M moving with velocity v collides head-on elastically with a very light body of mass m initially at rest (M >> m). The velocity of the lighter body after collision is:",
            "questionHi": "[NEET PYQ] वेग v से गतिमान अत्यंत भारी पिंड (द्रव्यमान M) विरामावस्था में स्थित अत्यंत हल्के पिंड (द्रव्यमान m, M >> m) से सम्मुख प्रत्यास्थ टक्कर करता है। टक्कर के बाद हल्के पिंड का वेग है:",
            "options": ["v", "2v", "v / 2", "zero"],
            "optionsHi": ["v", "2v", "v / 2", "शून्य"],
            "correct": 1,
            "explanation": "Velocity of second body after 1D elastic collision: v₂' = ((2 m₁) / (m₁ + m₂)) u₁ + ((m₂ - m₁) / (m₁ + m₂)) u₂. With u₂ = 0 and M >> m, v₂' ≈ (2M / M) v = 2v.",
            "explanationHi": "एकविमीय प्रत्यास्थ टक्कर सूत्र से: v₂' = [2M / (M + m)] v। चूँकि M >> m है, v₂' = 2v।"
        }
    ],

    "chem_sec_a": [
        # Q26: [NEET 2021] MOT bond order & magnetism
        {
            "num": 26,
            "question": "[NEET 2021] According to Molecular Orbital Theory (MOT), which of the following diatomic species is diamagnetic and has a fractional bond order?",
            "questionHi": "[NEET 2021] आण्विक कक्षक सिद्धांत (MOT) के अनुसार, निम्नलिखित में से कौन सी द्विपरमाणुक स्पीशीज प्रतिचुंबकीय है तथा उसकी बंध कोटि भिन्नात्मक (fractional) नहीं होकर पूर्ण संख्या है?",
            "options": ["O₂", "O₂⁻", "N₂", "B₂"],
            "optionsHi": ["O₂", "O₂⁻", "N₂", "B₂"],
            "correct": 2,
            "explanation": "N₂ (14 electrons) has electronic configuration: σ1s² σ*1s² σ2s² σ*2s² π2px²=π2py² σ2pz². Nb = 10, Na = 4. Bond order = (10 - 4)/2 = 3 (an integer). All electrons are paired, making it diamagnetic. O₂ and B₂ are paramagnetic.",
            "explanationHi": "N₂ (14 e⁻) में सभी इलेक्ट्रॉन युग्मित होते हैं (प्रतिचुंबकीय) और बंध कोटि (10-4)/2 = 3 होती है। O₂ और B₂ अनुचुंबकीय होते हैं।"
        },
        # Q27: [NEET 2020] Dipole moment NH3 vs NF3
        {
            "num": 27,
            "question": "[NEET 2020] Although both NH₃ and NF₃ possess trigonal pyramidal geometry, the dipole moment of NH₃ (1.47 D) is significantly higher than that of NF₃ (0.24 D) because:",
            "questionHi": "[NEET 2020] यद्यपि NH₃ और NF₃ दोनों की ज्यामिति त्रिकोणीय पिरामिडीय है, फिर भी NH₃ का द्विध्रुव आघूर्ण (1.47 D) NF₃ (0.24 D) की तुलना में काफी अधिक है क्योंकि:",
            "options": [
                "In NH₃, the lone pair dipole opposes the resultant N-H bond dipoles",
                "In NF₃, the orbital dipole due to lone pair and resultant N-F bond dipoles point in the same direction",
                "In NH₃, the orbital dipole due to lone pair and resultant N-H bond dipoles point in the same direction",
                "Nitrogen is more electronegative than Fluorine"
            ],
            "optionsHi": [
                "NH₃ में एकाकी युग्म का द्विध्रुव N-H बंध द्विध्रुवों का विरोध करता है",
                "NF₃ में एकाकी युग्म का कक्षक द्विध्रुव और N-F बंध द्विध्रुव एक ही दिशा में होते हैं",
                "NH₃ में एकाकी युग्म का कक्षक द्विध्रुव और N-H बंध द्विध्रुव एक ही दिशा में निर्देशित होते हैं",
                "नाइट्रोजन फ्लोरीन से अधिक विद्युत ऋणात्मक है"
            ],
            "correct": 2,
            "explanation": "In NH₃, N is more electronegative than H, so N-H bond dipoles point towards N, in the same direction as the lone pair dipole moment, reinforcing each other. In NF₃, F is more electronegative than N, so N-F dipoles oppose the lone pair dipole.",
            "explanationHi": "NH₃ में N-H बंध द्विध्रुव N की ओर (ऊपर) होते हैं, जो एकाकी युग्म के द्विध्रुव की दिशा में जुड़कर उसे बढ़ाते हैं। NF₃ में N-F बंध द्विध्रुव नीचे की ओर होकर एकाकी युग्म का विरोध करते हैं।"
        },
        # Q28: Intramolecular vs Intermolecular H-bonding
        {
            "num": 28,
            "question": "o-Nitrophenol is steam volatile and has lower solubility in water compared to p-nitrophenol. This difference is attributed to:",
            "questionHi": "o-नाइट्रोफीनॉल भाप वाष्पशील है और p-नाइट्रोफीनॉल की तुलना में जल में कम घुलनशील है। इस अंतर का कारण है:",
            "options": [
                "Intermolecular hydrogen bonding in o-nitrophenol and intramolecular in p-nitrophenol",
                "Intramolecular hydrogen bonding in o-nitrophenol and intermolecular in p-nitrophenol",
                "Higher molecular mass of p-nitrophenol",
                "Presence of resonance only in p-nitrophenol"
            ],
            "optionsHi": [
                "o-नाइट्रोफीनॉल में अंतरा-अणुक तथा p-नाइट्रोफीनॉल में अंतःअणुक हाइड्रोजन आबंधन",
                "o-नाइट्रोफीनॉल में अंतःअणुक (chelation) तथा p-नाइट्रोफीनॉल में अंतरा-अणुक हाइड्रोजन आबंधन",
                "p-नाइट्रोफीनॉल का अधिक आण्विक द्रव्यमान",
                "केवल p-नाइट्रोफीनॉल में अनुनाद की उपस्थिति"
            ],
            "correct": 1,
            "explanation": "o-Nitrophenol exhibits intramolecular H-bonding (chelation between -OH and adjacent -NO₂), reducing intermolecular association. p-Nitrophenol forms intermolecular H-bonds with other molecules and water, resulting in higher boiling point and higher water solubility.",
            "explanationHi": "o-नाइट्रोफीनॉल में अंतःअणुक H-बंध बनने से यह दूसरे अणुओं या जल से नहीं जुड़ता (भाप वाष्पशील)। p-नाइट्रोफीनॉल में अंतरा-अणुक H-बंध होता है।"
        },
        # Q29: [NEET 2020] VSEPR Hybridization XeF4 & ClF3
        {
            "num": 29,
            "question": "[NEET 2020] Match the molecules in Column I with their corresponding shapes in Column II:\n(a) XeF₄  (b) SF₄  (c) ClF₃  (d) BF₃\n(i) T-shaped  (ii) Trigonal planar  (iii) Square planar  (iv) See-saw",
            "questionHi": "[NEET 2020] कॉलम I के अणुओं को कॉलम II में उनकी संगत आकृतियों से सुमेलित कीजिए:\n(a) XeF₄  (b) SF₄  (c) ClF₃  (d) BF₃\n(i) T-आकृति  (ii) त्रिकोणीय समतलीय  (iii) वर्ग समतलीय  (iv) सी-सॉ (See-saw)",
            "options": [
                "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
                "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
                "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)"
            ],
            "optionsHi": [
                "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
                "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
                "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)"
            ],
            "correct": 0,
            "explanation": "XeF₄ has 4 bond pairs + 2 lone pairs = sp³d² (Square planar). SF₄ has 4 bond pairs + 1 lone pair = sp³d (See-saw). ClF₃ has 3 bond pairs + 2 lone pairs = sp³d (T-shaped). BF₃ has 3 bond pairs + 0 lone pair = sp² (Trigonal planar).",
            "explanationHi": "XeF₄ = sp³d² (वर्ग समतलीय), SF₄ = sp³d (सी-सॉ), ClF₃ = sp³d (T-आकृति), BF₃ = sp² (त्रिकोणीय समतलीय)।"
        },
        # Q30: Fajan's rules covalent character
        {
            "num": 30,
            "question": "According to Fajan's rules, which of the following chlorides exhibits the highest covalent character?",
            "questionHi": "फायान्स के नियमों के अनुसार, निम्नलिखित क्लोराइडों में से कौन सा सर्वाधिक सहसंयोजक लक्षण प्रदर्शित करता है?",
            "options": ["NaCl", "MgCl₂", "AlCl₃", "SiCl₄"],
            "optionsHi": ["NaCl", "MgCl₂", "AlCl₃", "SiCl₄"],
            "correct": 3,
            "explanation": "According to Fajan's rules, smaller cation size and higher positive charge lead to higher polarising power. Si⁴⁺ has the highest charge (+4) and smallest ionic radius, polarising chloride ions maximally to give the highest covalent character.",
            "explanationHi": "फायान्स के नियमानुसार, धनायन का आकार छोटा तथा उस पर आवेश अधिक होने पर ध्रुवण क्षमता अधिकतम होती है। Si⁴⁺ पर उच्चतम आवेश (+4) व न्यूनतम आकार के कारण SiCl₄ सर्वाधिक सहसंयोजक है।"
        },
        # Q31: Formal charge in ozone
        {
            "num": 31,
            "question": "In the Lewis structure of Ozone (O₃), the formal charges on the central oxygen atom (1), end double-bonded oxygen atom (2), and end single-bonded oxygen atom (3) are respectively:",
            "questionHi": "ओजोन (O₃) की लुईस संरचना में, केंद्रीय ऑक्सीजन परमाणु (1), सिरे के द्वि-बंधित ऑक्सीजन (2) तथा सिरे के एकल-बंधित ऑक्सीजन (3) पर फॉर्मल आवेश क्रमशः हैं:",
            "options": ["+1, 0, -1", "0, +1, -1", "-1, +1, 0", "+1, -1, 0"],
            "optionsHi": ["+1, 0, -1", "0, +1, -1", "-1, +1, 0", "+1, -1, 0"],
            "correct": 0,
            "explanation": "Formal Charge = V - N - B/2. Central O(1) has 1 lone pair (2 e⁻) and 3 bonds (6 e⁻): FC = 6 - 2 - 3 = +1. Double-bonded O(2) has 2 lone pairs (4 e⁻) and 2 bonds (4 e⁻): FC = 6 - 4 - 2 = 0. Single-bonded O(3) has 3 lone pairs (6 e⁻) and 1 bond (2 e⁻): FC = 6 - 6 - 1 = -1.",
            "explanationHi": "फॉर्मल आवेश = V - L - B/2। केंद्रीय O पर FC = 6 - 2 - 3 = +1; द्वि-बंधित सिरे के O पर FC = 6 - 4 - 2 = 0; एकल-बंधित O पर FC = 6 - 6 - 1 = -1।"
        },
        # Q32: [NEET 2022] MOT electronic configuration & paramagnetism of O2
        {
            "num": 32,
            "question": "[NEET 2022] In which of the following molecular orbitals of the O₂ molecule are the two unpaired electrons located?",
            "questionHi": "[NEET 2022] O₂ अणु के निम्नलिखित आण्विक कक्षकों में से किन कक्षकों में दो अयुग्मित इलेक्ट्रॉन उपस्थित होते हैं?",
            "options": ["π*2px and π*2py", "σ*2pz", "π2px and π2py", "σ2pz"],
            "optionsHi": ["π*2px तथा π*2py", "σ*2pz", "π2px तथा π2py", "σ2pz"],
            "correct": 0,
            "explanation": "In O₂ (16 electrons), the valence electronic configuration is σ2pz² π2px²=π2py² π*2px¹=π*2py¹. The two degenerate antibonding pi orbitals (π*2px and π*2py) each contain one unpaired electron according to Hund's rule, imparting paramagnetism.",
            "explanationHi": "O₂ में 16 इलेक्ट्रॉन होते हैं। हुंड के नियमानुसार इसके दो अयुग्मित इलेक्ट्रॉन समभ्रंश विपरीत-बंधी कक्षकों π*2px¹ तथा π*2py¹ में स्थित होते हैं।"
        },
        # Q33: Raoult's law vapour pressure calculation
        {
            "num": 33,
            "question": "At 300 K, the vapour pressures of pure benzene (A) and pure toluene (B) are 80 mm Hg and 30 mm Hg respectively. In an ideal equimolar solution of the two, the mole fraction of benzene in the vapour phase (y_A) is:",
            "questionHi": "300 K पर, शुद्ध बेंजीन (A) तथा शुद्ध टॉलूईन (B) के वाष्प दाब क्रमशः 80 mm Hg तथा 30 mm Hg हैं। दोनों के एक आदर्श सममोलर विलयन में, वाष्प प्रावस्था में बेंजीन का मोल प्रभाज (y_A) है:",
            "options": ["0.50", "0.62", "0.73", "0.80"],
            "optionsHi": ["0.50", "0.62", "0.73", "0.80"],
            "correct": 2,
            "explanation": "Equimolar means x_A = x_B = 0.5. Partial pressures: P_A = 80 × 0.5 = 40 mm Hg; P_B = 30 × 0.5 = 15 mm Hg. P_total = 40 + 15 = 55 mm Hg. Mole fraction in vapour phase: y_A = P_A / P_total = 40 / 55 = 8 / 11 ≈ 0.727 ≈ 0.73.",
            "explanationHi": "P_A = 80 × 0.5 = 40 mm Hg; P_B = 30 × 0.5 = 15 mm Hg। P_total = 55 mm Hg। वाष्प प्रावस्था में y_A = P_A / P_total = 40/55 ≈ 0.73।"
        },
        # Q34: [NEET 2019] Non-ideal solutions deviations
        {
            "num": 34,
            "question": "[NEET 2019] Which of the following binary liquid mixtures exhibits a negative deviation from Raoult's law?",
            "questionHi": "[NEET 2019] निम्नलिखित द्वि-अंगी द्रव मिश्रणों में से कौन सा राउल्ट के नियम से ऋणात्मक विचलन प्रदर्शित करता है?",
            "options": [
                "Ethanol + Acetone",
                "Benzene + Toluene",
                "Chloroform + Acetone",
                "Carbon disulphide + Acetone"
            ],
            "optionsHi": [
                "एथेनॉल + एसीटोन",
                "बेंजीन + टॉलूईन",
                "क्लोरोफॉर्म + एसीटोन",
                "कार्बन डाइसल्फाइड + एसीटोन"
            ],
            "correct": 2,
            "explanation": "Chloroform and acetone form intermolecular hydrogen bonds (Cl₃C-H···O=C(CH₃)₂). The A-B attractive interactions are stronger than A-A or B-B interactions, causing negative deviation (ΔH_mix < 0, ΔV_mix < 0, vapour pressure decreases).",
            "explanationHi": "क्लोरोफॉर्म और एसीटोन के अणुओं के बीच नया अंतरा-अणुक हाइड्रोजन बंध बनता है, जिससे A-B आकर्षण A-A व B-B से प्रबल हो जाता है और ऋणात्मक विचलन होता है।"
        },
        # Q35: Azeotropes
        {
            "num": 35,
            "question": "A binary solution of two liquids that boils at a constant temperature without any change in its liquid and vapour composition is called an azeotrope. A minimum boiling azeotrope is formed by solutions showing:",
            "questionHi": "दो द्रवों का द्वि-अंगी विलयन जो बिना किसी संगठन परिवर्तन के स्थिर ताप पर उबलता है, स्थिरक्वाथी (azeotrope) कहलाता है। न्यूनतम क्वथनांक स्थिरक्वाथी उन विलयनों द्वारा बनता है जो प्रदर्शित करते हैं:",
            "options": [
                "Zero deviation from Raoult's law",
                "Large positive deviation from Raoult's law",
                "Large negative deviation from Raoult's law",
                "Ideal behaviour with ΔH_mix = 0"
            ],
            "optionsHi": [
                "राउल्ट के नियम से शून्य विचलन",
                "राउल्ट के नियम से अत्यधिक धनात्मक विचलन",
                "राउल्ट के नियम से अत्यधिक ऋणात्मक विचलन",
                "ΔH_mix = 0 के साथ आदर्श व्यवहार"
            ],
            "correct": 1,
            "explanation": "Solutions showing large positive deviations from Raoult's law produce vapour pressure maxima at an intermediate composition, which corresponds to a boiling point minimum (minimum boiling azeotrope, e.g. 95% ethanol + 5% water).",
            "explanationHi": "राउल्ट के नियम से अत्यधिक धनात्मक विचलन दर्शाने वाले विलयन मध्यवर्ती संगठन पर अधिकतम वाष्प दाब तथा न्यूनतम क्वथनांक प्रदर्शित करते हैं (उदा. 95% एथेनॉल + जल)।"
        },
        # Q36: [NEET 2018] RLVP calculation
        {
            "num": 36,
            "question": "[NEET 2018] The vapour pressure of pure water at 298 K is 24 mm Hg. If 18 g of glucose (C₆H₁₂O₆, M = 180 g/mol) is dissolved in 178.2 g of water, the relative lowering of vapour pressure is:",
            "questionHi": "[NEET 2018] 298 K पर शुद्ध जल का वाष्प दाब 24 mm Hg है। यदि 178.2 g जल में 18 g ग्लूकोज (अणुभार = 180 g/mol) घोला जाता है, तो वाष्प दाब का आपेक्षिक अवनमन (RLVP) है:",
            "options": ["0.010", "0.018", "0.100", "0.240"],
            "optionsHi": ["0.010", "0.018", "0.100", "0.240"],
            "correct": 0,
            "explanation": "Moles of glucose n_solute = 18 / 180 = 0.1 mol. Moles of water n_solvent = 178.2 / 18 = 9.9 mol. Total moles = 0.1 + 9.9 = 10.0 mol. RLVP = (P° - P_s)/P° = n_solute / (n_solute + n_solvent) = 0.1 / 10.0 = 0.010.",
            "explanationHi": "ग्लूकोज के मोल = 18/180 = 0.1; जल के मोल = 178.2/18 = 9.9। कुल मोल = 10.0। RLVP = 0.1 / 10.0 = 0.010।"
        },
        # Q37: [NEET 2016] Freezing point depression lowest FP
        {
            "num": 37,
            "question": "[NEET 2016] Which of the following 0.10 m aqueous solutions will exhibit the lowest freezing point?",
            "questionHi": "[NEET 2016] निम्नलिखित में से कौन सा 0.10 m जलीय विलयन सबसे कम हिमांक प्रदर्शित करेगा?",
            "options": ["0.10 m Glucose", "0.10 m NaCl", "0.10 m BaCl₂", "0.10 m Al₂(SO₄)₃"],
            "optionsHi": ["0.10 m ग्लूकोज", "0.10 m NaCl", "0.10 m BaCl₂", "0.10 m Al₂(SO₄)₃"],
            "correct": 3,
            "explanation": "Depression in freezing point ΔTf = i · Kf · m. Higher van 't Hoff factor i gives greater depression ΔTf, resulting in the lowest freezing point Tf = Tf° - ΔTf. For Al₂(SO₄)₃, i = 5 (2 Al³⁺ + 3 SO₄²⁻), which is maximum.",
            "explanationHi": "ΔTf = i · Kf · m। Al₂(SO₄)₃ के लिए i = 5 (अधिकतम) है। अधिकतम अवनमन होने से इसका हिमांक न्यूनतम होगा।"
        },
        # Q38: [NEET 2021] Isotonic solutions osmotic pressure
        {
            "num": 38,
            "question": "[NEET 2021] A 5% (w/v) solution of cane sugar (molecular weight = 342 g/mol) is isotonic with a 0.877% (w/v) solution of an unknown organic solute X. The molecular weight of solute X is:",
            "questionHi": "[NEET 2021] इक्षु शर्करा (केन शुगर, अणुभार = 342 g/mol) का 5% (w/v) विलयन एक अज्ञात कार्बनिक विलेय X के 0.877% (w/v) विलयन के साथ समपरासारी है। विलेय X का अणुभार है:",
            "options": ["59.98 g/mol", "68.4 g/mol", "119.8 g/mol", "180 g/mol"],
            "optionsHi": ["59.98 g/mol", "68.4 g/mol", "119.8 g/mol", "180 g/mol"],
            "correct": 0,
            "explanation": "Isotonic means π₁ = π₂ => C₁ = C₂. C_sugar = (5 g / 342 g/mol) / (0.1 L) = 50 / 342 M. C_X = (0.877 g / M_X) / (0.1 L) = 8.77 / M_X M. Equating: 50 / 342 = 8.77 / M_X => M_X = (8.77 × 342) / 50 ≈ 2999.34 / 50 ≈ 59.98 g/mol.",
            "explanationHi": "समपरासारी विलयनों में C₁ = C₂ => 5 / 342 = 0.877 / M_X => M_X = (0.877 × 342) / 5 ≈ 59.98 g/mol।"
        },
        # Q39: Van't Hoff factor i & degree of dissociation
        {
            "num": 39,
            "question": "A 0.05 m aqueous solution of a weak monobasic acid HX has a freezing point of -0.1023 °C. If Kf for water is 1.86 K·kg/mol, the degree of dissociation (α) of the acid is:",
            "questionHi": "एक दुर्बल एक-क्षारकीय अम्ल HX के 0.05 m जलीय विलयन का हिमांक -0.1023 °C है। यदि जल के लिए Kf = 1.86 K·kg/mol है, तो अम्ल के वियोजन की मात्रा (α) है:",
            "options": ["0.05", "0.10", "0.15", "0.20"],
            "optionsHi": ["0.05", "0.10", "0.15", "0.20"],
            "correct": 1,
            "explanation": "Observed ΔTf = 0.1023 °C. Calculated normal ΔTf = Kf · m = 1.86 × 0.05 = 0.093 °C. Van 't Hoff factor i = ΔTf(obs) / ΔTf(normal) = 0.1023 / 0.093 = 1.10. For HX ⇌ H⁺ + X⁻ (n = 2): i = 1 + α => 1.10 = 1 + α => α = 0.10 (or 10%).",
            "explanationHi": "ΔTf(obs) = 0.1023 °C। सामान्य ΔTf = 1.86 × 0.05 = 0.093 °C। i = 0.1023 / 0.093 = 1.10। i = 1 + α => α = 0.10।"
        },
        # Q40: Dynamic nature of equilibrium
        {
            "num": 40,
            "question": "Which of the following statements is INCORRECT regarding a reversible chemical reaction in a state of dynamic chemical equilibrium?",
            "questionHi": "गतिशील रासायनिक साम्यावस्था की स्थिति में एक उत्क्रमणीय रासायनिक अभिक्रिया के संबंध में निम्नलिखित में से कौन सा कथन गलत है?",
            "options": [
                "The rates of the forward and backward reactions become equal",
                "The concentrations of reactants and products remain constant with time",
                "The reaction ceases completely and molecular collisions stop",
                "Equilibrium can be approached from either the forward or backward direction"
            ],
            "optionsHi": [
                "अग्र तथा पश्च अभिक्रियाओं की दरें बराबर हो जाती हैं",
                "समय के साथ अभिकारकों और उत्पादों की सांद्रता स्थिर रहती है",
                "अभिक्रिया पूरी तरह रुक जाती है तथा आण्विक संघट्ट समाप्त हो जाते हैं",
                "साम्यावस्था को अग्र अथवा पश्च किसी भी दिशा से प्राप्त किया जा सकता है"
            ],
            "optionsHi": [
                "अग्र तथा पश्च अभिक्रियाओं की दरें बराबर हो जाती हैं",
                "समय के साथ अभिकारकों और उत्पादों की सांद्रता स्थिर रहती है",
                "अभिक्रिया पूरी तरह रुक जाती है तथा आण्विक संघट्ट समाप्त हो जाते हैं",
                "साम्यावस्था को अग्र अथवा पश्च किसी भी दिशा से प्राप्त किया जा सकता है"
            ],
            "correct": 2,
            "explanation": "Chemical equilibrium is dynamic, not static. Forward and reverse reactions continue to occur simultaneously at identical rates; the reaction does not cease at the molecular level.",
            "explanationHi": "रासायनिक साम्यावस्था गतिशील होती है, स्थैतिक नहीं। अग्र व पश्च अभिक्रियाएँ समान दर से लगातार चलती रहती हैं, अभिक्रिया रुकती नहीं है।"
        },
        # Q41: Law of Mass Action
        {
            "num": 41,
            "question": "The Law of Mass Action, formulated by Guldberg and Waage, states that at constant temperature, the rate of a chemical reaction is directly proportional to:",
            "questionHi": "गुलबर्ग और वागे द्वारा प्रतिपादित द्रव्य अनुपाती क्रिया के नियम के अनुसार, स्थिर ताप पर किसी रासायनिक अभिक्रिया की दर किसके सीधे समानुपाती होती है?",
            "options": [
                "The product of active masses of the reactants, each raised to the power of their stoichiometric coefficients",
                "The sum of molar masses of the reacting substances",
                "The total pressure of the gaseous mixture",
                "The volume of the reaction container"
            ],
            "optionsHi": [
                "अभिकारकों के सक्रिय द्रव्यमानों के गुणनफल के, जहाँ प्रत्येक अपनी रससमीकरणमितीय संख्या की घात पर होता है",
                "अभिक्रिया करने वाले पदार्थों के मोलर द्रव्यमानों के योग के",
                "गैसीय मिश्रण के कुल दाब के",
                "अभिक्रिया पात्र के आयतन के"
            ],
            "correct": 0,
            "explanation": "The Law of Mass Action states that the rate of an elementary reaction at a constant temperature is proportional to the product of active masses (molar concentrations) of the reacting species raised to powers corresponding to their stoichiometric coefficients.",
            "explanationHi": "द्रव्य अनुपाती क्रिया के नियमानुसार, किसी अभिक्रिया की दर अभिकारकों के सक्रिय द्रव्यमानों के गुणनफल के समानुपाती होती है।"
        },
        # Q42: [NEET 2018] Kp Kc relationship
        {
            "num": 42,
            "question": "[NEET 2018] For the gaseous reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), the relationship between equilibrium constants Kp and Kc is:",
            "questionHi": "[NEET 2018] गैसीय अभिक्रिया: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) के लिए साम्य स्थिरांकों Kp तथा Kc के मध्य संबंध है:",
            "options": ["Kp = Kc (RT)⁻¹", "Kp = Kc (RT)", "Kp = Kc (RT)²", "Kp = Kc"],
            "optionsHi": ["Kp = Kc (RT)⁻¹", "Kp = Kc (RT)", "Kp = Kc (RT)²", "Kp = Kc"],
            "correct": 1,
            "explanation": "The relationship is Kp = Kc (RT)^Δng. For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Δng = moles of gaseous products - moles of gaseous reactants = (1 + 1) - 1 = +1. Therefore, Kp = Kc (RT)¹ = Kc (RT).",
            "explanationHi": "Kp = Kc (RT)^Δng। यहाँ Δng = (1 + 1) - 1 = +1। अतः Kp = Kc (RT)।"
        },
        # Q43: Units of Kp and Kc
        {
            "num": 43,
            "question": "For the synthesis of ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the units of equilibrium constants Kc and Kp are respectively:",
            "questionHi": "अमोनिया निर्माण की अभिक्रिया: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) के लिए साम्य स्थिरांकों Kc तथा Kp की इकाइयाँ क्रमशः हैं:",
            "options": [
                "(mol·L⁻¹)⁻² and (atm)⁻²",
                "(mol·L⁻¹)² and (atm)²",
                "(mol·L⁻¹)⁻¹ and (atm)⁻¹",
                "Dimensionless and Dimensionless"
            ],
            "optionsHi": [
                "(mol·L⁻¹)⁻² तथा (atm)⁻²",
                "(mol·L⁻¹)² तथा (atm)²",
                "(mol·L⁻¹)⁻¹ तथा (atm)⁻¹",
                "विमाहीन तथा विमाहीन"
            ],
            "correct": 0,
            "explanation": "Units of Kc = (mol·L⁻¹)^Δng. Here Δng = 2 - (1 + 3) = -2, so units of Kc = (mol·L⁻¹)⁻² = L²·mol⁻². Units of Kp = (atm)^Δng = (atm)⁻².",
            "explanationHi": "Δng = 2 - 4 = -2। अतः Kc की इकाई (mol·L⁻¹)⁻² तथा Kp की इकाई (atm)⁻² है।"
        },
        # Q44: Heterogeneous equilibrium
        {
            "num": 44,
            "question": "In the heterogeneous equilibrium: CaCO₃(s) ⇌ CaO(s) + CO₂(g), the active mass of pure solids is taken as unity. The expression for the equilibrium constant Kp is:",
            "questionHi": "विषमांगी साम्यावस्था: CaCO₃(s) ⇌ CaO(s) + CO₂(g) में शुद्ध ठोसों का सक्रिय द्रव्यमान 1 माना जाता है। साम्य स्थिरांक Kp का व्यंजक है:",
            "options": [
                "Kp = P_CO₂",
                "Kp = (P_CaO × P_CO₂) / P_CaCO₃",
                "Kp = P_CO₂ / P_CaCO₃",
                "Kp = P_CaO / P_CO₂"
            ],
            "optionsHi": [
                "Kp = P_CO₂",
                "Kp = (P_CaO × P_CO₂) / P_CaCO₃",
                "Kp = P_CO₂ / P_CaCO₃",
                "Kp = P_CaO / P_CO₂"
            ],
            "correct": 0,
            "explanation": "In heterogeneous equilibrium involving pure solids, their active masses are taken as unity (constant). Therefore, Kp = P_CO₂ and Kc = [CO₂].",
            "explanationHi": "शुद्ध ठोसों (CaCO₃ व CaO) का सक्रिय द्रव्यमान नियत (इकाई) लिया जाता है। अतः Kp = P_CO₂।"
        },
        # Q45: Direction of shift Qc vs Kc
        {
            "num": 45,
            "question": "At a certain temperature, the equilibrium constant Kc for a reaction is 50. If at any instant the reaction quotient Qc is found to be 85, in which direction will the reaction proceed spontaneously?",
            "questionHi": "किसी ताप पर एक अभिक्रिया के लिए साम्य स्थिरांक Kc = 50 है। यदि किसी क्षण अभिक्रिया भागफल Qc = 85 पाया जाता है, तो अभिक्रिया स्वतः किस दिशा में अग्रसर होगी?",
            "options": [
                "Forward direction to produce more products",
                "Backward direction to produce more reactants",
                "The reaction is already at equilibrium",
                "Direction cannot be predicted without knowing pressure"
            ],
            "optionsHi": [
                "अधिक उत्पाद बनाने हेतु अग्र दिशा में",
                "अधिक अभिकारक बनाने हेतु पश्च दिशा में",
                "अभिक्रिया पहले से ही साम्यावस्था में है",
                "दाब जाने बिना दिशा का अनुमान नहीं लगाया जा सकता"
            ],
            "correct": 1,
            "explanation": "When Qc > Kc, the concentration of products is higher than at equilibrium. The system will shift in the backward (reverse) direction to consume products and form reactants until Qc = Kc.",
            "explanationHi": "जब Qc > Kc होता है, तो उत्पाद साम्य से अधिक होते हैं। साम्य स्थापित करने के लिए अभिक्रिया पश्च (reverse) दिशा में चलती है।"
        }
    ],
    "chem_sec_b": [
        # Q46: MOT B2 molecule bond order
        {
            "num": 46,
            "question": "[NEET 2019] According to Molecular Orbital Theory, the B₂ molecule possesses a bond order of 1 and is paramagnetic because:",
            "questionHi": "[NEET 2019] आण्विक कक्षक सिद्धांत के अनुसार, B₂ अणु की बंध कोटि 1 होती है और यह अनुचुंबकीय होता है क्योंकि:",
            "options": [
                "Two unpaired electrons reside in degenerate π2px and π2py bonding molecular orbitals",
                "Two unpaired electrons reside in σ2pz bonding molecular orbital",
                "One unpaired electron resides in σ*2s orbital",
                "All electrons are paired in bonding orbitals"
            ],
            "optionsHi": [
                "दो अयुग्मित इलेक्ट्रॉन समभ्रंश आबंधी π2px तथा π2py कक्षकों में उपस्थित होते हैं",
                "दो अयुग्मित इलेक्ट्रॉन आबंधी σ2pz कक्षक में उपस्थित होते हैं",
                "एक अयुग्मित इलेक्ट्रॉन σ*2s कक्षक में उपस्थित होता है",
                "सभी इलेक्ट्रॉन आबंधी कक्षकों में युग्मित होते हैं"
            ],
            "correct": 0,
            "explanation": "B₂ has 10 electrons: σ1s² σ*1s² σ2s² σ*2s² π2px¹=π2py¹. Bond order = (6 - 4)/2 = 1. Since the two outermost electrons occupy degenerate bonding π orbitals singly, B₂ is paramagnetic.",
            "explanationHi": "B₂ (10 e⁻) का विन्यास σ1s² σ*1s² σ2s² σ*2s² π2px¹=π2py¹ होता है। दो अयुग्मित इलेक्ट्रॉन π2px व π2py में होने से यह अनुचुंबकीय है तथा बंध कोटि 1 है।"
        },
        # Q47: Benzoic acid dimer association van 't Hoff factor
        {
            "num": 47,
            "question": "Benzoic acid (C₆H₅COOH) associates to form dimers in benzene according to: 2 C₆H₅COOH ⇌ (C₆H₅COOH)₂. If the degree of association is α, the van 't Hoff factor i is given by:",
            "questionHi": "बेंजोइक अम्ल (C₆H₅COOH) बेंजीन में संगुणित होकर द्वितय बनाता है: 2 C₆H₅COOH ⇌ (C₆H₅COOH)₂। यदि संगुणन की मात्रा α है, तो वान्ट हॉफ कारक i है:",
            "options": ["1 + α", "1 - α", "1 - α / 2", "1 + α / 2"],
            "optionsHi": ["1 + α", "1 - α", "1 - α / 2", "1 + α / 2"],
            "correct": 2,
            "explanation": "For association into n-mer: i = 1 - (1 - 1/n)α. For dimerization n = 2: i = 1 - (1 - 1/2)α = 1 - α/2.",
            "explanationHi": "द्वितयीकरण (n = 2) के लिए वान्ट हॉफ गुणांक i = 1 + (1/n - 1)α = 1 - α/2 होता है।"
        },
        # Q48: Elevation in boiling point molar mass
        {
            "num": 48,
            "question": "When 10 g of a non-volatile non-electrolyte solute is dissolved in 100 g of benzene, the boiling point is elevated by 1.02 °C. If Kb for benzene is 2.53 K·kg/mol, the molar mass of the solute is:",
            "questionHi": "जब 10 g अवाष्पशील अनपघट्य विलेय को 100 g बेंजीन में घोला जाता है, तो क्वथनांक 1.02 °C बढ़ जाता है। यदि बेंजीन के लिए Kb = 2.53 K·kg/mol है, तो विलेय का मोलर द्रव्यमान है:",
            "options": ["124 g/mol", "248 g/mol", "372 g/mol", "496 g/mol"],
            "optionsHi": ["124 g/mol", "248 g/mol", "372 g/mol", "496 g/mol"],
            "correct": 1,
            "explanation": "ΔTb = Kb · m = Kb · (w₂ × 1000) / (M₂ × w₁) => 1.02 = 2.53 × (10 × 1000) / (M₂ × 100) => 1.02 = (2.53 × 100) / M₂ => M₂ = 253 / 1.02 ≈ 248 g/mol.",
            "explanationHi": "ΔTb = Kb × (w₂ × 1000)/(M₂ × w₁) => 1.02 = 2.53 × 100 / M₂ => M₂ = 253 / 1.02 ≈ 248 g/mol।"
        },
        # Q49: [NEET 2021] Modified equilibrium constants
        {
            "num": 49,
            "question": "[NEET 2021] If the equilibrium constant for the reaction: N₂(g) + O₂(g) ⇌ 2NO(g) is K, the equilibrium constant for the reaction: NO(g) ⇌ 1/2 N₂(g) + 1/2 O₂(g) will be:",
            "questionHi": "[NEET 2021] यदि अभिक्रिया: N₂(g) + O₂(g) ⇌ 2NO(g) के लिए साम्य स्थिरांक K है, तो अभिक्रिया: NO(g) ⇌ 1/2 N₂(g) + 1/2 O₂(g) के लिए साम्य स्थिरांक होगा:",
            "options": ["1 / K", "1 / K²", "1 / √K", "√K"],
            "optionsHi": ["1 / K", "1 / K²", "1 / √K", "√K"],
            "correct": 2,
            "explanation": "The target reaction is obtained by reversing the original reaction (giving 1/K) and then multiplying by 1/2 (raising the constant to power 1/2). Thus, K' = (1/K)^(1/2) = 1 / √K.",
            "explanationHi": "अभिक्रिया को उलटने पर साम्य स्थिरांक 1/K हो जाता है तथा 1/2 से गुणा करने पर घात 1/2 लगती है। अतः K' = 1/√K।"
        },
        # Q50: Multi-step overall equilibrium constant
        {
            "num": 50,
            "question": "Consider the consecutive equilibria:\n(1) A ⇌ B, K₁ = 2\n(2) B ⇌ C, K₂ = 4\n(3) C ⇌ D, K₃ = 3\nThe equilibrium constant for the overall reaction A ⇌ D is:",
            "questionHi": "क्रमागत साम्यावस्थाओं पर विचार कीजिए:\n(1) A ⇌ B, K₁ = 2\n(2) B ⇌ C, K₂ = 4\n(3) C ⇌ D, K₃ = 3\nसमग्र अभिक्रिया A ⇌ D के लिए साम्य स्थिरांक है:",
            "options": ["9", "12", "24", "48"],
            "optionsHi": ["9", "12", "24", "48"],
            "correct": 2,
            "explanation": "When equilibrium reactions are added, their equilibrium constants multiply: K_overall = K₁ × K₂ × K₃ = 2 × 4 × 3 = 24.",
            "explanationHi": "जब अभिक्रियाओं को जोड़ा जाता है, तो उनके साम्य स्थिरांकों का गुणा होता है: K_overall = K₁ × K₂ × K₃ = 2 × 4 × 3 = 24।"
        }
    ],

    "bot_sec_a": [
        # Q51: [NEET 2018] Pneumatophores in Rhizophora
        {
            "num": 51,
            "question": "[NEET 2018] Pneumatophores (respiratory roots) that emerge vertically upward from the soil to obtain atmospheric oxygen are found in:",
            "questionHi": "[NEET 2018] वायुमंडलीय ऑक्सीजन प्राप्त करने के लिए मृदा से ऊर्ध्वाधर ऊपर की ओर निकलने वाले श्वसन मूल (न्यूमैटोफोर) किसमें पाए जाते हैं?",
            "options": ["Rhizophora", "Banyan tree", "Pistia", "Bougainvillea"],
            "optionsHi": ["राइजोफोरा (Rhizophora)", "बरगद", "पिस्टिया", "बोगेनविलिया"],
            "correct": 0,
            "explanation": "In swampy/mangrove habitats like the Sundarbans, Rhizophora develops negatively geotropic respiratory roots called pneumatophores with pneumathodes (lenticels) for gas exchange.",
            "explanationHi": "दलदली क्षेत्रों में उगने वाले राइजोफोरा में ऋणात्मक गुरुत्वानुवर्ती श्वसन मूल (न्यूमैटोफोर) पाई जाती हैं जो श्वसन हेतु ऑक्सीजन लेती हैं।"
        },
        # Q52: [NEET 2021] Stilt roots maize sugarcane
        {
            "num": 52,
            "question": "[NEET 2021] Supporting roots coming out of the lower nodes of the stem in Maize and Sugarcane are termed as:",
            "questionHi": "[NEET 2021] मक्का और गन्ने में तने के निचले पर्वसंधियों (nodes) से निकलने वाली सहायक जड़ें कहलाती हैं:",
            "options": ["Prop roots", "Stilt roots", "Pneumatophores", "Epiphytic roots"],
            "optionsHi": ["स्तंभ मूल (Prop roots)", "अवस्तंभ मूल (Stilt roots)", "श्वसन मूल", "अधिपादपीय मूल"],
            "correct": 1,
            "explanation": "In Maize and Sugarcane, oblique adventitious roots emerge from the lower nodes of the stem to provide mechanical anchorage; these are called stilt roots.",
            "explanationHi": "मक्का तथा गन्ने के तने की निचली पर्वसंधियों से निकलने वाली यांत्रिक सहारा देने वाली जड़ें अवस्तंभ मूल (stilt roots) कहलाती हैं।"
        },
        # Q53: [NEET 2016] Thorns of Citrus & Bougainvillea
        {
            "num": 53,
            "question": "[NEET 2016] The thorns of Bougainvillea and Citrus are morphological modifications of:",
            "questionHi": "[NEET 2016] बोगेनविलिया तथा सिट्रस (नींबू) के कांटे किसका रूपांतरण हैं?",
            "options": ["Adventitious root", "Axillary bud of stem", "Leaf lamina", "Stipule"],
            "optionsHi": ["अपस्थानिक मूल", "तने की कक्षस्थ कलिका (Axillary bud)", "पर्ण फलक", "अनुपर्ण"],
            "correct": 1,
            "explanation": "Thorns are hard, woody, pointed structures modified from axillary buds of stems for protection against grazing herbivores in Citrus and Bougainvillea.",
            "explanationHi": "सिट्रस और बोगेनविलिया के कांटे कक्षीय कलिकाओं (axillary buds) के रूपांतरण होते हैं जो पादप को शाकाहारी जंतुओं से बचाते हैं।"
        },
        # Q54: Underground stems for food storage
        {
            "num": 54,
            "question": "Which of the following is an underground stem modified for food storage and perennation?",
            "questionHi": "निम्नलिखित में से कौन सा भोजन संचयन और चिरकालिकता के लिए रूपांतरित भूमिगत तना है?",
            "options": ["Sweet potato", "Ginger (Rhizome)", "Radish", "Dahlia"],
            "optionsHi": ["शकरकंद", "अदरक (प्रकंद / Rhizome)", "मूली", "डहेलिया"],
            "correct": 1,
            "explanation": "Ginger is an underground stem modification (rhizome) with nodes, internodes, and scale leaves. Sweet potato, radish, and Dahlia are modified root structures.",
            "explanationHi": "अदरक भूमिगत तना (प्रकंद) है जिसमें पर्वसंधियाँ व शल्क पत्र पाए जाते हैं। शकरकंद, मूली और डहेलिया रूपांतरित जड़ें हैं।"
        },
        # Q55: [NEET 2020] Phyllotaxy Alstonia Calotropis
        {
            "num": 55,
            "question": "[NEET 2020] A type of phyllotaxy where more than two leaves arise at a single node and form a circle/whorl, as seen in Alstonia, is called:",
            "questionHi": "[NEET 2020] पर्णविन्यास का वह प्रकार जिसमें एक ही पर्वसंधि पर दो से अधिक पत्तियाँ निकलकर एक चक्र बनाती हैं, जैसा कि एल्सटोनिया में देखा जाता है, कहलाता है:",
            "options": ["Alternate phyllotaxy", "Opposite decussate", "Whorled phyllotaxy", "Opposite superposed"],
            "optionsHi": ["एकांतर पर्णविन्यास", "सम्मुख क्रॉसित", "चक्रिक पर्णविन्यास (Whorled)", "सम्मुख आच्छादित"],
            "correct": 2,
            "explanation": "When more than two leaves arise at a node and form a whorl, it is called whorled phyllotaxy (e.g. Alstonia, Nerium). Alternate is found in China rose, mustard; opposite in Calotropis, guava.",
            "explanationHi": "जब एक पर्वसंधि पर दो से अधिक पत्तियाँ चक्र के रूप में निकलती हैं, तो इसे चक्रिक पर्णविन्यास कहते हैं (उदा. एल्सटोनिया)।"
        },
        # Q56: [NEET 2017] Australian Acacia phyllode
        {
            "num": 56,
            "question": "[NEET 2017] In Australian acacia, the leaf lamina is short-lived or absent, and the petiole flattens and turns green to synthesize food. This modified photosynthetic structure is known as a:",
            "questionHi": "[NEET 2017] ऑस्ट्रेलियाई बबूल (Acacia) में पर्णफलक अल्पकालिक होता है तथा पर्णवृंत चपटा और हरा होकर प्रकाश संश्लेषण करने लगता है। यह रूपांतरित संरचना कहलाती है:",
            "options": ["Cladode", "Phyllode", "Phylloclade", "Bulbil"],
            "optionsHi": ["प्रतान (Cladode)", "पर्णाभ वृंत (Phyllode)", "पर्णाभ स्तंभ (Phylloclade)", "पत्रप्रकलिका (Bulbil)"],
            "correct": 1,
            "explanation": "In Australian acacia, the petiole expands into a green, photosynthetic leaf-like blade called a phyllode. Phylloclade is a modified stem (Opuntia); Cladode is one-internode stem (Asparagus).",
            "explanationHi": "ऑस्ट्रेलियाई बबूल में पर्णवृंत चपटा व हरा होकर पत्ती जैसा कार्य करता है, इसे पर्णाभ वृंत (Phyllode) कहते हैं।"
        },
        # Q57: Inflorescence Racemose vs Cymose
        {
            "num": 57,
            "question": "In a racemose inflorescence, the main axis (peduncle):",
            "questionHi": "असीमाक्षी (racemose) पुष्पक्रम में, मुख्य अक्ष (peduncle):",
            "options": [
                "Terminates in a flower and has limited growth",
                "Continues to grow indefinitely and flowers are borne laterally in acropetal succession",
                "Has basipetal succession of flowers with limited apical growth",
                "Branches into an umbel terminating growth at the apex"
            ],
            "optionsHi": [
                "पुष्प में समाप्त होकर सीमित वृद्धि दर्शाता है",
                "लगातार अनिश्चित काल तक बढ़ता है और पुष्प अग्राभिसारी क्रम (acropetal) में पार्श्व रूप से लगते हैं",
                "सीमित वृद्धि के साथ पुष्प तलाभिसारी क्रम में लगते हैं",
                "शीर्ष पर वृद्धि रोककर छत्रक में शाखित होता है"
            ],
            "correct": 1,
            "explanation": "In racemose inflorescences, the main floral axis continues to grow indefinitely, and flowers are borne laterally in acropetal succession (older flowers at base, younger near apex). In cymose, apex terminates in a flower (basipetal).",
            "explanationHi": "असीमाक्षी पुष्पक्रम में मुख्य अक्ष लगातार वृद्धि करता है तथा पुष्प अग्राभिसारी (acropetal) क्रम में लगते हैं।"
        },
        # Q58: [NEET 2021] Floral symmetry Zygomorphic
        {
            "num": 58,
            "question": "[NEET 2021] Which of the following plants possesses zygomorphic (bilaterally symmetrical) flowers?",
            "questionHi": "[NEET 2021] निम्नलिखित में से किस पादप में एकव्याससममित (zygomorphic) पुष्प पाए जाते हैं?",
            "options": ["Mustard", "Datura", "Gulmohur (Delonix)", "Chilli"],
            "optionsHi": ["सरसों", "धतूरा", "गुलमोहर (Gulmohur)", "मिर्च"],
            "correct": 2,
            "explanation": "Zygomorphic flowers can be divided into two similar halves only in one particular vertical plane. Examples include Pea, Gulmohur, Bean, and Cassia. Mustard, Datura, and Chilli are actinomorphic (radially symmetrical).",
            "explanationHi": "गुलमोहर, मटर, सेम तथा अमलतास (कैसिया) में एकव्याससममित (zygomorphic) पुष्प होते हैं। सरसों, धतूरा और मिर्च त्रिज्या सममित (actinomorphic) होते हैं।"
        },
        # Q59: [NEET 2020] Epigynous vs Hypogynous insertion
        {
            "num": 59,
            "question": "[NEET 2020] The ovary is said to be inferior and flowers are described as epigynous in:",
            "questionHi": "[NEET 2020] किस पादप में अंडाशय अधोवर्ती (inferior) होता है तथा पुष्प जायांगोपरिक (epigynous) कहलाते हैं?",
            "options": ["Mustard", "China rose", "Guava and Cucumber", "Brinjal"],
            "optionsHi": ["सरसों", "गुड़हल", "अमरूद तथा खीरा (Guava & Cucumber)", "बैंगन"],
            "correct": 2,
            "explanation": "In epigynous flowers, the thalamus margins grow upward enclosing the ovary completely and getting fused with it; the other floral parts arise above the ovary. Examples: Guava, Cucumber, and ray florets of sunflower.",
            "explanationHi": "अमरूद, खीरा और सूरजमुखी के रश्मि पुष्पक में जायांगोपरिक (epigynous) पुष्प होते हैं जिनमें अंडाशय अधोवर्ती (inferior) होता है।"
        },
        # Q60: [NEET 2019] Vexillary aestivation Fabaceae
        {
            "num": 60,
            "question": "[NEET 2019] In Pea and Bean flowers, the corolla consists of 5 petals: a large standard (vexillum), two lateral wings (alae), and two anterior fused petals forming a keel (carina). This aestivation is termed as:",
            "questionHi": "[NEET 2019] मटर और सेम के पुष्पों में दलपुंज 5 दलों से बना होता है: एक बड़ा ध्वजक (vexillum), दो पार्श्व पक्ष (wings), और दो अग्र संगलित नौतल (keel)। यह दलविन्यास कहलाता है:",
            "options": ["Valvate", "Twisted", "Imbricate", "Vexillary (Papilionaceous)"],
            "optionsHi": ["कोरस्पर्शी (Valvate)", "व्यावर्तित (Twisted)", "कोरछादी (Imbricate)", "ध्वजिक / वैक्सिलरी (Vexillary)"],
            "correct": 3,
            "explanation": "Papilionaceous corolla showing 1 large posterior vexillum overlapping 2 lateral wings, which in turn overlap 2 anterior fused keel petals, is called vexillary aestivation.",
            "explanationHi": "मटर व सेम में ध्वजिक (वैक्सिलरी) दलविन्यास पाया जाता है, जिसमें 1 ध्वजक, 2 पक्ष और 2 नौतल (keel) होते हैं।"
        },
        # Q61: [NEET 2016] Placentation free central Dianthus
        {
            "num": 61,
            "question": "[NEET 2016] When ovules are borne on the central axis and septa are completely absent in the unilocular ovary, the placentation is called Free Central. It is characteristically found in:",
            "questionHi": "[NEET 2016] जब बीजांड केंद्रीय अक्ष पर लगे हों और एककोष्ठीय अंडाशय में पट पूरी तरह अनुपस्थित हों, तो इस बीजांडन्यास को मुक्त स्तंभीय (Free Central) कहा जाता है। यह विशिष्ट रूप से किसमें पाया जाता है?",
            "options": ["Argemone and Mustard", "Dianthus and Primrose", "China rose and Tomato", "Sunflower and Marigold"],
            "optionsHi": ["आर्जीमोन तथा सरसों", "डायन्थस तथा प्रिमरोज़ (Dianthus & Primrose)", "गुड़हल तथा टमाटर", "सूरजमुखी तथा गेंदा"],
            "correct": 1,
            "explanation": "Free central placentation is characteristic of Dianthus and Primula (Primrose). Axile: China rose, tomato, lemon; Parietal: Mustard, Argemone; Basal: Sunflower, Marigold.",
            "explanationHi": "मुक्त स्तंभीय (Free central) बीजांडन्यास डायन्थस तथा प्रिमरोज़ में पाया जाता है।"
        },
        # Q62: [NEET 2017] Fruit drupe mango coconut
        {
            "num": 62,
            "question": "[NEET 2017] In coconut fruit (a drupe), the fibrous coir husk and the edible white kernel represent respectively:",
            "questionHi": "[NEET 2017] नारियल के फल (ड्रूप) में रेशेदार छिलका तथा खाने योग्य सफेद गिरी क्रमशः क्या दर्शाते हैं?",
            "options": [
                "Mesocarp and Endosperm",
                "Epicarp and Mesocarp",
                "Endocarp and Embryo",
                "Pericarp and Cotyledon"
            ],
            "optionsHi": [
                "मध्यफलभित्ति (Mesocarp) तथा भ्रूणपोष (Endosperm)",
                "बाह्यफलभित्ति तथा मध्यफलभित्ति",
                "अंतःफलभित्ति तथा भ्रूण",
                "फलभित्ति तथा बीजपत्र"
            ],
            "correct": 0,
            "explanation": "Coconut is a drupe developed from a monocarpellary superior ovary. Mesocarp is fibrous (yielding coir), endocarp is stony hard, and the edible part is the cellular and liquid endosperm.",
            "explanationHi": "नारियल में रेशेदार भाग मध्यफलभित्ति (mesocarp) है तथा खाने योग्य भाग भ्रूणपोष (endosperm) होता है।"
        },
        # Q63: [NEET 2018] Monocot seed aleurone layer
        {
            "num": 63,
            "question": "[NEET 2018] In a maize grain (monocotyledonous seed), the outer covering of endosperm separates the embryo by a specialized proteinaceous layer called the:",
            "questionHi": "[NEET 2018] मक्के के दाने (एकबीजपत्री बीज) में, भ्रूणपोष का बाह्य आवरण भ्रूण को एक विशिष्ट प्रोटीनयुक्त परत द्वारा अलग करता है जिसे कहते हैं:",
            "options": ["Aleurone layer", "Scutellum", "Coleoptile", "Coleorhiza"],
            "optionsHi": ["एल्यूरोन परत (Aleurone layer)", "स्कुटेलम", "प्रांकुरचोल", "मूलांकुरचोल"],
            "correct": 0,
            "explanation": "In monocot seeds like Maize, the endosperm is bulky and bounded by a specialized protein-rich peripheral cell layer termed the aleurone layer.",
            "explanationHi": "मक्के के बीज में भ्रूणपोष को भ्रूण से पृथक करने वाली प्रोटीनयुक्त परत एल्यूरोन परत कहलाती है।"
        },
        # Q64: [NEET 2020] Family Solanaceae floral formula
        {
            "num": 64,
            "question": "[NEET 2020] Which of the following floral characteristics is typical of the family Solanaceae?",
            "questionHi": "[NEET 2020] निम्नलिखित में से कौन सा पुष्पीय लक्षण सोलेनेसी (Solanaceae) कुल की विशेषता है?",
            "options": [
                "Zygomorphic flower, diadelphous stamens, monocarpellary ovary",
                "Actinomorphic flower, epipetalous stamens, bicarpellary syncarpous ovary with oblique septum and swollen axile placenta",
                "Trimerous flower, perianth with 6 tepals, epitepalous stamens",
                "Actinomorphic flower, tetradynamous stamens, parietal placentation with replum"
            ],
            "optionsHi": [
                "एकव्याससममित पुष्प, द्विसंघी पुंकेसर, एकअंडपी अंडाशय",
                "त्रिज्या सममित पुष्प, दललग्न पुंकेसर, तिरछे पट व फूले हुए अक्षीय बीजांडन्यास युक्त द्विअंडपी युक्तांडपी अंडाशय",
                "त्रितयी पुष्प, 6 परिदल युक्त परिदलपुंज, परिदललग्न पुंकेसर",
                "त्रिज्या सममित पुष्प, चतुर्दीर्घी पुंकेसर, रेप्लम युक्त भित्तीय बीजांडन्यास"
            ],
            "correct": 1,
            "explanation": "Family Solanaceae has actinomorphic, bisexual flowers with 5 epipetalous stamens (C₅ A₅) and bicarpellary, syncarpous, superior ovary placed obliquely with a swollen placenta bearing many ovules (axile placentation).",
            "explanationHi": "सोलेनेसी में त्रिज्या सममित पुष्प, दललग्न पुंकेसर (C₅ A₅), और तिरछे पट युक्त द्विअंडपी युक्तांडपी अंडाशय पाया जाता है।"
        },
        # Q65: [NEET 2022] Family Fabaceae diadelphous stamens
        {
            "num": 65,
            "question": "[NEET 2022] In family Fabaceae, the androecium consists of 10 stamens arranged in a diadelphous condition. The correct floral formula representation for this androecium is:",
            "questionHi": "[NEET 2022] फेबेसी कुल में, पुमंग 10 पुंकेसरों से बना होता है जो द्विसंघी (diadelphous) अवस्था में व्यवस्थित होते हैं। इस पुमंग का सही पुष्पीय सूत्र निरूपण है:",
            "options": ["A(10)", "A(9)+1", "A5+5", "A1+(9)"],
            "optionsHi": ["A(10)", "A(9)+1", "A5+5", "A1+(9)"],
            "correct": 1,
            "explanation": "In Fabaceae, 10 stamens are diadelphous: 9 filaments are fused into a gutter-shaped tube and 1 posterior stamen is completely free, represented as A(9)+1.",
            "explanationHi": "फेबेसी कुल में 10 पुंकेसर द्विसंघी होते हैं: 9 संगलित होकर नली बनाते हैं और 1 स्वतंत्र रहता है, जिसे A(9)+1 लिखा जाता है।"
        },
        # Q66: [NEET 2019] Meristems apical intercalary lateral
        {
            "num": 66,
            "question": "[NEET 2019] Grasses regenerate parts removed by grazing herbivores primarily due to the active cell division of:",
            "questionHi": "[NEET 2019] शाकाहारी जंतुओं द्वारा चर लिए जाने के बाद घासों के क्षतिग्रस्त भाग मुख्यतः किसके सक्रिय कोशिका विभाजन द्वारा पुनः उत्पन्न होते हैं?",
            "options": ["Apical meristem", "Intercalary meristem", "Lateral meristem", "Secondary cambium"],
            "optionsHi": ["शीर्षस्थ विभज्योतक", "अंतर्वेशी विभज्योतक (Intercalary meristem)", "पार्श्व विभज्योतक", "द्वितीयक कैम्बियम"],
            "correct": 1,
            "explanation": "Intercalary meristem occurs between mature tissues at the base of internodes in grasses. It is a primary meristem responsible for rapid elongation and regeneration of grazed parts.",
            "explanationHi": "घासों में पर्वसंधियों के आधार पर अंतर्वेशी विभज्योतक पाया जाता है जो चरने के बाद अंगों को शीघ्र पुनर्निर्मित करता है।"
        },
        # Q67: [NEET 2017] Collenchyma localized pectin thickenings
        {
            "num": 67,
            "question": "[NEET 2017] A simple permanent mechanical living tissue found below the epidermis in dicot stems and petioles, characterized by cells with localized pectin, cellulose, and hemicellulose thickenings at the corners, is:",
            "questionHi": "[NEET 2017] द्विबीजपत्री तनों व पर्णवृंतों की बाह्यत्वचा के नीचे पाया जाने वाला जीवित सरल स्थायी यांत्रिक ऊतक, जिसकी कोशिकाओं के कोनों पर पेक्टिन, सेल्युलोज और हेमीसेल्युलोज का स्थूलन पाया जाता है, कहलाता है:",
            "options": ["Parenchyma", "Collenchyma", "Sclerenchyma fibres", "Tracheids"],
            "optionsHi": ["मृदूतक (Parenchyma)", "स्थूलकोण ऊतक (Collenchyma)", "दृढ़ोतक रेशे", "वाहिनिकाएँ"],
            "correct": 1,
            "explanation": "Collenchyma is a living simple mechanical tissue with uneven wall thickenings of pectin, cellulose, and hemicellulose at corners, providing tensile strength to growing organs without intercellular spaces.",
            "explanationHi": "स्थूलकोण ऊतक (कॉलेनकाइमा) जीवित यांत्रिक ऊतक है जिसके कोनों पर पेक्टिन का निक्षेपण होता है।"
        },
        # Q68: [NEET 2021] Sclereids stone cells
        {
            "num": 68,
            "question": "[NEET 2021] The gritty texture of the pulp of fruits such as Guava, Pear, and Sapota is caused by the presence of which sclerenchymatous cells?",
            "questionHi": "[NEET 2021] अमरूद, नाशपाती तथा चीकू के फलों के गूदे में पाया जाने वाला किरकिरापन (grittiness) किन दृढ़ोतकी कोशिकाओं की उपस्थिति के कारण होता है?",
            "options": ["Sclerenchyma fibres", "Sclereids (Stone cells)", "Collenchyma", "Xylem vessels"],
            "optionsHi": ["दृढ़ोतक रेशे", "अश्म कोशिकाएँ / स्कलेरीड्स (Sclereids)", "स्थूलकोण ऊतक", "जाइलम वाहिकाएँ"],
            "correct": 1,
            "explanation": "Sclereids are spherical, oval or cylindrical, highly thickened dead cells with very narrow lumens found in the fruit pulp of guava, pear, and sapota, imparting grittiness.",
            "explanationHi": "अमरूद, नाशपाती और चीकू के गूदे में स्कलेरीड्स (अश्म कोशिकाएँ) पाई जाती हैं जो कड़ापन और किरकिरापन प्रदान करती हैं।"
        },
        # Q69: [NEET 2020] Xylem elements living component
        {
            "num": 69,
            "question": "[NEET 2020] Which of the following constituent elements of complex tissue Xylem is the ONLY living element in mature gymnosperms and angiosperms?",
            "questionHi": "[NEET 2020] जटिल ऊतक जाइलम के निम्नलिखित घटकों में से कौन सा परिपक्व अनावृतबीजी तथा आवृतबीजी पादपों में एकमात्र जीवित घटक है?",
            "options": ["Tracheids", "Vessels", "Xylem parenchyma", "Xylem fibres"],
            "optionsHi": ["वाहिनिकाएँ (Tracheids)", "वाहिकाएँ (Vessels)", "जाइलम मृदूतक (Xylem parenchyma)", "जाइलम रेशे"],
            "correct": 2,
            "explanation": "Xylem parenchyma consists of thin-walled living parenchymatous cells that store starch, fat, and tannins. Tracheids, vessels, and xylem fibres are all dead and lignified at maturity.",
            "explanationHi": "जाइलम के चार घटकों में से केवल जाइलम मृदूतक (xylem parenchyma) ही जीवित होता है; शेष तीनों मृत व लिग्नीकृत होते हैं।"
        },
        # Q70: [NEET 2019] Phloem companion cells & sieve tubes
        {
            "num": 70,
            "question": "[NEET 2019] Sieve tube elements in angiosperm phloem lack a nucleus at maturity. Their functions and the pressure gradient in the sieve tube are regulated and controlled by:",
            "questionHi": "[NEET 2019] आवृतबीजी फ्लोएम में चालनी नलिका तत्व परिपक्वता पर केंद्रक रहित होते हैं। उनके कार्यों तथा चालनी नलिका में दाब प्रवणता का नियमन किसके द्वारा किया जाता है?",
            "options": ["Phloem parenchyma", "Companion cells", "Phloem fibres", "Albuminous cells"],
            "optionsHi": ["फ्लोएम मृदूतक", "सहचर कोशिकाएँ (Companion cells)", "फ्लोएम रेशे", "एल्ब्यूमिनस कोशिकाएँ"],
            "correct": 1,
            "explanation": "Companion cells are specialized parenchymatous cells closely associated with sieve tube elements via pit fields. The nucleus of the companion cell controls the metabolic activities of the enucleated mature sieve tube.",
            "explanationHi": "सहचर कोशिकाएँ (companion cells) केंद्रकयुक्त होती हैं और चालनी नलिकाओं के चयापचय तथा दाब प्रवणता को नियंत्रित करती हैं।"
        }
    ],
    "bot_sec_b": [
        # Q71: Tendril modifications stem vs leaf
        {
            "num": 71,
            "question": "[NEET PYQ] Stem tendrils that assist climbing are found in gourds (cucumber, pumpkin, watermelon) and grapevines. These stem tendrils develop from:",
            "questionHi": "[NEET PYQ] ककड़ी, कद्दू, तरबूज और अंगूर की बेल में सहारा देने वाले तने के प्रतान (stem tendrils) किससे विकसित होते हैं?",
            "options": ["Axillary buds", "Terminal buds", "Leaf apex", "Foliar stipules"],
            "optionsHi": ["कक्षस्थ कलिकाएँ (Axillary buds)", "शीर्षस्थ कलिकाएँ", "पर्ण शीर्ष", "पर्ण अनुपर्ण"],
            "correct": 0,
            "explanation": "In gourds and grapevine, slender, spirally coiled tendrils are stem modifications arising directly from axillary buds. In peas, tendrils are modified leaves.",
            "explanationHi": "घिया, तोरई, खीरा व अंगूर में प्रतान कक्षस्थ कलिकाओं (axillary buds) के रूपांतरण होते हैं।"
        },
        # Q72: Family Liliaceae trimerous perianth
        {
            "num": 72,
            "question": "[NEET 2021] A plant with trimerous flowers, a perianth composed of 6 tepals arranged in two whorls (3+3), 6 epitepalous stamens, and a tricarpellary syncarpous superior ovary belongs to:",
            "questionHi": "[NEET 2021] त्रितयी पुष्प, दो चक्रों (3+3) में व्यवस्थित 6 परिदलों का परिदलपुंज, 6 परिदललग्न पुंकेसर, तथा त्रिअंडपी युक्तांडपी ऊर्ध्ववर्ती अंडाशय वाला पादप किस कुल से संबंधित है?",
            "options": ["Solanaceae", "Fabaceae", "Liliaceae", "Brassicaceae"],
            "optionsHi": ["सोलेनेसी", "फेबेसी", "लिलिएसी (Liliaceae)", "ब्रेसीकेसी"],
            "correct": 2,
            "explanation": "Family Liliaceae (e.g. Aloe, Allium, Colchicum, Gloriosa) is characterized by trimerous monocot flowers with perianth P(3+3), epitepalous stamens A3+3, and tricarpellary syncarpous ovary G(3).",
            "explanationHi": "लिलिएसी कुल में त्रितयी पुष्प, परिदलपुंज P(3+3), पुमंग A3+3 और त्रिअंडपी अंडाशय G(3) पाया जाता है।"
        },
        # Q73: True fruit vs False fruit thalamus
        {
            "num": 73,
            "question": "In Apple and Strawberry, the fruit develops not only from the ovary but also significantly incorporates the fleshy thalamus. Such fruits are classified as:",
            "questionHi": "सेब तथा स्ट्रॉबेरी में फल केवल अंडाशय से विकसित न होकर मांसल पुष्पासन (thalamus) से भी बनता है। ऐसे फलों को वर्गीकृत किया जाता है:",
            "options": ["True fruits", "False fruits (Pseudocarps)", "Parthenocarpic fruits", "Composite fruits"],
            "optionsHi": ["सत्य फल", "आभासी / कूट फल (False fruits)", "अनिषेकफलन फल", "संग्रथित फल"],
            "correct": 1,
            "explanation": "When parts of the flower other than the ovary (like the thalamus in Apple, Pear, Strawberry) form the fleshy edible portion of the fruit, it is called a false fruit (pseudocarp).",
            "explanationHi": "जब अंडाशय के अलावा पुष्पासन जैसे अन्य भाग फल के निर्माण में भाग लेते हैं, तो उसे आभासी या कूट फल (false fruit) कहते हैं।"
        },
        # Q74: Primary vs Secondary lateral meristems
        {
            "num": 74,
            "question": "Which of the following is considered a primary lateral meristem because it originates directly from the promeristem and is present from the beginning in dicot vascular bundles?",
            "questionHi": "निम्नलिखित में से किसे प्राथमिक पार्श्व विभज्योतक माना जाता है क्योंकि यह सीधे भ्रूणीय विभज्योतक से उत्पन्न होता है और द्विबीजपत्री संवहन पूलों में आरंभ से उपस्थित होता है?",
            "options": ["Intrafascicular cambium", "Interfascicular cambium", "Cork cambium (Phellogen)", "Phelloderm"],
            "optionsHi": ["अंतःपूलीय कैम्बियम (Intrafascicular cambium)", "अंतरपूलीय कैम्बियम", "कॉर्क कैम्बियम (कागजन)", "द्वितीयक वल्कुट"],
            "correct": 0,
            "explanation": "Intrafascicular cambium present between primary xylem and primary phloem in open vascular bundles is primary in origin. Interfascicular cambium and cork cambium are secondary meristems formed by dedifferentiation.",
            "explanationHi": "संवहन पूल के भीतर जाइलम व फ्लोएम के बीच स्थित अंतःपूलीय कैम्बियम प्राथमिक पार्श्व विभज्योतक होता है।"
        },
        # Q75: [NEET 2018] Gymnosperms xylem & phloem absence
        {
            "num": 75,
            "question": "[NEET 2018] In Gymnosperms, which of the following elements are typically ABSENT in their vascular tissues?",
            "questionHi": "[NEET 2018] अनावृतबीजी (जिम्नोस्पर्म) पादपों के संवहन ऊतकों में आमतौर पर कौन से तत्व अनुपस्थित होते हैं?",
            "options": [
                "Tracheids and Albuminous cells",
                "True vessels in xylem and Companion cells in phloem",
                "Sieve cells and Xylem parenchyma",
                "Xylem fibres and Phloem parenchyma"
            ],
            "optionsHi": [
                "वाहिनिकाएँ तथा एल्ब्यूमिनस कोशिकाएँ",
                "जाइलम में वास्तविक वाहिकाएँ (Vessels) तथा फ्लोएम में सहचर कोशिकाएँ (Companion cells)",
                "चालनी कोशिकाएँ तथा जाइलम मृदूतक",
                "जाइलम रेशे तथा फ्लोएम मृदूतक"
            ],
            "correct": 1,
            "explanation": "Gymnosperms generally lack true xylem vessels (water conducts through tracheids) and lack companion cells and sieve tubes in phloem (possessing albuminous cells and sieve cells instead).",
            "explanationHi": "जिम्नोस्पर्म में जाइलम वाहिकाएँ (vessels) तथा फ्लोएम में सहचर कोशिकाएँ (companion cells) अनुपस्थित होती हैं।"
        }
    ],

    "zoo_sec_a": [
        # Q76: [NEET 2020] Plasma proteins functions
        {
            "num": 76,
            "question": "[NEET 2020] Match the plasma proteins listed in Column I with their major physiological functions in Column II:\n(a) Fibrinogen  (b) Globulins  (c) Albumins\n(i) Osmotic balance  (ii) Blood clotting  (iii) Defense mechanisms",
            "questionHi": "[NEET 2020] कॉलम I में दिए गए प्लाज्मा प्रोटीनों को कॉलम II में उनके प्रमुख कार्यों से सुमेलित कीजिए:\n(a) फाइब्रिनोजेन  (b) ग्लोब्युलिन  (c) एल्बुमिन\n(i) परासरणी संतुलन  (ii) रक्त स्कंदन  (iii) प्रतिरक्षा तंत्र",
            "options": [
                "(a)-(ii), (b)-(iii), (c)-(i)",
                "(a)-(i), (b)-(ii), (c)-(iii)",
                "(a)-(iii), (b)-(i), (c)-(ii)",
                "(a)-(ii), (b)-(i), (c)-(iii)"
            ],
            "optionsHi": [
                "(a)-(ii), (b)-(iii), (c)-(i)",
                "(a)-(i), (b)-(ii), (c)-(iii)",
                "(a)-(iii), (b)-(i), (c)-(ii)",
                "(a)-(ii), (b)-(i), (c)-(iii)"
            ],
            "correct": 0,
            "explanation": "Fibrinogen is needed for clotting or coagulation of blood. Globulins are involved in defense mechanisms (antibodies). Albumins help maintain osmotic balance.",
            "explanationHi": "फाइब्रिनोजेन रक्त का थक्का बनाता है; ग्लोब्युलिन प्रतिरक्षा में भाग लेता है; एल्बुमिन परासरणी सांद्रता बनाए रखता है।"
        },
        # Q77: Leukocytes relative abundance
        {
            "num": 77,
            "question": "Which of the following represents the correct descending order of relative abundance of white blood cells (leukocytes) in normal human blood?",
            "questionHi": "सामान्य मानव रक्त में श्वेत रक्त कोशिकाओं (श्वेताणुओं) की सापेक्ष बहुलता का सही घटता क्रम निम्नलिखित में से कौन सा है?",
            "options": [
                "Neutrophils > Lymphocytes > Monocytes > Eosinophils > Basophils",
                "Lymphocytes > Neutrophils > Eosinophils > Monocytes > Basophils",
                "Neutrophils > Monocytes > Lymphocytes > Basophils > Eosinophils",
                "Basophils > Eosinophils > Monocytes > Lymphocytes > Neutrophils"
            ],
            "optionsHi": [
                "न्यूट्रोफिल > लिम्फोसाइट > मोनोसाइट > इओसिनोफिल > बेसोफिल",
                "लिम्फोसाइट > न्यूट्रोफिल > इओसिनोफिल > मोनोसाइट > बेसोफिल",
                "न्यूट्रोफिल > मोनोसाइट > लिम्फोसाइट > बेसोफिल > इओसिनोफिल",
                "बेसोफिल > इओसिनोफिल > मोनोसाइट > लिम्फोसाइट > न्यूट्रोफिल"
            ],
            "correct": 0,
            "explanation": "Normal leukocyte percentages: Neutrophils (60-65%), Lymphocytes (20-25%), Monocytes (6-8%), Eosinophils (2-3%), Basophils (0.5-1%). Mnemonic: 'Never Let Monkeys Eat Bananas'.",
            "explanationHi": "श्वेताणुओं का प्रतिशत: न्यूट्रोफिल (60-65%) > लिम्फोसाइट (20-25%) > मोनोसाइट (6-8%) > इओसिनोफिल (2-3%) > बेसोफिल (0.5-1%)।"
        },
        # Q78: [NEET 2018] Erythroblastosis foetalis
        {
            "num": 78,
            "question": "[NEET 2018] Erythroblastosis foetalis (hemolytic disease of the newborn) can occur when:",
            "questionHi": "[NEET 2018] गर्भ रक्ताणुकोरकता (एरिथ्रोब्लास्टोसिस फीटेलिस) की स्थिति कब उत्पन्न हो सकती है?",
            "options": [
                "An Rh-negative mother carries an Rh-positive foetus in her second pregnancy",
                "An Rh-positive mother carries an Rh-negative foetus",
                "Both mother and father are Rh-negative",
                "Mother is blood group AB and foetus is blood group O"
            ],
            "optionsHi": [
                "Rh-ऋणात्मक माता दूसरे गर्भ में Rh-धनात्मक भ्रूण धारण करती है",
                "Rh-धनात्मक माता Rh-ऋणात्मक भ्रूण धारण करती है",
                "माता और पिता दोनों Rh-ऋणात्मक हैं",
                "माता रक्त समूह AB तथा भ्रूण रक्त समूह O का है"
            ],
            "correct": 0,
            "explanation": "If an Rh- mother conceives an Rh+ baby, during 1st delivery Rh antigens sensitize the mother. In subsequent Rh+ pregnancies, maternal anti-Rh IgG antibodies cross the placenta and destroy foetal RBCs.",
            "explanationHi": "जब Rh- ऋणात्मक माता दूसरे गर्भ में Rh- धनात्मक भ्रूण धारण करती है, तो माता में बने anti-Rh एंटीबॉडी अपरा पार कर भ्रूण की RBC को नष्ट कर देते हैं।"
        },
        # Q79: [NEET 2021] Blood clotting thrombokinase
        {
            "num": 79,
            "question": "[NEET 2021] In the enzyme cascade mechanism of blood clotting, the conversion of inactive prothrombin into active thrombin is catalyzed by:",
            "questionHi": "[NEET 2021] रक्त स्कंदन के एंजाइम सोपान प्रक्रम में निष्क्रिय प्रोथ्रॉम्बिन का सक्रिय थ्रॉम्बिन में रूपांतरण किसके द्वारा उत्प्रेरित होता है?",
            "options": [
                "Thrombokinase in the presence of Ca²⁺ ions",
                "Thrombin in the presence of Vitamin K",
                "Fibrin in the presence of Heparin",
                "Plasmin in the presence of Fe²⁺ ions"
            ],
            "optionsHi": [
                "Ca²⁺ आयनों की उपस्थिति में थ्रॉम्बोकाइनेज",
                "विटामिन K की उपस्थिति में थ्रॉम्बिन",
                "हेपरिन की उपस्थिति में फाइब्रिन",
                "Fe²⁺ आयनों की उपस्थिति में प्लास्मिन"
            ],
            "correct": 0,
            "explanation": "An injured tissue and platelets release thromboplastin, leading to formation of thrombokinase (prothrombinase). Thrombokinase converts inactive prothrombin to thrombin in the presence of calcium ions (Ca²⁺).",
            "explanationHi": "थ्रॉम्बोकाइनेज एंजाइम सम्मिश्र Ca²⁺ आयनों की उपस्थिति में निष्क्रिय प्रोथ्रॉम्बिन को थ्रॉम्बिन में बदलता है।"
        },
        # Q80: [NEET 2020] SAN pacemaker
        {
            "num": 80,
            "question": "[NEET 2020] The Sino-atrial Node (SAN) is called the pacemaker of the human heart because:",
            "questionHi": "[NEET 2020] शिरा-आलिंद पर्व (SAN) को मानव हृदय का पेसमेकर कहा जाता है क्योंकि:",
            "options": [
                "It is located in the upper right corner of the right atrium",
                "It generates the maximum number of action potentials (70-75 per minute) and initiates rhythmic contraction",
                "It is supplied directly by the vagus nerve",
                "It regulates blood flow through semilunar valves"
            ],
            "optionsHi": [
                "यह दाएँ आलिंद के ऊपरी दाएँ कोने में स्थित होता है",
                "यह अधिकतम संख्या में क्रियात्मक विभव (70-75 प्रति मिनट) उत्पन्न करता है तथा लयबद्ध संकुचन प्रारंभ करता है",
                "यह सीधे वेगस तंत्रिका द्वारा नियंत्रित होता है",
                "यह अर्धचंद्राकार कपाटों से रक्त प्रवाह को नियंत्रित करता है"
            ],
            "correct": 1,
            "explanation": "SAN has the highest intrinsic rate of automaticity (70-75 action potentials/min) and dictates the pace of cardiac contraction for the entire heart, hence named the pacemaker.",
            "explanationHi": "SAN अधिकतम संख्या में क्रिया विभव (70-75/min) उत्पन्न कर हृदय स्पंदन की लय निर्धारित करता है, इसलिए इसे पेसमेकर कहते हैं।"
        },
        # Q81: Cardiac cycle duration & events
        {
            "num": 81,
            "question": "In a healthy human heart beating at 75 beats per minute, the total duration of one cardiac cycle is 0.8 seconds. The duration of ventricular systole during this cycle is:",
            "questionHi": "75 स्पंदन प्रति मिनट की दर से धड़कने वाले एक स्वस्थ मानव हृदय में, एक हृद चक्र की कुल अवधि 0.8 सेकंड होती है। इस चक्र में निलय प्रकुंचन (ventricular systole) की अवधि है:",
            "options": ["0.1 second", "0.3 second", "0.4 second", "0.7 second"],
            "optionsHi": ["0.1 सेकंड", "0.3 सेकंड", "0.4 सेकंड", "0.7 सेकंड"],
            "correct": 1,
            "explanation": "During one 0.8 s cardiac cycle: Atrial systole = 0.1 s; Ventricular systole = 0.3 s; Complete joint diastole = 0.4 s (Ventricular diastole = 0.5 s, Atrial diastole = 0.7 s).",
            "explanationHi": "हृद चक्र (0.8 s) में: आलिंद प्रकुंचन = 0.1 s; निलय प्रकुंचन = 0.3 s; संयुक्त अनुशिथिलन = 0.4 s होता है।"
        },
        # Q82: [NEET 2019] Heart sounds Lubb Dubb
        {
            "num": 82,
            "question": "[NEET 2019] The first heart sound ('lubb') and second heart sound ('dubb') are produced respectively due to the closure of:",
            "questionHi": "[NEET 2019] प्रथम हृदय ध्वनि ('लब') और द्वितीय हृदय ध्वनि ('डब') क्रमशः किन कपाटों के बंद होने से उत्पन्न होती हैं?",
            "options": [
                "Semilunar valves and Atrioventricular (bicuspid/tricuspid) valves",
                "Atrioventricular (bicuspid/tricuspid) valves and Semilunar valves",
                "Bicuspid valve and Tricuspid valve",
                "Aortic valve and Pulmonary valve"
            ],
            "optionsHi": [
                "अर्धचंद्राकार कपाट तथा आलिंद-निलय (द्विवलनी/त्रिवलनी) कपाट",
                "आलिंद-निलय (द्विवलनी/त्रिवलनी) कपाट तथा अर्धचंद्राकार कपाट",
                "द्विवलनी कपाट तथा त्रिवलनी कपाट",
                "महाधमनी कपाट तथा फुफ्फुसीय कपाट"
            ],
            "correct": 1,
            "explanation": "The first heart sound 'lubb' is associated with the closure of the tricuspid and bicuspid (AV) valves at the onset of ventricular systole. The second heart sound 'dubb' is caused by the closure of semilunar valves at the onset of ventricular diastole.",
            "explanationHi": "प्रथम ध्वनि 'लब' आलिंद-निलय कपाटों (द्विवलनी व त्रिवलनी) के बंद होने से तथा द्वितीय ध्वनि 'डब' अर्धचंद्राकार कपाटों के बंद होने से उत्पन्न होती है।"
        },
        # Q83: [NEET 2019] Cardiac output calculation
        {
            "num": 83,
            "question": "[NEET 2019] If a person has a stroke volume of 70 mL and a heart rate of 72 beats per minute, the cardiac output is approximately:",
            "questionHi": "[NEET 2019] यदि किसी व्यक्ति का स्ट्रोक आयतन 70 mL और हृदय दर 72 स्पंदन प्रति मिनट है, तो हृद निर्गम (कार्डियक आउटपुट) लगभग होगा:",
            "options": ["3.5 L/min", "5.04 L/min", "7.0 L/min", "10.0 L/min"],
            "optionsHi": ["3.5 L/min", "5.04 L/min", "7.0 L/min", "10.0 L/min"],
            "correct": 1,
            "explanation": "Cardiac Output = Stroke Volume × Heart Rate = 70 mL × 72 beats/min = 5040 mL/min ≈ 5.04 L/min.",
            "explanationHi": "कार्डियक आउटपुट = स्ट्रोक आयतन × हृदय दर = 70 mL × 72 = 5040 mL/min ≈ 5.04 L/min।"
        },
        # Q84: [NEET 2021] ECG waves interpretation
        {
            "num": 84,
            "question": "[NEET 2021] In a standard clinical Electrocardiogram (ECG), the P wave, QRS complex, and T wave represent respectively:",
            "questionHi": "[NEET 2021] एक मानक ईसीजी (ECG) में P तरंग, QRS सम्मिश्र तथा T तरंग क्रमशः किसे प्रदर्शित करते हैं?",
            "options": [
                "Ventricular depolarisation, Atrial repolarisation, Ventricular repolarisation",
                "Atrial depolarisation, Ventricular depolarisation, Ventricular repolarisation",
                "Atrial repolarisation, Ventricular depolarisation, Atrial depolarisation",
                "Ventricular repolarisation, Atrial depolarisation, Ventricular depolarisation"
            ],
            "optionsHi": [
                "निलय विध्रुवण, आलिंद पुनर्ध्रुवण, निलय पुनर्ध्रुवण",
                "आलिंद विध्रुवण, निलय विध्रुवण, निलय पुनर्ध्रुवण",
                "आलिंद पुनर्ध्रुवण, निलय विध्रुवण, आलिंद विध्रुवण",
                "निलय पुनर्ध्रुवण, आलिंद विध्रुवण, निलय विध्रुवण"
            ],
            "correct": 1,
            "explanation": "P wave represents depolarisation of atria; QRS complex represents depolarisation of ventricles; T wave represents repolarisation of ventricles.",
            "explanationHi": "P तरंग = आलिंदों का विध्रुवण; QRS सम्मिश्र = निलयों का विध्रुवण; T तरंग = निलयों का पुनर्ध्रुवण।"
        },
        # Q85: [NEET 2017] Double circulation pulmonary & systemic
        {
            "num": 85,
            "question": "[NEET 2017] Blood leaving the right ventricle enters the pulmonary circulation via the pulmonary artery, whereas blood leaving the left ventricle enters the systemic circulation via the:",
            "questionHi": "[NEET 2017] दाएँ निलय से निकलने वाला रक्त फुफ्फुसीय धमनी द्वारा फुफ्फुसीय परिसंचरण में जाता है, जबकि बाएँ निलय से निकलने वाला रक्त किसके द्वारा दैहिक परिसंचरण में प्रवेश करता है?",
            "options": ["Superior vena cava", "Pulmonary vein", "Aorta", "Coronary sinus"],
            "optionsHi": ["अग्र महाशिरा", "फुफ्फुसीय शिरा", "महाधमनी (Aorta)", "कोरोनरी साइनस"],
            "correct": 2,
            "explanation": "Left ventricle pumps oxygenated blood into the systemic aorta to distribute blood to the entire body tissues. Pulmonary artery carries deoxygenated blood from right ventricle to lungs.",
            "explanationHi": "बायाँ निलय ऑक्सीजनित रक्त को महाधमनी (Aorta) में पंप करता है जो पूरे शरीर में रक्त पहुँचाती है।"
        },
        # Q86: [NEET 2017] Hepatic portal system
        {
            "num": 86,
            "question": "[NEET 2017] The hepatic portal vein drains blood from which organs to the liver before it reaches the systemic circulation?",
            "questionHi": "[NEET 2017] यकृत निवाहिका शिरा (Hepatic portal vein) दैहिक परिसंचरण में पहुँचने से पहले किन अंगों से रक्त को यकृत में ले जाती है?",
            "options": ["Kidneys", "Gastrointestinal tract (intestine)", "Lungs", "Brain"],
            "optionsHi": ["वृक्क", "जठरांत्र क्षेत्र (आंत / Intestine)", "फेफड़े", "मस्तिष्क"],
            "correct": 1,
            "explanation": "The hepatic portal system carries deoxygenated nutrient-rich blood from the gastrointestinal tract (stomach and intestines) directly to the liver before it enters systemic venous circulation.",
            "explanationHi": "यकृत निवाहिका शिरा आंत तथा पाचन मार्ग से पोषक तत्वों से युक्त रक्त को यकृत में पहुँचाती है।"
        },
        # Q87: [NEET 2021] Regulation of cardiac activity sympathetic parasympathetic
        {
            "num": 87,
            "question": "[NEET 2021] Neural signals through the sympathetic nerves and adrenaline hormone increase cardiac output by:",
            "questionHi": "[NEET 2021] अनुकंपी तंत्रिकाओं (sympathetic nerves) तथा एड्रीनेलिन हार्मोन द्वारा उत्पन्न तंत्रिकीय संकेत किसके द्वारा हृद निर्गम (cardiac output) बढ़ाते हैं?",
            "options": [
                "Decreasing heart rate and speed of conduction",
                "Increasing heart rate, strength of ventricular contraction, and speed of conduction",
                "Decreasing stroke volume without altering heart rate",
                "Closing atrioventricular valves prematurely"
            ],
            "optionsHi": [
                "हृदय दर तथा चालन की गति को घटाकर",
                "हृदय दर, निलय संकुचन की शक्ति तथा चालन गति को बढ़ाकर",
                "हृदय दर बदले बिना स्ट्रोक आयतन घटाकर",
                "आलिंद-निलय कपाटों को समय से पहले बंद करके"
            ],
            "correct": 1,
            "explanation": "Sympathetic neural signals and adrenal medullary hormones (adrenaline/noradrenaline) increase the heart rate, strength of ventricular contraction, and cardiac output. Parasympathetic (vagus) signals decrease them.",
            "explanationHi": "अनुकंपी तंत्रिका तंत्र तथा एड्रीनेलिन हृदय दर, निलय संकुचन की क्षमता और कार्डियक आउटपुट को बढ़ाते हैं।"
        },
        # Q88: [NEET 2018] Atherosclerosis CAD Angina
        {
            "num": 88,
            "question": "[NEET 2018] A condition characterized by acute chest pain when not enough oxygen is reaching the heart muscle due to narrowed coronary arteries is known as:",
            "questionHi": "[NEET 2018] कोरोनरी धमनियों के संकरे होने के कारण हृदय की मांसपेशियों तक पर्याप्त ऑक्सीजन न पहुँचने पर सीने में होने वाला तीव्र दर्द कहलाता है:",
            "options": ["Atherosclerosis", "Angina pectoris", "Heart failure", "Cardiac arrest"],
            "optionsHi": ["धमनीकाठिन्य (Atherosclerosis)", "एंजाइना पेक्टोरिस (हृद्शूल)", "हृदय पात (Heart failure)", "हृदयाघात (Cardiac arrest)"],
            "correct": 1,
            "explanation": "Angina pectoris is acute thoracic/chest pain resulting from cardiac ischemia (insufficient oxygen delivery to myocardial muscle). Atherosclerosis is the underlying plaque narrowing the vessel.",
            "explanationHi": "हृदय की पेशियों को पर्याप्त ऑक्सीजन न मिलने पर सीने में होने वाला तीव्र दर्द एंजाइना पेक्टोरिस (हृद्शूल) कहलाता है।"
        },
        # Q89: [NEET 2021] Modes of excretion nitrogenous wastes
        {
            "num": 89,
            "question": "[NEET 2021] Match the animals in Column I with their primary mode of nitrogenous excretion in Column II:\n(a) Bony fishes  (b) Reptiles and Birds  (c) Mammals and terrestrial amphibians\n(i) Ureotelic  (ii) Uricotelic  (iii) Ammonotelic",
            "questionHi": "[NEET 2021] कॉलम I के जंतुओं को कॉलम II में उनके उत्सर्जी उत्पाद से सुमेलित कीजिए:\n(a) अस्थिल मछलियाँ  (b) सरीसृप तथा पक्षी  (c) स्तनधारी तथा स्थलीय उभयचर\n(i) यूरियोटेलिक  (ii) यूरिकोटेलिक  (iii) अमोनोटेलिक",
            "options": [
                "(a)-(iii), (b)-(ii), (c)-(i)",
                "(a)-(i), (b)-(ii), (c)-(iii)",
                "(a)-(ii), (b)-(iii), (c)-(i)",
                "(a)-(iii), (b)-(i), (c)-(ii)"
            ],
            "optionsHi": [
                "(a)-(iii), (b)-(ii), (c)-(i)",
                "(a)-(i), (b)-(ii), (c)-(iii)",
                "(a)-(ii), (b)-(iii), (c)-(i)",
                "(a)-(iii), (b)-(i), (c)-(ii)"
            ],
            "correct": 0,
            "explanation": "Bony fishes are ammonotelic (excrete ammonia across gills). Reptiles, birds, land snails, and insects are uricotelic (excrete uric acid paste to conserve water). Mammals and amphibians are ureotelic (urea).",
            "explanationHi": "अस्थिल मछलियाँ अमोनोटेलिक हैं; पक्षी व सरीसृप यूरिकोटेलिक (यूरिक अम्ल) हैं; स्तनधारी व उभयचर यूरियोटेलिक (यूरिया) हैं।"
        },
        # Q90: [NEET 2020] Kidney anatomy Columns of Bertini
        {
            "num": 90,
            "question": "[NEET 2020] Extensions of the renal cortex that project between the medullary pyramids in human kidneys are called:",
            "questionHi": "[NEET 2020] मानव वृक्क में मध्यांश पिरामिडों के मध्य धंसे हुए वल्कुट के प्रसार क्या कहलाते हैं?",
            "options": ["Renal columns of Bertini", "Renal pelvis", "Major calyces", "Ducts of Bellini"],
            "optionsHi": ["बर्तनी के वृक्क स्तंभ (Columns of Bertini)", "वृक्क श्रोणि (Pelvis)", "दीर्घ चषक (Major calyces)", "बेलीनी की नलिकाएं"],
            "correct": 0,
            "explanation": "The renal cortex extends between the medullary pyramids as columns called Renal Columns of Bertini.",
            "explanationHi": "वल्कुट के वे भाग जो मध्यांश पिरामिडों के बीच फैले होते हैं, बर्तनी के स्तंभ (Columns of Bertini) कहलाते हैं।"
        },
        # Q91: [NEET 2019] Nephron Malpighian body
        {
            "num": 91,
            "question": "[NEET 2019] The Malpighian corpuscle (renal corpuscle) of a mammalian nephron is composed of:",
            "questionHi": "[NEET 2019] स्तनधारी नेफ्रॉन की मैल्पीघी कणिका (वृक्क कणिका) किससे मिलकर बनती है?",
            "options": [
                "Glomerulus and Bowman's capsule",
                "Bowman's capsule and Proximal Convoluted Tubule",
                "Glomerulus and Efferent arteriole",
                "Loop of Henle and Collecting duct"
            ],
            "optionsHi": [
                "केशिकागुच्छ (Glomerulus) तथा बोमन सम्पुट (Bowman's capsule)",
                "बोमन सम्पुट तथा समीपस्थ कुंडलित नलिका (PCT)",
                "केशिकागुच्छ तथा अपवाही धमनिका",
                "हेनले का लूप तथा संग्रह नलिका"
            ],
            "correct": 0,
            "explanation": "Each nephron consists of a Malpighian body and a renal tubule. The Malpighian body is formed by the tuft of glomerular capillaries and the surrounding double-walled Bowman's capsule.",
            "explanationHi": "मैल्पीघी कणिका केशिकागुच्छ (Glomerulus) और बोमन सम्पुट (Bowman's capsule) से मिलकर बनती है।"
        },
        # Q92: [NEET 2019] Podocytes filtration slits
        {
            "num": 92,
            "question": "[NEET 2019] Specialized epithelial cells lining the visceral layer of Bowman's capsule that leave tiny pores called filtration slits (slit pores) are:",
            "questionHi": "[NEET 2019] बोमन सम्पुट के आंतरांगी स्तर पर स्थित वे विशिष्ट उपकला कोशिकाएँ जो निस्यंदन खांचे (स्लिट पोर्स) छोड़ती हैं, कहलाती हैं:",
            "options": ["Podocytes", "Mesangial cells", "Juxtaglomerular cells", "Macula densa cells"],
            "optionsHi": ["पोडोसाइट्स (पदाणु)", "मेसेंजियल कोशिकाएँ", "जक्सटाग्लोमेरुलर कोशिकाएँ", "मैकुला डेंसा कोशिकाएँ"],
            "correct": 0,
            "explanation": "Podocytes are specialized visceral epithelial cells of Bowman's capsule. Their interlocking foot processes (pedicels) leave filtration slits through which blood is filtered into the capsular space.",
            "explanationHi": "बोमन सम्पुट के आंतरांगी स्तर पर पोडोसाइट्स (पदाणु) पाए जाते हैं जिनके पाद प्रवर्ध निस्यंदन खांचे बनाते हैं।"
        },
        # Q93: [NEET 2020] Epithelium of PCT microvilli
        {
            "num": 93,
            "question": "[NEET 2020] The Proximal Convoluted Tubule (PCT) of the nephron is lined by which type of specialized epithelium to maximize tubular reabsorption?",
            "questionHi": "[NEET 2020] नलिकीय पुनरावशोषण को अधिकतम करने के लिए नेफ्रॉन की समीपस्थ कुंडलित नलिका (PCT) किस प्रकार की विशिष्ट उपकला द्वारा आस्तरित होती है?",
            "options": [
                "Simple squamous epithelium",
                "Simple cuboidal brush border epithelium with microvilli",
                "Ciliated columnar epithelium",
                "Stratified transitional epithelium"
            ],
            "optionsHi": [
                "सरल शल्की उपकला",
                "सूक्ष्मांकुर युक्त सरल घनाकार ब्रुश-बॉर्डर उपकला",
                "पक्ष्माभी स्तंभाकार उपकला",
                "स्तरित संक्रमणकालीन उपकला"
            ],
            "correct": 1,
            "explanation": "PCT is lined by simple cuboidal brush border epithelium. The dense microvilli increase surface area manifold for reabsorption of nearly all essential nutrients, 70-80% of electrolytes and water.",
            "explanationHi": "PCT की आंतरिक सतह सरल घनाकार ब्रुश-बॉर्डर उपकला द्वारा आस्तरित होती है जिसके सूक्ष्मांकुर अवशोषण सतह को अत्यधिक बढ़ा देते हैं।"
        },
        # Q94: [NEET 2021] Cortical vs Juxtamedullary nephrons
        {
            "num": 94,
            "question": "[NEET 2021] Which of the following statements correctly differentiates Cortical nephrons from Juxtamedullary nephrons?",
            "questionHi": "[NEET 2021] निम्नलिखित में से कौन सा कथन कॉर्टिकल नेफ्रॉन और जक्सटामेडुलरी नेफ्रॉन के मध्य सही अंतर स्पष्ट करता है?",
            "options": [
                "Cortical nephrons constitute ~85% of nephrons, have short loops of Henle, and poorly developed/absent vasa recta; Juxtamedullary nephrons constitute ~15% and have long loops deep in medulla with well-developed vasa recta",
                "Cortical nephrons have long loops of Henle extending deep into the medulla",
                "Juxtamedullary nephrons constitute ~85% of nephrons and lack vasa recta",
                "Cortical nephrons lack Malpighian corpuscles while Juxtamedullary nephrons possess them"
            ],
            "optionsHi": [
                "कॉर्टिकल नेफ्रॉन कुल नेफ्रॉनों का ~85% होते हैं, इनमें हेनले का लूप छोटा व वासा रेक्टा अल्पविकसित होती है; जक्सटामेडुलरी ~15% होते हैं, इनमें हेनले लूप गहरा व वासा रेक्टा सुविकसित होती है",
                "कॉर्टिकल नेफ्रॉन में हेनले का लूप बहुत लंबा होकर मध्यांश में गहराई तक जाता है",
                "जक्सटामेडुलरी नेफ्रॉन कुल नेफ्रॉनों का 85% होते हैं और इनमें वासा रेक्टा नहीं होती",
                "कॉर्टिकल नेफ्रॉन में मैल्पीघी कणिकाएँ नहीं होतीं जबकि जक्सटामेडुलरी में होती हैं"
            ],
            "optionsHi": [
                "कॉर्टिकल नेफ्रॉन कुल नेफ्रॉनों का ~85% होते हैं, इनमें हेनले का लूप छोटा व वासा रेक्टा अल्पविकसित होती है; जक्सटामेडुलरी ~15% होते हैं, इनमें हेनले लूप गहरा व वासा रेक्टा सुविकसित होती है",
                "कॉर्टिकल नेफ्रॉन में हेनले का लूप बहुत लंबा होकर मध्यांश में गहराई तक जाता है",
                "जक्सटामेडुलरी नेफ्रॉन कुल नेफ्रॉनों का 85% होते हैं और इनमें वासा रेक्टा नहीं होती",
                "कॉर्टिकल नेफ्रॉन में मैल्पीघी कणिकाएँ नहीं होतीं जबकि जक्सटामेडुलरी में होती हैं"
            ],
            "correct": 0,
            "explanation": "Cortical nephrons (85%) have their Malpighian corpuscles in outer cortex, short loop of Henle dipping only slightly into medulla, and reduced vasa recta. Juxtamedullary nephrons (15%) have long loops deep in medulla and prominent hairpin vasa recta.",
            "explanationHi": "कॉर्टिकल नेफ्रॉन (~85%) में छोटा हेनले लूप तथा अल्पविकसित वासा रेक्टा होती है। जक्सटामेडुलरी (~15%) में लंबा हेनले लूप तथा सुविकसित वासा रेक्टा होती है।"
        },
        # Q95: Location of human kidney
        {
            "num": 95,
            "question": "In human adults, the kidneys are retroperitoneal organs positioned against the dorsal abdominal wall between the levels of which vertebrae?",
            "questionHi": "मानव वयस्कों में, वृक्क पृष्ठीय उदर भित्ति के सहारे रेट्रोपेरिटोनियल अंग के रूप में किन कशेरुकाओं के स्तर के बीच स्थित होते हैं?",
            "options": [
                "Last thoracic (T12) and third lumbar (L3) vertebrae",
                "First thoracic (T1) and twelfth thoracic (T12) vertebrae",
                "Third lumbar (L3) and fifth sacral (S5) vertebrae",
                "Cervical (C7) and first thoracic (T1) vertebrae"
            ],
            "optionsHi": [
                "अंतिम वक्षीय (T12) तथा तीसरी कटि (L3) कशेरुका",
                "प्रथम वक्षीय (T1) तथा बारहवीं वक्षीय (T12) कशेरुका",
                "तीसरी कटि (L3) तथा पाँचवीं त्रिक (S5) कशेरुका",
                "ग्रीवा (C7) तथा प्रथम वक्षीय (T1) कशेरुका"
            ],
            "correct": 0,
            "explanation": "In humans, each bean-shaped kidney is located between the levels of the last thoracic vertebra (T12) and the third lumbar vertebra (L3), close to the dorsal inner abdominal wall.",
            "explanationHi": "मानव वृक्क अंतिम वक्षीय (T12) और तीसरी कटि (L3) कशेरुका के स्तर के मध्य स्थित होते हैं।"
        }
    ],
    "zoo_sec_b": [
        # Q96: Lymph composition
        {
            "num": 96,
            "question": "[NEET PYQ] Lymph (tissue fluid) differs from blood plasma primarily in that lymph:",
            "questionHi": "[NEET PYQ] लसिका (ऊतक तरल) रक्त प्लाज्मा से मुख्यतः किस प्रकार भिन्न होता है?",
            "options": [
                "Lacks RBCs, has lower protein content, and contains specialized lymphocytes",
                "Contains more red blood cells and platelets than blood",
                "Has a much higher concentration of fibrinogen and clotting factors",
                "Contains no white blood cells at all"
            ],
            "optionsHi": [
                "इसमें RBCs अनुपस्थित होती हैं, प्रोटीन की मात्रा कम होती है तथा विशिष्ट लिम्फोसाइट्स पाए जाते हैं",
                "इसमें रक्त की तुलना में अधिक लाल रक्त कणिकाएँ तथा प्लेटलेट्स होते हैं",
                "इसमें फाइब्रिनोजेन और स्कंदन कारकों की सांद्रता बहुत अधिक होती है",
                "इसमें कोई श्वेत रक्त कोशिका नहीं होती"
            ],
            "correct": 0,
            "explanation": "Lymph is interstitial fluid collected by lymph vessels. It is a colorless fluid lacking erythrocytes (RBCs) and large plasma proteins, but contains abundant lymphocytes for immune response.",
            "explanationHi": "लसिका में RBCs तथा बड़े प्लाज्मा प्रोटीन अनुपस्थित होते हैं; इसमें मुख्य रूप से लिम्फोसाइट्स पाए जाते हैं।"
        },
        # Q97: Wall layers of blood vessels
        {
            "num": 97,
            "question": "The middle layer of the wall of an artery (Tunica media) is comparatively thicker than that of a vein. The Tunica media is composed of:",
            "questionHi": "धमनी की भित्ति की मध्य परत (ट्यूनिका मीडिया) शिरा की तुलना में अधिक मोटी होती है। ट्यूनिका मीडिया किसकी बनी होती है?",
            "options": [
                "Smooth muscle and elastic fibres",
                "Squamous endothelium",
                "Dense fibrous connective tissue with collagen",
                "Striated skeletal muscle"
            ],
            "optionsHi": [
                "चिकनी पेशी तथा प्रत्यास्थ रेशे (Smooth muscle & elastic fibres)",
                "शल्की अंतःकला (Squamous endothelium)",
                "कोलेजन युक्त सघन रेशेदार संयोजी ऊतक",
                "रेखित कंकाल पेशी"
            ],
            "correct": 0,
            "explanation": "Arteries and veins have 3 layers: Tunica intima (inner endothelium), Tunica media (middle layer of smooth muscle and elastic fibres, thicker in arteries), and Tunica externa (outer fibrous connective tissue with collagen fibres).",
            "explanationHi": "ट्यूनिका मीडिया चिकनी पेशियों और प्रत्यास्थ रेशों की बनी होती है, जो धमनियों में अधिक मोटी होती है।"
        },
        # Q98: [NEET 2019] Heart failure vs attack vs arrest
        {
            "num": 88,
            "question": "[NEET 2019] 'Heart Failure' is medically defined as the state when:",
            "questionHi": "[NEET 2019] 'हृदय पात' (Heart Failure) को चिकित्सकीय रूप से उस स्थिति के रूप में परिभाषित किया जाता है जब:",
            "options": [
                "The heart stops beating completely",
                "Heart muscle is suddenly damaged by inadequate blood supply",
                "The heart does not pump blood effectively enough to meet the metabolic needs of the body",
                "Coronary artery is completely blocked by a thrombus"
            ],
            "optionsHi": [
                "हृदय पूरी तरह धड़कना बंद कर देता है",
                "अपर्याप्त रक्त आपूर्ति से हृदय पेशी अचानक क्षतिग्रस्त हो जाती है",
                "हृदय शरीर की आवश्यकताओं को पूरा करने हेतु प्रभावी रूप से रक्त पंप नहीं कर पाता",
                "कोरोनरी धमनी थक्के द्वारा पूरी तरह अवरुद्ध हो जाती है"
            ],
            "correct": 2,
            "explanation": "Heart failure means the state of heart when it is not pumping blood effectively enough to meet the body's needs (often called congestive heart failure due to lung congestion). Cardiac arrest = heart stops beating; Heart attack = myocardial muscle necrosis.",
            "explanationHi": "हृदय पात (Heart failure) वह स्थिति है जिसमें हृदय शरीर की जरूरतों के अनुसार पर्याप्त रक्त पंप नहीं कर पाता।"
        },
        # Q99: Juxtamedullary nephrons countercurrent role
        {
            "num": 99,
            "question": "Juxtamedullary nephrons are particularly vital under conditions of water deprivation because their long loops of Henle and vasa recta:",
            "questionHi": "जलाभाव की स्थिति में जक्सटामेडुलरी नेफ्रॉन विशेष रूप से महत्वपूर्ण होते हैं क्योंकि उनके लंबे हेनले लूप और वासा रेक्टा:",
            "options": [
                "Establish and maintain a hyperosmotic medullary concentration gradient to excrete concentrated urine",
                "Produce large volumes of hypotonic dilute urine to flush nitrogenous wastes",
                "Filter blood without utilizing hydrostatic pressure",
                "Prevent reabsorption of sodium and water in DCT"
            ],
            "optionsHi": [
                "सांद्रित मूत्र उत्सर्जित करने हेतु मध्यांश में अतिपरासारी सांद्रता प्रवणता स्थापित व बनाए रखते हैं",
                "अपशिष्टों को बाहर निकालने के लिए अत्यधिक मात्रा में तनु मूत्र उत्पन्न करते हैं",
                "द्रवस्थैतिक दाब का उपयोग किए बिना रक्त को निस्यंदित करते हैं",
                "DCT में सोडियम और जल के पुनरावशोषण को रोकते हैं"
            ],
            "correct": 0,
            "explanation": "Juxtamedullary nephrons dip deep into the renal papilla. Together with the hairpin vasa recta counter-current exchanger, they maintain high medullary hypertonicity (up to 1200 mOsm/L), enabling water reabsorption and producing concentrated urine.",
            "explanationHi": "जक्सटामेडुलरी नेफ्रॉन मध्यांश में उच्च परासरणी प्रवणता (1200 mOsm/L) बनाए रखते हैं जिससे जल का अत्यधिक पुनरावशोषण होकर सांद्र मूत्र बनता है।"
        },
        # Q100: Glomerular capillary pressure afferent vs efferent
        {
            "num": 100,
            "question": "Ultrafiltration in the glomerulus is facilitated by a high glomerular capillary hydrostatic pressure (~55 mm Hg). This pressure is created primarily because:",
            "questionHi": "केशिकागुच्छ में परानिस्यंदन (ultrafiltration) एक उच्च केशिकागुच्छीय द्रवस्थैतिक दाब (~55 mm Hg) द्वारा सुगम होता है। यह दाब मुख्यतः इसलिए उत्पन्न होता है क्योंकि:",
            "options": [
                "The diameter of the afferent arteriole is wider than that of the efferent arteriole",
                "The efferent arteriole has a wider diameter than the afferent arteriole",
                "Podocytes pump fluid actively into Bowman's space",
                "Blood pressure in the renal vein is higher than in the renal artery"
            ],
            "optionsHi": [
                "अभिवाही धमनिका (Afferent arteriole) का व्यास अपवाही धमनिका (Efferent arteriole) से अधिक चौड़ा होता है",
                "अपवाही धमनिका का व्यास अभिवाही धमनिका से अधिक चौड़ा होता है",
                "पोडोसाइट्स सक्रिय रूप से द्रव को बोमन सम्पुट में पंप करते हैं",
                "वृक्क शिरा में रक्तदाब वृक्क धमनी से अधिक होता है"
            ],
            "correct": 0,
            "explanation": "The afferent arteriole bringing blood to the glomerulus has a wider lumen than the efferent arteriole taking blood away. This bottleneck provides resistance to blood outflow, maintaining high glomerular hydrostatic pressure for filtration.",
            "explanationHi": "अभिवाही धमनिका (afferent arteriole) का व्यास अपवाही धमनिका (efferent arteriole) से अधिक चौड़ा होता है, जिससे केशिकागुच्छ में उच्च दाब बना रहता है।"
        }
    ]
}

# Now generate the mockData.js content
def build_js():
    subjects = [
        {
            "id": "phy",
            "name": "Physics",
            "nameHi": "भौतिक विज्ञान",
            "sec_a": questions_data["phy_sec_a"],
            "sec_b": questions_data["phy_sec_b"]
        },
        {
            "id": "chem",
            "name": "Chemistry",
            "nameHi": "रसायन विज्ञान",
            "sec_a": questions_data["chem_sec_a"],
            "sec_b": questions_data["chem_sec_b"]
        },
        {
            "id": "bot",
            "name": "Botany",
            "nameHi": "वनस्पति विज्ञान",
            "sec_a": questions_data["bot_sec_a"],
            "sec_b": questions_data["bot_sec_b"]
        },
        {
            "id": "zoo",
            "name": "Zoology",
            "nameHi": "प्राणी विज्ञान",
            "sec_a": questions_data["zoo_sec_a"],
            "sec_b": questions_data["zoo_sec_b"]
        }
    ]

    structuredSections = []
    overall_num = 1

    for sub in subjects:
        secA_qs = []
        for q in sub["sec_a"]:
            secA_qs.append({
                "id": f"q_{sub['id']}_{overall_num}",
                "num": overall_num,
                "question": q["question"],
                "questionHi": q["questionHi"],
                "options": q["options"],
                "optionsHi": q["optionsHi"],
                "correct": q["correct"],
                "explanation": q["explanation"],
                "explanationHi": q["explanationHi"]
            })
            overall_num += 1

        secB_qs = []
        for q in sub["sec_b"]:
            secB_qs.append({
                "id": f"q_{sub['id']}_{overall_num}",
                "num": overall_num,
                "question": q["question"],
                "questionHi": q["questionHi"],
                "options": q["options"],
                "optionsHi": q["optionsHi"],
                "correct": q["correct"],
                "explanation": q["explanation"],
                "explanationHi": q["explanationHi"]
            })
            overall_num += 1

        structuredSections.append({
            "id": sub["id"],
            "name": sub["name"],
            "nameHi": sub["nameHi"],
            "subsections": [
                {
                    "id": f"{sub['id']}_sec_a",
                    "name": f"{sub['name']} - Section A",
                    "nameHi": f"{sub['nameHi']} - खंड A",
                    "maxAttempt": 20,
                    "questions": secA_qs
                },
                {
                    "id": f"{sub['id']}_sec_b",
                    "name": f"{sub['name']} - Section B",
                    "nameHi": f"{sub['nameHi']} - खंड B",
                    "maxAttempt": 5,
                    "questions": secB_qs
                }
            ]
        })

    mock_bank = {
        "id": "allen_achiever_minor_03",
        "title": "PRE-MEDICAL ACHIEVER PHASE - II | MINOR TEST # 03 (ALLEN)",
        "durationMinutes": 100,
        "totalMarks": 400,
        "totalQuestions": 100,
        "sections": structuredSections
    }

    js_code = f"""/**
 * PRE-MEDICAL ACHIEVER PHASE - II
 * MINOR TEST # 03 (ALLEN CAREER INSTITUTE)
 * Test Date: 26.10.2026 | Centres: Amritsar, Chandigarh & Mohali
 * 
 * EXACT TEST SLIP SYLLABUS:
 * - PHYSICS: Work Power Energy (Complete), Centre of Mass, Momentum & Collision (Complete)
 * - CHEMISTRY: IOC - Chemical Bonding (Remaining), PC - Liquid Solution (Remaining) & Chemical Equilibrium (Till law of mass action)
 * - BOTANY: Morphology of flowering plant (Complete), Plant Anatomy (Till Classification of permanent tissue)
 * - ZOOLOGY: Circulatory System (Complete) & Excretory System (Till Types of Nephron)
 * 
 * Pattern: Exactly 100 Questions | 100 Minutes | 400 Marks (+4 / -1 Marking Scheme)
 * 25 Questions per subject: Section A (20 Qs) + Section B (5 Qs)
 * Fully curated with authentic medium-level NEET questions and PYQs.
 */

export const NEET_QUESTION_BANK = {{
  getNeet100Mock: function() {{
    return {json.dumps(mock_bank, ensure_ascii=False, indent=2)};
  }}
}};
"""
    return js_code

if __name__ == '__main__':
    content = build_js()
    with open('src/data/mockData.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS: src/data/mockData.js successfully generated with 100 authentic questions!")
