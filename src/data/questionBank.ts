export interface QuestionData {
  id: string;
  setId: 'A' | 'B';
  category: string;
  text: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  rationale: string;
}

export const questionBank: QuestionData[] = [
  // ==========================================
  // SET A: Recruitment, L&D, Comp & Ben, Performance, Job Analysis, Risk
  // ==========================================
  {
    id: 'a1',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the primary purpose of a realistic job preview (RJP) during the selection process?',
    correctAnswer: 'To provide candidates with both the positive and negative aspects of the job to reduce early turnover.',
    incorrectAnswers: [
      'To weed out unqualified applicants by making the job seem extremely difficult.',
      'To test the candidate’s practical skills in a simulated environment.',
      'To negotiate salary expectations before the final interview.'
    ],
    rationale: 'An RJP gives a balanced, honest view of the job, helping candidates make informed decisions, which significantly reduces dissatisfaction and early turnover.'
  },
  {
    id: 'a2',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'Which of the following documents specifically lists the minimum acceptable qualifications a person must possess to perform a particular job?',
    correctAnswer: 'Job Specification',
    incorrectAnswers: [
      'Job Description',
      'Job Evaluation',
      'Job Posting'
    ],
    rationale: 'A Job Specification outlines the specific knowledge, skills, abilities, and other characteristics (KSAOs) required to perform the job, whereas a Job Description outlines the duties of the job itself.'
  },
  {
    id: 'a3',
    setId: 'A',
    category: 'Performance Management',
    text: 'In performance appraisals, the "halo effect" occurs when an evaluator:',
    correctAnswer: 'Rates an employee highly on all dimensions because of a single positive trait or achievement.',
    incorrectAnswers: [
      'Focuses only on the most recent behavior of the employee.',
      'Rates all employees as "average" to avoid conflict.',
      'Allows a single negative trait to inappropriately lower the employee’s overall rating.'
    ],
    rationale: 'The halo effect is a cognitive bias where a single positive attribute influences the observer\'s overall judgment favorably across other independent traits.'
  },
  
  // ==========================================
  // SET B: Labor and HR-related laws
  // ==========================================
  {
    id: 'b1',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Philippine Labor Code, how long is the probationary employment period for a typical employee unless covered by an apprenticeship agreement?',
    correctAnswer: 'Not exceeding six (6) months from the date the employee started working.',
    incorrectAnswers: [
      'Three (3) months',
      'One (1) year',
      'At the absolute discretion of the employer.'
    ],
    rationale: 'Article 296 of the Labor Code states that probationary employment shall not exceed six (6) months. If the employee is allowed to work beyond this period, they are considered a regular employee.'
  },
  {
    id: 'b2',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Which of the following employees is NOT entitled to 13th month pay under PD 851?',
    correctAnswer: 'Managerial employees',
    incorrectAnswers: [
      'Rank-and-file employees who have worked for 1 month',
      'Piece-rate workers',
      'Probationary rank-and-file employees'
    ],
    rationale: 'Presidential Decree 851 specifies that only rank-and-file employees are legally entitled to receive the 13th month pay. Employers are not mandated by law to provide it to managerial employees, though they may do so voluntarily.'
  },
  {
    id: 'b3',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the standard payment rate for work performed on a regular holiday (assuming the employee works on that day)?',
    correctAnswer: '200% of the regular daily wage.',
    incorrectAnswers: [
      '130% of the regular daily wage.',
      '150% of the regular daily wage.',
      '100% of the regular daily wage plus a day off.'
    ],
    rationale: 'Under the Labor Code, an employee who works on a regular holiday shall be paid 200% of their regular daily wage for the first eight hours.'
  },
  // ==========================================
  // BATCH 1 - SET A (Generated)
  // ==========================================
  {
    id: 'a4',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'Which type of interview is based on the premise that past behavior is the best predictor of future behavior?',
    correctAnswer: 'Behavioral Interview',
    incorrectAnswers: [
      'Situational Interview',
      'Stress Interview',
      'Unstructured Interview'
    ],
    rationale: 'Behavioral interviews ask candidates to describe specific examples of how they handled past situations, relying on the principle that past actions predict future performance.'
  },
  {
    id: 'a5',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the first phase of the ADDIE model in training and development?',
    correctAnswer: 'Analysis',
    incorrectAnswers: [
      'Assessment',
      'Application',
      'Alignment'
    ],
    rationale: 'The ADDIE model stands for Analysis, Design, Development, Implementation, and Evaluation. The first phase, Analysis, identifies the instructional problem, goals, and learner characteristics.'
  },
  {
    id: 'a6',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In compensation management, what does "internal equity" refer to?',
    correctAnswer: 'Paying employees fairly compared to others within the same organization based on the relative value of their jobs.',
    incorrectAnswers: [
      'Paying employees salaries that match market rates outside the company.',
      'Providing the exact same salary to every employee regardless of position.',
      'Ensuring that female and male employees get equal maternity and paternity benefits.'
    ],
    rationale: 'Internal equity ensures fairness in pay structures inside the company, meaning jobs of similar value and responsibility are paid similarly.'
  },
  {
    id: 'a7',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a 360-degree feedback system?',
    correctAnswer: 'A process where performance data is collected from supervisors, peers, subordinates, and sometimes customers.',
    incorrectAnswers: [
      'A system where an employee is evaluated only by their direct manager twice a year.',
      'A self-evaluation tool where the employee rates their own performance globally.',
      'An appraisal system focused solely on an employee’s technical output over 360 days.'
    ],
    rationale: '360-degree feedback provides a comprehensive view of an employee’s performance by gathering anonymous feedback from all directions around the employee.'
  },
  {
    id: 'a8',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'Which method of job analysis involves the HR analyst actually performing the job to understand its requirements?',
    correctAnswer: 'Actual Performance / Participation Method',
    incorrectAnswers: [
      'Observation Method',
      'Critical Incident Method',
      'Interview Method'
    ],
    rationale: 'In the actual performance or participation method, the analyst learns exactly what the job entails by doing it themselves, which is highly effective for manual or routine jobs.'
  },
  {
    id: 'a9',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is the primary purpose of applying ergonomics in the workplace?',
    correctAnswer: 'To design the work environment to fit the physical capabilities of workers, thereby reducing injury risks and improving efficiency.',
    incorrectAnswers: [
      'To strictly monitor employee computer usage for cybersecurity risks.',
      'To create financial risk mitigation strategies for corporate investments.',
      'To enforce mandatory health insurance policies for all rank-and-file staff.'
    ],
    rationale: 'Ergonomics focuses on matching the physical requirements of a job (like chair design or desk height) to the anatomical capabilities of the worker to prevent musculoskeletal injuries.'
  },
  {
    id: 'a10',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What does the HR metric "Time-to-Fill" measure?',
    correctAnswer: 'The number of days from when a job requisition is approved to when a candidate accepts the job offer.',
    incorrectAnswers: [
      'The time it takes for a new hire to become fully productive.',
      'The duration of the initial interview process.',
      'The total hours spent by HR sorting through resumes.'
    ],
    rationale: 'Time-to-fill tracks the efficiency of the recruitment process, measuring the calendar days from the opening of a job req to the acceptance of the offer.'
  },
  {
    id: 'a11',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'Which of the following best describes "On-the-Job Training" (OJT)?',
    correctAnswer: 'Training that occurs in the actual work environment while the trainee performs real tasks.',
    incorrectAnswers: [
      'Classroom-style lectures conducted by external consultants.',
      'Online modules completed before an employee’s first day of work.',
      'Role-playing exercises conducted in a simulation lab.'
    ],
    rationale: 'OJT allows employees to learn by doing in the actual workspace, often under the guidance of an experienced peer or manager.'
  },
  {
    id: 'a12',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "compa-ratio" (comparative ratio)?',
    correctAnswer: 'The ratio of an employee’s actual salary to the midpoint of their salary grade.',
    incorrectAnswers: [
      'The comparison of a company’s benefits package to its competitors.',
      'The percentage of revenue dedicated to employee compensation.',
      'The difference between the highest and lowest paid employee in a department.'
    ],
    rationale: 'A compa-ratio calculates how far an employee’s pay is from the midpoint of their pay band (Salary / Midpoint). A ratio of 1.0 means they are paid exactly at the midpoint.'
  },
  {
    id: 'a13',
    setId: 'A',
    category: 'Performance Management',
    text: 'In performance appraisals, what is the "horns effect"?',
    correctAnswer: 'A cognitive bias where a single negative trait or incident overshadows all other positive traits, resulting in an unfairly low overall rating.',
    incorrectAnswers: [
      'Rating an employee highly based on their physical attractiveness.',
      'The tendency to rate all employees in the middle of the scale.',
      'Evaluating an employee based only on their most recent behavior prior to the appraisal.'
    ],
    rationale: 'The horns effect is the opposite of the halo effect. One negative characteristic biases the evaluator to rate the employee poorly across all independent performance dimensions.'
  },

  // ==========================================
  // BATCH 1 - SET B (Generated)
  // ==========================================
  {
    id: 'b4',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Philippine Labor Code, what is the premium pay rate for work performed on a Special Non-Working Holiday?',
    correctAnswer: '130% of the regular daily wage.',
    incorrectAnswers: [
      '200% of the regular daily wage.',
      '150% of the regular daily wage.',
      '110% of the regular daily wage.'
    ],
    rationale: 'For work performed on a special non-working day, the employee is entitled to an additional 30% of their basic wage on the first eight hours of work (130%).'
  },
  {
    id: 'b5',
    setId: 'B',
    category: 'Labor Laws',
    text: 'How much is the mandated night shift differential under Philippine law?',
    correctAnswer: 'Not less than 10% of the regular wage for each hour of work performed between 10:00 PM and 6:00 AM.',
    incorrectAnswers: [
      'Not less than 20% of the regular wage for each hour of work performed between 8:00 PM and 5:00 AM.',
      'Not less than 15% of the regular wage for each hour of work performed between 10:00 PM and 6:00 AM.',
      'An additional flat rate of PHP 100 per night shift.'
    ],
    rationale: 'Article 86 of the Labor Code dictates a night shift differential of not less than 10% of the regular wage for work between 10:00 PM and 6:00 AM.'
  },
  {
    id: 'b6',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the Service Incentive Leave (SIL) entitlement in the Philippines?',
    correctAnswer: 'Five (5) days of leave with pay for employees who have rendered at least one (1) year of service.',
    incorrectAnswers: [
      'Ten (10) days of leave with pay upon regularization.',
      'Fifteen (15) days of sick leave and fifteen (15) days of vacation leave per year.',
      'Seven (7) days of leave with pay after six months of service.'
    ],
    rationale: 'Under Article 95 of the Labor Code, every employee who has rendered at least one year of service is entitled to a yearly service incentive leave of five days with pay.'
  },
  {
    id: 'b7',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under RA 11210 (Expanded Maternity Leave Law), how many days of paid maternity leave is a female worker entitled to for a live childbirth?',
    correctAnswer: '105 days, regardless of whether the delivery was normal or caesarean.',
    incorrectAnswers: [
      '60 days for normal delivery and 78 days for caesarean.',
      '120 days for all types of deliveries.',
      '90 days, with an option to extend for 30 unpaid days.'
    ],
    rationale: 'The Expanded Maternity Leave Law grants 105 days of paid maternity leave for live childbirth, regardless of the mode of delivery, with an option to extend for an additional 30 days without pay.'
  },
  {
    id: 'b8',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Paternity Leave Act of 1996 (RA 8187), how many days of paid leave is a married male employee entitled to?',
    correctAnswer: 'Seven (7) days for the first four (4) deliveries of his legitimate spouse with whom he is cohabiting.',
    incorrectAnswers: [
      'Ten (10) days for any childbirth of his legitimate or common-law spouse.',
      'Seven (7) days for unlimited deliveries of his legitimate spouse.',
      'Fourteen (14) days if the spouse underwent a caesarean delivery.'
    ],
    rationale: 'Paternity leave of 7 days with full pay is granted to all married male employees in the private and public sectors for the first four deliveries (or miscarriages) of the legitimate spouse with whom he is cohabiting.'
  },
  {
    id: 'b9',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following constitutes an "Authorized Cause" for terminating employment under the Labor Code?',
    correctAnswer: 'Retrenchment to prevent losses',
    incorrectAnswers: [
      'Gross and habitual neglect by the employee of their duties',
      'Fraud or willful breach of trust by the employee',
      'Commission of a crime by the employee against the employer'
    ],
    rationale: 'Authorized causes are initiated by the employer for business reasons (e.g., retrenchment, redundancy, closure). Gross neglect, fraud, and commission of a crime are "Just Causes" due to the employee’s fault.'
  },
  {
    id: 'b10',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Can an employer terminate an employee for a "just cause" immediately without giving them a chance to explain?',
    correctAnswer: 'No, the employer must observe the twin-notice requirement (Notice to Explain and Notice of Termination) and conduct a hearing/conference.',
    incorrectAnswers: [
      'Yes, if the employee committed a serious crime like theft on company premises.',
      'Yes, as long as the employer pays severance pay equivalent to one month’s salary.',
      'No, the employer must get a court order before terminating any regular employee.'
    ],
    rationale: 'Procedural due process in termination for just causes requires a Notice to Explain (NTE), a hearing or opportunity to be heard, and a final Notice of Termination.'
  },
  {
    id: 'b11',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is "Constructive Dismissal" in Philippine Labor Law?',
    correctAnswer: 'A situation where an employee is forced to quit because continued employment is rendered impossible, unreasonable, or unlikely; an involuntary resignation.',
    incorrectAnswers: [
      'When an employer physically blocks an employee from entering the workplace.',
      'The termination of a probationary employee before the 6-month period ends.',
      'When an employee resigns specifically to join a competitor company.'
    ],
    rationale: 'Constructive dismissal occurs when an employer creates a hostile work environment or acts in a way that leaves the employee with no reasonable alternative but to resign.'
  },
  {
    id: 'b12',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine law, at what age is the mandatory retirement for employees (in the absence of a collective bargaining agreement or company policy providing otherwise)?',
    correctAnswer: 'Sixty-five (65) years old',
    incorrectAnswers: [
      'Sixty (60) years old',
      'Seventy (70) years old',
      'Fifty-five (55) years old'
    ],
    rationale: 'Under the Retirement Pay Law, the compulsory retirement age is 65 years old, while the optional retirement age is 60, provided the employee has served at least 5 years.'
  },
  {
    id: 'b13',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Who among the following is covered by the Solo Parent Leave under RA 8972?',
    correctAnswer: 'Any solo parent who has rendered at least one (1) year of service, entitling them to seven (7) days of leave.',
    incorrectAnswers: [
      'Any solo parent regardless of tenure, entitling them to five (5) days of leave.',
      'Only female solo parents who have rendered at least six (6) months of service.',
      'Any solo parent who has rendered at least one (1) year of service, entitling them to twelve (12) days of leave.'
    ],
    rationale: 'The Solo Parents Welfare Act grants 7 days of parental leave with pay every year to any solo parent who has rendered at least one year of service, to be used for parental duties.'
  },
  // ==========================================
  // BATCH 2 - SET A (Generated)
  // ==========================================
  {
    id: 'a14',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In Kirkpatrick’s Four-Level Training Evaluation Model, what does Level 3 evaluate?',
    correctAnswer: 'Behavior (whether trainees are applying what they learned on the job).',
    incorrectAnswers: [
      'Reaction (how trainees felt about the training).',
      'Learning (the increase in knowledge or skills).',
      'Results (the tangible impact on the business, such as ROI).'
    ],
    rationale: 'Kirkpatrick’s levels are: 1. Reaction, 2. Learning, 3. Behavior, and 4. Results. Level 3 assesses the transfer of learning to actual workplace behavior.'
  },
  {
    id: 'a15',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the difference between "validity" and "reliability" in employment testing?',
    correctAnswer: 'Validity refers to whether a test measures what it claims to measure, while reliability refers to the consistency of the test scores over time.',
    incorrectAnswers: [
      'Validity is the consistency of scores, while reliability is whether it measures what it claims to measure.',
      'Validity applies only to cognitive tests, while reliability applies to physical tests.',
      'Validity is a legal requirement, while reliability is an optional HR metric.'
    ],
    rationale: 'A test must be reliable (consistent) to be valid, but a reliable test is not necessarily valid (it might consistently measure the wrong thing).'
  },
  {
    id: 'a16',
    setId: 'A',
    category: 'Performance Management',
    text: 'Which performance management approach involves managers and employees jointly setting specific, measurable goals?',
    correctAnswer: 'Management by Objectives (MBO)',
    incorrectAnswers: [
      'Behaviorally Anchored Rating Scales (BARS)',
      'Critical Incident Method',
      'Graphic Rating Scale'
    ],
    rationale: 'MBO is a collaborative goal-setting process where management and employees agree on objectives and use them to evaluate performance over a period.'
  },
  {
    id: 'a17',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "broadbanding" in compensation management?',
    correctAnswer: 'Collapsing multiple salary grades into a few wide salary bands to encourage lateral skill development.',
    incorrectAnswers: [
      'Increasing the base salary of all employees by a flat percentage.',
      'Providing a comprehensive benefits package that covers extended family members.',
      'Outsourcing the payroll processing to a third-party vendor.'
    ],
    rationale: 'Broadbanding reduces hierarchical levels and creates wide pay ranges, which gives managers more flexibility in pay and encourages employees to develop laterally rather than strictly climbing a vertical ladder.'
  },
  {
    id: 'a18',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the Position Analysis Questionnaire (PAQ)?',
    correctAnswer: 'A standardized, structured job analysis questionnaire containing 194 items used to evaluate job behaviors and conditions.',
    incorrectAnswers: [
      'A survey given to employees upon resignation to understand their reasons for leaving.',
      'A legal document filed with the Department of Labor regarding hazard pay.',
      'A performance appraisal tool used exclusively for executive-level management.'
    ],
    rationale: 'The PAQ is one of the most widely used standardized quantitative job analysis tools, assessing information input, mental processes, work output, and relationships.'
  },
  {
    id: 'a19',
    setId: 'A',
    category: 'Risk Management',
    text: 'Under Philippine Occupational Safety and Health (OSH) standards, who is primarily responsible for providing a safe and healthful workplace?',
    correctAnswer: 'The Employer',
    incorrectAnswers: [
      'The Department of Labor and Employment (DOLE)',
      'The Employee',
      'The Local Government Unit (LGU)'
    ],
    rationale: 'While DOLE enforces the standards, OSH laws explicitly mandate that the employer bears the primary legal responsibility to furnish a workplace free from recognized hazards.'
  },
  {
    id: 'a20',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'How does succession planning differ from replacement planning?',
    correctAnswer: 'Succession planning focuses on long-term leadership development, while replacement planning focuses on immediately filling a sudden vacancy.',
    incorrectAnswers: [
      'Succession planning is only for the CEO, while replacement planning is for all staff.',
      'Succession planning involves external hires, while replacement planning relies strictly on internal promotions.',
      'They are identical terms used interchangeably in HR management.'
    ],
    rationale: 'Replacement planning is a reactive risk management tactic (who takes over if someone dies tomorrow?), whereas succession planning is a proactive, long-term developmental strategy.'
  },
  {
    id: 'a21',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the "similar-to-me" bias in candidate interviews?',
    correctAnswer: 'The tendency for interviewers to favor candidates who share their personal characteristics, background, or attitudes.',
    incorrectAnswers: [
      'The tendency for an interviewer to compare all candidates to the company\'s CEO.',
      'A bias where candidates pretend to have the same hobbies as the interviewer.',
      'The practice of hiring family members over qualified external candidates.'
    ],
    rationale: 'Similar-to-me bias (or affinity bias) occurs when an interviewer rates a candidate higher simply because they share a hometown, alma mater, or personal interest.'
  },
  {
    id: 'a22',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "piece-rate" pay system?',
    correctAnswer: 'A system where workers are paid a fixed rate for every unit produced or action performed, regardless of time.',
    incorrectAnswers: [
      'A system where employees receive a percentage of the company’s annual profits.',
      'Paying an employee a fixed salary divided into bi-monthly pieces.',
      'Compensating executives with stock options instead of cash.'
    ],
    rationale: 'Piece-rate compensation incentivizes high output by paying per item produced (e.g., garments sewn, articles written) rather than paying for time spent.'
  },
  {
    id: 'a23',
    setId: 'A',
    category: 'Performance Management',
    text: 'What does BARS stand for in performance appraisals?',
    correctAnswer: 'Behaviorally Anchored Rating Scales',
    incorrectAnswers: [
      'Business Assessment and Review System',
      'Behavioral Analysis and Reporting Standards',
      'Base Annual Remuneration Structure'
    ],
    rationale: 'BARS combine elements of traditional rating scales and critical incidents methods, anchoring numerical ratings with specific behavioral examples of good or poor performance.'
  },

  // ==========================================
  // BATCH 2 - SET B (Generated)
  // ==========================================
  {
    id: 'b14',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Who determines and fixes the minimum wage rates in the Philippines?',
    correctAnswer: 'The Regional Tripartite Wages and Productivity Boards (RTWPB)',
    incorrectAnswers: [
      'The President of the Philippines',
      'The Department of Labor and Employment (DOLE) Secretary',
      'The National Economic and Development Authority (NEDA)'
    ],
    rationale: 'Minimum wage rates vary by region and are determined by the RTWPB of each specific region based on cost of living, employer capacity, and economic conditions.'
  },
  {
    id: 'b15',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'How is the mandatory 13th-month pay calculated for a rank-and-file employee under Philippine law?',
    correctAnswer: 'Not less than one-twelfth (1/12) of the total basic salary earned by an employee within a calendar year.',
    incorrectAnswers: [
      'Exactly equal to the employee’s basic salary for the month of December.',
      '10% of the employee’s total gross earnings including overtime and allowances.',
      'A flat rate of PHP 15,000 for all employees regardless of tenure.'
    ],
    rationale: 'The formula is (Total Basic Salary earned during the year) ÷ 12. It explicitly excludes overtime pay, premium pay, and allowances unless these are treated as part of the basic salary by company practice.'
  },
  {
    id: 'b16',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Can a probationary period be extended beyond six months in the Philippines?',
    correctAnswer: 'Yes, but only by mutual agreement between the employer and the employee, usually to give the employee a chance to improve their performance.',
    incorrectAnswers: [
      'No, under no circumstances can it exceed 6 months; it is strictly prohibited by law.',
      'Yes, the employer can unilaterally extend it up to 12 months without the employee’s consent.',
      'Yes, but only if approved by the DOLE Regional Director.'
    ],
    rationale: 'Jurisprudence allows the extension of the probationary period beyond 6 months if both parties mutually agree, particularly when the purpose is to give the employee a second chance to pass the standards.'
  },
  {
    id: 'b17',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following constitutes "Serious Misconduct" as a Just Cause for termination?',
    correctAnswer: 'A transgression of some established and definite rule of action, characterized by a wrongful intent, that relates to the performance of the employee’s duties.',
    incorrectAnswers: [
      'A minor, unintentional mistake in a weekly report.',
      'Arriving 10 minutes late to work on a rainy day.',
      'An argument with a spouse that occurs completely outside of working hours and premises.'
    ],
    rationale: 'For misconduct to be serious and warrant dismissal, it must be grave, intentional, and directly related to the performance of the employee\'s duties, rendering them unfit to continue working.'
  },
  {
    id: 'b18',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the legal consequence for union officers who knowingly participate in an illegal strike?',
    correctAnswer: 'They may be declared to have lost their employment status.',
    incorrectAnswers: [
      'They will be fined PHP 50,000 but cannot be fired.',
      'They will only be suspended for a maximum of 30 days.',
      'There is no consequence as the right to strike is absolutely protected.'
    ],
    rationale: 'Under Article 264 of the Labor Code, any union officer who knowingly participates in an illegal strike may be validly terminated. Ordinary workers who merely participate are generally not terminated unless they commit illegal acts during the strike.'
  },
  {
    id: 'b19',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is "Management Prerogative"?',
    correctAnswer: 'The inherent right of the employer to regulate all aspects of employment, including hiring, work assignments, working methods, and discipline, provided it is exercised in good faith.',
    incorrectAnswers: [
      'The absolute right of management to bypass labor laws to save the company from bankruptcy.',
      'The right of managers to receive higher benefits than rank-and-file employees.',
      'The exclusive right of the CEO to negotiate with labor unions.'
    ],
    rationale: 'Management prerogative allows employers to run their business as they see fit. However, it is not absolute; it is limited by law, collective bargaining agreements, and the general principles of fairness and justice.'
  },
  {
    id: 'b20',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine law, how is the minimum retirement pay calculated for eligible employees?',
    correctAnswer: '22.5 days’ worth of salary for every year of service.',
    incorrectAnswers: [
      '15 days’ worth of salary for every year of service.',
      'One full month’s salary for every year of service.',
      'A lump sum of PHP 100,000 plus SSS benefits.'
    ],
    rationale: 'The law mandates retirement pay equivalent to at least half a month\'s salary for every year of service. This is computed as 15 days basic pay + 5 days SIL + 2.5 days (1/12 of 13th month pay), totaling 22.5 days per year of service.'
  },
  {
    id: 'b21',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Is the 13th-month pay taxable?',
    correctAnswer: 'It is tax-exempt up to a certain statutory limit (currently PHP 90,000 combined with other benefits); any excess is subject to income tax.',
    incorrectAnswers: [
      'No, the 13th-month pay is absolutely tax-free regardless of the amount.',
      'Yes, the entire amount is subject to standard income tax.',
      'It is only taxable for managerial employees.'
    ],
    rationale: 'Under the TRAIN Law (RA 10963), the 13th-month pay and other benefits are exempt from income tax up to a maximum of PHP 90,000.'
  },
  {
    id: 'b22',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the concept of "Security of Tenure" guaranteed by the Philippine Constitution?',
    correctAnswer: 'An employee cannot be dismissed from work without just or authorized cause and without observance of due process.',
    incorrectAnswers: [
      'An employee is guaranteed lifetime employment and can never be fired.',
      'An employee cannot be transferred to another branch without their written consent.',
      'An employer must guarantee a minimum wage increase every year.'
    ],
    rationale: 'Security of tenure protects workers from arbitrary dismissal. The employer bears the burden of proving that a dismissal is valid and lawful.'
  },
  {
    id: 'b23',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What constitutes an "employer-employee relationship" in the Philippines (The Four-Fold Test)?',
    correctAnswer: 'Selection and engagement, payment of wages, power of dismissal, and the power of control over the employee’s conduct.',
    incorrectAnswers: [
      'Signing a contract, working in the office, wearing a uniform, and using company equipment.',
      'Mutual agreement, profitability of the business, regular hours, and exclusivity.',
      'Government registration, tax deductions, issuance of an ID card, and daily time records.'
    ],
    rationale: 'The Supreme Court consistently applies the four-fold test to determine the existence of an employer-employee relationship, with the "control test" (how the work is done) being the most crucial element.'
  },
  // ==========================================
  // BATCH 3 - SET A (Generated)
  // ==========================================
  {
    id: 'a24',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the primary characteristic of a "stress interview"?',
    correctAnswer: 'The interviewer intentionally creates an uncomfortable or hostile environment to see how the candidate handles pressure.',
    incorrectAnswers: [
      'The candidate is asked to perform a complex physical task within a strict time limit.',
      'The interview is conducted by a panel of at least five senior executives.',
      'The candidate is asked about their personal financial stressors.'
    ],
    rationale: 'A stress interview aims to evaluate a candidate’s emotional resilience and ability to remain calm under pressure by deliberately making them uncomfortable.'
  },
  {
    id: 'a25',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'Which of the following best defines "cross-training"?',
    correctAnswer: 'Training employees to perform tasks and duties outside their primary role.',
    incorrectAnswers: [
      'Training employees from different companies in a joint seminar.',
      'A physical fitness program provided as an employee benefit.',
      'Training that relies exclusively on online, self-paced modules.'
    ],
    rationale: 'Cross-training builds workforce flexibility by equipping employees with the skills to cover for absent colleagues or assist in different departments during peak periods.'
  },
  {
    id: 'a26',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is the primary purpose of "hazard pay"?',
    correctAnswer: 'To provide additional compensation to employees who perform work under dangerous or extreme conditions.',
    incorrectAnswers: [
      'To penalize employees who frequently violate safety protocols.',
      'To cover the medical expenses of an employee injured on the job.',
      'To compensate employees who are forced to work night shifts.'
    ],
    rationale: 'Hazard pay is a premium added to the base salary of an employee whose job involves physical hardships or severe occupational risks.'
  },
  {
    id: 'a27',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "forced distribution" method of performance appraisal?',
    correctAnswer: 'A system that requires managers to rank employees into predefined categories (e.g., top 10%, middle 80%, bottom 10%).',
    incorrectAnswers: [
      'A system where every employee must receive a salary increase based on company profits.',
      'A method where employees are forced to evaluate their own managers.',
      'A ranking system where employees are rated strictly on their attendance records.'
    ],
    rationale: 'Forced distribution (or a bell curve) prevents rating inflation by forcing managers to identify both their highest and lowest performing employees within fixed quotas.'
  },
  {
    id: 'a28',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is a "competency model"?',
    correctAnswer: 'A framework that defines the specific skills, knowledge, and behaviors required to successfully perform a job.',
    incorrectAnswers: [
      'A mathematical formula used to determine an employee’s salary grade.',
      'A 3D physical model of a proposed office layout.',
      'A legally binding contract detailing an employee’s job description.'
    ],
    rationale: 'Competency models go beyond basic job duties to outline the specific behavioral traits, skills, and knowledge domains that lead to high performance in a role.'
  },
  {
    id: 'a29',
    setId: 'A',
    category: 'Risk Management',
    text: 'In the context of workplace risk, what is the primary function of Workers\' Compensation?',
    correctAnswer: 'To provide medical expenses and wage replacement to employees who are injured on the job, in exchange for relinquishing the right to sue the employer for negligence.',
    incorrectAnswers: [
      'To compensate employees who are laid off due to company downsizing.',
      'To pay for an employee’s legal fees if they decide to sue a coworker.',
      'To provide bonuses to workers who maintain a zero-accident record.'
    ],
    rationale: 'Workers\' compensation is a form of insurance providing wage replacement and medical benefits to employees injured in the course of employment.'
  },
  {
    id: 'a30',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'In HR, what does the term "nepotism" refer to?',
    correctAnswer: 'The practice of showing favoritism toward relatives or friends, especially by hiring them over more qualified candidates.',
    incorrectAnswers: [
      'The process of hiring external consultants to perform executive searches.',
      'A bias where an interviewer prefers candidates from their own university.',
      'The illegal practice of asking candidates about their religious beliefs.'
    ],
    rationale: 'Nepotism undermines the merit-based selection process by prioritizing personal relationships and familial ties over qualifications.'
  },
  {
    id: 'a31',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "microlearning"?',
    correctAnswer: 'An educational approach that delivers training content in small, highly focused, and easily digestible chunks.',
    incorrectAnswers: [
      'Training that is strictly limited to entry-level employees.',
      'A week-long intensive seminar covering microscopic details of a process.',
      'Learning that occurs exclusively on mobile devices during break times.'
    ],
    rationale: 'Microlearning tackles reducing attention spans by breaking down complex topics into short modules (often 3-5 minutes) focused on a single learning objective.'
  },
  {
    id: 'a32',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "signing bonus"?',
    correctAnswer: 'A one-time financial incentive offered to a candidate to encourage them to accept a job offer.',
    incorrectAnswers: [
      'A bonus given to employees when they sign their annual performance review.',
      'A cash reward given to HR personnel for successfully closing a hard-to-fill role.',
      'An annual bonus guaranteed by a collective bargaining agreement.'
    ],
    rationale: 'Signing bonuses (or sign-on bonuses) are upfront lump-sum payments used to attract top talent, often to offset a candidate leaving a secure job or walking away from unpaid bonuses at their current firm.'
  },
  {
    id: 'a33',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "leniency bias" in performance appraisals?',
    correctAnswer: 'The tendency of a rater to consistently give higher ratings than are actually warranted by the employee’s performance.',
    incorrectAnswers: [
      'The tendency of a rater to give all employees an average rating to avoid conflict.',
      'The tendency of a rater to evaluate employees based on their physical appearance.',
      'The tendency of a rater to be overly strict and give unjustifiably low scores.'
    ],
    rationale: 'Leniency error occurs when managers avoid giving negative feedback, resulting in inflated performance ratings across the board.'
  },

  // ==========================================
  // BATCH 3 - SET B (Generated)
  // ==========================================
  {
    id: 'b24',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Philippine Labor Code, what is the mandatory meal period that employers must provide to their employees?',
    correctAnswer: 'Not less than sixty (60) minutes of time-off for regular meals.',
    incorrectAnswers: [
      'Not less than thirty (30) minutes of time-off for regular meals.',
      'A continuous ninety (90) minute break.',
      'There is no mandated meal period; it is subject to employer discretion.'
    ],
    rationale: 'Article 85 of the Labor Code mandates that employers shall give their employees not less than 60 minutes time-off for regular meals.'
  },
  {
    id: 'b25',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are regular meal periods (1 hour) compensable under Philippine law?',
    correctAnswer: 'Generally, no. Meal periods are not considered compensable working time.',
    incorrectAnswers: [
      'Yes, all meal periods must be paid as part of the 8-hour workday.',
      'Yes, but only if the employee eats inside the company premises.',
      'No, but the employer must provide free meals to compensate for the unpaid time.'
    ],
    rationale: 'Because the employee is completely relieved from duty during the 60-minute meal period, it is not counted as compensable working time.'
  },
  {
    id: 'b26',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "compressed workweek" arrangement?',
    correctAnswer: 'An arrangement where the normal 40 or 48-hour workweek is completed in fewer than six days (e.g., working 10 hours a day for 4 days) without triggering overtime pay.',
    incorrectAnswers: [
      'An arrangement where employees are paid full-time wages for working only 20 hours a week.',
      'A mandatory reduction of work hours during a financial crisis.',
      'A policy allowing employees to choose their own start and end times every day.'
    ],
    rationale: 'A compressed workweek allows employees to work longer hours on fewer days, giving them an extra day off without the employer incurring overtime premiums, provided it is mutually agreed upon.'
  },
  {
    id: 'b27',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine law, can an employer pay employee wages using promissory notes or vouchers?',
    correctAnswer: 'No, wages must be paid in legal tender (cash or through automated teller machines).',
    incorrectAnswers: [
      'Yes, as long as the employee signs a waiver accepting the voucher.',
      'Yes, but only during a declared state of national calamity.',
      'No, wages must strictly be paid in cash; bank transfers are illegal.'
    ],
    rationale: 'Article 102 of the Labor Code strictly prohibits the payment of wages using promissory notes, vouchers, coupons, tokens, or tickets.'
  },
  {
    id: 'b28',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Rule on Non-Diminution of Benefits"?',
    correctAnswer: 'A principle stating that benefits and supplements already enjoyed by employees cannot be unilaterally reduced, eliminated, or discontinued by the employer.',
    incorrectAnswers: [
      'A rule that prevents employees from receiving a lower salary when promoted.',
      'A tax law that prevents the government from increasing income tax brackets.',
      'A rule requiring employers to match the benefits offered by competing companies.'
    ],
    rationale: 'Article 100 of the Labor Code establishes that established company practices regarding grants of benefits cannot be withdrawn by the employer without violating the non-diminution rule.'
  },
  {
    id: 'b29',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum period an employer can place an employee on "Preventive Suspension"?',
    correctAnswer: 'Thirty (30) days.',
    incorrectAnswers: [
      'Fifteen (15) days.',
      'Sixty (60) days.',
      'Indefinitely, until the investigation is concluded.'
    ],
    rationale: 'Preventive suspension cannot exceed 30 days. If the investigation takes longer, the employer must reinstate the employee (actually or in the payroll) while the investigation continues.'
  },
  {
    id: 'b30',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the mandatory retirement age for underground mine workers in the Philippines?',
    correctAnswer: 'Sixty (60) years old.',
    incorrectAnswers: [
      'Sixty-five (65) years old.',
      'Fifty-five (55) years old.',
      'Seventy (70) years old.'
    ],
    rationale: 'Due to the hazardous nature of the job, RA 8558 lowered the retirement age of underground mine workers to 50 (optional) and 60 (compulsory).'
  },
  {
    id: 'b31',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In labor relations, what is a "closed shop" agreement?',
    correctAnswer: 'A union security clause requiring all employees to join the recognized union as a condition for continued employment.',
    incorrectAnswers: [
      'An agreement to completely shut down factory operations during a strike.',
      'A policy where management refuses to hire unionized workers.',
      'A clause stating that only family members of current employees can be hired.'
    ],
    rationale: 'A closed shop agreement strengthens the union by mandating that only union members can remain employed, meaning workers who resign from or are expelled by the union can be legally dismissed.'
  },
  {
    id: 'b32',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine jurisprudence, who are considered "managerial employees"?',
    correctAnswer: 'Those vested with powers or prerogatives to lay down and execute management policies and/or to hire, fire, or discipline employees.',
    incorrectAnswers: [
      'Anyone who has been with the company for more than ten years.',
      'Employees who supervise at least three rank-and-file workers.',
      'Anyone earning above a specific salary threshold determined by DOLE.'
    ],
    rationale: 'Article 212(m) of the Labor Code defines managerial employees based on their inherent power to lay down policies and execute them, or their power to hire, suspend, or dismiss workers.'
  },
  {
    id: 'b33',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Is the 13th-month pay legally required to be paid before Christmas?',
    correctAnswer: 'Yes, it must be paid not later than December 24 of every year.',
    incorrectAnswers: [
      'No, it can be paid anytime within the calendar year.',
      'Yes, it must be paid not later than December 31.',
      'No, it is usually paid during the employee’s work anniversary.'
    ],
    rationale: 'Presidential Decree 851 mandates that the 13th-month pay must be given to eligible employees on or before December 24 to help them with holiday expenses.'
  },
  // ==========================================
  // BATCH 4 - SET A (Generated)
  // ==========================================
  {
    id: 'a34',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the difference between a panel interview and a sequential interview?',
    correctAnswer: 'A panel interview involves multiple interviewers questioning the candidate at the same time, while a sequential interview involves the candidate meeting with interviewers one after another.',
    incorrectAnswers: [
      'A panel interview is for executives, while a sequential interview is for rank-and-file.',
      'A panel interview is conducted online, while a sequential interview is conducted face-to-face.',
      'A panel interview allows candidates to interview each other, while sequential is traditional.'
    ],
    rationale: 'Panel interviews pool the interviewers into one session to save time and reduce individual bias, whereas sequential interviews pass the candidate from one interviewer to the next in separate sessions.'
  },
  {
    id: 'a35',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "blended learning"?',
    correctAnswer: 'An educational program that combines online digital media with traditional classroom methods.',
    incorrectAnswers: [
      'A training program where employees from different departments learn entirely unrelated skills.',
      'A completely virtual reality-based training environment.',
      'A method where trainees are forced to learn by observing without any formal instruction.'
    ],
    rationale: 'Blended learning combines the flexibility of e-learning (self-paced digital content) with the immediate feedback and social interaction of instructor-led classroom training.'
  },
  {
    id: 'a36',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "profit-sharing" plan?',
    correctAnswer: 'An incentive plan where employees receive a direct share of the company’s profits based on its financial performance.',
    incorrectAnswers: [
      'A plan where employees share their personal profits with the company.',
      'A guaranteed fixed bonus given to all employees regardless of company performance.',
      'A retirement plan where the employer matches the employee’s 401(k) contributions.'
    ],
    rationale: 'Profit-sharing ties a portion of employee compensation directly to the company’s bottom line, fostering a sense of ownership and aligning employee interests with organizational success.'
  },
  {
    id: 'a37',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a "Graphic Rating Scale" in performance appraisals?',
    correctAnswer: 'A checklist of traits or characteristics evaluated on a numbered scale (e.g., 1 to 5) from poor to excellent.',
    incorrectAnswers: [
      'A visual graph showing the company’s stock price over the year.',
      'A scale that strictly measures the physical output (weight or volume) of a worker.',
      'An appraisal method where employees draw a picture of their ideal workplace.'
    ],
    rationale: 'Graphic rating scales are the most common and simplest appraisal method, listing traits (like teamwork, punctuality) and asking the manager to rate them on a continuum.'
  },
  {
    id: 'a38',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'In job analysis, what is the "Critical Incident Technique"?',
    correctAnswer: 'A method that relies on recording specific examples of highly effective and highly ineffective behaviors by employees.',
    incorrectAnswers: [
      'A method used only after a major workplace accident to determine liability.',
      'A survey asking employees to list the most dangerous parts of their jobs.',
      'A statistical model used to predict the likelihood of an employee quitting.'
    ],
    rationale: 'The Critical Incident Technique focuses on actual observable behaviors (both extreme successes and failures) rather than abstract traits, making it highly useful for creating behaviorally anchored rating scales.'
  },
  {
    id: 'a39',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is an Employee Assistance Program (EAP)?',
    correctAnswer: 'A work-based intervention program designed to assist employees in resolving personal problems that may be adversely affecting their performance.',
    incorrectAnswers: [
      'A financial program that gives loans to employees to buy houses.',
      'A mentoring program where senior executives assist junior staff with their daily tasks.',
      'A legal assistance fund provided by the labor union.'
    ],
    rationale: 'EAPs provide confidential support services, such as counseling for mental health, substance abuse, or financial/legal stress, to help employees maintain their well-being and productivity.'
  },
  {
    id: 'a40',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What does the "attrition rate" measure?',
    correctAnswer: 'The rate at which employees leave a workforce over a given period, often indicating issues with retention.',
    incorrectAnswers: [
      'The rate at which new candidates apply for a job posting.',
      'The percentage of candidates who fail the pre-employment medical exam.',
      'The speed at which an employee completes their daily tasks.'
    ],
    rationale: 'Attrition rate (or turnover rate) is a key HR metric indicating the percentage of the workforce that leaves the organization, voluntarily or involuntarily, over a specific timeframe.'
  },
  {
    id: 'a41',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "gamification" in the context of employee training?',
    correctAnswer: 'The application of game-design elements (like point scoring, competition, and rules of play) in non-game training contexts to improve engagement.',
    incorrectAnswers: [
      'Forcing employees to play video games during their lunch break to reduce stress.',
      'Evaluating candidates strictly based on their performance in a chess match.',
      'Using actual casino gambling mechanics to distribute annual bonuses.'
    ],
    rationale: 'Gamification leverages human psychology\'s love for rewards and competition (leaderboards, badges, points) to make mundane training modules more interactive and engaging.'
  },
  {
    id: 'a42',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What are "fringe benefits"?',
    correctAnswer: 'Various non-wage compensations provided to employees in addition to their normal wages or salaries (e.g., company cars, gym memberships).',
    incorrectAnswers: [
      'Benefits that are strictly mandated by the government for all workers.',
      'Pay given to employees who work on the outer fringes (borders) of the country.',
      'Deductions taken from an employee’s salary to pay for union dues.'
    ],
    rationale: 'Fringe benefits are extra perks, often tax-advantaged, used by employers to attract and retain talent beyond the standard base salary.'
  },
  {
    id: 'a43',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a "contrast error" in performance appraisals?',
    correctAnswer: 'A bias where a manager evaluates an employee by comparing them to the previous person evaluated, rather than against absolute performance standards.',
    incorrectAnswers: [
      'Rating an employee poorly because their personality contrasts with the manager’s.',
      'An error in calculating the employee’s final score due to a faulty spreadsheet.',
      'Rating an employee high on technical skills but low on soft skills.'
    ],
    rationale: 'Contrast error occurs if an average employee is evaluated immediately after a terrible employee, causing the manager to rate the average employee artificially high simply by comparison.'
  },

  // ==========================================
  // BATCH 4 - SET B (Generated)
  // ==========================================
  {
    id: 'b34',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine law, which establishments are explicitly EXEMPT from paying the mandatory holiday pay?',
    correctAnswer: 'Retail and service establishments regularly employing less than ten (10) workers.',
    incorrectAnswers: [
      'All multinational corporations operating in economic zones.',
      'Manufacturing companies with more than 500 employees.',
      'Business Process Outsourcing (BPO) companies operating on night shifts.'
    ],
    rationale: 'Article 94 of the Labor Code exempts retail and service establishments regularly employing fewer than 10 workers from the holiday pay mandate.'
  },
  {
    id: 'b35',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are waivers or "quitclaims" signed by employees automatically considered invalid in the Philippines?',
    correctAnswer: 'No, they are valid if entered into voluntarily, with a full understanding of its terms, and if the consideration is reasonable and not unconscionable.',
    incorrectAnswers: [
      'Yes, the Supreme Court has ruled that all quitclaims are entirely void and illegal.',
      'Yes, but only if they are not notarized by a lawyer.',
      'No, they are absolutely binding and can never be questioned in court under any circumstance.'
    ],
    rationale: 'While courts generally look at quitclaims with disfavor (due to the unequal bargaining power), they are valid if the employee signed them voluntarily without fraud, and the settlement amount is fair.'
  },
  {
    id: 'b36',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the duration of a Collective Bargaining Agreement (CBA) under Philippine law?',
    correctAnswer: 'Five (5) years for the representation aspect, and three (3) years for the economic provisions.',
    incorrectAnswers: [
      'Three (3) years for all provisions.',
      'Ten (10) years for representation, and five (5) years for economic provisions.',
      'It is entirely up to the employer and has no legal maximum duration.'
    ],
    rationale: 'Article 265 of the Labor Code dictates that a CBA\'s representation aspect lasts for 5 years, while its economic provisions (wages, benefits) must be renegotiated after 3 years.'
  },
  {
    id: 'b37',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the difference between "Redundancy" and "Retrenchment" as authorized causes for termination?',
    correctAnswer: 'Redundancy occurs when an employee’s services are no longer necessary (e.g., due to automation), while retrenchment is the reduction of personnel to prevent expected or actual business losses.',
    incorrectAnswers: [
      'Redundancy applies to rank-and-file, while retrenchment applies to managers.',
      'Redundancy is due to employee fault, while retrenchment is due to employer fault.',
      'Redundancy requires DOLE approval, while retrenchment does not.'
    ],
    rationale: 'Redundancy happens when a position is superfluous (even if the company is profitable). Retrenchment is a drastic cost-cutting measure to save a struggling business from financial ruin.'
  },
  {
    id: 'b38',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the minimum statutory requirement for a weekly rest day in the Philippines?',
    correctAnswer: 'A rest period of not less than twenty-four (24) consecutive hours after every six (6) consecutive normal workdays.',
    incorrectAnswers: [
      'Two (2) consecutive days off per week for all employees.',
      'There is no statutory requirement; it depends entirely on the contract.',
      'A rest period of twelve (12) hours every weekend.'
    ],
    rationale: 'Article 91 of the Labor Code mandates that employers provide their employees a rest period of at least 24 consecutive hours after every six consecutive normal workdays.'
  },
  {
    id: 'b39',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under RA 9262 (Anti-Violence Against Women and Their Children Act), how many days of paid leave is a battered woman entitled to?',
    correctAnswer: 'Up to ten (10) days of paid leave, extendable depending on the protection order.',
    incorrectAnswers: [
      'Three (3) days of unpaid leave.',
      'Thirty (30) days of paid leave.',
      'There is no specific leave for this; she must use her sick leave.'
    ],
    rationale: 'Victims under VAWC are entitled to a paid leave of up to 10 days (in addition to other paid leaves) to attend to medical and legal concerns.'
  },
  {
    id: 'b40',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Who among the following are strictly prohibited by law from joining, assisting, or forming any labor organization (unions)?',
    correctAnswer: 'Managerial employees and confidential employees.',
    incorrectAnswers: [
      'Supervisory employees.',
      'Rank-and-file employees on probationary status.',
      'Employees working in the Business Process Outsourcing (BPO) industry.'
    ],
    rationale: 'Under Article 255, managerial employees are not eligible to join any labor organization. Jurisprudence extends this prohibition to confidential employees due to their access to sensitive labor relations data.'
  },
  {
    id: 'b41',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is "Wage Distortion" under Philippine Labor Law?',
    correctAnswer: 'A situation where an increase in prescribed wage rates results in the elimination or severe contraction of intentional pay differences between employee groups within a region.',
    incorrectAnswers: [
      'When an employer intentionally pays below the minimum wage.',
      'When male employees are paid significantly more than female employees for the same work.',
      'When inflation causes the purchasing power of the peso to drop dramatically.'
    ],
    rationale: 'Wage distortion usually occurs when a mandated minimum wage increase pushes the salary of lower-tier workers up to the level of higher-tier/tenured workers, erasing the intended hierarchy.'
  },
  {
    id: 'b42',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the required separation pay calculation for an employee terminated due to REDUNDANCY?',
    correctAnswer: 'At least one (1) month pay or one (1) month pay for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One-half (1/2) month pay for every year of service.',
      'Two (2) months pay for every year of service.',
      'There is no separation pay required for redundancy.'
    ],
    rationale: 'Article 298 states that in cases of installation of labor-saving devices or redundancy, the separation pay is 1 month pay per year of service (or 1 month total, whichever is higher).'
  },
  {
    id: 'b43',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the required separation pay calculation for an employee terminated due to RETRENCHMENT to prevent losses?',
    correctAnswer: 'At least one (1) month pay or one-half (1/2) month pay for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One (1) month pay for every year of service.',
      'Ten percent (10%) of the employee’s annual salary.',
      'There is no separation pay required if the company is losing money.'
    ],
    rationale: 'For retrenchment, closures, or disease, the separation pay requirement is lower than redundancy: 1/2 month pay per year of service (or 1 month total, whichever is higher).'
  },
  // ==========================================
  // BATCH 5 - SET A (Generated)
  // ==========================================
  {
    id: 'a44',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is an "Assessment Center" in the context of recruitment?',
    correctAnswer: 'A comprehensive evaluation process, not a physical place, where candidates participate in multiple simulated exercises observed by trained assessors.',
    incorrectAnswers: [
      'A physical building where all government-mandated pre-employment medical exams are conducted.',
      'A specific department in HR dedicated solely to computing applicant test scores.',
      'A university campus used for mass recruitment during job fairs.'
    ],
    rationale: 'An assessment center is a methodology (often lasting 1-3 days) utilizing role-plays, in-basket exercises, and group discussions to predict managerial or high-level performance.'
  },
  {
    id: 'a45',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the primary difference between "Mentoring" and "Coaching"?',
    correctAnswer: 'Mentoring is typically long-term and focused on overall career and personal development, while coaching is usually short-term and focused on improving specific job skills.',
    incorrectAnswers: [
      'Mentoring is strictly for executives, while coaching is for entry-level staff.',
      'Mentoring involves formal classroom instruction, while coaching is informal.',
      'Mentoring focuses on disciplinary actions, while coaching focuses on rewards.'
    ],
    rationale: 'Coaching is performance-driven and task-oriented (e.g., how to use new software), whereas mentoring is development-driven and relationship-oriented (e.g., how to navigate corporate politics).'
  },
  {
    id: 'a46',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What are "Stock Options" as an employee benefit?',
    correctAnswer: 'The right granted to an employee to purchase a specific number of shares of the company’s stock at a predetermined price within a specific timeframe.',
    incorrectAnswers: [
      'A requirement for the employee to invest 10% of their salary into the stock market.',
      'A payout of company stock given freely to an employee upon retirement.',
      'An option for an employee to receive their monthly salary entirely in company shares.'
    ],
    rationale: 'Stock options incentivize employees to help increase the company’s stock value, as they profit by buying shares at the fixed (lower) grant price and selling at the higher market price.'
  },
  {
    id: 'a47',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Central Tendency Error" in performance appraisals?',
    correctAnswer: 'The tendency of a rater to evaluate all employees as "average" or in the middle of the scale, avoiding both high and low extremes.',
    incorrectAnswers: [
      'The tendency of a rater to focus only on the central duties of a job description.',
      'An error where an employee rates themselves higher than their manager does.',
      'The tendency of a rater to be overly critical of all employees.'
    ],
    rationale: 'Central tendency error makes performance appraisals useless for distinguishing between high performers (who deserve promotions) and low performers (who need interventions), as everyone is lumped in the middle.'
  },
  {
    id: 'a48',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the difference between a "Job Description" and a "Job Specification"?',
    correctAnswer: 'A job description outlines the duties and responsibilities of the role, while a job specification outlines the human qualities (KSAOs) needed to perform it.',
    incorrectAnswers: [
      'A job description is for internal use only, while a job specification is posted publicly.',
      'A job description is used for rank-and-file, while a job specification is used for managers.',
      'They are exactly the same thing and the terms are used interchangeably.'
    ],
    rationale: 'Description focuses on the WORK (what is done, how, and why). Specification focuses on the WORKER (education, experience, skills required).'
  },
  {
    id: 'a49',
    setId: 'A',
    category: 'Risk Management',
    text: 'In occupational safety, what is a "near-miss" incident?',
    correctAnswer: 'An unplanned event that did not result in injury, illness, or damage, but had the potential to do so.',
    incorrectAnswers: [
      'An accident where an employee suffers a minor scratch that does not require first aid.',
      'A deliberate violation of a safety protocol that causes a machine breakdown.',
      'A worker arriving late and narrowly missing their shift.'
    ],
    rationale: 'Tracking near-misses is a proactive risk management strategy; analyzing these "close calls" helps prevent future incidents that could result in actual harm.'
  },
  {
    id: 'a50',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What does the term "Headhunting" refer to in HR?',
    correctAnswer: 'The process of proactively searching for and recruiting highly qualified candidates, usually for executive or specialized roles, who are often already employed (passive candidates).',
    incorrectAnswers: [
      'The practice of firing employees who fail to meet their sales quotas.',
      'A mass recruitment strategy aimed solely at fresh college graduates.',
      'Conducting background checks on candidates with criminal records.'
    ],
    rationale: 'Headhunters (or executive search firms) specifically target "passive" candidates—people who are not actively looking for a job but possess rare or high-level skills.'
  },
  {
    id: 'a51',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'During the Training Needs Assessment (TNA) phase, what are the three levels of analysis typically conducted?',
    correctAnswer: 'Organizational Analysis, Task/Operational Analysis, and Person Analysis.',
    incorrectAnswers: [
      'Financial Analysis, Risk Analysis, and Competitor Analysis.',
      'Managerial Analysis, Subordinate Analysis, and Customer Analysis.',
      'Pre-training Analysis, Mid-training Analysis, and Post-training Analysis.'
    ],
    rationale: 'A comprehensive TNA looks at where training is needed in the company (Organizational), what needs to be taught (Task), and who exactly needs to learn it (Person).'
  },
  {
    id: 'a52',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In executive compensation, what are "perquisites" (or "perks")?',
    correctAnswer: 'Special privileges or non-cash benefits provided to executives, such as a company car, club memberships, or first-class travel, beyond standard benefits.',
    incorrectAnswers: [
      'The mandatory government deductions taken from an executive\'s salary.',
      'Performance-based cash bonuses tied directly to stock prices.',
      'Severance packages paid out when an executive is fired.'
    ],
    rationale: 'Perquisites are exclusive fringe benefits used to attract top-tier executives, offering status and lifestyle enhancements.'
  },
  {
    id: 'a53',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Management by Walking Around" (MBWA)?',
    correctAnswer: 'An unstructured approach where managers wander through the workplace to spontaneously check on employees, equipment, and the status of ongoing work.',
    incorrectAnswers: [
      'A strict policy where managers must track their physical steps for corporate wellness points.',
      'A formal appraisal method conducted while walking around the building.',
      'A disciplinary action where an employee is escorted off the premises.'
    ],
    rationale: 'MBWA emphasizes visibility, approachability, and unstructured communication, allowing managers to gather informal performance data and build relationships.'
  },

  // ==========================================
  // BATCH 5 - SET B (Generated)
  // ==========================================
  {
    id: 'b44',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, are managerial employees entitled to mandatory Holiday Pay?',
    correctAnswer: 'No, managerial employees are explicitly exempt from the statutory holiday pay requirement.',
    incorrectAnswers: [
      'Yes, all employees without exception are entitled to holiday pay.',
      'Yes, but only for regular holidays, not special non-working days.',
      'No, but they must be given an equivalent day off.'
    ],
    rationale: 'Article 82 of the Labor Code exempts managerial employees, field personnel, government employees, and domestic helpers from hours of work regulations, including holiday pay and overtime pay.'
  },
  {
    id: 'b45',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which retail and service establishments are EXEMPT from paying the night shift differential?',
    correctAnswer: 'Those regularly employing not more than five (5) workers.',
    incorrectAnswers: [
      'Those regularly employing not more than ten (10) workers.',
      'Those operating strictly inside shopping malls.',
      'There is no exemption; all establishments must pay night shift differential.'
    ],
    rationale: 'Unlike holiday pay and service incentive leave which exempt retail/service establishments with less than 10 workers, the exemption for night shift differential specifically applies to those with not more than 5 workers.'
  },
  {
    id: 'b46',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Magna Carta of Women (RA 9710), what is the Special Leave for Women?',
    correctAnswer: 'A paid leave of up to two (2) months following surgery caused by gynecological disorders.',
    incorrectAnswers: [
      'A paid leave of ten (10) days for women suffering from domestic violence.',
      'An additional thirty (30) days of maternity leave for single mothers.',
      'A mandatory five (5) days off per year for women during menstruation.'
    ],
    rationale: 'To qualify for this 2-month paid leave, the female employee must have rendered continuous aggregate employment service of at least 6 months for the last 12 months and must undergo surgery due to a gynecological disorder.'
  },
  {
    id: 'b47',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Kasambahay Law (RA 10361), how is the minimum wage of domestic workers determined?',
    correctAnswer: 'It is set by the Regional Tripartite Wages and Productivity Boards (RTWPB) and varies depending on the region.',
    incorrectAnswers: [
      'It is a fixed national rate of PHP 5,000 for all kasambahays across the Philippines.',
      'It is negotiated solely between the employer and the kasambahay with no minimum limit.',
      'It is exactly equal to the minimum wage of rank-and-file corporate workers in the region.'
    ],
    rationale: 'The Kasambahay Law established baseline minimum wages, but mandated the RTWPBs to continually review and adjust these rates based on regional economic conditions.'
  },
  {
    id: 'b48',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following is considered a VALID deduction from an employee’s wages without needing their written consent?',
    correctAnswer: 'Statutory deductions like SSS, PhilHealth, Pag-IBIG, and withholding taxes.',
    incorrectAnswers: [
      'Payment for company equipment that the employee accidentally broke.',
      'Deductions for mandatory company uniforms.',
      'Contributions to a company-sponsored charity event.'
    ],
    rationale: 'Article 113 of the Labor Code prohibits unauthorized deductions. Exceptions include insurance premiums (with consent), union dues (where checked-off), and government-mandated statutory contributions (no consent needed).'
  },
  {
    id: 'b49',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the prescriptive period for filing a complaint for Illegal Dismissal in the Philippines?',
    correctAnswer: 'Four (4) years from the date of the illegal dismissal.',
    incorrectAnswers: [
      'One (1) year from the date of the illegal dismissal.',
      'Three (3) years from the date of the illegal dismissal.',
      'Ten (10) years from the date of the illegal dismissal.'
    ],
    rationale: 'Illegal dismissal is an injury to the rights of the plaintiff. Under the Civil Code, actions based on an injury to rights prescribe in four years.'
  },
  {
    id: 'b50',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the prescriptive period for filing a complaint involving purely money claims (e.g., unpaid overtime, 13th month pay)?',
    correctAnswer: 'Three (3) years from the time the cause of action accrued.',
    incorrectAnswers: [
      'One (1) year from the time the cause of action accrued.',
      'Four (4) years from the time the cause of action accrued.',
      'Ten (10) years from the time the cause of action accrued.'
    ],
    rationale: 'Article 306 of the Labor Code explicitly states that all money claims arising from employer-employee relations shall be filed within three (3) years from the time the cause of action accrued.'
  },
  {
    id: 'b51',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Before a labor union can hold a legal strike, what procedural requirement must they fulfill with the National Conciliation and Mediation Board (NCMB)?',
    correctAnswer: 'File a Notice of Strike at least 15 days (for ULP) or 30 days (for CBA deadlock) before the intended date, and conduct a strike vote.',
    incorrectAnswers: [
      'Pay a strike bond of PHP 100,000 to the DOLE.',
      'Obtain a written permission from the company’s CEO.',
      'File a Notice of Strike 24 hours before the intended walkout.'
    ],
    rationale: 'A strike is strictly regulated. The union must file a notice (15 days for Unfair Labor Practice, 30 days for bargaining deadlock), observe the cooling-off period, and secure a majority strike vote from its members.'
  },
  {
    id: 'b52',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Certification Election"?',
    correctAnswer: 'A process conducted by DOLE to determine which labor union, if any, shall be the exclusive bargaining agent of the employees in a bargaining unit.',
    incorrectAnswers: [
      'An election held by the company to choose the HR Director.',
      'An exam taken by HR professionals to become Certified Human Resource Associates (CHRA).',
      'A voting process to decide if the company should declare bankruptcy.'
    ],
    rationale: 'When multiple unions exist or when workers want to unionize, a certification election allows the workers to vote (by secret ballot) on which union will exclusively represent them in CBA negotiations with management.'
  },
  {
    id: 'b53',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Grievance Machinery" in a Collective Bargaining Agreement (CBA)?',
    correctAnswer: 'An internal mechanism established by the employer and the union for the rapid adjustment and resolution of grievances arising from the interpretation of the CBA or company policies.',
    incorrectAnswers: [
      'A machine used in factories to physically sort employee complaints.',
      'A specialized court within DOLE that handles all labor disputes.',
      'A company policy that bans employees from filing lawsuits.'
    ],
    rationale: 'The grievance machinery is the first line of defense in resolving disputes internally. If the dispute is not resolved at this level, it is escalated to Voluntary Arbitration.'
  },
  // ==========================================
  // BATCH 6 - SET A (Generated)
  // ==========================================
  {
    id: 'a54',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Employer Branding"?',
    correctAnswer: 'The process of promoting a company, or an organization, as the employer of choice to a desired target group.',
    incorrectAnswers: [
      'Designing the physical logo that appears on company uniforms.',
      'A marketing strategy aimed strictly at increasing product sales to consumers.',
      'The process of legally registering the company’s name with the government.'
    ],
    rationale: 'Employer branding is how a company markets itself to potential employees, highlighting its culture, benefits, and work environment to attract top talent.'
  },
  {
    id: 'a55',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Vestibule Training"?',
    correctAnswer: 'A training method where employees learn on actual equipment in a simulated environment away from the actual production floor.',
    incorrectAnswers: [
      'Training conducted exclusively in the lobby (vestibule) of the company building.',
      'An online-only training module focusing on soft skills.',
      'A type of on-the-job training where errors directly impact live customers.'
    ],
    rationale: 'Vestibule training is near-the-job training. It uses the exact equipment used on the job but in a safe, simulated environment to avoid costly mistakes during the learning phase (e.g., flight simulators).'
  },
  {
    id: 'a56',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Merit Pay"?',
    correctAnswer: 'An increase in base pay that is tied directly to an employee’s past performance.',
    incorrectAnswers: [
      'A standard cost-of-living adjustment given to all employees every year.',
      'A one-time cash bonus given for hitting a specific sales quota.',
      'Overtime pay granted for working on a rest day.'
    ],
    rationale: 'Unlike a one-time bonus, merit pay becomes a permanent part of the employee’s base salary, rewarding sustained high performance.'
  },
  {
    id: 'a57',
    setId: 'A',
    category: 'Performance Management',
    text: 'In performance management, what is the "Halo Effect"?',
    correctAnswer: 'A cognitive bias where a single positive trait or action by an employee causes the manager to rate them highly across all other independent categories.',
    incorrectAnswers: [
      'The tendency of an employee to act perfectly only when the manager is watching.',
      'A bias where an employee is judged strictly on their religious beliefs.',
      'The process of giving a high rating to an employee who is about to retire.'
    ],
    rationale: 'The halo effect ruins the accuracy of appraisals because the rater lets one outstanding characteristic (like punctuality or friendliness) blind them to the employee’s actual deficiencies in other areas.'
  },
  {
    id: 'a58',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is "Job Enlargement"?',
    correctAnswer: 'Increasing the scope of a job through extending the range of its job duties and responsibilities, generally at the same level (horizontal expansion).',
    incorrectAnswers: [
      'Giving an employee more authority and decision-making power (vertical expansion).',
      'Hiring more people to do the exact same job.',
      'Moving an employee to a completely different department temporarily.'
    ],
    rationale: 'Job enlargement is horizontal loading. It combats boredom by adding more variety to a job without necessarily increasing the level of responsibility (which would be job enrichment).'
  },
  {
    id: 'a59',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is the first step in the formal Risk Management process?',
    correctAnswer: 'Hazard Identification',
    incorrectAnswers: [
      'Risk Evaluation',
      'Implementing Controls',
      'Reviewing and Monitoring'
    ],
    rationale: 'Before you can assess, control, or monitor a risk, you must first systematically identify the hazards that currently exist in the workplace.'
  },
  {
    id: 'a60',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Blind Hiring"?',
    correctAnswer: 'A process that removes personally identifiable information (like name, age, gender, or alma mater) from resumes to reduce unconscious bias.',
    incorrectAnswers: [
      'Hiring candidates without looking at their resumes at all.',
      'Conducting interviews in a completely dark room.',
      'Hiring candidates based solely on referrals without an interview.'
    ],
    rationale: 'Blind hiring focuses the initial screening strictly on skills, experience, and objective assessments, preventing recruiters from being influenced by demographic data.'
  },
  {
    id: 'a61',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In training theory, what does "Andragogy" refer to?',
    correctAnswer: 'The methods and principles used in adult education, focusing on self-direction and practical application.',
    incorrectAnswers: [
      'The study of how children learn in a formal classroom setting.',
      'A method of training that strictly uses virtual reality.',
      'The process of evaluating the financial return on investment of a training program.'
    ],
    rationale: 'Andragogy assumes that adult learners are self-directed, bring experience to the learning environment, and want to learn things that have immediate relevance to their jobs.'
  },
  {
    id: 'a62',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Cafeteria Plan" (Flexible Benefits Plan)?',
    correctAnswer: 'A benefits arrangement that allows employees to choose from a menu of different benefits options to suit their individual needs.',
    incorrectAnswers: [
      'A plan that provides free meals to employees in the company cafeteria.',
      'A mandatory deduction plan that forces employees to pay for their own health insurance.',
      'A retirement plan where the employer chooses where to invest the funds.'
    ],
    rationale: 'Like a cafeteria where you pick what you want to eat, flexible benefit plans give employees a set allowance and let them allocate it among various benefits (health, childcare, extra PTO) based on their personal situation.'
  },
  {
    id: 'a63',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a potential disadvantage of "Peer Appraisals"?',
    correctAnswer: 'Peers may be reluctant to criticize each other or may use the appraisal to sabotage a rival (friendship/rivalry bias).',
    incorrectAnswers: [
      'Peers rarely know what the job actually entails compared to senior management.',
      'They are illegal under standard labor laws.',
      'They require expensive software to implement.'
    ],
    rationale: 'While peers often have the most accurate view of an employee’s day-to-day behavior, peer appraisals are highly susceptible to office politics, popularity contests, and reluctance to give negative feedback to friends.'
  },

  // ==========================================
  // BATCH 6 - SET B (Generated)
  // ==========================================
  {
    id: 'b54',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the required separation pay calculation for an employee terminated due to a legally established DISEASE?',
    correctAnswer: 'At least one (1) month salary or one-half (1/2) month salary for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One (1) month pay for every year of service.',
      'The employer is not required to pay separation pay if the employee is sick.',
      'Ten (10) days of pay for every year of service.'
    ],
    rationale: 'Under Article 299, if an employee is dismissed because their continued employment is prohibited by law or prejudicial to their/co-workers\' health (and cannot be cured in 6 months), they are entitled to separation pay of 1/2 month per year of service.'
  },
  {
    id: 'b55',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under Philippine Labor Law, is an employer legally required to provide Paid Bereavement Leave?',
    correctAnswer: 'No, there is currently no specific national law mandating paid bereavement leave in the private sector.',
    incorrectAnswers: [
      'Yes, the law mandates five (5) days of paid bereavement leave.',
      'Yes, but only for the death of a spouse or child.',
      'Yes, three (3) days of paid leave are mandated.'
    ],
    rationale: 'While highly common as a company policy or CBA provision, bereavement leave is NOT a statutory mandate under the Philippine Labor Code for private employees.'
  },
  {
    id: 'b56',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Paternity Leave Act (RA 8187), what is a key procedural requirement for the male employee to avail of the benefit?',
    correctAnswer: 'He must notify his employer of the pregnancy of his legitimate spouse and the expected date of delivery.',
    incorrectAnswers: [
      'He must take the leave exactly on the day the child is born.',
      'He must submit a DNA test proving paternity before the leave is approved.',
      'He must have worked for the company for at least 3 years.'
    ],
    rationale: 'To avail of paternity leave, the married male employee must notify the employer of his spouse’s pregnancy within a reasonable period. The leave itself can be taken before, during, or after delivery, but not exceeding 60 days after delivery.'
  },
  {
    id: 'b57',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What does the Telecommuting Act (RA 11165) mandate regarding the rights of telecommuting employees?',
    correctAnswer: 'They must receive fair treatment and have the same rights, minimum labor standards, and benefits as comparable employees working at the employer’s premises.',
    incorrectAnswers: [
      'They must accept a 10% reduction in salary since they save on transportation costs.',
      'They are exempt from the 8-hour workday limit and can be required to work 24/7.',
      'They lose their right to unionize and form collective bargaining agreements.'
    ],
    rationale: 'The law ensures that work-from-home or telecommuting employees are not treated as second-class workers; they retain all statutory rights and benefits.'
  },
  {
    id: 'b58',
    setId: 'B',
    category: 'Labor Laws',
    text: 'How is the wage computed if an employee works on a day that is BOTH a Regular Holiday and their scheduled Rest Day?',
    correctAnswer: 'The employee is entitled to 260% of their regular daily wage for the first eight (8) hours.',
    incorrectAnswers: [
      'The employee is entitled to 200% of their regular daily wage.',
      'The employee is entitled to 300% of their regular daily wage.',
      'The employee is entitled to 150% of their regular daily wage.'
    ],
    rationale: 'Working on a regular holiday pays 200%. If it falls on a rest day, an additional 30% premium is applied to the holiday rate (200% x 1.30 = 260%).'
  },
  {
    id: 'b59',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the legal consequence for an ordinary union member (not an officer) who merely participates in an illegal strike?',
    correctAnswer: 'They generally cannot be terminated for mere participation, UNLESS they commit illegal acts (like violence or coercion) during the strike.',
    incorrectAnswers: [
      'They are automatically terminated immediately upon joining the strike.',
      'They are immune from any disciplinary action under all circumstances.',
      'They must pay a fine equivalent to their salary for the duration of the strike.'
    ],
    rationale: 'Union officers can be terminated for knowingly participating in an illegal strike. Ordinary members, however, must commit an illegal act during the strike to be validly dismissed.'
  },
  {
    id: 'b60',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the difference between Compulsory Arbitration and Voluntary Arbitration?',
    correctAnswer: 'Compulsory arbitration is mandated by law or the government (e.g., DOLE Secretary assuming jurisdiction), while voluntary arbitration is agreed upon by both management and the union.',
    incorrectAnswers: [
      'Compulsory arbitration applies only to government workers, while voluntary applies to private workers.',
      'Compulsory arbitration decisions can be appealed, while voluntary arbitration decisions cannot.',
      'Compulsory arbitration requires a lawyer, while voluntary does not.'
    ],
    rationale: 'Voluntary arbitration is highly encouraged as it relies on the mutual consent of the parties to submit their dispute to a third party. Compulsory arbitration is an exercise of state police power.'
  },
  {
    id: 'b61',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following acts by an employer is considered an Unfair Labor Practice (ULP)?',
    correctAnswer: 'Interfering with, restraining, or coercing employees in the exercise of their right to self-organization.',
    incorrectAnswers: [
      'Terminating an employee for stealing company property.',
      'Requiring employees to wear a company uniform.',
      'Denying an employee\'s request for an extended vacation leave.'
    ],
    rationale: 'ULPs are acts that violate the constitutional right of workers to self-organization. Any interference by management in union formation or activities is a classic ULP.'
  },
  {
    id: 'b62',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Anti-Age Discrimination in Employment Act (RA 10911), which of the following is PROHIBITED?',
    correctAnswer: 'Declining a job application or denying a promotion strictly on the basis of the individual’s age.',
    incorrectAnswers: [
      'Setting a mandatory retirement age in a collective bargaining agreement.',
      'Requiring a specific age limit if age is a bona fide occupational qualification (BFOQ).',
      'Refusing to hire a minor for hazardous work.'
    ],
    rationale: 'RA 10911 makes it illegal to print ads, require age declarations, or deny employment/promotions based on age, EXCEPT when age is a legitimate occupational qualification (e.g., child actors).'
  },
  {
    id: 'b63',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the critical distinction between "Valid Job Contracting" and illegal "Labor-Only Contracting"?',
    correctAnswer: 'In valid contracting, the contractor has substantial capital/investment and exercises independent control over the workers. In labor-only contracting, the contractor merely recruits workers who perform tasks directly controlled by the principal company.',
    incorrectAnswers: [
      'Valid contracting involves at least 100 workers, while labor-only involves fewer than 10.',
      'Valid contracting is for blue-collar jobs, while labor-only is for white-collar jobs.',
      'Valid contracting must be approved by the President, while labor-only is approved by DOLE.'
    ],
    rationale: 'Labor-only contracting is prohibited because it is a scheme to evade employer obligations. If the principal company controls how the work is done and the tasks are directly related to the core business, the contractor is merely an agent, and an employer-employee relationship is established with the principal.'
  },
  // ==========================================
  // BATCH 7 - SET A (Generated)
  // ==========================================
  {
    id: 'a64',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Boomerang Employee"?',
    correctAnswer: 'An employee who leaves a company and later returns to work for the same company again.',
    incorrectAnswers: [
      'An employee who is constantly transferred between different departments.',
      'A candidate who repeatedly applies for the same position after being rejected.',
      'An employee who frequently travels internationally for work.'
    ],
    rationale: 'Boomerang employees are increasingly common and valuable because they already understand the company culture and require less onboarding, while bringing back new skills learned elsewhere.'
  },
  {
    id: 'a65',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Action Learning"?',
    correctAnswer: 'A training technique where small groups work on solving real organizational problems while learning from the process.',
    incorrectAnswers: [
      'A physical obstacle course used for team building.',
      'A fast-paced online quiz used to test basic knowledge.',
      'Learning that involves watching action movies to analyze leadership styles.'
    ],
    rationale: 'Action learning combines real-world problem solving with intentional learning, allowing employees to develop leadership and critical thinking skills by tackling actual business challenges.'
  },
  {
    id: 'a66',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In compensation management, what does a "red circle rate" indicate?',
    correctAnswer: 'An employee who is being paid above the maximum range for their job grade.',
    incorrectAnswers: [
      'An employee who is being paid below the minimum range for their job grade.',
      'An employee whose salary has been frozen due to disciplinary action.',
      'A salary that is heavily taxed due to falling into the highest tax bracket.'
    ],
    rationale: 'A red circle rate is a warning flag for HR indicating that an employee is "maxed out" and overpaid relative to the market value of their specific role.'
  },
  {
    id: 'a67',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "strictness bias" (or strictness error) in performance appraisals?',
    correctAnswer: 'The tendency of a rater to consistently give lower ratings than are actually warranted by the employee’s performance.',
    incorrectAnswers: [
      'The tendency to rate all employees exactly in the middle.',
      'Rating an employee highly because they strictly follow the rules.',
      'Evaluating an employee based on a single negative event.'
    ],
    rationale: 'Strictness bias is the opposite of leniency bias. The manager holds unrealistically high standards, rating even good performers poorly, which can demotivate the team.'
  },
  {
    id: 'a68',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the primary purpose of "Job Rotation"?',
    correctAnswer: 'To systematically move employees from one job to another to broaden their skills and reduce boredom.',
    incorrectAnswers: [
      'To permanently transfer underperforming employees to easier roles.',
      'To physically rotate the layout of the office every month.',
      'To replace full-time workers with temporary contract workers.'
    ],
    rationale: 'Job rotation is a training and retention strategy that exposes employees to different parts of the business, preventing stagnation and creating a more versatile workforce.'
  },
  {
    id: 'a69',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is an SDS (Safety Data Sheet), formerly known as MSDS?',
    correctAnswer: 'A document containing information on the potential hazards (health, fire, reactivity, and environmental) of a chemical product and how to work safely with it.',
    incorrectAnswers: [
      'A daily log sheet recording the attendance of security personnel.',
      'A financial document detailing the company’s insurance policies.',
      'A medical record of an employee’s previous workplace injuries.'
    ],
    rationale: 'Under OSH standards, employers must maintain Safety Data Sheets for all hazardous chemicals in the workplace to ensure workers know the risks and first-aid measures.'
  },
  {
    id: 'a70',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What does RPO stand for in the context of recruitment?',
    correctAnswer: 'Recruitment Process Outsourcing',
    incorrectAnswers: [
      'Return on Personnel Optimization',
      'Required Pre-employment Orientation',
      'Regional Placement Objectives'
    ],
    rationale: 'RPO is a form of business process outsourcing where an employer transfers all or part of its recruitment processes to an external service provider.'
  },
  {
    id: 'a71',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What does "training transfer" refer to?',
    correctAnswer: 'The extent to which trainees effectively apply the knowledge, skills, and attitudes learned in training to their actual jobs.',
    incorrectAnswers: [
      'Moving a training program from an online platform to a physical classroom.',
      'Transferring the cost of a training program to a different department.',
      'The physical relocation of an employee to a training facility.'
    ],
    rationale: 'A training program is only successful if "transfer" occurs—meaning the employee actually changes their behavior or improves their performance on the job as a result of the training.'
  },
  {
    id: 'a72',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In compensation management, what does a "green circle rate" indicate?',
    correctAnswer: 'An employee who is being paid below the minimum range for their job grade.',
    incorrectAnswers: [
      'An employee who is being paid above the maximum range for their job grade.',
      'An employee who receives their salary entirely in eco-friendly investments.',
      'A new hire who is still on their probationary period.'
    ],
    rationale: 'A green circle rate indicates an employee is underpaid relative to the company\'s established pay structure, often requiring an immediate salary adjustment to meet the minimum threshold.'
  },
  {
    id: 'a73',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Recency Error" in performance appraisals?',
    correctAnswer: 'A bias where the rater focuses primarily on the employee’s most recent behavior rather than their performance over the entire appraisal period.',
    incorrectAnswers: [
      'Evaluating an employee based on their very first month on the job.',
      'Using an outdated appraisal form from a previous year.',
      'Rating an employee highly simply because they are a recent graduate.'
    ],
    rationale: 'If a manager only remembers what an employee did in the two weeks before the appraisal (whether good or bad) and ignores the previous eleven months, they are committing a recency error.'
  },

  // ==========================================
  // BATCH 7 - SET B (Generated)
  // ==========================================
  {
    id: 'b64',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the primary function of the National Labor Relations Commission (NLRC)?',
    correctAnswer: 'It is a quasi-judicial body attached to DOLE tasked to resolve labor and management disputes through compulsory arbitration.',
    incorrectAnswers: [
      'It is the agency that registers new businesses and corporations.',
      'It is the police force responsible for arresting illegal strikers.',
      'It is a legislative body that creates new labor laws.'
    ],
    rationale: 'The NLRC exercises exclusive appellate jurisdiction over all cases decided by Labor Arbiters, resolving disputes involving unfair labor practices, illegal dismissal, and major money claims.'
  },
  {
    id: 'b65',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Is a resigned or terminated employee still entitled to their 13th-month pay?',
    correctAnswer: 'Yes, they are entitled to a pro-rated 13th-month pay based on the total basic salary they earned during the calendar year before their separation.',
    incorrectAnswers: [
      'No, the 13th-month pay is forfeited if the employee does not finish the year.',
      'Only if they resigned voluntarily; terminated employees forfeit it.',
      'Yes, they must receive the full amount regardless of how many months they worked.'
    ],
    rationale: 'The 13th-month pay is an earned benefit. If an employee resigns or is fired in June, they are still entitled to 1/12 of the basic salary they earned from January to June.'
  },
  {
    id: 'b66',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Solo Parents Welfare Act (RA 8972), what is the condition for the 7-day parental leave?',
    correctAnswer: 'The solo parent must have rendered at least one (1) year of service and must notify the employer within a reasonable period.',
    incorrectAnswers: [
      'The solo parent must be legally separated or annulled by court order.',
      'The leave can only be used when the child is hospitalized.',
      'The solo parent must have at least three (3) children.'
    ],
    rationale: 'The 7-day leave is granted to any solo parent (unmarried, widowed, separated, or spouse is in prison/incapacitated) who has rendered at least 1 year of service, to perform parental duties where their physical presence is required.'
  },
  {
    id: 'b67',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is an Alien Employment Permit (AEP)?',
    correctAnswer: 'A permit issued by DOLE required for any foreign national seeking admission to the Philippines for employment purposes.',
    incorrectAnswers: [
      'A permit required for Filipinos wanting to work abroad (OFWs).',
      'A special tax identification number for foreign investors.',
      'A permit allowing foreign companies to operate without paying local taxes.'
    ],
    rationale: 'Before a foreigner can work in the Philippines, they must secure an AEP from DOLE, which certifies that no Filipino is competent, able, and willing at the time of application to perform the services for which the alien is desired.'
  },
  {
    id: 'b68',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Visitorial and Enforcement Power" of the DOLE Secretary?',
    correctAnswer: 'The power to access employer records, inspect premises, and issue compliance orders to ensure adherence to labor standards.',
    incorrectAnswers: [
      'The power to unilaterally rewrite Collective Bargaining Agreements.',
      'The power to arrest employees who steal from their employers.',
      'The power to shut down any business permanently without a court order.'
    ],
    rationale: 'Under Article 128, the DOLE Secretary (or their authorized representatives like Labor Inspectors) can enter workplaces during working hours to inspect records and premises to enforce labor standards.'
  },
  {
    id: 'b69',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, what is the general minimum employable age?',
    correctAnswer: 'Fifteen (15) years old, though minors below 15 can be employed under strict conditions (e.g., under sole responsibility of parents, or in entertainment).',
    incorrectAnswers: [
      'Eighteen (18) years old with no exceptions.',
      'Sixteen (16) years old.',
      'Twenty-one (21) years old.'
    ],
    rationale: 'The general rule is no child below 15 shall be employed. Exceptions exist, but they require a DOLE permit and must not interfere with the child\'s schooling or involve hazardous work.'
  },
  {
    id: 'b70',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the difference between a "Regular Employee" and a "Project Employee"?',
    correctAnswer: 'A regular employee performs activities usually necessary or desirable in the usual business of the employer, while a project employee is hired for a specific project with a predetermined completion date.',
    incorrectAnswers: [
      'A regular employee works in the office, while a project employee works in the field.',
      'A regular employee is paid monthly, while a project employee is paid daily.',
      'A regular employee cannot be fired, while a project employee can be fired anytime.'
    ],
    rationale: 'Project employees enjoy security of tenure only for the duration of their specific project. Once the specific project is completed, their employment is naturally terminated without need for separation pay.'
  },
  {
    id: 'b71',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Brent School doctrine, is a "Fixed-Term Employment" contract valid in the Philippines?',
    correctAnswer: 'Yes, provided it is entered into knowingly and voluntarily by the parties without any force, duress, or improper pressure being brought to bear upon the employee.',
    incorrectAnswers: [
      'No, all fixed-term contracts are considered illegal labor-only contracting.',
      'Yes, but it can only be used for expatriates and foreign workers.',
      'No, fixed-term contracts automatically make the employee a regular employee from day one.'
    ],
    rationale: 'In Brent School vs. Zamora, the Supreme Court ruled that fixed-term contracts are valid if the term was freely agreed upon, the parties dealt on equal terms, and it was not used to circumvent security of tenure.'
  },
  {
    id: 'b72',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Labor Code, what is "Closure of Business" as an authorized cause for termination?',
    correctAnswer: 'The reversal of an employer\'s fortune or a management decision to halt operations, which must be done in good faith and not to defeat unionism.',
    incorrectAnswers: [
      'A temporary shutdown during a public holiday.',
      'When an employer locks out striking workers.',
      'The termination of a single department while the rest of the business expands.'
    ],
    rationale: 'Employers have the management prerogative to close their business (whether due to severe losses or just a desire to stop operating), provided they give a 30-day notice to DOLE and the employees, and pay separation pay (unless the closure is due to serious business losses).'
  },
  {
    id: 'b73',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Principle of Social Justice" in the context of Philippine Labor Law?',
    correctAnswer: 'The state\'s mandate to protect the working class, ensuring that those who have less in life should have more in law, often resolving doubts in favor of labor.',
    incorrectAnswers: [
      'A rule that requires companies to donate 5% of their profits to charity.',
      'A law that strictly equalizes the salaries of managers and rank-and-file workers.',
      'The absolute protection of employer property rights over employee welfare.'
    ],
    rationale: 'The Constitution mandates the State to afford full protection to labor. Under Article 4 of the Labor Code, all doubts in the implementation and interpretation of the law shall be resolved in favor of labor, reflecting the principle of social justice.'
  },
  // ==========================================
  // BATCH 8 - SET A (Generated)
  // ==========================================
  {
    id: 'a74',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the primary difference between "Orientation" and "Onboarding"?',
    correctAnswer: 'Orientation is a short-term event focusing on company policies and paperwork, while onboarding is a long-term process focusing on integrating the employee into the company culture and their role.',
    incorrectAnswers: [
      'Orientation is for managers, while onboarding is for rank-and-file employees.',
      'Orientation happens before hiring, while onboarding happens after resignation.',
      'They are identical terms used interchangeably by HR professionals.'
    ],
    rationale: 'Orientation is typically a one-day or one-week event (the "welcome"). Onboarding is a strategic, continuous process lasting up to a year to ensure the employee reaches full productivity.'
  },
  {
    id: 'a75',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is Job Instruction Training (JIT)?',
    correctAnswer: 'A step-by-step, structured on-the-job training method where a trainer demonstrates the task, and the trainee immediately practices it until mastered.',
    incorrectAnswers: [
      'A training program strictly focused on teaching managers how to write job descriptions.',
      'An online course completed independently before the employee’s first day.',
      'A method of rotating an employee through every department in one week.'
    ],
    rationale: 'JIT is a highly effective, logical on-the-job training sequence: Prepare the worker, present the operation, try out performance, and follow up.'
  },
  {
    id: 'a76',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What does "External Equity" refer to in compensation management?',
    correctAnswer: 'Ensuring that the company’s pay rates are competitive with what other organizations in the same industry or labor market are paying for similar jobs.',
    incorrectAnswers: [
      'Paying employees fairly compared to their internal peers in the same department.',
      'Providing compensation based on the employee’s external side businesses.',
      'Paying external contractors the exact same rate as full-time regular employees.'
    ],
    rationale: 'External equity is crucial for attracting and retaining talent. If external equity is low, employees will leave for competitors who pay the market rate.'
  },
  {
    id: 'a77',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Management by Exception"?',
    correctAnswer: 'A practice where management intervenes only when an employee or department fails to meet established performance standards.',
    incorrectAnswers: [
      'A system where managers make exceptions to company rules for their favorite employees.',
      'Managing employees by constantly micromanaging their every move.',
      'A policy where performance appraisals are skipped if the company is losing money.'
    ],
    rationale: 'Management by exception assumes that as long as things are running according to plan (within normal parameters), management does not need to interfere, saving time and empowering employees.'
  },
  {
    id: 'a78',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is O*NET (Occupational Information Network)?',
    correctAnswer: 'A comprehensive, free online database containing standardized occupational-specific descriptors, developed under the sponsorship of the US Department of Labor.',
    incorrectAnswers: [
      'A mandatory social networking site for HR professionals in the Philippines.',
      'A local government agency that dictates job descriptions for private companies.',
      'An automated software used to terminate underperforming employees.'
    ],
    rationale: 'O*NET is the primary source of occupational information, providing HR professionals with detailed, standardized job descriptions, skills, and requirements for almost every known profession.'
  },
  {
    id: 'a79',
    setId: 'A',
    category: 'Risk Management',
    text: 'In workplace safety, what does the term "Egress" refer to?',
    correctAnswer: 'A continuous and unobstructed way of exit travel from any point in a building or structure to a public way (a safe means of escape).',
    incorrectAnswers: [
      'The process of an employee officially resigning from the company.',
      'The release of toxic gases into the atmosphere.',
      'The mandatory medical examination required before returning to work.'
    ],
    rationale: 'Proper means of egress are a critical requirement under fire codes and occupational safety standards, ensuring workers can safely evacuate during emergencies.'
  },
  {
    id: 'a80',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Validity Generalization" in employment testing?',
    correctAnswer: 'The assumption that a test which is valid for a specific job in one organization is also valid for the same job in another organization.',
    incorrectAnswers: [
      'The process of making a test so generic that it applies to any job.',
      'The legal requirement to validate a test every single time it is used.',
      'The tendency of interviewers to give generally favorable ratings to all applicants.'
    ],
    rationale: 'If a cognitive ability test has been proven valid for selecting bank tellers in Company A, validity generalization argues it will also be valid for selecting bank tellers in Company B.'
  },
  {
    id: 'a81',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the difference between "Synchronous" and "Asynchronous" e-learning?',
    correctAnswer: 'Synchronous learning happens in real-time with an instructor, while asynchronous learning allows the trainee to access materials and learn at their own pace.',
    incorrectAnswers: [
      'Synchronous learning is online, while asynchronous is in a physical classroom.',
      'Synchronous learning requires a passing grade, while asynchronous does not.',
      'Synchronous learning is for technical skills, while asynchronous is for soft skills.'
    ],
    rationale: 'A live Zoom webinar is synchronous (everyone is synced in time). A pre-recorded video course on a Learning Management System (LMS) is asynchronous.'
  },
  {
    id: 'a82',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is the difference between a "Defined Benefit" plan and a "Defined Contribution" plan in retirement?',
    correctAnswer: 'A defined benefit plan guarantees a specific monthly payout upon retirement, whereas a defined contribution plan specifies how much goes into the account, but the final payout depends on investment performance.',
    incorrectAnswers: [
      'Defined benefit is paid by the employee, while defined contribution is paid by the employer.',
      'Defined benefit is for medical care, while defined contribution is for life insurance.',
      'There is no difference; they are two terms for the same government mandate.'
    ],
    rationale: 'Pensions are defined benefit plans (the employer bears the investment risk). 401(k)s or private provident funds are defined contribution plans (the employee bears the investment risk).'
  },
  {
    id: 'a83',
    setId: 'A',
    category: 'Performance Management',
    text: 'Why is a Behaviorally Anchored Rating Scale (BARS) generally considered superior to a standard Graphic Rating Scale?',
    correctAnswer: 'Because BARS provides specific, observable behavioral examples for each numerical rating, significantly reducing subjective rater bias.',
    incorrectAnswers: [
      'Because BARS is much faster and cheaper to develop and implement.',
      'Because BARS entirely eliminates the need for a manager to conduct the appraisal.',
      'Because BARS only measures financial metrics, ignoring soft skills.'
    ],
    rationale: 'Instead of just rating "Teamwork" as a 4 out of 5, BARS defines a "4" with a specific behavior, like "Consistently volunteers to help colleagues with heavy workloads," making the rating objective and defensible.'
  },

  // ==========================================
  // BATCH 8 - SET B (Generated)
  // ==========================================
  {
    id: 'b74',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, what defines a "Seasonal Employee"?',
    correctAnswer: 'An employee hired to perform work or services that are seasonal in nature, and the employment is strictly for the duration of that specific season.',
    incorrectAnswers: [
      'An employee hired only during the Christmas holiday to sell specific goods.',
      'An employee who is automatically terminated at the end of every calendar year.',
      'An employee who works only when the regular employees are on vacation leave.'
    ],
    rationale: 'Seasonal employees are common in agriculture (e.g., harvesting season). Their employment is legally terminated upon the end of the season, but they are considered on "leave without pay" until re-hired the next season.'
  },
  {
    id: 'b75',
    setId: 'B',
    category: 'Labor Laws',
    text: 'When does a "Casual Employee" legally become a "Regular Employee" under the Labor Code?',
    correctAnswer: 'When they have rendered at least one (1) year of service, whether continuous or broken, with respect to the activity in which they are employed.',
    incorrectAnswers: [
      'After six (6) months of continuous service.',
      'As soon as they pass a performance evaluation given by their supervisor.',
      'Casual employees can never become regular employees by operation of law.'
    ],
    rationale: 'A casual employee performs work NOT usually necessary or desirable to the employer\'s main business. However, the law stipulates that rendering 1 year of service automatically converts them to a regular employee for that specific activity.'
  },
  {
    id: 'b76',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are Barangay Micro Business Enterprises (BMBEs) exempt from paying the minimum wage?',
    correctAnswer: 'Yes, BMBEs are legally exempt from the coverage of the Minimum Wage Law, provided they are properly registered.',
    incorrectAnswers: [
      'No, all businesses without exception must pay the regional minimum wage.',
      'Yes, but only for their first year of operation.',
      'Yes, they are exempt from paying wages entirely and can rely on profit sharing.'
    ],
    rationale: 'Under RA 9178 (BMBE Act), registered micro-enterprises are exempt from minimum wage laws to encourage the formation and growth of small businesses, though they must still provide standard statutory benefits (SSS, PhilHealth).'
  },
  {
    id: 'b77',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Social Security System (SSS), what is the "Sickness Benefit"?',
    correctAnswer: 'A daily cash allowance paid for the number of days a member is unable to work due to sickness or injury, equivalent to 90% of their average daily salary credit.',
    incorrectAnswers: [
      'A full reimbursement of all hospital and medical bills incurred by the employee.',
      'A mandatory paid leave of 30 days provided by the employer, separate from sick leaves.',
      'A one-time lump sum payment of PHP 50,000 for any critical illness.'
    ],
    rationale: 'The SSS Sickness Benefit is an income replacement program. The employer advances the payment (90% of ADSC) to the sick employee and is subsequently reimbursed 100% by the SSS.'
  },
  {
    id: 'b78',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the primary purpose of the Home Development Mutual Fund (HDMF), commonly known as Pag-IBIG?',
    correctAnswer: 'To establish a national savings program and provide affordable shelter financing (housing loans) for Filipino workers.',
    incorrectAnswers: [
      'To provide free healthcare and hospitalization for all employees.',
      'To act as the sole provider of retirement pensions in the Philippines.',
      'To provide emergency cash loans to employers during a financial crisis.'
    ],
    rationale: 'Pag-IBIG was created primarily to answer the need for a national savings program and affordable housing financing, funded through mandatory contributions from both employers and employees.'
  },
  {
    id: 'b79',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the primary significance of DOLE Department Order No. 174 (D.O. 174)?',
    correctAnswer: 'It provides the updated rules and strict regulations implementing the provisions of the Labor Code regarding legitimate job contracting and prohibiting labor-only contracting.',
    incorrectAnswers: [
      'It mandates the immediate regularization of all contractual employees in the Philippines.',
      'It removes all restrictions on companies outsourcing their core business functions.',
      'It establishes the new minimum wage rates for all regions.'
    ],
    rationale: 'D.O. 174 strictly regulates contracting arrangements to ensure that workers’ rights are protected and explicitly defines and bans the practice of labor-only contracting (often called "endo").'
  },
  {
    id: 'b80',
    setId: 'B',
    category: 'Labor Laws',
    text: 'When issuing a Notice to Explain (NTE) to an employee facing disciplinary action, what is the minimum reasonable period given to them to respond, according to DOLE guidelines?',
    correctAnswer: 'At least five (5) calendar days from receipt of the notice.',
    incorrectAnswers: [
      'Twenty-four (24) hours from receipt of the notice.',
      'Forty-eight (48) hours from receipt of the notice.',
      'Ten (10) working days from receipt of the notice.'
    ],
    rationale: 'To satisfy procedural due process, DOLE stipulates that "ample opportunity to be heard" means giving the employee at least 5 calendar days to study the accusations, gather evidence, and submit their written explanation.'
  },
  {
    id: 'b81',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In the dismissal of an employee, what does the "Two-Fold Due Process" requirement mean?',
    correctAnswer: 'The employer must satisfy both Substantive Due Process (a valid just or authorized cause) AND Procedural Due Process (the twin-notice rule and hearing).',
    incorrectAnswers: [
      'The employee must be notified twice by email and twice by registered mail.',
      'The employer must get the approval of both the DOLE Secretary and the NLRC before firing.',
      'The employee has the right to appeal the dismissal twice before it becomes final.'
    ],
    rationale: 'A dismissal is only completely valid if there is a legal reason to do it (substantive) and the correct legal procedure was followed in doing it (procedural).'
  },
  {
    id: 'b82',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What does the "Principle of Co-determination" mean under the Philippine Constitution?',
    correctAnswer: 'The right of workers to participate in policy and decision-making processes of the establishment where they are employed, especially on matters affecting their rights and benefits.',
    incorrectAnswers: [
      'The requirement that an employee’s salary must be determined by both the CEO and the HR Director.',
      'The rule that both the employer and the government must determine the minimum wage.',
      'The principle that male and female employees must receive the exact same salary.'
    ],
    rationale: 'Co-determination gives workers a voice (usually through Labor-Management Councils or Unions) in formulating policies that directly affect their welfare, rather than management making unilateral decisions.'
  },
  {
    id: 'b83',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following is a limitation to the Visitorial and Enforcement Power of the DOLE Secretary (or Labor Inspector)?',
    correctAnswer: 'It cannot be exercised if the employer-employee relationship no longer exists and a case has already been filed before the NLRC.',
    incorrectAnswers: [
      'It cannot be exercised on companies with more than 1,000 employees.',
      'It cannot be exercised during the month of December.',
      'It requires a search warrant issued by a regional trial court judge.'
    ],
    rationale: 'If the employee has already been terminated (employer-employee relationship severed) and they have filed an illegal dismissal case with the NLRC, the Labor Arbiter, not the DOLE Inspector, has jurisdiction.'
  },
  // ==========================================
  // BATCH 9 - SET A (Generated)
  // ==========================================
  {
    id: 'a84',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Panel Interview"?',
    correctAnswer: 'An interview where a single candidate is interviewed by multiple interviewers simultaneously.',
    incorrectAnswers: [
      'An interview where multiple candidates are interviewed by a single manager.',
      'An interview conducted exclusively through a specialized software panel.',
      'A series of back-to-back one-on-one interviews over a full day.'
    ],
    rationale: 'Panel interviews (or board interviews) allow multiple stakeholders (e.g., HR, the hiring manager, and a team member) to evaluate the candidate at the same time, reducing individual bias.'
  },
  {
    id: 'a85',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Microlearning"?',
    correctAnswer: 'A training approach that delivers content in short, highly focused, bite-sized bursts (e.g., 3-5 minute videos) designed to meet a specific learning outcome.',
    incorrectAnswers: [
      'Training that is strictly limited to entry-level or "micro" positions.',
      'A year-long training program broken down into weekly 4-hour sessions.',
      'Teaching employees how to use microscopes and other precision equipment.'
    ],
    rationale: 'Microlearning caters to modern attention spans and busy schedules, allowing employees to quickly learn and apply a specific skill right when they need it.'
  },
  {
    id: 'a86',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In HR, what does the concept of "Total Rewards" encompass?',
    correctAnswer: 'Everything the employee perceives to be of value resulting from the employment relationship, including base pay, benefits, work-life balance, performance recognition, and career development.',
    incorrectAnswers: [
      'Only the exact monetary value of the employee’s base salary and cash bonuses.',
      'The total amount of statutory government benefits mandated by law.',
      'The sum total of physical gifts (like watches or plaques) given during retirement.'
    ],
    rationale: 'Total Rewards is a holistic strategy. It recognizes that employees are motivated by more than just money; they also value non-financial rewards like flexible hours, training, and a positive culture.'
  },
  {
    id: 'a87',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Contrast Error" in performance evaluation?',
    correctAnswer: 'A bias where an employee’s rating is unfairly influenced by the performance of the person evaluated just before them, rather than by objective standards.',
    incorrectAnswers: [
      'Rating an employee poorly because their personality contrasts with the manager\'s.',
      'Evaluating an employee solely based on how they dress compared to the dress code.',
      'Giving different ratings to two employees who perform the exact same job.'
    ],
    rationale: 'If a manager interviews an average candidate immediately after interviewing a truly terrible one, the average candidate might be rated exceptionally high simply by contrast, not actual merit.'
  },
  {
    id: 'a88',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the primary purpose of "Job Evaluation"?',
    correctAnswer: 'To systematically determine the relative internal worth or value of jobs within an organization to establish a fair and equitable pay structure.',
    incorrectAnswers: [
      'To formally appraise an individual employee’s performance at the end of the year.',
      'To decide which employees should be promoted or fired.',
      'To write the initial draft of a job description for recruitment.'
    ],
    rationale: 'Job Evaluation (using methods like point factor, ranking, or classification) compares jobs against each other (e.g., is the IT Manager job "worth" more to the company than the HR Manager job?) to ensure internal equity in pay.'
  },
  {
    id: 'a89',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is the focus of "Ergonomics" in the workplace?',
    correctAnswer: 'Designing and arranging workspaces, tools, and equipment so that they fit the physical capabilities and limitations of the worker, thereby preventing musculoskeletal disorders.',
    incorrectAnswers: [
      'The study of how financial risks impact employee compensation.',
      'Designing office layouts strictly to maximize aesthetic appeal to clients.',
      'The psychological study of employee motivation and morale.'
    ],
    rationale: 'Ergonomics (human factors engineering) aims to reduce physical stress on employees (e.g., providing adjustable chairs, monitor stands, or proper lifting equipment) to prevent injuries like carpal tunnel syndrome.'
  },
  {
    id: 'a90',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What does ATS stand for in recruitment technology?',
    correctAnswer: 'Applicant Tracking System',
    incorrectAnswers: [
      'Automated Testing Software',
      'Advanced Talent Sourcing',
      'Applicant Training Schedule'
    ],
    rationale: 'An ATS is software that manages the recruiting process, from posting job ads and collecting resumes to screening candidates and scheduling interviews.'
  },
  {
    id: 'a91',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the main goal of "Succession Planning"?',
    correctAnswer: 'To proactively identify and develop high-potential employees to fill key leadership positions when current leaders leave or retire.',
    incorrectAnswers: [
      'To plan the sequence of tasks an employee must do during their shift.',
      'To determine the legal heirs of an employee’s final pay upon death.',
      'To map out the physical evacuation routes during a fire drill.'
    ],
    rationale: 'Succession planning ensures business continuity. It mitigates the risk of a sudden leadership vacuum by having trained, ready-to-promote employees waiting in the pipeline.'
  },
  {
    id: 'a92',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Broadbanding" in compensation?',
    correctAnswer: 'Collapsing multiple traditional salary grades into a few wide salary bands to provide more flexibility in pay and encourage lateral career moves.',
    incorrectAnswers: [
      'Providing high-speed internet stipends to all remote employees.',
      'Paying all employees in a specific department the exact same flat rate.',
      'Expanding the company’s benefit plan to include international travel.'
    ],
    rationale: 'Broadbanding replaces, for example, 15 narrow salary grades with 4 or 5 wide bands. This allows managers to reward employees for taking on new tasks without needing a formal promotion to a new grade.'
  },
  {
    id: 'a93',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Leniency Error" in performance appraisals?',
    correctAnswer: 'The tendency of a rater to consistently give overly high ratings to all employees, ignoring objective performance issues.',
    incorrectAnswers: [
      'The tendency to consistently give overly low, harsh ratings to everyone.',
      'Allowing an employee to skip the appraisal if they are busy.',
      'Evaluating an employee based on a single positive incident.'
    ],
    rationale: 'Managers often commit leniency errors because they want to avoid conflict, be liked by their staff, or ensure their team gets the maximum possible bonuses.'
  },

  // ==========================================
  // BATCH 9 - SET B (Generated)
  // ==========================================
  {
    id: 'b84',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Labor Code, what are the distinct terms of a Collective Bargaining Agreement (CBA)?',
    correctAnswer: 'The representation aspect is valid for 5 years, while all other provisions (economic/non-economic) are renegotiated every 3 years.',
    incorrectAnswers: [
      'The entire CBA is valid for 10 years without renegotiation.',
      'The entire CBA must be renegotiated every single year.',
      'The representation aspect is valid for 3 years, and economic provisions for 5 years.'
    ],
    rationale: 'To maintain industrial peace, the exclusive bargaining agent status (representation) cannot be challenged for 5 years. However, wages and benefits (economic provisions) must be renegotiated after 3 years.'
  },
  {
    id: 'b85',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In employment discrimination cases, what does BFOQ stand for?',
    correctAnswer: 'Bona Fide Occupational Qualification',
    incorrectAnswers: [
      'Basic Foundation of Quality',
      'Bureau of Foreign Occupational Quotas',
      'Business Focused Operational Query'
    ],
    rationale: 'A BFOQ is a legitimate, legally recognized exception to discrimination laws. For example, hiring only female actors for a specific female role in a movie is a valid BFOQ based on sex.'
  },
  {
    id: 'b86',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are waivers or "Quitclaims" signed by resigning/terminated employees valid in the Philippines?',
    correctAnswer: 'Yes, but they are generally frowned upon. They are only valid if voluntarily signed without fraud/duress, and the consideration (amount paid) is reasonable and credible.',
    incorrectAnswers: [
      'No, the Supreme Court has declared all quitclaims absolutely void and illegal.',
      'Yes, they are always valid regardless of how much was paid to the employee.',
      'Yes, but only if the document is notarized by the company’s internal lawyer.'
    ],
    rationale: 'While valid if executed fairly, quitclaims do not bar an employee from filing a case later if they can prove they were forced to sign it or if the settlement amount was shockingly disproportionate to what they were legally owed.'
  },
  {
    id: 'b87',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In labor law, what is the legal difference between simple AWOL (Absence Without Official Leave) and "Abandonment of Work"?',
    correctAnswer: 'AWOL is merely being absent without permission; Abandonment requires AWOL PLUS a clear, deliberate intent by the employee to sever the employer-employee relationship.',
    incorrectAnswers: [
      'AWOL is absence for 1 day, while Abandonment is absence for 3 days.',
      'There is no difference; they mean exactly the same thing.',
      'AWOL applies to private employees, while Abandonment applies to government workers.'
    ],
    rationale: 'To validly dismiss for abandonment, the employer must prove both the unjustified absence AND overt acts showing the employee’s definite intention not to return (e.g., taking a full-time job elsewhere).'
  },
  {
    id: 'b88',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What does the "Principle of Non-Diminution of Benefits" mean?',
    correctAnswer: 'An employer cannot unilaterally eliminate or reduce benefits that have already ripened into a vested right through established company practice, policy, or agreement.',
    incorrectAnswers: [
      'An employer must automatically increase benefits by 10% every year.',
      'An employer cannot terminate an employee who receives high benefits.',
      'An employer cannot lower the price of their products.'
    ],
    rationale: 'Article 100 of the Labor Code states that nothing shall be construed to eliminate or diminish supplements/benefits. If a company has been giving a monthly rice subsidy for years voluntarily, it becomes a binding company practice that cannot be withdrawn.'
  },
  {
    id: 'b89',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Compressed Workweek" (CWW) scheme?',
    correctAnswer: 'An arrangement where the normal workweek is reduced to less than 6 days, but the normal work hours per day are increased (up to 12 hours) without the payment of overtime premiums.',
    incorrectAnswers: [
      'Working 8 hours a day for 7 straight days without rest.',
      'Compressing the workload of two employees onto one employee.',
      'Allowing employees to work from home exclusively.'
    ],
    rationale: 'Under DOLE advisories, a CWW (e.g., working 4 days at 10 hours/day) is valid if voluntarily agreed upon by the majority of employees, does not exceed 48 hours a week, and does not pose health risks.'
  },
  {
    id: 'b90',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under RA 11313 (Safe Spaces Act or Bawal Bastos Law), what is required of employers regarding gender-based sexual harassment in the workplace?',
    correctAnswer: 'Employers are mandated to create a Committee on Decorum and Investigation (CODI) to investigate and address complaints of gender-based sexual harassment.',
    incorrectAnswers: [
      'Employers must mandate separate office buildings for men and women.',
      'Employers must ban all office romances.',
      'Employers are only required to post a "No Harassment" sign in the lobby.'
    ],
    rationale: 'The Safe Spaces Act expands previous anti-harassment laws by penalizing gender-based harassment (including sexist remarks and homophobic slurs) and strictly requires employers to have a functional CODI to handle complaints.'
  },
  {
    id: 'b91',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum duration an employee can be placed on "Floating Status" (bona fide suspension of business operations) before it becomes constructive dismissal?',
    correctAnswer: 'Six (6) months.',
    incorrectAnswers: [
      'One (1) month.',
      'Three (3) months.',
      'One (1) year.'
    ],
    rationale: 'Under Article 301, an employer can suspend operations (e.g., lack of raw materials, client pulled out) for up to 6 months. If the employee is not recalled to work after 6 months, they are deemed permanently terminated and entitled to separation pay.'
  },
  {
    id: 'b92',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the statutory rate for Night Shift Differential pay?',
    correctAnswer: 'Not less than ten percent (10%) of the employee’s regular wage for each hour of work performed between 10:00 PM and 6:00 AM.',
    incorrectAnswers: [
      'Twenty percent (20%) of the regular wage.',
      'Twenty-five percent (25%) of the regular wage.',
      'Fifty percent (50%) of the regular wage.'
    ],
    rationale: 'Article 86 mandates a 10% premium for night work to compensate for the physical and biological strain of working during normal sleeping hours.'
  },
  {
    id: 'b93',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Can Supervisory employees join the same labor union as the Rank-and-File employees?',
    correctAnswer: 'No, supervisory employees cannot join the rank-and-file union, but they may form their own separate union.',
    incorrectAnswers: [
      'Yes, all employees can join the exact same union.',
      'No, supervisory employees are absolutely banned from joining any union.',
      'Yes, but they must pay double the union dues.'
    ],
    rationale: 'To prevent conflicts of interest (since supervisors evaluate and discipline rank-and-file), the law prohibits them from mixing. Managerial employees, however, are absolutely barred from joining or forming ANY labor union.'
  },
  // ==========================================
  // BATCH 10 - SET A (Generated)
  // ==========================================
  {
    id: 'a94',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the "Attrition Rate" in human resources?',
    correctAnswer: 'The rate at which employees leave a workforce over a given period of time, usually expressed as a percentage of the total workforce.',
    incorrectAnswers: [
      'The rate at which new candidates apply for a single job opening.',
      'The percentage of employees who fail their annual physical examination.',
      'The rate at which a company’s physical equipment depreciates.'
    ],
    rationale: 'Attrition rate (or turnover rate) is a key HR metric. High attrition indicates potential issues with compensation, management, or company culture.'
  },
  {
    id: 'a95',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Gamification" in the context of corporate training?',
    correctAnswer: 'The application of game-design elements (like points, badges, and leaderboards) to non-game contexts, such as learning modules, to increase engagement.',
    incorrectAnswers: [
      'Requiring employees to play video games during their break time to reduce stress.',
      'Turning the entire performance appraisal process into a literal board game.',
      'Using virtual reality exclusively for all training programs.'
    ],
    rationale: 'Gamification taps into psychological motivators like competition and achievement to make dry or mandatory training more engaging and memorable.'
  },
  {
    id: 'a96',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Golden Parachute"?',
    correctAnswer: 'A substantial severance agreement that provides massive benefits to top executives if they are terminated, often due to a corporate merger or takeover.',
    incorrectAnswers: [
      'A retirement plan where employees receive physical gold bars instead of cash.',
      'A hazardous duty pay given strictly to employees working in aviation.',
      'A company-sponsored skydiving trip given as a team-building reward.'
    ],
    rationale: 'Golden parachutes are highly lucrative packages (cash bonuses, stock options) designed to cushion the fall of ousted executives, though they are often criticized by shareholders.'
  },
  {
    id: 'a97',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is generally considered the most effective primary purpose for utilizing 360-Degree Feedback?',
    correctAnswer: 'Employee development and coaching, rather than tying it directly to compensation or disciplinary actions.',
    incorrectAnswers: [
      'Determining exactly how much cash bonus an employee should receive.',
      'Providing legal grounds for immediate termination without cause.',
      'Forcing employees to publicly criticize their managers in team meetings.'
    ],
    rationale: 'If 360-degree feedback is tied strictly to pay, peers and subordinates often manipulate their ratings (either colluding to give high scores or sabotaging rivals). It is best used strictly for developmental insight.'
  },
  {
    id: 'a98',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the difference between traditional Job Analysis and "Competency Modeling"?',
    correctAnswer: 'Job analysis focuses on the specific tasks and duties of a job, while competency modeling focuses on the broader behavioral traits and skills required across the organization.',
    incorrectAnswers: [
      'Job analysis is used only for executives, while competency modeling is used for entry-level roles.',
      'Competency modeling is a mathematical formula, while job analysis is qualitative.',
      'There is no difference; they are synonymous terms.'
    ],
    rationale: 'Competency modeling is more strategic and future-focused. Instead of asking "What are the tasks of this role?", it asks "What behavioral competencies (e.g., leadership, agility) does our company need to succeed?"'
  },
  {
    id: 'a99',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is an Employee Assistance Program (EAP)?',
    correctAnswer: 'A voluntary, work-based program that offers free and confidential assessments, short-term counseling, and referrals to employees with personal or work-related problems.',
    incorrectAnswers: [
      'A financial program that gives interest-free loans to employees buying houses.',
      'A union-led program that assists workers in filing lawsuits against the company.',
      'A mentoring program that strictly teaches technical software skills.'
    ],
    rationale: 'EAPs help manage risks associated with mental health, substance abuse, and personal stress, which can lead to absenteeism, accidents, or reduced productivity if left unaddressed.'
  },
  {
    id: 'a100',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'In the context of hiring practices, what is the difference between "Nepotism" and "Cronyism"?',
    correctAnswer: 'Nepotism is showing favoritism to relatives or family members, while cronyism is showing favoritism to friends or associates.',
    incorrectAnswers: [
      'Nepotism involves financial bribery, while cronyism involves verbal recommendations.',
      'Nepotism is legal, while cronyism is strictly illegal in all private companies.',
      'Nepotism applies only to hiring, while cronyism applies only to firing.'
    ],
    rationale: 'Both are forms of unfair favoritism that bypass merit. Nepotism focuses on blood/marriage ties, while cronyism focuses on social friendships.'
  },
  {
    id: 'a101',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the primary benefit of "Cross-Training" employees?',
    correctAnswer: 'It increases workforce flexibility by ensuring multiple people know how to perform critical tasks, reducing bottlenecks when someone is absent.',
    incorrectAnswers: [
      'It forces employees to work overtime without additional pay.',
      'It legally changes an employee’s job title to a higher rank immediately.',
      'It allows the company to entirely eliminate the HR department.'
    ],
    rationale: 'Cross-training creates a more agile workforce. If the only person who knows how to run payroll gets sick, cross-training ensures someone else can step in seamlessly.'
  },
  {
    id: 'a102',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Hazard Pay"?',
    correctAnswer: 'Additional compensation provided to employees who perform duties that involve physical danger or extreme discomfort.',
    incorrectAnswers: [
      'A penalty deducted from an employee\'s salary if they cause a workplace accident.',
      'A standard bonus given to all employees during the flu season.',
      'Severance pay given to employees who are fired for creating a safety hazard.'
    ],
    rationale: 'Hazard pay compensates workers for taking on risks beyond standard occupational norms (e.g., healthcare workers during a pandemic, miners, or combat zone contractors).'
  },
  {
    id: 'a103',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Forced Distribution" (or Stack Ranking) method of performance appraisal?',
    correctAnswer: 'A system where managers are required to place a predetermined percentage of employees into specific performance categories (e.g., 20% top, 70% middle, 10% bottom).',
    incorrectAnswers: [
      'A system where employees evaluate their managers anonymously.',
      'A random lottery system used to determine who gets a bonus.',
      'A method where all employees are forced to receive the exact same average rating.'
    ],
    rationale: 'While forced distribution prevents leniency bias (managers can\'t rate everyone as "excellent"), it can create a cutthroat culture and force the ranking of solid performers into "bottom" tiers just to meet the quota.'
  },

  // ==========================================
  // BATCH 10 - SET B (Generated)
  // ==========================================
  {
    id: 'b94',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Are domestic workers (Kasambahays) legally entitled to receive a 13th-month pay?',
    correctAnswer: 'Yes, under the Kasambahay Law (RA 10361), they are strictly entitled to a 13th-month pay provided they have rendered at least one (1) month of service.',
    incorrectAnswers: [
      'No, the 13th-month pay law applies only to corporate employees.',
      'Yes, but only if they have worked for the same employer for 5 continuous years.',
      'No, they are only entitled to a Christmas bonus at the employer\'s discretion.'
    ],
    rationale: 'The Kasambahay Law elevated the rights of domestic workers, explicitly mandating statutory benefits including 13th-month pay, SSS, PhilHealth, and Pag-IBIG.'
  },
  {
    id: 'b95',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the DOLE "SEnA" (Single Entry Approach)?',
    correctAnswer: 'An administrative approach providing a speedy, impartial, and inexpensive 30-day mandatory conciliation-mediation process for all labor issues before they can mature into formal cases.',
    incorrectAnswers: [
      'A strict policy that allows employees only one chance to file a complaint in their lifetime.',
      'A physical single door in DOLE offices where all complaints must be dropped off.',
      'A rule that prevents unions from filing more than one grievance per year.'
    ],
    rationale: 'SEnA aims to declog the labor courts by requiring parties to attempt settlement amicably with a DOLE Desk Officer for a maximum of 30 days before formal arbitration begins.'
  },
  {
    id: 'b96',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum legal duration that an employer can place an employee under "Preventive Suspension" pending investigation?',
    correctAnswer: 'A maximum of thirty (30) days.',
    incorrectAnswers: [
      'A maximum of fourteen (14) days.',
      'A maximum of sixty (60) days.',
      'A maximum of six (6) months.'
    ],
    rationale: 'Preventive suspension is not a penalty; it is a measure to protect company property/lives during an investigation. If it lasts longer than 30 days, the employer must reinstate the employee or start paying their salary while the investigation continues.'
  },
  {
    id: 'b97',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following scenarios is a classic example of "Constructive Dismissal"?',
    correctAnswer: 'An employer transferring an employee to a significantly lower-ranking position with reduced pay, making continued employment unbearable.',
    incorrectAnswers: [
      'An employee resigning voluntarily because they found a better-paying job.',
      'An employer firing an employee for caught stealing company funds.',
      'An employer enforcing a strict but legal dress code policy.'
    ],
    rationale: 'Constructive dismissal happens when an employer creates a hostile or unbearable work environment (like a demotion without cause), effectively forcing the employee to resign. The law treats this as an illegal dismissal.'
  },
  {
    id: 'b98',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Can a six-month Probationary Period be legally extended?',
    correctAnswer: 'Yes, but only if both the employer and the employee mutually agree to the extension BEFORE the initial six-month period expires.',
    incorrectAnswers: [
      'No, the Labor Code strictly forbids extending a probationary period under any circumstance.',
      'Yes, the employer can unilaterally extend it up to two years without the employee\'s consent.',
      'Yes, but only by order of the DOLE Secretary.'
    ],
    rationale: 'While generally 6 months, it can be extended if the nature of the work requires a longer training period to determine fitness, provided the employee consents to this extension prior to becoming regular by default.'
  },
  {
    id: 'b99',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are part-time hourly-paid teachers in private schools legally entitled to statutory Holiday Pay?',
    correctAnswer: 'No, hourly-paid private school teachers are generally exempt from statutory holiday pay unless otherwise provided by school policy or contract.',
    incorrectAnswers: [
      'Yes, all teachers in the Philippines must receive double pay on regular holidays.',
      'Yes, but only for Christmas and New Year.',
      'No, because teachers are classified as managerial employees.'
    ],
    rationale: 'The Supreme Court has ruled that part-time teachers who are paid on an hourly basis are not entitled to holiday pay, as their employment contracts are essentially "no work, no pay".'
  },
  {
    id: 'b100',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under Philippine Labor Law, what are the standard optional and compulsory retirement ages for private employees?',
    correctAnswer: 'Optional retirement at sixty (60) years old, and Compulsory retirement at sixty-five (65) years old.',
    incorrectAnswers: [
      'Optional at fifty (50), Compulsory at sixty (60).',
      'Optional at fifty-five (55), Compulsory at seventy (70).',
      'Optional at sixty-five (65), Compulsory at seventy-five (75).'
    ],
    rationale: 'Upon reaching 60 (with at least 5 years of service), an employee MAY retire. Upon reaching 65, the employer CAN forcefully retire the employee, and they are entitled to retirement pay.'
  },
  {
    id: 'b101',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'How is the minimum statutory Retirement Pay calculated in the absence of a company retirement plan?',
    correctAnswer: 'Minimum of 22.5 days of salary for every year of service.',
    incorrectAnswers: [
      'Minimum of 15 days of salary for every year of service.',
      'Minimum of 30 days of salary for every year of service.',
      'A flat lump sum of PHP 100,000 regardless of years of service.'
    ],
    rationale: 'The 22.5 days formula consists of: 15 days basic salary + 5 days service incentive leave (SIL) + 2.5 days (1/12 of 13th month pay).'
  },
  {
    id: 'b102',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the employment status of Filipino Seafarers working on international vessels?',
    correctAnswer: 'They are considered contractual employees whose employment terminates upon the expiration of their POEA-approved contract.',
    incorrectAnswers: [
      'They are considered regular employees of the foreign vessel owner.',
      'They are considered probationary employees for the first 5 years.',
      'They are considered government employees managed by the POEA.'
    ],
    rationale: 'The Supreme Court has consistently ruled that seafarers are contractual employees. They do not attain regular status, regardless of how many times their contracts are renewed by the same manning agency.'
  },
  {
    id: 'b103',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the primary legal limitation on "Management Prerogative"?',
    correctAnswer: 'It must be exercised in good faith, with due regard to the rights of labor, and not for the purpose of circumventing the law or defeating unionism.',
    incorrectAnswers: [
      'It must be approved by a 2/3 vote of the employee union.',
      'It can only be exercised by the CEO and cannot be delegated to HR.',
      'It must be published in a national newspaper before taking effect.'
    ],
    rationale: 'While employers have the inherent right to run their business (hiring, firing, transferring, setting policies), this prerogative is not absolute and cannot be used maliciously to oppress workers.'
  },
  // ==========================================
  // BATCH 11 - SET A (Generated)
  // ==========================================
  {
    id: 'a104',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the key difference between a "Behavioral Interview" and a "Situational Interview"?',
    correctAnswer: 'Behavioral interviews ask how the candidate handled a situation in the past, while situational interviews ask how they would handle a hypothetical future situation.',
    incorrectAnswers: [
      'Behavioral interviews focus on technical skills, while situational interviews focus on personality.',
      'Behavioral interviews are conducted by HR, while situational interviews are conducted by the CEO.',
      'There is no difference; the terms are completely synonymous.'
    ],
    rationale: 'Behavioral ("Tell me about a time when you...") operates on the premise that past behavior predicts future behavior. Situational ("What would you do if...") tests problem-solving in real-time.'
  },
  {
    id: 'a105',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In educational psychology and training design, what is "Bloom’s Taxonomy"?',
    correctAnswer: 'A hierarchical framework used to classify educational learning objectives into levels of complexity and specificity, from basic recall to higher-order creation.',
    incorrectAnswers: [
      'A financial model used to calculate the return on investment of a training program.',
      'A biological assessment used to determine an employee\'s physical fitness for a job.',
      'A legal framework dictating the mandatory hours of training required per year.'
    ],
    rationale: 'Trainers use Bloom’s Taxonomy (Remember, Understand, Apply, Analyze, Evaluate, Create) to ensure they are designing training that moves beyond just memorization into actual skill application.'
  },
  {
    id: 'a106',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Piece-Rate Pay"?',
    correctAnswer: 'A compensation system where an employee is paid a fixed rate for each unit produced or action performed, regardless of the time it takes.',
    incorrectAnswers: [
      'Paying an employee based strictly on the number of hours they log on the clock.',
      'A system where employees receive a piece of the company’s annual profits.',
      'Paying an employee in physical goods or "pieces" rather than cash.'
    ],
    rationale: 'Piece-rate (or piece-work) incentivizes speed and volume, commonly used in manufacturing or garments, though minimum wage laws still apply if quotas are met.'
  },
  {
    id: 'a107',
    setId: 'A',
    category: 'Performance Management',
    text: 'What does the acronym "MBO" stand for in performance management?',
    correctAnswer: 'Management by Objectives',
    incorrectAnswers: [
      'Measurement of Business Outcomes',
      'Managers Based Overseas',
      'Mandatory Behavioral Observation'
    ],
    rationale: 'MBO, popularized by Peter Drucker, is a model where managers and employees collaboratively set, record, and monitor specific goals for a specific period, aligning individual goals with corporate objectives.'
  },
  {
    id: 'a108',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the "Position Analysis Questionnaire" (PAQ)?',
    correctAnswer: 'A highly structured, quantitative job analysis questionnaire that evaluates job skill level and basic characteristics of applicants for a set match of employment opportunity.',
    incorrectAnswers: [
      'A casual interview guide used only during the final interview stage.',
      'A survey given to customers to evaluate an employee’s customer service.',
      'A medical questionnaire given to applicants to check for pre-existing conditions.'
    ],
    rationale: 'The PAQ contains 194 items evaluating Information Input, Mental Processes, Work Output, Relationships, Job Context, and Other Characteristics, making it one of the most scientifically rigorous job analysis tools.'
  },
  {
    id: 'a109',
    setId: 'A',
    category: 'Risk Management',
    text: 'In the Philippines, what government body is the primary equivalent to the US OSHA (Occupational Safety and Health Administration) in terms of formulating safety standards?',
    correctAnswer: 'The Occupational Safety and Health Center (OSHC) under the Department of Labor and Employment (DOLE).',
    incorrectAnswers: [
      'The Department of Health (DOH).',
      'The Philippine National Police (PNP).',
      'The National Bureau of Investigation (NBI).'
    ],
    rationale: 'The OSHC is the authority on research, training, and formulation of OSH standards in the Philippines to prevent work-related injuries and illnesses.'
  },
  {
    id: 'a110',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What does the term "Gig Economy" refer to in modern workforce planning?',
    correctAnswer: 'A labor market characterized by the prevalence of short-term contracts or freelance work as opposed to permanent jobs.',
    incorrectAnswers: [
      'An economy driven solely by musicians and entertainment professionals.',
      'A corporate policy that bans the use of temporary workers entirely.',
      'A massive hiring surge that happens only during economic booms.'
    ],
    rationale: 'The gig economy relies heavily on independent contractors and freelancers (e.g., Uber drivers, Upwork freelancers), fundamentally changing how HR approaches talent acquisition and benefits.'
  },
  {
    id: 'a111',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What are the four levels of evaluation in Kirkpatrick’s Model?',
    correctAnswer: 'Reaction, Learning, Behavior, and Results.',
    incorrectAnswers: [
      'Planning, Execution, Monitoring, and Closing.',
      'Pre-test, Mid-test, Post-test, and Final Exam.',
      'Financial, Customer, Internal Processes, and Learning/Growth.'
    ],
    rationale: 'Kirkpatrick’s model is the standard for evaluating training: (1) Did they like it? (2) Did they learn it? (3) Are they using it on the job? (4) Did it impact the business bottom line?'
  },
  {
    id: 'a112',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is an "ESOP" (Employee Stock Ownership Plan)?',
    correctAnswer: 'An employee benefit plan that gives workers ownership interest in the company in the form of shares of stock.',
    incorrectAnswers: [
      'A government-mandated emergency savings program.',
      'A plan where employees must purchase company products at full retail price.',
      'A specialized health insurance plan for executive officers only.'
    ],
    rationale: 'ESOPs align the interests of employees with those of shareholders, as employees benefit directly (through stock value appreciation) when the company performs well.'
  },
  {
    id: 'a113',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Spillover Effect" (or carry-over effect) in performance appraisal?',
    correctAnswer: 'A bias where a manager allows an employee’s past performance ratings to unjustifiably influence their current appraisal.',
    incorrectAnswers: [
      'When an employee’s bad mood spills over and affects the rest of the team.',
      'When a company’s financial losses cause them to skip performance appraisals.',
      'Rating an employee highly because they are physically attractive.'
    ],
    rationale: 'If an employee was a top performer three years ago, a manager suffering from the spillover effect might continue giving them top ratings today, even if their current performance has drastically dropped.'
  },

  // ==========================================
  // BATCH 11 - SET B (Generated)
  // ==========================================
  {
    id: 'b104',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Expanded Maternity Leave Law (RA 11210), how many days of paid leave is a female employee entitled to for a live birth?',
    correctAnswer: 'One hundred five (105) days, with an option to extend for an additional 30 days without pay.',
    incorrectAnswers: [
      'Sixty (60) days for normal delivery, seventy-eight (78) for caesarian.',
      'One hundred twenty (120) days regardless of the mode of delivery.',
      'Ninety (90) days for all types of deliveries.'
    ],
    rationale: 'RA 11210 significantly expanded the benefit from the old 60/78 days to a uniform 105 days of paid leave for live births, regardless of whether it was normal or caesarian delivery, plus an extra 15 days if the mother is a solo parent.'
  },
  {
    id: 'b105',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Paternity Leave Act of 1996 (RA 8187), how many days of paid leave is a married male employee entitled to?',
    correctAnswer: 'Seven (7) days with full pay for the first four deliveries of the legitimate spouse.',
    incorrectAnswers: [
      'Ten (10) days with full pay for unlimited deliveries.',
      'Fourteen (14) days with half pay.',
      'Thirty (30) days with full pay.'
    ],
    rationale: 'The law strictly limits paternity leave to 7 days, applies only to married men living with their legitimate spouses, and is capped at the first four deliveries or miscarriages.'
  },
  {
    id: 'b106',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Magna Carta of Women (RA 9710), what is the maximum duration of the Special Leave Benefit for gynecological disorders?',
    correctAnswer: 'Two (2) months with full pay.',
    incorrectAnswers: [
      'One (1) month with full pay.',
      'Three (3) months with half pay.',
      'Six (6) months without pay.'
    ],
    rationale: 'Following surgery caused by gynecological disorders, a qualified female employee (having 6 months of continuous service in the last 12 months) is entitled to a special leave of up to 2 months with full pay.'
  },
  {
    id: 'b107',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Anti-Violence Against Women and Their Children Act (RA 9262), how many days of paid leave is a victim entitled to?',
    correctAnswer: 'Ten (10) days of paid leave, which is extendible depending on the protection order.',
    incorrectAnswers: [
      'Five (5) days of paid leave.',
      'Thirty (30) days of paid leave.',
      'Sixty (60) days of paid leave.'
    ],
    rationale: 'The 10-day VAWC leave allows female employees who are victims of violence to attend to medical and legal concerns. The employer cannot require prior notice if it risks the employee’s safety, though a certification from the barangay or court is required.'
  },
  {
    id: 'b108',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the required separation pay for an employee terminated due to REDUNDANCY?',
    correctAnswer: 'At least one (1) month pay, or one (1) month pay for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One-half (1/2) month pay for every year of service.',
      'Two (2) months pay for every year of service.',
      'There is no separation pay required for redundancy.'
    ],
    rationale: 'Redundancy (when the company hires more people than necessary, or machinery replaces a job) requires a higher separation pay (1 month/year) compared to retrenchment (which is 1/2 month/year).'
  },
  {
    id: 'b109',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the required separation pay for an employee terminated due to RETRENCHMENT to prevent losses?',
    correctAnswer: 'At least one (1) month pay, or one-half (1/2) month pay for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One (1) month pay for every year of service.',
      'One-fourth (1/4) month pay for every year of service.',
      'Retrenchment automatically forfeits all separation pay.'
    ],
    rationale: 'Because retrenchment implies the company is suffering actual or imminent financial losses, the law reduces the separation pay burden to 1/2 month per year of service to prevent the company from going completely bankrupt.'
  },
  {
    id: 'b110',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the minimum tenure required for a rank-and-file employee to be entitled to a 13th-month pay?',
    correctAnswer: 'At least one (1) month of service during the calendar year.',
    incorrectAnswers: [
      'At least six (6) months of service.',
      'At least one (1) full year of continuous service.',
      'They are entitled immediately on day one.'
    ],
    rationale: 'Under PD 851, any rank-and-file employee who has worked for at least one month during the calendar year is entitled to a proportionate 13th-month pay.'
  },
  {
    id: 'b111',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Where in the Philippine Constitution is the Right to Self-Organization explicitly guaranteed?',
    correctAnswer: 'Article III, Section 8 (Bill of Rights) and Article XIII, Section 3 (Social Justice and Human Rights).',
    incorrectAnswers: [
      'Article I, Section 1 (National Territory).',
      'Article VII, Section 1 (Executive Department).',
      'It is not in the Constitution; it is only in the Labor Code.'
    ],
    rationale: 'The Constitution explicitly guarantees the right of all workers to self-organization, collective bargaining and negotiations, and peaceful concerted activities, including the right to strike in accordance with law.'
  },
  {
    id: 'b112',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Where must a Collective Bargaining Agreement (CBA) be registered to be legally binding and bar other union elections?',
    correctAnswer: 'With the Department of Labor and Employment (DOLE) through the Bureau of Labor Relations (BLR) or Regional Office.',
    incorrectAnswers: [
      'With the Securities and Exchange Commission (SEC).',
      'With the Local Government Unit (City Hall).',
      'With the Supreme Court of the Philippines.'
    ],
    rationale: 'Registration with DOLE/BLR makes the CBA a public contract, triggering the "Contract Bar Rule," which prevents other labor unions from filing a petition for a certification election during the first 5 years of the CBA.'
  },
  {
    id: 'b113',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What are the two primary elements that define illegal "Labor-Only Contracting"?',
    correctAnswer: 'The contractor lacks substantial capital or investment, OR the contractor does not exercise the right of control over the performance of the work.',
    incorrectAnswers: [
      'The contractor operates outside the Philippines, AND pays less than minimum wage.',
      'The contractor has more than 500 employees, OR operates in multiple regions.',
      'The contractor refuses to pay taxes, AND refuses to provide uniforms.'
    ],
    rationale: 'If the contractor is just a recruiter with no real capital/equipment (acting as a dummy), or if the principal company\'s managers are the ones directly commanding the contractor\'s workers, it is illegal labor-only contracting.'
  },
  // ==========================================
  // BATCH 12 - SET A (Generated)
  // ==========================================
  {
    id: 'a114',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Graphology" in the context of employment testing?',
    correctAnswer: 'The analysis of an applicant\'s handwriting to infer psychological traits and personality characteristics.',
    incorrectAnswers: [
      'The use of lie detector tests during the interview process.',
      'The statistical analysis of an applicant’s college grades.',
      'A physical medical examination measuring heart rate under stress.'
    ],
    rationale: 'While popular in some countries (like France), graphology is highly controversial in HR and generally considered to have low scientific validity and reliability for predicting job performance.'
  },
  {
    id: 'a115',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Job Shadowing"?',
    correctAnswer: 'A training method where a new or junior employee follows and observes an experienced worker to understand the day-to-day realities of a role.',
    incorrectAnswers: [
      'Secretly monitoring an employee’s internet usage during work hours.',
      'Working the night shift in complete darkness as a team-building exercise.',
      'A disciplinary action where an employee is constantly followed by security.'
    ],
    rationale: 'Job shadowing is an observational, on-the-job training technique that provides realistic job previews and cross-training without the trainee taking on the actual work immediately.'
  },
  {
    id: 'a116',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In compensation metrics, what is a "Compa-Ratio" (comparative ratio)?',
    correctAnswer: 'A ratio that divides an employee\'s current salary by the midpoint of their salary range, used to assess internal equity and market competitiveness.',
    incorrectAnswers: [
      'The ratio of male to female employees in a specific pay grade.',
      'The comparison of an employee’s salary to the CEO’s salary.',
      'The percentage of an employee’s salary deducted for taxes.'
    ],
    rationale: 'A compa-ratio of 1.0 means the employee is paid exactly at the market midpoint. A ratio of 0.80 means they are paid 20% below the midpoint, which may flag a retention risk.'
  },
  {
    id: 'a117',
    setId: 'A',
    category: 'Performance Management',
    text: 'How does a Behavioral Observation Scale (BOS) differ from a Behaviorally Anchored Rating Scale (BARS)?',
    correctAnswer: 'BOS asks the rater to evaluate the FREQUENCY of specific behaviors (e.g., "Almost Always" to "Almost Never"), whereas BARS asks the rater to choose the specific behavior that best matches the employee.',
    incorrectAnswers: [
      'BOS is used only for executives, while BARS is used for entry-level.',
      'BOS is entirely subjective, while BARS is entirely mathematical.',
      'They are exactly the same; the terms are interchangeable.'
    ],
    rationale: 'BOS focuses on how often an employee exhibits a desired behavior (frequency), making it slightly easier to develop and use than BARS, which requires complex behavioral anchors for every numerical rating.'
  },
  {
    id: 'a118',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is "Job Crafting"?',
    correctAnswer: 'The proactive, self-initiated changes that employees make to their own job boundaries, tasks, and relationships to make the work more meaningful to them.',
    incorrectAnswers: [
      'The process of HR officially rewriting an outdated job description.',
      'An illegal practice of an employee doing personal hobbies on company time.',
      'The automated division of labor using artificial intelligence.'
    ],
    rationale: 'Unlike top-down job design (done by HR), job crafting is a bottom-up approach where employees redesign their own work (within limits) to align with their passions, boosting engagement.'
  },
  {
    id: 'a119',
    setId: 'A',
    category: 'Risk Management',
    text: 'In the Philippines, what is BOSH training?',
    correctAnswer: 'Basic Occupational Safety and Health training, a mandatory 40-hour course prescribed by DOLE for safety officers.',
    incorrectAnswers: [
      'Basic Organizational Structure and Hierarchy training.',
      'Bureau of Social and Health Administration.',
      'Business Operations and Strategic HR training.'
    ],
    rationale: 'DOLE requires designated Safety Officers in a company to undergo the 40-hour BOSH training (or COSH for construction) to ensure they are qualified to implement the company\'s safety programs.'
  },
  {
    id: 'a120',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the primary advantage of an Employee Referral Program?',
    correctAnswer: 'It generally yields higher quality candidates, faster time-to-hire, and lower turnover because current employees pre-screen candidates and only recommend those who fit the culture.',
    incorrectAnswers: [
      'It completely eliminates the need to interview the referred candidates.',
      'It is legally mandated by the government for companies over 100 employees.',
      'It allows the company to pay the referred candidate below minimum wage.'
    ],
    rationale: 'Current employees risk their own reputation when they refer someone, so they act as a filter, bringing in candidates who are usually a strong cultural and technical fit.'
  },
  {
    id: 'a121',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is a common disadvantage of unstructured On-the-Job Training (OJT)?',
    correctAnswer: 'It can pass on bad habits from the experienced worker to the trainee, and the training quality varies wildly depending on who is doing the training.',
    incorrectAnswers: [
      'It is far more expensive than sending employees to universities.',
      'It requires the company to build dedicated simulation rooms.',
      'It is illegal for entry-level positions.'
    ],
    rationale: 'While OJT is cheap and practical, if it lacks structure (unlike JIT), a veteran employee who takes safety shortcuts will teach the new hire to take those same shortcuts.'
  },
  {
    id: 'a122',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Pay Compression" (or Salary Compression)?',
    correctAnswer: 'A situation where there is little difference in pay between employees with vastly different levels of experience or responsibility, often caused by rising starting salaries for new hires.',
    incorrectAnswers: [
      'A mandatory government deduction that compresses an employee’s take-home pay.',
      'A disciplinary measure where an employee’s salary is reduced by 50%.',
      'Paying all employees the exact same flat rate regardless of their job title.'
    ],
    rationale: 'Pay compression destroys morale. It happens when a company has to offer high market rates to attract new hires, resulting in new employees making almost as much as tenured employees or supervisors.'
  },
  {
    id: 'a123',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Critical Incident Method" of performance appraisal?',
    correctAnswer: 'A method where the manager keeps a continuous written log of highly effective or highly ineffective behaviors exhibited by the employee throughout the year.',
    incorrectAnswers: [
      'A method used strictly for evaluating the performance of emergency responders (police, fire).',
      'Evaluating an employee based solely on how many accidents they caused.',
      'A group appraisal where all employees critique each other simultaneously.'
    ],
    rationale: 'By keeping a log of "critical incidents" year-round, managers avoid recency bias and have specific, concrete examples to discuss during the final appraisal meeting.'
  },

  // ==========================================
  // BATCH 12 - SET B (Generated)
  // ==========================================
  {
    id: 'b114',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Magna Carta for Persons with Disability (RA 7277), what employment quota is mandated for government agencies?',
    correctAnswer: 'At least 1% of all positions in all government agencies, offices, or corporations shall be reserved for PWDs.',
    incorrectAnswers: [
      'At least 10% of all positions in all government agencies.',
      'Private corporations must reserve 5% of their workforce for PWDs.',
      'There is no mandated employment quota for PWDs in the Philippines.'
    ],
    rationale: 'RA 10524 (amending RA 7277) mandates a 1% quota for government agencies. For private corporations with more than 100 employees, the 1% quota is encouraged but not strictly mandatory.'
  },
  {
    id: 'b115',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Aside from the 7-day parental leave, what other workplace benefit is guaranteed under the Solo Parents Welfare Act (RA 8972)?',
    correctAnswer: 'The right to request a flexible work schedule, provided it does not affect core operations.',
    incorrectAnswers: [
      'The right to a mandatory 20% salary increase.',
      'The right to bring children to the office every day.',
      'The right to be exempted from paying income tax.'
    ],
    rationale: 'Solo parents can request a flexible work schedule (e.g., arriving early and leaving early) to attend to their children, and employers are mandated to provide it unless it heavily disrupts operations.'
  },
  {
    id: 'b116',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the distinction between a "Just Cause" and an "Authorized Cause" for termination?',
    correctAnswer: 'Just causes are due to the employee\'s fault (e.g., theft), carrying no separation pay. Authorized causes are dictated by business necessity (e.g., retrenchment), requiring separation pay.',
    incorrectAnswers: [
      'Just causes apply to regular employees, while authorized causes apply to probationary employees.',
      'Just causes require DOLE approval, while authorized causes require NLRC approval.',
      'They mean exactly the same thing and both require separation pay.'
    ],
    rationale: 'Just causes (Article 297) blame the employee (misconduct, neglect, fraud). Authorized causes (Article 298/299) do not blame the employee but allow the business to survive (redundancy, closure, disease).'
  },
  {
    id: 'b117',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, what is the statutory number of days an employee must be absent without leave (AWOL) to be validly terminated for abandonment?',
    correctAnswer: 'There is no statutory number of days; abandonment depends on unjustified absence AND overt acts showing a clear intent not to return, regardless of the number of days.',
    incorrectAnswers: [
      'Exactly three (3) consecutive days.',
      'Exactly five (5) consecutive days.',
      'Exactly thirty (30) consecutive days.'
    ],
    rationale: 'While many company policies specify 3 or 5 days of AWOL as a ground for dismissal, the Supreme Court rules that simple AWOL is not abandonment unless there is clear proof the employee never intends to return.'
  },
  {
    id: 'b118',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the standard probationary period for teaching personnel in private academic institutions?',
    correctAnswer: 'Three (3) consecutive school years of satisfactory service for basic education and tertiary levels.',
    incorrectAnswers: [
      'Six (6) months, same as standard corporate employees.',
      'One (1) academic semester.',
      'Five (5) continuous school years.'
    ],
    rationale: 'Under the Manual of Regulations for Private Schools, teachers acquire regular/permanent status only after rendering 3 consecutive school years of satisfactory service (or 6 consecutive semesters in college).'
  },
  {
    id: 'b119',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'To claim the SSS Maternity Benefit, what notification requirement must the female employee fulfill?',
    correctAnswer: 'She must notify her employer of her pregnancy and the probable date of childbirth, and the employer must then transmit this notice to the SSS.',
    incorrectAnswers: [
      'She must wait until the baby is born before notifying the employer.',
      'She must notify the NLRC directly within 24 hours of discovering the pregnancy.',
      'She must secure a DOLE permit before going on maternity leave.'
    ],
    rationale: 'Failure to give this notice to the employer (or to the SSS if self-employed/separated) may result in the forfeiture of the maternity benefit or force the employer to pay the benefit out of pocket.'
  },
  {
    id: 'b120',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the "Principle of Regular Employment," what primarily determines whether an employee is regular or not?',
    correctAnswer: 'The reasonable connection between the particular activity performed by the employee and the usual business or trade of the employer, NOT the title of their contract.',
    incorrectAnswers: [
      'The exact wording and title written on the employment contract.',
      'The amount of salary the employee receives.',
      'The decision of the company’s HR Director.'
    ],
    rationale: 'Article 295 states that an employee who performs tasks usually necessary or desirable in the usual business of the employer is a regular employee. A company cannot circumvent this by labeling a permanent worker as a "project" or "fixed-term" worker in a contract.'
  },
  {
    id: 'b121',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What kind of cases fall under the original and exclusive jurisdiction of Labor Arbiters (NLRC)?',
    correctAnswer: 'Unfair labor practice cases, termination disputes (illegal dismissal), and claims for damages arising from employer-employee relations.',
    incorrectAnswers: [
      'Criminal cases for theft committed by an employee.',
      'Divorce and annulment cases for married employees.',
      'Corporate disputes between the CEO and the Board of Directors.'
    ],
    rationale: 'Labor Arbiters (under the NLRC) have exclusive jurisdiction over major labor disputes that involve the employer-employee relationship, particularly illegal dismissal and large money claims (exceeding PHP 5,000).'
  },
  {
    id: 'b122',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following employees is EXEMPT from the mandatory 13th-month pay law?',
    correctAnswer: 'Managerial employees, government employees, and those paid on purely commission/boundary basis.',
    incorrectAnswers: [
      'Rank-and-file employees who have worked for 11 months.',
      'Probationary employees who have worked for 3 months.',
      'Employees working in the BPO (Business Process Outsourcing) industry.'
    ],
    rationale: 'Under PD 851, the 13th-month pay is strictly for rank-and-file employees. Managers are legally exempt, though many companies voluntarily provide it to managers as a company policy.'
  },
  {
    id: 'b123',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, can an employer validly dismiss an employee based solely on "loss of trust and confidence"?',
    correctAnswer: 'Yes, provided the employee holds a position of trust and confidence (managerial/fiduciary) and there is substantial evidence of an actual breach of trust.',
    incorrectAnswers: [
      'No, loss of trust is a subjective feeling and never a valid ground for dismissal.',
      'Yes, but it applies to all employees, including ordinary janitors and messengers.',
      'No, it requires the employee to have committed a felony punishable by prison.'
    ],
    rationale: 'Loss of trust and confidence is a just cause (Article 297), but it has two requisites: (1) the employee holds a position of trust (managers, cashiers, auditors), and (2) there is a willful act that breaches that trust (e.g., embezzlement, leaking trade secrets).'
  },
  // ==========================================
  // BATCH 13 - SET A (Generated)
  // ==========================================
  {
    id: 'a124',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the primary purpose of a "Stress Interview"?',
    correctAnswer: 'To intentionally place the candidate in an uncomfortable or hostile situation to observe how they handle pressure and emotional stress.',
    incorrectAnswers: [
      'To test the physical strength of the candidate by making them lift weights.',
      'To force the candidate to reveal confidential information about their previous employer.',
      'To make the interview process as fast as possible to save time.'
    ],
    rationale: 'Stress interviews (involving rapid-fire questions, aggressive tones, or bizarre scenarios) are sometimes used for high-pressure jobs (like law enforcement or air traffic control) to see if the applicant breaks character under pressure.'
  },
  {
    id: 'a125',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Action Learning" in the context of leadership development?',
    correctAnswer: 'A training method where small groups work on real, complex organizational problems, learn from the process, and implement actual solutions.',
    incorrectAnswers: [
      'Learning physical actions through repetitive motion drills.',
      'A passive seminar where executives watch action movies for inspiration.',
      'Memorizing theoretical frameworks without applying them.'
    ],
    rationale: 'Action learning is highly practical. Instead of doing a case study on a fake company, the group is given a real problem the company is currently facing and tasked with solving it as their training exercise.'
  },
  {
    id: 'a126',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Broadbanding" in compensation design?',
    correctAnswer: 'Collapsing multiple traditional salary grades into a few wide "bands" to allow for more flexibility in lateral career moves and pay increases.',
    incorrectAnswers: [
      'Paying employees in multiple different currencies to avoid inflation.',
      'Providing high-speed internet as a mandatory employee benefit.',
      'Setting a strict, narrow limit on how much an employee can earn in bonuses.'
    ],
    rationale: 'Broadbanding flattens the organizational hierarchy. Instead of having 15 narrow pay grades where employees must be promoted to get a raise, broadbanding creates 4 or 5 wide bands, allowing people to grow their salary without needing a new title.'
  },
  {
    id: 'a127',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Leniency Bias" in performance appraisals?',
    correctAnswer: 'A rating error where a manager artificially rates almost all employees higher than they actually deserve.',
    incorrectAnswers: [
      'A rating error where a manager rates everyone extremely harshly.',
      'A bias against older employees when evaluating physical tasks.',
      'A bias where the manager only remembers the last two weeks of performance.'
    ],
    rationale: 'Leniency bias often happens because managers want to avoid conflict, want their team to look good to upper management, or want to ensure everyone gets a bonus, rendering the appraisal useless for identifying top talent.'
  },
  {
    id: 'a128',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is O*NET (Occupational Information Network)?',
    correctAnswer: 'A comprehensive, free online database maintained by the US Department of Labor that contains hundreds of occupational definitions, skills, and job requirements.',
    incorrectAnswers: [
      'A private recruiting firm exclusively for tech executives.',
      'A mandatory government software used to process payroll taxes.',
      'An internal company network used to monitor employee emails.'
    ],
    rationale: 'O*NET is the gold standard resource for HR professionals conducting job analysis, providing detailed baseline data for almost every known occupation.'
  },
  {
    id: 'a129',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is the primary focus of "Ergonomics" in the workplace?',
    correctAnswer: 'Designing and arranging workspaces, tools, and equipment so that they fit the physical capabilities and limitations of the people using them.',
    incorrectAnswers: [
      'Managing the financial economics of the company’s risk portfolio.',
      'Ensuring that all employees speak the exact same language in the office.',
      'Strictly enforcing the dress code to ensure a professional appearance.'
    ],
    rationale: 'Ergonomics aims to prevent musculoskeletal disorders (like carpal tunnel or back pain) by adapting the job to the worker (e.g., adjustable chairs, proper desk height), rather than forcing the worker to adapt to the job.'
  },
  {
    id: 'a130',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Blind Hiring"?',
    correctAnswer: 'A recruitment process that removes personally identifiable information (like name, gender, age, or education) from resumes to prevent unconscious bias.',
    incorrectAnswers: [
      'Hiring candidates without interviewing them at all.',
      'Hiring solely individuals who are legally blind to meet PWD quotas.',
      'A process where the interviewer wears a blindfold.'
    ],
    rationale: 'By stripping names (which might imply race or gender) and graduation years (which imply age), recruiters are forced to evaluate candidates purely on their skills and experience.'
  },
  {
    id: 'a131',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the main difference between "E-Learning" and "Blended Learning"?',
    correctAnswer: 'E-learning is conducted entirely online, whereas blended learning combines online digital media with traditional instructor-led classroom methods.',
    incorrectAnswers: [
      'E-learning is for technical skills, while blended learning is for soft skills.',
      'Blended learning is entirely online, while e-learning requires physical books.',
      'There is no difference; they are exactly the same concept.'
    ],
    rationale: 'Blended learning (or hybrid learning) provides the flexibility of online modules while retaining the human interaction and immediate feedback of a live instructor.'
  },
  {
    id: 'a132',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'How does "Profit Sharing" differ from "Gainsharing"?',
    correctAnswer: 'Profit sharing distributes a portion of overall company profits, while gainsharing rewards employees for specific improvements in productivity or cost savings, regardless of overall profit.',
    incorrectAnswers: [
      'Profit sharing is illegal, while gainsharing is mandated by the government.',
      'Profit sharing gives employees stock, while gainsharing gives cash.',
      'Gainsharing is for executives only, while profit sharing is for rank-and-file.'
    ],
    rationale: 'If a team figures out a way to cut material waste by 20%, they receive a gainsharing bonus for that specific saving. Even if the company loses money that year overall, the gainsharing bonus must still be paid.'
  },
  {
    id: 'a133',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Central Tendency Error" in performance evaluation?',
    correctAnswer: 'A rating error where a manager rates all or most employees as "average" or in the middle of the scale, avoiding both high and low ratings.',
    incorrectAnswers: [
      'A statistical error in calculating the median salary of the team.',
      'A bias where the manager only rates employees based on their central core duties.',
      'A tendency to evaluate employees based on the company’s central headquarters location.'
    ],
    rationale: 'Central tendency error usually happens when a manager is unfamiliar with an employee’s actual work and plays it safe by giving them a 3 out of 5, which fails to distinguish top performers from poor performers.'
  },

  // ==========================================
  // BATCH 13 - SET B (Generated)
  // ==========================================
  {
    id: 'b124',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under DOLE Department Order No. 174, Series of 2017, which practice is absolutely prohibited?',
    correctAnswer: 'Labor-only contracting.',
    incorrectAnswers: [
      'Legitimate job contracting.',
      'Hiring probationary employees.',
      'Using an independent contractor for specialized IT services.'
    ],
    rationale: 'DO 174-17 reaffirmed the absolute prohibition against labor-only contracting (where the contractor has no capital and the principal exercises control) to protect workers\' rights to security of tenure.'
  },
  {
    id: 'b125',
    setId: 'B',
    category: 'Labor Laws',
    text: 'When is the termination of a Project Employee legally valid without the need for separation pay?',
    correctAnswer: 'Upon the completion of the specific project or phase for which they were explicitly hired, provided they were informed of this at the time of engagement.',
    incorrectAnswers: [
      'After exactly six (6) months of employment.',
      'Only when the company declares bankruptcy.',
      'When the employee joins a labor union.'
    ],
    rationale: 'Project employees do not become regular employees simply by the passage of time, as long as their employment was co-terminus with a specific, predetermined project (like constructing a specific building).'
  },
  {
    id: 'b126',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 83 of the Labor Code, what is the maximum normal hours of work of any employee?',
    correctAnswer: 'Eight (8) hours a day.',
    incorrectAnswers: [
      'Ten (10) hours a day.',
      'Forty-eight (48) hours a week.',
      'Twelve (12) hours a day.'
    ],
    rationale: 'The normal hours of work shall not exceed 8 hours a day. Any work performed beyond this requires overtime pay (plus 25% of the basic hourly rate).'
  },
  {
    id: 'b127',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 85, how long is the mandatory regular meal period, and is it compensable?',
    correctAnswer: 'It is at least sixty (60) minutes and is generally non-compensable (unpaid).',
    incorrectAnswers: [
      'Thirty (30) minutes, fully compensable.',
      'Sixty (60) minutes, fully compensable.',
      'Ninety (90) minutes, unpaid.'
    ],
    rationale: 'Employers must give employees not less than 60 minutes for their regular meals. Because the employee is completely free from duties during this time, it is not counted as working time and is not paid.'
  },
  {
    id: 'b128',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Can an employer legally shorten the meal period to 20 minutes?',
    correctAnswer: 'Yes, but the shortened meal period of 20 minutes must be considered compensable (paid) hours worked.',
    incorrectAnswers: [
      'No, shortening the meal period is absolutely illegal under all circumstances.',
      'Yes, and it remains non-compensable (unpaid).',
      'Yes, but only if the employee signs a waiver giving up their salary for that day.'
    ],
    rationale: 'If the meal period is shortened to less than 60 minutes (usually 20-30 mins) for operational necessity, the law dictates that this time must be paid as part of the normal 8-hour workday.'
  },
  {
    id: 'b129',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the statutory requirement for an employee’s rest day under the Labor Code?',
    correctAnswer: 'It must be a rest period of not less than twenty-four (24) consecutive hours after every six (6) consecutive normal work days.',
    incorrectAnswers: [
      'It must be strictly given on a Sunday.',
      'It must be forty-eight (48) consecutive hours every week.',
      'There is no requirement; it depends entirely on the employer.'
    ],
    rationale: 'While the rest day does not have to be a Sunday, the employer must provide at least one full 24-hour period of rest after 6 days of work. Work performed on a rest day commands a 30% premium.'
  },
  {
    id: 'b130',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Right to Disconnect" in the context of Philippine telecommuting laws?',
    correctAnswer: 'The right of an employee to ignore work-related communications outside of their standard working hours without facing disciplinary action.',
    incorrectAnswers: [
      'The right of an employer to disconnect the internet of unproductive employees.',
      'The right of an employee to quit their job without rendering 30 days notice.',
      'The right of the government to shut down non-compliant BPO companies.'
    ],
    rationale: 'While not yet a full statutory law in the Philippines, it is heavily promoted in DOLE guidelines for Telecommuting (Work From Home) to protect employee mental health and work-life balance.'
  },
  {
    id: 'b131',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine law, what defines a "Night Shift Worker"?',
    correctAnswer: 'An employee who performs work between 10:00 PM and 6:00 AM.',
    incorrectAnswers: [
      'An employee who performs work between 8:00 PM and 4:00 AM.',
      'An employee who works past midnight.',
      'Any employee working in a call center.'
    ],
    rationale: 'Work performed between 10:00 PM and 6:00 AM is considered night shift work and is legally entitled to a Night Shift Differential (NSD) of not less than 10% of their regular wage for each hour.'
  },
  {
    id: 'b132',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the legal formula for computing the 13th-month pay of an employee who worked for 8 months in a calendar year?',
    correctAnswer: 'Total basic salary earned during the calendar year divided by 12.',
    incorrectAnswers: [
      'One full month\'s current salary regardless of months worked.',
      'Basic salary multiplied by 8, divided by 10.',
      'It is a flat rate of PHP 10,000.'
    ],
    rationale: 'The 13th-month pay is strictly proportionate. You sum up all the BASIC salary the employee actually earned from Jan 1 to Dec 31, and divide that total by 12.'
  },
  {
    id: 'b133',
    setId: 'B',
    category: 'Compensation & Benefits',
    text: 'In Labor Law, what is "Wage Distortion"?',
    correctAnswer: 'The severe contraction or elimination of the intentional pay differences between employee groups (e.g., tenured vs new hires) caused by a mandated minimum wage increase.',
    incorrectAnswers: [
      'When an employer unlawfully deducts money from an employee’s wage.',
      'When an employee lies about their previous salary during an interview.',
      'The practice of paying men more than women for the same job.'
    ],
    rationale: 'When the government raises the minimum wage, entry-level workers get a bump. If this bump makes entry-level workers earn the same as supervisors, a "wage distortion" occurs, which the employer and union must negotiate to correct.'
  },
  // ==========================================
  // BATCH 14 - SET A (Generated)
  // ==========================================
  {
    id: 'a134',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the difference between a "Panel Interview" and a "Group Interview"?',
    correctAnswer: 'A panel interview involves one candidate being interviewed by multiple interviewers, while a group interview involves multiple candidates being interviewed simultaneously.',
    incorrectAnswers: [
      'A panel interview is conducted online, while a group interview is conducted face-to-face.',
      'A panel interview is for executives, while a group interview is for entry-level roles.',
      'There is no difference; they are exactly the same thing.'
    ],
    rationale: 'Panel interviews (several interviewers) help reduce individual bias and save time for the interviewers. Group interviews (several candidates) help assess teamwork, leadership, and how candidates interact with peers.'
  },
  {
    id: 'a135',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In adult education, what is "Andragogy"?',
    correctAnswer: 'The method and practice of teaching adult learners, emphasizing self-direction, experience, and practical application.',
    incorrectAnswers: [
      'The practice of teaching children and adolescents.',
      'A training method that strictly relies on rote memorization.',
      'A digital learning platform used in universities.'
    ],
    rationale: 'Andragogy (adult learning) differs from pedagogy (child learning) because adults learn best when they understand WHY they are learning something and can connect it to their own life experiences.'
  },
  {
    id: 'a136',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Red Circle Rate" in compensation management?',
    correctAnswer: 'A salary rate that is paid above the established maximum for that job grade.',
    incorrectAnswers: [
      'A salary rate that falls below the established minimum for that job grade.',
      'A highly dangerous job that receives maximum hazard pay.',
      'A commission rate given strictly to top-performing sales executives.'
    ],
    rationale: 'An employee becomes "red-circled" if their pay exceeds the maximum of their pay band (often due to long tenure or a demotion where pay wasn\'t cut). Companies typically freeze base pay increases for these employees until the market catches up.'
  },
  {
    id: 'a137',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Contrast Error" in performance evaluation?',
    correctAnswer: 'A rating bias where a manager evaluates an employee by comparing them to the previously evaluated employee, rather than to an objective standard.',
    incorrectAnswers: [
      'Evaluating an employee based on the contrast between their self-assessment and the manager’s assessment.',
      'Rating an employee highly because they look very different from the rest of the team.',
      'A technical error in the HR software system displaying incorrect data.'
    ],
    rationale: 'If a manager evaluates an absolutely stellar performer first, an average (but competent) performer evaluated immediately after might be rated unfairly low because of the harsh contrast.'
  },
  {
    id: 'a138',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'In Job Analysis, what does the acronym "KSAO" stand for?',
    correctAnswer: 'Knowledge, Skills, Abilities, and Other characteristics.',
    incorrectAnswers: [
      'Key Success and Operational metrics.',
      'Knowledge Systems and Organizational rules.',
      'Key Staffing and Onboarding objectives.'
    ],
    rationale: 'KSAOs form the foundation of a job specification. Knowledge is theoretical, Skills are practiced, Abilities are innate capacities, and Other characteristics include personality traits or licenses.'
  },
  {
    id: 'a139',
    setId: 'A',
    category: 'Risk Management',
    text: 'In occupational safety, what is the difference between a "Hazard" and a "Risk"?',
    correctAnswer: 'A hazard is something that has the potential to cause harm, while a risk is the likelihood or probability that the hazard will actually cause harm.',
    incorrectAnswers: [
      'A hazard causes physical harm, while a risk causes financial harm.',
      'A hazard is illegal, while a risk is legally acceptable.',
      'There is no difference; they mean the exact same thing.'
    ],
    rationale: 'A wet floor is a hazard. The risk is high if the wet floor is in a busy hallway without a sign, but the risk is low if the wet floor is in a locked room.'
  },
  {
    id: 'a140',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Boomerang Employee"?',
    correctAnswer: 'An employee who leaves a company and later returns to work for that same company.',
    incorrectAnswers: [
      'An employee who constantly shifts from one department to another.',
      'An applicant who sends the exact same resume multiple times.',
      'An employee whose performance oscillates wildly between excellent and poor.'
    ],
    rationale: 'Boomerang employees are increasingly welcomed by companies because they require less onboarding, are already familiar with the culture, and often bring back new skills learned while away.'
  },
  {
    id: 'a141',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the 70-20-10 Model of Learning and Development?',
    correctAnswer: 'A model suggesting that learning comes 70% from on-the-job experience, 20% from social interactions (coaching/mentoring), and 10% from formal training.',
    incorrectAnswers: [
      'A rule stating that a company should spend 70% of its budget on tech, 20% on HR, and 10% on training.',
      'A performance rule where 70% pass, 20% are warned, and 10% are fired.',
      'A time management rule for studying.'
    ],
    rationale: 'The 70-20-10 model highlights that formal classroom training (10%) is just the tip of the iceberg, and real learning happens when employees actually do the work (70%) and interact with peers (20%).'
  },
  {
    id: 'a142',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Green Circle Rate" in compensation management?',
    correctAnswer: 'A salary rate that is paid below the established minimum for that job grade.',
    incorrectAnswers: [
      'An environmentally friendly, tax-free transportation allowance.',
      'A salary rate exactly at the market median.',
      'A bonus given to entry-level trainees.'
    ],
    rationale: 'An employee is "green-circled" if their pay is below the minimum of their pay band (often due to rapid promotions). Companies usually give fast-tracked raises to bring green-circled employees up to the minimum.'
  },
  {
    id: 'a143',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Strictness Bias" in performance appraisals?',
    correctAnswer: 'A rating error where a manager rates all or most employees significantly lower than their actual performance warrants.',
    incorrectAnswers: [
      'A bias where the manager enforces the dress code too strictly.',
      'A tendency to evaluate only the negative behaviors of older employees.',
      'Rating an employee highly because they follow all rules strictly.'
    ],
    rationale: 'Strictness bias happens when a manager has impossibly high standards ("nobody is a 5/5") or wants to establish dominance, which demoralizes employees and unfairly penalizes them in merit cycles.'
  },

  // ==========================================
  // BATCH 14 - SET B (Generated)
  // ==========================================
  {
    id: 'b134',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employee works on a Regular Holiday that also falls on their scheduled Rest Day, what is their minimum premium pay?',
    correctAnswer: '260% of their regular daily wage.',
    incorrectAnswers: [
      '130% of their regular daily wage.',
      '200% of their regular daily wage.',
      '300% of their regular daily wage.'
    ],
    rationale: 'Working on a regular holiday is 200%. If that holiday falls on a rest day, there is an additional 30% premium calculated on the 200% rate. (200% x 1.30 = 260%).'
  },
  {
    id: 'b135',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the general rule for pay on a Special (Non-Working) Holiday if the employee DOES NOT work?',
    correctAnswer: 'The "No work, no pay" principle applies, unless a favorable company policy or CBA grants payment.',
    incorrectAnswers: [
      'The employee receives 100% of their regular daily wage.',
      'The employee receives 50% of their regular daily wage.',
      'The employer must give a substitute rest day.'
    ],
    rationale: 'Unlike Regular Holidays (which are paid 100% even if unworked), Special Non-Working Holidays follow the "no work, no pay" rule.'
  },
  {
    id: 'b136',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the premium pay for an employee who works on a Special (Working) Holiday?',
    correctAnswer: 'There is no premium pay; the employee is entitled only to their basic rate (100%).',
    incorrectAnswers: [
      '130% of their regular daily wage.',
      '150% of their regular daily wage.',
      '200% of their regular daily wage.'
    ],
    rationale: 'A Special Working Holiday is treated exactly like an ordinary working day. There is no premium pay for work performed, and no pay if unworked.'
  },
  {
    id: 'b137',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Labor Code, how many days of Service Incentive Leave (SIL) is an employee entitled to after one year of service?',
    correctAnswer: 'Five (5) days with pay.',
    incorrectAnswers: [
      'Seven (7) days with pay.',
      'Ten (10) days with pay.',
      'Fifteen (15) days with pay.'
    ],
    rationale: 'Article 95 grants 5 days of SIL. It can be used for sick or vacation leave. Unused SIL by the end of the year must be converted to cash.'
  },
  {
    id: 'b138',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Which of the following employers is EXEMPT from granting the 5-day Service Incentive Leave (SIL)?',
    correctAnswer: 'Establishments regularly employing less than ten (10) workers.',
    incorrectAnswers: [
      'Multinational corporations.',
      'All retail establishments, regardless of size.',
      'Manufacturing companies.'
    ],
    rationale: 'To ease the burden on micro-businesses, the law exempts establishments with fewer than 10 employees from providing SIL, along with other exemptions like managerial employees.'
  },
  {
    id: 'b139',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are managerial employees legally entitled to overtime pay?',
    correctAnswer: 'No, managerial employees are exempt from the provisions on normal hours of work, overtime, and premium pay.',
    incorrectAnswers: [
      'Yes, they are entitled to double the standard overtime rate.',
      'Yes, but only if they work more than 12 hours a day.',
      'No, but they are legally mandated to receive hazard pay instead.'
    ],
    rationale: 'Article 82 of the Labor Code exempts managerial employees (and field personnel, family members, domestic helpers) from the hours of work and overtime provisions.'
  },
  {
    id: 'b140',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Kasambahay Law, what is the minimum daily rest period guaranteed to a domestic worker?',
    correctAnswer: 'An aggregate of eight (8) hours per day.',
    incorrectAnswers: [
      'An aggregate of ten (10) hours per day.',
      'An aggregate of twelve (12) hours per day.',
      'There is no minimum daily rest period for live-in domestic workers.'
    ],
    rationale: 'The Kasambahay Law explicitly guarantees an 8-hour daily rest period and at least one full 24-hour rest period every week to prevent abuse.'
  },
  {
    id: 'b141',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What happens when two Regular Holidays fall on the exact same day (e.g., Maundy Thursday and Araw ng Kagitingan), and the employee WORKS?',
    correctAnswer: 'The employee is entitled to 300% of their regular daily wage.',
    incorrectAnswers: [
      'The employee is entitled to 200% of their regular daily wage.',
      'The employee is entitled to 400% of their regular daily wage.',
      'One of the holidays is cancelled and moved to the next day.'
    ],
    rationale: 'DOLE guidelines dictate that if an employee works on a "double holiday", they receive 100% basic + 100% for the first holiday + 100% for the second holiday = 300% total. If unworked, they receive 200%.'
  },
  {
    id: 'b142',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum duration an employer can legally place an employee on "Floating Status" (bona fide suspension of operations)?',
    correctAnswer: 'A maximum of six (6) months.',
    incorrectAnswers: [
      'A maximum of three (3) months.',
      'A maximum of one (1) year.',
      'Indefinitely, as long as the pandemic/crisis continues.'
    ],
    rationale: 'Under Article 301, floating status cannot exceed 6 months. After 6 months, the employer must either recall the employee to work or permanently terminate them and pay separation pay.'
  },
  {
    id: 'b143',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In cases of illegal dismissal, what are the two primary remedies awarded to the employee?',
    correctAnswer: 'Reinstatement without loss of seniority rights, AND full backwages.',
    incorrectAnswers: [
      'Separation pay only.',
      'Immediate payment of a 10-year advance salary.',
      'A public apology printed in a national newspaper.'
    ],
    rationale: 'The law intends to put the illegally dismissed employee back in the position they would have been in. Reinstatement is the primary remedy. If reinstatement is impossible (strained relations), separation pay is awarded IN LIEU of reinstatement, plus backwages.'
  },
  // ==========================================
  // BATCH 15 - SET A (Generated)
  // ==========================================
  {
    id: 'a144',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'In employment testing, what is the difference between "Validity" and "Reliability"?',
    correctAnswer: 'Validity refers to whether the test actually measures what it claims to measure, while reliability refers to the consistency of the test results over time.',
    incorrectAnswers: [
      'Validity refers to the legal right to use the test, while reliability refers to the cost of the test.',
      'Validity is about the consistency of results, while reliability is about what is being measured.',
      'There is no difference; they are synonymous terms in psychometrics.'
    ],
    rationale: 'A test can be highly reliable (producing the exact same score every time a person takes it) but completely invalid (e.g., measuring shoe size to predict coding ability).'
  },
  {
    id: 'a145',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the primary goal of "Succession Planning"?',
    correctAnswer: 'To identify and develop internal employees with the potential to fill key business leadership positions in the company when current leaders leave.',
    incorrectAnswers: [
      'To plan the sequence of a company’s financial audits.',
      'To determine which employees will be laid off next.',
      'To guarantee every employee a promotion after 5 years.'
    ],
    rationale: 'Succession planning mitigates business risk. If the CEO or a key director unexpectedly resigns, a succession plan ensures there is a fully trained internal candidate ready to step into the role immediately.'
  },
  {
    id: 'a146',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is the main difference between "Time-Rate" and "Piece-Rate" pay systems?',
    correctAnswer: 'Time-rate pays employees for the amount of time they spend at work, while piece-rate pays them for the number of units they produce.',
    incorrectAnswers: [
      'Time-rate is paid in cash, while piece-rate is paid in company stock.',
      'Time-rate is only for executives, while piece-rate is for rank-and-file.',
      'Time-rate is illegal in the Philippines, while piece-rate is standard.'
    ],
    rationale: 'Time-rate (hourly/monthly salary) provides stability but relies on supervision to maintain productivity. Piece-rate incentivizes speed and volume directly.'
  },
  {
    id: 'a147',
    setId: 'A',
    category: 'Performance Management',
    text: 'What does the management style "MBWA" stand for?',
    correctAnswer: 'Management By Walking Around.',
    incorrectAnswers: [
      'Management By Weekly Assessments.',
      'Monitoring By Workplace Analytics.',
      'Management By Written Agreements.'
    ],
    rationale: 'Popularized by HP and Tom Peters, MBWA involves managers wandering the workplace in an unstructured manner to check in with employees, listen to concerns, and observe actual performance firsthand.'
  },
  {
    id: 'a148',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'In the context of conducting a Job Analysis, what is an "SME"?',
    correctAnswer: 'Subject Matter Expert: a person well-versed in the content and requirements of the job being analyzed.',
    incorrectAnswers: [
      'Standard Metric Evaluation.',
      'Senior Management Executive.',
      'Systematic Measurement Error.'
    ],
    rationale: 'When HR designs a new job description or test, they rely on SMEs (usually the incumbent employee or their direct supervisor) to provide accurate details about what the job actually entails on a daily basis.'
  },
  {
    id: 'a149',
    setId: 'A',
    category: 'Risk Management',
    text: 'In occupational health and safety, what constitutes a "Near Miss"?',
    correctAnswer: 'An unplanned event that did not result in injury, illness, or damage, but had the potential to do so.',
    incorrectAnswers: [
      'An accident where an employee is severely injured.',
      'When an employee barely misses their sales quota.',
      'A deliberate attempt to sabotage company property that fails.'
    ],
    rationale: 'Reporting near misses (e.g., a heavy box falling right next to a worker) is critical in risk management because they serve as free warnings that a hazard exists before an actual tragedy occurs.'
  },
  {
    id: 'a150',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Employer Branding"?',
    correctAnswer: 'The company\'s reputation and value proposition as an employer, designed to attract and retain top talent.',
    incorrectAnswers: [
      'The company\'s marketing strategy to sell products to consumers.',
      'The uniform that employees are required to wear.',
      'The physical logo placed on the company building.'
    ],
    rationale: 'Employer branding answers the question "Why would someone want to work here?" A strong employer brand (e.g., Google, Apple) dramatically reduces recruiting costs because talent actively seeks out the company.'
  },
  {
    id: 'a151',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Microlearning"?',
    correctAnswer: 'An educational approach that delivers training in small, bite-sized, and highly focused bursts (usually 2-5 minutes long).',
    incorrectAnswers: [
      'Training that is strictly limited to microscopic scientific procedures.',
      'A training program that is chronically underfunded.',
      'Learning that occurs subconsciously while sleeping.'
    ],
    rationale: 'Microlearning caters to modern attention spans and the flow of work. Instead of a 2-day seminar, employees might watch a 3-minute video on their phone right before they need to perform a specific task.'
  },
  {
    id: 'a152',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What are "Perquisites" (Perks) in a compensation package?',
    correctAnswer: 'Special non-wage privileges or fringe benefits granted to specific employees, usually executives, such as a company car or club membership.',
    incorrectAnswers: [
      'Mandatory government deductions for health insurance.',
      'The base hourly wage of an entry-level worker.',
      'A penalty deducted from a paycheck for lateness.'
    ],
    rationale: 'While standard benefits (health insurance, 13th month) are given broadly, perks are status-based privileges used to attract and retain high-level talent.'
  },
  {
    id: 'a153',
    setId: 'A',
    category: 'Performance Management',
    text: 'When setting performance objectives, what does the acronym "SMART" stand for?',
    correctAnswer: 'Specific, Measurable, Achievable, Relevant, Time-bound.',
    incorrectAnswers: [
      'Strategic, Meaningful, Actionable, Reliable, Tested.',
      'Simple, Mandatory, Accurate, Realistic, Tangible.',
      'Standardized, Motivating, Assertive, Rapid, Thorough.'
    ],
    rationale: 'The SMART framework ensures that goals are clear and trackable. "Increase sales" is a bad goal. "Increase Q3 sales of Product X by 10% in the NCR region by October 1" is a SMART goal.'
  },

  // ==========================================
  // BATCH 15 - SET B (Generated)
  // ==========================================
  {
    id: 'b144',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Principle of Non-Diminution of Benefits"?',
    correctAnswer: 'The legal rule that employers cannot unilaterally eliminate or reduce any benefit that has already ripened into a company practice or policy over a long period of time.',
    incorrectAnswers: [
      'The rule that employees cannot ask for a raise during a pandemic.',
      'The rule that an employer must increase benefits by 10% every year.',
      'The rule that government benefits replace private company benefits.'
    ],
    rationale: 'Under Article 100 of the Labor Code, if a company has consistently given a voluntary bonus (like free rice every month) for several years, it becomes a vested right of the employees and cannot be suddenly withdrawn.'
  },
  {
    id: 'b145',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In illegal dismissal cases, what is the "Doctrine of Strained Relations"?',
    correctAnswer: 'A legal doctrine where separation pay is awarded instead of reinstatement because the relationship between the employer and employee has become so antagonistic that working together is no longer possible.',
    incorrectAnswers: [
      'A rule that allows an employee to sue their co-workers for emotional distress.',
      'A law that prohibits married couples from working in the same department.',
      'A policy that forces an employee to resign if they argue with their boss.'
    ],
    rationale: 'Normally, an illegally dismissed employee must be reinstated. But if they were a high-ranking manager and the lawsuit involved severe mutual accusations of fraud/bad faith, the court will apply this doctrine and order separation pay instead to avoid workplace chaos.'
  },
  {
    id: 'b146',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If a company closes its business completely due to serious financial losses, is it required to pay separation pay to its employees?',
    correctAnswer: 'No, closure of business due to serious financial losses exempts the employer from paying separation pay.',
    incorrectAnswers: [
      'Yes, it must pay one (1) month pay per year of service regardless of losses.',
      'Yes, it must pay one-half (1/2) month pay per year of service.',
      'No, but it must give all company assets to the labor union.'
    ],
    rationale: 'Article 298 states that in cases of closure or cessation of operations NOT due to serious business losses, separation pay is required (1/2 month/year). But if the company is legitimately bankrupt and closing to avoid further ruin, the law does not compel them to pay separation pay.'
  },
  {
    id: 'b147',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are waivers and quitclaims signed by resigning employees legally valid?',
    correctAnswer: 'Yes, provided they are entered into voluntarily, with full understanding, and the consideration is credible and reasonable.',
    incorrectAnswers: [
      'No, all quitclaims are strictly illegal and heavily frowned upon by courts.',
      'Yes, they are absolute and cannot be challenged in court under any circumstances.',
      'Yes, but only if they are signed in the presence of the President of the Philippines.'
    ],
    rationale: 'While courts look at quitclaims with suspicion to protect desperate workers, a quitclaim is valid if the employee willingly signs it and receives a fair settlement (not shockingly low compared to what they are legally owed).'
  },
  {
    id: 'b148',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What are the optional and compulsory retirement ages for underground mine workers?',
    correctAnswer: 'Optional at fifty (50) years old, Compulsory at sixty (60) years old.',
    incorrectAnswers: [
      'Optional at forty (40), Compulsory at fifty (50).',
      'Optional at sixty (60), Compulsory at sixty-five (65).',
      'There is no special retirement age for mine workers.'
    ],
    rationale: 'Due to the severe physical toll and health hazards of underground mining, RA 10757 lowered their retirement age compared to standard private employees (who retire at 60 optional / 65 compulsory).'
  },
  {
    id: 'b149',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Is an employee who reaches the compulsory retirement age of 65 required to resign?',
    correctAnswer: 'Yes, upon reaching 65, the employer can compulsorily retire the employee, effectively terminating the employment to grant retirement benefits.',
    incorrectAnswers: [
      'No, the employee can choose to work until age 75 if they want to.',
      'Yes, but the employee is not entitled to any retirement pay.',
      'No, compulsory retirement is unconstitutional.'
    ],
    rationale: 'At age 65, retirement becomes compulsory. The employer has the right to separate the employee from service and pay the statutory (or company-policy) retirement pay.'
  },
  {
    id: 'b150',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following establishments is explicitly EXEMPT from paying Night Shift Differential?',
    correctAnswer: 'Retail and service establishments regularly employing not more than five (5) workers.',
    incorrectAnswers: [
      'All BPO and call center companies.',
      'Hospitals and healthcare facilities.',
      'Manufacturing plants.'
    ],
    rationale: 'Under Article 86, the Night Shift Differential rule does not apply to government employees, managerial employees, and retail/service establishments employing not more than five workers.'
  },
  {
    id: 'b151',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is a key requirement before a Solo Parent can avail of the 7-day parental leave?',
    correctAnswer: 'They must have rendered at least six (6) months of service and must notify the employer within a reasonable time.',
    incorrectAnswers: [
      'They must secure approval from the Supreme Court.',
      'They must prove that the other parent is deceased.',
      'They must have at least three (3) children.'
    ],
    rationale: 'To avail of the leave under RA 8972, the solo parent must have a Solo Parent ID from the DSWD/LGU, have worked for at least 6 months, and provide notice to the employer.'
  },
  {
    id: 'b152',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Anti-Sexual Harassment Act of 1995 (RA 7877), how is sexual harassment committed in a workplace setting?',
    correctAnswer: 'It is committed by an employer, manager, or supervisor who demands, requests, or requires any sexual favor from another in exchange for employment, promotion, or privileges.',
    incorrectAnswers: [
      'It can only be committed between two rank-and-file employees of equal status.',
      'It is only considered harassment if physical contact occurs.',
      'It is committed only when an employee sues the company for unpaid wages.'
    ],
    rationale: 'RA 7877 specifically focuses on the abuse of authority/power (employer over employee, teacher over student) where sexual favors are made a condition for employment or promotion.'
  },
  {
    id: 'b153',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the primary legal distinction between a Supervisory employee and a Managerial employee?',
    correctAnswer: 'Supervisors only have the power to RECOMMEND managerial actions (like hiring or firing), whereas Managers have the power to actually EXECUTE those actions.',
    incorrectAnswers: [
      'Supervisors are paid hourly, while managers are salaried.',
      'Supervisors can join any labor union, but managers can only join government unions.',
      'There is no legal distinction; both terms mean the exact same thing.'
    ],
    rationale: 'Article 219 defines managers as those who lay down policies and hire/fire. Supervisors only recommend such actions requiring further approval. Unlike managers, supervisors have the right to form their own supervisory labor union.'
  },
  // ==========================================
  // BATCH 16 - SET A (Generated)
  // ==========================================
  {
    id: 'a154',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Headhunting" (Executive Search)?',
    correctAnswer: 'A specialized recruitment service used to source highly qualified candidates for senior-level or executive jobs, often targeting passive candidates who are not actively looking for a job.',
    incorrectAnswers: [
      'A violent practice of forcefully removing employees from rival companies.',
      'A method of mass hiring where thousands of resumes are scanned in one day.',
      'The practice of firing the highest-paid executives to save company money.'
    ],
    rationale: 'Headhunters actively poach top talent (often from competitor firms) for C-level or highly specialized roles where a standard job posting would not attract the right caliber of candidate.'
  },
  {
    id: 'a155',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What does "Transfer of Learning" refer to?',
    correctAnswer: 'The extent to which an employee successfully applies the knowledge, skills, and attitudes learned in training to their actual job.',
    incorrectAnswers: [
      'Transferring an employee to a different department so they can learn a new job.',
      'The process of legally transferring training certificates from one school to another.',
      'Uploading learning modules from a local computer to the cloud.'
    ],
    rationale: 'If transfer of learning does not occur (i.e., the employee goes back to their desk and works exactly the same way as before), the training was ultimately a failure and a waste of resources.'
  },
  {
    id: 'a156',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'In Expatriate Compensation, what is the "Balance Sheet Approach"?',
    correctAnswer: 'A compensation method designed to ensure the expatriate maintains the same standard of living in the host country as they had in their home country, plus a premium for the inconvenience.',
    incorrectAnswers: [
      'Paying the expatriate entirely based on the host country’s minimum wage.',
      'A strict accounting method where the expatriate must pay back all travel costs.',
      'A method where the expatriate is paid entirely in company stock.'
    ],
    rationale: 'The balance sheet approach equalizes purchasing power so the employee neither loses nor gains financially from the assignment financially (e.g., covering higher housing/tax costs in London vs Manila).'
  },
  {
    id: 'a157',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Horn Effect" in performance appraisals?',
    correctAnswer: 'A cognitive bias where a manager allows a single negative trait or poor incident to overshadow all of an employee’s positive achievements, resulting in an unfairly low overall rating.',
    incorrectAnswers: [
      'A bias where a manager rates everyone highly to avoid conflict.',
      'A bias where an employee constantly brags about their own performance.',
      'A tendency to only rate employees who speak loudly during meetings.'
    ],
    rationale: 'The Horn effect is the direct opposite of the Halo effect. For example, if an employee is frequently late (negative) but is the top salesperson (positive), a manager suffering from the Horn effect will give them a terrible overall review solely because of the tardiness.'
  },
  {
    id: 'a158',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is "Job Enlargement"?',
    correctAnswer: 'Increasing the scope of a job by adding more tasks of a similar complexity level (horizontal expansion) to reduce monotony.',
    incorrectAnswers: [
      'Increasing the physical size of an employee’s office workspace.',
      'Adding more managerial responsibilities and autonomy to a job (vertical expansion).',
      'Hiring more people to do the exact same job.'
    ],
    rationale: 'Job enlargement is horizontal loading (giving a cashier the additional task of stocking shelves). This differs from Job Enrichment, which is vertical loading (giving the cashier the authority to approve refunds).'
  },
  {
    id: 'a159',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is the primary purpose of "Workers\' Compensation"?',
    correctAnswer: 'A form of insurance providing wage replacement and medical benefits to employees injured in the course of employment in exchange for mandatory relinquishment of the employee\'s right to sue the employer for negligence.',
    incorrectAnswers: [
      'A bonus paid to workers who do not use their sick leave.',
      'Severance pay given to workers who are fired for poor performance.',
      'A government tax used to build public hospitals.'
    ],
    rationale: 'Workers\' comp is a no-fault system. The injured employee gets guaranteed medical care and partial wages without having to prove the employer was negligent, but in return, they generally cannot sue the company.'
  },
  {
    id: 'a160',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is an Applicant Tracking System (ATS)?',
    correctAnswer: 'A software application that enables the electronic handling of recruitment and hiring needs, often automatically screening resumes for keywords before a human reads them.',
    incorrectAnswers: [
      'A GPS device used to physically track delivery drivers.',
      'A legal document used to track the criminal history of applicants.',
      'A government database that tracks all employed citizens.'
    ],
    rationale: 'Because corporate job postings receive hundreds of applications, an ATS parses resumes, scores them based on job description keywords, and helps recruiters manage the interview pipeline efficiently.'
  },
  {
    id: 'a161',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In instructional design, what does the "ADDIE" model stand for?',
    correctAnswer: 'Analyze, Design, Develop, Implement, Evaluate.',
    incorrectAnswers: [
      'Assess, Deliver, Document, Instruct, Examine.',
      'Align, Draft, Deploy, Investigate, Execute.',
      'Appraise, Detail, Discuss, Integrate, Empower.'
    ],
    rationale: 'ADDIE is the classic framework used by HR and trainers to build effective training programs from scratch, ensuring that the training actually solves a business problem and is evaluated afterward.'
  },
  {
    id: 'a162',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What does "Total Rewards" encompass?',
    correctAnswer: 'All of the tools available to the employer that may be used to attract, motivate, and retain employees, including compensation, benefits, work-life balance, performance recognition, and career development.',
    incorrectAnswers: [
      'Only the base salary and government-mandated benefits.',
      'Only the physical gifts (like watches or plaques) given during anniversaries.',
      'The total amount of money a company saves by not giving raises.'
    ],
    rationale: 'Total rewards is a holistic approach. It recognizes that employees work not just for cash, but for a good culture, flexible hours, health insurance, and opportunities to grow.'
  },
  {
    id: 'a163',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a "Graphic Rating Scale" in performance appraisals?',
    correctAnswer: 'A method that lists traits or behaviors (like teamwork or punctuality) and a range of performance values (like 1 to 5, or Poor to Excellent) for the manager to check off.',
    incorrectAnswers: [
      'A highly complex 3D graph used by executives to plot company profits.',
      'A method where employees draw a picture representing their feelings about their boss.',
      'An appraisal that strictly uses only written essay answers.'
    ],
    rationale: 'Graphic rating scales are the most common and simplest performance appraisal method, though they are prone to subjectivity and bias because terms like "Excellent" or "Average" are open to interpretation.'
  },

  // ==========================================
  // BATCH 16 - SET B (Generated)
  // ==========================================
  {
    id: 'b154',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Kasambahay Law (RA 10361), what happens if the employer and the domestic worker agree to a salary lower than the mandated regional minimum wage?',
    correctAnswer: 'The agreement is void. The Kasambahay is still legally entitled to the mandated minimum wage, and the employer can be penalized.',
    incorrectAnswers: [
      'The agreement is valid since it is a mutual contract.',
      'The Kasambahay must be deported to their home province.',
      'The employer must pay double the difference as a bonus.'
    ],
    rationale: 'Minimum wage laws are matters of public policy and cannot be waived. Any contract stipulating a wage below the statutory minimum is null and void.'
  },
  {
    id: 'b155',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Can a married male employee claim Paternity Leave for a child born to a woman he is living with but not legally married to?',
    correctAnswer: 'No, under RA 8187, paternity leave is strictly for a married male employee cohabiting with his LEGITIMATE spouse.',
    incorrectAnswers: [
      'Yes, as long as his name is on the birth certificate.',
      'Yes, but only if they have been living together for 5 years.',
      'No, paternity leave is only for legally adopted children.'
    ],
    rationale: 'The law specifically requires the man to be legally married to and cohabiting with the woman who gives birth (or suffers a miscarriage) to claim the 7-day paid paternity leave.'
  },
  {
    id: 'b156',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under PD 851, what is the ultimate deadline for an employer to pay the mandatory 13th-month pay to their employees?',
    correctAnswer: 'On or before December 24 of every year.',
    incorrectAnswers: [
      'On or before December 31 of every year.',
      'On or before November 30 of every year.',
      'On the employee’s exact hiring anniversary date.'
    ],
    rationale: 'The law dictates that the 13th-month pay must be paid not later than December 24. Some companies split it (half in May/June, half in December), which is completely legal as long as the full amount is paid by Dec 24.'
  },
  {
    id: 'b157',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What defines the authorized cause of "Redundancy"?',
    correctAnswer: 'When the services of an employee are in excess of what is reasonably demanded by the actual requirements of the enterprise (e.g., due to automation or restructuring).',
    incorrectAnswers: [
      'When the company is losing money and must fire people to survive.',
      'When an employee fails to meet their sales quota for 3 consecutive months.',
      'When an employee commits a crime against the company.'
    ],
    rationale: 'Redundancy means the position itself is superfluous. Even if the company is highly profitable, if they buy a machine that does the job of 10 men, those 10 men are redundant and get a higher separation pay (1 month/year).'
  },
  {
    id: 'b158',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What defines the authorized cause of "Retrenchment"?',
    correctAnswer: 'The termination of employment initiated by the employer through no fault of the employees and without prejudice to the latter, resorted to by management during periods of business recession, industrial depression, or seasonal fluctuations to prevent losses.',
    incorrectAnswers: [
      'Firing an employee because they stole office supplies.',
      'Replacing human workers with robots to increase already high profits.',
      'Closing the company completely because the owner wants to retire.'
    ],
    rationale: 'Retrenchment (downsizing) is a measure of last resort to save a sinking company from actual or imminent substantial losses. Because the company is losing money, the separation pay is lower (1/2 month/year).'
  },
  {
    id: 'b159',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 83, what are the normal hours of work for health personnel in cities with a population of at least 1 million, or in hospitals with a bed capacity of at least 100?',
    correctAnswer: 'Eight (8) hours a day, for five (5) days a week, exclusive of time for meals (40 hours/week).',
    incorrectAnswers: [
      'Twelve (12) hours a day, for three (3) days a week.',
      'Ten (10) hours a day, for six (6) days a week.',
      'They have no normal hours and must be on-call 24/7.'
    ],
    rationale: 'To protect healthcare workers in large hospitals/cities from extreme exhaustion, the law limits their regular workweek to 40 hours. If they work a 6th day, they are entitled to overtime plus a 30% premium.'
  },
  {
    id: 'b160',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employee works in a continuous shift (like a call center or factory) where they cannot leave their post, how is their meal period treated?',
    correctAnswer: 'They must be given at least a 20-minute meal break, which is considered compensable (paid) time worked.',
    incorrectAnswers: [
      'They are entirely denied a meal break.',
      'They get a 60-minute break but must clock out.',
      'They must eat while working without stopping.'
    ],
    rationale: 'If the nature of the work requires continuous operation and the employee cannot leave, the employer can shorten the meal break to 20 mins, but MUST pay the employee for that time.'
  },
  {
    id: 'b161',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'How is the Night Shift Differential (NSD) computed?',
    correctAnswer: 'Not less than ten percent (10%) of the employee’s regular wage for each hour of work performed between 10:00 PM and 6:00 AM.',
    incorrectAnswers: [
      '25% of the regular wage for each hour worked past midnight.',
      '30% of the regular wage for the entire 8-hour shift.',
      'A flat rate of PHP 100 per night.'
    ],
    rationale: 'NSD is a premium paid to compensate for the health risks and social inconveniences of working graveyard hours. It is an additional 10% on top of the hourly rate.'
  },
  {
    id: 'b162',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the premium pay if an employee works on their scheduled Rest Day (which is NOT a holiday)?',
    correctAnswer: 'An additional thirty percent (30%) of their regular wage (130% total).',
    incorrectAnswers: [
      'An additional fifty percent (50%) of their regular wage.',
      'An additional one hundred percent (100%) of their regular wage.',
      'There is no premium; they are just given another rest day later.'
    ],
    rationale: 'Work performed on a scheduled rest day commands a 30% premium to discourage employers from depriving employees of their 24-hour weekly rest period.'
  },
  {
    id: 'b163',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What are the three mandatory procedural requirements before a labor union can stage a legal strike?',
    correctAnswer: 'Filing a Notice of Strike, observing the Cooling-off Period, and securing a Strike Vote (majority vote of members).',
    incorrectAnswers: [
      'Filing a grievance, asking for a salary advance, and locking the company gates.',
      'Notifying the media, burning company property, and blocking the street.',
      'Securing approval from the CEO, HR, and the local Mayor.'
    ],
    rationale: 'A strike is a massive disruption. The law requires a Notice of Strike to DOLE, a cooling-off period (15 or 30 days) to allow DOLE to mediate, and a democratic Strike Vote submitted 7 days before the strike.'
  },
  // ==========================================
  // BATCH 17 - SET A (Generated)
  // ==========================================
  {
    id: 'a164',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is an "Assessment Center" in the context of recruitment?',
    correctAnswer: 'A comprehensive evaluation process where candidates participate in multiple exercises (like role-plays, in-basket tests, and group discussions) observed by multiple assessors.',
    incorrectAnswers: [
      'A physical clinic where applicants undergo mandatory medical drug testing.',
      'A government office where professional licenses are issued.',
      'A location where background checks and credit histories are pulled.'
    ],
    rationale: 'Assessment centers are highly valid methods for selecting managers. They simulate the actual stresses and tasks of the job, rather than just relying on what a candidate says in an interview.'
  },
  {
    id: 'a165',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the difference between "Gamification" and a "Training Simulation"?',
    correctAnswer: 'Gamification adds game elements (points, badges) to non-game training, while a simulation creates a highly realistic virtual environment (like a flight simulator) to practice actual skills.',
    incorrectAnswers: [
      'Gamification is for executives, while simulations are for manual laborers.',
      'Simulations require physical board games, while gamification is purely digital.',
      'There is no difference; the terms mean exactly the same thing.'
    ],
    rationale: 'A leaderboard on a sales quiz is gamification. A VR headset that lets a pilot practice an emergency landing without crashing a real plane is a simulation.'
  },
  {
    id: 'a166',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Vesting Period" in employee benefits (e.g., retirement plans or stock options)?',
    correctAnswer: 'The specific length of time an employee must work for the company before they earn the absolute right to keep the employer-provided benefits or stock.',
    incorrectAnswers: [
      'The time of year when all employees are mandated to wear corporate vests.',
      'The waiting period before a new hire gets their first paycheck.',
      'The time limit an employee has to spend their cash bonus before it expires.'
    ],
    rationale: 'Vesting is a retention tool. If a company gives you 1,000 shares of stock on a 4-year vesting schedule, you only get to keep 250 shares each year you stay. If you leave early, you forfeit the unvested shares.'
  },
  {
    id: 'a167',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Management by Exception"?',
    correctAnswer: 'A management style where the manager intervenes only when an employee’s performance significantly deviates from the established standards.',
    incorrectAnswers: [
      'A style where the manager makes exceptions to the rules for their favorite employees.',
      'A style where the manager strictly micromanages every single task.',
      'A style where performance reviews are completely skipped for top performers.'
    ],
    rationale: 'Management by exception empowers employees to work autonomously. The manager only steps in when there is a critical problem (a negative exception) or a massive success (a positive exception) that requires attention.'
  },
  {
    id: 'a168',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is "Job Rotation"?',
    correctAnswer: 'Systematically moving employees from one job to another to broaden their skills and reduce boredom, without necessarily changing their job grade or pay.',
    incorrectAnswers: [
      'Rotating the physical office layout every month to stimulate creativity.',
      'Firing the bottom 10% of employees and replacing them with new hires.',
      'Promoting an employee to management and then demoting them back down.'
    ],
    rationale: 'Job rotation is horizontal. A bank teller might spend one week at the cash window, the next week processing loans, and the next week opening new accounts. It cross-trains the workforce.'
  },
  {
    id: 'a169',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is the primary goal of an "Employee Wellness Program"?',
    correctAnswer: 'To proactively improve the physical and mental health of the workforce, thereby reducing healthcare costs, absenteeism, and lost productivity.',
    incorrectAnswers: [
      'To diagnose and treat major surgeries within the office building.',
      'To force employees to lose weight to meet company image standards.',
      'To completely replace standard medical insurance.'
    ],
    rationale: 'Wellness programs (like gym subsidies, mental health days, or smoking cessation classes) focus on prevention, helping to avoid the massive costs of chronic illness down the line.'
  },
  {
    id: 'a170',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Psychometric Test" in recruitment?',
    correctAnswer: 'A standardized, scientific assessment used to measure a candidate’s mental capabilities, cognitive abilities, or behavioral style.',
    incorrectAnswers: [
      'A test that measures physical strength and endurance.',
      'An interview conducted by a licensed psychiatrist to diagnose mental illness.',
      'A test to see if a candidate can visually identify different colors.'
    ],
    rationale: 'Psychometric tests (like numerical reasoning or personality tests) add objective data to the hiring process, helping to predict how a candidate will perform or fit into the culture.'
  },
  {
    id: 'a171',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In the Phillips ROI Methodology (Level 5), how is the Return on Investment (ROI) of a training program calculated?',
    correctAnswer: 'By converting the business impact of the training into monetary value, subtracting the total cost of the training, and dividing by the cost of the training.',
    incorrectAnswers: [
      'By counting the number of employees who smiled during the training.',
      'By measuring the exact time it took to deliver the training.',
      'By asking the CEO if they felt the training was worth it.'
    ],
    rationale: 'Jack Phillips added a 5th level to Kirkpatrick\'s 4 levels. ROI proves the financial worth of HR. If a sales training cost $10,000 but generated $50,000 in new sales, it has a clear, positive ROI.'
  },
  {
    id: 'a172',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Prevailing Wage"?',
    correctAnswer: 'The typical hourly wage and benefits paid to the majority of workers, laborers, and mechanics in a particular area, often mandated for government contractors.',
    incorrectAnswers: [
      'The absolute lowest minimum wage allowed by federal law.',
      'The maximum wage an executive is allowed to earn.',
      'A wage that automatically increases every time it rains.'
    ],
    rationale: 'Prevailing wage laws ensure that government contractors do not undercut local wage standards to win bids. They must pay what is "prevailing" or standard for that trade in that specific city.'
  },
  {
    id: 'a173',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "9-Box Grid" used for in HR?',
    correctAnswer: 'A talent management tool that evaluates employees across two dimensions: past performance and future potential, often used for succession planning.',
    incorrectAnswers: [
      'A layout used to organize cubicles in an open-plan office.',
      'A legal form required to terminate an employee for cause.',
      'A 9-step mathematical formula for calculating bonuses.'
    ],
    rationale: 'The 9-box grid plots Performance (Low/Med/High) against Potential (Low/Med/High). An employee in the top-right box (High Perf, High Potential) is a "Star" and prime for immediate leadership promotion.'
  },

  // ==========================================
  // BATCH 17 - SET B (Generated)
  // ==========================================
  {
    id: 'b164',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the legal consequence for union OFFICERS who knowingly participate in an illegal strike?',
    correctAnswer: 'They may be validly terminated and lose their employment status immediately.',
    incorrectAnswers: [
      'They are suspended for a maximum of 30 days.',
      'They are immune from any disciplinary action because of union rights.',
      'They are simply fined PHP 1,000 but retain their jobs.'
    ],
    rationale: 'The Labor Code differentiates officers and members in an illegal strike. Officers who knowingly participate can be fired. Ordinary members cannot be fired just for joining, UNLESS they committed illegal acts (violence) during the strike.'
  },
  {
    id: 'b165',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Is a "Sympathy Strike" legal under Philippine Labor Law?',
    correctAnswer: 'No, sympathy strikes are illegal because there is no actual employer-employee dispute between the striking workers and their own employer.',
    incorrectAnswers: [
      'Yes, it is protected under the freedom of speech.',
      'Yes, as long as they file a notice of strike 7 days prior.',
      'No, but they can be legalized if approved by the local Mayor.'
    ],
    rationale: 'A sympathy strike (where workers in Company A strike to support workers in Company B) is illegal because Company A has not committed any unfair labor practice against its own workers.'
  },
  {
    id: 'b166',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employee hurls severe insults and defamatory remarks against their manager in front of other employees, can this be a just cause for termination?',
    correctAnswer: 'Yes, it constitutes serious misconduct and insubordination, which are just causes for termination.',
    incorrectAnswers: [
      'No, the manager must just ignore it as part of free speech.',
      'Yes, but only if the insults were made in writing (libel).',
      'No, the employee must be given at least 5 warnings first.'
    ],
    rationale: 'Serious misconduct (Article 297) includes behavior that is offensive, abusive, and destroys the respect and discipline necessary in the workplace. Severe public defamation of a superior qualifies.'
  },
  {
    id: 'b167',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Labor Code, an employer is generally PROHIBITED from making deductions from an employee’s wage. What is one legal exception?',
    correctAnswer: 'Deductions for insurance premiums or union dues, provided there is written consent or authorization from the employee.',
    incorrectAnswers: [
      'Deductions to pay for a company Christmas party without the employee\'s consent.',
      'Deductions to replace old office chairs.',
      'Deductions to cover the employer\'s personal debts.'
    ],
    rationale: 'Article 113 strictly prohibits unauthorized deductions. Exceptions include government mandates (taxes, SSS), authorized union dues (check-off), or debt to the employer with written authorization.'
  },
  {
    id: 'b168',
    setId: 'B',
    category: 'Labor Laws',
    text: 'When a Labor Arbiter rules that a dismissal was illegal and orders the reinstatement of the employee, what is the nature of the reinstatement order?',
    correctAnswer: 'It is immediately executory, even if the employer appeals the decision to the NLRC.',
    incorrectAnswers: [
      'It is suspended until the Supreme Court makes a final ruling.',
      'It is purely optional on the part of the employer.',
      'It takes effect only after 3 years.'
    ],
    rationale: 'To protect the worker’s livelihood, a reinstatement order by the Labor Arbiter must be executed immediately. The employer can physically reinstate them or reinstate them strictly in the payroll while the appeal is pending.'
  },
  {
    id: 'b169',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are "Non-Compete Clauses" in employment contracts legally valid in the Philippines?',
    correctAnswer: 'Yes, provided the restriction is reasonable in its duration (time) and geographical scope (space), and is necessary to protect the employer’s trade secrets.',
    incorrectAnswers: [
      'No, they are totally unconstitutional and void.',
      'Yes, they are absolute and can ban an employee from working anywhere in the world forever.',
      'Yes, but only for government employees.'
    ],
    rationale: 'The Supreme Court allows non-compete clauses if they are not oppressive. A ban for 1 to 2 years within the same specific industry and geographic location is generally considered valid to protect trade secrets.'
  },
  {
    id: 'b170',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the prescriptive period (deadline) for filing a complaint for Illegal Dismissal?',
    correctAnswer: 'Four (4) years from the time the cause of action accrued (the date of dismissal).',
    incorrectAnswers: [
      'Three (3) years.',
      'One (1) year.',
      'Ten (10) years.'
    ],
    rationale: 'Under the Civil Code (Article 1146), an action based upon an injury to the rights of the plaintiff (like illegal dismissal) must be brought within 4 years. This differs from simple money claims.'
  },
  {
    id: 'b171',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the prescriptive period (deadline) for filing purely Money Claims (e.g., unpaid overtime, unpaid 13th month) arising from employer-employee relations?',
    correctAnswer: 'Three (3) years from the time the cause of action accrued.',
    incorrectAnswers: [
      'Four (4) years.',
      'Five (5) years.',
      'One (1) year.'
    ],
    rationale: 'Article 306 of the Labor Code clearly states that all money claims arising from employer-employee relations shall be filed within 3 years from the time the cause of action accrued, otherwise they are forever barred.'
  },
  {
    id: 'b172',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the primary indicator of "Substantial Capital" in legitimate job contracting under DOLE regulations?',
    correctAnswer: 'The contractor has a paid-up capital of at least Five Million Pesos (PHP 5,000,000.00).',
    incorrectAnswers: [
      'The contractor has a paid-up capital of PHP 100,000.00.',
      'The contractor owns a laptop and a rented desk.',
      'The contractor borrows all equipment from the principal employer.'
    ],
    rationale: 'DO 174 requires contractors to prove they are legitimate businesses capable of paying their workers. A minimum paid-up capital of 5 million pesos is the absolute baseline to be registered as a legitimate contractor.'
  },
  {
    id: 'b173',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'If a female employee goes on a 105-day maternity leave, how is her 13th-month pay for that year computed?',
    correctAnswer: 'The maternity leave period is NOT included in the computation. Only the actual basic salary earned while actively working is divided by 12.',
    incorrectAnswers: [
      'The maternity leave benefit is counted as basic salary and included in the computation.',
      'She forfeits the entire 13th-month pay for that year.',
      'She automatically receives double her 13th-month pay.'
    ],
    rationale: 'Maternity benefits are statutory grants, not actual wages earned from rendering work. Therefore, the 105 days (where she did not receive basic salary from the employer) are excluded from the 13th-month pro-rata computation.'
  },
  // ==========================================
  // BATCH 18 - SET A (Generated)
  // ==========================================
  {
    id: 'a174',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is an "Employee Referral Program"?',
    correctAnswer: 'An internal recruitment method where current employees are encouraged and rewarded (usually with a cash bonus) for recommending qualified candidates for open positions.',
    incorrectAnswers: [
      'A program where employees are referred to external counselors for mental health support.',
      'A disciplinary process where employees are referred to HR for policy violations.',
      'A system where executives refer their family members for guaranteed jobs.'
    ],
    rationale: 'Referral programs are often the most cost-effective source of high-quality hires. Current employees act as a filter because they will rarely risk their own reputation by referring a bad candidate.'
  },
  {
    id: 'a175',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Competency Mapping"?',
    correctAnswer: 'The process of identifying the specific skills, behaviors, and knowledge required to successfully perform a specific job or role within the organization.',
    incorrectAnswers: [
      'Drawing a physical map of the office layout based on employee departments.',
      'A psychological test that maps out an employee’s childhood traumas.',
      'A financial map tracing where training budget money is spent.'
    ],
    rationale: 'Competency mapping creates a clear standard. Once HR knows exactly what a "Senior Developer" needs to do (the map), they can assess current developers against it to find skill gaps for training.'
  },
  {
    id: 'a176',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Golden Parachute"?',
    correctAnswer: 'A highly lucrative severance package guaranteed to top executives if they are dismissed as a result of a merger or takeover.',
    incorrectAnswers: [
      'A retirement plan where employees receive literal gold bars instead of cash.',
      'A safety protocol for employees who travel by airplane frequently.',
      'A government mandate protecting pregnant women from termination.'
    ],
    rationale: 'Golden parachutes are controversial but are designed to keep executives focused on securing the best deal for shareholders during a merger, rather than sabotaging the deal to save their own jobs.'
  },
  {
    id: 'a177',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Forced Distribution" (or Stack Ranking) in performance management?',
    correctAnswer: 'A rating system that requires managers to distribute employee performance ratings along a pre-determined bell curve (e.g., 20% Top, 70% Average, 10% Bottom).',
    incorrectAnswers: [
      'Distributing bonuses randomly to force employees to work harder out of jealousy.',
      'Forcing all employees to receive the exact same average score.',
      'A legal requirement that performance data be distributed to the government.'
    ],
    rationale: 'Popularized by Jack Welch at GE, forced distribution prevents leniency bias by forcing managers to make tough decisions, often leading to the termination of the bottom 10%. However, it can heavily damage teamwork.'
  },
  {
    id: 'a178',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the key difference between a "Job Description" and a "Job Specification"?',
    correctAnswer: 'A Job Description outlines the duties, responsibilities, and tasks OF THE JOB, while a Job Specification outlines the qualifications, skills, and education required OF THE PERSON doing the job.',
    incorrectAnswers: [
      'A Job Description is written by the employee, while a Job Specification is written by the CEO.',
      'A Job Description is for full-time workers, while a Job Specification is for part-timers.',
      'There is no difference; they are exactly the same document.'
    ],
    rationale: 'Job Description (The What): Analyzes data, creates reports. Job Specification (The Who): Needs a Bachelor\'s degree in Statistics, 3 years of Excel experience.'
  },
  {
    id: 'a179',
    setId: 'A',
    category: 'Risk Management',
    text: 'In industrial safety, what does the "Lockout/Tagout" (LOTO) procedure ensure?',
    correctAnswer: 'It ensures that dangerous machines are properly shut off and cannot be accidentally turned on while maintenance or repair work is being performed.',
    incorrectAnswers: [
      'It ensures that employees are locked out of the office if they arrive late.',
      'It is a procedure for locking away confidential employee files.',
      'It ensures that employees tag out on a time clock when going to the bathroom.'
    ],
    rationale: 'LOTO physically locks a machine\'s power source (like a circuit breaker) and places a warning tag on it. It prevents fatal accidents where a worker is inside a machine and another worker unknowingly turns the power on.'
  },
  {
    id: 'a180',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the main advantage of a "Structured Interview" over an "Unstructured Interview"?',
    correctAnswer: 'A structured interview asks the exact same predetermined questions in the exact same order to all candidates, making it highly objective and easier to compare applicants.',
    incorrectAnswers: [
      'A structured interview is completely informal and helps the candidate relax.',
      'A structured interview allows the interviewer to ask personal questions about religion.',
      'A structured interview is conducted entirely by an AI robot without humans.'
    ],
    rationale: 'Unstructured interviews (casual conversations) are highly prone to bias because the interviewer might hire someone just because they share a hobby. Structured interviews focus strictly on job-related criteria.'
  },
  {
    id: 'a181',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'How does "Mentoring" generally differ from "Coaching" in the workplace?',
    correctAnswer: 'Mentoring is a long-term, relationship-based process focused on holistic career development, while coaching is short-term and focused on improving specific skills or immediate performance.',
    incorrectAnswers: [
      'Mentoring is strictly for sports teams, while coaching is for business.',
      'Mentoring involves yelling and discipline, while coaching is gentle.',
      'Coaching is done by the CEO, while mentoring is done by entry-level peers.'
    ],
    rationale: 'A mentor might guide a junior manager over 5 years on how to navigate corporate politics and plan their career. A coach might work with them for 3 weeks specifically to improve their public speaking skills.'
  },
  {
    id: 'a182',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Differential Pay" (e.g., Shift Differential)?',
    correctAnswer: 'Additional compensation paid to an employee as an incentive to work less desirable shifts, such as nights or weekends.',
    incorrectAnswers: [
      'Paying male and female employees different rates for the exact same work.',
      'A tax deduction applied differently based on the employee’s age.',
      'A penalty deducted from an employee’s pay for poor performance.'
    ],
    rationale: 'Shift differentials recognize the disruption to an employee\'s personal life. The Philippine Night Shift Differential (10%) is a statutory form of differential pay.'
  },
  {
    id: 'a183',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Recency Effect" in performance appraisals?',
    correctAnswer: 'A rating error where the manager bases the evaluation almost entirely on the employee’s most recent behaviors (good or bad), ignoring performance from the rest of the year.',
    incorrectAnswers: [
      'A bias where the manager favors employees who were hired most recently.',
      'A legal requirement to only evaluate the past 30 days of work.',
      'A tendency to give high scores because the performance software is a recent update.'
    ],
    rationale: 'If an employee slacks off for 10 months but works incredibly hard in November and December, a manager suffering from the recency effect will give them an excellent annual review, ignoring the 10 bad months.'
  },

  // ==========================================
  // BATCH 18 - SET B (Generated)
  // ==========================================
  {
    id: 'b174',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the SSS contribution requirement for a female employee to qualify for the Expanded Maternity Leave benefit?',
    correctAnswer: 'She must have paid at least three (3) monthly contributions in the twelve-month period immediately preceding the semester of her childbirth or miscarriage.',
    incorrectAnswers: [
      'She must have paid at least thirty-six (36) monthly contributions continuously.',
      'She must have paid one (1) month of contribution.',
      'She does not need any contributions if she is legally married.'
    ],
    rationale: 'The 3-in-12 rule is standard for SSS maternity and sickness benefits to ensure the member is actively contributing to the fund before drawing from it.'
  },
  {
    id: 'b175',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under RA 8187, is there a limit to how many times a male employee can claim Paternity Leave?',
    correctAnswer: 'Yes, it is limited to the first four (4) deliveries or miscarriages of his legitimate spouse with whom he is cohabiting.',
    incorrectAnswers: [
      'No, there is absolutely no limit.',
      'Yes, it is limited to only one (1) delivery in his entire lifetime.',
      'Yes, it is limited to the first ten (10) deliveries.'
    ],
    rationale: 'Similar to the old rule for maternity leave (before the Expanded Maternity Leave Act removed the cap for women), paternity leave is capped at the first 4 deliveries to align with family planning policies.'
  },
  {
    id: 'b176',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Magna Carta of Women (RA 9710), what is the Special Leave Benefit for Women (Gynecological Leave)?',
    correctAnswer: 'A paid leave of up to two (2) months for women who undergo surgery caused by gynecological disorders, provided they have rendered 6 months of continuous service.',
    incorrectAnswers: [
      'A paid leave of up to six (6) months for cosmetic surgery.',
      'A mandatory 3-day leave every month for dysmenorrhea.',
      'A lifetime pension for women who develop breast cancer.'
    ],
    rationale: 'This leave allows women to recover from major surgeries specific to the female reproductive system (e.g., hysterectomy, ovarian cyst removal) without exhausting their regular sick leaves.'
  },
  {
    id: 'b177',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Under the Anti-Violence Against Women and Their Children Act (RA 9262), what leave benefit is provided to victims?',
    correctAnswer: 'A paid leave of up to ten (10) days in addition to other paid leaves, to attend to medical and legal concerns.',
    incorrectAnswers: [
      'A paid leave of up to thirty (30) days.',
      'A one-time cash grant of PHP 50,000.',
      'There is no paid leave, only free legal counsel from the employer.'
    ],
    rationale: 'VAWC leave is designed to give female victims the time they need to go to court, get protection orders, or seek medical/psychological help without losing their income.'
  },
  {
    id: 'b178',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Can the 10-day VAWC leave be extended?',
    correctAnswer: 'Yes, it can be extended beyond 10 days if specified in the protection order issued by the barangay or the court.',
    incorrectAnswers: [
      'No, 10 days is the absolute maximum under all circumstances.',
      'Yes, but only if the employer voluntarily agrees.',
      'Yes, but the extended days are automatically deducted from their 13th-month pay.'
    ],
    rationale: 'While the statutory baseline is 10 days, the law empowers judges and barangay officials to order an extension if the victim\'s safety and legal situation necessitate it.'
  },
  {
    id: 'b179',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employer pays wages using a bouncing check, what specific criminal law do they violate in addition to Labor Code violations?',
    correctAnswer: 'Batas Pambansa Blg. 22 (The Bouncing Checks Law).',
    incorrectAnswers: [
      'Republic Act No. 9262 (Anti-VAWC Law).',
      'The Anti-Money Laundering Act (AMLA).',
      'The Cybercrime Prevention Act.'
    ],
    rationale: 'Paying wages via a check that bounces (insufficient funds) is not just an underpayment issue; it is a criminal offense under BP 22, subjecting the employer to fines and potential imprisonment.'
  },
  {
    id: 'b180',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following employees is EXEMPT from receiving the mandatory 13th-Month Pay?',
    correctAnswer: 'Employees who are paid purely on a commission, boundary, or task basis (e.g., real estate brokers, taxi drivers).',
    incorrectAnswers: [
      'Probationary employees.',
      'Rank-and-file employees who have only worked for 2 months.',
      'Employees who resigned in November.'
    ],
    rationale: 'PD 851 exempts employers from paying 13th-month pay to employees paid on a purely commission/boundary basis because their income is tied directly to results, not a fixed basic salary.'
  },
  {
    id: 'b181',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In Philippine labor taxation and compensation, what are "De Minimis Benefits"?',
    correctAnswer: 'Facilities or privileges (like rice subsidy, uniform allowance, or medical cash allowance) of relatively small value that are exempt from income tax.',
    incorrectAnswers: [
      'Massive cash bonuses given to executives.',
      'Minimum wage rates in highly urbanized cities.',
      'Benefits given exclusively to minor children of employees.'
    ],
    rationale: 'De minimis (of minimal importance) benefits are given by employers to promote health, goodwill, and efficiency. Because they are capped at specific low amounts (e.g., PHP 2,000/month for rice), the BIR does not tax them.'
  },
  {
    id: 'b182',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the legal lifespan of a Collective Bargaining Agreement (CBA) under the Labor Code?',
    correctAnswer: 'The representation aspect lasts for five (5) years, while the economic provisions must be renegotiated not later than three (3) years.',
    incorrectAnswers: [
      'It lasts indefinitely until the union decides to dissolve it.',
      'It must be completely renegotiated every single year.',
      'It lasts for exactly 10 years without any renegotiation.'
    ],
    rationale: 'To ensure stability, the union remains the exclusive bargaining agent for 5 years. However, because the economy (inflation) changes quickly, the economic provisions (wages, benefits) must be reviewed every 3 years.'
  },
  {
    id: 'b183',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Freedom Period" in relation to a Collective Bargaining Agreement (CBA)?',
    correctAnswer: 'The last sixty (60) days of the 5-year lifetime of a CBA, during which another union may file a petition for a certification election to challenge the incumbent union.',
    incorrectAnswers: [
      'A 60-day period where employees are allowed to strike without a notice.',
      'A period where employees can freely leave work early on Fridays.',
      'The 30 days after an employee is hired where they can quit without notice.'
    ],
    rationale: 'Outside of this 60-day window, the "Contract Bar Rule" applies, meaning the existing CBA bars any other union from trying to take over. The Freedom Period is the only legal window for a rival union to step in.'
  },
  // ==========================================
  // BATCH 19 - SET A (Generated)
  // ==========================================
  {
    id: 'a184',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Contingent Worker"?',
    correctAnswer: 'A freelancer, independent contractor, or temporary agency worker hired on a non-permanent basis to fulfill specific, short-term project needs.',
    incorrectAnswers: [
      'An employee whose employment depends strictly on them passing a daily drug test.',
      'A permanent employee who works strictly on a night shift.',
      'An executive whose salary is completely contingent on stock market performance.'
    ],
    rationale: 'Contingent workers provide extreme flexibility for companies to scale up or down quickly without taking on the long-term fixed costs and legal liabilities of regular employees.'
  },
  {
    id: 'a185',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the difference between "Explicit Knowledge" and "Tacit Knowledge"?',
    correctAnswer: 'Explicit knowledge can be easily written down and taught (like a manual), while tacit knowledge is gained from personal experience and is difficult to articulate (like leadership instincts).',
    incorrectAnswers: [
      'Explicit knowledge is illegal, while tacit knowledge is legal.',
      'Tacit knowledge is written in books, while explicit knowledge is learned through dreams.',
      'There is no difference; both are easily downloaded to a USB drive.'
    ],
    rationale: 'Training programs easily handle explicit knowledge (how to use the cash register). Tacit knowledge (how to calm down an incredibly angry customer) is usually transferred through mentoring and experience.'
  },
  {
    id: 'a186',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Hazard Pay"?',
    correctAnswer: 'Additional compensation given to employees who perform duties under dangerous, extreme, or physically stressful conditions.',
    incorrectAnswers: [
      'A deduction taken from an employee\'s salary if they cause an accident.',
      'A mandatory fee paid to the government for hazardous waste disposal.',
      'A bonus given for completing a fire drill faster than average.'
    ],
    rationale: 'Nurses during a pandemic, deep-sea welders, or miners receive hazard pay because their base salary alone does not adequately compensate them for the severe risk to their life and health.'
  },
  {
    id: 'a187',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Spillover Effect" (or Past-Performance Bias) in appraisals?',
    correctAnswer: 'A rating error where a manager allows an employee’s high or low performance from a PREVIOUS appraisal period to unfairly influence the CURRENT appraisal period.',
    incorrectAnswers: [
      'A bias where an employee accidentally spills coffee on their appraisal form.',
      'A tendency for a manager\'s bad mood to spill over into their ratings.',
      'A legal issue where confidential appraisal data spills over to the public.'
    ],
    rationale: 'If an employee was a superstar in 2022, a manager might blindly give them a superstar rating in 2023 out of habit (spillover), even if the employee actually slacked off in 2023.'
  },
  {
    id: 'a188',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is a "Time and Motion Study"?',
    correctAnswer: 'A scientific method used to analyze the exact time and physical movements required to perform a specific job, aimed at eliminating wasted effort and establishing standard times.',
    incorrectAnswers: [
      'A psychological study on how employees perceive the passage of time.',
      'A law requiring employers to give employees time to stretch every hour.',
      'A study analyzing commute times from home to the office.'
    ],
    rationale: 'Pioneered by Frederick Taylor and the Gilbreths, time and motion studies are heavily used in manufacturing (e.g., figuring out the exact most efficient way to assemble a burger or a car part).'
  },
  {
    id: 'a189',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is a "Return to Work" (RTW) program?',
    correctAnswer: 'A formal plan designed to proactively help injured or ill employees safely return to productive work as soon as possible, often involving temporary light-duty assignments.',
    incorrectAnswers: [
      'A program that forces employees to return to the office after a vacation.',
      'A legal document signed when an employee is rehired after being fired.',
      'A program where retired employees come back as unpaid interns.'
    ],
    rationale: 'RTW programs benefit both parties. The employee maintains their income and mental well-being, and the employer reduces workers\' compensation costs and retains an experienced worker.'
  },
  {
    id: 'a190',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Realistic Job Preview" (RJP)?',
    correctAnswer: 'A recruiting approach where applicants are given an honest, unfiltered look at both the positive AND negative aspects of the job before they accept an offer.',
    incorrectAnswers: [
      'A virtual reality video game played during an interview.',
      'Lying to the candidate about the job to ensure they accept the offer.',
      'A government mandate to broadcast all job openings on television.'
    ],
    rationale: 'RJPs reduce early turnover. If a job involves getting yelled at by customers 20% of the time, telling candidates this upfront scares away those who can\'t handle it, leaving only those who are mentally prepared.'
  },
  {
    id: 'a191',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the difference between "Synchronous" and "Asynchronous" e-learning?',
    correctAnswer: 'Synchronous learning happens in real-time with an instructor (like a live Zoom class), while asynchronous learning can be completed at the learner’s own pace (like a pre-recorded video module).',
    incorrectAnswers: [
      'Synchronous requires reading a book, while asynchronous requires listening to audio.',
      'Synchronous is for soft skills, while asynchronous is for hard skills.',
      'There is no difference; both require a live instructor.'
    ],
    rationale: 'Asynchronous learning is highly flexible and scalable, but synchronous learning allows for immediate Q&A and stronger peer interaction.'
  },
  {
    id: 'a192',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "COLA" (Cost of Living Allowance)?',
    correctAnswer: 'An upward adjustment made to wages or salaries to counteract the effects of inflation and maintain the employee\'s purchasing power.',
    incorrectAnswers: [
      'A free soda provided in the company cafeteria.',
      'A deduction made to pay for office air conditioning.',
      'A special tax paid by employees living in major cities.'
    ],
    rationale: 'If inflation rises by 5%, but an employee\'s salary stays the same, they essentially took a 5% pay cut in purchasing power. COLA offsets this economic reality.'
  },
  {
    id: 'a193',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a "Calibration Meeting" in performance management?',
    correctAnswer: 'A meeting where different managers come together to discuss and align their performance ratings of employees to ensure fairness and consistency across the entire company.',
    incorrectAnswers: [
      'A meeting where machines and technical equipment are calibrated for safety.',
      'A meeting where the CEO yells at managers for poor sales.',
      'A one-on-one meeting between an employee and their spouse regarding work stress.'
    ],
    rationale: 'Manager A might be naturally harsh, and Manager B might be naturally lenient. Calibration meetings force them to debate their ratings to ensure an "A" rating means the exact same thing in both departments.'
  },

  // ==========================================
  // BATCH 19 - SET B (Generated)
  // ==========================================
  {
    id: 'b184',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, what document must a foreign national secure from DOLE before they can legally work in the Philippines?',
    correctAnswer: 'An Alien Employment Permit (AEP).',
    incorrectAnswers: [
      'A Special Resident Retiree\'s Visa (SRRV).',
      'A Philippine Passport.',
      'A NBI Clearance.'
    ],
    rationale: 'Article 40 of the Labor Code requires any alien seeking admission to the Philippines for employment purposes to obtain an AEP. This is only granted if no Filipino is competent, able, and willing to do the specific job.'
  },
  {
    id: 'b185',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Visitorial and Enforcement Power" of the Secretary of Labor?',
    correctAnswer: 'The absolute authority of DOLE inspectors to enter any workplace at any time to inspect records, investigate conditions, and immediately order compliance with labor standards.',
    incorrectAnswers: [
      'The power to visit employees\' private homes to check if they are actually sick.',
      'The power to arrest CEOs without a warrant.',
      'The power to permanently shut down foreign embassies.'
    ],
    rationale: 'Under Article 128, DOLE does not need a court order to inspect a factory for minimum wage compliance or safety hazards. If severe imminent danger is found, they can immediately halt operations (stoppage order).'
  },
  {
    id: 'b186',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Certification Election"?',
    correctAnswer: 'A democratic process where employees vote via secret ballot to determine which labor union (if any) will serve as their sole and exclusive bargaining agent.',
    incorrectAnswers: [
      'An election where employees vote for the company\'s CEO.',
      'An election where managers vote on which employees to fire.',
      'A government election for the Secretary of Labor.'
    ],
    rationale: 'If there are two rival unions claiming to represent the workers, DOLE conducts a certification election. The union that gets the majority vote of the valid votes cast becomes the exclusive bargaining agent.'
  },
  {
    id: 'b187',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following is considered an Unfair Labor Practice (ULP) by an EMPLOYER?',
    correctAnswer: 'Forcing an employee to sign a "Yellow Dog Contract" (an agreement promising not to join a union as a condition of employment).',
    incorrectAnswers: [
      'Firing an employee for stealing company laptops.',
      'Refusing to give a Christmas bonus due to severe bankruptcy.',
      'Implementing a strict dress code.'
    ],
    rationale: 'A Yellow Dog Contract is explicitly illegal under Article 259 because it completely destroys the constitutional right of workers to self-organization.'
  },
  {
    id: 'b188',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which of the following is considered an Unfair Labor Practice (ULP) by a LABOR UNION?',
    correctAnswer: 'Featherbedding (causing an employer to pay for services that are not actually performed or not needed).',
    incorrectAnswers: [
      'Staging a completely legal and peaceful strike after following all DOLE rules.',
      'Negotiating for a 10% wage increase.',
      'Filing a grievance against an abusive manager.'
    ],
    rationale: 'Article 260 outlines ULPs committed by unions. Featherbedding (e.g., forcing a logistics company to hire union "loaders" to sit around doing nothing because machines do the loading) is a form of illegal extortion.'
  },
  {
    id: 'b189',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum legal duration of an Apprenticeship agreement in the Philippines?',
    correctAnswer: 'It shall not exceed six (6) months.',
    incorrectAnswers: [
      'It shall not exceed three (3) months.',
      'It shall not exceed one (1) year.',
      'It can last indefinitely.'
    ],
    rationale: 'An apprenticeship is for highly technical industries requiring theoretical instruction and on-the-job training. By law, it cannot exceed 6 months to prevent employers from keeping workers as perpetually cheap labor.'
  },
  {
    id: 'b190',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum legal duration of a Learnership agreement?',
    correctAnswer: 'It shall not exceed three (3) months.',
    incorrectAnswers: [
      'It shall not exceed six (6) months.',
      'It shall not exceed one (1) year.',
      'There is no maximum limit.'
    ],
    rationale: 'Unlike apprentices (highly technical), learners are for semi-skilled industrial occupations. Because the skills are easier to learn, the maximum training period is shorter (3 months max).'
  },
  {
    id: 'b191',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, what is the minimum wage rate that must be paid to recognized Apprentices and Learners?',
    correctAnswer: 'Not less than seventy-five percent (75%) of the applicable minimum wage.',
    incorrectAnswers: [
      'Fifty percent (50%) of the minimum wage.',
      'One hundred percent (100%) of the minimum wage.',
      'Zero; it is entirely unpaid training.'
    ],
    rationale: 'Because they are receiving valuable training and are not yet fully productive, employers are given a discount on their wages (paying 75%). However, they must be registered with TESDA to avail of this.'
  },
  {
    id: 'b192',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are employers allowed to pay Persons with Disabilities (PWDs) less than the minimum wage?',
    correctAnswer: 'No, under the Magna Carta for Disabled Persons, qualified disabled employees must be paid 100% of the applicable minimum wage and receive the same benefits as an able-bodied person.',
    incorrectAnswers: [
      'Yes, they can legally be paid 50% of the minimum wage.',
      'Yes, they can be paid 75% like apprentices.',
      'Yes, but only if the PWD is deaf or mute.'
    ],
    rationale: 'The old Labor Code allowed a 75% rate for disabled workers, but this was expressly superseded by the Magna Carta for Disabled Persons (RA 7277) to ensure total equality in compensation for equal work.'
  },
  {
    id: 'b193',
    setId: 'B',
    category: 'Labor Laws',
    text: 'To encourage the employment of Senior Citizens (RA 9994), what incentive is given to private employers?',
    correctAnswer: 'An additional deduction from their gross income equivalent to fifteen percent (15%) of the total amount paid as salaries and wages to the senior citizen.',
    incorrectAnswers: [
      'The employer is totally exempt from paying corporate taxes for 5 years.',
      'The employer can pay the senior citizen 50% below the minimum wage.',
      'The employer is given a cash grant of PHP 1,000,000.'
    ],
    rationale: 'To fight age discrimination and help seniors earn a living, the government provides a tax incentive. If a company pays a senior 100k a year, they can deduct 115k from their taxable corporate income.'
  },
  // ==========================================
  // BATCH 20 - SET A (Generated)
  // ==========================================
  {
    id: 'a194',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the concept of "Candidate Experience" in recruitment?',
    correctAnswer: 'The overall perception and feelings a job seeker has about an employer based on their interaction during the entire hiring process, from the application to the final offer or rejection.',
    incorrectAnswers: [
      'The number of years a candidate has worked in a specific industry.',
      'A mandatory training seminar for new hires.',
      'The physical resume submitted by the candidate.'
    ],
    rationale: 'A poor candidate experience (like ghosting applicants or having a broken application website) ruins employer branding. Good candidates will reject offers or tell their peers not to apply.'
  },
  {
    id: 'a195',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In the Kirkpatrick Model of Training Evaluation, what does Level 4 evaluate?',
    correctAnswer: 'Results: The actual business impact or return on investment (e.g., increased sales, decreased errors) resulting from the training.',
    incorrectAnswers: [
      'Reaction: How much the trainees liked the snacks and the trainer.',
      'Learning: Whether the trainees passed the multiple-choice test.',
      'Behavior: Whether the trainees actually use the skills on the job.'
    ],
    rationale: 'Level 1 is Reaction. Level 2 is Learning. Level 3 is Behavior. Level 4 (Results) is the hardest to measure but the most important to executives because it proves the training actually helped the company make or save money.'
  },
  {
    id: 'a196',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Phantom Stock"?',
    correctAnswer: 'A compensation plan that gives employees the financial benefits of stock ownership (cash bonuses tied to stock price increases) without actually giving them real company shares.',
    incorrectAnswers: [
      'Stock that is secretly stolen from the company by corrupt executives.',
      'A scam where employees are forced to buy fake company shares.',
      'Stock options that automatically expire after 24 hours.'
    ],
    rationale: 'Phantom stock is a great way to motivate employees to care about the company’s valuation (acting like owners) without diluting the actual ownership or voting power of the real shareholders.'
  },
  {
    id: 'a197',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Primacy Effect" (First Impression Error) in performance appraisals?',
    correctAnswer: 'A rating bias where a manager’s evaluation is heavily and unfairly influenced by their very first interaction with the employee, ignoring their subsequent performance.',
    incorrectAnswers: [
      'A bias where the manager only remembers the last week of performance.',
      'A bias where the manager favors the first person who arrives at the office.',
      'A tendency to rate employees highly if they went to a primary school.'
    ],
    rationale: 'If an employee makes a brilliant suggestion on their first day but does mediocre work for the next 11 months, a manager with primacy bias will still rate them highly because that strong first impression stuck.'
  },
  {
    id: 'a198',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the "Critical Incident Technique" in Job Analysis?',
    correctAnswer: 'A method of gathering job data by asking employees and managers to recall specific past events where an employee’s behavior was either highly effective or highly ineffective in a given situation.',
    incorrectAnswers: [
      'A technique used exclusively to investigate fatal workplace accidents.',
      'A time management tool for executives.',
      'A legal process for firing an employee on the spot.'
    ],
    rationale: 'Instead of asking vague questions like "What do you do?", this technique asks for stories ("Tell me about a time a customer was furious and what you did"). This helps identify the exact behaviors that make a person successful in the role.'
  },
  {
    id: 'a199',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is an HMO (Health Maintenance Organization) in the context of employee benefits?',
    correctAnswer: 'A private health insurance provider that companies partner with to give employees access to a specific network of doctors, hospitals, and clinics for medical care.',
    incorrectAnswers: [
      'A government agency that regulates workplace safety.',
      'A mandatory tax deducted strictly for senior citizens.',
      'A physical gym located inside the company building.'
    ],
    rationale: 'While PhilHealth is the government-mandated health insurance, most competitive companies in the Philippines provide a private HMO (like Maxicare or Medicard) as a standard benefit to cover actual hospital bills and checkups.'
  },
  {
    id: 'a200',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the shift in recruitment philosophy from "Cultural Fit" to "Cultural Add"?',
    correctAnswer: 'Instead of hiring people who think and act exactly like current employees (Cultural Fit), hiring people who bring new, diverse perspectives and skills that the company currently lacks (Cultural Add).',
    incorrectAnswers: [
      'Hiring people from different countries exclusively to save money.',
      'Forcing employees to participate in mandatory cultural dance classes.',
      'There is no shift; they mean the exact same thing.'
    ],
    rationale: 'Hiring strictly for "Cultural Fit" often leads to a homogenous workforce where everyone agrees with the boss. "Cultural Add" promotes diversity, innovation, and prevents groupthink.'
  },
  {
    id: 'a201',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Reverse Mentoring"?',
    correctAnswer: 'A mentoring arrangement where a younger or more junior employee mentors an older or senior executive, often on topics like new technology, social media, or generational trends.',
    incorrectAnswers: [
      'When a mentor formally resigns and the mentee takes over their job.',
      'When an employee refuses to be mentored and mentors themselves.',
      'A disciplinary action where a manager is demoted to a trainee.'
    ],
    rationale: 'Reverse mentoring bridges generational gaps. A 23-year-old Gen Z employee might mentor a 60-year-old VP on how to effectively use TikTok for corporate marketing or how to communicate with younger staff.'
  },
  {
    id: 'a202',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Pakyaw" (or Task-Basis) in compensation?',
    correctAnswer: 'A payment system where a worker is paid a fixed, agreed-upon lump sum for completing a specific entire task or project, regardless of how long it takes them to finish it.',
    incorrectAnswers: [
      'A monthly salary paid specifically to agricultural workers.',
      'A penalty deducted when an employee breaks company equipment.',
      'A government mandated bonus for working on holidays.'
    ],
    rationale: 'In the "pakyaw" system (common in construction or agriculture), if the worker agrees to paint a house for PHP 10,000, they get PHP 10,000 whether it takes them 3 days or 3 weeks. They are incentivized to finish quickly.'
  },
  {
    id: 'a203',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the primary benefit of including a "Self-Appraisal" in the performance review process?',
    correctAnswer: 'It empowers employees to reflect on their own achievements and struggles, providing the manager with the employee’s perspective before the formal rating is finalized.',
    incorrectAnswers: [
      'It allows the manager to skip doing the appraisal entirely to save time.',
      'It guarantees that the employee will receive a higher bonus.',
      'It legally prevents the employee from suing the company.'
    ],
    rationale: 'Self-appraisals ensure the review is a two-way conversation. It often highlights accomplishments the manager might have forgotten and exposes areas where the manager and employee have wildly different views on performance.'
  },

  // ==========================================
  // BATCH 20 - SET B (Generated)
  // ==========================================
  {
    id: 'b194',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the DOLE Single Entry Approach (SENA)?',
    correctAnswer: 'A mandatory 30-day conciliation-mediation process designed to provide a speedy, impartial, and inexpensive settlement of labor issues before they escalate into full-blown lawsuits.',
    incorrectAnswers: [
      'A rule that all employees must enter the building through one specific door for security.',
      'A tax system where all corporate taxes are paid through a single bank.',
      'A process where an employee is fired on their very first day (single entry).'
    ],
    rationale: 'Before a worker can file an illegal dismissal case with the Labor Arbiter, DOLE requires them to go through SENA. A mediator tries to get the employer and employee to agree to a cash settlement to avoid years of litigation.'
  },
  {
    id: 'b195',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the prescriptive period for criminal offenses penalized under the Labor Code (e.g., illegal recruitment, ULP, BP 22 for wages)?',
    correctAnswer: 'Three (3) years from the time of the commission of the offense.',
    incorrectAnswers: [
      'One (1) year.',
      'Four (4) years.',
      'Ten (10) years.'
    ],
    rationale: 'Under Article 305 of the Labor Code, offenses penalized under the Code and the rules and regulations issued pursuant thereto shall prescribe in three (3) years.'
  },
  {
    id: 'b196',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 110 of the Labor Code (Worker Preference in Case of Bankruptcy), if a company goes bankrupt, who gets paid first?',
    correctAnswer: 'The unpaid wages and monetary claims of the workers enjoy first preference over all other creditors, including the government and banks.',
    incorrectAnswers: [
      'The government gets paid first for unpaid taxes.',
      'The banks get paid first for corporate loans.',
      'The CEO gets their severance package first.'
    ],
    rationale: 'Labor is highly protected. If a company goes bankrupt and its assets are liquidated, before the bank can take the money for loans, the workers must be paid their unpaid wages.'
  },
  {
    id: 'b197',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the composition of the National Labor Relations Commission (NLRC)?',
    correctAnswer: 'It is a tripartite body composed of representatives from the Government, the Workers sector, and the Employers sector.',
    incorrectAnswers: [
      'It is composed solely of retired Supreme Court Justices.',
      'It is composed solely of labor union presidents.',
      'It is composed of HR Managers from top corporations.'
    ],
    rationale: 'Tripartism is a core principle in Philippine labor relations. To ensure fairness, the NLRC commissioners are drawn equally from the ranks of workers, employers, and the public/government sector.'
  },
  {
    id: 'b198',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Can a labor union legally declare a strike purely because the employer refuses to increase wages, even if there is no Collective Bargaining Agreement (CBA) in place?',
    correctAnswer: 'No, a strike based on an economic issue is only valid if it stems from a deadlock in collective bargaining negotiations.',
    incorrectAnswers: [
      'Yes, wages are a fundamental right and strikes are always allowed for wage issues.',
      'Yes, provided they get approval from the local police.',
      'No, strikes regarding wages are permanently banned in the Philippines.'
    ],
    rationale: 'There are only two valid grounds for a strike: Unfair Labor Practice (ULP) or CBA Deadlock. If there is no CBA being negotiated, the union cannot strike just because they want a raise.'
  },
  {
    id: 'b199',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In labor relations, what is a "Lockout"?',
    correctAnswer: 'The temporary refusal of an employer to furnish work to their employees as a result of an industrial dispute (essentially, the employer’s version of a strike).',
    incorrectAnswers: [
      'Locking the company gates at 5:00 PM to force employees to go home.',
      'An employee locking themselves in their office to avoid work.',
      'A software feature that locks an employee’s computer if they visit social media.'
    ],
    rationale: 'If a union threatens a strike to paralyze the company, the employer might preemptively declare a lockout (shutting down operations) to pressure the union into accepting their terms. Like a strike, a lockout requires notice and a vote.'
  },
  {
    id: 'b200',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Company Union"?',
    correctAnswer: 'A labor organization whose formation, function, or administration has been assisted, controlled, or dominated by the employer.',
    incorrectAnswers: [
      'A union that successfully encompasses every single employee in the company.',
      'A union formed exclusively by the top executives of the company.',
      'A legal union that the company strongly supports and provides funding for.'
    ],
    rationale: 'Forming or supporting a "Company Union" is an Unfair Labor Practice (ULP) by the employer (Article 259). The employer does this to create a puppet union, preventing a genuine, independent union from fighting for the workers.'
  },
  {
    id: 'b201',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Closed Shop Agreement" in a CBA?',
    correctAnswer: 'A provision requiring all new hires to become members of the union as a condition for employment, and to remain members in good standing to keep their jobs.',
    incorrectAnswers: [
      'A rule that the physical factory must remain closed on Sundays.',
      'A policy where employees are not allowed to buy items from rival companies.',
      'An agreement that the company will not hire any more employees for 5 years.'
    ],
    rationale: 'A closed shop agreement is a form of union security clause. It is legal and designed to strengthen the union. If an employee resigns from the union, the company is legally obligated to fire them.'
  },
  {
    id: 'b202',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is an "Agency Fee"?',
    correctAnswer: 'An amount assessed on non-union members who accept and enjoy the benefits of a CBA negotiated by the recognized union.',
    incorrectAnswers: [
      'A fee paid to a recruitment agency for hiring a new employee.',
      'A tax paid to the government for registering a labor union.',
      'A fee deducted from a worker’s pay to cover company damages.'
    ],
    rationale: 'Even if an employee refuses to join the union, they still get the wage increases negotiated by the union in the CBA. To prevent "free riders," the law allows the company to deduct an agency fee (equivalent to union dues) from non-members.'
  },
  {
    id: 'b203',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Is the right to strike absolute and protected under all circumstances?',
    correctAnswer: 'No, strikes must comply with strict procedural requirements (Notice, Strike Vote, Cooling-off period) and must not involve violence or coercion, otherwise they become illegal.',
    incorrectAnswers: [
      'Yes, the Constitution guarantees the right to strike no matter what.',
      'Yes, as long as no property is physically destroyed.',
      'No, only government employees have the absolute right to strike.'
    ],
    rationale: 'While the right to strike is constitutional, its exercise is regulated by the Labor Code. A strike that fails to secure a majority vote, or where union members block the gates and assault managers, is illegal.'
  },
  // ==========================================
  // BATCH 21 - SET A (Generated)
  // ==========================================
  {
    id: 'a204',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is an "Employer Value Proposition" (EVP)?',
    correctAnswer: 'The unique set of benefits, culture, and career opportunities that an employer offers to employees in exchange for their skills and commitment.',
    incorrectAnswers: [
      'The total monetary value of all the equipment the employer owns.',
      'A legally binding contract that forces employees to stay for 5 years.',
      'The stock market valuation of the company.'
    ],
    rationale: 'EVP is the core of employer branding. It answers the candidate\'s question: "Why should I bring my talents to your company instead of your competitor?" It goes beyond salary to include work-life balance, purpose, and growth.'
  },
  {
    id: 'a205',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In David Kolb’s Learning Styles, what is "Experiential Learning"?',
    correctAnswer: 'The process of learning through experience, specifically defined as "learning through reflection on doing."',
    incorrectAnswers: [
      'Learning strictly by reading theoretical textbooks.',
      'A method where employees learn by being hypnotized.',
      'Learning by copying exactly what the manager writes on a whiteboard.'
    ],
    rationale: 'Kolb believed that adults learn best not by passively listening, but by doing a task (Concrete Experience), reflecting on what happened (Reflective Observation), learning from it, and trying again.'
  },
  {
    id: 'a206',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is the primary difference between "Merit Pay" and a "Bonus"?',
    correctAnswer: 'Merit pay becomes a permanent increase to the employee’s base salary, while a bonus is a one-time lump sum payment that does not increase base salary.',
    incorrectAnswers: [
      'Merit pay is for executives, while a bonus is for rank-and-file.',
      'Merit pay is tax-free, while a bonus is fully taxable.',
      'There is no difference; they are exactly the same thing.'
    ],
    rationale: 'Because merit pay increases the base salary, its cost compounds over the years (affecting future 13th-month pay and retirement). A bonus is a safer, one-time reward for the employer.'
  },
  {
    id: 'a207',
    setId: 'A',
    category: 'Performance Management',
    text: 'What does "BARS" stand for in performance management?',
    correctAnswer: 'Behaviorally Anchored Rating Scales.',
    incorrectAnswers: [
      'Business Analytics and Reporting Systems.',
      'Baseline Annual Review Standards.',
      'Basic Assessment and Rating Systems.'
    ],
    rationale: 'Unlike a graphic rating scale that just asks for a 1-5 rating on "Teamwork," BARS anchors the numbers to specific behaviors. (e.g., A "5" means "Voluntarily stays late to help peers finish projects").'
  },
  {
    id: 'a208',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'According to the Hackman & Oldham Job Characteristics Model, what are the core dimensions that make a job intrinsically motivating?',
    correctAnswer: 'Skill variety, task identity, task significance, autonomy, and feedback.',
    incorrectAnswers: [
      'High salary, free food, comfortable chairs, air conditioning, and bonuses.',
      'Strict rules, constant supervision, heavy workload, fear of firing, and quotas.',
      'Short hours, long vacations, unlimited internet, and no deadlines.'
    ],
    rationale: 'This model proves that jobs can be redesigned to motivate workers. For example, giving a worker "autonomy" (the freedom to decide how to do their work) massively increases their sense of responsibility and satisfaction.'
  },
  {
    id: 'a209',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is an "Employee Assistance Program" (EAP)?',
    correctAnswer: 'A confidential, employer-funded intervention program designed to help employees resolve personal problems (like marital issues, financial stress, or substance abuse) that may be adversely affecting their performance.',
    incorrectAnswers: [
      'A program that lends money to employees to buy houses.',
      'A disciplinary program for employees who constantly arrive late.',
      'A government mandate to hire people with criminal records.'
    ],
    rationale: 'EAPs recognize that employees are humans whose personal lives affect their work. Providing free, confidential counseling is often cheaper than firing a good employee who is just going through a temporary crisis.'
  },
  {
    id: 'a210',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the difference between a "Talent Pool" and a "Talent Pipeline"?',
    correctAnswer: 'A talent pool is a broad database of all potential candidates, while a talent pipeline is a refined group of highly qualified candidates being actively nurtured to fill a specific upcoming role.',
    incorrectAnswers: [
      'A talent pool is for internal hires, while a pipeline is for external hires.',
      'A talent pool is used in IT, while a pipeline is used in manufacturing.',
      'There is no difference.'
    ],
    rationale: 'You might have 1,000 resumes in your talent pool. But your talent pipeline for the "Regional Manager" role might consist of just 3 people you regularly take to lunch so they are ready to accept an offer when the current manager retires.'
  },
  {
    id: 'a211',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Just-In-Time" (JIT) Training?',
    correctAnswer: 'Training that is delivered exactly when and where the employee needs it to perform a task, rather than months in advance.',
    incorrectAnswers: [
      'Training that is strictly limited to time management skills.',
      'A training session that starts precisely on the dot without waiting for latecomers.',
      'Training that is delivered to employees right before they are fired.'
    ],
    rationale: 'Instead of forcing a new hire to memorize 50 software protocols on Day 1, JIT training provides a short, 2-minute video on how to process a refund right when the employee is actually facing their first refund request.'
  },
  {
    id: 'a212',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Salary Compression" (or Wage Compression)?',
    correctAnswer: 'A situation where the pay differences between employees of differing skill, tenure, or responsibility are extremely small, often because new hires are paid almost the same as tenured employees.',
    incorrectAnswers: [
      'When the government lowers the minimum wage to compress inflation.',
      'When an employee’s salary is reduced as a disciplinary action.',
      'When a company illegally hides its payroll records.'
    ],
    rationale: 'Salary compression destroys morale. If a senior engineer who has worked at the company for 5 years makes PHP 80,000, and a brand new engineer is hired at PHP 78,000 due to market inflation, the senior engineer will likely quit out of resentment.'
  },
  {
    id: 'a213',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "360-Degree Feedback"?',
    correctAnswer: 'A performance evaluation system where an employee receives confidential, anonymous feedback from the people who work around them (manager, peers, and direct reports).',
    incorrectAnswers: [
      'An appraisal that takes exactly 360 days to complete.',
      'A system where an employee physically spins in a circle while being evaluated.',
      'An evaluation done solely by external customers.'
    ],
    rationale: '360-degree feedback provides a holistic view. A manager might act perfectly polite to their boss (upward), but brutally bully their direct reports (downward). A traditional appraisal misses this, but a 360 exposes it.'
  },

  // ==========================================
  // BATCH 21 - SET B (Generated)
  // ==========================================
  {
    id: 'b204',
    setId: 'B',
    category: 'Labor Laws',
    text: 'When negotiating a CBA, what constitutes a "Deadlock"?',
    correctAnswer: 'When the employer and the union reach a point where neither side is willing to compromise on an unresolved economic issue (like wages), halting the negotiations.',
    incorrectAnswers: [
      'When the union physically locks the doors to the negotiation room.',
      'When the employer fires the union president.',
      'When the CBA is finally signed and locked in.'
    ],
    rationale: 'A deadlock is one of the only two valid grounds for a legal strike (the other being Unfair Labor Practice). Once a deadlock is declared, the union can file a Notice of Strike.'
  },
  {
    id: 'b205',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Grievance Machinery" in a CBA?',
    correctAnswer: 'A mandatory, formal, step-by-step process agreed upon in the CBA for resolving disputes arising from the interpretation or implementation of the CBA or company rules.',
    incorrectAnswers: [
      'A literal machine used in factories to process employee complaints.',
      'A government department that handles mass layoffs.',
      'The process of firing an employee without due process.'
    ],
    rationale: 'Article 273 mandates that all CBAs must contain a grievance machinery. If an employee feels they were unfairly suspended, they don\'t go straight to court; they must first go through the internal grievance steps.'
  },
  {
    id: 'b206',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What happens if a dispute cannot be resolved through the internal Grievance Machinery?',
    correctAnswer: 'The dispute is automatically referred to Voluntary Arbitration.',
    incorrectAnswers: [
      'The union is legally required to declare a strike.',
      'The dispute is completely dismissed and ignored.',
      'The company is forced to close down.'
    ],
    rationale: 'Voluntary arbitration is the final step of the grievance machinery. The employer and union choose a neutral third party (Voluntary Arbitrator) whose decision on the matter will be final and binding.'
  },
  {
    id: 'b207',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, what is the maximum duration an employer can place an employee under "Preventive Suspension" during an investigation?',
    correctAnswer: 'A maximum of thirty (30) days.',
    incorrectAnswers: [
      'A maximum of sixty (60) days.',
      'A maximum of ninety (90) days.',
      'Indefinitely, until the investigation is finished.'
    ],
    rationale: 'Preventive suspension is not a penalty; it is a measure to protect the company (e.g., suspending a cashier accused of theft so they can\'t steal more during the probe). By law, it cannot exceed 30 days without pay. If extended, the employer must pay the employee\'s wages.'
  },
  {
    id: 'b208',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Twin-Notice Rule" required for a valid termination of employment for a just cause?',
    correctAnswer: 'The employer must provide a first notice detailing the charges and giving the employee a chance to explain, and a second notice informing them of the final decision to dismiss.',
    incorrectAnswers: [
      'A notice sent to the employee and a duplicate sent to their parents.',
      'A notice sent to the employee and a notice sent to DOLE.',
      'Two verbal warnings given on the same day.'
    ],
    rationale: 'The twin-notice rule is the bedrock of procedural due process. You cannot fire someone on the spot. They must be given a written Notice to Explain (NTE), an opportunity to be heard, and a final Notice of Termination.'
  },
  {
    id: 'b209',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What happens if an employer fires an employee for a valid just cause (e.g., serious theft) but FAILS to observe the procedural due process (the Twin-Notice Rule)?',
    correctAnswer: 'The dismissal remains valid, but the employer must pay the employee Nominal Damages for violating their right to due process.',
    incorrectAnswers: [
      'The dismissal becomes totally illegal and the employee must be reinstated.',
      'The employer is sent to prison for 5 years.',
      'The employee is barred from ever working again.'
    ],
    rationale: 'Under the landmark Agabon vs. NLRC doctrine, if the cause is just (the employee actually stole), the firing is valid. But because the employer skipped the due process steps, they are fined nominal damages (usually around PHP 30,000).'
  },
  {
    id: 'b210',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'What is the legal formula for computing the mandatory Retirement Pay of a private employee?',
    correctAnswer: 'Half-month salary for every year of service. (A half-month salary is defined as 22.5 days of the employee\'s daily wage).',
    incorrectAnswers: [
      'One full month salary for every year of service.',
      'A flat rate of PHP 100,000 upon reaching age 60.',
      '15 days of the employee\'s daily wage for every year of service.'
    ],
    rationale: 'Under Article 302, the "half-month" actually equates to 22.5 days because it includes: 15 days basic pay + 5 days SIL + 2.5 days (1/12 of 13th month pay).'
  },
  {
    id: 'b211',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Project Employee"?',
    correctAnswer: 'An employee whose employment has been fixed for a specific project or undertaking, the completion or termination of which has been determined at the time of engagement.',
    incorrectAnswers: [
      'An employee who uses a projector for presentations.',
      'A regular employee working on multiple daily tasks.',
      'An employee hired to replace a woman on maternity leave.'
    ],
    rationale: 'Project employees (common in construction) do not have a right to regularization simply by passage of time. Once the building they were hired to paint is finished, their employment legally ends without separation pay.'
  },
  {
    id: 'b212',
    setId: 'B',
    category: 'Labor Laws',
    text: 'While standard employees have a 6-month probationary period, what is the legal probationary period for teaching personnel in private schools?',
    correctAnswer: 'Three (3) consecutive school years of satisfactory service.',
    incorrectAnswers: [
      'One (1) school year.',
      'Six (6) months, same as standard employees.',
      'Ten (10) years.'
    ],
    rationale: 'The Manual of Regulations for Private Schools establishes a different standard for teachers. To attain permanent status (tenure), a teacher must serve 3 consecutive school years satisfactorily.'
  },
  {
    id: 'b213',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is "Management Prerogative"?',
    correctAnswer: 'The inherent right of the employer to regulate all aspects of employment (such as hiring, work assignments, discipline, and transfer), provided it is done in good faith and without discrimination.',
    incorrectAnswers: [
      'The absolute right of a manager to physically abuse employees.',
      'The right of the government to manage private businesses.',
      'The right of the union to dictate the company’s budget.'
    ],
    rationale: 'Courts generally do not interfere with how a business is run. If a company wants to transfer an employee to a different branch for legitimate business reasons, it is a valid exercise of management prerogative, provided it is not a demotion or punishment.'
  },
  // ==========================================
  // BATCH 22 - SET A (Generated)
  // ==========================================
  {
    id: 'a214',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the "Multiple Hurdle" selection model?',
    correctAnswer: 'A recruitment process where candidates must successfully pass a minimum threshold or test (a hurdle) at each stage before being allowed to move on to the next stage.',
    incorrectAnswers: [
      'A physical fitness test required for all executive applicants.',
      'A process where an applicant is interviewed multiple times by the exact same manager.',
      'A system where low scores on one test can be made up for by high scores on another test.'
    ],
    rationale: 'In a multiple hurdle model (like passing a bar exam before being interviewed at a law firm), failing any single step immediately disqualifies the applicant. There is no averaging of scores.'
  },
  {
    id: 'a215',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'In conducting a Training Needs Analysis (TNA), what are the three standard levels of analysis?',
    correctAnswer: 'Organizational Analysis, Task Analysis, and Person Analysis.',
    incorrectAnswers: [
      'Financial Analysis, Marketing Analysis, and Sales Analysis.',
      'Beginner Analysis, Intermediate Analysis, and Expert Analysis.',
      'Manager Analysis, Supervisor Analysis, and Rank-and-File Analysis.'
    ],
    rationale: 'TNA looks at the whole company (Organizational - what are the goals?), the job itself (Task - what skills are needed?), and the individual employee (Person - who actually lacks those skills?).'
  },
  {
    id: 'a216',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Compa-Ratio" (Compensation Ratio)?',
    correctAnswer: 'A formula used by HR (Employee’s Base Salary divided by the Midpoint of the Salary Range) to determine how competitive an employee’s pay is compared to the market or internal standard.',
    incorrectAnswers: [
      'The ratio of male executives to female executives in a company.',
      'A strict legal limit on how much a CEO can earn compared to a janitor.',
      'The amount of company tax divided by total revenue.'
    ],
    rationale: 'If the midpoint for a role is PHP 50k, and an employee makes PHP 50k, their compa-ratio is 1.0 (or 100%), meaning they are paid exactly at the market target. A ratio of 0.80 means they are underpaid relative to the target.'
  },
  {
    id: 'a217',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is a "Peer Appraisal"?',
    correctAnswer: 'An evaluation process where an employee is assessed not by their manager, but by their co-workers who interact with them daily on a similar level.',
    incorrectAnswers: [
      'An appraisal conducted by a peer company or competitor.',
      'An appraisal where a manager evaluates other managers.',
      'An appraisal conducted entirely by artificial intelligence.'
    ],
    rationale: 'Peers often see things managers don’t. A manager might think an employee is highly productive, but peers might reveal that the employee is productive only because they dump all the hard work on others.'
  },
  {
    id: 'a218',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is the Position Analysis Questionnaire (PAQ)?',
    correctAnswer: 'A standardized, highly structured job analysis questionnaire containing nearly 200 items that evaluate worker behaviors, working conditions, and job characteristics.',
    incorrectAnswers: [
      'A 5-question survey given to customers to rate employee service.',
      'A legal form required by the government when terminating an employee.',
      'A personality test used exclusively to diagnose mental illness.'
    ],
    rationale: 'The PAQ is one of the most widely used quantitative job analysis tools. It scores jobs across dimensions like Information Input, Mental Processes, and Work Output to allow for statistical comparison between completely different jobs.'
  },
  {
    id: 'a219',
    setId: 'A',
    category: 'Risk Management',
    text: 'In occupational health, how is "Burnout" officially defined by the World Health Organization (WHO)?',
    correctAnswer: 'An occupational phenomenon resulting from chronic workplace stress that has not been successfully managed, characterized by exhaustion, cynicism, and reduced professional efficacy.',
    incorrectAnswers: [
      'A medical condition caused strictly by eating an unhealthy diet.',
      'A legal term for when a company\'s headquarters catches on fire.',
      'An excuse invented by employees to take longer vacations.'
    ],
    rationale: 'WHO recognizes burnout specifically as an occupational issue, not a personal medical illness. It places the burden on employers to manage chronic workplace stress, rather than blaming the employee\'s resilience.'
  },
  {
    id: 'a220',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the "Compensatory Selection Model"?',
    correctAnswer: 'A hiring process where a candidate\'s very high score on one assessment can compensate for a slightly lower score on another assessment.',
    incorrectAnswers: [
      'A model where the company pays the candidate to take the interview.',
      'A system where an applicant who is rejected is given financial compensation.',
      'A model where candidates must pass every single test with a perfect score.'
    ],
    rationale: 'Unlike the multiple hurdle model (where failing a math test instantly disqualifies you), the compensatory model averages out the scores. A brilliant coding score might make up for a mediocre public speaking score.'
  },
  {
    id: 'a221',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What does the acronym "MOOC" stand for in modern employee training?',
    correctAnswer: 'Massive Open Online Course.',
    incorrectAnswers: [
      'Mandatory Office Operations Class.',
      'Managerial Overview of Corporate Culture.',
      'Multi-Objective Organizational Coaching.'
    ],
    rationale: 'MOOCs (like Coursera, edX, or Udemy) have revolutionized corporate L&D. Instead of hiring an expensive live trainer, HR can buy MOOC licenses, allowing thousands of employees to learn coding or leadership simultaneously online.'
  },
  {
    id: 'a222',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Deferred Compensation"?',
    correctAnswer: 'A portion of an employee\'s income that is paid out at a later date (like a pension or retirement plan) to defer taxes until that later date when the employee is usually in a lower tax bracket.',
    incorrectAnswers: [
      'A salary that an employer legally refuses to pay because of bankruptcy.',
      'Paying an employee their entire annual salary on January 1st.',
      'A penalty where a worker is not paid for 30 days after breaking a rule.'
    ],
    rationale: 'Executives often use deferred compensation to lower their immediate tax burden. Instead of taking a PHP 10M cash bonus today (taxed highly), they defer it until retirement when their overall income (and tax bracket) is much lower.'
  },
  {
    id: 'a223',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Essay Evaluation Method" in performance appraisals?',
    correctAnswer: 'An unstructured appraisal method where the manager writes a free-form narrative describing the employee’s performance, strengths, weaknesses, and potential.',
    incorrectAnswers: [
      'A test where the employee must write a 5-page essay on company values.',
      'An appraisal that strictly uses a 1-to-10 numerical scale.',
      'A method where the manager evaluates the employee\'s handwriting.'
    ],
    rationale: 'While essays provide rich, detailed context about an employee (unlike a simple "3 out of 5" checkbox), they are highly subjective and depend heavily on the manager\'s writing ability, making it hard to compare employees.'
  },

  // ==========================================
  // BATCH 22 - SET B (Generated)
  // ==========================================
  {
    id: 'b214',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the core Constitutional principle that guides the interpretation of Philippine Labor Laws?',
    correctAnswer: 'The Principle of Social Justice and Protection to Labor, meaning that all doubts in the interpretation of labor laws shall be resolved in favor of labor.',
    incorrectAnswers: [
      'The Principle of Absolute Corporate Freedom.',
      'The Principle of Caveat Emptor (Let the buyer beware).',
      'The Principle that the employer is always right.'
    ],
    rationale: 'Article 4 of the Labor Code explicitly mandates that if a law or contract is ambiguous, the courts must interpret it in a way that protects the worker, because the worker is the weaker party in the employment relationship.'
  },
  {
    id: 'b215',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 278(g), what extraordinary power can the DOLE Secretary exercise during a labor dispute causing or likely to cause a strike?',
    correctAnswer: 'The power to Assume Jurisdiction over the dispute if it involves an industry indispensable to the national interest, which automatically stops any strike or lockout.',
    incorrectAnswers: [
      'The power to permanently shut down the company and sell its assets.',
      'The power to arrest the union leaders without a warrant.',
      'The power to force the employer to double everyone’s salary immediately.'
    ],
    rationale: 'If a strike happens at a hospital, power plant, or airline, it threatens the national economy and public safety. The DOLE Secretary can step in, assume jurisdiction, and force everyone back to work while the government resolves the dispute.'
  },
  {
    id: 'b216',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are "Fixed-Term" employment contracts legally valid in the Philippines?',
    correctAnswer: 'Yes, provided the term was knowingly and voluntarily agreed upon by the employee without any force, duress, or improper pressure from the employer.',
    incorrectAnswers: [
      'No, all employees automatically become regular employees on Day 1.',
      'Yes, but only for foreign expatriates working in the country.',
      'No, fixed-term contracts were outlawed by the Supreme Court in 1990.'
    ],
    rationale: 'The landmark case of Brent School vs. Zamora established that fixed-term contracts (e.g., hiring an engineer strictly for a 2-year term) are valid, as long as it isn\'t a scheme to circumvent the worker\'s right to security of tenure.'
  },
  {
    id: 'b217',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Four-Fold Test" used for in Labor Law?',
    correctAnswer: 'It is the primary legal test used by courts to determine if an employer-employee relationship exists between two parties.',
    incorrectAnswers: [
      'It is a psychological test used to screen job applicants.',
      'It is a safety test to determine if a factory is structurally sound.',
      'It is a financial test to see if a company is bankrupt.'
    ],
    rationale: 'If an employer-employee relationship exists, the Labor Code applies (minimum wage, 13th month, illegal dismissal). If it doesn\'t (e.g., they are an independent contractor), the Civil Code applies.'
  },
  {
    id: 'b218',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What are the four elements of the Four-Fold Test?',
    correctAnswer: '(1) Selection and engagement, (2) Payment of wages, (3) Power of dismissal, and (4) Power of control over the employee\'s conduct.',
    incorrectAnswers: [
      '(1) Uniforms, (2) Office space, (3) ID cards, (4) Email addresses.',
      '(1) Age, (2) Gender, (3) Religion, (4) Nationality.',
      '(1) Recruitment, (2) Training, (3) Promotion, (4) Retirement.'
    ],
    rationale: 'These four factors establish the legal existence of employment. If a company hired you, pays you, can fire you, and dictates exactly how you do your job, you are their employee, regardless of what the contract is called.'
  },
  {
    id: 'b219',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which element of the Four-Fold Test is considered the most crucial or determinant factor?',
    correctAnswer: 'The Power of Control (specifically, the employer’s right to control not just the end result, but the means and methods by which the work is accomplished).',
    incorrectAnswers: [
      'The Payment of Wages.',
      'The Power of Dismissal.',
      'The Selection and Engagement.'
    ],
    rationale: 'Control is the defining line. If you hire a plumber to fix your sink, you only care about the result (a fixed sink). You don\'t tell them how to hold their wrench. Thus, they are an independent contractor, not your employee.'
  },
  {
    id: 'b220',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If the Four-Fold Test is insufficient to determine employment (especially in modern gig economy jobs), what secondary test do Philippine courts use?',
    correctAnswer: 'The Economic Reality Test (or Two-Tiered Test).',
    incorrectAnswers: [
      'The Psychological Dependency Test.',
      'The Corporate Citizenship Test.',
      'The Financial Literacy Test.'
    ],
    rationale: 'The Economic Reality test looks at the broader picture: is the worker economically dependent on the company for their livelihood? If yes, they lean towards being classified as an employee to afford them labor protections.'
  },
  {
    id: 'b221',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'Are domestic workers (Kasambahays) legally entitled to receive a 13th-month pay?',
    correctAnswer: 'Yes, under the Kasambahay Law (RA 10361), they are explicitly entitled to a 13th-month pay.',
    incorrectAnswers: [
      'No, the 13th-month pay law strictly excludes domestic workers.',
      'Yes, but only if they have worked for the employer for 5 continuous years.',
      'No, they only receive Christmas groceries instead.'
    ],
    rationale: 'RA 10361 elevated the status of domestic workers, explicitly granting them a minimum wage, 13th-month pay, 5 days of SIL, and mandatory government benefits.'
  },
  {
    id: 'b222',
    setId: 'B',
    category: 'Statutory Benefits',
    text: 'When must a domestic worker (Kasambahay) be enrolled in SSS, PhilHealth, and Pag-IBIG?',
    correctAnswer: 'After one (1) month of service.',
    incorrectAnswers: [
      'After six (6) months of service.',
      'Immediately on their very first day of work.',
      'Only if they explicitly request it in writing.'
    ],
    rationale: 'The law requires the employer to register the Kasambahay with the three main social welfare agencies after they have rendered one month of service.'
  },
  {
    id: 'b223',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What government body is responsible for determining and issuing Wage Orders (setting the minimum wage) for different regions in the Philippines?',
    correctAnswer: 'The Regional Tripartite Wages and Productivity Board (RTWPB).',
    incorrectAnswers: [
      'The Office of the President.',
      'The Supreme Court of the Philippines.',
      'The Bureau of Internal Revenue (BIR).'
    ],
    rationale: 'The Philippines does not have one national minimum wage. The RTWPB in each region (e.g., NCR, Region IV-A) sets the minimum wage based on the specific cost of living and economic conditions of that particular region.'
  },
  // ==========================================
  // BATCH 23 - SET A (Generated)
  // ==========================================
  {
    id: 'a224',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is the difference between "Sourcing" and "Recruiting"?',
    correctAnswer: 'Sourcing is the proactive search for and identification of potential candidates (often passive ones), while recruiting is the process of engaging, interviewing, and converting those candidates into hires.',
    incorrectAnswers: [
      'Sourcing is done by the CEO, while recruiting is done by HR.',
      'Sourcing only applies to physical labor jobs, while recruiting is for office jobs.',
      'There is no difference; they are exactly the same function.'
    ],
    rationale: 'A sourcer finds the talent (like hunting for passive candidates on LinkedIn). A recruiter manages the relationship, negotiates the offer, and guides the candidate through the interview process.'
  },
  {
    id: 'a225',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the difference between "Andragogy" and "Pedagogy"?',
    correctAnswer: 'Andragogy refers to the methods and principles used in adult education, whereas pedagogy refers to the methods used to teach children.',
    incorrectAnswers: [
      'Andragogy is for online learning, while pedagogy is for classroom learning.',
      'Andragogy focuses on science, while pedagogy focuses on the arts.',
      'Andragogy is illegal in corporate training.'
    ],
    rationale: 'Adult learners (Andragogy) are self-directed, draw heavily on their own experiences, and need to know exactly WHY they are learning something. Children (Pedagogy) generally accept authority and instruction without questioning.'
  },
  {
    id: 'a226',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Broadbanding" in compensation?',
    correctAnswer: 'A pay structure that collapses many narrow salary grades into a few very wide pay bands, allowing for more flexibility in lateral job moves and salary increases without needing a formal promotion.',
    incorrectAnswers: [
      'Providing high-speed internet as a standard employee benefit.',
      'Paying all employees the exact same flat rate regardless of their job.',
      'A tax bracket system for ultra-wealthy executives.'
    ],
    rationale: 'Instead of having 20 narrow salary grades (e.g., Grade 1: 20k-25k, Grade 2: 25k-30k), broadbanding might have 4 massive bands (e.g., Band A: 20k-60k). This gives HR huge flexibility to reward high performers without changing their job title.'
  },
  {
    id: 'a227',
    setId: 'A',
    category: 'Performance Management',
    text: 'How does the "Halo Effect" differ from the "Horn Effect" in performance appraisals?',
    correctAnswer: 'The Halo Effect is when one positive trait causes a manager to rate the employee highly in all areas, while the Horn Effect is when one negative trait causes low ratings in all areas.',
    incorrectAnswers: [
      'The Halo Effect is for religious organizations, while the Horn Effect is for secular ones.',
      'The Halo Effect is a legal defense, while the Horn Effect is a lawsuit.',
      'The Halo Effect applies to executives, while the Horn Effect applies to janitors.'
    ],
    rationale: 'If a manager thinks an employee is always dressed beautifully (one positive trait), they might subconsciously rate them high on "Coding Skills" (Halo). If an employee is often late (one negative trait), they might rate their actual work quality poorly (Horn), even if the work is perfect.'
  },
  {
    id: 'a228',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is O*NET (The Occupational Information Network)?',
    correctAnswer: 'A comprehensive, free online database developed by the US Department of Labor that provides standardized, detailed descriptions of thousands of occupations and their required skills.',
    incorrectAnswers: [
      'A highly secretive social network exclusively for Fortune 500 CEOs.',
      'An illegal dark web site for corporate espionage.',
      'A mandatory software that monitors employee keystrokes.'
    ],
    rationale: 'If an HR professional in the Philippines needs to write a job description for a "Petroleum Engineer" but knows nothing about the job, they can search O*NET to instantly find a list of standard tasks, tools, and skills required for that role.'
  },
  {
    id: 'a229',
    setId: 'A',
    category: 'Risk Management',
    text: 'In workplace safety, what is "Ergonomics"?',
    correctAnswer: 'The applied science of designing the workspace, equipment, and tasks to fit the physical capabilities and limitations of the worker, preventing musculoskeletal injuries.',
    incorrectAnswers: [
      'The study of how corporate taxes affect the national economy.',
      'A psychological technique to brainwash employees into working faster.',
      'The legal process of settling workplace injury lawsuits.'
    ],
    rationale: 'Providing a standing desk, a supportive chair, or an anti-fatigue mat are ergonomic interventions. They prevent injuries like Carpal Tunnel Syndrome or chronic back pain caused by poor posture and repetitive motion.'
  },
  {
    id: 'a230',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Blind Hiring"?',
    correctAnswer: 'A recruitment method that removes personal identifying information (like names, gender, age, or photos) from resumes before they are reviewed by hiring managers to reduce unconscious bias.',
    incorrectAnswers: [
      'Hiring candidates without ever conducting an interview or reading their resume.',
      'A program specifically designed to hire visually impaired candidates.',
      'Hiring someone solely based on a random lottery system.'
    ],
    rationale: 'Studies show that resumes with certain names or photos are rejected at higher rates due to implicit bias. Blind hiring forces managers to evaluate the candidate strictly based on their skills and experience.'
  },
  {
    id: 'a231',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Microlearning"?',
    correctAnswer: 'A training approach that delivers educational content in highly focused, bite-sized chunks (usually 3 to 5 minutes long) that employees can access exactly when they need it.',
    incorrectAnswers: [
      'A 4-year degree program condensed into one month.',
      'Training that is strictly conducted using microscopes.',
      'Learning only one single fact per year.'
    ],
    rationale: 'Modern employees have very short attention spans and heavy workloads. Instead of a 2-hour lecture on cybersecurity, microlearning provides a 3-minute interactive video on how to spot a phishing email.'
  },
  {
    id: 'a232',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is a "Total Rewards Statement"?',
    correctAnswer: 'A document given to employees that clearly outlines the complete financial value of their compensation package, including their base pay, bonuses, health insurance, retirement, and all other perks.',
    incorrectAnswers: [
      'A receipt showing how much an employee spent at the company cafeteria.',
      'A legal threat sent by a company to a resigning employee.',
      'A document that ranks employees from best to worst.'
    ],
    rationale: 'Employees often complain about their "salary" without realizing the company spends an extra 30% on their HMO, taxes, and paid leaves. A Total Rewards Statement makes this hidden value visible to improve retention.'
  },
  {
    id: 'a233',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Central Tendency Error" in performance appraisals?',
    correctAnswer: 'A rating bias where a manager plays it safe by avoiding the extremes (excellent or poor) and consistently rates almost all employees as "average" or right in the middle of the scale.',
    incorrectAnswers: [
      'A bias where the manager only rates employees who sit in the center of the office.',
      'An error where the HR department loses all the appraisal forms.',
      'A tendency for managers to give everyone a perfect score.'
    ],
    rationale: 'Managers often commit this error to avoid conflicts with poor performers and to avoid having to justify high scores to HR. However, it severely demotivates true high performers who realize their hard work results in the same "average" score as a lazy peer.'
  },

  // ==========================================
  // BATCH 23 - SET B (Generated)
  // ==========================================
  {
    id: 'b224',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the mandatory period for filing an appeal to the NLRC after receiving a decision from a Labor Arbiter?',
    correctAnswer: 'Ten (10) calendar days from receipt of the decision.',
    incorrectAnswers: [
      'Thirty (30) calendar days.',
      'Sixty (60) calendar days.',
      'One (1) year.'
    ],
    rationale: 'The 10-day period is strict and mandatory. If the 10th day falls on a weekend or a holiday, the appeal must be filed on the next working day. Failure to appeal within 10 days makes the Arbiter\'s decision final and executory.'
  },
  {
    id: 'b225',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employer is ordered by a Labor Arbiter to pay a monetary award to an illegally dismissed employee, what MUST the employer post to perfect their appeal to the NLRC?',
    correctAnswer: 'A cash or surety bond equivalent to the exact monetary award granted in the decision.',
    incorrectAnswers: [
      'A written letter of apology to the employee.',
      'A nominal fee of PHP 500.',
      'No bond is required; appeals are entirely free.'
    ],
    rationale: 'This ensures that if the employer loses the appeal years later, the money is secured and ready to be given to the worker. It prevents employers from using the appeal process simply to delay payment and hide their assets.'
  },
  {
    id: 'b226',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Philippine Labor Law, an order of reinstatement issued by a Labor Arbiter is "immediately executory". What does this mean?',
    correctAnswer: 'The employer must immediately reinstate the employee (either physically or in the payroll) even if the employer has filed an appeal.',
    incorrectAnswers: [
      'The employee must immediately execute a new employment contract.',
      'The employer is allowed to immediately execute (fire) the employee again.',
      'The reinstatement is put on hold until the Supreme Court decides.'
    ],
    rationale: 'Because workers need their salary to survive, the law mandates immediate reinstatement. If the employer does not want the employee back in the office during the appeal, they must at least put them back on the payroll (payroll reinstatement) and pay their salary while the case is pending.'
  },
  {
    id: 'b227',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Are signed "Quitclaims and Waivers" absolute guarantees that an employee can no longer sue the employer?',
    correctAnswer: 'No, quitclaims are generally frowned upon. They are only valid if the settlement is fair, the employee signed it voluntarily without fraud or deceit, and they fully understood what they were signing.',
    incorrectAnswers: [
      'Yes, once signed, the employee permanently loses all constitutional rights to sue.',
      'Yes, but only if they are notarized by the President of the Philippines.',
      'No, quitclaims are 100% illegal in the Philippines.'
    ],
    rationale: 'Courts often invalidate quitclaims if the amount paid was unconscionably low (e.g., forcing a desperate worker owed PHP 500k to sign a waiver in exchange for PHP 10k just so they can buy food).'
  },
  {
    id: 'b228',
    setId: 'B',
    category: 'Labor Laws',
    text: 'In labor law, what differentiates mere Absence Without Official Leave (AWOL) from the just cause of "Abandonment of Work"?',
    correctAnswer: 'Abandonment requires not just failure to report to work, but also a clear, deliberate, and unjustified INTENT to sever the employer-employee relationship.',
    incorrectAnswers: [
      'AWOL is for 1 day, while Abandonment is for 2 days.',
      'AWOL is a criminal offense, while Abandonment is a civil offense.',
      'There is no difference; they are exactly the same.'
    ],
    rationale: 'An employee in a coma is AWOL, but did not abandon their job because there is no intent to quit. A worker who stops showing up and immediately starts working for a competitor has clearly abandoned their job.'
  },
  {
    id: 'b229',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is "Constructive Dismissal"?',
    correctAnswer: 'An involuntary resignation; it occurs when continued employment becomes impossible, unreasonable, or unlikely due to the employer’s hostile or discriminatory actions, forcing the employee to quit.',
    incorrectAnswers: [
      'A dismissal that occurs specifically at construction sites.',
      'A friendly and constructive meeting where an employee is fired nicely.',
      'When an employee fires their own manager.'
    ],
    rationale: 'If an employer wants to fire someone without paying severance, they might demote them, cut their pay, or verbally abuse them daily until the worker "quits." The law treats this forced resignation as an illegal dismissal.'
  },
  {
    id: 'b230',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the maximum period an employee can be placed on "Floating Status" (bona fide suspension of business operations) before it is considered constructive dismissal?',
    correctAnswer: 'Six (6) months.',
    incorrectAnswers: [
      'One (1) month.',
      'One (1) year.',
      'Five (5) years.'
    ],
    rationale: 'Article 301 allows a company in distress (or a security agency with no current client for a guard) to suspend an employee\'s work temporarily. However, if they don\'t recall the worker after 6 months, the worker is considered permanently dismissed and entitled to separation pay.'
  },
  {
    id: 'b231',
    setId: 'B',
    category: 'Labor Laws',
    text: 'For standard private employees, what are the Optional and Mandatory retirement ages under the Labor Code?',
    correctAnswer: 'Optional retirement at age sixty (60); Mandatory retirement at age sixty-five (65).',
    incorrectAnswers: [
      'Optional at 50; Mandatory at 55.',
      'Optional at 65; Mandatory at 70.',
      'Optional at 40; Mandatory at 80.'
    ],
    rationale: 'Upon reaching 60 (with at least 5 years of service), an employee CAN retire and demand their retirement pay. Upon reaching 65, the employer CAN FORCE the employee to retire.'
  },
  {
    id: 'b232',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Due to the hazardous nature of their work, what are the Optional and Mandatory retirement ages for Underground Mine Workers?',
    correctAnswer: 'Optional retirement at age fifty (50); Mandatory retirement at age sixty (60).',
    incorrectAnswers: [
      'Optional at 30; Mandatory at 40.',
      'Optional at 60; Mandatory at 65, same as everyone else.',
      'There is no retirement age; they work indefinitely.'
    ],
    rationale: 'Underground mining takes a massive physical toll on the human body. The law recognizes this by lowering both the optional and mandatory retirement ages by 5 years compared to standard workers.'
  },
  {
    id: 'b233',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employee is illegally dismissed, what are the two primary remedies or reliefs awarded to them by the court?',
    correctAnswer: 'Reinstatement (without loss of seniority rights) AND Full Backwages (from the time of illegal dismissal up to actual reinstatement).',
    incorrectAnswers: [
      'A formal apology letter AND a brand new company car.',
      'A one-month paid vacation AND a promotion.',
      'Immediate imprisonment of the HR Manager AND the CEO.'
    ],
    rationale: 'Reinstatement restores the employee to their job. Backwages restore the income they lost while they were illegally out of work. If reinstatement is no longer possible (strained relations), Separation Pay is given instead of reinstatement.'
  },
  // ==========================================
  // BATCH 24 - SET A (Generated)
  // ==========================================
  {
    id: 'a234',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is a "Boomerang Employee"?',
    correctAnswer: 'An employee who leaves a company (usually on good terms) and is later rehired by the exact same company.',
    incorrectAnswers: [
      'An employee who throws objects during violent outbursts.',
      'An employee who is constantly transferred between different branches.',
      'An applicant who sends their resume every single day until hired.'
    ],
    rationale: 'Boomerang employees are highly valuable because they require much less training, already understand the company culture, and often bring back valuable new skills they learned while working for competitors.'
  },
  {
    id: 'a235',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is "Gamification" in corporate training?',
    correctAnswer: 'The application of game-design elements (like points, badges, leaderboards, and leveling up) into non-game contexts (like mandatory training modules) to increase engagement.',
    incorrectAnswers: [
      'Allowing employees to play video games instead of working on Fridays.',
      'Training employees on how to develop mobile games.',
      'Forcing employees to gamble their salaries.'
    ],
    rationale: 'Compliance training is often boring. By gamifying it (e.g., "Earn the Cybersecurity Master Badge if you pass this quiz!"), HR taps into natural human competitiveness, drastically increasing completion rates.'
  },
  {
    id: 'a236',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is the conceptual difference between a "Minimum Wage" and a "Living Wage"?',
    correctAnswer: 'Minimum wage is the absolute lowest legal amount an employer can pay, while a living wage is the actual amount a worker needs to earn to meet their basic needs (food, housing, healthcare) in a specific location.',
    incorrectAnswers: [
      'Minimum wage applies to humans, while living wage applies to robots.',
      'A living wage is always lower than a minimum wage.',
      'There is no difference; they are exactly the same number.'
    ],
    rationale: 'In many countries, the legally mandated minimum wage is significantly lower than the actual living wage required to survive in a major city without falling into poverty.'
  },
  {
    id: 'a237',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Strictness Error" in performance appraisals?',
    correctAnswer: 'A rating bias where a manager is overly harsh and consistently rates almost all employees on the low end of the scale, regardless of their actual performance.',
    incorrectAnswers: [
      'When an employee strictly follows the rules but still gets fired.',
      'When the HR department strictly refuses to process appraisals.',
      'A bias where the manager gives everyone perfect scores.'
    ],
    rationale: 'The opposite of the Leniency Error. A manager with a strictness error might believe that "no one is perfect" and therefore refuses to give anyone a 5/5, demotivating top performers.'
  },
  {
    id: 'a238',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is "Job Enlargement"?',
    correctAnswer: 'Increasing the scope of a job by adding more tasks of a similar complexity level (horizontal expansion) to reduce boredom and repetitiveness.',
    incorrectAnswers: [
      'Adding more decision-making authority and control to a job (vertical expansion).',
      'Physically making the employee’s cubicle larger.',
      'Forcing an employee to work 16 hours a day instead of 8.'
    ],
    rationale: 'If a worker’s only job is tightening bolt A, they will get bored. Job enlargement means they now tighten bolt A, bolt B, and bolt C. (Note: Job Enrichment is vertical expansion—adding responsibility).'
  },
  {
    id: 'a239',
    setId: 'A',
    category: 'Risk Management',
    text: 'In the context of workers\' compensation, what is an "Occupational Disease"?',
    correctAnswer: 'An illness or disease contracted primarily as a result of an exposure to risk factors arising from work activity (e.g., black lung in coal miners, hearing loss in factory workers).',
    incorrectAnswers: [
      'Catching the common cold from a co-worker in the pantry.',
      'A disease caused by eating too much junk food at home.',
      'A psychological condition where an employee is addicted to working.'
    ],
    rationale: 'To claim workers\' compensation for a disease, the employee must prove a direct causal link between their specific job duties and the illness (e.g., a radiology tech developing radiation poisoning).'
  },
  {
    id: 'a240',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Headhunting"?',
    correctAnswer: 'A highly targeted recruitment service (usually conducted by third-party executive search firms) focused exclusively on finding and poaching high-level executives or workers with rare, specialized skills.',
    incorrectAnswers: [
      'A violent practice strictly banned by the Labor Code.',
      'Firing top executives without giving them severance pay.',
      'A psychological assessment measuring the physical size of a candidate\'s head.'
    ],
    rationale: 'Companies use headhunters because top executives (like a new CEO) are rarely actively looking for jobs on standard job boards. Headhunters use their elite networks to convince these passive candidates to jump ship.'
  },
  {
    id: 'a241',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'How is the ROI (Return on Investment) of a training program generally calculated?',
    correctAnswer: '[(Total Financial Benefits from Training - Total Cost of Training) / Total Cost of Training] x 100.',
    incorrectAnswers: [
      'Total Cost of Training divided by the number of trainees.',
      'Number of hours trained multiplied by the trainer\'s hourly rate.',
      'It cannot be calculated using numbers, only feelings.'
    ],
    rationale: 'If HR spends PHP 100,000 on sales training, and the sales team generates PHP 150,000 in NEW profit specifically because of that training, the ROI is 50%. This proves to the CEO that training is an investment, not an expense.'
  },
  {
    id: 'a242',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is "Wage Garnishment"?',
    correctAnswer: 'A legal procedure in which a court orders an employer to withhold a specific portion of an employee\'s earnings to pay off a debt (such as unpaid taxes or child support).',
    incorrectAnswers: [
      'Adding small, decorative bonuses to an employee\'s paycheck.',
      'Paying wages using physical goods like rice instead of cash.',
      'Stealing an employee\'s wages without a court order.'
    ],
    rationale: 'Employers cannot randomly deduct debts from an employee’s salary. However, if a court issues a garnishment order (e.g., for child support), the employer is legally obligated to deduct it before giving the paycheck to the employee.'
  },
  {
    id: 'a243',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is the "Contrast Error" in performance appraisals?',
    correctAnswer: 'A rating bias where an employee\'s evaluation is artificially inflated or deflated because they are being compared to the previous employee evaluated, rather than to an objective standard.',
    incorrectAnswers: [
      'A bias where the manager evaluates the contrast of colors on a presentation.',
      'A legal error where the appraisal form is printed incorrectly.',
      'When an employee argues and contrasts opinions with the manager.'
    ],
    rationale: 'If a manager evaluates three absolutely terrible employees in a row, the fourth employee (who is just "average") might look like a superstar in contrast, receiving a 5/5 instead of their deserved 3/5.'
  },

  // ==========================================
  // BATCH 24 - SET B (Generated)
  // ==========================================
  {
    id: 'b234',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Doctrine of Strained Relations"?',
    correctAnswer: 'A legal principle where the court orders the payment of Separation Pay INSTEAD of Reinstatement because the relationship between the employer and the illegally dismissed employee has become so hostile that working together is no longer viable.',
    incorrectAnswers: [
      'A rule that employees who are dating must be assigned to different branches.',
      'A medical condition caused by staring at a computer screen too long.',
      'A doctrine allowing employers to physically assault employees.'
    ],
    rationale: 'While an illegally dismissed employee normally gets their job back, courts recognize reality. If the employee and manager have been suing and accusing each other of crimes for 3 years, forcing them into the same office will just cause more chaos.'
  },
  {
    id: 'b235',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employee is terminated due to REDUNDANCY (an authorized cause), what is the mandatory separation pay?',
    correctAnswer: 'One (1) month pay or at least one (1) month pay for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One-half (1/2) month pay for every year of service.',
      'There is no separation pay for redundancy.',
      'Ten (10) years of their base salary.'
    ],
    rationale: 'Redundancy (e.g., buying a machine that does the job of 10 people) means the company is not necessarily losing money; they just have excess staff. Therefore, the law requires the highest bracket of separation pay (1 month/year).'
  },
  {
    id: 'b236',
    setId: 'B',
    category: 'Labor Laws',
    text: 'If an employee is terminated due to RETRENCHMENT to prevent serious business losses, what is the mandatory separation pay?',
    correctAnswer: 'One (1) month pay or at least one-half (1/2) month pay for every year of service, whichever is higher.',
    incorrectAnswers: [
      'One (1) month pay for every year of service.',
      'There is absolutely no separation pay because the company is losing money.',
      'Five (5) months pay for every year of service.'
    ],
    rationale: 'Retrenchment (downsizing) happens when a company is bleeding money and needs to cut payroll to survive. Because the employer is in financial distress, the law lowers the separation pay burden to 1/2 month per year.'
  },
  {
    id: 'b237',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the mandatory notice requirement for terminating an employee due to an Authorized Cause (e.g., Retrenchment, Redundancy, Closure)?',
    correctAnswer: 'The employer must serve a written notice to BOTH the employee and the DOLE Regional Office at least thirty (30) days before the intended date of termination.',
    incorrectAnswers: [
      'A 24-hour verbal notice to the employee.',
      'A 60-day notice to the Supreme Court.',
      'No notice is required if the company pays separation pay immediately.'
    ],
    rationale: 'Unlike Just Causes (where you use the Twin-Notice rule), Authorized causes require a strict 30-day notice. This gives the employee 30 days to look for a new job, and gives DOLE time to verify if the retrenchment is legitimate.'
  },
  {
    id: 'b238',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 297 (Just Causes), what is the defining requirement for "Serious Misconduct" to be a valid ground for termination?',
    correctAnswer: 'The misconduct must be serious and MUST be in connection with the employee\'s work, showing they are unfit to continue working for the employer.',
    incorrectAnswers: [
      'The misconduct must occur on a Sunday.',
      'The misconduct must result in the total destruction of the company building.',
      'It must be a crime committed outside of work, completely unrelated to the employer.'
    ],
    rationale: 'If a bank teller steals money from the bank, that is serious misconduct connected to their work. If the same bank teller gets into a bar fight on a Saturday night with a stranger, it is serious, but it is NOT connected to their work, so it usually cannot be a ground for dismissal.'
  },
  {
    id: 'b239',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Which class of employees is primarily subject to termination based on "Loss of Trust and Confidence"?',
    correctAnswer: 'Employees holding managerial ranks or positions of trust and confidence (e.g., Cashiers, Auditors), who handle money, property, or confidential company secrets.',
    incorrectAnswers: [
      'Rank-and-file factory workers who do manual labor.',
      'Janitors and maintenance staff.',
      'Independent contractors.'
    ],
    rationale: 'You cannot fire a janitor for "Loss of Trust" because their job doesn\'t inherently require fiduciary trust. But if an Accounting Manager hides a financial error, they can be fired for Loss of Trust because their entire job relies on the employer trusting their integrity.'
  },
  {
    id: 'b240',
    setId: 'B',
    category: 'Labor Laws',
    text: 'For "Willful Disobedience" (Insubordination) to be a valid just cause for termination, what must be true about the employer’s order?',
    correctAnswer: 'The order must be reasonable, lawful, made known to the employee, and must pertain to the duties which the employee has been engaged to discharge.',
    incorrectAnswers: [
      'The order must be yelled aggressively in front of other employees.',
      'The order can be completely illegal, as long as it comes from the CEO.',
      'The order must require the employee to work 24 hours straight.'
    ],
    rationale: 'If a manager orders a graphic designer to design a poster and the designer refuses, that is insubordination. If the manager orders the graphic designer to wash the manager\'s personal car, refusing is NOT insubordination because the order is unreasonable and unrelated to the job.'
  },
  {
    id: 'b241',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under the Just Causes of termination, how is "Neglect of Duties" qualified to warrant dismissal?',
    correctAnswer: 'The neglect must be BOTH Gross (a total lack of care) and Habitual (repeated over time).',
    incorrectAnswers: [
      'The neglect only needs to happen exactly once, regardless of severity.',
      'The neglect must result in the CEO crying.',
      'The neglect must be broadcasted on national television.'
    ],
    rationale: 'A single, minor mistake (simple negligence) is not enough to fire someone under the Labor Code. The negligence must show a complete disregard for duty (gross) and a pattern of repeated failures (habitual).'
  },
  {
    id: 'b242',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the fundamental difference between Article 297 (Just Causes) and Articles 298/299 (Authorized Causes) of the Labor Code?',
    correctAnswer: 'Just causes are due to the fault or culpability of the EMPLOYEE (no separation pay). Authorized causes are due to business necessity or disease, NOT the employee\'s fault (requires separation pay).',
    incorrectAnswers: [
      'Just causes apply to men, Authorized causes apply to women.',
      'Just causes are handled by the Supreme Court, Authorized causes by the local police.',
      'There is no difference; both require the exact same separation pay.'
    ],
    rationale: 'If you are fired for stealing (Just Cause - your fault), you get nothing. If you are fired because the company went bankrupt (Authorized Cause - not your fault), the law forces the employer to give you a financial cushion (Separation Pay).'
  },
  {
    id: 'b243',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Is DOLE clearance still required before an employer can terminate an employee?',
    correctAnswer: 'No, the old requirement for prior DOLE clearance was abolished. Employers now only need to observe the statutory notice requirements (Twin-Notice for Just Causes, or 30-Day Notice for Authorized Causes).',
    incorrectAnswers: [
      'Yes, you must secure a signed clearance from the DOLE Secretary personally.',
      'Yes, but only if the employee has been working there for more than 10 years.',
      'Yes, DOLE clearance is required for every single disciplinary action.'
    ],
    rationale: 'To streamline processes, the Labor Code was amended to remove prior DOLE clearance. The burden is now on the employer to follow due process, and if they fail, the employee can file a case with the NLRC AFTER being dismissed.'
  },
  // ==========================================
  // BATCH 25 - SET A (Generated - Final Batch)
  // ==========================================
  {
    id: 'a244',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is an "ATS" (Applicant Tracking System)?',
    correctAnswer: 'A software application that enables the electronic handling of recruitment and hiring needs, often automatically screening resumes for specific keywords before a human ever reads them.',
    incorrectAnswers: [
      'A GPS device attached to company cars to track employee movement.',
      'A system used to track the daily attendance and tardiness of employees.',
      'A government database that tracks all employed citizens.'
    ],
    rationale: 'Because companies receive hundreds of resumes for a single job, an ATS is used to filter out unqualified candidates instantly. If a resume lacks the required keywords, the ATS rejects it automatically.'
  },
  {
    id: 'a245',
    setId: 'A',
    category: 'Workplace Learning and Development',
    text: 'What is the primary difference between "Succession Planning" and "Replacement Planning"?',
    correctAnswer: 'Replacement planning focuses on finding immediate backups for key roles if someone leaves suddenly, while Succession planning is a long-term strategy for deliberately developing future leaders.',
    incorrectAnswers: [
      'Succession planning is for junior roles, while replacement planning is for executives.',
      'Succession planning involves firing people, while replacement involves hiring.',
      'There is no difference; they are exactly the same concept.'
    ],
    rationale: 'Replacement planning is a reactive risk-management tool (who takes over tomorrow if the CEO dies?). Succession planning is proactive (how do we train the VP over the next 5 years so they are ready to become CEO?).'
  },
  {
    id: 'a246',
    setId: 'A',
    category: 'Compensation & Benefits',
    text: 'What is the concept of "Pay Equity"?',
    correctAnswer: 'The principle of compensating employees equally for performing work of equal value, regardless of their gender, race, religion, or other discriminatory factors.',
    incorrectAnswers: [
      'Paying all employees the exact same salary regardless of their job title.',
      'Paying employees in company stock instead of cash.',
      'Forcing executives to donate their bonuses to charity.'
    ],
    rationale: 'Pay equity ensures that a female marketing manager and a male marketing manager with the same experience and responsibilities are paid the exact same base salary, eliminating historical wage gaps.'
  },
  {
    id: 'a247',
    setId: 'A',
    category: 'Performance Management',
    text: 'What is "Management by Walking Around" (MBWA)?',
    correctAnswer: 'An unstructured management style where managers randomly wander through the workplace to informally check on employees, observe work, and build relationships.',
    incorrectAnswers: [
      'A strict policy forcing employees to walk 10,000 steps a day for health benefits.',
      'A formal appraisal method conducted while walking on a treadmill.',
      'A disciplinary action where an employee is forced to walk out of the building.'
    ],
    rationale: 'Popularized by HP, MBWA breaks down the invisible barrier between the "corner office" and the factory floor. It allows managers to see the actual reality of the daily work, rather than just reading sanitized reports.'
  },
  {
    id: 'a248',
    setId: 'A',
    category: 'Job Analysis and Design',
    text: 'What is "Job Rotation"?',
    correctAnswer: 'The practice of periodically shifting an employee from one task or job to another to increase their skill variety, reduce boredom, and create a more flexible workforce.',
    incorrectAnswers: [
      'Physically rotating the employee\'s desk every month.',
      'Firing an employee and rotating in a new hire.',
      'A schedule where an employee works the day shift, then night shift, then day shift.'
    ],
    rationale: 'In a bank, a teller might be rotated to the loans department for 6 months, and then to customer service. This prevents burnout and ensures the bank has cross-trained employees who can fill in during absences.'
  },
  {
    id: 'a249',
    setId: 'A',
    category: 'Risk Management',
    text: 'What is a "Safety Audit"?',
    correctAnswer: 'A structured, formal evaluation of a company’s safety programs, procedures, and physical workspace to ensure compliance with occupational health laws and to identify hidden hazards.',
    incorrectAnswers: [
      'An audit conducted by the BIR to check for tax evasion.',
      'A process where an employee is interrogated by the police.',
      'A daily checklist filled out by the janitor.'
    ],
    rationale: 'Safety audits are proactive. Instead of waiting for a machine to explode (and then investigating it), an audit systematically checks all machines, fire exits, and training records to prevent the explosion from happening.'
  },
  {
    id: 'a250',
    setId: 'A',
    category: 'Recruitment and Selection',
    text: 'What is "Nepotism" in hiring?',
    correctAnswer: 'The practice of those with power or influence favoring relatives or friends, especially by giving them jobs for which they may not be the most qualified.',
    incorrectAnswers: [
      'Hiring candidates solely based on their university degree.',
      'A legal requirement to hire local residents instead of foreigners.',
      'Hiring candidates blindly without interviewing them.'
    ],
    rationale: 'Nepotism destroys company morale. If an entry-level employee sees the CEO hire their unqualified nephew as a Vice President, the employee realizes that hard work does not lead to promotion, causing severe demotivation.'
  },

  // ==========================================
  // BATCH 25 - SET B (Generated - Final Batch)
  // ==========================================
  {
    id: 'b244',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 297 (Just Causes), what is the rule regarding the "Commission of a Crime" as a ground for termination?',
    correctAnswer: 'The employee can be dismissed if they commit a crime or offense directly against the person of the employer, any immediate member of the employer\'s family, or the employer\'s duly authorized representative.',
    incorrectAnswers: [
      'The employee can only be dismissed if they commit a crime against a co-worker.',
      'The employee can be dismissed for any traffic ticket received on the weekend.',
      'The employer must wait 10 years before dismissing them for a crime.'
    ],
    rationale: 'If an employee physically assaults the CEO\'s spouse, it completely destroys the trust required in the employment relationship, making it a valid Just Cause for immediate termination.'
  },
  {
    id: 'b245',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Article 299 (Disease as a ground for termination), when is an employer legally authorized to terminate an employee due to sickness?',
    correctAnswer: 'When the employee’s continued employment is prohibited by law or is prejudicial to their health or the health of co-employees, AND a competent public health authority certifies that the disease cannot be cured within 6 months.',
    incorrectAnswers: [
      'When the employee catches the common cold and misses 3 days of work.',
      'When the employee is diagnosed with high blood pressure.',
      'When the employer\'s personal doctor says the employee looks sick.'
    ],
    rationale: 'You cannot arbitrarily fire sick employees. To legally terminate for disease (and pay separation pay), the law requires strict proof (a certification from a public doctor) that the disease is practically incurable within a 6-month period (e.g., advanced stage cancer).'
  },
  {
    id: 'b246',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the prescriptive period for filing a case for unpaid wages, overtime pay, or 13th-month pay (Money Claims)?',
    correctAnswer: 'Three (3) years from the time the cause of action accrued.',
    incorrectAnswers: [
      'One (1) year.',
      'Four (4) years.',
      'Ten (10) years.'
    ],
    rationale: 'Under Article 306, all money claims arising from employer-employee relations prescribe in 3 years. If you resigned in 2020 and realized in 2024 you weren\'t paid your final pay, it is too late to sue.'
  },
  {
    id: 'b247',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the difference in jurisdiction between a Labor Arbiter and a Voluntary Arbitrator?',
    correctAnswer: 'Labor Arbiters handle cases like illegal dismissal and ULP, while Voluntary Arbitrators exclusively handle unresolved grievances arising from the interpretation of a Collective Bargaining Agreement (CBA) or company policies.',
    incorrectAnswers: [
      'Labor Arbiters handle criminal cases, while Voluntary Arbitrators handle civil cases.',
      'Labor Arbiters are for managers, while Voluntary Arbitrators are for rank-and-file.',
      'There is no difference; they do exactly the same job.'
    ],
    rationale: 'If there is a CBA dispute, the law prefers that the parties settle it themselves internally (Grievance Machinery -> Voluntary Arbitration). If someone is illegally fired for stealing, the state steps in (Labor Arbiter).'
  },
  {
    id: 'b248',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is a "Sympathy Strike"?',
    correctAnswer: 'A strike held by workers who have no direct dispute with their own employer, but strike purely in solidarity with workers of another company who are on strike. This is generally illegal in the Philippines.',
    incorrectAnswers: [
      'A legal strike held to protest against the government.',
      'A strike where workers politely and sympathetically ask for higher wages.',
      'A strike held by healthcare workers to protest lack of hospital beds.'
    ],
    rationale: 'For a strike to be legal, there must be a valid labor dispute (ULP or Deadlock) between the striking workers and THEIR direct employer. Striking just to support a different union unfairly hurts an innocent employer.'
  },
  {
    id: 'b249',
    setId: 'B',
    category: 'Labor Laws',
    text: 'Under Management Prerogative, when is the transfer or reassignment of an employee considered ILLEGAL?',
    correctAnswer: 'When the transfer is unreasonable, inconvenient, or prejudicial to the employee, and involves a demotion in rank, or a diminution of salary and benefits (Constructive Dismissal).',
    incorrectAnswers: [
      'When the employee simply dislikes the new office wall color.',
      'When the transfer is to a branch that is 5 minutes further away.',
      'Transferring employees is always 100% illegal.'
    ],
    rationale: 'Employers have the right to move people where they are needed. But transferring a "Manila Branch Manager" to be a "Cebu Janitor" at half pay is not a valid transfer; it is a blatant attempt to force them to resign.'
  },
  {
    id: 'b250',
    setId: 'B',
    category: 'Labor Laws',
    text: 'What is the "Principle of Non-Diminution of Benefits"?',
    correctAnswer: 'A rule stating that employers cannot unilaterally eliminate or reduce benefits that have already ripened into a vested right through consistent, voluntary, and deliberate practice over a long period.',
    incorrectAnswers: [
      'A rule that employee salaries must legally double every 5 years.',
      'A rule that an employer can never fire a pregnant employee.',
      'A law that prohibits employees from resigning during peak season.'
    ],
    rationale: 'If a company voluntarily gives a PHP 5,000 Christmas grocery basket every year for 10 years without conditions, they cannot suddenly take it away in year 11. It has become a company practice and a vested right of the workers.'
  }
];
