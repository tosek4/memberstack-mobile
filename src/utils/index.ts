const DAY = 24 * 60 * 60 * 1000;

/** Whole days left until the date (0 or negative = expired). */
export const daysLeft = (isoDate: string): number =>
  Math.ceil((new Date(isoDate).getTime() - Date.now()) / DAY);

export function formatCheckInDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatCheckInTime(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "--:--";
  }

  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
