import type { Department } from "./Department";
import { User } from "./User";
import { Classroom } from "./Classroom";
import { StudyMaterial } from "./StudyMaterial";
import { Assignment } from "./Assignment";
import { Grade } from "./Grade";

export class Teacher extends User {
    private studyMaterials: StudyMaterial[] = [];
    private assignments: Assignment[] = [];
    private grades: Grade[] = [];

    constructor(
        userId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        phone: string,
        private department: Department
    ) {
        super(userId, firstName, lastName, email, password, phone);
    }

    public uploadAssignment(classroom: Classroom, assignment: Assignment): void {
        this.assignments.push(assignment); // Add to teacher's list
        classroom.getAssignments().push(assignment); // Add to classroom's list
        console.log(`Assignment "${assignment.title}" uploaded by ${this.getFullName()} to classroom "${classroom.getName()}".`);
    }

    public uploadStudyMaterial(classroom: Classroom, material: StudyMaterial): void {
        this.studyMaterials.push(material); // Add to teacher's list
        classroom.getStudyMaterials().push(material); // Add to classroom's list
        console.log(`Study material "${material.title}" uploaded by ${this.getFullName()} to classroom "${classroom.getName()}".`);
    }

    public returnGrade(classroom: Classroom, grade: Grade): Grade {
        this.grades.push(grade); // Add to teacher's list
        classroom.getGrades().push(grade); // Add to classroom's list
        console.log(`Grade returned by ${this.getFullName()} for student ${grade.studentID} on assignment ${grade.assignmentID}.`);
        return grade;
    }

    public getAssignments(): Assignment[] {
        return this.assignments;
    }

    public getStudyMaterials(): StudyMaterial[] {
        return this.studyMaterials;
    }

    public getGrades(): Grade[] {
        return this.grades;
    }

    
}
