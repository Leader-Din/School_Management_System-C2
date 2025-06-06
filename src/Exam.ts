// Exam.ts

import { Subject } from "./Subject";
import { Room } from "./Room";
export class Exam {
  constructor(
    public subjects: Subject[],
    public title: string,
    public date: Date,
    public room: Room
  ) {}

  public addExamSchedule(examSchedules: Exam[]): void {
    examSchedules.push(this);
  }
}