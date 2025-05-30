import type { Assignment } from "./Assignment";
import type { Grade } from "./Grade";
import type { Student } from "./Student";
import type { StudyMaterial } from "./StudyMaterial";
import type { Teacher } from "./Teacher";

export class GoogleClassroom {
    private studyMaterials: StudyMaterial[] = [];
    private assignments: Assignment[] = [];
    private grades: Grade[] = [];
    private teachers :  Teacher[] = [];
    private students : Student[] = [];

    constructor(private name:string){

    }

    public uploadStudyMaterials(studyMaterial:StudyMaterial):void {

    }

    public downloadStudyMaterial(studyMaterial:StudyMaterial):StudyMaterial{

    }

    public uploadAssignments(assignment:Assignment):void {

    }

    public submitAssignment(assignment:Assignment) {

    }

    public returnGrade(grade:Grade):Grade {

    }
}