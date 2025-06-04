export class Grade {
  assignmentID: number;
  studentID: number;
  score: number;
  feedback: string;
    grade: any;

  constructor(assignmentID: number, studentID: number, score: number, feedback: string) {
    this.assignmentID = assignmentID;
    this.studentID = studentID;
    this.score = score;
    this.feedback = feedback;
  }
  getLetterGrade(): string {
    if (this.score >= 90) return 'A';
    if (this.score >= 80) return 'B';
    if (this.score >= 70) return 'C';
    if (this.score >= 60) return 'D';
    return 'F';
  }
  // Optional: method to display the grade details
  showGrade(): void {
    console.log(`Assignment ID: ${this.assignmentID}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Score: ${this.score}`);
    console.log(`Feedback: ${this.feedback}`);
  }
}
