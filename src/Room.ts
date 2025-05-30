export class Room {
    classNames: string[] = [];
    classLocation: string;

  constructor(classLocation: string) {
    this.classLocation = classLocation;
  }
  addRoom(className: string, classLocation: string): void {
    if (this.classLocation !== classLocation) {
      console.log(`Warning: Room already has location set to ${this.classLocation}.`);
    }
    if (!this.classNames.includes(className)) {
      this.classNames.push(className);
      console.log(`Class "${className}" added to room at ${this.classLocation}`);
    } else {
      console.log(`Class "${className}" already exists in this room.`);
    }
  }
}

