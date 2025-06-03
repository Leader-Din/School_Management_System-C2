// Grade.ts
export class Grade {
  constructor(
    public assignmentID: number,
    public studentID: number,
    public score: number,
    public feedback: string
  ) {}

  showGrade(): void {
    console.log(`Assignment ID: ${this.assignmentID}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Score: ${this.score}`);
    console.log(`Feedback: ${this.feedback}`);
  }
}