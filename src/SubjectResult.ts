import { Subject } from "./Subject";
import { ExamScore } from "./ExamScore";

export class SubjectResult {
  private subject: Subject;
  private scores: ExamScore[];

  constructor(subject: Subject) {
    this.subject = subject;
    this.scores = [];
  }

  addExamScore(score: ExamScore): void {
    this.scores.push(score);
  }

  getTotalScore(): number {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      const score = this.scores[i];
      if (score) {
        total += score.score;
      }
    }
    return total;
  }

  getAverageScore(): number {
    if (this.scores.length === 0) {
      return 0;
    }
    return this.getTotalScore() / this.scores.length;
  }

  getSubject(): Subject {
    return this.subject;
  }

  showResult(): void {
    console.log(`Subject: ${this.subject.name}`);
    if (this.scores.length === 0) {
      console.log("No exam scores available.");
      return;
    }

    console.log("Scores:");
    for (let i = 0; i < this.scores.length; i++) {
      const score = this.scores[i];
      if (score) { 
        const exam = score.exam;
        console.log(`  - ${exam.title}: ${score.score}`);
      }
    }

    console.log(`Total Score: ${this.getTotalScore()}`);
    console.log(`Average Score: ${this.getAverageScore().toFixed(2)}`);
  }
}
