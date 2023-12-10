/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(date: DayOfWeek): boolean {
  if (date === DayOfWeek.Saturday || date === DayOfWeek.Sunday)
    return true;
  return false;
}