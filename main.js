const currentDateTimeText = document.getElementById("currentDateTime");
const currentDateTimeUtcText = document.getElementById("currentDateTimeUtc");
const currentProgressText = document.getElementById("currentProgress");
const currentDateTime = new Date();
const currentUtcDateTime = new Date(
    currentDateTime.getUTCFullYear(),
    currentDateTime.getUTCMonth(),
    currentDateTime.getUTCDate(),
    currentDateTime.getUTCHours(),
    currentDateTime.getUTCMinutes(),
    currentDateTime.getUTCSeconds(),
);
currentDateTimeText.textContent = `${currentDateTime.toLocaleString()}`;
currentDateTimeUtcText.textContent = `${currentDateTime.toUTCString()}`;
const currentYear = currentDateTime.getFullYear();
const currentUtcYear = currentDateTime.getUTCFullYear();
const currentMonth = currentDateTime.getMonth();
const currentUtcMonth = currentDateTime.getUTCMonth();
const currentDate = currentDateTime.getDate();
const currentUtcDate = currentDateTime.getUTCDate();
const currentDay = currentDateTime.getDay();
const currentUtcDay = currentDateTime.getUTCDay();
const currentHour = currentDateTime.getHours();
const currentUtcHour = currentDateTime.getUTCHours();
const currentMinute = currentDateTime.getMinutes();
const currentUtcMinute = currentDateTime.getUTCMinutes();
const currentSecond = currentDateTime.getSeconds();
const currentUtcSecond = currentDateTime.getUTCSeconds();
const currentMillisecond = currentDateTime.getMilliseconds();
const currentUtcMillisecond = currentDateTime.getUTCMilliseconds();
const yearStart = new Date(currentYear, 0, 1);
const yearEnd = new Date(currentYear + 1, 0, 1);
const yearStartUtc = new Date(currentUtcYear, 0, 1);
const yearEndUtc = new Date(currentUtcYear + 1, 0, 0);
const monthStart = new Date(currentYear, currentMonth, 1);
const monthEnd = new Date(currentYear, currentMonth + 1, 0);
const monthStartUtc = new Date(currentUtcYear, currentUtcMonth, 1);
const monthEndUtc = new Date(currentUtcYear, currentUtcMonth + 1, 0);
const dayStart = new Date(currentYear, currentMonth, currentDate);
const dayEnd = new Date(currentYear, currentMonth, currentDate + 1);
const dayStartUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate);
const dayEndUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate + 1);
const hourStart = new Date(currentYear, currentMonth, currentDate, currentHour);
const hourEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour + 1,
);
const hourStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
);
const hourEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour + 1,
);
const minuteStart = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
);
const minuteEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute + 1,
);
const minuteStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
);
const minuteEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute + 1,
);
const secondStart = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
    currentSecond,
);
const secondEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
    currentSecond + 1,
);
const secondStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
    currentUtcSecond,
);
const secondEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
    currentUtcSecond + 1,
);
const yearProgress = (currentDateTime - yearStart) / (yearEnd - yearStart);
const yearProgressUtc =
    (currentUtcDateTime - yearStartUtc) / (yearEndUtc - yearStartUtc);
const monthProgress = (currentDateTime - monthStart) / (monthEnd - monthStart);
const monthProgressUtc =
    (currentUtcDateTime - monthStartUtc) / (monthEndUtc - monthStartUtc);
const dayProgress = (currentDateTime - dayStart) / (dayEnd - dayStart);
const dayProgressUtc =
    (currentUtcDateTime - dayStartUtc) / (dayEndUtc - dayStartUtc);
const hourProgress = (currentDateTime - hourStart) / (hourEnd - hourStart);
const hourProgressUtc =
    (currentUtcDateTime - hourStartUtc) / (hourEndUtc - hourStartUtc);
const minuteProgress =
    (currentDateTime - minuteStart) / (minuteEnd - minuteStart);
const minuteProgressUtc =
    (currentUtcDateTime - minuteStartUtc) / (minuteEndUtc - minuteStartUtc);
const secondProgress =
    (currentDateTime - secondStart) / (secondEnd - secondStart);
const secondProgressUtc =
    (currentUtcDateTime - secondStartUtc) / (secondEndUtc - secondStartUtc);
currentProgressText.textContent = `Year progress: ${yearProgress} (${yearProgressUtc})\nMonth progress: ${monthProgress} (${monthProgressUtc})\nDay progress: ${dayProgress} (${dayProgressUtc})\nHour progress: ${hourProgress} (${hourProgressUtc})\nMinute progress: ${minuteProgress} (${minuteProgressUtc})\nSecond progress: ${secondProgress} (${secondProgressUtc})`;
