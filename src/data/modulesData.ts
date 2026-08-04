export interface StudyModule {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown or HTML string
}

export const modulesData: StudyModule[] = [
  {
    id: "labor-laws",
    title: "1. Labor and HR-Related Laws",
    description: "Comprehensive review of the Philippine Labor Code, statutory benefits, and employer-employee relationships.",
    content: `
## The Philippine Labor Code (PD 442)

The Labor Code of the Philippines is the legal code governing employment practices and labor relations in the Philippines. It was enacted on May 1, 1974.

### Basic Rights of Employees
1. **Security of Tenure:** An employee cannot be dismissed without just or authorized cause and without due process.
2. **Working Hours:** Normal hours of work shall not exceed eight (8) hours a day.
3. **Weekly Rest Day:** An employee is entitled to a 24-hour consecutive rest period after every 6 consecutive normal workdays.

### Probationary Employment
Probationary employment shall not exceed six (6) months from the date the employee started working. If allowed to work beyond 6 months, the employee automatically becomes regular.

### Holiday Pay
Every worker should be paid their regular daily wage during regular holidays, except in retail and service establishments regularly employing less than ten (10) workers. If they work on a holiday, they earn 200% of their daily wage.

---

*(Note: Add more content here as you build out the module)*
    `
  },
  {
    id: "recruitment",
    title: "2. Recruitment and Selection",
    description: "Best practices for sourcing, screening, and selecting the right candidates for the job.",
    content: `
## Job Analysis and Design

**Job Analysis** is the systematic process of determining the skills, duties, and knowledge required for performing jobs in an organization. 

- **Job Description:** A document that details the tasks, duties, and responsibilities of the job.
- **Job Specification:** A document that lists the knowledge, skills, abilities, and other characteristics (KSAOs) an individual needs to perform a job satisfactorily.

## The Selection Process
1. **Screening Applications and Resumes:** Initial filtering of unqualified candidates.
2. **Testing and Assessments:** Cognitive, personality, and physical ability tests.
3. **Interviews:** Structured vs. Unstructured interviews. Structured interviews are generally more reliable and valid.
4. **Background Checks:** Verifying the candidate's history.
5. **Selection Decision:** Making the final offer.

---

*(Note: Add more content here as you build out the module)*
    `
  },
  {
    id: "performance",
    title: "3. Performance Management",
    description: "Strategies for measuring and improving employee performance and managing compensation.",
    content: `
## Performance Appraisals

A performance appraisal is a regular review of an employee's job performance and overall contribution to a company.

### Common Biases in Appraisals
- **Halo Effect:** Rating an employee highly across all traits based on one positive trait.
- **Horns Effect:** Rating an employee poorly across all traits based on one negative trait.
- **Central Tendency:** Rating all employees as "average".
- **Leniency/Strictness Bias:** Consistently rating all employees too high or too low.

### Compensation and Benefits
**Compensation** includes all forms of financial returns and tangible services and benefits employees receive as part of an employment relationship.
- **Direct Compensation:** Base pay, merit pay, incentive pay, bonuses.
- **Indirect Compensation:** Health insurance, retirement plans, paid time off.

---

*(Note: Add more content here as you build out the module)*
    `
  }
];
