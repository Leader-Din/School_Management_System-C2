import { SchoolManagementSystem } from "./src/SchoolManagementSystem";
import { Exam } from "./src/Exam";
import { Grade } from "./src/Grade";
import { Subject } from "./src/Subject";
import { Teacher } from "./src/Teacher";
import { Room } from "./src/Room";
import { Classroom } from "./src/Classroom";
import { GoogleClassroom } from "./src/GoogleClassroom";
import { Assignment } from "./src/Assignment";
import { StudyMaterial } from "./src/StudyMaterial";
import { Feedback } from "./src/Feedback";
import { Department } from "./src/Department";
import { TimeTable } from "./src/TimeTable";
import { Student } from "./src/Student";
import { ExamScore } from "./src/ExamScore";
import { Admin } from "./src/Admin";
import { SubjectResult } from "./src/SubjectResult";
import { StudentExamReport } from "./src/StudentExamReport";


/// ****************************************************___AssignmentSchoolManagementSystem___**********************************************************************
// Create the object
const school = new SchoolManagementSystem(
  "Golden Future High School",
  "123 Education Street, Phnom Penh",
  "012 345 678"
);

// View school details
console.log(school.viewSchoolDetails());


// *************************************************************___Department___************************************************************************************
const dept = new Department(["Computer Science"]);
console.log(dept);


// ***************************************************************___Teacher___************************************************************************************
const teacher = new Teacher(
  1,                         
  "Lynak",                    
  "Khat",                     
  "lynak@example.com",       
  "password123",              
  "098765432",                
  dept          
);

// Add teacher to department
dept.addTeacher(teacher);

// test
console.log("Teacher Created:");
console.log(`ID: ${teacher.getId?.() ?? teacher["userId"]}`);
console.log(`Name: ${teacher.getFullName()}`);
console.log(`Email: ${teacher["email"]}`);


// *************************************************************___Assignment___************************************************************************************

const assignment = new Assignment(
  1,                                 
  "Build a Portfolio Website",       
  "Create a personal portfolio website using HTML, CSS, and JS.", 
  new Date(2025, 6, 15),             
  "WD101"                           
);

// test
console.log(assignment.getDetails());


// *************************************************************___Subject___************************************************************************************

const subject = new Subject(
  101,                 
  "Web Development",   
  "WD101",             
  [teacher]           
);

// test
console.log("Subject Created:");
console.log("Subject Name:", subject.name);


// *************************************************************___Student___************************************************************************************
const student = new Student(
  1,                    
  "John",              
  "Doe",               
  "john.doe@example.com", 
  "securePassword123",  
  "+1234567890"        
);

// Set timetable and classrooms after creation
// student.setTimetable(myTimeTable);
// student.setClassrooms([classroom1, classroom2]);

// test
console.log(student.viewTimetable());
console.log(student.viewStudyMaterial());


// *************************************************************___Admin___************************************************************************************

const admin = new Admin(
  1001,
  "AdminFirstName",
  "AdminLastName",
  "admin@example.com",
  "adminPass",
  "+1987654321"
);


// Assign subject and teacher to admin
admin.assignSubjectToStudents(subject);
admin.assignTeacherToStudents(teacher);

console.log(admin.subjects);
console.log(admin.teachers);


// *************************************************************___Room___************************************************************************************

const room1 = new Room(["Room A101"], "Building 1, First Floor");
const room2 = new Room(["Room B202"], "Building 2, Second Floor");

console.log(room1);
console.log(room2);


// *************************************************************___Exam___************************************************************************************

// Create an Exam object
const exam1 = new Exam(
  [subject],             
  "Midterm Exam",                  
  new Date("2025-06-15T09:00:00"), // exam date
  room1                        
);

console.log(exam1);


// ***********************************************************___TimeTable___************************************************************************************

// Create the TimeTable object
const timetable = new TimeTable(
  new Date("2025-06-01T08:00:00"),  
  [room1, room2],                   
  subject                         
);

timetable.addExamSchedule(exam1);

console.log(timetable);


// *********************************************************___GoogleClassroom___************************************************************************************

// Create a GoogleClassroom instance
const googleClassroom = new GoogleClassroom();

// Create a new classroom
googleClassroom.createClassroom("Physics 101");

// Get all classrooms
const classrooms = googleClassroom.getAllClassrooms();

console.log(classrooms);

// ***********************************************************___Classroom___************************************************************************************

const myClassroom = new Classroom("Math 101");

console.log(myClassroom);


// **********************************************************___StudyMaterial___************************************************************************************

const material = new StudyMaterial("Introduction to Web Development", [
  "HTML Basics",
  "CSS Styling",
  "JavaScript Introduction"
]);


// *************************************************************___Grade___************************************************************************************
const grade = new Grade(
  101,           
  2025,         
  95,           
  "Excellent work, keep it up!"  
);

// Display grade details
grade.showGrade();


// *************************************************************___Feedback___************************************************************************************
// Create a feedback object for a subject with ID 101
const feedback = new Feedback(101);

// Add a comment to the subject
feedback.addCommentToSubject(101, "This subject is very interesting and well taught.");

// Add a rating to the subject
feedback.addRatingToSubject(101, "Excellent");

// Log the current state of the feedback
console.log("Feedback Details:");
console.log(`Subject ID: ${feedback.subjectID}`);
console.log(`Comment: ${feedback.comment}`);
console.log(`Rating: ${feedback.rating}`);


// *************************************************************___ExamScore___************************************************************************************
// Now create an ExamScore object
const examScore = new ExamScore(exam1, 88);


// ***********************************************************___SubjectResult___************************************************************************************
// Create SubjectResult object
const subjectResult = new SubjectResult(subject);

// Add exam scores to subject result
subjectResult.addExamScore(examScore);

// Show results
subjectResult.showResult();


// ***********************************************************___StudentExamReport___*********************************************************************************
// Create StudentExamReport and add SubjectResults
const report = new StudentExamReport(student);
report.addSubjectResult(subjectResult);

// Show the full report
report.showFullReport();






