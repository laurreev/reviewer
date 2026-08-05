const fs = require('fs');
const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf8');

const updates = {
  'a34': [
    'A panel interview is conducted exclusively for executive-level roles, while sequential is strictly for entry-level applicants.',
    'A panel interview utilizes entirely unstructured behavioral questions, while sequential utilizes strict situational questions.',
    'A panel interview allows candidates to interview each other in a group setting, while sequential is a traditional 1-on-1.'
  ],
  'a35': [
    'A cross-functional training program where employees are deliberately taught skills completely unrelated to their current role.',
    'An exclusively virtual reality-based training environment that entirely replaces human instruction.',
    'A highly unstructured method where trainees are forced to learn strictly by observing senior staff without formal guidance.'
  ],
  'a36': [
    'A mandatory statutory requirement where executives share their personal dividends with rank-and-file workers.',
    'A guaranteed fixed annual bonus given uniformly to all employees regardless of the company’s actual financial performance.',
    'A retirement funding mechanism where the employer strictly matches the employee’s voluntary 401(k) contributions.'
  ],
  'a37': [
    'A visual infographic chart detailing the company’s stock performance over the fiscal year.',
    'A strict quantitative metric that exclusively measures the physical, tangible output (weight/volume) of a production worker.',
    'A 360-degree appraisal method where subordinates anonymously plot their manager’s leadership traits on a scatter graph.'
  ],
  'a38': [
    'A post-mortem analysis method used strictly after a major workplace accident to determine legal liability for DOLE reporting.',
    'An employee engagement survey specifically asking workers to list the most physically dangerous aspects of their jobs.',
    'A predictive statistical model used by HR analytics to forecast the exact likelihood of a key employee resigning.'
  ],
  'a39': [
    'A corporate financial program that guarantees low-interest loans to employees for purchasing their first home.',
    'A highly structured mentoring program where C-suite executives assist junior staff with complex daily operational tasks.',
    'A legal defense fund fully subsidized by the incumbent labor union to protect workers against management lawsuits.'
  ],
  'a40': [
    'The velocity at which external candidates complete the pre-employment medical examinations.',
    'The exact percentage of applicants who fail the cognitive ability screening during the first phase of hiring.',
    'The speed and efficiency at which an employee successfully completes their mandated daily operational KPIs.'
  ],
  'a41': [
    'Mandating that all employees participate in competitive e-sports tournaments during work hours to reduce burnout.',
    'Evaluating candidates strictly based on their strategic decision-making performance in a controlled chess match.',
    'Utilizing actual casino gambling mechanics, such as slot machine algorithms, to distribute variable annual bonuses.'
  ],
  'a42': [
    'Strictly statutory benefits mandated by the national government for all workers regardless of industry.',
    'Hazard pay given exclusively to employees who work in remote, peripheral areas (fringes) of the country.',
    'Mandatory payroll deductions taken from an employee’s gross salary to pay for union agency fees.'
  ],
  'a43': [
    'A cognitive bias where a manager rates an employee poorly simply because their introverted personality contrasts with the manager’s extroversion.',
    'A computational error in the HRIS where an employee’s final performance score is corrupted due to a faulty spreadsheet formula.',
    'An appraisal anomaly where an employee is rated exceptionally high on technical skills but fails completely on interpersonal soft skills.'
  ],
  'b34': [
    'All multinational BPO corporations operating within designated Special Economic Zones (PEZA).',
    'Heavy manufacturing companies regularly employing more than 500 rank-and-file workers.',
    'Business Process Outsourcing (BPO) companies operating exclusively on graveyard night shifts.'
  ],
  'b35': [
    'Yes, the Supreme Court has definitively ruled that all employer-drafted quitclaims are contrary to public policy and void ab initio.',
    'Yes, but only if the quitclaim is executed without the presence of a DOLE representative or a notary public.',
    'No, they are absolutely binding and can never be questioned in any judicial court under any circumstance.'
  ],
  'b36': [
    'Three (3) years for all provisions, strictly aligned with the terms of local government elected officials.',
    'Ten (10) years for the representation aspect, and five (5) years for the economic wage provisions.',
    'It is entirely dependent on mutual agreement and has no statutory maximum duration under the Labor Code.'
  ],
  'b37': [
    'Redundancy applies strictly to rank-and-file workers, while retrenchment applies exclusively to managerial employees.',
    'Redundancy is caused by employee negligence, while retrenchment is caused by employer financial mismanagement.',
    'Redundancy requires prior clearance from the DOLE Secretary, while retrenchment does not require any DOLE notification.'
  ],
  'b38': [
    'Two (2) consecutive days off per week (a 48-hour continuous rest period) for all private sector employees.',
    'There is no statutory minimum requirement; it is entirely dependent on the employment contract or CBA.',
    'A continuous rest period of twelve (12) hours every weekend, specifically from Saturday night to Sunday morning.'
  ],
  'b39': [
    'Three (3) days of unpaid leave, which must be immediately offset by overtime work.',
    'Thirty (30) days of fully paid leave, strictly non-extendable regardless of court orders.',
    'There is no specific statutory leave for VAWC; the employee must utilize their existing Service Incentive Leave (SIL).'
  ],
  'b40': [
    'Supervisory employees, as they are considered part of the management prerogative structure.',
    'Rank-and-file employees who are still serving their 6-month probationary period.',
    'All employees working in the Business Process Outsourcing (BPO) industry due to PEZA regulations.'
  ],
  'b41': [
    'When an employer intentionally pays highly tenured workers below the regional minimum wage to save costs.',
    'When male employees are systematically paid significantly more than female employees for exact equivalent work.',
    'When hyper-inflation causes the purchasing power of the employee’s salary to drop dramatically within a year.'
  ],
  'b42': [
    'Exactly one-half (1/2) month pay for every year of service, regardless of the employee’s tenure.',
    'Two (2) months pay for every year of service, plus a full refund of all mandatory government contributions.',
    'There is no separation pay required for redundancy as it is considered an authorized cause beyond employer control.'
  ],
  'b43': [
    'Exactly one (1) month pay for every year of service, matching the computation for redundancy.',
    'Ten percent (10%) of the employee’s total annual gross salary for every year of service.',
    'There is absolutely no separation pay required if the company can prove it is severely losing money.'
  ],
  'a44': [
    'A centralized physical building where all government-mandated pre-employment medical and psychological exams are conducted.',
    'A specific department within HR dedicated solely to computing, validating, and auditing applicant test scores.',
    'A massive university campus utilized by corporate recruiters for mass hiring during annual job fairs.'
  ],
  'a45': [
    'Mentoring is strictly reserved for C-suite executives, while coaching is designed exclusively for entry-level staff.',
    'Mentoring involves highly formalized classroom instruction, while coaching is entirely informal and undocumented.',
    'Mentoring focuses entirely on disciplinary actions, while coaching focuses strictly on monetary rewards.'
  ],
  'a46': [
    'A strict requirement for the employee to invest 10% of their net salary into the company’s internal stock market.',
    'A guaranteed payout of company stock given freely to an employee upon reaching the compulsory retirement age.',
    'An option for an employee to receive their monthly salary entirely in company shares to avoid income taxation.'
  ],
  'a47': [
    'The tendency of a rater to strictly focus only on the central, core duties of a job description, ignoring peripheral tasks.',
    'A cognitive error where an employee rates themselves significantly higher than their direct manager does (Dunning-Kruger Effect).',
    'The tendency of a rater to be overly critical of all employees, placing everyone at the absolute bottom of the scale.'
  ],
  'a48': [
    'A job description is an internal document for HR only, while a job specification is posted publicly on job boards.',
    'A job description is utilized exclusively for rank-and-file roles, while a job specification is reserved for managerial roles.',
    'They are exactly identical concepts and the terms are used interchangeably in modern HR literature.'
  ],
  'a49': [
    'An accident where an employee suffers a minor physical scratch that strictly does not require external first aid.',
    'A deliberate and malicious violation of a safety protocol by an employee that causes a machine breakdown.',
    'A worker arriving extremely late and narrowly missing the start of their scheduled production shift.'
  ],
  'a50': [
    'The ruthless practice of immediately terminating employees who fail to meet their quarterly sales quotas.',
    'A mass recruitment strategy aimed solely at poaching fresh college graduates from top-tier universities.',
    'Conducting aggressive background checks specifically targeting candidates with undisclosed criminal records.'
  ],
  'a51': [
    'Financial Analysis, Risk Mitigation Analysis, and External Competitor Analysis.',
    'Managerial Behavioral Analysis, Subordinate Analysis, and External Customer Satisfaction Analysis.',
    'Pre-training Capability Analysis, Mid-training Retention Analysis, and Post-training ROI Analysis.'
  ],
  'a52': [
    'The mandatory statutory government deductions taken directly from an executive\'s gross monthly salary.',
    'Performance-based cash bonuses that are tied directly to the quarterly fluctuations of company stock prices.',
    'Massive severance packages paid out when an executive is fired for just causes (Golden Parachutes).'
  ],
  'a53': [
    'A strict wellness policy where managers must track their physical steps using pedometers for corporate insurance points.',
    'A formalized, documented appraisal method conducted exclusively while walking around the external perimeter of the building.',
    'A punitive disciplinary action where a terminated employee is physically escorted off the premises by security.'
  ],
  'b44': [
    'Yes, all employees without exception are entitled to holiday pay under the equal protection clause.',
    'Yes, but they are only entitled to pay for regular holidays, completely excluding special non-working days.',
    'No, but they must be given an equivalent paid compensatory day off (CTO) within the same workweek.'
  ],
  'b45': [
    'Those operating in the retail sector regularly employing not more than ten (10) workers.',
    'Those operating strictly inside PEZA-registered shopping malls and commercial centers.',
    'There is no statutory exemption; absolutely all establishments must pay night shift differentials.'
  ],
  'b46': [
    'A paid leave of ten (10) days strictly reserved for women suffering from documented domestic physical violence.',
    'An additional thirty (30) days of fully paid maternity leave exclusively for legally verified single mothers.',
    'A mandatory five (5) days off per year for female employees suffering from severe dysmenorrhea during menstruation.'
  ],
  'b47': [
    'It is a fixed national baseline rate of PHP 5,000 for all domestic workers across the entire Philippines.',
    'It is negotiated solely between the employer and the kasambahay with absolutely no minimum statutory limit.',
    'It is exactly mathematically equal to the prevailing minimum wage of rank-and-file corporate workers in the region.'
  ],
  'b48': [
    'Payment for company equipment that the employee accidentally broke, provided the deduction is less than 20% of their wage.',
    'Deductions for mandatory company uniforms, provided they are issued at cost without profit.',
    'Contributions to a company-sponsored charity event, provided it is approved by the CEO.'
  ],
  'b49': [
    'Exactly one (1) year from the exact date of the alleged illegal dismissal.',
    'Exactly three (3) years from the exact date of the alleged illegal dismissal.',
    'Exactly ten (10) years from the exact date of the alleged illegal dismissal, similar to breach of written contract.'
  ],
  'b50': [
    'Exactly one (1) year from the exact time the cause of action accrued.',
    'Exactly four (4) years from the exact time the cause of action accrued.',
    'Exactly ten (10) years from the exact time the cause of action accrued.'
  ],
  'b51': [
    'Pay a mandatory non-refundable strike bond of PHP 100,000 directly to the DOLE Regional Office.',
    'Secure a written clearance from the local mayor allowing a public assembly outside the factory gates.',
    'Ensure that absolutely 100% of the union members vote in favor of the strike during a public show of hands.'
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
console.log('Updated ' + Object.keys(updates).length + ' questions for Batches 3 and 4 with harder distractors.');
