import type { Room } from "./Room";
import type { Subject } from "./Subject";
import type { Exam } from "./Exam";

export class TimeTable {
    private time: Date;
    private rooms: Room[];
    private subject: Subject;
    private examSchedules: Exam[] = [];

    constructor(time: Date, rooms: Room[], subject: Subject) {
        this.time = time;
        this.rooms = rooms;
        this.subject = subject;
    }

    public addExamSchedule(examSchedule: Exam): void {
        this.examSchedules.push(examSchedule);
    }

    // Optional getters
    public getTime(): Date {
        return this.time;
    }

    public getRooms(): Room[] {
        return this.rooms;
    }

    public getSubject(): Subject {
        return this.subject;
    }

    public getExamSchedules(): Exam[] {
        return this.examSchedules;
    }
}
