const fs = require('fs');

const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf8');

const updates = {
  'a1': [
    'To strictly enforce compliance with OSH regulations during onboarding.',
    'To assess a candidate’s stress tolerance during a situational interview.',
    'To artificially inflate the attractiveness of the role to secure top talent.'
  ],
  'a2': [
    'Job Description',
    'Job Analysis Report',
    'Position Classification Profile'
  ],
  'a3': [
    'Evaluates the employee based strictly on their most recent project success.',
    'Artificially inflates ratings across the board to avoid demotivating the team.',
    'Allows a severe negative incident to unfairly drag down all other independent metrics.'
  ],
  'b1': [
    'Three (3) months, extendable by another three months upon mutual agreement.',
    'One (1) year for specialized or highly technical roles.',
    'At the absolute discretion of the employer provided it is stipulated in the contract.'
  ],
  'b2': [
    'Rank-and-file employees who have worked for exactly 1 month.',
    'Piece-rate workers and those paid on a commission basis.',
    'Probationary rank-and-file employees who were terminated in November.'
  ],
  'b3': [
    '130% of the regular daily wage.',
    '150% of the regular daily wage plus a compensatory day off.',
    '100% of the regular daily wage plus a 30% premium.'
  ],
  'a4': [
    'Situational Interview',
    'Stress Interview',
    'Non-directive Interview'
  ],
  'a5': [
    'Assessment',
    'Application',
    'Alignment'
  ],
  'a6': [
    'Matching the company’s compensation package with competitors in the same geographic labor market.',
    'Providing a uniform, standardized salary to all employees regardless of tenure or position.',
    'Ensuring strict parity between executive compensation and rank-and-file wages.'
  ],
  'a7': [
    'A rigid top-down appraisal system where only the direct manager provides an annual rating.',
    'A self-evaluation matrix where the employee maps their performance against 360 distinct competencies.',
    'An objective, metric-driven system focused strictly on quantitative outputs over a 360-day period.'
  ],
  'a8': [
    'Direct Observation Method',
    'Critical Incident Technique',
    'Behavioral Anchored Rating'
  ],
  'a9': [
    'To monitor employee productivity metrics through advanced tracking hardware.',
    'To establish a financial risk mitigation framework against workers\' compensation claims.',
    'To mandate strict compliance with DOLE Occupational Safety Health (OSH) reporting standards.'
  ],
  'a10': [
    'The duration it takes for a newly hired employee to reach full productivity (Time-to-Productivity).',
    'The time interval between the initial screening interview and the final executive interview.',
    'The total cumulative hours HR spends sourcing, interviewing, and onboarding a single candidate.'
  ],
  'a11': [
    'Classroom-style vestibule training conducted by external subject matter experts.',
    'Self-paced asynchronous e-learning modules completed before the first day of work.',
    'Highly stressful simulation exercises conducted in an isolated off-site environment.'
  ],
  'a12': [
    'The comparison of an organization’s total benefits expenditure against its closest industry competitor.',
    'The percentage of gross revenue dedicated strictly to rank-and-file employee compensation.',
    'The statistical variance between the highest paid executive and the lowest paid entry-level worker.'
  ],
  'a13': [
    'Rating an employee highly based on their physical attractiveness or charisma (Beauty Bias).',
    'The cognitive tendency to cluster all employees in the absolute middle of a rating scale (Central Tendency).',
    'Evaluating an employee based purely on a severe mistake made in the last two weeks of the year (Recency Effect).'
  ],
  'b4': [
    '200% of the regular daily wage.',
    '150% of the regular daily wage.',
    '100% of the regular daily wage plus a 10% premium.'
  ],
  'b5': [
    'Not less than 20% of the regular wage for work performed between 8:00 PM and 5:00 AM.',
    'Not less than 15% of the regular wage for work performed between 10:00 PM and 6:00 AM.',
    'An additional flat premium of PHP 150 per night shift regardless of the hourly rate.'
  ],
  'b6': [
    'Ten (10) days of commutable leave with pay immediately upon regularization.',
    'Fifteen (15) days of sick leave and fifteen (15) days of vacation leave credited annually.',
    'Seven (7) days of leave with pay granted incrementally after six months of continuous service.'
  ],
  'b7': [
    '60 days for normal delivery and 78 days for caesarean delivery.',
    '120 days for all types of deliveries, provided the employee notifies the employer within 30 days.',
    '90 days of fully paid leave, with an absolute option to extend for 30 unpaid days.'
  ],
  'b8': [
    'Ten (10) days for any childbirth of his legitimate or common-law spouse.',
    'Seven (7) days for unlimited deliveries of his legitimate spouse, provided they cohabit.',
    'Fourteen (14) days if the legitimate spouse underwent an emergency caesarean delivery.'
  ],
  'b9': [
    'Gross and habitual neglect by the employee of their duties.',
    'Fraud or willful breach of trust by the employee.',
    'Commission of a crime by the employee against the employer or their family.'
  ],
  'b10': [
    'Yes, if the employee committed a severe, documented crime like grand theft on company premises.',
    'Yes, provided the employer immediately pays severance equivalent to one month’s salary.',
    'No, the employer must secure clearance from the DOLE before terminating any regular employee.'
  ],
  'b11': [
    'When an employer physically barricades an employee from entering the workplace premises.',
    'The premature termination of a probationary employee before the expiration of the 6-month period.',
    'When an employee preemptively resigns upon discovering they will be terminated for a just cause.'
  ],
  'b12': [
    'Sixty (60) years old',
    'Seventy (70) years old',
    'Fifty-five (55) years old'
  ],
  'b13': [
    'Any solo parent regardless of tenure, entitling them to five (5) days of leave.',
    'Only female solo parents who have rendered at least six (6) months of aggregate service.',
    'Any solo parent who has rendered at least one (1) year of service, entitling them to twelve (12) days of leave.'
  ],
  'a14': [
    'Reaction (whether the trainees found the training enjoyable and engaging).',
    'Learning (the measurable increase in cognitive knowledge or technical skills).',
    'Results (the tangible financial or operational impact on the business, such as ROI).'
  ],
  'a15': [
    'Validity is the consistency of scores, while reliability is whether it measures the intended trait.',
    'Validity applies exclusively to cognitive ability tests, while reliability applies to physical assessments.',
    'Validity is a strict legal requirement under DOLE, while reliability is an optional internal HR metric.'
  ],
  'a16': [
    'Behaviorally Anchored Rating Scales (BARS)',
    '360-Degree Feedback System',
    'Forced Distribution (Stack Ranking)'
  ],
  'b14': [
    'One (1) month pay for every year of service (1MP/YS).',
    'One (1) month pay or One-half (1/2) month pay per year of service, whichever is lower.',
    'No separation pay is required for closure due to any reason.'
  ]
};

for (const [id, newAnswers] of Object.entries(updates)) {
  const regex = new RegExp(`(id:\\s*'${id}'.*?incorrectAnswers:\\s*\\[)(.*?)(\\])`, 's');
  content = content.replace(regex, (match, p1, p2, p3) => {
    const replacement = newAnswers.map(a => `\n      '${a.replace(/'/g, "\\'")}'`).join(',') + '\n    ';
    return p1 + replacement + p3;
  });
}

fs.writeFileSync(file, content);
console.log('Updated ' + Object.keys(updates).length + ' questions with harder distractors.');
