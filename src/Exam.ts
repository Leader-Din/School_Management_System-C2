import type { Room } from './Room';
import type { Subject } from './Subject';

export class Exam{
    subjects: Subject[];
    title: string;
    date: Date;
    room: Room;

    constructor(subjects: Subject[], title: string, date: Date, room: Room) {
        this.subjects = subjects;
        this.title = title;
        this.date = date;
        this.room = room;
    }
}