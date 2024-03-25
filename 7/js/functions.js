// Функция для проверки длины строки
// eslint-disable-next-line no-unused-vars
function stringCheker (string , number) {
  if (string.length < number) {
    return true;
  }
  return false;
}

// Функция для проверки, является ли строка палиндромом
// eslint-disable-next-line no-unused-vars
function palidrome(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join('');
}

// Функция преобразования строки в минуты
const convertTimeToNumber = (timeString) => {
  const timeParts = timeString.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  return hours * 60 + minutes;
};


// Функция проверки, что встреча не выходит за рамки рабочего дня
const isEnoughTime = (startDay, endDay, startMeeting, meetingDuration) => {
  const startDayInMinutes = convertTimeToNumber(startDay);
  const endDayInMinutes = convertTimeToNumber(endDay);
  const startMeetingInMinutes = convertTimeToNumber(startMeeting);
  return startMeetingInMinutes >= startDayInMinutes && (endDayInMinutes - startMeetingInMinutes) >= meetingDuration;
};

// eslint-disable-next-line no-console
console.log(isEnoughTime('08:00', '17:30', '14:00', 90));
// eslint-disable-next-line no-console
console.log(isEnoughTime('8:0', '10:0', '8:0', 120));
// eslint-disable-next-line no-console
console.log(isEnoughTime('08:00', '14:30', '14:00', 90));
// eslint-disable-next-line no-console
console.log(isEnoughTime('14:00', '17:30', '08:0', 90));
// eslint-disable-next-line no-console
console.log(isEnoughTime('8:00', '17:30', '08:00', 900));


