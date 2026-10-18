const DAY = 24 * 60 * 60 * 1000;

/** Whole days left until the date (0 or negative = expired). */
export const daysLeft = (isoDate: string): number =>
  Math.ceil((new Date(isoDate).getTime() - Date.now()) / DAY);
