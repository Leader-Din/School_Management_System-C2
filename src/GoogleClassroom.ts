import type { Assignment } from "./Assignment";
import type { Grade } from "./Grade";
import type { StudyMaterial } from "./StudyMaterial";

export class GoogleClassroom {
    private studyMaterials: StudyMaterial[] = [];
    private assignments: Assignment[] = [];
    private grades: Grade[] = [];
    private teachers : Teacher [] = [];
    private students : Student[] = [];

    constructor(private name:string){
        
    }
}