const currentDateTimeText = document.getElementById("currentDateTime"); //current date and time text
const currentDateTimeUtcText = document.getElementById("currentDateTimeUtc"); //current date and time in UTC text
const currentProgressText = document.getElementById("currentProgress"); //current progress text
const currentDateTime = new Date(); //current date and time
const currentUtcDateTime = new Date(
    currentDateTime.getUTCFullYear(),
    currentDateTime.getUTCMonth(),
    currentDateTime.getUTCDate(),
    currentDateTime.getUTCHours(),
    currentDateTime.getUTCMinutes(),
    currentDateTime.getUTCSeconds(),
); //current date and time in UTC
currentDateTimeText.textContent = `${currentDateTime.toLocaleString()}`; //set current date and time text
currentDateTimeUtcText.textContent = `${currentDateTime.toUTCString()}`; //set current date and time in UTC text
const currentYear = currentDateTime.getFullYear(); //current year
const currentUtcYear = currentDateTime.getUTCFullYear(); //current year in UTC
const currentMonth = currentDateTime.getMonth(); //current month
const currentUtcMonth = currentDateTime.getUTCMonth(); //current month in UTC
const currentDate = currentDateTime.getDate(); //current date
const currentUtcDate = currentDateTime.getUTCDate(); //current date in UTC
const currentDay = currentDateTime.getDay(); //current day of week
const currentUtcDay = currentDateTime.getUTCDay(); //current day of week in UTC
const currentHour = currentDateTime.getHours(); //current hour
const currentUtcHour = currentDateTime.getUTCHours(); //current hour in UTC
const currentMinute = currentDateTime.getMinutes(); //current minute
const currentUtcMinute = currentDateTime.getUTCMinutes(); //current minute in UTC
const currentSecond = currentDateTime.getSeconds(); //current second
const currentUtcSecond = currentDateTime.getUTCSeconds(); //current second in UTC
const currentMillisecond = currentDateTime.getMilliseconds(); //current millisecond
const currentUtcMillisecond = currentDateTime.getUTCMilliseconds(); //current millisecond in UTC
const yearStart = new Date(currentYear, 0, 1); //start of year
const yearEnd = new Date(currentYear + 1, 0, 1); //end of year
const yearStartUtc = new Date(currentUtcYear, 0, 1); //start of year in UTC
const yearEndUtc = new Date(currentUtcYear + 1, 0, 0); //end of year in UTC
const monthStart = new Date(currentYear, currentMonth, 1); //start of month
const monthEnd = new Date(currentYear, currentMonth + 1, 0); //end of month
const monthStartUtc = new Date(currentUtcYear, currentUtcMonth, 1); //start of month in UTC
const monthEndUtc = new Date(currentUtcYear, currentUtcMonth + 1, 0); //end of month in UTC
const dayStart = new Date(currentYear, currentMonth, currentDate); //start of day
const dayEnd = new Date(currentYear, currentMonth, currentDate + 1); //end of day
const dayStartUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate); //start of day in UTC
const dayEndUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate + 1); //end of day in UTC
const hourStart = new Date(currentYear, currentMonth, currentDate, currentHour); //start of hour
const hourEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour + 1,
); //end of hour
const hourStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
); //start of hour in UTC
const hourEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour + 1,
); //end of hour in UTC
const minuteStart = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
); //start of minute
const minuteEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute + 1,
); //end of minute
const minuteStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
); //start of minute in UTC
const minuteEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute + 1,
); //end of minute in UTC
const secondStart = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
    currentSecond,
); //start of second
const secondEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
    currentSecond + 1,
); //end of second
const secondStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
    currentUtcSecond,
); //start of second in UTC
const secondEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
    currentUtcSecond + 1,
); //end of second in UTC
const yearProgress = (currentDateTime - yearStart) / (yearEnd - yearStart); //year progress
const yearProgressUtc =
    (currentUtcDateTime - yearStartUtc) / (yearEndUtc - yearStartUtc); //year progress in UTC
const monthProgress = (currentDateTime - monthStart) / (monthEnd - monthStart); //month progress
const monthProgressUtc =
    (currentUtcDateTime - monthStartUtc) / (monthEndUtc - monthStartUtc); //month progress in UTC
const dayProgress = (currentDateTime - dayStart) / (dayEnd - dayStart); //day progress
const dayProgressUtc =
    (currentUtcDateTime - dayStartUtc) / (dayEndUtc - dayStartUtc); //day progress in UTC
const hourProgress = (currentDateTime - hourStart) / (hourEnd - hourStart); //hour progress
const hourProgressUtc =
    (currentUtcDateTime - hourStartUtc) / (hourEndUtc - hourStartUtc); //hour progress in UTC
const minuteProgress =
    (currentDateTime - minuteStart) / (minuteEnd - minuteStart); //minute progress
const minuteProgressUtc =
    (currentUtcDateTime - minuteStartUtc) / (minuteEndUtc - minuteStartUtc); //minute progress in UTC
const secondProgress =
    (currentDateTime - secondStart) / (secondEnd - secondStart); //second progress
const secondProgressUtc =
    (currentUtcDateTime - secondStartUtc) / (secondEndUtc - secondStartUtc); //second progress in UTC
const yearProgressText = document.getElementById("yearProgress"); //year progress text
const monthProgressText = document.getElementById("monthProgress"); //month progress text
const dayProgressText = document.getElementById("dayProgress"); //day progress text
const hourProgressText = document.getElementById("hourProgress"); //hour progress text
const minuteProgressText = document.getElementById("minuteProgress"); //minute progress text
const secondProgressText = document.getElementById("secondProgress"); //second progress text
yearProgressText.value = yearProgress; //set year progress text
monthProgressText.value = monthProgress; //set month progress text
dayProgressText.value = dayProgress; //set day progress text
hourProgressText.value = hourProgress; //set hour progress text
minuteProgressText.value = minuteProgress; //set minute progress text
secondProgressText.value = secondProgress; //set second progress text
currentProgressText.textContent = `Year progress: ${yearProgress} (${yearProgressUtc})\nMonth progress: ${monthProgress} (${monthProgressUtc})\nDay progress: ${dayProgress} (${dayProgressUtc})\nHour progress: ${hourProgress} (${hourProgressUtc})\nMinute progress: ${minuteProgress} (${minuteProgressUtc})\nSecond progress: ${secondProgress} (${secondProgressUtc})`; //set current progress text based on current date and time progress
