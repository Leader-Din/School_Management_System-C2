// Room.ts
export class Room {
  constructor(public className: string, public classLocation: string) {}

  public addRoom(className: string, classLocation: string): void {
    this.className = className;
    this.classLocation = classLocation;
  }
}
