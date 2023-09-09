
// JavaScript code to update real-time data
const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Function to update the current day of the week
function updateCurrentDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    currentDayOfTheWeekElement.textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateCurrentUTCTime() {
    const currentTime = new Date().toUTCString();
    currentUTCTimeElement.textContent = currentTime;
}

// Update data every second (simulated real-time)
setInterval(updateCurrentDayOfTheWeek, 1000);
setInterval(updateCurrentUTCTime, 1000);

// Initial updates
updateCurrentDayOfTheWeek();
updateCurrentUTCTime();
