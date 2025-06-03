import type { Exam } from "./Exam";

export class TimeTable {
    getTime(): string | number | Date {
        throw new Error("Method not implemented.");
    }
    constructor(
        private time: Date,
        private room: string,
        private subject: string,
        private examSchedules: Exam[]
    ) {}

    public addExamSchedule(exam: Exam): void {
        this.examSchedules.push(exam);
    }
}
