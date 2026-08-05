const fs = require('fs');
const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf8');

const updates = {
  'b74': [
    'An employee strictly hired only during the peak Christmas holiday season to drastically augment sales quotas.',
    'An employee who is automatically and illegally terminated at the end of every calendar fiscal year.',
    'An employee who is strictly utilized only when the tenured regular employees are on mandatory vacation leave.'
  ],
  'b75': [
    'After exactly six (6) months of continuous service, consistent with standard probationary periods.',
    'As soon as they officially pass a highly structured performance evaluation given by their immediate supervisor.',
    'Casual employees absolutely can never become regular employees by operation of any statutory labor law.'
  ],
  'b76': [
    'No, absolutely all commercial businesses without exception must pay the mandated regional minimum wage.',
    'Yes, but strictly only for their very first operational calendar year after securing their SEC registration.',
    'Yes, they are statutorily exempt from paying any wages entirely and can legally rely exclusively on profit sharing.'
  ],
  'b77': [
    'A full 100% financial reimbursement of absolutely all hospital and medical bills incurred by the sick employee.',
    'A mandatory, fully paid leave of 30 days provided directly by the employer, completely separate from existing sick leaves.',
    'A discretionary one-time lump sum payment of exactly PHP 50,000 for any terminal or critical illness.'
  ],
  'b78': [
    'To strictly provide free comprehensive healthcare and hospitalization coverage for all private employees.',
    'To act as the sole exclusive provider of statutory retirement pensions in the entire Philippines.',
    'To explicitly provide emergency cash loans directly to employers during a severe national financial crisis.'
  ],
  'b79': [
    'It legally mandates the immediate and unconditional regularization of all contractual employees across the Philippines.',
    'It completely removes absolutely all statutory restrictions on companies outsourcing their core business functions.',
    'It unilaterally establishes the new strict minimum wage rates for all economic regions in the country.'
  ],
  'b80': [
    'Exactly twenty-four (24) hours from the exact moment of physical receipt of the disciplinary notice.',
    'Exactly forty-eight (48) hours from the exact moment of physical receipt of the disciplinary notice.',
    'Exactly ten (10) working business days from the exact moment of physical receipt of the disciplinary notice.'
  ],
  'b81': [
    'The employee must be strictly notified twice by corporate email and twice by registered postal mail.',
    'The employer must definitively secure the written approval of both the DOLE Secretary and the NLRC before firing.',
    'The employee maintains the absolute right to legally appeal the dismissal twice before it becomes judicially final.'
  ],
  'b82': [
    'The strict requirement that an employee’s salary must be bilaterally determined by both the CEO and the HR Director.',
    'The statutory rule that both the private employer and the government must collectively determine the minimum wage.',
    'The constitutional principle that male and female employees must absolutely receive the exact same base salary.'
  ],
  'b83': [
    'It absolutely cannot be exercised on multinational companies with a workforce of more than 1,000 regular employees.',
    'It absolutely cannot be legally exercised during the peak operational month of December.',
    'It strictly requires a formal search and seizure warrant issued by a regional trial court judge.'
  ],
  'a84': [
    'An interview where multiple competing candidates are simultaneously interviewed by a single hiring manager.',
    'An interview conducted exclusively and strictly through a specialized proprietary software panel.',
    'A grueling series of back-to-back one-on-one sequential interviews spanning an entire full business day.'
  ],
  'a85': [
    'Training that is strictly and exclusively limited to entry-level, minimum-wage, or "micro" operational positions.',
    'A massive year-long corporate training program systematically broken down into weekly 4-hour rigorous sessions.',
    'A highly specialized technical course strictly teaching employees how to utilize microscopes and other precision scientific equipment.'
  ],
  'a86': [
    'Strictly only the exact monetary value of the employee’s annualized base salary and guaranteed cash bonuses.',
    'The mathematically computed total amount of all statutory government benefits mandated by the Labor Code.',
    'The cumulative sum total of physical corporate gifts (like gold watches or plaques) given explicitly during retirement.'
  ],
  'a87': [
    'An intentional cognitive bias where an employee is rated poorly simply because their introverted personality sharply contrasts with the manager\'s.',
    'Evaluating an employee solely based on how severely their physical attire contrasts with the corporate dress code.',
    'The administrative error of giving completely different numerical ratings to two employees who perform the exact same job.'
  ],
  'a88': [
    'To formally and legally appraise an individual employee’s annual performance at the absolute end of the fiscal year.',
    'To strictly and unilaterally decide which specific employees should be immediately promoted or severely retrenched.',
    'To legally write the absolute initial draft of a job description for external recruitment job board postings.'
  ],
  'a89': [
    'The highly analytical study of how macroeconomic financial risks directly impact executive employee compensation.',
    'Designing physical office layouts strictly and exclusively to maximize visual and aesthetic appeal to VIP clients.',
    'The deep psychological study of employee intrinsic motivation, clinical depression, and overall corporate morale.'
  ],
  'a90': [
    'Automated Testing Software',
    'Advanced Talent Sourcing',
    'Applicant Training Schedule'
  ],
  'a91': [
    'To meticulously plan the exact chronological sequence of operational tasks an employee must execute during their shift.',
    'To strictly determine the legal designated heirs of a deceased employee’s final separation pay and death benefits.',
    'To structurally map out the physical architectural evacuation routes utilized strictly during a mandatory fire drill.'
  ],
  'a92': [
    'Providing highly subsidized, high-speed broadband internet stipends exclusively to all remote telecommuting employees.',
    'Strictly paying all regular employees in a specific operational department the exact same flat non-negotiable rate.',
    'Aggressively expanding the company’s HMO benefit plan to include premium international executive travel coverage.'
  ],
  'a93': [
    'The documented psychological tendency to consistently give overly low, extremely harsh numerical ratings to absolutely everyone.',
    'The informal practice of allowing a tenured employee to completely skip the annual appraisal if they are operationally busy.',
    'Evaluating an employee exceptionally high strictly based on a single isolated positive incident (Halo Effect).'
  ],
  'b84': [
    'The entire holistic CBA is valid for exactly 10 years without any possibility of interim renegotiation.',
    'The entire holistic CBA must be mandatorily and exhaustively renegotiated every single calendar year.',
    'The representation aspect is valid for 3 years, while the economic wage provisions are valid for 5 years.'
  ],
  'b85': [
    'Basic Foundation of Quality',
    'Bureau of Foreign Occupational Quotas',
    'Business Focused Operational Query'
  ],
  'b86': [
    'No, the Supreme Court has definitively declared that absolutely all employer-drafted quitclaims are void and strictly illegal.',
    'Yes, they are absolutely always valid and binding regardless of how mathematically minuscule the amount paid to the employee was.',
    'Yes, but strictly only if the document is formally notarized by the company’s internal in-house legal counsel.'
  ],
  'b87': [
    'AWOL is strictly an unauthorized absence for exactly 1 day, while Abandonment is strictly an absence for exactly 3 days.',
    'There is absolutely no legal distinction; both terms mean exactly the same thing under the Philippine Labor Code.',
    'AWOL strictly applies only to private corporate employees, while Abandonment strictly applies to tenured government civil servants.'
  ],
  'b88': [
    'An employer must automatically and statutorily increase all non-wage benefits by exactly 10% every single fiscal year.',
    'An employer absolutely cannot structurally terminate any tenured employee who legally receives high executive benefits.',
    'An employer absolutely cannot legally lower the retail market price of their manufactured commercial products.'
  ],
  'b89': [
    'A grueling arrangement of working exactly 8 hours a day for 7 straight continuous days without any scheduled rest.',
    'Aggressively compressing the entire operational workload of two separated employees onto one single remaining employee.',
    'A modern flexible policy exclusively allowing tenured employees to work from home indefinitely.'
  ],
  'b90': [
    'Employers must mandatorily construct completely separate physical office buildings for male and female employees.',
    'Employers must strictly and legally ban absolutely all consensual office romances and internal dating.',
    'Employers are strictly only required to post a single "No Harassment" sign in the main corporate lobby.'
  ],
  'b91': [
    'A maximum of exactly one (1) month.',
    'A maximum of exactly three (3) months.',
    'A maximum of exactly one (1) year.'
  ],
  'b92': [
    'Exactly twenty percent (20%) of the employee\'s regular baseline wage.',
    'Exactly twenty-five percent (25%) of the employee\'s regular baseline wage.',
    'Exactly fifty percent (50%) of the employee\'s regular baseline wage.'
  ],
  'b93': [
    'Yes, absolutely all employees regardless of rank can legally join the exact same unified labor union.',
    'No, supervisory employees are absolutely and constitutionally banned from joining any labor union whatsoever.',
    'Yes, but they are statutorily required to pay exactly double the standard monthly union dues.'
  ],
  'a94': [
    'The specific statistical rate at which entirely new external candidates apply for a single exclusive job opening.',
    'The exact percentage of regular employees who fail their mandatory annual corporate physical medical examination.',
    'The financial and accounting rate at which a company’s physical heavy equipment mathematically depreciates.'
  ],
  'a95': [
    'Strictly requiring employees to play commercial video games during their mandated break time to reduce psychological stress.',
    'Literally converting the entire formalized performance appraisal process into a physical tabletop board game.',
    'Exclusively and mandatorily utilizing highly expensive virtual reality headsets for absolutely all training programs.'
  ],
  'a96': [
    'A specialized retirement plan where executives receive actual physical gold bullion bars instead of liquid cash.',
    'A highly specific hazardous duty premium pay given strictly to employees actively working in commercial aviation.',
    'An exclusive company-sponsored recreational skydiving trip given as a high-tier executive team-building reward.'
  ],
  'a97': [
    'To strictly determine exactly how much variable cash bonus an individual employee should mathematically receive.',
    'To provide undeniable, documented legal grounds for the immediate termination of an employee without just cause.',
    'To aggressively force rank-and-file employees to publicly criticize their direct managers during open team meetings.'
  ],
  'a98': [
    'Job analysis is utilized exclusively for C-suite executives, while competency modeling is utilized strictly for entry-level roles.',
    'Competency modeling is a strict quantitative mathematical formula, while job analysis is highly subjective and qualitative.',
    'There is absolutely no distinction; they are completely synonymous terms used interchangeably by HR professionals.'
  ],
  'a99': [
    'A corporate financial program that gives highly subsidized, interest-free cash loans to employees purchasing new houses.',
    'A highly adversarial union-led program that aggressively assists workers in filing class-action lawsuits against the company.',
    'A structured corporate mentoring program that strictly and exclusively teaches complex technical software coding skills.'
  ],
  'a100': [
    'Nepotism inherently involves direct financial bribery, while cronyism strictly involves informal verbal recommendations.',
    'Nepotism is entirely legal, while cronyism is strictly and explicitly illegal in absolutely all private corporations.',
    'Nepotism applies strictly and exclusively to hiring decisions, while cronyism applies exclusively to termination decisions.'
  ],
  'a101': [
    'It legally allows the company to aggressively force employees to work mandatory overtime without any additional premium pay.',
    'It legally and immediately elevates an employee’s official job title to a significantly higher executive rank without a pay raise.',
    'It mathematically allows the corporation to entirely eliminate the internal HR department to drastically save overhead costs.'
  ],
  'a102': [
    'A severe monetary penalty directly deducted from an employee\'s gross salary if they cause a major workplace accident.',
    'A standard, uniform cash bonus mandated to be given to all employees during the peak of the annual flu season.',
    'A massive severance pay package given exclusively to executives who are fired for creating a catastrophic safety hazard.'
  ],
  'a103': [
    'A highly controversial system where subordinate employees anonymously evaluate and mathematically rank their direct managers.',
    'A randomized lottery system strictly utilized to determine exactly which department receives the annual corporate bonus.',
    'A socialist-style appraisal method where absolutely all employees are forced to receive the exact same average numerical rating.'
  ],
  'b94': [
    'No, the 13th-month pay law strictly and exclusively applies only to corporate employees in registered commercial enterprises.',
    'Yes, but strictly only if they have continuously worked for the exact same employer for at least 5 consecutive years.',
    'No, they are legally only entitled to a discretionary Christmas bonus at the absolute whim of the employer.'
  ],
  'b95': [
    'A strict DOLE policy that allows employees exactly one single chance to file a labor complaint in their entire lifetime.',
    'A literal physical single entry door in all DOLE regional offices where all written complaints must be exclusively dropped off.',
    'A rigid administrative rule that strictly prevents labor unions from filing more than one collective grievance per fiscal year.'
  ],
  'b96': [
    'A maximum of exactly fourteen (14) days.',
    'A maximum of exactly sixty (60) days.',
    'A maximum of exactly six (6) months.'
  ],
  'b97': [
    'An employee resigning completely voluntarily simply because they successfully secured a significantly better-paying external job.',
    'An employer validly terminating an employee after they were explicitly caught stealing massive amounts of company funds.',
    'An employer legally enforcing a highly strict but entirely valid and documented corporate dress code policy.'
  ],
  'b98': [
    'No, the Labor Code strictly and absolutely forbids extending a probationary period under any circumstance whatsoever.',
    'Yes, the employer possesses the absolute prerogative to unilaterally extend it up to two full years without the employee\'s consent.',
    'Yes, but absolutely only upon the issuance of a formal written order directly from the DOLE Secretary.'
  ],
  'b99': [
    'Yes, absolutely all teachers in the Philippines must legally receive exactly double pay on all regular national holidays.',
    'Yes, but strictly only for the two major holidays: Christmas Day and New Year’s Day.',
    'No, because absolutely all private school teachers are legally classified as exempt managerial employees.'
  ],
  'b100': [
    'Optional at exactly fifty (50), Compulsory at exactly sixty (60).',
    'Optional at exactly fifty-five (55), Compulsory at exactly seventy (70).',
    'Optional at exactly sixty-five (65), Compulsory at exactly seventy-five (75).'
  ],
  'b101': [
    'A minimum of exactly 15 days of basic salary for every single year of continuous service.',
    'A minimum of exactly 30 days of basic salary for every single year of continuous service.',
    'A fixed flat lump sum of exactly PHP 100,000 regardless of the employee\'s total years of service.'
  ],
  'b102': [
    'They are explicitly considered regular, tenured employees of the foreign international vessel owner.',
    'They are legally considered probationary employees for the entire duration of their first 5 years of service.',
    'They are officially considered government employees strictly managed and paid by the POEA.'
  ],
  'b103': [
    'It absolutely must be formally approved by a strict 2/3 majority vote of the recognized employee labor union.',
    'It can legally only be exercised directly by the CEO and absolutely cannot be delegated to the HR department.',
    'It explicitly must be formally published in a national newspaper of general circulation before legally taking effect.'
  ],
  'a104': [
    'Behavioral interviews strictly focus on hard technical skills, while situational interviews strictly focus on soft personality traits.',
    'Behavioral interviews are exclusively conducted by HR staff, while situational interviews are exclusively conducted by the CEO.',
    'There is absolutely no distinction; the two terms are completely synonymous and used interchangeably in all HR literature.'
  ],
  'a105': [
    'A complex financial mathematical model utilized by CFOs to calculate the exact return on investment of a training program.',
    'A highly strict biological assessment matrix used to determine an employee\'s absolute physical fitness for a hazardous job.',
    'A strict legal framework dictating the exact mandatory minimum hours of training required per employee per calendar year.'
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
console.log('Updated ' + Object.keys(updates).length + ' questions for Batches 8 to 11 with harder distractors.');
