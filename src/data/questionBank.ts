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
  }
];
