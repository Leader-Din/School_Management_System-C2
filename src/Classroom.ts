import { Assignment } from "./Assignment";
import { Grade } from "./Grade";
import { Student } from "./Student";
import { StudyMaterial } from "./StudyMaterial";
import { Teacher } from "./Teacher";

export class Classroom {
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
