import type { TimeTable } from "./TimeTable";
import { User } from "./User";
import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { StudyMaterial } from "./StudyMaterial";

export class Student extends User {
    private assignments: Assignment[] = [];
    private timetable?: TimeTable;         
    private classrooms: Classroom[] = [];   

    constructor(
        userId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        phone: string
    ) {
        super(userId, firstName, lastName, email, password, phone);
    }

    // Optionally add setters for timetable and classrooms
    public setTimetable(timetable: TimeTable): void {
        this.timetable = timetable;
    }

    public viewTimetable(): TimeTable | undefined {
        return this.timetable;
    }

    public viewExamSchedules(): TimeTable | undefined {
        return this.timetable;
    }

    public viewStudyMaterial(): Classroom[] {
        return this.classrooms;
    }

    public viewAssignment(): Classroom[] {
        return this.classrooms;
    }

    public viewAssignmentGrade(): Classroom[] {
        return this.classrooms;
    }

    public submitAssignment(assignment: Assignment, classroom: Classroom): void {
        const assignments = classroom.getAssignments();
        const exists = assignments.find((a) => a.id === assignment.id);

        if (exists) {
            console.log(`${this.getFullName()} submitted assignment "${assignment.title}" to classroom "${classroom.getName()}".`);
        } else {
            console.log(`Assignment "${assignment.title}" not found in classroom "${classroom.getName()}".`);
        }
    }

    public downloadMaterial(studyMaterial: StudyMaterial, classroom: Classroom): void {
        try {
            const material = classroom.downloadStudyMaterial(studyMaterial);
            console.log(`${this.getFullName()} downloaded "${material.title}" from classroom "${classroom.getName()}".`);
        } catch (error) {
            console.log(`${this.getFullName()} failed to download: ${error}`);
        }
    }

}
