import { Student } from "./Student";
import { SubjectResult } from "./SubjectResult";

export class StudentExamReport {
  private student: Student;
  private results: SubjectResult[];

  constructor(student: Student) {
    this.student = student;
    this.results = [];
  }

  addSubjectResult(result: SubjectResult): void {
    this.results.push(result);
  }

  getOverallAverage(): number {
    if (this.results.length === 0) {
      return 0;
    }

    let total = 0;
    for (let i = 0; i < this.results.length; i++) {
      const result = this.results[i];
      if (result) { 
        total += result.getAverageScore();
      }
    }

    return total / this.results.length;
  }

  getStudent(): Student {
    return this.student;
  }

  showFullReport(): void {
    console.log(`Student ID: ${this.student.getId?.() ?? this.student["userId"]}`);
    console.log(`Student Name: ${this.student.getFullName()}`);
    console.log("----- Subject Results -----");

    if (this.results.length === 0) {
      console.log("No subject results available.");
    } else {
      for (let i = 0; i < this.results.length; i++) {
        const result = this.results[i];
        if (result) { 
          result.showResult();
          console.log("---------------------------");
        }
      }

      console.log(`Overall Average Score: ${this.getOverallAverage().toFixed(2)}`);
    }
  }
}
