export class SchoolManagementSystem {
    constructor (private name : string, private address : string, private contact : string) {}

    public viewSchoolDetails() : string {
        return `School Name: ${this.name}, Address: ${this.address}, Contact: ${this.contact}`;
    }
}