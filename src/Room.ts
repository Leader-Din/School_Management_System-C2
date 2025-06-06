export class Room {
    classNames: string[] = [];
    classLocation: string;

  constructor(classNames: string[], classLocation: string) {
    this.classLocation = classLocation;
    this.classNames = classNames;
  }
}