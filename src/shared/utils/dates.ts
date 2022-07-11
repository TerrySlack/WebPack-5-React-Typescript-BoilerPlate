// Using Intl.DateTimeFormat()
export const getDateFromMilliseconds = (milliseconds: number) =>
  new Date(milliseconds).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  });
