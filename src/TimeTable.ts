import type { Exam } from "./Exam";

export class TimeTable {
    constructor (
        private time : Date, private room : string, 
        private subject : string, private examShedules : Exam[]
    ) {}

    public  addExamSchedule(examSchedules: Exam): void {
        this.examShedules.push(examSchedules);
    }
}