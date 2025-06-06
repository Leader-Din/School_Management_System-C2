// Notification.ts

import { TimeTable } from "./TimeTable";
export class Notification {
  public alertMessageBeforeClass5Minute(timeTable: TimeTable): void {
    const classTime = timeTable.getTime();
    const now = new Date();
    const diffMs = classTime.getTime() - now.getTime();
    const diffMins = Math.round(diffMs / (1000 * 60));

    if (diffMins <= 5 && diffMins > 0) {
      console.log(`Reminder: Class "${timeTable.getSubject()}" in room "${timeTable.getRoom()}" starts in ${diffMins} minutes!`);
    }
  }
}
