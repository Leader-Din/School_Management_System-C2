import type { Exam } from "./Exam";

export class ExamScore {
  public exam: Exam;
  public score: number;

  constructor(exam: Exam, score: number) {
    if (score < 0 || score > 100) {
      throw new Error("Score must be between 0 and 100.");
    }
    this.exam = exam;
    this.score = score;
  }

  getExam(): Exam {
    return this.exam;
  }

  getScore(): number {
    return this.score;
  }
}
