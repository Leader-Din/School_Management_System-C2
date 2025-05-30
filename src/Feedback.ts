export class Feedback{
    subjectID: number;
    comment: string;
    rating: string;

    constructor(subjectID: number) {
        this.subjectID = subjectID;
        this.comment = "";
        this.rating = "";
    }
    addCommentToSubject(subjectID: number, comment: string): void {
    if (this.subjectID === subjectID) {
      this.comment = comment;
      console.log(`Comment added to subject ${subjectID}: "${comment}"`);
    } else {
      console.log(`Subject ID ${subjectID} does not match this feedback entry.`);
    }
  }

  addRatingToSubject(subjectID: number, rating: string): void {
    if (this.subjectID === subjectID) {
      this.rating = rating;
      console.log(`Rating "${rating}" added to subject ${subjectID}`);
    } else {
      console.log(`Subject ID ${subjectID} does not match this feedback entry.`);
    }
  }
}

