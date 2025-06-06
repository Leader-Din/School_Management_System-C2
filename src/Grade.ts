// Grade.ts
export class Grade {
  constructor(
    public assignmentID: number,
    public studentID: number,
    public score: number,
    public feedback: string
  ) {}

  public getLetterGrade(): string {
    if (this.score >= 90) return "A";
    if (this.score >= 80) return "B";
    if (this.score >= 70) return "C";
    if (this.score >= 60) return "D";
    return "F";
  }

  showGrade(): void {
    console.log(`Assignment ID: ${this.assignmentID}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Score: ${this.score}`);
    console.log(`Feedback: ${this.feedback}`);
  }
}