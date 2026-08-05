const fs = require('fs');
const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf8');

const updates = {
  'b52': [
    'An internal election held exclusively by the HR Department to choose the new union president.',
    'A mandatory government exam taken by HR professionals to become legally certified labor arbiters.',
    'A formal voting process to decide if the company should declare severe financial retrenchment.'
  ],
  'b53': [
    'A mechanical sorting machine utilized in large manufacturing plants to physically categorize written employee complaints.',
    'A specialized quasi-judicial court within the NLRC that exclusively handles appeals for illegal dismissal cases.',
    'A strict company policy that entirely bans employees from filing civil lawsuits against the corporation.'
  ],
  'a54': [
    'Designing the physical corporate logo and aesthetic that appears on mandatory company uniforms.',
    'A targeted marketing strategy aimed strictly at increasing external product sales to retail consumers.',
    'The formal legal process of registering the company’s corporate name with the Securities and Exchange Commission (SEC).'
  ],
  'a55': [
    'Onboarding training conducted exclusively in the physical lobby (vestibule) of the corporate headquarters.',
    'An asynchronous online-only training module focusing entirely on interpersonal communication soft skills.',
    'A high-stress type of on-the-job training where trainee errors directly impact live external customers.'
  ],
  'a56': [
    'A standard, fixed cost-of-living adjustment (COLA) automatically given to all employees across the board annually.',
    'A one-time discretionary cash bonus given exclusively for hitting a highly specific quarterly sales quota.',
    'Statutory premium overtime pay granted specifically for rendering work on a scheduled weekly rest day.'
  ],
  'a57': [
    'The documented tendency of an employee to act perfectly only when their direct supervisor is actively watching (Hawthorne Effect).',
    'A severe cognitive bias where an employee is judged and rated strictly on their personal religious or political affiliations.',
    'The informal process of deliberately giving a highly inflated rating to a senior employee who is about to retire.'
  ],
  'a58': [
    'Giving an employee significantly more authority, autonomy, and executive decision-making power (vertical expansion).',
    'Hiring a larger volume of temporary personnel to execute the exact same specialized job role.',
    'Temporarily transferring an employee to a completely different department to avoid imminent retrenchment.'
  ],
  'a59': [
    'Risk Evaluation and Cost-Benefit Matrix Analysis',
    'Implementing Strict Engineering Controls',
    'Reviewing and Monitoring Incident Reports'
  ],
  'a60': [
    'Arbitrarily hiring candidates without conducting any review of their submitted resumes or portfolios.',
    'Conducting panel interviews in a completely darkened room to avoid physical appearance biases.',
    'Hiring passive candidates based solely on executive referrals without conducting any formal interview.'
  ],
  'a61': [
    'The psychological study of how adolescent children learn in a highly structured, formal classroom setting (Pedagogy).',
    'A modern method of technical training that strictly utilizes fully immersive virtual reality environments.',
    'The analytical process of evaluating the definitive financial Return on Investment (ROI) of a training program.'
  ],
  'a62': [
    'A subsidized plan that strictly provides free daily meals to employees within the corporate company cafeteria.',
    'A mandatory payroll deduction plan that forces all employees to strictly pay for their own HMO health insurance.',
    'A static retirement plan where the employer unilaterally chooses exactly where to invest the accumulated funds.'
  ],
  'a63': [
    'Peers rarely possess the technical knowledge of what the job actually entails compared to senior executive management.',
    'They are explicitly considered illegal and discriminatory under standard DOLE labor laws.',
    'They fundamentally require highly expensive, customized proprietary software algorithms to implement properly.'
  ],
  'b54': [
    'Exactly one (1) month pay for every year of continuous service, mathematically matching the computation for redundancy.',
    'The employer is absolutely not required to pay any separation pay if the employee is genuinely medically sick.',
    'A fixed amount of exactly ten (10) days of basic pay for every year of continuous service.'
  ],
  'b55': [
    'Yes, the Labor Code expressly mandates exactly five (5) days of fully paid bereavement leave.',
    'Yes, but strictly only for the death of an immediate legitimate spouse or legitimate child.',
    'Yes, exactly three (3) days of paid leave are explicitly mandated by DOLE Department Orders.'
  ],
  'b56': [
    'He must strictly take the entire leave exactly on the specific day the child is physically born.',
    'He must submit a notarized DNA test definitively proving biological paternity before the leave is formally approved.',
    'He must have continuously worked for the company for a minimum period of at least three (3) years.'
  ],
  'b57': [
    'They must legally accept a 10% reduction in gross salary since they inherently save on daily transportation costs.',
    'They are statutorily exempt from the 8-hour workday limit and can be legally required to render work 24/7.',
    'They automatically forfeit their constitutional right to unionize and form collective bargaining agreements.'
  ],
  'b58': [
    'The employee is entitled to exactly 200% of their regular daily wage, standard for all holidays.',
    'The employee is entitled to exactly 300% of their regular daily wage due to the double penalty.',
    'The employee is entitled to exactly 150% of their regular daily wage as a compromise rate.'
  ],
  'b59': [
    'They are automatically and legally terminated immediately upon physically joining the illegal picket line.',
    'They are granted absolute immunity from any administrative disciplinary action under all circumstances.',
    'They must pay a mandatory statutory fine equivalent to their daily salary for the entire duration of the strike.'
  ],
  'b60': [
    'Compulsory arbitration applies exclusively to government workers, while voluntary applies exclusively to private sector workers.',
    'Compulsory arbitration decisions can be appealed to the Supreme Court, while voluntary arbitration decisions absolutely cannot.',
    'Compulsory arbitration legally requires representation by a lawyer, while voluntary arbitration explicitly bans legal counsel.'
  ],
  'b61': [
    'Validly terminating an employee for documented theft of critical company property (Just Cause).',
    'Mandating that all rank-and-file employees strictly wear a designated company uniform during work hours.',
    'Denying an employee\'s request for an extended vacation leave due to severe operational requirements.'
  ],
  'b62': [
    'Setting a mandatory compulsory retirement age explicitly written within a valid collective bargaining agreement.',
    'Requiring a highly specific age limit if age is proven to be a Bona Fide Occupational Qualification (BFOQ).',
    'Refusing to hire an underage minor applicant for highly hazardous underground mining work.'
  ],
  'b63': [
    'Valid contracting fundamentally involves at least 100 workers, while labor-only strictly involves fewer than 10 workers.',
    'Valid contracting is strictly reserved for blue-collar manual jobs, while labor-only is for white-collar office jobs.',
    'Valid contracting must be formally approved by the President, while labor-only is unilaterally approved by the DOLE Secretary.'
  ],
  'a64': [
    'An employee who is constantly and involuntarily transferred between different regional departments due to poor performance.',
    'A highly persistent candidate who repeatedly applies for the exact same position immediately after being rejected.',
    'An expatriate employee who frequently travels internationally on a rotating schedule for corporate work.'
  ],
  'a65': [
    'A physical outdoor obstacle course utilized exclusively for high-intensity corporate team building.',
    'A highly fast-paced online gamified quiz utilized strictly to test basic cognitive knowledge.',
    'A passive learning methodology that involves watching corporate action movies to strictly analyze leadership styles.'
  ],
  'a66': [
    'An employee who is currently being paid significantly below the absolute minimum range for their designated job grade.',
    'An employee whose base salary has been permanently frozen due to a severe administrative disciplinary action.',
    'A gross salary that is heavily penalized because it falls into the highest possible statutory income tax bracket.'
  ],
  'a67': [
    'The tendency of a rater to safely rate absolutely all employees exactly in the middle of the curve (Central Tendency Error).',
    'Rating an employee highly exclusively because they strictly follow the rules without questioning authority.',
    'Evaluating a tenured employee severely based on a single isolated negative event (Horn Effect/Recency Error).'
  ],
  'a68': [
    'To permanently transfer chronically underperforming employees to significantly easier, lower-tier roles.',
    'To physically and structurally rotate the ergonomic layout of the corporate office every fiscal quarter.',
    'To systematically replace highly-paid full-time regular workers with cheaper temporary contract workers.'
  ],
  'a69': [
    'A daily administrative log sheet strictly recording the attendance of third-party security personnel.',
    'A highly confidential financial document detailing the company’s executive liability insurance policies.',
    'A restricted medical record documenting an employee’s previous workplace injuries and HMO claims.'
  ],
  'a70': [
    'Return on Personnel Optimization',
    'Required Pre-employment Orientation',
    'Regional Placement Objectives'
  ],
  'a71': [
    'Moving a highly structured training program from an asynchronous online platform to a physical classroom setting.',
    'Transferring the financial cost of a specialized training program to a completely different corporate department.',
    'The physical and logistical relocation of an employee to an external offshore training facility.'
  ],
  'a72': [
    'An employee who is being paid significantly above the absolute maximum range for their designated job grade.',
    'An employee who voluntarily chooses to receive their salary entirely in eco-friendly corporate investments.',
    'A newly hired rank-and-file employee who is still officially serving their 6-month probationary period.'
  ],
  'a73': [
    'Evaluating a tenured employee strictly based on their very first month on the job (Primacy Effect).',
    'An administrative error involving the use of an outdated appraisal form from a previous fiscal year.',
    'Rating an employee highly simply because they are a recent honors graduate from a top-tier university.'
  ],
  'b64': [
    'It is the primary government agency that registers new businesses and issues corporate charters.',
    'It is a specialized police force strictly responsible for arresting violent participants in illegal strikes.',
    'It is a bicameral legislative body that strictly creates and amends all new national labor laws.'
  ],
  'b65': [
    'No, the 13th-month pay is absolutely forfeited if the employee does not successfully finish the calendar year.',
    'Only if they resigned voluntarily; employees who are terminated for just cause absolutely forfeit it.',
    'Yes, they must receive the full un-prorated amount regardless of how many exact months they worked.'
  ],
  'b66': [
    'The solo parent must be formally and legally separated or annulled by a valid judicial court order.',
    'The leave can strictly only be utilized when the legitimate child is physically hospitalized.',
    'The solo parent must possess and support at least three (3) legitimate dependent children.'
  ],
  'b67': [
    'A mandatory clearance permit strictly required for Filipinos wanting to work abroad as Overseas Filipino Workers (OFWs).',
    'A special randomized tax identification number issued strictly for foreign direct investors.',
    'A corporate permit allowing foreign multinational companies to operate locally without paying corporate taxes.'
  ],
  'b68': [
    'The absolute power to unilaterally rewrite and modify the economic provisions of Collective Bargaining Agreements.',
    'The law enforcement power to physically arrest employees who commit theft against their employers.',
    'The executive power to shut down any business permanently without securing a valid judicial court order.'
  ],
  'b69': [
    'Eighteen (18) years old with absolutely no statutory exceptions under the Labor Code.',
    'Sixteen (16) years old, aligned with the legal age of consent.',
    'Twenty-one (21) years old, aligned with the age of majority for hazardous industrial work.'
  ],
  'b70': [
    'A regular employee strictly works in the corporate office, while a project employee exclusively works in the field.',
    'A regular employee is strictly paid monthly, while a project employee is exclusively paid on a daily rate.',
    'A regular employee absolutely cannot be fired, while a project employee can be arbitrarily fired at any time.'
  ],
  'b71': [
    'No, absolutely all fixed-term contracts are considered illegal labor-only contracting by the Supreme Court.',
    'Yes, but it can legally only be utilized for high-level expatriates and specialized foreign workers.',
    'No, signing a fixed-term contract automatically elevates the employee to regular status from day one.'
  ],
  'b72': [
    'A temporary operational shutdown during a nationally declared regular public holiday.',
    'An aggressive tactic where an employer intentionally locks out legally striking workers from the premises.',
    'The strategic termination of a single isolated department while the rest of the corporate business aggressively expands.'
  ],
  'b73': [
    'A rigid statutory rule that strictly requires large companies to donate exactly 5% of their net profits to charity.',
    'An economic law that strictly and mathematically equalizes the salaries of top managers and rank-and-file workers.',
    'The constitutional and absolute protection of employer property rights over employee general welfare.'
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
console.log('Updated ' + Object.keys(updates).length + ' questions for Batches 5, 6, and 7 with harder distractors.');
