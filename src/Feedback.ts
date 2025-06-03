// Feedback.ts
export class Feedback {
  constructor(
    public subjectID: number,
    public comment: string = "",
    public rating: string = ""
  ) {}

  addComment(comment: string): void {
    this.comment = comment;
    console.log(`Comment added to subject ${this.subjectID}: "${comment}"`);
  }

  addRating(rating: string): void {
    this.rating = rating;
    console.log(`Rating "${rating}" added to subject ${this.subjectID}`);
  }
}