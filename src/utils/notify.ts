// src/utils/notify.ts

let scheduled: any[] = [];

// Ask browser for notification permission
export function ensureNotificationPermission() {
  if (!("Notification" in window)) {
    console.warn("Browser does not support notifications");
    return;
  }

  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
}

// Clear previously scheduled timers
export function clearScheduledNotifications() {
  scheduled.forEach((id) => clearTimeout(id));
  scheduled = [];
}

// Schedule notifications for all compartments
export function scheduleNotifications(comps: any[]) {
  clearScheduledNotifications();

  comps.forEach((comp, compIndex) => {
    comp.doses.forEach((dose: any) => {
      const delay = dose.ts * 1000 - Date.now();
      if (delay > 0) {
        const id = setTimeout(() => {
          new Notification(`PillBox Reminder`, {
            body: `Compartment ${compIndex + 1} — time to take your medicine!`,
          });
        }, delay);

        scheduled.push(id);
      }
    });
  });
}
