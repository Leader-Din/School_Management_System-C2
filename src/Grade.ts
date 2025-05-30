export class Grade {
  assignmentID: number;
  studentID: number;
  score: number;
  feedback: string;

  constructor(assignmentID: number, studentID: number, score: number, feedback: string) {
    this.assignmentID = assignmentID;
    this.studentID = studentID;
    this.score = score;
    this.feedback = feedback;
  }

  // Optional: method to display the grade details
  showGrade(): void {
    console.log(`Assignment ID: ${this.assignmentID}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Score: ${this.score}`);
    console.log(`Feedback: ${this.feedback}`);
  }
}
