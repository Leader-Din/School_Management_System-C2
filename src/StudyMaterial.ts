export class StudyMaterial {
  title: string;
  content: string[];

  constructor(title: string, content: string[]) {
    this.title = title;
    this.content = content;
  }

  uploadStudyMaterial(title: string, content: string[]): void {
    this.title = title;
    this.content = content;
  }

  // Optional: method to display content
  showMaterial(): void {
    console.log(`Title: ${this.title}`);
    console.log("Content:");
    for (let i = 0; i < this.content.length; i++) {
      console.log(`- ${this.content[i]}`);
    }
  }
}
