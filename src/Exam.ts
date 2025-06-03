// Exam.ts
import { Room } from "./Room";
import { Subject } from "./Subject";

export class Exam {
  constructor(
    public subjects: Subject[],
    public title: string,
    public date: Date,
    public room: Room
  ) {}
}