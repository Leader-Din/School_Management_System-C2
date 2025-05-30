import type { Department } from "./Department";
import { User } from "./User";
export class Teacher extends User {
   constructor (

    userId : number, firstName : string, lastName : string, email : string, password : string, phone : string, private department : Department 
   ) {
    super (userId, firstName, lastName, email, password, password)
   }


}