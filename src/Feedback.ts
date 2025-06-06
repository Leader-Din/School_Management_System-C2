// Feedback.ts
export class Feedback {
  constructor(
    public subjectID: number,
    public comment: string = "",
    public rating: string = ""
  ) {}

  addCommentToSubject(subjectID: number, comment: string): void {
    this.subjectID = subjectID;
    this.comment = comment;
    console.log(`Comment added to subject ${this.subjectID}: "${comment}"`);
  }

  addRatingToSubject(subjectID: number, rating: string): void {
    this.subjectID = subjectID;
    this.rating = rating;
    console.log(`Rating "${rating}" added to subject ${this.subjectID}`);
  }
}