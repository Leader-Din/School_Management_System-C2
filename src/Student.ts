import type { GoogleClassroom } from "./GoogleClassroom";
import type { TimeTable } from "./TimeTable";
import { User } from "./User";
import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { StudyMaterial } from "./StudyMaterial";

export class Student extends User{
	alertMessageBeforeClass5Minute(): any {
		throw new Error("Method not implemented.");
	}
    constructor (
        userId : number, firstName : string, 
        lastName : string, email : string, 
        password : string, phone : string, 
        private assignments : string[], 
        private timetable : TimeTable,
        private googleClassroom : GoogleClassroom
    ) {
        super(userId, firstName, lastName, email, password, phone);
    }

    public viewTimetable() : TimeTable {
        return this.timetable;
    }

    public viewExamSchedules() : TimeTable {
        return this.timetable;
    }

    public viewStudyMaterial() : GoogleClassroom {
        return this.googleClassroom;
    }

    public viewAssignment() : GoogleClassroom {
        return this.googleClassroom;
    }

    public viewAssignmentGrade() : GoogleClassroom {
        return this.googleClassroom;
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
