export interface StudyModule {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown string
}

export const modulesData: StudyModule[] = [
  {
    id: "labor-standards",
    title: "1. Labor Standards & Working Conditions",
    description: "An exhaustive deep dive into Wages, Working Hours, Overtime computations, Holiday Pay, and Statutory Leaves.",
    content: `
## Labor Standards (Book III, Labor Code)

The Labor Code of the Philippines establishes the minimum standards for employment. It is founded on the Constitutional mandate to protect labor, promote full employment, and ensure equal work opportunities.

### 1. Working Hours & Rest Periods
**Normal Hours of Work (Article 83):**
The normal hours of work of any employee shall not exceed eight (8) hours a day. 
- *Exceptions:* Health personnel in cities and municipalities with a population of at least one million (1,000,000) or in hospitals with a bed capacity of at least one hundred (100) shall hold regular office hours for eight (8) hours a day, for five (5) days a week, exclusive of time for meals. They may be allowed to work for six (6) days or forty-eight (48) hours, but the 6th day must be paid with an additional 30% of their regular wage.
- *Exempted Employees:* Government employees, managerial employees, field personnel, members of the family of the employer who are dependent on him for support, domestic helpers, persons in the personal service of another, and workers paid by results (pakyaw/piece-rate).

**Meal Periods (Article 85):**
Subject to such regulations as the Secretary of Labor and Employment may prescribe, it is the duty of every employer to give his employees not less than sixty (60) minutes (1 hour) time-off for their regular meals.
- *Compensability:* A 60-minute meal break is **non-compensable** (unpaid). However, an employer may shorten the meal break to not less than twenty (20) minutes provided that such shortened meal period is considered **compensable** hours worked.
- *Rest Periods:* Short rest periods or coffee breaks of 5 to 20 minutes duration are considered compensable working time.

**Weekly Rest Day (Article 91):**
It shall be the duty of every employer, whether operating for profit or not, to provide each of his employees a rest period of not less than twenty-four (24) consecutive hours after every six (6) consecutive normal work days.

### 2. Premium and Overtime Pay Computations
**Overtime Pay (Article 87):**
Work performed beyond eight (8) hours a day is overtime work.
- *Ordinary Working Day:* Plus 25% of the basic hourly rate. (Rate x 1.25)
- *Scheduled Rest Day or Special Non-Working Holiday:* Plus 30% of the premium rate. (First 8 hours is already at 130%. OT is computed as: Hourly Rate x 1.30 x 1.30).

**Night Shift Differential (Article 86):**
Every employee shall be paid a night shift differential of not less than ten percent (10%) of his regular wage for each hour of work performed between **10:00 PM and 6:00 AM**.

**Holiday Pay (Article 94):**
- *Regular Holidays:* (e.g., New Year's Day, Labor Day, Independence Day, Christmas).
  - Unworked: The employee receives 100% of their daily wage. (Requirement: The employee must have been present or on leave with pay on the workday immediately preceding the holiday).
  - Worked (First 8 hours): Employee receives 200% of their daily wage.
  - Worked (Overtime): Hourly Rate x 2.0 x 1.30.
  - Worked on a Rest Day which falls on a Regular Holiday: First 8 hours is 260% of the daily wage (200% + 30% of 200%).
- *Special Non-Working Holidays:* (e.g., Ninoy Aquino Day, All Saints' Day).
  - Unworked: "No work, no pay" principle applies, unless there is a favorable company policy.
  - Worked (First 8 hours): Employee receives 130% of their daily wage.
  - Worked on a Rest Day falling on a Special Holiday: Employee receives 150% of their daily wage.

### 3. Wages & Monetary Benefits
- **Minimum Wage vs. Living Wage:** Minimum wage is the lowest wage an employer can legally pay, determined per region by the Regional Tripartite Wages and Productivity Board (RTWPB). A Living Wage is the amount theoretically needed to maintain a decent standard of living, covering food, housing, and savings.
- **Non-Diminution of Benefits (Article 100):** Nothing in the Labor Code shall be construed to eliminate or diminish supplements, or other employee benefits being enjoyed at the time of its promulgation. If a company freely gives a bonus for several years consistently, it ripens into a demandable right and cannot be unilaterally withdrawn.
- **13th Month Pay (PD 851):** All rank-and-file employees who have worked for at least one (1) month during the calendar year are entitled to 13th-month pay. It must be paid no later than December 24 of every year. It is computed as 1/12 of the total basic salary earned within the calendar year. Managerial employees are exempt from this mandate unless stated otherwise by company policy.

### 4. Statutory Leaves
- **Service Incentive Leave (SIL):** Five (5) days with pay for every employee who has rendered at least one (1) year of service. Unused SIL must be commuted to its cash equivalent at the end of the year.
- **Maternity Leave (RA 11210 - Expanded Maternity Leave Law):** 105 days with full pay for live childbirth (normal or caesarean). An additional 15 days is granted to solo parents (total 120 days). For miscarriages or emergency termination of pregnancy, 60 days with full pay. 
- **Paternity Leave (RA 8187):** Seven (7) days with full pay for all married male employees for the first four (4) deliveries or miscarriages of their legitimate spouse with whom they are cohabiting.
- **Solo Parent Leave (RA 8972):** Seven (7) days additional leave for solo parents who have rendered at least one year of service, to perform parental duties.
- **VAWC Leave (RA 9262):** Ten (10) days of paid leave for women who are victims of physical, sexual, or psychological violence by an intimate partner.
- **Gynecological Leave (RA 9710):** A special leave benefit of up to two (2) months with full pay following surgery caused by gynecological disorders, provided she has rendered continuous aggregate employment service of at least six (6) months for the last twelve (12) months.
    `
  },
  {
    id: "post-employment",
    title: "2. Post-Employment & Dismissal",
    description: "An exhaustive look into the 6 Types of Employment, the Doctrine of Due Process, and Retirement Computations.",
    content: `
## Post-Employment (Book VI, Labor Code)

Security of tenure is a constitutionally guaranteed right. An employee cannot be dismissed without just or authorized cause and without the observance of procedural due process.

### 1. Types of Employment
The primary determinant of employment status is the nature of the work performed, not the title of the contract.
1. **Regular Employment:** An employment where the employee has been engaged to perform activities which are usually necessary or desirable in the usual business or trade of the employer. They enjoy absolute security of tenure and can only be terminated for cause.
2. **Probationary Employment:** A trial period where the employer assesses the employee's fitness for regular employment. It shall not exceed six (6) months. *Crucial Rule:* If a probationary employee is allowed to work beyond the 6-month period, they automatically become a regular employee by operation of law. Furthermore, the standards for regular employment must be made known to the employee at the time of their engagement.
3. **Project Employment:** Employment fixed for a specific project or undertaking, the completion or termination of which has been determined at the time of the engagement of the employee.
4. **Seasonal Employment:** Employment where the work or services to be performed is seasonal in nature and the employment is for the duration of the season (e.g., harvesting sugarcane).
5. **Casual Employment:** Employment where the work is merely incidental to the business of the employer, and for a definite period made known to the employee. However, any casual employee who has rendered at least one (1) year of service (whether continuous or broken) shall be considered a regular employee with respect to the activity in which they are employed.
6. **Fixed-Term Employment:** Recognized by the Supreme Court (Brent School vs. Zamora) provided that: (a) The fixed period was knowingly and voluntarily agreed upon by the parties without any force, duress, or improper pressure; and (b) It appears that the employer and employee dealt with each other on more or less equal terms.

### 2. Termination by Employer (Causes)
To lawfully dismiss an employee, two requisites must concur: (1) Substantive Due Process (a valid cause), and (2) Procedural Due Process (the proper procedure).

**Just Causes (Article 297) - Based on Employee's Fault (NO Separation Pay):**
1. **Serious Misconduct:** Misconduct is improper or wrong conduct. To be a just cause, it must be serious and must be in connection with the employee's work (e.g., punching a coworker on the production floor).
2. **Willful Disobedience (Insubordination):** The employee refuses to obey an order. Requisites: The order must be reasonable, lawful, made known to the employee, and must pertain to the duties which they have been engaged to discharge.
3. **Gross and Habitual Neglect of Duties:** Neglect must be both gross (absence of even slight care) and habitual (repeated). Example: AWOL or chronic tardiness. A single mistake is generally not enough.
4. **Fraud or Willful Breach of Trust:** Usually applies to employees holding positions of trust and confidence (e.g., managers, cashiers, auditors). The loss of trust must be based on willful breach and not mere suspicion.
5. **Commission of a Crime:** Commission of a crime or offense by the employee against the person of his employer or any immediate member of his family or his duly authorized representative.

**Authorized Causes (Article 298/299) - Based on Business/Health Needs (WITH Separation Pay):**
1. **Installation of Labor-Saving Devices:** (e.g., replacing manual assembly line workers with robotic arms). Separation Pay: One (1) month pay per year of service (1MP/YS).
2. **Redundancy:** When the services of an employee are in excess of what is reasonably demanded by the actual requirements of the enterprise. Separation Pay: 1MP/YS.
3. **Retrenchment:** Downsizing done to prevent serious, impending, and actual business losses. The losses must be proven with financial statements. Separation Pay: One-half (1/2) month pay per year of service (1/2MP/YS).
4. **Closure or Cessation of Business:** Stopping operations. Separation Pay: 1/2MP/YS. *Exception:* If the closure is due to serious business losses, NO separation pay is required.
5. **Disease:** An employee may be terminated if they suffer from a disease and their continued employment is prohibited by law or is prejudicial to their health or the health of their co-employees. *Requirement:* A certification from a competent public health authority that the disease cannot be cured within six (6) months even with proper medical treatment. Separation Pay: 1/2MP/YS.

### 3. Procedural Due Process
- **For Just Causes (The Twin-Notice Rule):**
  1. *Notice to Explain (First Notice):* A written notice specifying the ground/s for termination and giving to said employee ample opportunity to explain their side (at least 5 calendar days).
  2. *Administrative Hearing / Conference:* An opportunity for the employee to answer the charges against them, present evidence, and rebut evidence presented against them, with the assistance of counsel if desired.
  3. *Notice of Termination (Second Notice):* A written notice of termination indicating that upon due consideration of all the circumstances, grounds have been established to justify termination.
- **For Authorized Causes (The 30-Day Rule):**
  The employer must serve a written notice to BOTH the employee and the Regional Office of the Department of Labor and Employment (DOLE) at least thirty (30) days before the effectivity of the termination.

### 4. Retirement (Article 302)
- **Optional Retirement:** In the absence of a retirement plan or agreement providing for retirement benefits, an employee may retire upon reaching the age of sixty (60) years or more, but not beyond sixty-five (65) years, provided they have served at least five (5) years in the establishment.
- **Compulsory Retirement:** Sixty-five (65) years of age.
- **Retirement Pay Computation:** Minimum of 22.5 days salary for every year of service. This is composed of: 15 days salary + 5 days Service Incentive Leave + 2.5 days (1/12 of 13th month pay).
    `
  },
  {
    id: "labor-relations",
    title: "3. Labor Relations",
    description: "In-depth overview of the Right to Self-Organization, Unfair Labor Practices, CBA processes, and Strikes.",
    content: `
## Labor Relations (Book V, Labor Code)

Labor relations law seeks to balance the rights of labor (to organize, bargain collectively, and strike) with the rights of management (to conduct business, earn a profit, and manage operations).

### 1. Right to Self-Organization
The right of workers to form, join, or assist labor organizations for the purpose of collective bargaining and negotiation.
- **Who can join:** All persons employed in commercial, industrial, and agricultural enterprises.
- **Who cannot join:** Managerial employees, confidential employees (those with access to confidential labor relations information of the employer, like HR Directors), and members of the Armed Forces/Police.
- **Supervisory Employees:** Cannot join the rank-and-file union to prevent conflicts of interest. However, supervisors are allowed to form, join, or assist their own separate supervisory union.

### 2. Unfair Labor Practices (ULP)
ULPs are acts committed either by the employer or the labor organization that violate the constitutional right of workers and employees to self-organization.
- **Employer ULPs (Article 259):**
  - *Yellow Dog Contract:* Requiring an employee NOT to join a union as a condition of employment.
  - *Union Busting:* Dismissing or discriminating against union officers/members to destroy the union.
  - *Company Union:* Initiating, dominating, assisting, or otherwise interfering with the formation or administration of any labor organization.
  - *Contracting Out:* Contracting out services or functions being performed by union members when such will interfere with, restrain, or coerce employees in the exercise of their rights to self-organization.
- **Union ULPs (Article 260):**
  - Coercing employees in the exercise of their right to self-organization.
  - *Featherbedding:* Causing or attempting to cause an employer to pay or deliver money or other things of value in the nature of an exaction, for services which are not performed or not to be performed.

### 3. Collective Bargaining Agreement (CBA)
A CBA is a contract executed upon request of either the employer or the exclusive bargaining representative incorporating the agreement reached after negotiations with respect to wages, hours of work, and all other terms and conditions of employment.
- **Exclusive Bargaining Agent (EBA):** The labor union recognized or certified as the sole and exclusive bargaining representative of all the employees in a bargaining unit.
- **Lifetime of a CBA:** The representation aspect of the CBA (who the EBA is) lasts for five (5) years. The economic provisions (wages, benefits, leaves) must be renegotiated no later than three (3) years after its execution.
- **The Freedom Period:** The last sixty (60) days of the 5-year lifetime of a CBA. This is the ONLY time when another rival union can file a petition for a Certification Election to challenge the incumbent union and attempt to become the new EBA.

### 4. Strikes and Lockouts
- **Strike:** Any temporary stoppage of work by the concerted action of employees as a result of an industrial or labor dispute.
- **Lockout:** The temporary refusal of an employer to furnish work as a result of an industrial or labor dispute.
- **Valid Grounds for Strike:** (1) CBA Deadlock in collective bargaining, or (2) Unfair Labor Practice (ULP). *Note: Wage distortion or inter-union disputes are NOT valid grounds for a strike.*
- **Procedural Requirements for a Valid Strike:**
  1. *Notice of Strike:* Must be filed with the National Conciliation and Mediation Board (NCMB). 30 days before the strike for CBA Deadlock; 15 days before the strike for ULP. Exception: In cases of ULP involving the dismissal of duly elected union officers which constitutes union busting, the 15-day cooling-off period is not required (0 days).
  2. *Cooling-Off Period:* The 30 or 15 days mentioned above. This gives the NCMB time to mediate.
  3. *Strike Vote:* A majority vote of the total union membership obtained by secret ballot approving the strike.
  4. *7-Day Strike Ban:* The results of the strike vote must be submitted to the NCMB at least seven (7) days before the intended strike.

### 5. Assumption of Jurisdiction (AJ)
When, in his opinion, there exists a labor dispute causing or likely to cause a strike or lockout in an industry indispensable to the national interest (e.g., hospitals, airlines, public utilities), the DOLE Secretary may assume jurisdiction over the dispute.
- **Effect of AJ:** It automatically enjoins (stops) the intended or impending strike. If a strike has already taken place at the time of assumption, all striking workers shall immediately return to work (Return to Work Order).

### 6. Grievance Machinery and Voluntary Arbitration
- **Grievance Machinery:** An internal mechanism established in the CBA for the adjustment and resolution of grievances arising from the interpretation or implementation of the CBA and company personnel policies.
- **Voluntary Arbitration:** If a grievance remains unresolved after exhausting the steps in the grievance machinery, it is automatically referred to a Voluntary Arbitrator (or panel). The decision of the Voluntary Arbitrator is generally final, binding, and executory.
    `
  },
  {
    id: "recruitment-selection",
    title: "4. Recruitment, Selection, & Placement",
    description: "Deep methodologies in Job Analysis, Applicant Tracking Systems, Behavioral Interviewing, and Predictive Validity.",
    content: `
## Recruitment and Selection

### 1. Job Analysis: The Bedrock of HR
Job analysis is the systematic process of collecting, analyzing, and synthesizing information about the content, context, and human requirements of jobs. It is the foundation upon which almost all HR practices (hiring, compensation, training, performance management) are built.
- **Job Description (The WHAT):** A written statement of the Tasks, Duties, and Responsibilities (TDRs) of a job. It describes the physical conditions, reporting structure, and tools used.
- **Job Specification (The WHO):** A written statement of the Knowledge, Skills, Abilities, and Other characteristics (KSAOs) an individual must possess to perform the job successfully. (e.g., "Must possess a CPA license" or "Must have 5 years of Python experience").
- **Methods of Data Collection:**
  - *Interviews:* Sitting with the incumbent worker. (Pros: detailed. Cons: workers may exaggerate their duties).
  - *Observation:* Watching the worker perform. (Pros: objective. Cons: not useful for mental jobs like programming).
  - *Questionnaires:* Standardized forms like the Position Analysis Questionnaire (PAQ).
- **O*NET (Occupational Information Network):** A highly detailed, free online database developed by the US Department of Labor containing hundreds of occupational definitions to help HR professionals draft job descriptions.

### 2. Sourcing Strategies
Sourcing is the proactive identification and engagement of potential candidates, whereas recruiting is the execution of the hiring process once candidates are in the funnel.
- **Active Candidates:** People actively looking for jobs (browsing JobStreet, LinkedIn Jobs). Usually easier to engage but may be of mixed quality.
- **Passive Candidates:** People currently employed and not looking for a new job. They are often high performers. Engaging them requires headhunting, personalized outreach, and compelling employer branding.
- **Internal vs. External Sourcing:**
  - *Internal (Promotions/Transfers):* Pros: Cheaper, faster, boosts morale, lower risk of culture clash. Cons: Can lead to "inbreeding" (lack of fresh ideas) or the Peter Principle (promoting someone until they reach a role they are incompetent at).
  - *External:* Pros: Injects new ideas, prevents stagnation, necessary for hyper-growth. Cons: Expensive, higher failure rate, damages morale if internal staff feel passed over.

### 3. Advanced Selection Methodologies
The goal of selection is to maximize *predictive validity* (how accurately the test predicts future job performance).
- **Cognitive Ability Tests (GMA - General Mental Ability):** Measures reasoning, math, and verbal comprehension. Research shows this is the single best predictor of job performance across almost all job categories, from entry-level to CEO.
- **Work Sample Tests:** Asking the candidate to perform a miniature replica of the job (e.g., asking a marketing applicant to design a mock campaign, or a coder to fix a bug). High predictive validity and high face validity (applicants feel it is fair).
- **Personality Assessments:** The "Big Five" (OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) is the only scientifically validated model. *Conscientiousness* (being organized, reliable, hard-working) is the strongest personality predictor of job success. Avoid pseudoscientific tests like Myers-Briggs (MBTI) for hiring.

### 4. Interviewing Frameworks
- **Unstructured Interviews:** Free-flowing conversations. Highly prone to bias and very poor at predicting job performance.
- **Structured Interviews:** Every candidate is asked the exact same questions in the exact same order, and answers are scored on a standardized rubric. Highly valid and legally defensible.
- **Behavioral Interviewing:** Based on the premise that "past behavior is the best predictor of future behavior." Candidates are asked to describe specific past experiences using the **STAR Method** (Situation, Task, Action, Result). e.g., "Tell me about a time you dealt with a difficult client."
- **Situational Interviewing:** Asking candidates how they *would* handle a hypothetical future scenario. e.g., "If a client yelled at you tomorrow, what would you do?"

### 5. Hiring Biases & Technology
- **Similar-to-Me Bias (Affinity Bias):** Unconsciously favoring candidates who share your alma mater, hobbies, or background.
- **Halo Effect:** Letting one strong positive trait (e.g., the candidate is very attractive or well-dressed) cast a "halo" that inflates your rating of their actual skills.
- **Horn Effect:** The opposite of Halo; one negative trait ruins the entire evaluation.
- **Blind Hiring:** Anonymizing resumes (removing names, photos, gender, university names) to force recruiters to evaluate purely on skills and experience, dramatically reducing bias.
- **Applicant Tracking System (ATS):** Software used by massive corporations to manage the recruitment lifecycle. ATS systems use algorithms (parsing) to scan resumes for specific keywords before a human recruiter ever sees them.
    `
  },
  {
    id: "performance-management",
    title: "5. Performance Management",
    description: "Extensive breakdown of Appraisal Methods (MBO, BARS, 360-Degree), Rater Errors, and the mechanics of a PIP.",
    content: `
## Performance Management

Performance management is not just a once-a-year review; it is the continuous process of identifying, measuring, and developing the performance of individuals and teams, and aligning that performance with the strategic goals of the organization.

### 1. Performance Appraisal Methods
The tools used to measure an employee's output and behaviors.
- **Graphic Rating Scale:** The most widely used but most flawed method. A manager rates an employee on a numerical scale (e.g., 1 to 5) across abstract traits like "Teamwork," "Punctuality," and "Quality of Work." Prone to massive subjectivity.
- **BARS (Behaviorally Anchored Rating Scales):** An evolution of the graphic rating scale. Instead of just numbers, every single rating point is anchored by a highly specific behavioral example (a "critical incident"). For example, instead of a generic "3 out of 5 for Customer Service," the anchor might read: "Resolves customer complaints within 24 hours without escalating to a manager." Highly accurate, but incredibly time-consuming to develop for every job role.
- **MBO (Management by Objectives):** Developed by Peter Drucker. The manager and the employee sit down at the start of the year and mutually agree on specific, measurable, achievable, relevant, and time-bound (SMART) goals. At the end of the year, performance is judged purely on whether those objective results were achieved. Excellent for sales or management roles.
- **360-Degree Feedback:** Gathering anonymous performance feedback from all directions: the employee's direct supervisor, their peers/coworkers, their subordinates (if they are a manager), and sometimes external clients. 
  - *Crucial Rule:* 360-Degree feedback should primarily be used for **developmental purposes** (coaching, identifying blind spots), NOT for administrative purposes (determining salary or firing), as peers may collude to rate each other highly, or sabotage rivals.
- **Forced Distribution (Bell Curve / Stack Ranking):** A system popularized by GE's Jack Welch. Managers are forced to distribute their employees into fixed percentages (e.g., 20% Top Performers, 70% Average, 10% Bottom Performers who are then fired). 
  - *Pros:* Eradicates leniency bias (managers can't give everyone a 5).
  - *Cons:* Destroys teamwork, creates a hyper-competitive, toxic cutthroat culture, and penalizes high-performing teams where everyone is genuinely a top performer.

### 2. Common Rater Errors (Psychological Biases)
Managers are human and succumb to cognitive biases when evaluating others. HR must train managers to recognize and avoid these:
- **Halo Effect:** Rating an employee high across all performance dimensions simply because they excel in one single dimension (e.g., they are a brilliant public speaker, so the manager assumes they must also be great at administrative paperwork).
- **Horn Effect:** Rating an employee poorly in all areas because of one negative trait (e.g., the employee dresses poorly, so the manager assumes their coding skills are also sloppy).
- **Central Tendency Error:** The "play it safe" bias. A manager rates almost everyone as "Average" or a "3 out of 5" to avoid having to justify extreme high scores to HR, or to avoid confrontational conversations with poor performers.
- **Strictness Error:** The manager holds unrealistically high standards and refuses to give high scores, operating under the philosophy that "nobody is perfect."
- **Leniency Error:** The manager gives everyone exceptionally high scores, often because they want to be liked by their team or want to make their department look good to upper management.
- **Contrast Error:** Evaluating an employee by comparing them to the previous person who was evaluated, rather than comparing them to an objective standard. (e.g., An average employee looks like a superstar if they are evaluated immediately after a completely incompetent employee).
- **Recency Effect:** The manager evaluates the employee's performance based ONLY on what happened in the last two weeks before the appraisal, completely forgetting the employee's performance over the previous 11 months.
- **Primacy Effect:** The opposite of Recency. The manager's rating is heavily influenced by their very first impression of the employee during their first month on the job.
- **Spillover Effect:** Allowing an employee's excellent performance rating from the *previous* year to unfairly inflate their rating for the *current* year, even if their current performance has declined.

### 3. Managing Poor Performance
- **Performance Improvement Plan (PIP):** A formal, written document provided by HR and management to a struggling employee. It outlines:
  1. The specific areas where the employee is failing.
  2. The expected goals and standards they need to meet.
  3. Support/training the company will provide.
  4. A strict timeline for improvement (usually 30, 60, or 90 days).
  5. The consequences if standards are not met (termination).
A PIP protects the company from illegal dismissal lawsuits by providing documented evidence of due process and an opportunity to improve.
    `
  },
  {
    id: "compensation-benefits",
    title: "6. Compensation & Benefits",
    description: "Detailed mechanics of Job Evaluation, Internal vs External Equity, Market Pricing, and Pay Structures.",
    content: `
## Compensation and Benefits

Compensation involves the design and implementation of total rewards systems that attract, retain, and motivate employees while keeping the organization financially competitive.

### 1. Job Evaluation (Achieving Internal Equity)
Job evaluation is the systematic process of determining the relative worth or value of jobs *within* an organization. It answers the question: "Why does the IT Director get paid more than the Marketing Manager?" It ensures **Internal Equity** (fairness within the company).
- **Ranking Method:** The simplest and oldest method. Jobs are simply ranked from highest value to lowest value by a committee. Useful only for very small companies.
- **Job Classification Method:** Creating predefined grades or classes (e.g., Grade 1: Clerical, Grade 2: Technical) and slotting jobs into them. Used heavily by government civil service systems.
- **Point-Factor Method:** The most widely used, highly objective method. Jobs are broken down into "Compensable Factors" (e.g., Skill required, Effort required, Responsibility/Decision-making impact, and Working Conditions). Each factor is assigned points. The total points determine the job's pay grade.

### 2. Market Pricing (Achieving External Equity)
Once you know the internal hierarchy, you must look outward. **External Equity** ensures you are paying competitively compared to other companies in your industry, preventing talent from leaving for better offers.
- **Salary Surveys:** HR purchases aggregated salary data from consulting firms to see what competitors are paying for benchmark jobs.
- **Compensation Strategies:**
  - *Lead Policy:* Paying 75th percentile or higher above the market average. Used by tech giants (Google, Apple) to monopolize the absolute best talent.
  - *Lag Policy:* Paying below the market average. Startups often do this, compensating for the low base pay with massive stock options, equity, or incredible company culture.
  - *Match Policy (Market Rate):* Paying exactly at the 50th percentile (the median). The most common strategy.

### 3. Pay Structures & Anomalies
Once pay ranges (Minimum, Midpoint, Maximum) are established for a pay grade, anomalies can occur:
- **Red Circle Rates:** When an employee is paid ABOVE the maximum limit of their pay grade. (Often happens if an employee has been in the same job for 20 years getting annual raises but never promoted). *Solution:* Freeze their base pay and give them one-time lump-sum bonuses until the market range inflates and catches up to their salary.
- **Green Circle Rates:** When an employee is paid BELOW the minimum of their pay grade. (Often happens if someone is promoted very rapidly). *Solution:* HR must aggressively accelerate their salary increases to bring them into the proper pay band.
- **Wage Compression (Salary Compression):** A highly destructive phenomenon where new hires are brought in at salaries almost equal to, or even higher than, highly tenured senior employees. This happens when the external market rate for a skill (e.g., software engineering) skyrockets faster than the company's internal annual raises (typically 3-5%). It causes massive resentment and turnover among senior staff.
- **Broadbanding:** A modern compensation structure that collapses many narrow, rigid salary grades into a few, massive "bands" (e.g., combining 15 grades into just 3 bands). 
  - *Advantage:* It gives managers massive flexibility to give significant raises to top performers without needing to give them a fake promotion or new job title just to bump them to a higher pay grade.

### 4. Total Rewards Concept
- **Total Rewards Statement:** A personalized document given to employees annually showing the true, complete financial value of their employment package. It includes Base Pay + Overtime + Allowances + HMO Premiums paid by employer + Employer contributions to SSS/PhilHealth/Pag-IBIG + Monetized Leaves.
- *Purpose:* Prevents employees from leaving the company for a competitor offering a slightly higher base pay but terrible benefits.
    `
  },
  {
    id: "learning-development",
    title: "7. Workplace Learning & Development",
    description: "Mastering Adult Learning (Andragogy), the ADDIE Model, ROI calculations, and Succession Planning.",
    content: `
## Learning and Development (L&D)

L&D focuses on aligning employee skills with organizational goals through continuous education, training, and strategic talent pipelines.

### 1. Adult Learning Theory (Andragogy)
Developed by Malcolm Knowles, Andragogy emphasizes that adults learn fundamentally differently than children (Pedagogy). 
Key Principles of Adult Learners:
- **Self-Concept:** Adults are self-directed and prefer autonomy over being spoon-fed information.
- **Experience:** Adults bring a vast reservoir of life and work experience into the classroom. Training should involve discussions and peer-to-peer sharing, not just lectures.
- **Readiness to Learn:** Adults learn best when the topic is immediately relevant to their current social or work role.
- **Orientation to Learning:** Adults are problem-centered, not subject-centered. They want to know *how* to fix the issue they face at work today.
- **Motivation:** Adults respond better to internal motivators (career growth, self-esteem) rather than external ones (grades).

### 2. The ADDIE Model (Instructional Design)
The global standard framework for creating effective training programs.
1. **Analyze (Needs Assessment):** The most critical step. Identifying the gap between current performance and desired performance. Is training actually the solution, or is it a systemic issue (like broken software)?
2. **Design:** Creating learning objectives, structuring the curriculum, choosing the delivery method (e-learning vs instructor-led), and designing assessments.
3. **Develop:** The actual creation of the materials—writing the script, building the PowerPoint, programming the e-learning modules, and creating workbooks.
4. **Implement:** Delivering the training to the target audience. Managing logistics, scheduling, and facilitators.
5. **Evaluate:** Measuring the effectiveness of the training against the original objectives.

### 3. Modern Training Modalities
- **On-the-Job Training (OJT):** Learning while performing the actual work. Includes Job Shadowing, Mentoring, and Coaching. Highly effective because it is immediately applicable.
- **Vestibule Training (Simulation):** Training in an environment that heavily simulates the actual workspace but is off-the-production-line (e.g., flight simulators, mock retail counters). It allows employees to practice complex or dangerous tasks without risking costly mistakes on live customers or equipment.
- **Microlearning:** Delivering content in highly focused, bite-sized chunks (3-5 minutes). Perfect for the modern attention span and allows "just-in-time" learning where an employee can watch a quick video right before performing a specific task.
- **Gamification:** Applying game-design mechanics (points, badges, leaderboards, levels) to non-game contexts (like mandatory compliance training) to significantly boost engagement and completion rates.

### 4. Evaluating Training (The Kirkpatrick Model)
Developed by Donald Kirkpatrick, this is the gold standard for measuring training effectiveness across four levels:
- **Level 1 (Reaction):** *Did they like it?* Measured via post-training surveys ("Smile Sheets"). Evaluates the trainer, venue, and material engagement.
- **Level 2 (Learning):** *Did they learn it?* Measured via pre-tests and post-tests to prove an actual increase in knowledge or skills.
- **Level 3 (Behavior):** *Are they using it?* Evaluates the *Transfer of Learning* back to the workplace. Measured 3-6 months later via supervisor observation, 360-degree feedback, or performance metrics. This is the hardest level to achieve.
- **Level 4 (Results):** *Did it impact the business?* Measuring organizational metrics like increased sales, reduced accident rates, or improved customer satisfaction scores.

### 5. Return on Investment (ROI)
The "Level 5" added by Jack Phillips. It converts Level 4 results into financial terms to prove to the C-Suite that HR is an investment, not a cost center.
- **Formula:** ROI = [(Financial Benefit from Training - Cost of Training) / Cost of Training] x 100

### 6. Talent Management
- **Succession Planning:** A proactive, long-term strategic process. It involves deliberately identifying high-potential (HiPo) employees deep within the organization and putting them through years of leadership development and stretch assignments so they are ready to take over C-suite roles in 3 to 5 years.
- **Replacement Planning:** A short-term, reactive backup plan. It is a simple chart indicating who will temporarily step into a critical role if the incumbent gets hit by a bus, quits unexpectedly, or dies tomorrow.
    `
  },
  {
    id: "risk-management",
    title: "8. Workplace Safety & Risk Management",
    description: "Comprehensive guide to Ergonomics, Hierarchy of Controls, Occupational Diseases, and Safety Audits.",
    content: `
## Occupational Safety and Health (OSH)

Workplace safety is not just a moral obligation; it is heavily regulated by law to protect human capital from injury, illness, and death.

### 1. The OSH Law (Republic Act 11058)
The law strengthening compliance with Occupational Safety and Health Standards in the Philippines.
- **Right to Refuse Unsafe Work:** Workers have the legal right to refuse work if there is an imminent danger to their health or safety, without threat of reprisal or termination from the employer.
- **Safety Officer:** All establishments, regardless of size, must have a trained Safety Officer. The required certification level (SO1, SO2, SO3) depends on the risk level (Low, Medium, High) and the total number of employees in the establishment.
- **First Aider & Medical Facilities:** Mandates the presence of certified first aiders, and depending on company size, an occupational health nurse or physician.

### 2. Ergonomics (Human Factors Engineering)
The applied science of designing the workplace, equipment, tools, and tasks to fit the physiological and anatomical capabilities of the worker, rather than forcing the worker to contort to fit the job.
- **Goal:** To prevent Musculoskeletal Disorders (MSDs), repetitive strain injuries (RSI), Carpal Tunnel Syndrome, and chronic back pain.
- **Interventions:** Providing standing desks, anti-fatigue mats, proper monitor height alignment (eye level), ergonomic chairs with lumbar support, and enforcing regular screen breaks for visual fatigue.

### 3. Safety Hazard Mitigations (Hierarchy of Controls)
When a safety officer identifies a workplace hazard, they must attempt to mitigate it using this strict hierarchy, from most effective to least effective:
1. **Elimination:** Physically remove the hazard entirely (e.g., stopping the use of a toxic chemical, or doing work at ground level instead of high elevations). *100% effective.*
2. **Substitution:** Replace the hazard with a safer alternative (e.g., switching from a toxic solvent to a water-based cleaner).
3. **Engineering Controls:** Isolate people from the hazard by redesigning the workspace (e.g., installing a ventilation/exhaust system, putting physical machine guards over spinning saw blades, soundproofing a noisy generator room).
4. **Administrative Controls:** Change the way people work to minimize exposure (e.g., rotating shifts so workers aren't exposed to loud noises for 8 hours straight, conducting safety training, putting up warning signs).
5. **PPE (Personal Protective Equipment):** Protect the worker with gear (e.g., hard hats, safety goggles, earplugs, steel-toed boots). *This is the least effective method and is considered the absolute last line of defense because it relies entirely on human compliance.*

### 4. Safety Audits vs. Accident Investigations
- **Safety Audits / Inspections:** *Proactive.* A formal, structured walk-through of the physical workspace and a review of safety protocols to identify potential hazards *before* an accident happens.
- **Accident Investigation:** *Reactive.* Conducted immediately after an incident or "near-miss" has occurred to determine the root cause (using techniques like the 5 Whys or Fishbone Diagram) to implement corrections and prevent recurrence.

### 5. Occupational Disease
A disease contracted primarily as a result of an exposure to risk factors arising from work activity (e.g., Black Lung disease for coal miners, hearing loss for factory workers, or radiation sickness for X-Ray technicians). 
- In workers' compensation claims (handled by the Employees' Compensation Commission - ECC), the burden is usually on the employee to prove a direct, reasonable causal link between their illness and the nature of their workplace environment.
    `
  }
];
