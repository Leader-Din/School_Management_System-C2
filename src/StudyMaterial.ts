// StudyMaterial.ts
export class StudyMaterial {
  constructor(public title: string, public content: string[]) {}

  uploadStudyMaterial(title: string, content: string[]): void {
    this.title = title;
    this.content = content;
  }

  showMaterial(): void {
    console.log(`Title: ${this.title}`);
    console.log("Content:");
    for (const item of this.content) {
      console.log(`- ${item}`);
    }
  }
}