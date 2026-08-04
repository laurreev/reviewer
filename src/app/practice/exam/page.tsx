import Quiz from "@/components/Quiz";
import Link from "next/link";

const mockQuestions = [
  {
    id: "q1",
    text: "Under the Labor Code of the Philippines, what is the normal hours of work of any employee?",
    options: ["8 hours a day", "9 hours a day", "10 hours a day", "12 hours a day"],
    correctOptionIndex: 0
  },
  {
    id: "q2",
    text: "Which government agency is primarily responsible for the administration and enforcement of labor laws?",
    options: ["NEDA", "DOLE", "DTI", "DSWD"],
    correctOptionIndex: 1
  },
  {
    id: "q3",
    text: "How many months of service is required before an employee is entitled to 13th month pay?",
    options: ["1 month", "3 months", "6 months", "12 months"],
    correctOptionIndex: 0
  }
];

export default function ExamPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Practice Exam</h2>
        <Link href="/practice" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
          Cancel Exam
        </Link>
      </div>

      <Quiz questions={mockQuestions} moduleId="mock-exam-1" />
    </div>
  );
}
