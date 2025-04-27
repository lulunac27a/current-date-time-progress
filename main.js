const currentDateTimeText = document.getElementById("currentDateTime"); //current date and time text
const currentDateTimeUtcText = document.getElementById("currentDateTimeUtc"); //current date and time in UTC text
const currentProgressText = document.getElementById("currentProgress"); //current progress text
const updateDateTimeButton = document.getElementById("updateDateTime"); //update date and time button
const updateDateTimeUtcButton = document.getElementById("updateUtcDateTime"); //update date and time in UTC button
let currentDateTime = new Date(); //current date and time
let currentUtcDateTime = new Date(
    currentDateTime.getUTCFullYear(),
    currentDateTime.getUTCMonth(),
    currentDateTime.getUTCDate(),
    currentDateTime.getUTCHours(),
    currentDateTime.getUTCMinutes(),
    currentDateTime.getUTCSeconds(),
); //current date and time in UTC
const updateCurrentDateTime = () => {
    //function to update current date and time
    currentDateTime = new Date(); //current date and time
    currentUtcDateTime = new Date(
        currentDateTime.getUTCFullYear(),
        currentDateTime.getUTCMonth(),
        currentDateTime.getUTCDate(),
        currentDateTime.getUTCHours(),
        currentDateTime.getUTCMinutes(),
        currentDateTime.getUTCSeconds(),
    ); //current date and time in UTC
};
currentDateTimeText.textContent = `${currentDateTime.toLocaleString()}`; //set current date and time text
currentDateTimeUtcText.textContent = `${currentDateTime.toUTCString()}`; //set current date and time in UTC text
let currentYear = currentDateTime.getFullYear(); //current year
let currentUtcYear = currentDateTime.getUTCFullYear(); //current year in UTC
let currentMonth = currentDateTime.getMonth(); //current month
let currentUtcMonth = currentDateTime.getUTCMonth(); //current month in UTC
let currentDate = currentDateTime.getDate(); //current date
let currentUtcDate = currentDateTime.getUTCDate(); //current date in UTC
let currentDay = currentDateTime.getDay(); //current day of week
let currentUtcDay = currentDateTime.getUTCDay(); //current day of week in UTC
let currentHour = currentDateTime.getHours(); //current hour
let currentUtcHour = currentDateTime.getUTCHours(); //current hour in UTC
let currentMinute = currentDateTime.getMinutes(); //current minute
let currentUtcMinute = currentDateTime.getUTCMinutes(); //current minute in UTC
let currentSecond = currentDateTime.getSeconds(); //current second
let currentUtcSecond = currentDateTime.getUTCSeconds(); //current second in UTC
let yearStart = new Date(currentYear, 0, 1); //start of year
let yearEnd = new Date(currentYear + 1, 0, 1); //end of year
let yearStartUtc = new Date(currentUtcYear, 0, 1); //start of year in UTC
let yearEndUtc = new Date(currentUtcYear + 1, 0, 0); //end of year in UTC
let monthStart = new Date(currentYear, currentMonth, 1); //start of month
let monthEnd = new Date(currentYear, currentMonth + 1, 0); //end of month
let monthStartUtc = new Date(currentUtcYear, currentUtcMonth, 1); //start of month in UTC
let monthEndUtc = new Date(currentUtcYear, currentUtcMonth + 1, 0); //end of month in UTC
let weekStart = new Date(currentYear, currentMonth, currentDate - currentDay); //start of week
let weekEnd = new Date(
    currentYear,
    currentMonth,
    currentDate + (7 - currentDay),
); //end of week
let weekStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate - currentUtcDay,
); //start of week in UTC
let weekEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate + (7 - currentUtcDay),
); //end of week in UTC
let dayStart = new Date(currentYear, currentMonth, currentDate); //start of day
let dayEnd = new Date(currentYear, currentMonth, currentDate + 1); //end of day
let dayStartUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate); //start of day in UTC
let dayEndUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate + 1); //end of day in UTC
let hourStart = new Date(currentYear, currentMonth, currentDate, currentHour); //start of hour
let hourEnd = new Date(currentYear, currentMonth, currentDate, currentHour + 1); //end of hour
let hourStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
); //start of hour in UTC
let hourEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour + 1,
); //end of hour in UTC
let minuteStart = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
); //start of minute
let minuteEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute + 1,
); //end of minute
let minuteStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
); //start of minute in UTC
let minuteEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute + 1,
); //end of minute in UTC
let secondStart = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
    currentSecond,
); //start of second
let secondEnd = new Date(
    currentYear,
    currentMonth,
    currentDate,
    currentHour,
    currentMinute,
    currentSecond + 1,
); //end of second
let secondStartUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
    currentUtcSecond,
); //start of second in UTC
let secondEndUtc = new Date(
    currentUtcYear,
    currentUtcMonth,
    currentUtcDate,
    currentUtcHour,
    currentUtcMinute,
    currentUtcSecond + 1,
); //end of second in UTC
let yearProgress = (currentDateTime - yearStart) / (yearEnd - yearStart); //year progress
let yearProgressUtc =
    (currentUtcDateTime - yearStartUtc) / (yearEndUtc - yearStartUtc); //year progress in UTC
let monthProgress = (currentDateTime - monthStart) / (monthEnd - monthStart); //month progress
let monthProgressUtc =
    (currentUtcDateTime - monthStartUtc) / (monthEndUtc - monthStartUtc); //month progress in UTC
let weekProgress = (currentDateTime - weekStart) / (weekEnd - weekStart); //week progress
let weekProgressUtc =
    (currentUtcDateTime - weekStartUtc) / (weekEndUtc - weekStartUtc); //week progress in UTC
let dayProgress = (currentDateTime - dayStart) / (dayEnd - dayStart); //day progress
let dayProgressUtc =
    (currentUtcDateTime - dayStartUtc) / (dayEndUtc - dayStartUtc); //day progress in UTC
let hourProgress = (currentDateTime - hourStart) / (hourEnd - hourStart); //hour progress
let hourProgressUtc =
    (currentUtcDateTime - hourStartUtc) / (hourEndUtc - hourStartUtc); //hour progress in UTC
let minuteProgress =
    (currentDateTime - minuteStart) / (minuteEnd - minuteStart); //minute progress
let minuteProgressUtc =
    (currentUtcDateTime - minuteStartUtc) / (minuteEndUtc - minuteStartUtc); //minute progress in UTC
let secondProgress =
    (currentDateTime - secondStart) / (secondEnd - secondStart); //second progress
let secondProgressUtc =
    (currentUtcDateTime - secondStartUtc) / (secondEndUtc - secondStartUtc); //second progress in UTC
const percentage = (number) => (number * 100).toFixed(4) + "%"; //percentage function
const setCurrentDateTime = () => {
    //function to set current date and time
    updateCurrentDateTime(); //update current date and time
    currentYear = currentDateTime.getFullYear(); //current year
    currentUtcYear = currentDateTime.getUTCFullYear(); //current year in UTC
    currentMonth = currentDateTime.getMonth(); //current month
    currentUtcMonth = currentDateTime.getUTCMonth(); //current month in UTC
    currentDate = currentDateTime.getDate(); //current date
    currentUtcDate = currentDateTime.getUTCDate(); //current date in UTC
    currentDay = currentDateTime.getDay(); //current day of week
    currentUtcDay = currentDateTime.getUTCDay(); //current day of week in UTC
    currentHour = currentDateTime.getHours(); //current hour
    currentUtcHour = currentDateTime.getUTCHours(); //current hour in UTC
    currentMinute = currentDateTime.getMinutes(); //current minute
    currentUtcMinute = currentDateTime.getUTCMinutes(); //current minute in UTC
    currentSecond = currentDateTime.getSeconds(); //current second
    currentUtcSecond = currentDateTime.getUTCSeconds(); //current second in UTC
    yearStart = new Date(currentYear, 0, 1); //start of year
    yearEnd = new Date(currentYear + 1, 0, 1); //end of year
    yearStartUtc = new Date(currentUtcYear, 0, 1); //start of year in UTC
    yearEndUtc = new Date(currentUtcYear + 1, 0, 0); //end of year in UTC
    monthStart = new Date(currentYear, currentMonth, 1); //start of month
    monthEnd = new Date(currentYear, currentMonth + 1, 0); //end of month
    monthStartUtc = new Date(currentUtcYear, currentUtcMonth, 1); //start of month in UTC
    monthEndUtc = new Date(currentUtcYear, currentUtcMonth + 1, 0); //end of month in UTC
    weekStart = new Date(currentYear, currentMonth, currentDate - currentDay); //start of week
    weekEnd = new Date(
        currentYear,
        currentMonth,
        currentDate + (7 - currentDay),
    ); //end of week
    weekStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate - currentUtcDay,
    ); //start of week in UTC
    weekEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate + (7 - currentUtcDay),
    ); //end of week in UTC
    dayStart = new Date(currentYear, currentMonth, currentDate); //start of day
    dayEnd = new Date(currentYear, currentMonth, currentDate + 1); //end of day
    dayStartUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate); //start of day in UTC
    dayEndUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate + 1); //end of day in UTC
    hourStart = new Date(currentYear, currentMonth, currentDate, currentHour); //start of hour
    hourEnd = new Date(currentYear, currentMonth, currentDate, currentHour + 1); //end of hour
    hourStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
    ); //start of hour in UTC
    hourEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour + 1,
    ); //end of hour in UTC
    minuteStart = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute,
    ); //start of minute
    minuteEnd = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute + 1,
    ); //end of minute
    minuteStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute,
    ); //start of minute in UTC
    minuteEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute + 1,
    ); //end of minute in UTC
    secondStart = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute,
        currentSecond,
    ); //start of second
    secondEnd = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute,
        currentSecond + 1,
    ); //end of second
    secondStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute,
        currentUtcSecond,
    ); //start of second in UTC
    secondEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute,
        currentUtcSecond + 1,
    ); //end of second in UTC
    yearProgress = (currentDateTime - yearStart) / (yearEnd - yearStart); //year progress
    yearProgressUtc =
        (currentUtcDateTime - yearStartUtc) / (yearEndUtc - yearStartUtc); //year progress in UTC
    monthProgress = (currentDateTime - monthStart) / (monthEnd - monthStart); //month progress
    monthProgressUtc =
        (currentUtcDateTime - monthStartUtc) / (monthEndUtc - monthStartUtc); //month progress in UTC
    weekProgress = (currentDateTime - weekStart) / (weekEnd - weekStart); //week progress
    weekProgressUtc =
        (currentUtcDateTime - weekStartUtc) / (weekEndUtc - weekStartUtc); //week progress in UTC
    dayProgress = (currentDateTime - dayStart) / (dayEnd - dayStart); //day progress
    dayProgressUtc =
        (currentUtcDateTime - dayStartUtc) / (dayEndUtc - dayStartUtc); //day progress in UTC
    hourProgress = (currentDateTime - hourStart) / (hourEnd - hourStart); //hour progress
    hourProgressUtc =
        (currentUtcDateTime - hourStartUtc) / (hourEndUtc - hourStartUtc); //hour progress in UTC
    minuteProgress =
        (currentDateTime - minuteStart) / (minuteEnd - minuteStart); //minute progress
    minuteProgressUtc =
        (currentUtcDateTime - minuteStartUtc) / (minuteEndUtc - minuteStartUtc); //minute progress in UTC
    secondProgress =
        (currentDateTime - secondStart) / (secondEnd - secondStart); //second progress
    secondProgressUtc =
        (currentUtcDateTime - secondStartUtc) / (secondEndUtc - secondStartUtc); //second progress in UTC
    const yearProgressText = document.getElementById("yearProgress"); //year progress text
    const monthProgressText = document.getElementById("monthProgress"); //month progress text
    const weekProgressText = document.getElementById("weekProgress"); //week progress text
    const dayProgressText = document.getElementById("dayProgress"); //day progress text
    const hourProgressText = document.getElementById("hourProgress"); //hour progress text
    const minuteProgressText = document.getElementById("minuteProgress"); //minute progress text
    const secondProgressText = document.getElementById("secondProgress"); //second progress text
    yearProgressText.value = yearProgress; //set year progress text
    monthProgressText.value = monthProgress; //set month progress text
    weekProgressText.value = weekProgress; //set week progress text
    dayProgressText.value = dayProgress; //set day progress text
    hourProgressText.value = hourProgress; //set hour progress text
    minuteProgressText.value = minuteProgress; //set minute progress text
    secondProgressText.value = secondProgress; //set second progress text
    updateProgressText(); //update progress text
};
const setCurrentDateTimeUtc = () => {
    //function to set current date and time in UTC
    updateCurrentDateTime(); //update current date and time
    currentYear = currentDateTime.getFullYear(); //current year
    currentUtcYear = currentDateTime.getUTCFullYear(); //current year in UTC
    currentMonth = currentDateTime.getMonth(); //current month
    currentUtcMonth = currentDateTime.getUTCMonth(); //current month in UTC
    currentDate = currentDateTime.getDate(); //current date
    currentUtcDate = currentDateTime.getUTCDate(); //current date in UTC
    currentDay = currentDateTime.getDay(); //current day of week
    currentUtcDay = currentDateTime.getUTCDay(); //current day of week in UTC
    currentHour = currentDateTime.getHours(); //current hour
    currentUtcHour = currentDateTime.getUTCHours(); //current hour in UTC
    currentMinute = currentDateTime.getMinutes(); //current minute
    currentUtcMinute = currentDateTime.getUTCMinutes(); //current minute in UTC
    currentSecond = currentDateTime.getSeconds(); //current second
    currentUtcSecond = currentDateTime.getUTCSeconds(); //current second in UTC
    yearStart = new Date(currentYear, 0, 1); //start of year
    yearEnd = new Date(currentYear + 1, 0, 1); //end of year
    yearStartUtc = new Date(currentUtcYear, 0, 1); //start of year in UTC
    yearEndUtc = new Date(currentUtcYear + 1, 0, 0); //end of year in UTC
    monthStart = new Date(currentYear, currentMonth, 1); //start of month
    monthEnd = new Date(currentYear, currentMonth + 1, 0); //end of month
    monthStartUtc = new Date(currentUtcYear, currentUtcMonth, 1); //start of month in UTC
    monthEndUtc = new Date(currentUtcYear, currentUtcMonth + 1, 0); //end of month in UTC
    weekStart = new Date(currentYear, currentMonth, currentDate - currentDay); //start of week
    weekEnd = new Date(
        currentYear,
        currentMonth,
        currentDate + (7 - currentDay),
    ); //end of week
    weekStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate - currentUtcDay,
    ); //start of week in UTC
    weekEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate + (7 - currentUtcDay),
    ); //end of week in UTC
    dayStart = new Date(currentYear, currentMonth, currentDate); //start of day
    dayEnd = new Date(currentYear, currentMonth, currentDate + 1); //end of day
    dayStartUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate); //start of day in UTC
    dayEndUtc = new Date(currentUtcYear, currentUtcMonth, currentUtcDate + 1); //end of day in UTC
    hourStart = new Date(currentYear, currentMonth, currentDate, currentHour); //start of hour
    hourEnd = new Date(currentYear, currentMonth, currentDate, currentHour + 1); //end of hour
    hourStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
    ); //start of hour in UTC
    hourEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour + 1,
    ); //end of hour in UTC
    minuteStart = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute,
    ); //start of minute
    minuteEnd = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute + 1,
    ); //end of minute
    minuteStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute,
    ); //start of minute in UTC
    minuteEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute + 1,
    ); //end of minute in UTC
    secondStart = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute,
        currentSecond,
    ); //start of second
    secondEnd = new Date(
        currentYear,
        currentMonth,
        currentDate,
        currentHour,
        currentMinute,
        currentSecond + 1,
    ); //end of second
    secondStartUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute,
        currentUtcSecond,
    ); //start of second in UTC
    secondEndUtc = new Date(
        currentUtcYear,
        currentUtcMonth,
        currentUtcDate,
        currentUtcHour,
        currentUtcMinute,
        currentUtcSecond + 1,
    ); //end of second in UTC
    yearProgress = (currentDateTime - yearStart) / (yearEnd - yearStart); //year progress
    yearProgressUtc =
        (currentUtcDateTime - yearStartUtc) / (yearEndUtc - yearStartUtc); //year progress in UTC
    monthProgress = (currentDateTime - monthStart) / (monthEnd - monthStart); //month progress
    monthProgressUtc =
        (currentUtcDateTime - monthStartUtc) / (monthEndUtc - monthStartUtc); //month progress in UTC
    weekProgress = (currentDateTime - weekStart) / (weekEnd - weekStart); //week progress
    weekProgressUtc =
        (currentUtcDateTime - weekStartUtc) / (weekEndUtc - weekStartUtc); //week progress in UTC
    dayProgress = (currentDateTime - dayStart) / (dayEnd - dayStart); //day progress
    dayProgressUtc =
        (currentUtcDateTime - dayStartUtc) / (dayEndUtc - dayStartUtc); //day progress in UTC
    hourProgress = (currentDateTime - hourStart) / (hourEnd - hourStart); //hour progress
    hourProgressUtc =
        (currentUtcDateTime - hourStartUtc) / (hourEndUtc - hourStartUtc); //hour progress in UTC
    minuteProgress =
        (currentDateTime - minuteStart) / (minuteEnd - minuteStart); //minute progress
    minuteProgressUtc =
        (currentUtcDateTime - minuteStartUtc) / (minuteEndUtc - minuteStartUtc); //minute progress in UTC
    secondProgress =
        (currentDateTime - secondStart) / (secondEnd - secondStart); //second progress
    secondProgressUtc =
        (currentUtcDateTime - secondStartUtc) / (secondEndUtc - secondStartUtc); //second progress in UTC
    const yearProgressText = document.getElementById("yearProgress"); //year progress text
    const monthProgressText = document.getElementById("monthProgress"); //month progress text
    const weekProgressText = document.getElementById("weekProgress"); //week progress text
    const dayProgressText = document.getElementById("dayProgress"); //day progress text
    const hourProgressText = document.getElementById("hourProgress"); //hour progress text
    const minuteProgressText = document.getElementById("minuteProgress"); //minute progress text
    const secondProgressText = document.getElementById("secondProgress"); //second progress text
    yearProgressText.value = yearProgressUtc; //set year progress text
    monthProgressText.value = monthProgressUtc; //set month progress text
    weekProgressText.value = weekProgressUtc; //set week progress text
    dayProgressText.value = dayProgressUtc; //set day progress text
    hourProgressText.value = hourProgressUtc; //set hour progress text
    minuteProgressText.value = minuteProgressUtc; //set minute progress text
    secondProgressText.value = secondProgressUtc; //set second progress text
    updateProgressText(); //update progress text
};
const updateProgressText = () => {
    //function to update progress text
    yearProgressUtc =
        (currentUtcDateTime - yearStartUtc) / (yearEndUtc - yearStartUtc);
    monthProgressUtc =
        (currentUtcDateTime - monthStartUtc) / (monthEndUtc - monthStartUtc);
    weekProgressUtc =
        (currentUtcDateTime - weekStartUtc) / (weekEndUtc - weekStartUtc);
    dayProgressUtc =
        (currentUtcDateTime - dayStartUtc) / (dayEndUtc - dayStartUtc);
    hourProgressUtc =
        (currentUtcDateTime - hourStartUtc) / (hourEndUtc - hourStartUtc);
    minuteProgressUtc =
        (currentUtcDateTime - minuteStartUtc) / (minuteEndUtc - minuteStartUtc);
    secondProgressUtc =
        (currentUtcDateTime - secondStartUtc) / (secondEndUtc - secondStartUtc);
    currentProgressText.textContent = `Year progress: ${percentage(yearProgress)} (${percentage(yearProgressUtc)})
Month progress: ${percentage(monthProgress)} (${percentage(monthProgressUtc)})
Week progress: ${percentage(weekProgress)} (${percentage(weekProgressUtc)})
Day progress: ${percentage(dayProgress)} (${percentage(dayProgressUtc)})
Hour progress: ${percentage(hourProgress)} (${percentage(hourProgressUtc)})
Minute progress: ${percentage(minuteProgress)} (${percentage(minuteProgressUtc)})
Second progress: ${percentage(secondProgress)} (${percentage(secondProgressUtc)})`; //set current progress text based on current date and time progress
};
window.onload = () => {
    setCurrentDateTime();
}; //set current date and time when page is loaded
updateDateTimeButton.onclick = () => {
    setCurrentDateTime();
}; //update date and time when button is clicked
updateDateTimeUtcButton.onclick = () => {
    setCurrentDateTimeUtc();
}; //update date and time in UTC when button is clicked
