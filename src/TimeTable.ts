// TimeTable.ts

import { Exam } from "./Exam";
export class TimeTable {
  constructor(
    private time: Date,
    private room: string,
    private subject: string,
    private examSchedules: Exam[]
  ) {}

  public addExamSchedule(exam: Exam): void {
    this.examSchedules.push(exam);
  }

  public getExamSchedules(): Exam[] {
    return [...this.examSchedules];
  }

  public getTime(): Date {
    return this.time;
  }

  public getRoom(): string {
    return this.room;
  }

  public getSubject(): string {
    return this.subject;
  }
}