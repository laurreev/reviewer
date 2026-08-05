const fs = require('fs');
const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf8');

const updates = {
  'a17': [
    'Increasing the base salary of all employees by a flat percentage across the board.',
    'Providing a comprehensive flexible benefits package tailored to senior management.',
    'Outsourcing the entire compensation and payroll processing to a third-party vendor.'
  ],
  'a18': [
    'A survey given to employees upon resignation to identify toxic workplace cultures.',
    'A mandatory legal document filed with the DOLE regarding hazardous working conditions.',
    'A quantitative performance appraisal tool used exclusively for executive-level management.'
  ],
  'a19': [
    'The Department of Labor and Employment (DOLE) through its safety inspectors.',
    'The Employee, through strict adherence to the company handbook.',
    'The Local Government Unit (LGU) where the business is registered.'
  ],
  'a20': [
    'Succession planning is only for the C-Suite, while replacement planning is for rank-and-file.',
    'Succession planning involves external hires, while replacement planning relies strictly on internal lateral moves.',
    'Succession planning is a statutory requirement, whereas replacement planning is an optional HR practice.'
  ],
  'a21': [
    'The tendency for an interviewer to compare all subsequent candidates to the first candidate interviewed.',
    'A bias where candidates artificially mimic the body language of the interviewer to gain favor.',
    'The practice of hiring immediate family members over highly qualified external candidates.'
  ],
  'a22': [
    'A system where employees receive a fluctuating percentage of the company’s annual net profits.',
    'Paying an employee a fixed annual salary divided into guaranteed bi-monthly pieces.',
    'Compensating executives exclusively with stock options rather than liquid cash.'
  ],
  'a23': [
    'Business Assessment and Review System',
    'Behavioral Analysis and Reporting Standards',
    'Base Annual Remuneration Structure'
  ],
  'b15': [
    'Exactly equal to the employee’s basic salary for the month of December including all bonuses.',
    '10% of the employee’s total gross earnings for the year, including overtime and night differential.',
    'A flat rate equivalent to one month of the prevailing regional minimum wage.'
  ],
  'b16': [
    'No, under no circumstances can it exceed 6 months; it is strictly prohibited by the Labor Code.',
    'Yes, the employer can unilaterally extend it up to 12 months without the employee’s consent.',
    'Yes, but only if the extension is explicitly approved by the DOLE Regional Director.'
  ],
  'b17': [
    'A minor, unintentional mistake in a weekly operational report resulting in financial loss.',
    'Arriving 10 minutes late to work on three consecutive days due to severe weather.',
    'A heated argument with a spouse that occurs completely outside of working hours and premises.'
  ],
  'b18': [
    'They will be fined PHP 50,000 and suspended, but cannot be legally terminated.',
    'They will only be suspended for a maximum of 30 days pending DOLE arbitration.',
    'There is no consequence as the right to strike is absolutely protected by the Constitution.'
  ],
  'b19': [
    'The absolute right of management to bypass labor laws to save the company from imminent bankruptcy.',
    'The statutory right of managers to receive higher non-taxable benefits than rank-and-file employees.',
    'The exclusive right of the CEO to negotiate and sign collective bargaining agreements.'
  ],
  'b20': [
    '15 days’ worth of basic salary for every year of continuous service.',
    'One full month’s salary for every year of service, inclusive of allowances.',
    'A lump sum of PHP 100,000 plus the accumulated SSS pension benefits.'
  ],
  'b21': [
    'No, the 13th-month pay is absolutely tax-free regardless of the total amount received.',
    'Yes, the entire amount is automatically subject to the standard withholding income tax.',
    'It is only taxable if the employee is classified as a managerial or supervisory employee.'
  ],
  'b22': [
    'An employee is guaranteed lifetime employment and can never be fired under any circumstance.',
    'An employee cannot be transferred to another branch or department without their written consent.',
    'An employer must guarantee a minimum wage increase every year regardless of performance.'
  ],
  'b23': [
    'Signing a formal contract, working in the office premises, wearing a uniform, and using company equipment.',
    'Mutual agreement, profitability of the business, regular working hours, and exclusivity of service.',
    'Government registration, mandatory tax deductions, issuance of an ID card, and daily time records.'
  ],
  'a24': [
    'The candidate is asked to perform a complex physical or technical task within a strict time limit.',
    'The interview is conducted by a panel of at least five senior executives simultaneously.',
    'The candidate is interrogated about their personal financial stressors and marital stability.'
  ],
  'a25': [
    'Training employees from different competing companies in a joint industry seminar.',
    'A mandatory physical fitness program provided as a holistic employee health benefit.',
    'Training that relies exclusively on online, self-paced modules across different platforms.'
  ],
  'a26': [
    'To penalize employees who frequently violate safety protocols by deducting from this pay.',
    'To completely cover the medical expenses of an employee who was recently injured on the job.',
    'To compensate employees who are forced to work consecutive night shifts for a month.'
  ],
  'a27': [
    'A system where every employee must receive a salary increase strictly based on company profits.',
    'A 360-degree method where employees are forced to evaluate their own direct managers.',
    'A ranking system where employees are rated strictly on their attendance and punctuality records.'
  ],
  'a28': [
    'A mathematical algorithm used by compensation analysts to determine an employee’s salary grade.',
    'A 3D physical or architectural model of a proposed ergonomic office layout.',
    'A legally binding contract detailing an employee’s job description and hazard exposures.'
  ],
  'a29': [
    'To compensate employees who are laid off due to severe company downsizing or retrenchment.',
    'To pay for an employee’s legal fees if they decide to sue a coworker for harassment.',
    'To provide monetary bonuses to workers who maintain a zero-accident safety record for the year.'
  ],
  'a30': [
    'The process of hiring highly paid external consultants to perform executive searches.',
    'A cognitive bias where an interviewer prefers candidates who graduated from their own university.',
    'The illegal practice of asking candidates about their religious beliefs or political affiliations.'
  ],
  'a31': [
    'Training that is strictly limited to entry-level employees during their first week of onboarding.',
    'A week-long intensive seminar covering the microscopic, granular details of a specific software.',
    'Learning that occurs exclusively on mobile devices during an employee’s unpaid break times.'
  ],
  'a32': [
    'A bonus given to employees when they formally sign and acknowledge their annual performance review.',
    'A cash reward given to HR personnel for successfully closing a highly specialized, hard-to-fill role.',
    'An annual guaranteed bonus mandated by a collective bargaining agreement upon contract signing.'
  ],
  'a33': [
    'The tendency of a rater to give all employees an average rating to deliberately avoid workplace conflict.',
    'The tendency of a rater to evaluate employees favorably based strictly on their physical appearance.',
    'The tendency of a rater to be overly strict and give unjustifiably low scores to motivate the team.'
  ],
  'b24': [
    'Not less than thirty (30) minutes of compensable time-off for regular meals.',
    'A continuous ninety (90) minute break for employees working 12-hour shifts.',
    'There is no legally mandated meal period; it is entirely subject to management prerogative.'
  ],
  'b25': [
    'Yes, all meal periods must be paid as part of the standard 8-hour workday.',
    'Yes, but only if the employee is forced to eat inside the company premises.',
    'No, but the employer must provide free meals to compensate for the unpaid time.'
  ],
  'b26': [
    'An arrangement where employees are paid full-time wages for working only 20 hours a week.',
    'A mandatory reduction of work hours during a financial crisis to prevent mass layoffs.',
    'A flexible policy allowing employees to choose their own start and end times every day.'
  ],
  'b27': [
    'Yes, as long as the employee signs a voluntary waiver accepting the promissory note.',
    'Yes, but only during a declared state of national calamity or severe economic crisis.',
    'No, wages must strictly be paid in physical cash; bank transfers are considered illegal.'
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
console.log('Updated ' + Object.keys(updates).length + ' questions for Batch 2 with harder distractors.');
