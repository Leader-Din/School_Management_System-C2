import { Classroom } from "./Classroom";

export class GoogleClassroom {
    private classrooms: Classroom[];

    constructor() {
        this.classrooms = [];
    }

    createClassroom(name: string): void {
        const newClassroom = new Classroom(name);
        this.classrooms.push(newClassroom);
    }

    getAllClassrooms(): Classroom[] {
        return this.classrooms;
    }
}