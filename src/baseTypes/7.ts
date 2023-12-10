/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum customDate {
  date = new Date().getDay(),
}

function isWeekend(date: customDate): boolean {
  if (date === 0 || date === 6)
    return true;
  return false;
}